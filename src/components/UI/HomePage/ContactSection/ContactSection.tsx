import React, { useState, FormEvent, ChangeEvent } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiClock,
  FiSend,
  FiCheckCircle,
} from "react-icons/fi";
import { AiOutlineWhatsApp, AiOutlineWechat } from "react-icons/ai";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  program: string;
  message: string;
}

interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  details: string[];
  color: string;
}

interface SocialMedia {
  icon: React.ReactNode;
  label: string;
  color: string;
  link: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    country: "",
    program: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.country) {
      newErrors.country = "Please select your country";
    }

    if (!formData.program) {
      newErrors.program = "Please select a program";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        program: "",
        message: "",
      });
    } catch (error) {
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfo[] = [
    {
      icon: <FiMapPin className="w-6 h-6" aria-hidden="true" />,
      title: "Our Office",
      details: [
        "123 Education Street",
        "Beijing, China 100000",
        "Tsinghua University Campus",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <FiPhone className="w-6 h-6" aria-hidden="true" />,
      title: "Phone Number",
      details: ["+86 10 1234 5678", "+86 138 0013 8000 (24/7)"],
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <FiMail className="w-6 h-6" aria-hidden="true" />,
      title: "Email Address",
      details: ["admissions@globalacademia.cn", "support@globalacademia.cn"],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <FiClock className="w-6 h-6" aria-hidden="true" />,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 - 18:00",
        "Saturday: 10:00 - 16:00",
        "Sunday: Emergency Support",
      ],
      color: "bg-amber-100 text-amber-600",
    },
  ];

  const socialMedia: SocialMedia[] = [
    {
      icon: <AiOutlineWhatsApp aria-hidden="true" />,
      label: "WhatsApp",
      color: "bg-green-500 hover:bg-green-600",
      link: "#whatsapp",
    },
    {
      icon: <AiOutlineWechat aria-hidden="true" />,
      label: "WeChat",
      color: "bg-green-400 hover:bg-green-500",
      link: "#wechat",
    },
    {
      icon: <FaFacebook aria-hidden="true" />,
      label: "Facebook",
      color: "bg-blue-600 hover:bg-blue-700",
      link: "#facebook",
    },
    {
      icon: <FaInstagram aria-hidden="true" />,
      label: "Instagram",
      color: "bg-pink-600 hover:bg-pink-700",
      link: "#instagram",
    },
    {
      icon: <FaTwitter aria-hidden="true" />,
      label: "Twitter",
      color: "bg-sky-500 hover:bg-sky-600",
      link: "#twitter",
    },
    {
      icon: <FaLinkedin aria-hidden="true" />,
      label: "LinkedIn",
      color: "bg-blue-700 hover:bg-blue-800",
      link: "#linkedin",
    },
  ];

  const countries = [
    "Bangladesh",
    "India",
    "Pakistan",
    "Nepal",
    "Sri Lanka",
    "Vietnam",
    "Thailand",
    "Other",
  ];

  const programs = [
    "Diploma Programs",
    "Bachelor's Programs",
    "Master's Programs",
    "MBBS in China",
    "Engineering Programs",
    "Business Programs",
    "Scholarship Information",
  ];

  return (
    <section
      className="relative py-20 bg-linear-to-b from-gray-900 to-gray-800 text-white overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <div
        className="absolute inset-0 bg-grid-white/[0.02] bg-grid"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500"
        aria-hidden="true"
      />
      <div
        className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"
        aria-hidden="true"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <h1
            id="contact-heading"
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get In Touch With
            <span className="block text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-purple-400">
              Our Team
            </span>
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Have questions about studying in China? Our expert advisors are here
            to help you every step of the way. Contact us for personalized
            guidance.
          </p>
        </header>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <article
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-colors duration-300"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-xl ${info.color}`}
                        aria-hidden="true"
                      >
                        {info.icon}
                      </div>
                      <h2 className="text-lg font-semibold">{info.title}</h2>
                    </div>
                    <div className="space-y-2">
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-gray-300">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4">Our Location</h3>
                <div
                  className="h-48 bg-linear-to-br from-blue-500/20 to-purple-500/20 rounded-xl flex items-center justify-center"
                  role="img"
                  aria-label="Map showing our location in Beijing, China near Tsinghua University"
                >
                  <div className="text-center">
                    <FiMapPin
                      className="w-12 h-12 text-blue-400 mx-auto mb-4"
                      aria-hidden="true"
                    />
                    <p className="text-gray-300">Beijing, China</p>
                    <p className="text-sm text-gray-400">
                      Tsinghua University Area
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold mb-6">Connect With Us</h3>
              <div className="flex flex-wrap gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    className={`flex items-center gap-2 px-4 py-3 rounded-xl ${social.color} text-white transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white`}
                    aria-label={`Follow us on ${social.label}`}
                  >
                    <span className="text-lg" aria-hidden="true">
                      {social.icon}
                    </span>
                    <span className="font-medium">{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-2">Send us a Message</h3>
              <p className="text-gray-300 mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              {submitted && (
                <div
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl"
                  role="alert"
                  aria-live="polite"
                >
                  <div className="flex items-center gap-3">
                    <FiCheckCircle
                      className="w-5 h-5 text-green-400"
                      aria-hidden="true"
                    />
                    <p className="text-green-200">
                      Thank you! Your message has been sent successfully.
                    </p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.name ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="John Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p
                        id="name-error"
                        className="mt-2 text-sm text-red-400"
                        role="alert"
                      >
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.email ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="john@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={
                        errors.email ? "email-error" : undefined
                      }
                    />
                    {errors.email && (
                      <p
                        id="email-error"
                        className="mt-2 text-sm text-red-400"
                        role="alert"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.phone ? "border-red-500" : "border-white/10"
                      }`}
                      placeholder="+86 138 0013 8000"
                      aria-invalid={!!errors.phone}
                      aria-describedby={
                        errors.phone ? "phone-error" : undefined
                      }
                    />
                    {errors.phone && (
                      <p
                        id="phone-error"
                        className="mt-2 text-sm text-red-400"
                        role="alert"
                      >
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="country"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Country *
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      required
                      className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                        errors.country ? "border-red-500" : "border-white/10"
                      }`}
                      aria-invalid={!!errors.country}
                      aria-describedby={
                        errors.country ? "country-error" : undefined
                      }
                    >
                      <option value="">Select your country</option>
                      {countries.map((country) => (
                        <option key={country} value={country}>
                          {country}
                        </option>
                      ))}
                    </select>
                    {errors.country && (
                      <p
                        id="country-error"
                        className="mt-2 text-sm text-red-400"
                        role="alert"
                      >
                        {errors.country}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="program"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Program of Interest *
                  </label>
                  <select
                    id="program"
                    name="program"
                    value={formData.program}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
                      errors.program ? "border-red-500" : "border-white/10"
                    }`}
                    aria-invalid={!!errors.program}
                    aria-describedby={
                      errors.program ? "program-error" : undefined
                    }
                  >
                    <option value="">Select a program</option>
                    {programs.map((program) => (
                      <option key={program} value={program}>
                        {program}
                      </option>
                    ))}
                  </select>
                  {errors.program && (
                    <p
                      id="program-error"
                      className="mt-2 text-sm text-red-400"
                      role="alert"
                    >
                      {errors.program}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none ${
                      errors.message ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="Tell us about your educational background, interests, and any specific questions..."
                    aria-invalid={!!errors.message}
                    aria-describedby={
                      errors.message ? "message-error" : undefined
                    }
                  />
                  {errors.message && (
                    <p
                      id="message-error"
                      className="mt-2 text-sm text-red-400"
                      role="alert"
                    >
                      {errors.message}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 py-3.5 bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>

                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to our Privacy Policy and
                  consent to being contacted by our team regarding educational
                  opportunities.
                </p>
              </form>
            </div>

            <div className="mt-8 bg-linear-to-r from-blue-500/20 to-purple-500/20 rounded-2xl p-6 border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                  <FiClock
                    className="w-6 h-6 text-blue-400"
                    aria-hidden="true"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    24-Hour Response Guarantee
                  </h4>
                  <p className="text-gray-300 text-sm">
                    We guarantee to respond to all inquiries within 24 hours
                    during business days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Emergency Contact</h3>
            <p className="text-gray-300 mb-6">
              For urgent matters outside business hours, contact our 24/7
              emergency support:
            </p>
            <div className="inline-flex items-center gap-6 px-8 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">
                  Emergency Hotline
                </div>
                <div className="text-xl font-bold text-white">
                  +86 138 0013 8000
                </div>
              </div>
              <div className="h-8 w-px bg-white/20" aria-hidden="true"></div>
              <div className="text-center">
                <div className="text-sm text-gray-400 mb-1">Email</div>
                <div className="text-xl font-bold text-white">
                  emergency@globalacademia.cn
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
