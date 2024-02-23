import { Resend } from "resend";

export const runtime = "edge";
export const dynamic = "force-dynamic";

export default function (req, res) {
  const text = `Form Submitted \nFullname: ${req.body.name} \nEmail: ${req.body.email} \nTelegram: ${req.body.telegram} \n Message: ${req.body.message}`;
  const RESEND_API_KEY = "re_Hb3rwhbo_HPh9kQeXiUoU11SaX4c9kL2e";

  const resend = new Resend(RESEND_API_KEY);

  fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: "Acme <onboarding@resend.dev>",
      to: "davidnguyen142a@gmail.com",
      subject: "Knet send email",
      html: text,
    }),
  })
    .then((response) => {
      if (response.ok) {
        res
          .status(200)
          .json({ success: true, message: "Email sent successfully" });
      } else {
        return response.json().then((data) => {
          res
            .status(response.status)
            .json({ success: false, message: data.error });
        });
      }
    })
    .catch((error) => {
      console.error("Error sending email:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error" });
    });
}
