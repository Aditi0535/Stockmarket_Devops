import React, { useState } from 'react';
import '../styles/pages.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
  const res = await fetch("http://localhost:5000/api/contact", {

      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log("Response:", data);

    if (res.ok) {
      setSubmitted(true);
    } else {
      alert("Failed: " + data.error);
    }
  } catch (err) {
    console.error("Fetch Error:", err);
    alert("Error submitting form");
  }
};

  return (
    <div className="main-container" style={{
      maxWidth: 500,
      margin: '2rem auto',
      background: '#fff',
      borderRadius: 12,
      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
      padding: '2rem'
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>Contact Us</h2>
      {submitted ? (
        <div style={{ textAlign: 'center', color: '#2563eb', fontWeight: 600 }}>
          Thank you for reaching out! We will get back to you soon.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <div>
            <label htmlFor="name" style={{ fontWeight: 500 }}>Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginTop: 4,
                fontSize: '1rem'
              }}
            />
          </div>
          <div>
            <label htmlFor="email" style={{ fontWeight: 500 }}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginTop: 4,
                fontSize: '1rem'
              }}
            />
          </div>
          <div>
            <label htmlFor="phone" style={{ fontWeight: 500 }}>Phone No</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10,15}"
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginTop: 4,
                fontSize: '1rem'
              }}
            />
          </div>
          <div>
            <label htmlFor="query" style={{ fontWeight: 500 }}>Your Query</label>
            <textarea
              id="query"
              name="query"
              value={form.query}
              onChange={handleChange}
              required
              rows={4}
              style={{
                width: '100%',
                padding: '0.6rem',
                borderRadius: 6,
                border: '1px solid #ccc',
                marginTop: 4,
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              background: '#2563eb',
              color: '#fff',
              padding: '0.8rem',
              border: 'none',
              borderRadius: 6,
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              marginTop: '0.5rem'
            }}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;