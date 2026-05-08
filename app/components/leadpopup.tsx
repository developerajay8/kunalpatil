"use client";

import { useEffect, useRef, useState } from "react";
import { Loader2, X } from "lucide-react";

interface LeadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadPopup({
  isOpen,
  onClose,
}: LeadPopupProps) {
  const popupRef = useRef<HTMLDivElement>(null);

  const [loading, setLoading] = useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    gender: "",
    profession: "",
  });

  // Prevent duplicate submit
  useEffect(() => {
    const alreadySubmitted =
      localStorage.getItem("lead_submitted");

    if (alreadySubmitted) {
      setSubmitted(true);
    }
  }, []);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Close outside click
  useEffect(() => {
    function handleOutside(
      e: MouseEvent
    ) {
      if (
        popupRef.current &&
        !popupRef.current.contains(
          e.target as Node
        )
      ) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutside
      );
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (submitted) {
      alert(
        "You already submitted this form."
      );
      return;
    }

    setLoading(true);

    try {
      // WhatsApp Message
      const message = `
🔥 Hii Kunal sir, I’m intrested in this work can you please share me the work details?

👤 Full Name: ${form.fullName}
📱 Mobile: ${form.mobile}
🚻 Gender: ${form.gender}
💼 Profession: ${form.profession}
`;

      // Your WhatsApp Number
      const whatsappNumber =
        "919999999999";

      // OPEN WHATSAPP FIRST
      window.open(
        `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );

      // THEN SEND TO GOOGLE SHEET
      await fetch(
        "YOUR_GOOGLE_SCRIPT_WEB_APP_URL",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            ...form,
            createdAt:
              new Date().toISOString(),
          }),
        }
      );

      localStorage.setItem(
        "lead_submitted",
        "true"
      );

      setSubmitted(true);

      alert(
        "Form submitted successfully"
      );

      onClose();
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999999] bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
      <div
        ref={popupRef}
        className="relative w-full max-w-md rounded-[32px] overflow-hidden border border-white/10 shadow-2xl"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-[#ff7b00] to-blue-600" />

        {/* Glow */}
        <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/20 blur-3xl" />

        <div className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full bg-blue-400/20 blur-3xl" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition"
          >
            <X size={20} />
          </button>

          {/* Heading */}
          <div className="mb-7">
            <span className="inline-block px-4 py-1 rounded-full bg-white/10 border border-white/10 text-white text-xs font-semibold mb-4">
              Limited Access
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Start Your Journey
            </h2>

            <p className="text-white/80 mt-3 text-sm">
              Fill the form and connect
              instantly.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60 outline-none focus:border-white/40"
            />

            {/* Mobile */}
            <input
              type="tel"
              name="mobile"
              required
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60 outline-none focus:border-white/40"
            />

            {/* Gender */}
            <select
              name="gender"
              required
              value={form.gender}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white outline-none focus:border-white/40"
            >
              <option
                value=""
                className="text-black"
              >
                Select Gender
              </option>

              <option
                value="Male"
                className="text-black"
              >
                Male
              </option>

              <option
                value="Female"
                className="text-black"
              >
                Female
              </option>

              <option
                value="Other"
                className="text-black"
              >
                Other
              </option>
            </select>

            {/* Profession */}
            <select
              name="profession"
              required
              value={form.profession}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white outline-none focus:border-white/40"
            >
              <option
                value=""
                className="text-black"
              >
                Select Profession
              </option>

              <option
                value="Student"
                className="text-black"
              >
               Student 



              </option>

              <option
                value="Working Professional"
                className="text-black"
              >
                Housewife 
              </option>

              <option
                value="Business Owner"
                className="text-black"
              >
                Working professional 
              </option>

              <option
                value="Freelancer"
                className="text-black"
              >
                Other
              </option>
            </select>

            {/* Submit */}
            <button
              type="submit"
              disabled={
                loading || submitted
              }
              className="relative overflow-hidden w-full h-14 rounded-2xl bg-white text-black font-bold text-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
            >
              {!loading &&
                !submitted && (
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-300 via-white to-blue-300 opacity-40 animate-pulse" />
                )}

              <span className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2
                      className="animate-spin"
                      size={20}
                    />
                    Submitting...
                  </>
                ) : submitted ? (
                  "Already Submitted"
                ) : (
                  "Submit Now"
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}