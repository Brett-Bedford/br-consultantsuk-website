import React, { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      // Using Web3Forms - Free email service
      // Get your access key from https://web3forms.com
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE', // Replace with your key
          subject: `New Contact Form Submission from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          company: formData.company || 'Not provided',
          message: formData.message,
          to_email: 'info@brconsultantsuk.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send message. Please try emailing us directly.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send message. Please try emailing us directly.');
    }
  };

  return (
    <div className="contact-form bg-charcoal-light p-4 sm:p-6 md:p-8 rounded-lg border border-gold/20">
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        <div>
          <label className="block text-silver mb-2 font-medium text-sm sm:text-base">Name *</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-600 rounded focus:border-gold focus:outline-none text-white transition-colors text-sm sm:text-base"
            required 
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block text-silver mb-2 font-medium text-sm sm:text-base">Email *</label>
          <input 
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-600 rounded focus:border-gold focus:outline-none text-white transition-colors text-sm sm:text-base"
            required 
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block text-silver mb-2 font-medium text-sm sm:text-base">Company</label>
          <input 
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-600 rounded focus:border-gold focus:outline-none text-white transition-colors text-sm sm:text-base"
            disabled={status === 'loading'}
          />
        </div>
        <div>
          <label className="block text-silver mb-2 font-medium text-sm sm:text-base">Message *</label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-600 rounded focus:border-gold focus:outline-none text-white transition-colors resize-y min-h-[120px] sm:min-h-[150px] text-sm sm:text-base"
            required
            disabled={status === 'loading'}
          ></textarea>
        </div>

        {status === 'success' && (
          <div className="bg-green-900/30 border border-green-500 text-green-300 px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base">
            Thank you! Your message has been sent successfully. We'll get back to you soon.
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-900/30 border border-red-500 text-red-300 px-3 sm:px-4 py-2 sm:py-3 rounded text-sm sm:text-base">
            {errorMessage}
          </div>
        )}

        <button 
          type="submit"
          className="w-full px-6 sm:px-10 py-3 sm:py-4 bg-gold text-charcoal font-semibold rounded hover:bg-gold-light transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-gold/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base"
          disabled={status === 'loading'}
        >
          {status === 'loading' ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
