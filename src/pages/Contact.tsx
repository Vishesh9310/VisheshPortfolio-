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
    <section className="certificates-body h-fit px-24 py-30">
      <h1 className="text-4xl text-center p-10 font-bold orbitron">Say Hello</h1>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-7">
        <div className="grid grid-cols-2 gap-[5%]">
          <div className="border-b-2 p-5">
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
          <div className="border-b-2 p-5">
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

        <div className="border-b-2 p-5">
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

        <div className="border-b-2 p-5">
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

        <div className="border-b-2 p-5">
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



/*
index.html:
<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>CodePen - Animated Login Form with Changing Background</title>
  <link rel="stylesheet" href="./style.css">

</head>
<body>
<!-- partial:index.partial.html -->
<div class="wrapper">
  <div class="login-box">
    <form action="">
      <h2>Login</h2>

      <div class="input-box">
        <span class="icon">
          <ion-icon name="mail"></ion-icon>
        </span>
        <input type="email" required>
        <label>Email</label>
      </div>

      <div class="input-box">
        <span class="icon">
          <ion-icon name="lock-closed"></ion-icon>
        </span>
        <input type="password" required>
        <label>Password</label>
      </div>

      <div class="remember-forgot">
        <label><input type="checkbox"> Remember me</label>
        <a href="#">Forgot Password?</a>
      </div>

      <button type="submit">Login</button>

      <div class="register-link">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>
    </form>
  </div>

</div>
<!-- partial -->
  <script src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js'></script>
<script src='https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js'></script>
</body>
</html>



style.css:
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  background-color: rgb(238, 222, 222);
  font-family: 'Montserrat', sans-serif;
}
.wrapper {
  display:flex;
  justify-content:center;
  align-items: center;
  height:100vh;
  width:100%;
  background:url('https://drive.google.com/uc?export=view&id=1euiZNblW9OrIXz8kqz-NOqYdGH84oktG') no-repeat;
  background-size:cover;
  background-position:center;
  animation:animateBg 5s linear infinite;
}
@keyframes animateBg {
  100% {
    filter:hue-rotate(360deg);
  }
}
.login-box {
  position: relative;
  width: 400px;
  height: 450px;
  background: transparent;
  border-radius: 15px;
  border: 2px solid rgba(255,255,255,.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
}
h2 {
  font-size:2em;
  color:#fff;
  text-align:center;
}
.input-box {
  position:relative;
  width:310px;
  margin:30px 0;
  border-bottom:1px solid #fff;
}
.input-box label {
  position:absolute;
  top:50%;
  left:5px;
  transform:translateY(-50%);
  font-size:1em;
  color:#fff;
  pointer-events:none;
  transition:.5s;
}
.input-box input:focus  ~ label,
.input-box input:valid  ~ label {
  top:-5px;
}
.input-box input {
  width:100%;
  height:50px;
  background:transparent;
  border:none;
  outline:none;
  font-size:1em;
  color:#fff;
  padding:0 35px 0 5px;
}
.input-box .icon {
  position:absolute;
  right:8px;
  top:50%;
  color: #fff;
  transform: translateY(-50%);
}
.remember-forgot {
  margin:-15px 0 15px;
  font-size:.9em;
  color:#fff;
  display:flex;
  justify-content:space-between;
}
.remember-forgot label input {
  margin-right:3px;
}
.remember-forgot a {
  color:#fff;
  text-decoration:none;
}
.remember-forgot a:hover {
  text-decoration:underline;
}
button {
  width:100%;
  height:40px;
  background-color:#fff;
  border:none;
  border-radius:40px;
  cursor:pointer;
  font-size:1em;
  color:#000;
  font-weight: 500;
}
.register-link {
  font-size:.9em;
  color:#fff;
  text-align:center;
  margin:25px 0 10px;
}
.register-link p a {
  color:#fff;
  text-decoration:none;
  font-weight:600;
}
.register-link p a:hover {
  text-decoration:underline;
}
@media (max-width:500px) {
  .login-box {
    width:100%;
    height:100vh;
    border:none;
    border-radius:0;
  }
  .input-box {
    width:290px;
  }
}

*/