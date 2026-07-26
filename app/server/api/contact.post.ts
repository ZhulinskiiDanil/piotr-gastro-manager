import nodemailer from 'nodemailer';

interface ContactBody {
  name?: string;
  email?: string;
  restaurant?: string;
  subject?: string;
  message?: string;
  website?: string;
}

export default defineEventHandler(async (event) => {
  const body = await readBody<ContactBody>(event);

  if (body.website) {
    return { success: true };
  }

  if (!body.name?.trim() || !body.email?.trim() || !body.subject?.trim() || !body.message?.trim()) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Wypełnij wymagane pola.',
    });
  }

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort),
    secure: Number(config.smtpPort) === 465,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPassword,
    },
  });

  await transporter.sendMail({
    from: `"Formularz GASTROManager" <${config.smtpUser}>`,
    to: config.contactEmail,
    replyTo: body.email,
    subject: `Nowa wiadomość: ${body.subject}`,
    text: [
      `Imię i nazwisko: ${body.name}`,
      `E-mail: ${body.email}`,
      `Restauracja: ${body.restaurant || 'Nie podano'}`,
      `Temat: ${body.subject}`,
      '',
      body.message,
    ].join('\n'),
  });

  return { success: true };
});
