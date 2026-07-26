import { Resend } from 'resend';

interface ContactBody {
  name?: string;
  email?: string;
  restaurant?: string;
  subject?: string;
  message?: string;
  website?: string;
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event);

  // Бот заполнил скрытое поле — имитируем успешную отправку
  if (body.website) {
    return { success: true };
  }

  const name = body.name?.trim();
  const email = body.email?.trim();
  const restaurant = body.restaurant?.trim();
  const subject = body.subject?.trim();
  const message = body.message?.trim();

  if (!name || !email || !subject || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Wypełnij wymagane pola.',
    });
  }

  if (
    name.length > 100 ||
    email.length > 254 ||
    (restaurant?.length ?? 0) > 150 ||
    subject.length > 150 ||
    message.length > 5000
  ) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Przekroczono dozwoloną długość wiadomości.',
    });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Podaj prawidłowy adres e-mail.',
    });
  }

  const config = useRuntimeConfig();

  if (!config.resendApiKey || !config.contactEmail) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Brak konfiguracji wysyłania wiadomości.',
    });
  }

  const resend = new Resend(config.resendApiKey);

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeRestaurant = escapeHtml(restaurant || 'Nie podano');
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replaceAll('\n', '<br>');

  const { data, error } = await resend.emails.send({
    from: config.resendFrom,
    to: [config.contactEmail],
    replyTo: email,
    subject: `Nowe zgłoszenie: ${subject}`,

    text: [
      `Imię i nazwisko: ${name}`,
      `E-mail: ${email}`,
      `Restauracja: ${restaurant || 'Nie podano'}`,
      `Temat: ${subject}`,
      '',
      message,
    ].join('\n'),

    html: `
      <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;color:#2e251e">
        <h1 style="font-size:24px;margin-bottom:24px">
          Nowe zgłoszenie ze strony GASTROManager
        </h1>

        <table style="width:100%;border-collapse:collapse">
          <tr>
            <td style="padding:8px 0;font-weight:bold">Imię i nazwisko:</td>
            <td style="padding:8px 0">${safeName}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;font-weight:bold">E-mail:</td>
            <td style="padding:8px 0">${safeEmail}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;font-weight:bold">Restauracja:</td>
            <td style="padding:8px 0">${safeRestaurant}</td>
          </tr>

          <tr>
            <td style="padding:8px 0;font-weight:bold">Temat:</td>
            <td style="padding:8px 0">${safeSubject}</td>
          </tr>
        </table>

        <div style="margin-top:24px;padding:20px;background:#f8f1eb;border-radius:12px">
          ${safeMessage}
        </div>

        <p style="margin-top:24px;color:#808080;font-size:13px">
          Wiadomość została wysłana przez formularz na stronie GASTROManager.
        </p>
      </div>
    `,
  });

  if (error) {
    console.error('Resend error:', error);

    throw createError({
      statusCode: 502,
      statusMessage: 'Nie udało się wysłać wiadomości.',
    });
  }

  return {
    success: true,
    id: data?.id,
  };
});
