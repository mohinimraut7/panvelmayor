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
//           --foot-bg:    #3d4280;
//           --foot-mid:   #32376b;
//           --foot-line:  rgba(255,255,255,0.15);
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
//             linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%),
//             repeating-linear-gradient(
//               135deg,
//               transparent 0px, transparent 80px,
//               rgba(255,255,255,0.03) 80px, rgba(255,255,255,0.03) 81px
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
//           font-size: 10px; color: #b8bbdc;
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
//           font-size: 11px; font-weight: 700; color: #b8bbdc;
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
//         .footer-contact-icon { color: #b8bbdc; font-size: 14px; flex-shrink: 0; margin-top: 1px; }
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
//         .footer-links li button:hover { color: #F5D87A; padding-left: 4px; }
//         .footer-links li a::before,
//         .footer-links li button::before { content: '›'; color: #b8bbdc; font-size: 15px; }

//         /* ── Column 3: Contact / Social ── */
//         .footer-social { display: flex; gap: 10px; margin-bottom: 24px; }
//         .footer-social-btn {
//           width: 36px; height: 36px; border-radius: 50%;
//           border: 1px solid rgba(184,187,220,0.3);
//           background: rgba(184,187,220,0.08);
//           display: flex; align-items: center; justify-content: center;
//           color: rgba(255,255,255,0.6); font-size: 15px;
//           cursor: pointer; transition: all .18s; text-decoration: none;
//         }
//         .footer-social-btn:hover { background: #9095C4; color: #fff; border-color: #9095C4; }

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
//           border: 1px solid rgba(184,187,220,0.2);
//           box-shadow: 0 8px 32px rgba(0,0,0,0.3);
//           position: relative;
//         }
//         .footer-map-wrap img { width: 100%; display: block; object-fit: cover; height: 220px; opacity: 0.85; }
//         .footer-map-label {
//           position: absolute; bottom: 0; left: 0; right: 0;
//           background: linear-gradient(0deg, rgba(61,66,128,0.95) 0%, transparent 100%);
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
//           border: 1px solid rgba(184,187,220,0.35);
//           background: transparent;
//           border-radius: 999px; padding: 8px 20px;
//           font-size: 12px; font-weight: 700; color: #b8bbdc;
//           cursor: pointer; transition: all .2s; letter-spacing: 0.5px;
//           text-transform: uppercase;
//         }
//         .footer-back-top:hover { background: rgba(184,187,220,0.12); transform: translateY(-2px); }
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
import vvcmcMap from "../../assets/panvelmap.jfif";
import logo from "../../assets/panvellogo.jpg";
// import slider1 from "../assets/nitinpatilmedia1.jpg";
// import slider2 from "../assets/nitinpatilmedia2.jpg";

// import slider3 from "../assets/nitinpatilmedia3.jpg";

// import slider4 from "../assets/nitinpatilmedia4.jpg";

// import slider5 from "../assets/nitinpatilmedia5.jpg";

// import slider6 from "../assets/nitinpatilmedia6.jpg";


// const sliderImages = [slider1, slider2, slider3, slider4, slider5, slider6];

export default function Footer() {
  const navigate = useNavigate();
  const year = new Date().getFullYear();
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=DM+Sans:wght@300;400;500;600;700&display=swap');

        .footer {
          background: #DBB845;
          font-family: 'DM Sans', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .footer::after {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 35%; height: 100%;
          background: linear-gradient(to left, rgba(58,61,114,0.30) 0%, transparent 100%);
          pointer-events: none; z-index: 0;
        }

        /* ── CTA Banner ── */
        .footer-cta {
          position: relative; z-index: 1;
          text-align: center;
          padding: 64px 48px 56px;
          border-bottom: 1px solid rgba(58,61,114,0.12);
        }
        .footer-cta-icon {
          width: 64px; height: 64px;
          background: #3A3D72;
          border-radius: 18px;
          display: flex; align-items: center; justify-content: center;
          font-size: 28px;
          margin: 0 auto 20px;
          box-shadow: 0 8px 24px rgba(58,61,114,0.3);
        }
        .footer-cta-title {
          font-size: 36px; font-weight: 800;
          color: #3A3D72;
          margin-bottom: 12px; line-height: 1.2;
          letter-spacing: -0.5px;
        }
        .footer-cta-sub {
          font-size: 17px; color: rgba(58,61,114,0.65);
          margin-bottom: 28px; max-width: 520px;
          margin-left: auto; margin-right: auto;
          line-height: 1.7; font-weight: 500;
        }
        .footer-cta-btn {
          display: inline-flex; align-items: center; gap: 10px;
          background: #3A3D72;
          color: #DBB845;
          font-size: 17px; font-weight: 700;
          padding: 14px 32px; border-radius: 999px;
          border: none; cursor: pointer;
          transition: all 0.25s;
          box-shadow: 0 6px 20px rgba(58,61,114,0.35);
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.3px;
        }
        .footer-cta-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px rgba(58,61,114,0.45);
        }
        .footer-cta-btn svg { transition: transform 0.2s; }
        .footer-cta-btn:hover svg { transform: translateX(4px); }

        /* ── Main body — 5 columns like screenshot ── */
        .footer-body {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 56px 48px 40px;
          display: grid;
          grid-template-columns: 1.8fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }

        /* ── Col 1 ── */
        .footer-logo-row {
          display: flex; align-items: center; gap: 10px;
          margin-bottom: 20px;
        }
        .footer-logo-circle {
          width: 48px; height: 48px; border-radius: 50%;
          border: 2px solid rgba(58,61,114,0.25);
          overflow: hidden; flex-shrink: 0; background: #fff;
        }
        .footer-logo-circle img { width:100%;height:100%;object-fit:cover;border-radius:50%; }
        .footer-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 17px; font-weight: 700;
          color: #3A3D72; line-height: 1.3;
        }
        .footer-brand-sub {
          font-size: 12px; color: rgba(58,61,114,0.55);
          letter-spacing: 1px; text-transform: uppercase;
          font-weight: 600; margin-top: 2px;
        }

        .footer-contact-pill {
          display: flex; align-items: flex-start; gap: 12px;
          margin-bottom: 14px;
        }
        .footer-contact-pill-icon {
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(58,61,114,0.1);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px; flex-shrink: 0;
        }
        .footer-contact-pill-text { font-size: 15px; color: #3A3D72; line-height: 1.5; font-weight: 600; }
        .footer-contact-pill-label { font-size: 13px; color: rgba(58,61,114,0.5); margin-bottom: 2px; font-weight: 500; }

        /* ── Col Title ── */
        .footer-col-title {
          font-size: 17px; font-weight: 700;
          color: #3A3D72; margin-bottom: 20px;
        }

        /* ── Links ── */
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .footer-links li a,
        .footer-links li button {
          font-size: 15.5px; color: rgba(58,61,114,0.70);
          text-decoration: none; background: none; border: none;
          cursor: pointer; padding: 0;
          transition: color .18s;
          font-family: 'DM Sans', sans-serif;
          display: block; text-align: left;
          font-weight: 500;
        }
        .footer-links li a:hover,
        .footer-links li button:hover { color: #3A3D72; }

        /* ── Social ── */
        .footer-social { display: flex; gap: 10px; margin-top: 4px; flex-wrap: wrap; }
        .footer-social-btn {
          width: 36px; height: 36px; border-radius: 50%;
          border: 1px solid rgba(58,61,114,0.2);
          background: rgba(58,61,114,0.07);
          display: flex; align-items: center; justify-content: center;
          color: rgba(58,61,114,0.65); font-size: 14px;
          cursor: pointer; transition: all .2s; text-decoration: none;
        }
        .footer-social-btn:hover {
          background: #3A3D72; color: #DBB845;
          border-color: #3A3D72; transform: translateY(-2px);
        }

        /* ══ DIVIDER ══ */
        .footer-divider {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          height: 1px;
          background: rgba(58,61,114,0.15);
          margin-left: 48px; margin-right: 48px;
        }

        /* ══ BOTTOM BAR ══ */
        .footer-bottom {
          position: relative; z-index: 1;
          max-width: 1200px; margin: 0 auto;
          padding: 20px 48px;
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 12px;
        }
        .footer-copy { font-size: 14px; color: rgba(58,61,114,0.5); font-weight: 500; }
        .footer-legal-links { display: flex; gap: 24px; }
        .footer-legal-links a {
          font-size: 14px; color: rgba(58,61,114,0.55);
          text-decoration: none; transition: color 0.2s; font-weight: 500;
        }
        .footer-legal-links a:hover { color: #3A3D72; }
        .footer-back-top {
          display: inline-flex; align-items: center; gap: 6px;
          border: 1px solid rgba(58,61,114,0.25);
          background: rgba(58,61,114,0.08);
          border-radius: 999px; padding: 7px 18px;
          font-size: 14px; font-weight: 700;
          color: rgba(58,61,114,0.7);
          cursor: pointer; transition: all .2s;
          letter-spacing: 0.5px; text-transform: uppercase;
        }
        .footer-back-top:hover {
          background: #3A3D72; color: #DBB845;
          border-color: #3A3D72; transform: translateY(-2px);
        }

        /* ══ BOTTOM STRIP ══ */
        .footer-gold-strip {
          background: #3A3D72;
          text-align: center; padding: 9px 24px;
          font-size: 13px; color: #DBB845;
          font-weight: 700; letter-spacing: 0.3px;
        }

        /* ══ RESPONSIVE ══ */
        @media(max-width:1024px){
          .footer-body { grid-template-columns: 1fr 1fr 1fr; }
          .footer-cta-title { font-size: 28px; }
        }
        @media(max-width:640px){
          .footer-cta { padding: 48px 24px 40px; }
          .footer-cta-title { font-size: 22px; }
          .footer-body { grid-template-columns: 1fr 1fr; padding: 40px 24px 32px; gap: 28px; }
          .footer-bottom { padding: 16px 24px; flex-direction: column; align-items: flex-start; }
          .footer-divider { margin-left: 24px; margin-right: 24px; }
        }
        @media(max-width:420px){
          .footer-body { grid-template-columns: 1fr; }
        }
      `}</style>

      <footer className="footer">

        {/* ── CTA Banner ── */}
        <div className="footer-cta">
          <div className="footer-cta-icon">🏛️</div>
          <div className="footer-cta-title">Book a Mayor Appointment Today</div>
          <div className="footer-cta-sub">
            A dedicated platform to connect citizens directly with the Mayor — fast, transparent, and fully digital.
          </div>
          <button className="footer-cta-btn" onClick={() => navigate("/book-appointment")}>
            Book Appointment
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        {/* ── Main Body ── */}
        <div className="footer-body">

          {/* Col 1 — Contact */}
          <div>
            <div className="footer-logo-row">
              <div className="footer-logo-circle">
                <img src={logo} alt="पनवेल महानगरपालिका" />
              </div>
              <div>
                <div className="footer-brand-name">Panvel Municipal Corporation</div>
                <div className="footer-brand-sub">Jan Sanvad</div>
              </div>
            </div>

            <div className="footer-contact-pill">
              <div className="footer-contact-pill-icon">📞</div>
              <div>
                <div className="footer-contact-pill-label">Main Office</div>
                <div className="footer-contact-pill-text">0250-6630000</div>
              </div>
            </div>
            <div className="footer-contact-pill">
              <div className="footer-contact-pill-icon">📍</div>
              <div>
                <div className="footer-contact-pill-label">Address</div>
                <div className="footer-contact-pill-text">
                  Swami Nityanand Road, Panvel,<br />Navi Mumbai — 410206
                </div>
              </div>
            </div>
            <div className="footer-contact-pill">
              <div className="footer-contact-pill-icon">📱</div>
              <div>
                <div className="footer-contact-pill-label">Helpline</div>
                <div className="footer-contact-pill-text">7058911125 / 8446427643</div>
              </div>
            </div>
          </div>

          {/* Col 2 — Navigate */}
          <div>
            <div className="footer-col-title">Navigate</div>
            <ul className="footer-links">
              <li><button onClick={() => navigate("/")}>Home</button></li>
              <li><button onClick={() => navigate("/book-appointment")}>Book Appointment</button></li>
              <li><button onClick={() => navigate("/my-appointments")}>My Appointments</button></li>
              <li><button onClick={() => navigate("/register")}>Register</button></li>
              <li><button onClick={() => navigate("/login")}>Login</button></li>
            </ul>
          </div>

          {/* Col 3 — Discover */}
          <div>
            <div className="footer-col-title">Discover</div>
            <ul className="footer-links">
              <li><a href="#">About Mayor</a></li>
              <li><a href="#">About Jan Sanvad</a></li>
              {/* <li><a href="#">RTI Information</a></li> */}
              {/* <li><a href="#">Citizen Services</a></li> */}
              {/* <li><a href="#">Annual Report</a></li> */}
            </ul>
          </div>

          {/* Col 4 — Solution */}
          {/* <div>
            <div className="footer-col-title">Solution</div>
            <ul className="footer-links">
              <li><a href="#">Appointment System</a></li>
              <li><a href="#">SMS Notification</a></li>
              <li><a href="#">OTP Login</a></li>
              <li><a href="#">Secure Portal</a></li>
            </ul>
          </div> */}

          {/* Col 5 — Follow Us */}
          <div>
            <div className="footer-col-title">Follow Us</div>
            <div className="footer-social">
              <a className="footer-social-btn" href="https://www.facebook.com/iNitinPatil/"
               target="_blank" 
              aria-label="Facebook">𝑓</a>

              <a className="footer-social-btn" href="https://x.com/iNitinPatil" 
                 target="_blank" 
              aria-label="Twitter">𝕏</a>

              <a className="footer-social-btn" href="https://www.instagram.com/initinpatil/" 
               target="_blank" 
              aria-label="Instagram">◎</a>

              <a className="footer-social-btn" href="#" aria-label="YouTube">▶</a>
            </div>
            <div style={{ marginTop:"24px" }}>
              <div className="footer-col-title">WhatsApp</div>
              <div style={{ fontSize:13, color:"rgba(58,61,114,0.7)" }}>💬 9665877727</div>
            </div>
          </div>

        </div>

        <div className="footer-divider" />

        {/* ── Bottom Bar ── */}
        <div className="footer-bottom">
          <div className="footer-copy">© {year} Panvel Municipal Corporation. All Rights Reserved.</div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Condition</a>
          </div>
          <button className="footer-back-top" onClick={scrollTop}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Go to Top
          </button>
        </div>

        <div className="footer-gold-strip">
          © 2026 Designed & Developed by Saavi Infinet Pvt Ltd
        </div>

      </footer>
    </>
  );
}