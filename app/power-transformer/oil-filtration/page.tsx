'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

// Dynamically import BookingForm to avoid SSR issues (optional)
const BookingForm = dynamic(() => import('./components/BookingForm/page'), {
  ssr: false, // Optional: if you want to disable SSR for this component
});

export default function OilFiltrationPage() {
  const [showBookingForm, setShowBookingForm] = useState(false);

  return (
    <div className="oil-filtration-page">
      <header className="header-section">
        <img
          src="/image/6bfea502-68da-4f92-ad6c-225c3aa215d1.jpg"
          alt="Oil Filtration Service"
          className="service-image"
        />
        <div className="service-description">
          <h1>Oil Filtration</h1>
          <p>
            Oil Filtration is a crucial maintenance process for transformers and other electrical equipment.
            Our expert filtration services ensure the longevity and efficiency of your equipment.
          </p>
          <p className="price">₹12,000.00</p>
          <button onClick={() => setShowBookingForm(true)} className="book-button">
            Book a Service
          </button>
        </div>
      </header>

      {showBookingForm && (
        <BookingForm
          service="Oil Filtration"
          price="₹12,000.00"
          onClose={() => setShowBookingForm(false)}
        />
      )}
    </div>
  );
}
