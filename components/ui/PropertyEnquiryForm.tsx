import React, { useState } from 'react';

export const PropertyEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    area: '',
    roomType: '',
    startDate: '',
    duration: '',
    comments: ''
  });
  const [gdprConsent, setGdprConsent] = useState(false);
  const [contactConsent, setContactConsent] = useState(false);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!gdprConsent) {
      setErrorMessage('Please confirm you agree to our data handling policy before submitting.');
      setStatus('error');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY_HERE',
          subject: `New Property Enquiry from ${formData.name}`,
          from_name: formData.name,
          email: formData.email,
          phone: formData.phone,
          desired_location: formData.area,
          room_type: formData.roomType,
          preferred_start_date: formData.startDate || 'Not specified',
          tenancy_duration: formData.duration || 'Not specified',
          additional_comments: formData.comments || 'None',
          gdpr_consent: 'Yes — agreed to data storage and processing',
          future_contact_consent: contactConsent ? 'Yes — agreed to be contacted about future availability' : 'No',
          to_email: 'properties@brconsultantsuk.com'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          area: '',
          roomType: '',
          startDate: '',
          duration: '',
          comments: ''
        });
        setGdprConsent(false);
        setContactConsent(false);
        setTimeout(() => setStatus('idle'), 8000);
      } else {
        setStatus('error');
        setErrorMessage('Failed to send enquiry. Please try emailing us directly at properties@brconsultantsuk.com.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('Failed to send enquiry. Please try emailing us directly at properties@brconsultantsuk.com.');
    }
  };

  const inputClass = "w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-600 rounded focus:border-teal focus:outline-none text-white transition-colors text-sm sm:text-base";
  const labelClass = "block text-silver mb-2 font-medium text-sm sm:text-base";
  const selectClass = "w-full px-3 sm:px-4 py-2 sm:py-3 bg-charcoal border border-gray-600 rounded focus:border-teal focus:outline-none text-white transition-colors text-sm sm:text-base appearance-none cursor-pointer";

  return (
    <div className="contact-form bg-charcoal-light p-4 sm:p-6 md:p-8 rounded-lg border border-teal/20">
      <h3 className="font-serif text-2xl text-teal mb-2">Register Your Interest</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">
        Complete the form below and a member of our property management team will be in touch 
        to discuss availability and next steps.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
        {/* Contact Details */}
        <div>
          <label className={labelClass}>Full Name *</label>
          <input 
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={inputClass}
            required 
            disabled={status === 'loading'}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Phone Number *</label>
            <input 
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. 07xxx xxxxxx"
              className={inputClass}
              required
              disabled={status === 'loading'}
            />
          </div>
          <div>
            <label className={labelClass}>Email Address *</label>
            <input 
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className={inputClass}
              required 
              disabled={status === 'loading'}
            />
          </div>
        </div>

        {/* Property Preferences */}
        <div className="pt-2 border-t border-gray-700/50">
          <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4 mt-2">Property Preferences</p>
        </div>

        <div>
          <label className={labelClass}>Desired Location *</label>
          <input 
            type="text"
            name="area"
            value={formData.area}
            onChange={handleChange}
            placeholder="e.g. Birmingham, Manchester, Leeds"
            className={inputClass}
            required
            disabled={status === 'loading'}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Room Type *</label>
            <div className="relative">
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className={selectClass}
                required
                disabled={status === 'loading'}
              >
                <option value="">Select room type</option>
                <option value="Single room">Single room</option>
                <option value="Double room">Double room</option>
                <option value="Double with en-suite">Double with en-suite</option>
                <option value="No preference">No preference</option>
              </select>
              <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
          <div>
            <label className={labelClass}>Preferred Start Date</label>
            <input 
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleChange}
              className={`${inputClass} [color-scheme:dark]`}
              disabled={status === 'loading'}
            />
          </div>
        </div>

        <div>
          <label className={labelClass}>Tenancy Duration</label>
          <div className="relative">
            <select
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className={selectClass}
              disabled={status === 'loading'}
            >
              <option value="">Select preferred duration</option>
              <option value="1-3 months">1–3 months</option>
              <option value="3-6 months">3–6 months</option>
              <option value="6-12 months">6–12 months</option>
              <option value="12+ months">12+ months</option>
              <option value="Flexible">Flexible / not sure yet</option>
            </select>
            <svg className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div>
          <label className={labelClass}>Additional Comments or Requirements</label>
          <textarea 
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            placeholder="Any specific requirements, questions, or information you would like us to know..."
            className={`${inputClass} resize-y min-h-[100px]`}
            disabled={status === 'loading'}
          ></textarea>
        </div>

        {/* GDPR Consent */}
        <div className="pt-2 border-t border-gray-700/50">
          <p className="text-teal text-xs font-semibold uppercase tracking-wider mb-4 mt-2">Data Protection</p>
        </div>

        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={gdprConsent}
              onChange={(e) => setGdprConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-600 bg-charcoal accent-teal flex-shrink-0 cursor-pointer"
              disabled={status === 'loading'}
            />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              I consent to BR Consultants UK storing and processing my personal data for the purpose 
              of responding to this property enquiry. I understand my data will be held securely and 
              will not be shared with third parties. I can request deletion of my data at any time by 
              contacting <a href="mailto:properties@brconsultantsuk.com" className="text-teal hover:underline">properties@brconsultantsuk.com</a>. *
            </span>
          </label>

          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={contactConsent}
              onChange={(e) => setContactConsent(e.target.checked)}
              className="mt-1 w-4 h-4 rounded border-gray-600 bg-charcoal accent-teal flex-shrink-0 cursor-pointer"
              disabled={status === 'loading'}
            />
            <span className="text-gray-400 text-xs sm:text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
              I would like to be added to the BR Consultants UK waiting list and contacted when 
              suitable properties become available in my preferred area. I understand I can 
              unsubscribe from these communications at any time.
            </span>
          </label>
        </div>

        {status === 'success' && (
          <div className="bg-green-900/30 border border-green-500 text-green-300 px-3 sm:px-4 py-3 rounded text-sm">
            <p className="font-semibold mb-1">Thank you for your enquiry!</p>
            <p>A member of our property management team will review your requirements and be in touch within one working day.
            {contactConsent && ' You have been added to our waiting list and we will notify you when properties matching your preferences become available.'}</p>
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-900/30 border border-red-500 text-red-300 px-3 sm:px-4 py-2 sm:py-3 rounded text-sm">
            {errorMessage}
          </div>
        )}

        <button 
          type="submit"
          className={`w-full px-6 sm:px-10 py-3 sm:py-4 bg-teal hover:bg-teal-light text-white font-semibold rounded transition-all transform hover:-translate-y-1 hover:shadow-xl shadow-teal/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-sm sm:text-base ${!gdprConsent ? 'opacity-60 cursor-not-allowed' : ''}`}
          disabled={status === 'loading' || !gdprConsent}
        >
          {status === 'loading' ? 'Submitting Enquiry...' : 'Submit Enquiry'}
        </button>

        {!gdprConsent && status !== 'success' && (
          <p className="text-gray-500 text-xs text-center">
            Please accept the data handling policy above to submit your enquiry.
          </p>
        )}
      </form>
    </div>
  );
};

export default PropertyEnquiryForm;
