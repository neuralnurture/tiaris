import React, { useState } from 'react';

export default function TiarisLanding() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    try {
      const response = await fetch('https://formspree.io/f/xvgledzy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage('✓ Thanks! We\'ll notify you when we launch.');
        setEmail('');
      } else {
        setMessage('Oops! Something went wrong. Please try again.');
      }
    } catch (error) {
      setMessage('Oops! Something went wrong. Please try again.');
    }

    setIsSubmitting(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          overflow: hidden;
        }

        .tiaris-container {
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a2e 50%, #16213e 100%);
          background-size: 200% 200%;
          animation: gradientShift 15s ease infinite;
          color: #ffffff;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          position: relative;
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .content-wrapper {
          text-align: center;
          padding: 2rem;
          max-width: 800px;
          position: relative;
          z-index: 2;
        }

        .logo {
          font-family: 'Playfair Display', serif;
          font-size: 5.5rem;
          font-weight: 700;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
          background-size: 200% 200%;
          animation: gradientFlow 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 1rem;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: transform 0.3s ease;
          position: relative;
        }

        .logo:hover {
          transform: scale(1.05);
          filter: drop-shadow(0 0 20px rgba(102, 126, 234, 0.5));
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .subtitle {
          font-size: 0.9rem;
          color: #667eea;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          margin-bottom: 2rem;
          font-weight: 500;
        }

        .tagline {
          font-size: 1.5rem;
          color: #a0a0a0;
          margin-bottom: 2.5rem;
          font-weight: 300;
        }

        .features {
          display: flex;
          justify-content: center;
          gap: 3rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .feature-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #667eea;
          font-size: 0.9rem;
          font-weight: 500;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          stroke: #667eea;
          filter: drop-shadow(0 0 10px rgba(102, 126, 234, 0.3));
        }

        .email-form {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
          max-width: 600px;
          margin-left: auto;
          margin-right: auto;
        }

        .email-input {
          flex: 1;
          padding: 1rem 1.5rem;
          background: rgba(255, 255, 255, 0.05);
          border: 2px solid rgba(102, 126, 234, 0.3);
          border-radius: 50px;
          color: #ffffff;
          font-size: 1rem;
          outline: none;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.4);
        }

        .email-input:focus {
          border-color: #667eea;
          background: rgba(255, 255, 255, 0.08);
          box-shadow: 0 0 20px rgba(102, 126, 234, 0.3);
        }

        .submit-btn {
          padding: 1rem 2.5rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          border: none;
          border-radius: 50px;
          color: white;
          font-size: 1rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
          position: relative;
          overflow: hidden;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
          transition: left 0.5s;
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .form-message {
          margin-top: 1rem;
          font-size: 0.9rem;
          min-height: 20px;
        }

        .form-message.success {
          color: #667eea;
        }

        .form-message.error {
          color: #ff6b6b;
        }

        .background-animation {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 1;
        }

        .circle {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(102, 126, 234, 0.15) 0%, transparent 70%);
          animation: float 20s infinite ease-in-out;
        }

        .circle:nth-child(1) {
          width: 300px;
          height: 300px;
          top: 10%;
          left: 10%;
          animation-delay: 0s;
        }

        .circle:nth-child(2) {
          width: 200px;
          height: 200px;
          top: 60%;
          right: 20%;
          animation-delay: 5s;
        }

        .circle:nth-child(3) {
          width: 400px;
          height: 400px;
          bottom: 10%;
          left: 50%;
          animation-delay: 10s;
        }

        .circle:nth-child(4) {
          width: 250px;
          height: 250px;
          top: 40%;
          left: 70%;
          animation-delay: 7s;
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-30px) translateX(20px);
          }
          50% {
            transform: translateY(-60px) translateX(-20px);
          }
          75% {
            transform: translateY(-30px) translateX(20px);
          }
        }

        .particles {
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .particle {
          position: absolute;
          width: 3px;
          height: 3px;
          background: #667eea;
          border-radius: 50%;
          opacity: 0;
          animation: particleFloat 8s infinite ease-in-out;
          box-shadow: 0 0 10px #667eea;
        }

        @keyframes particleFloat {
          0% {
            opacity: 0;
            transform: translateY(0) translateX(0);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateY(-100vh) translateX(50px);
          }
        }

        .particle:nth-child(1) { left: 10%; animation-delay: 0s; }
        .particle:nth-child(2) { left: 20%; animation-delay: 1s; }
        .particle:nth-child(3) { left: 30%; animation-delay: 2s; }
        .particle:nth-child(4) { left: 40%; animation-delay: 3s; }
        .particle:nth-child(5) { left: 50%; animation-delay: 4s; }
        .particle:nth-child(6) { left: 60%; animation-delay: 5s; }
        .particle:nth-child(7) { left: 70%; animation-delay: 6s; }
        .particle:nth-child(8) { left: 80%; animation-delay: 7s; }
        .particle:nth-child(9) { left: 90%; animation-delay: 0.5s; }
        .particle:nth-child(10) { left: 15%; animation-delay: 1.5s; }

        @media (max-width: 768px) {
          .logo {
            font-size: 3rem;
          }
          .tagline {
            font-size: 1.2rem;
          }
          .email-form {
            flex-direction: column;
            padding: 0 1rem;
          }
          .email-input {
            width: 100%;
          }
          .submit-btn {
            width: 100%;
          }
        }
      `}</style>

      <div className="tiaris-container">
        <div className="particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle"></div>
          ))}
        </div>

        <div className="background-animation">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="circle"></div>
          ))}
        </div>

        <div className="content-wrapper">
          <div className="subtitle">Coming Soon</div>
          <h1 className="logo">Tiaris</h1>
          <p className="tagline">Revolutionizing the way you book flights</p>

          <div className="features">
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              <span>Smart Booking</span>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>Best Prices</span>
            </div>
            <div className="feature-item">
              <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Secure & Fast</span>
            </div>
          </div>

          <form className="email-form" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              className="email-input"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Notify Me'}
            </button>
          </form>
          <div className={`form-message ${message.includes('Thanks') ? 'success' : message ? 'error' : ''}`}>
            {message}
          </div>
        </div>
      </div>
    </>
  );
}
