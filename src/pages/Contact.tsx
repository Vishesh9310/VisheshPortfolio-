import React, { useState } from "react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  // handleChange with proper typing
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handleSubmit with proper typing
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // Later → integrate EmailJS or backend API
  };

  return (
    <section className="text-white bg-gradient-to-r from-black via-purple-950 to-black h-fit px-24 py-30">
      <h1 className="text-4xl text-center p-10 font-bold">Say Hello</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid grid-cols-2 gap-[5%]">
          <div className="border-b-2 border-white p-5">
            <input
              type="text"
              placeholder="First name"
              name="firstName"
              required
              value={formData.firstName}
              onChange={handleChange}
              className="bg-transparent outline-none w-full"
            />
          </div>
          <div className="border-b-2 border-white p-5">
            <input
              type="text"
              placeholder="Last name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div className="border-b-2 border-white p-5">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="bg-transparent outline-none w-full"
          />
        </div>

        <div className="border-b-2 border-white p-5">
          <input
            type="text"
            placeholder="Subject of the message"
            name="subject"
            required
            value={formData.subject}
            onChange={handleChange}
            className="bg-transparent outline-none w-full"
          />
        </div>

        <div className="border-b-2 border-white p-5">
          <textarea
            name="message"
            value={formData.message}
            rows={5}
            required
            onChange={handleChange}
            placeholder="Type your message here..."
            className="w-full h-40 border-none outline-none bg-transparent"
          />
        </div>

        <div className="p-5">
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 py-2 px-6 rounded-2xl font-semibold"
          >
            Send Message
          </button>
        </div>
      </form>
      {/* <div> **Contact**                      | Contact form (React Hook Form + Zod), EmailJS integration, Social icons                        | Form validation, External service integration                              |
| </div> */}
    </section>
  );
};

export default Contact;
