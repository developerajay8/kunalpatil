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
  const popupRef =
    useRef<HTMLDivElement>(null);

  const [loading, setLoading] =
    useState(false);

  const [form, setForm] = useState({
    fullName: "",
    mobile: "",
    gender: "",
    profession: "",
  });

  // LOCK SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow =
        "hidden";
    } else {
      document.body.style.overflow =
        "auto";
    }

    return () => {
      document.body.style.overflow =
        "auto";
    };
  }, [isOpen]);

  // CLOSE OUTSIDE
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
      [e.target.name]:
        e.target.value,
    });
  };

const handleSubmit = async (
  e: React.FormEvent
) => {
  e.preventDefault();

  setLoading(true);

  try {
    // WHATSAPP MESSAGE
    const message = `
Hello Kunal Sir 👋

I’m interested in this work and would like to know more details.

Here are my details:

👤 Full Name: ${form.fullName}
📱 Mobile: ${form.mobile}
🚻 Gender: ${form.gender}
💼 Profession: ${form.profession}

Please connect with me regarding this opportunity. 🚀
`;

    // YOUR NUMBER
    const whatsappNumber =
      "918643071462";

    // GOOGLE SHEET SAVE
    await fetch(
      "https://script.google.com/macros/s/AKfycbxJwzBd9rlp_N3J6kxE4S96gczOvsL774grRx4atipV0vI253KsdtheDZUQXY6sgXqq/exec",
      {
        method: "POST",
        mode: "no-cors",
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

    // ✅ META PIXEL LEAD TRACK
    if (typeof window !== "undefined") {
      // @ts-ignore
      window.fbq("track", "Lead");
    }

    // OPEN WHATSAPP
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );

    alert(
      "Submitted Successfully"
    );

    // RESET FORM
    setForm({
      fullName: "",
      mobile: "",
      gender: "",
      profession: "",
    });

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
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-[#ff7b00] to-blue-600" />

        {/* CONTENT */}
        <div className="relative z-10 p-6 sm:p-8">
          {/* CLOSE */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/20 hover:bg-black/30 flex items-center justify-center text-white transition"
          >
            <X size={20} />
          </button>

          {/* HEADING */}
          <div className="mb-7">
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              Start Your Journey
            </h2>

            <p className="text-white/80 mt-3 text-sm">
              Fill the form and connect
              instantly on WhatsApp.
            </p>
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            {/* FULL NAME */}
            <input
              type="text"
              name="fullName"
              required
              placeholder="Full Name"
              value={form.fullName}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60 outline-none"
            />

            {/* MOBILE */}
            <input
              type="tel"
              name="mobile"
              required
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white placeholder:text-white/60 outline-none"
            />

            {/* GENDER */}
            <select
              name="gender"
              required
              value={form.gender}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white outline-none"
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
            </select>

            {/* PROFESSION */}
            <select
              name="profession"
              required
              value={form.profession}
              onChange={handleChange}
              className="w-full h-14 rounded-2xl bg-white/10 border border-white/20 px-5 text-white outline-none"
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
                value="Housewife"
                className="text-black"
              >
                Housewife
              </option>

              <option
                value="Working Professional"
                className="text-black"
              >
                Working Professional
              </option>
            </select>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 cursor-pointer rounded-2xl bg-white text-black font-bold text-lg transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="flex items-center justify-center gap-2">
                {loading ? (
                  <>
                    <Loader2
                      className="animate-spin"
                      size={20}
                    />
                    Submitting...
                  </>
                ) : (
                  "Submit & Open WhatsApp"
                )}
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}