import { createTransport } from "nodemailer";

export const sendMail = async (email, subject, text) => {
  const transport = createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "ac77784fad3be8",
      pass: "f9ccd615897a0d",
    },
  });

  await transport.sendMail({
    from: "KING COMMUNITY",
    to: email,
    subject,
    text,
  });
};
