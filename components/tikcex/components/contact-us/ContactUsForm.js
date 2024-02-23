import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import { useFormik } from "formik";
import * as Yup from "yup";
import { capitalizeFirstLetter } from "../../../../utils/handle-token.util";

ContactUsForm.propTypes = {};

function ContactUsForm(props) {
  const [loading, setLoading] = useState(false);
  const contactFormik = useFormik({
    initialValues: {
      name: "",
      telegram: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().trim().max(100, "Maximum 100 characters").required(),
      telegram: Yup.string().trim(),
      email: Yup.string().trim().email().required(),
      message: Yup.string()
        .trim()
        .max(255, "Maximum 255 characters")
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        const response = await fetch("/api/email", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (response.status === 200) {
          toast.success("Send information successfully!");
          setLoading(false);

          contactFormik.resetForm();

          // Additional success handling
        } else {
          toast.error("Server error");
          setLoading(false);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        toast.error("Something went wrong");
      } finally {
        setLoading(false);
      }
    },
  });
  return (
    <div id="contact" className="flex justify-center">
      <form
        onSubmit={contactFormik.handleSubmit}
        className="mt-[68px] flex w-full flex-col items-center  gap-y-[30px] md:max-w-[1240px]"
      >
        <div
          className="text-[30px] font-semibold capitalize leading-[37px] md:text-[45px] md:leading-[70px]"
          style={{
            background:
              "var(--2, linear-gradient(93deg, #A8FF78 0%, #F9898E 96.24%))",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Contact Us
        </div>

        <div className="flex w-full min-w-[350px] max-w-[80%] flex-col justify-between  px-[20px] sm:items-center">
          <div className="flex flex-col gap-y-[12px]">
            <div className="inline-flex h-[50px] items-center justify-start gap-2.5 rounded-[10px] border-2 border-white border-opacity-20 py-[17px] pl-5 pr-[15px] sm:w-[450px]">
              <input
                maxLength={100}
                value={contactFormik.values.name}
                onChange={contactFormik.handleChange}
                id="name"
                placeholder="Full name"
                className="w-full  bg-transparent text-base font-normal leading-relaxed text-white opacity-50 outline-none"
              />
            </div>
            {contactFormik.errors.name && contactFormik.touched.name && (
              <p className="px-5 text-red-500">
                {capitalizeFirstLetter(contactFormik.errors.name)}
              </p>
            )}
            <div className="inline-flex h-[50px] items-center justify-start gap-2.5 rounded-[10px] border-2 border-white border-opacity-20 py-[17px] pl-5 pr-[15px] sm:w-[450px]">
              <input
                value={contactFormik.values.email}
                onChange={contactFormik.handleChange}
                id="email"
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-base font-normal leading-relaxed text-white opacity-50 outline-none"
              />
            </div>
            {contactFormik.errors.email && contactFormik.touched.email && (
              <p className="px-5 text-red-500">
                {capitalizeFirstLetter(contactFormik.errors.email)}
              </p>
            )}

            <div className="inline-flex h-[50px] items-center justify-start gap-2.5 rounded-[10px] border-2 border-white border-opacity-20 py-[17px] pl-5 pr-[15px] sm:w-[450px]">
              <input
                value={contactFormik.values.telegram}
                onChange={contactFormik.handleChange}
                id="telegram"
                placeholder="Telegram"
                className="w-full bg-transparent text-base font-normal leading-relaxed text-white opacity-50 outline-none"
              />
            </div>
            {contactFormik.errors.telegram &&
              contactFormik.touched.telegram && (
                <p className="px-5 text-red-500">
                  {capitalizeFirstLetter(contactFormik.errors.telegram)}
                </p>
              )}

            <div className="inline-flex h-[120px] items-start justify-start gap-2.5 rounded-[10px] border-2 border-white border-opacity-20 py-[17px] pl-5 pr-[15px] sm:w-[450px]">
              <textarea
                value={contactFormik.values.message}
                onChange={contactFormik.handleChange}
                id="message"
                placeholder="Message"
                className="h-full w-full bg-transparent text-base font-normal leading-relaxed text-white opacity-50 outline-none"
              />
            </div>
            {contactFormik.errors.message && contactFormik.touched.message && (
              <p className="px-5 text-red-500">
                {capitalizeFirstLetter(contactFormik.errors.message)}
              </p>
            )}
          </div>
        </div>

        {loading ? (
          <button
            disabled={true}
            className={`flex h-[50px] items-center justify-center rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-[30px] py-3 shadow hover:opacity-90`}
          >
            <div className="text-lg font-semibold leading-tight text-slate-950">
              {"Loading ..."}
            </div>
          </button>
        ) : (
          <button
            type="submit"
            className={`flex h-[50px] items-center justify-center rounded-xl bg-gradient-to-r from-lime-300 to-rose-400 px-[30px] py-3 shadow hover:opacity-90 ${loading ? "disabled:" : ""}`}
          >
            <div className="text-lg font-semibold leading-tight text-slate-950">
              Send Message
            </div>
          </button>
        )}
      </form>
    </div>
  );
}

export default ContactUsForm;
