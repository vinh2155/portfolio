import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const VITE_EMAIL_ID = import.meta.env.VITE_EMAIL_ID;
const VITE_TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const publicKey = "pNKa7x6AE6evisT6m";

export default function Footer() {
  const form = useRef();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState("");

  function handleChange(e) {
    const { name, value } = e.target;

    if (name === "name" || name === "email" || name === "message") {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }

  function clearForm() {
    setFormData({ name: "", email: "", message: "" });
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(`${VITE_EMAIL_ID}`, `${VITE_TEMPLATE_ID}`, form.current, {
        publicKey: `${publicKey}`,
      })
      .then(
        () => {
          setMessage("Email sent!");
          clearForm();
        },
        (error) => {
          setMessage(error.text);
        }
      );
  }
  return (
    <div
      id="contact"
      className="bg-slate-900 w-screen flex flex-col justify-center items-center p-20"
    >
      <div className="sm:w-[50vw] bg-slate-800 shadow-lg p-10 md:p-20 rounded-xl">
        <p className="text-3xl sm:text-4xl font-serif font-bold tracking-tight pb-4 sm:pb-4 text-amber-200/[.99]">
          Get in touch:
        </p>{" "}
        <div className="">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col gap-2 w-[70vw] sm:w-full"
          >
            <label htmlFor="name" className="text-slate-100">
              Your Name:
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-slate-400 rounded-md p-1"
              value={formData.name}
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="email" className="text-slate-100">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-slate-400 rounded-md p-1"
              value={formData.email}
              onChange={(e) => handleChange(e)}
              required
            />
            <label htmlFor="message" className="text-slate-100">
              Message:
            </label>
            <textarea
              name="message"
              className="bg-slate-400 rounded-md p-1"
              value={formData.message}
              onChange={(e) => handleChange(e)}
              required
            />
            <div className="flex gap-4 items-center">
              <button
                type="submit"
                className="bg-slate-900 w-fit p-2 rounded-md text-slate-200 font-extrabold hover:bg-slate-700 transition-all duration-300"
              >
                Submit
              </button>{" "}
              {message ? (
                <p className="text-green-500 font-bold">{message}</p>
              ) : (
                ""
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
