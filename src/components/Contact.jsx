import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    // In a real app, post to backend. Here we just simulate success.
    setTimeout(() => setStatus('Thank you. We will contact you shortly.'), 800);
  };

  return (
    <section id="contact">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 tracking-tight">Contact</h2>
            <p className="mt-3 text-slate-600 max-w-md">Request an offer or detailed brochure. Our team will get back to you promptly.</p>
          </div>
          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-700 mb-1">Name</label>
                <input required type="text" className="w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Company</label>
                <input required type="text" className="w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Email</label>
                <input required type="email" className="w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div>
                <label className="block text-sm text-slate-700 mb-1">Phone</label>
                <input required type="tel" className="w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-700 mb-1">Message</label>
                <textarea rows={5} className="w-full rounded-lg border-slate-300 focus:border-slate-900 focus:ring-slate-900" />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-5 py-3 text-white shadow-sm hover:bg-slate-800 transition">Request Offer</button>
              <span className="text-sm text-slate-600">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
