"use client";
import { useState } from "react";

interface ContactFormProps {
  t: {
    form_name: string;
    form_email: string;
    form_phone: string;
    form_subject: string;
    form_message: string;
    form_submit: string;
    form_success: string;
  };
  isRtl: boolean;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm({ t, isRtl }: ContactFormProps) {
  const [form, setForm] = useState<FormData>({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = isRtl ? "الاسم مطلوب" : "Name is required";
    if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = isRtl ? "يرجى إدخال بريد إلكتروني صحيح" : "Valid email is required";
    }
    if (!form.message.trim() || form.message.length < 10) {
      newErrors.message = isRtl ? "الرسالة يجب أن تكون 10 أحرف على الأقل" : "Message must be at least 10 characters";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const inputBase = `w-full border bg-white px-4 py-3 text-navy-800 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400 focus:border-gold-400 transition-colors ${isRtl ? "text-right" : "text-left"}`;
  const labelBase = `block text-navy-700 text-sm font-medium mb-1.5 ${isRtl ? "text-right" : "text-left"}`;

  if (submitted) {
    return (
      <div className={`bg-green-50 border border-green-200 p-8 ${isRtl ? "text-right" : "text-center"}`}>
        <div className={`w-12 h-12 bg-green-500 flex items-center justify-center mb-4 ${isRtl ? "mr-0 ml-auto" : "mx-auto"}`}>
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <p className="text-green-800 font-semibold text-lg">{t.form_success}</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelBase}>{t.form_name} <span className="text-gold-500">*</span></label>
          <input
            type="text"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={`${inputBase} ${errors.name ? "border-red-400" : "border-navy-200"}`}
            placeholder={t.form_name}
          />
          {errors.name && <p className={`text-red-500 text-xs mt-1 ${isRtl ? "text-right" : ""}`}>{errors.name}</p>}
        </div>

        <div>
          <label className={labelBase}>{t.form_email} <span className="text-gold-500">*</span></label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={`${inputBase} ${errors.email ? "border-red-400" : "border-navy-200"}`}
            placeholder="name@company.com"
          />
          {errors.email && <p className={`text-red-500 text-xs mt-1 ${isRtl ? "text-right" : ""}`}>{errors.email}</p>}
        </div>
      </div>

      {/* Phone + Subject */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className={labelBase}>{t.form_phone}</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={`${inputBase} border-navy-200`}
            placeholder="+880 / +966"
          />
        </div>

        <div>
          <label className={labelBase}>{t.form_subject}</label>
          <select
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={`${inputBase} border-navy-200`}
          >
            <option value="">{isRtl ? "اختر الموضوع" : "Select a subject"}</option>
            <option value="manpower">{isRtl ? "توريد العمالة" : "Manpower Supply"}</option>
            <option value="visa">{isRtl ? "معالجة التأشيرات" : "Visa Processing"}</option>
            <option value="travel">{isRtl ? "حلول السفر" : "Travel Solutions"}</option>
            <option value="hr">{isRtl ? "استشارات الموارد البشرية" : "HR Consulting"}</option>
            <option value="other">{isRtl ? "أخرى" : "Other"}</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className={labelBase}>{t.form_message} <span className="text-gold-500">*</span></label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={`${inputBase} resize-none ${errors.message ? "border-red-400" : "border-navy-200"}`}
          placeholder={isRtl ? "اكتب رسالتك هنا..." : "Type your message here..."}
        />
        {errors.message && <p className={`text-red-500 text-xs mt-1 ${isRtl ? "text-right" : ""}`}>{errors.message}</p>}
      </div>

      {/* Submit */}
      <div className={isRtl ? "text-right" : "text-left"}>
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="btn-primary px-10 py-3.5 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {isRtl ? "جاري الإرسال..." : "Sending..."}
            </span>
          ) : t.form_submit}
        </button>
      </div>
    </div>
  );
}
