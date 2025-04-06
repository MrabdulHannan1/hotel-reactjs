import { useState } from "react"

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
    console.log("Form submitted:", formData)
    // Add your form submission logic here
    // Show success alert
    alert("Form submitted successfully!");
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            {/*<label htmlFor="firstName" className="block text-sm font-medium">
              First Name
            </label>*/}
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
              required
              placeholder="First Name"
            />
          </div>

          <div className="space-y-2">
            {/*<label htmlFor="lastName" className="block text-sm font-medium">
              Last Name
            </label>*/}
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
              required
              placeholder="Last Name"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            {/*<label htmlFor="email" className="block text-sm font-medium">
              Email Address
            </label>*/}
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
              required
              placeholder="Email Address"
            />
          </div>

          <div className="space-y-2">
            {/*<label htmlFor="phone" className="block text-sm font-medium">
              Phone No
            </label>*/}
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent placeholder-black"
              required
              placeholder="Phone No"
            />
          </div>
        </div>

        <div className="space-y-2">
          {/*<label htmlFor="message" className="block text-sm font-medium">
            Enter you message...
          </label>*/}
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border-b border-black focus:border-myBlue outline-none py-2 bg-transparent resize-none placeholder-black"
            rows={1}
            required
            placeholder="Enter you message..."
          />
        </div>

        <div className="flex justify-end">
          <button type="submit" className="bg-myBlue hover:bg-myBlue/80 text-white px-6 py-2 text-base md:text-lg">
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}

