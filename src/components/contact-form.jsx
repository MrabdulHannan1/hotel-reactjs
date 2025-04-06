import { useState } from "react"
import emailjs from "emailjs-com"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceID = "service_awghyic"
    const templateID = "template_qb3jixl"
    const publicKey = "THZP27yOWl5Xz1QY1"

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(() => {
        alert("Message sent successfully!")
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        })
      })
      .catch((error) => {
        console.error("EmailJS Error:", error)
        alert("Failed to send message. Please try again later.")
      })
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
            required
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
            required
            placeholder="Last Name"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
            required
            placeholder="Email Address"
          />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
            required
            placeholder="Phone No"
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent resize-none placeholder-black"
          rows={1}
          required
          placeholder="Enter your message..."
        />

        <div className="flex justify-end">
          <button type="submit" className="bg-myBlue hover:bg-myBlue/80 text-white px-6 py-2 text-base md:text-lg">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}
