// import React from "react";
// import { useNavigate } from "react-router-dom";
// // import vvcmcMap from "../../assets/vvcmcmap.png"; // image 3 - vasai virar map
// import vvcmcMap from "../../assets/panvelmap.jfif"; // image 3 - vasai virar map

// // import logo from "../../assets/vvcmclogo.jpg";
// import logo from "../../assets/panvellogo.jpg";


// export default function Footer() {
//   const navigate = useNavigate();
//   const year = new Date().getFullYear();

//   const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=DM+Sans:wght@300;400;500;600;700&display=swap');

//         :root {
//           --foot-bg:    #0d2e2a;
//           --foot-mid:   #102e2b;
//           --foot-line:  rgba(81,171,172,0.18);
//           --gold:       #F5E6BF;
//           --teal:       #51ABAC;
//           --blue:       #4CABBF;
//           --green:      #028945;
//           --gold-strip: #D09A50;
//         }

//         /* ══ FOOTER WRAPPER ═══════════════════════════════════ */
//         .footer {
//           background: var(--foot-bg);
//           color: rgba(255,255,255,0.82);
//           font-family: 'DM Sans', sans-serif;
//           position: relative;
//           overflow: hidden;
//         }

//         /* subtle diagonal line decoration like Ataraxis */
//         .footer::before {
//           content: '';
//           position: absolute;
//           top: 0; left: 0; right: 0; bottom: 0;
//           background-image:
//             linear-gradient(135deg, rgba(81,171,172,0.04) 0%, transparent 50%),
//             repeating-linear-gradient(
//               135deg,
//               transparent 0px, transparent 80px,
//               rgba(81,171,172,0.04) 80px, rgba(81,171,172,0.04) 81px
//             );
//           pointer-events: none;
//           z-index: 0;
//         }

//         .footer-body {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           padding: 72px 48px 48px;
//           display: grid;
//           grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
//           gap: 48px;
//         }

//         /* ── Column 1: Brand + address ── */
//         .footer-brand { }
//         .footer-logo-row {
//           display: flex; align-items: center; gap: 12px;
//           margin-bottom: 20px;
//         }
//         .footer-logo-circle {
//           width: 48px; height: 48px; border-radius: 50%;
//           background: var(--teal);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 22px; flex-shrink: 0;
//           box-shadow: 0 4px 16px rgba(81,171,172,0.3);
//         }
//         .footer-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 15px; font-weight: 700;
//           color: var(--gold); line-height: 1.3;
//         }
//         .footer-brand-sub {
//           font-size: 10px; color: var(--teal);
//           letter-spacing: 1px; text-transform: uppercase;
//           font-weight: 600; margin-top: 2px;
//         }

//         .footer-tagline {
//           font-size: 13px; color: rgba(255,255,255,0.55);
//           line-height: 1.75; margin-bottom: 24px;
//           max-width: 280px;
//         }

//         /* address block */
//         .footer-address { margin-bottom: 24px; }
//         .footer-address-title {
//           font-size: 11px; font-weight: 700; color: var(--teal);
//           text-transform: uppercase; letter-spacing: 0.8px;
//           margin-bottom: 10px;
//         }
//         .footer-address-text {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px; color: rgba(255,255,255,0.7);
//           line-height: 1.85;
//         }

//         /* contact numbers */
//         .footer-contacts { display: flex; flex-direction: column; gap: 6px; }
//         .footer-contact-row {
//           display: flex; align-items: flex-start; gap: 8px;
//           font-size: 12.5px; color: rgba(255,255,255,0.65);
//         }
//         .footer-contact-icon { color: var(--teal); font-size: 14px; flex-shrink: 0; margin-top: 1px; }
//         .footer-contact-label { color: rgba(255,255,255,0.4); font-size: 11px; }

//         /* ── Column 2: Site Map ── */
//         .footer-col-title {
//           font-size: 13px; font-weight: 700; color: #fff;
//           letter-spacing: 0.5px; margin-bottom: 20px;
//           padding-bottom: 10px;
//           border-bottom: 1px solid var(--foot-line);
//         }
//         .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
//         .footer-links li a,
//         .footer-links li button {
//           font-size: 13px; color: rgba(255,255,255,0.6);
//           text-decoration: none; background: none; border: none;
//           cursor: pointer; padding: 0;
//           transition: color .18s, padding-left .18s;
//           display: flex; align-items: center; gap: 6px;
//         }
//         .footer-links li a:hover,
//         .footer-links li button:hover { color: var(--teal); padding-left: 4px; }
//         .footer-links li a::before,
//         .footer-links li button::before { content: '›'; color: var(--teal); font-size: 15px; }

//         /* ── Column 3: Contact / Social ── */
//         .footer-social { display: flex; gap: 10px; margin-bottom: 24px; }
//         .footer-social-btn {
//           width: 36px; height: 36px; border-radius: 50%;
//           border: 1px solid rgba(81,171,172,0.3);
//           background: rgba(81,171,172,0.08);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(255,255,255,0.6); font-size: 15px;
//           cursor: pointer; transition: all .18s; text-decoration: none;
//         }
//         .footer-social-btn:hover { background: var(--teal); color: #fff; border-color: var(--teal); }

//         .footer-whatsapp-chip {
//           display: inline-flex; align-items: center; gap: 8px;
//           background: rgba(37,211,102,0.12);
//           border: 1px solid rgba(37,211,102,0.25);
//           border-radius: 999px; padding: 8px 16px;
//           font-size: 13px; color: #25d366; font-weight: 600;
//           text-decoration: none; transition: all .18s;
//           margin-bottom: 16px;
//         }
//         .footer-whatsapp-chip:hover { background: rgba(37,211,102,0.22); }

//         /* ── Column 4: Map ── */
//         .footer-map-wrap {
//           border-radius: 14px; overflow: hidden;
//           border: 1px solid rgba(81,171,172,0.2);
//           box-shadow: 0 8px 32px rgba(0,0,0,0.3);
//           position: relative;
//         }
//         .footer-map-wrap img { width: 100%; display: block; object-fit: cover; height: 220px; opacity: 0.85; }
//         .footer-map-label {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           background: linear-gradient(0deg, rgba(13,46,42,0.95) 0%, transparent 100%);
//           padding: 14px 14px 10px;
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 12px; color: var(--gold); font-weight: 600;
//           text-align: center;
//         }

//         /* ══ DIVIDER ══════════════════════════════════════════ */
//         .footer-divider {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           height: 1px; background: var(--foot-line);
//           margin-left: 48px; margin-right: 48px;
//         }

//         /* ══ FOOTER BOTTOM ════════════════════════════════════ */
//         .footer-bottom {
//           position: relative; z-index: 1;
//           max-width: 1200px; margin: 0 auto;
//           padding: 20px 48px;
//           display: flex; align-items: center; justify-content: space-between;
//           flex-wrap: wrap; gap: 12px;
//         }
//         .footer-copy {
//           font-size: 12px; color: rgba(255,255,255,0.38);
//         }
//         .footer-back-top {
//           display: inline-flex; align-items: center; gap: 8px;
//           border: 1px solid rgba(81,171,172,0.35);
//           background: transparent;
//           border-radius: 999px; padding: 8px 20px;
//           font-size: 12px; font-weight: 700; color: var(--teal);
//           cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
//           text-transform: uppercase;
//         }
//         .footer-back-top:hover { background: rgba(81,171,172,0.12); transform: translateY(-2px); }
//         .footer-back-top svg { transition: transform .2s; }
//         .footer-back-top:hover svg { transform: translateY(-3px); }

//         /* ══ GOLD STRIP at very bottom ════════════════════════ */
//         .footer-gold-strip {
//           background: var(--gold-strip);
//           text-align: center; padding: 8px 24px;
//           font-size: 11px; color: rgba(0,0,0,0.55);
//           font-weight: 600; letter-spacing: 0.3px;
//         }

//         /* ══ RESPONSIVE ════════════════════════════════════════ */
//         @media(max-width:1024px){
//           .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
//         }
//         @media(max-width:640px){
//           .footer-body { grid-template-columns: 1fr; padding: 48px 24px 32px; }
//           .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
//           .footer-divider { margin-left: 24px; margin-right: 24px; }
//         }
//       `}</style>

//       <footer className="footer">

//         {/* ── Main Body ─────────────────────────────────────── */}
//         <div className="footer-body">

//           {/* Col 1 — Brand + Address */}
//           <div className="footer-brand">
//             <div className="footer-logo-row">
//             <div className="cn-logo-wrap">
//                           <img src={logo} alt="पनवेल महानगरपालिका" />
//                         </div>
//               <div>
//                 <div className="footer-brand-name">पनवेल महानगरपालिका</div>
//                 <div className="footer-brand-sub">जन संवाद</div>
//               </div>
//             </div>

//             <p className="footer-tagline">
//               नागरिकांसाठी, नागरिकांकडून — पारदर्शक, जलद आणि डिजिटल सेवा देण्यासाठी वचनबद्ध.
//             </p>

//             <div className="footer-address">
//               <div className="footer-address-title">मुख्य कार्यालय</div>
//               <div className="footer-address-text">
//                 स्वामी नित्यानंद रोड,ता. गोखले मॅरेज हॉल,<br />
//                 पनवेल, नवी मुंबई,<br />
//                 पिन :410206
//               </div>
//             </div>

//             <div className="footer-contacts">
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">📞</span>
//                 <div>
//                   <div className="footer-contact-label">मुख्य कार्यालय</div>
//                   <div>0250-6630000</div>
//                 </div>
//               </div>
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">🚨</span>
//                 <div>
//                   <div className="footer-contact-label">आपत्ती व्यवस्थापन</div>
//                   <div>0250-2334546 / 0250-2334547</div>
//                 </div>
//               </div>
//               <div className="footer-contact-row">
//                 <span className="footer-contact-icon">📱</span>
//                 <div>
//                   <div className="footer-contact-label">Helpline</div>
//                   <div>7058911125 / 7058991430 / 8446427643</div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Col 2 — Site Map */}
//           <div>
//             <div className="footer-col-title">Site Map</div>
//             <ul className="footer-links">
//               <li><button onClick={() => navigate("/")}>Home</button></li>
//               <li><button onClick={() => navigate("/book-appointment")}>Appointment बुक करा</button></li>
//               <li><button onClick={() => navigate("/my-appointments")}>My Appointments</button></li>
//               <li><button onClick={() => navigate("/register")}>Register</button></li>
//               <li><button onClick={() => navigate("/login")}>Login</button></li>
//             </ul>
//           </div>

//           {/* Col 3 — Contact & Social */}
//           <div>
//             <div className="footer-col-title">संपर्क साधा</div>

//             {/* <a
//               className="footer-whatsapp-chip"
//               href="https://wa.me/919665877727"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <span>💬</span> WhatsApp Chatbot
//             </a> */}

//             <div className="footer-contact-row" style={{ marginBottom:"14px" }}>
//               <span className="footer-contact-icon">💬</span>
//               <div>
//                 <div className="footer-contact-label">WhatsApp</div>
//                 <div>9665877727</div>
//               </div>
//             </div>

//             <div className="footer-col-title" style={{ marginTop:"20px" }}>Follow Us</div>
//             <div className="footer-social">
//               <a className="footer-social-btn" href="#" aria-label="Facebook">𝑓</a>
//               <a className="footer-social-btn" href="#" aria-label="Twitter">𝕏</a>
//               <a className="footer-social-btn" href="#" aria-label="Instagram">◎</a>
//               <a className="footer-social-btn" href="#" aria-label="YouTube">▶</a>
//             </div>

//             <div className="footer-col-title" style={{ marginTop:"8px" }}>Legal</div>
//             <ul className="footer-links">
//               <li><a href="#">Privacy Policy</a></li>
//               <li><a href="#">Terms of Service</a></li>
//               <li><a href="#">RTI माहिती</a></li>
//             </ul>
//           </div>

//           {/* Col 4 — Map */}
//           <div>
//             <div className="footer-col-title">Map of Panvel Region</div>
//             <div className="footer-map-wrap">
//               <img src={vvcmcMap} alt="वसई विरार महानगरपालिका नकाशा" />
//               {/* <div className="footer-map-label">वसई-विरार शहर महानगरपालिका — Ward Map</div> */}
//             </div>
//           </div>

//         </div>

//         {/* ── Divider ──────────────────────────────────────── */}
//         <div className="footer-divider" />

//         {/* ── Bottom Bar ───────────────────────────────────── */}
//         <div className="footer-bottom">
//           <div className="footer-copy">
//             © {year} पनवेल महानगरपालिका. सर्व हक्क राखीव.
//           </div>
//           <button className="footer-back-top" onClick={scrollTop}>
//             <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//               <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
//             </svg>
//             Back to Top
//           </button>
//         </div>

//         {/* ── Gold Strip ───────────────────────────────────── */}
//         <div className="footer-gold-strip">
//           Designed & Developed for Panvel Municipal Corporation — जन संवाद
//         </div>

//       </footer>
//     </>
//   );
// }




import React from "react";
import { useNavigate } from "react-router-dom";
// import vvcmcMap from "../../assets/vvcmcmap.png"; // image 3 - vasai virar map
import vvcmcMap from "../../assets/panvelmap.jfif"; // image 3 - vasai virar map

// import logo from "../../assets/vvcmclogo.jpg";
import logo from "../../assets/panvellogo.jpg";


export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        :root {
          --foot-bg:    #3d4280;
          --foot-mid:   #32376b;
          --foot-line:  rgba(255,255,255,0.15);
          --gold:       #F5E6BF;
          --teal:       #51ABAC;
          --blue:       #4CABBF;
          --green:      #028945;
          --gold-strip: #D09A50;
        }

        /* ══ FOOTER WRAPPER ═══════════════════════════════════ */
        .footer {
          background: var(--foot-bg);
          color: rgba(255,255,255,0.82);
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        /* subtle diagonal line decoration like Ataraxis */
        .footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background-image:
            linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%),
            repeating-linear-gradient(
              135deg,
              transparent 0px, transparent 80px,
              rgba(255,255,255,0.03) 80px, rgba(255,255,255,0.03) 81px
            );
          pointer-events: none;
          z-index: 0;
        }

        .footer-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 72px 48px 48px;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 48px;
        }

        /* ── Column 1: Brand + address ── */
        .footer-brand { }
        .footer-logo-row {
          display: flex; align-items: center; gap: 12px;
          margin-bottom: 20px;
        }
        .footer-logo-circle {
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--teal);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(81,171,172,0.3);
        }
        .footer-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 15px; font-weight: 700;
          color: var(--gold); line-height: 1.3;
        }
        .footer-brand-sub {
          font-size: 10px; color: #b8bbdc;
          letter-spacing: 1px; text-transform: uppercase;
          font-weight: 600; margin-top: 2px;
        }

        .footer-tagline {
          font-size: 13px; color: rgba(255,255,255,0.55);
          line-height: 1.75; margin-bottom: 24px;
          max-width: 280px;
        }

        /* address block */
        .footer-address { margin-bottom: 24px; }
        .footer-address-title {
          font-size: 11px; font-weight: 700; color: #b8bbdc;
          text-transform: uppercase; letter-spacing: 0.8px;
          margin-bottom: 10px;
        }
        .footer-address-text {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 13px; color: rgba(255,255,255,0.7);
          line-height: 1.85;
        }

        /* contact numbers */
        .footer-contacts { display: flex; flex-direction: column; gap: 6px; }
        .footer-contact-row {
          display: flex; align-items: flex-start; gap: 8px;
          font-size: 12.5px; color: rgba(255,255,255,0.65);
        }
        .footer-contact-icon { color: #b8bbdc; font-size: 14px; flex-shrink: 0; margin-top: 1px; }
        .footer-contact-label { color: rgba(255,255,255,0.4); font-size: 11px; }

        /* ── Column 2: Site Map ── */
        .footer-col-title {
          font-size: 13px; font-weight: 700; color: #fff;
          letter-spacing: 0.5px; margin-bottom: 20px;
          padding-bottom: 10px;
          border-bottom: 1px solid var(--foot-line);
        }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links li a,
        .footer-links li button {
          font-size: 13px; color: rgba(255,255,255,0.6);
          text-decoration: none; background: none; border: none;
          cursor: pointer; padding: 0;
          transition: color .18s, padding-left .18s;
          display: flex; align-items: center; gap: 6px;
        }
        .footer-links li a:hover,
        .footer-links li button:hover { color: #F5D87A; padding-left: 4px; }
        .footer-links li a::before,
        .footer-links li button::before { content: '›'; color: #b8bbdc; font-size: 15px; }

        /* ── Column 3: Contact / Social ── */
        .footer-social { display: flex; gap: 10px; margin-bottom: 24px; }
        .footer-social-btn {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(184,187,220,0.3);
          background: rgba(184,187,220,0.08);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.6); font-size: 15px;
          cursor: pointer; transition: all .18s; text-decoration: none;
        }
        .footer-social-btn:hover { background: #9095C4; color: #fff; border-color: #9095C4; }

        .footer-whatsapp-chip {
          display: inline-flex; align-items: center; gap: 8px;
          background: rgba(37,211,102,0.12);
          border: 1px solid rgba(37,211,102,0.25);
          border-radius: 999px; padding: 8px 16px;
          font-size: 13px; color: #25d366; font-weight: 600;
          text-decoration: none; transition: all .18s;
          margin-bottom: 16px;
        }
        .footer-whatsapp-chip:hover { background: rgba(37,211,102,0.22); }

        /* ── Column 4: Map ── */
        .footer-map-wrap {
          border-radius: 14px; overflow: hidden;
          border: 1px solid rgba(184,187,220,0.2);
          box-shadow: 0 8px 32px rgba(0,0,0,0.3);
          position: relative;
        }
        .footer-map-wrap img { width: 100%; display: block; object-fit: cover; height: 220px; opacity: 0.85; }
        .footer-map-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          background: linear-gradient(0deg, rgba(61,66,128,0.95) 0%, transparent 100%);
          padding: 14px 14px 10px;
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 12px; color: var(--gold); font-weight: 600;
          text-align: center;
        }

        /* ══ DIVIDER ══════════════════════════════════════════ */
        .footer-divider {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          height: 1px; background: var(--foot-line);
          margin-left: 48px; margin-right: 48px;
        }

        /* ══ FOOTER BOTTOM ════════════════════════════════════ */
        .footer-bottom {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 20px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy {
          font-size: 12px; color: rgba(255,255,255,0.38);
        }
        .footer-back-top {
          display: inline-flex; align-items: center; gap: 8px;
          border: 1px solid rgba(184,187,220,0.35);
          background: transparent;
          border-radius: 999px; padding: 8px 20px;
          font-size: 12px; font-weight: 700; color: #b8bbdc;
          cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .footer-back-top:hover { background: rgba(184,187,220,0.12); transform: translateY(-2px); }
        .footer-back-top svg { transition: transform .2s; }
        .footer-back-top:hover svg { transform: translateY(-3px); }

        /* ══ GOLD STRIP at very bottom ════════════════════════ */
        .footer-gold-strip {
          background: var(--gold-strip);
          text-align: center; padding: 8px 24px;
          font-size: 11px; color: rgba(0,0,0,0.55);
          font-weight: 600; letter-spacing: 0.3px;
        }

        /* ══ RESPONSIVE ════════════════════════════════════════ */
        @media(max-width:1024px){
          .footer-body { grid-template-columns: 1fr 1fr; gap: 36px; }
        }
        @media(max-width:640px){
          .footer-body { grid-template-columns: 1fr; padding: 48px 24px 32px; }
          .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .footer-divider { margin-left: 24px; margin-right: 24px; }
        }
      `}</style>

      <footer className="footer">

        {/* ── Main Body ─────────────────────────────────────── */}
        <div className="footer-body">

          {/* Col 1 — Brand + Address */}
          <div className="footer-brand">
            <div className="footer-logo-row">
            <div className="cn-logo-wrap">
                          <img src={logo} alt="पनवेल महानगरपालिका" />
                        </div>
              <div>
                <div className="footer-brand-name">पनवेल महानगरपालिका</div>
                <div className="footer-brand-sub">जन संवाद</div>
              </div>
            </div>

            <p className="footer-tagline">
              नागरिकांसाठी, नागरिकांकडून — पारदर्शक, जलद आणि डिजिटल सेवा देण्यासाठी वचनबद्ध.
            </p>

            <div className="footer-address">
              <div className="footer-address-title">मुख्य कार्यालय</div>
              <div className="footer-address-text">
                स्वामी नित्यानंद रोड,ता. गोखले मॅरेज हॉल,<br />
                पनवेल, नवी मुंबई,<br />
                पिन :410206
              </div>
            </div>

            <div className="footer-contacts">
              <div className="footer-contact-row">
                <span className="footer-contact-icon">📞</span>
                <div>
                  <div className="footer-contact-label">मुख्य कार्यालय</div>
                  <div>0250-6630000</div>
                </div>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-icon">🚨</span>
                <div>
                  <div className="footer-contact-label">आपत्ती व्यवस्थापन</div>
                  <div>0250-2334546 / 0250-2334547</div>
                </div>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-icon">📱</span>
                <div>
                  <div className="footer-contact-label">Helpline</div>
                  <div>7058911125 / 7058991430 / 8446427643</div>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 — Site Map */}
          <div>
            <div className="footer-col-title">Site Map</div>
            <ul className="footer-links">
              <li><button onClick={() => navigate("/")}>Home</button></li>
              <li><button onClick={() => navigate("/book-appointment")}>Appointment बुक करा</button></li>
              <li><button onClick={() => navigate("/my-appointments")}>My Appointments</button></li>
              <li><button onClick={() => navigate("/register")}>Register</button></li>
              <li><button onClick={() => navigate("/login")}>Login</button></li>
            </ul>
          </div>

          {/* Col 3 — Contact & Social */}
          <div>
            <div className="footer-col-title">संपर्क साधा</div>

            {/* <a
              className="footer-whatsapp-chip"
              href="https://wa.me/919665877727"
              target="_blank"
              rel="noreferrer"
            >
              <span>💬</span> WhatsApp Chatbot
            </a> */}

            <div className="footer-contact-row" style={{ marginBottom:"14px" }}>
              <span className="footer-contact-icon">💬</span>
              <div>
                <div className="footer-contact-label">WhatsApp</div>
                <div>9665877727</div>
              </div>
            </div>

            <div className="footer-col-title" style={{ marginTop:"20px" }}>Follow Us</div>
            <div className="footer-social">
              <a className="footer-social-btn" href="#" aria-label="Facebook">𝑓</a>
              <a className="footer-social-btn" href="#" aria-label="Twitter">𝕏</a>
              <a className="footer-social-btn" href="#" aria-label="Instagram">◎</a>
              <a className="footer-social-btn" href="#" aria-label="YouTube">▶</a>
            </div>

            <div className="footer-col-title" style={{ marginTop:"8px" }}>Legal</div>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">RTI माहिती</a></li>
            </ul>
          </div>

          {/* Col 4 — Map */}
          <div>
            <div className="footer-col-title">Map of Panvel Region</div>
            <div className="footer-map-wrap">
              <img src={vvcmcMap} alt="वसई विरार महानगरपालिका नकाशा" />
              {/* <div className="footer-map-label">वसई-विरार शहर महानगरपालिका — Ward Map</div> */}
            </div>
          </div>

        </div>

        {/* ── Divider ──────────────────────────────────────── */}
        <div className="footer-divider" />

        {/* ── Bottom Bar ───────────────────────────────────── */}
        <div className="footer-bottom">
          <div className="footer-copy">
            © {year} पनवेल महानगरपालिका. सर्व हक्क राखीव.
          </div>
          <button className="footer-back-top" onClick={scrollTop}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Top
          </button>
        </div>

        {/* ── Gold Strip ───────────────────────────────────── */}
        <div className="footer-gold-strip">
          Designed & Developed for Panvel Municipal Corporation — जन संवाद
        </div>

      </footer>
    </>
  );
}