import React, { useState } from 'react'

export default function Contact(){
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({name:'',email:'',message:''})

  function handleChange(e){
    setForm({...form,[e.target.name]:e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    // Fake submit for starter
    setSent(true)
    setTimeout(()=> setSent(false), 4000)
  }

  return (
    <section className="container" style={{padding:'3rem 0'}}>
      <h1>Contact</h1>
      <p>Tell us about your project — we’ll get back within 2 business days.</p>
      <form onSubmit={handleSubmit} style={{maxWidth:700,marginTop:18,display:'grid',gap:12}}>
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <textarea name="message" rows={6} placeholder="Message" value={form.message} onChange={handleChange} required />
        <div>
          <button className="btn" type="submit">Send message</button>
        </div>
        {sent && <div style={{marginTop:12,background: 'var(--mist)',padding:12,borderRadius:6}}>Thanks — your message was sent (demo).</div>}
      </form>
    </section>
  )
}
