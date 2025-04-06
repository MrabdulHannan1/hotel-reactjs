import React, { useState } from 'react'

const ContactForm = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    setErrors({ ...errors, [e.target.id]: "" }); // Clear error on change
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation checks
    let newErrors = {
      name: formData.name.trim() === "" ? "Full Name is required." : "",
      email: formData.email.trim() === "" ? "Email is required." : !validateEmail(formData.email) ? "Invalid email format" : "",
      subject: formData.subject.trim() === "" ? "Subject is required." : "",
      message: formData.message.trim() === "" ? "Message is required." : "",
    };

    setErrors(newErrors);

    // If any error exists, stop submission
    if (Object.values(newErrors).some(error => error !== "")) return;

    // Log data
    console.log("Form Submitted:", formData);
    // Alert
    alert("Form submitted successfully!");

    // Clear form after successful submission
    setFormData({ name: "", email: "", subject: "", message: "" });
  };


  return (
    <div className="space-y-3 w-full md:w-[70%] lg:w-[50%] justify-self-center pb-6 md:pb-10">
          {/* Name Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="name" className="text-base md:text-lg font-medium text-white">
              Full Name&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.name && <span className="text-red-500 text-sm md:text-base">{errors.name}</span>}
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Your Name"
              className="flex-grow px-4 py-3 w-full border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-myBlue transition-all text-white"
            />
          </div>
          {/* Email Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="email" className="text-base md:text-lg font-medium text-white">
              Email Address&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.email && <span className="text-red-500 text-sm md:text-base">{errors.email}</span>}
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Your Email"
              className="flex-grow px-4 py-3 w-full border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-myBlue transition-all text-white"
            />
          </div>
          {/* Subject Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="subject" className="text-base md:text-lg font-medium text-white">
              Subject&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.subject && <span className="text-red-500 text-sm md:text-base">{errors.subject}</span>}
            </label>
            <input
              id="subject"
              type="text"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter Subject"
              className="flex-grow px-4 py-3 w-full border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-myBlue transition-all text-white"
            />
          </div>
          {/* Message Input Field */}
          <div className="space-y-0.5">
            <label htmlFor="message" className="text-base md:text-lg font-medium text-white">
              Message&nbsp;<span className="text-red-600">*</span>&nbsp;
              {errors.message && <span className="text-red-500 text-sm md:text-base">{errors.message}</span>}
            </label>
            <textarea
              id="message"
              typeof="text"
              rows={6}
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Message"
              className="flex-grow px-4 py-3 w-full border border-white/20 bg-white/10 focus:outline-none focus:ring-2 focus:ring-myBlue transition-all text-white"
            />
          </div>
          {/* Submit Btn */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-myBlue flex items-center gap-2 px-6 py-4 justify-self-start text-white text-xl font-semibold w-full justify-center" >
              Submit
          </button>
        </div>
  )
}

export default ContactForm