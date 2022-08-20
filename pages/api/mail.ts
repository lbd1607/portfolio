import { NextApiRequest, NextApiResponse } from "next";
import mail from "@sendgrid/mail";

const apiKey = process.env.SENDGRID_API_KEY ?? "";
mail.setApiKey(apiKey);
const myEmail = process.env.EMAIL;
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

async function validateHuman(token: string): Promise<boolean> {
  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${token}`,
    { method: "POST" }
  );

  const data = await response.json();
  return data.success;
}

async function mailApi(req: NextApiRequest, res: NextApiResponse) {
  const body = JSON.parse(req.body);

  const isHuman = await validateHuman(body.token);

  if (!isHuman) {
    res.status(400);
    res.json({ errors: ["An unexpected error occurred."] });
    return;
  }

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Company: ${body.company}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: `${myEmail}`,
    from: `contact-${body.company}@lauradavis.dev <contact@lauradavis.dev>`,
    subject: "We're interested!",
    text: message,
    html: message.replace(/\r\n/g, "<br/>"),
  };

  await mail.send(data);
  res.status(200).json({ status: "Ok" });
}

export default mailApi;
