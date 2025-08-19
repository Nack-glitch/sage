import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();

    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:naol@example.com?subject=Project%20Inquiry&body=${body}`;
    setSent(true);
  };

  return (
    <div className="contact container">
      <h2>Contact</h2>

      <motion.form
        className="form"
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <label>
          <span>Your Name</span>
          <input
            name="name"
            type="text"
            required
            value={form.name}
            onChange={onChange}
            placeholder="Naol Gudeta"
          />
        </label>
        <label>
          <span>Your Email</span>
          <input
            name="email"
            type="email"
            required
            value={form.email}
            onChange={onChange}
            placeholder="you@example.com"
          />
        </label>
        <label>
          <span>Message</span>
          <textarea
            name="message"
            rows="5"
            required
            value={form.message}
            onChange={onChange}
            placeholder="Tell me about your project..."
          />
        </label>

        <button type="submit" className="btn btn--primary">Send</button>
        {sent && <p className="sent">Thanks! Your email app should open now.</p>}
      </motion.form>

      <div className="contact__aside">
        <div className="contact__card">
          <h4>Let’s build something great.</h4>
          <p>Available for freelance and collaborations.</p>
          <a className="btn btn--ghost" href="#projects">See my work</a>
        </div>
      </div>
    </div>
  );
}
