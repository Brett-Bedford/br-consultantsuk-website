import { useState } from 'react';

export function InsurancePage() {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <style>{`
        /* Reset any inherited styles that might constrain the image */
        .ins-page, .ins-page * {
          box-sizing: border-box;
        }
        .ins-page {
          background-color: #1a1a1a;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          overflow: hidden;
          margin: 0;
          padding: 0;
        }
        .ins-bg {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image: url(/birmingham_merged.png);
          background-size: cover;
          background-position: center;
          opacity: 0.06;
          z-index: 0;
          pointer-events: none;
        }
        .ins-header {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 12px 20px 8px;
          flex-shrink: 0;
        }
        .ins-header img {
          height: 48px !important;
          width: auto !important;
          max-width: none !important;
          margin: 0 auto 6px;
          display: block;
          object-fit: contain;
        }
        .ins-header h1 {
          color: #C5A572;
          font-family: Georgia, serif;
          font-size: 13px;
          letter-spacing: 4px;
          text-transform: uppercase;
          margin: 0;
        }
        .ins-body {
          position: relative;
          z-index: 10;
          flex: 1 1 0%;
          min-height: 0;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 20px;
        }
        .ins-cert {
          max-height: 100%;
          max-width: 850px;
          width: 100%;
          border: 1px solid rgba(197, 165, 114, 0.25);
          border-radius: 2px;
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
          overflow: hidden;
        }
        /* CRITICAL: Force the image to fill its container width */
        .ins-cert img {
          display: block !important;
          width: 100% !important;
          max-width: 100% !important;
          height: auto !important;
          max-height: none !important;
          object-fit: contain !important;
          margin: 0 !important;
          padding: 0 !important;
        }
        .ins-footer {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 6px 20px 12px;
          flex-shrink: 0;
        }
        .ins-footer p {
          color: rgba(197, 165, 114, 0.5);
          font-size: 12px;
          margin: 0;
          font-family: Georgia, serif;
        }
      `}</style>

      <div className="ins-page">
        <div className="ins-bg" />

        <div className="ins-header">
          <img src="/logo.svg" alt="BR Consultants UK" />
          <h1>Confirmation of Insurance</h1>
        </div>

        <div className="ins-body">
          <div className="ins-cert">
            {!imageLoaded && (
              <div style={{ padding: '80px', color: '#C5A572', textAlign: 'center', fontFamily: 'Georgia, serif' }}>
                Loading...
              </div>
            )}
            <img
              src="/Insurance_Policy.png"
              alt="BR Consultants UK - Confirmation of Liability Insurance"
              onLoad={() => setImageLoaded(true)}
              style={imageLoaded ? {} : { position: 'absolute', opacity: 0 }}
            />
          </div>
        </div>

        <div className="ins-footer">
          <p>BR Consultants UK &bull; Policy No. CE62612</p>
        </div>
      </div>
    </>
  );
}
