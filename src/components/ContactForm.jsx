"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

const inputBase =
  "w-full px-4 py-3 bg-carbon border rounded-xl text-ivory placeholder:text-sand/60 focus:outline-none focus:ring-2 focus:ring-teal-mid focus:border-transparent transition";
const inputOk = "border-teal-mid/40";
const inputErr = "border-crimson/60 bg-crimson/5";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverError, setServerError] = useState("");

  const { heading, subheading, form: formConfig, schedulingUrl, schedulingCta } =
    siteConfig.contact;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Por favor escribe tu nombre.";
    if (!form.email.trim()) {
      newErrors.email = "Por favor escribe tu email.";
    } else if (!isValidEmail(form.email)) {
      newErrors.email = "Ese email no parece válido.";
    }
    if (formConfig.phoneRequired && !form.phone.trim()) {
      newErrors.phone = "Por favor escribe tu teléfono.";
    }
    if (!form.message.trim()) newErrors.message = "Por favor escribe tu mensaje.";
    return newErrors;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setServerError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setServerError(data.error || formConfig.errorMessage);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    } catch {
      setServerError(formConfig.errorMessage);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-ivory mb-4 tracking-wide">
            {heading}
          </h2>
          <p className="font-serif text-lg text-sand">{subheading}</p>
          {schedulingUrl ? (
            <a
              href={schedulingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 px-6 py-2.5 border border-teal-mid text-ivory font-medium rounded-full hover:bg-teal-dark/50 transition-colors text-sm"
            >
              {schedulingCta}
            </a>
          ) : null}
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="bg-teal-dark/30 border border-teal-mid/30 rounded-2xl p-8 space-y-6"
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-ivory mb-2">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              placeholder={formConfig.namePlaceholder}
              className={`${inputBase} ${errors.name ? inputErr : inputOk}`}
            />
            {errors.name ? (
              <p className="mt-1.5 text-sm text-crimson">{errors.name}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-ivory mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder={formConfig.emailPlaceholder}
              className={`${inputBase} ${errors.email ? inputErr : inputOk}`}
            />
            {errors.email ? (
              <p className="mt-1.5 text-sm text-crimson">{errors.email}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-ivory mb-2">
              Teléfono
              {!formConfig.phoneRequired ? (
                <span className="ml-1.5 text-sand font-normal">(opcional)</span>
              ) : null}
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={form.phone}
              onChange={handleChange}
              placeholder={formConfig.phonePlaceholder}
              className={`${inputBase} ${errors.phone ? inputErr : inputOk}`}
            />
            {errors.phone ? (
              <p className="mt-1.5 text-sm text-crimson">{errors.phone}</p>
            ) : null}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-ivory mb-2">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              placeholder={formConfig.messagePlaceholder}
              className={`${inputBase} resize-none ${errors.message ? inputErr : inputOk}`}
            />
            {errors.message ? (
              <p className="mt-1.5 text-sm text-crimson">{errors.message}</p>
            ) : null}
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3.5 bg-crimson text-ivory font-medium rounded-full hover:bg-orange transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? formConfig.sendingButton : formConfig.submitButton}
          </button>

          {status === "success" ? (
            <p className="text-center text-teal-mid font-medium font-serif">
              {formConfig.successMessage}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="text-center text-crimson font-medium">
              {serverError || formConfig.errorMessage}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
