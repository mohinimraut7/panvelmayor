

// import React, { useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&display=swap');

//         .cn-outer {
//           background: transparent;
//           padding: 12px 24px;
//           position: sticky;
//           top: 0;
//           z-index: 100;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* ── Pill container ── */
//         .cn-nav {
//           background: #D09A50;
//           color: #fff;
//           padding: 6px 8px 6px 8px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 56px;
//           border-radius: 999px;
//           width: 96%;
//           // max-width: 960px;
//           box-shadow: 0 4px 24px rgba(0,0,0,0.25);
//         }

//         /* ── Brand ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           cursor: pointer;
//           padding: 0 6px 0 4px;
//         }
//         .cn-logo-wrap {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 2px solid #1a1a1a;
//           flex-shrink: 0;
//           background: #fff;
//         }
//         .cn-logo-wrap img { width: 100%; height: 100%; object-fit: cover; }
//         .cn-brand-text { display: flex; flex-direction: column; }
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px;
//           font-weight: 700;
//           line-height: 1.25;
//           color: #1a1a1a;
//           white-space: nowrap;
//         }
//         .cn-brand-sub {
//           font-size: 9px;
//           color: #5a3a0a;
//           letter-spacing: .7px;
//           text-transform: uppercase;
//           font-weight: 600;
//         }

//         /* ── Nav links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 2px;
//         }
//         .cn-link {
//           padding: 7px 16px;
//           border-radius: 999px;
//           font-size: 13px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all .18s;
//           border: none;
//           background: transparent;
//           color: rgba(30,15,0,0.75);
//           white-space: nowrap;
//         }
//         .cn-link:hover { background: rgba(0,0,0,0.1); color: #1a1a1a; }
//         .cn-link.active { background: rgba(0,0,0,0.15); color: #1a1a1a; font-weight: 700; }

//         .cn-citizen-name {
//           font-size: 13px;
//           color: #1a1a1a;
//           font-weight: 700;
//           padding: 0 6px;
//           white-space: nowrap;
//         }

//         /* ── Pill buttons ── */
//         .cn-btn-outline {
//           padding: 7px 20px;
//           border-radius: 999px;
//           border: 1.5px solid rgba(30,15,0,0.35);
//           background: transparent;
//           color: #1a1a1a;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all .18s;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover { background: rgba(0,0,0,0.1); border-color: #1a1a1a; }

//         .cn-btn-solid {
//           padding: 7px 20px;
//           border-radius: 999px;
//           border: none;
//           background: #1a1a1a;
//           color: #D09A50;
//           font-size: 13px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all .18s;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.25);
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover { background: #333; box-shadow: 0 4px 16px rgba(0,0,0,0.35); }

//         .cn-btn-danger {
//           padding: 7px 20px;
//           border-radius: 999px;
//           border: 1.5px solid rgba(180,30,30,0.5);
//           background: transparent;
//           color: #b91c1c;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all .18s;
//           white-space: nowrap;
//         }
//         .cn-btn-danger:hover { background: rgba(180,30,30,0.1); border-color: #dc2626; color: #dc2626; }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(0,0,0,0.1);
//           border: none;
//           color: #1a1a1a;
//           font-size: 18px;
//           cursor: pointer;
//           padding: 6px 10px;
//           border-radius: 999px;
//           transition: background .15s;
//         }
//         .cn-ham:hover { background: rgba(0,0,0,0.18); }

//         /* ── Mobile menu ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 80px;
//           left: 24px;
//           right: 24px;
//           background: #1a1a1a;
//           z-index: 99;
//           padding: 12px;
//           border-radius: 20px;
//           box-shadow: 0 12px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 4px;
//           border: 1px solid rgba(255,255,255,0.08);
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 10px 16px;
//           border-radius: 12px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           color: rgba(255,255,255,0.75);
//           background: none;
//           border: none;
//           text-align: left;
//           transition: background .15s;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.06); color: #fff; }
//         .cn-mobile-link.active { background: rgba(208,154,80,0.15); color: #D09A50; }

//         @media(max-width:700px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-brand-name { font-size: 11px; }
//         }
//       `}</style>

//       <div className="cn-outer">
//         <nav className="cn-nav">
//           {/* Brand */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub">जन संवाद</span>
              

//             </div>
//           </div>

//           {/* Desktop links */}
//           <div className="cn-links">
//             <button className={`cn-link${isActive("/") ? " active" : ""}`} onClick={() => navigate("/")}>Home</button>
//             {citizen && (
//               <button className={`cn-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => navigate("/my-appointments")}>My Appointments</button>
//             )}
//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"36px",height:"36px",padding:"0"}}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/><line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>☰</button>
//         </nav>
//       </div>

//       {/* Mobile menu */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button className={`cn-mobile-link${isActive("/") ? " active" : ""}`} onClick={() => { navigate("/"); setMenu(false); }}>🏠 Home</button>
//         {citizen && (
//           <button className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => { navigate("/my-appointments"); setMenu(false); }}>📅 My Appointments</button>
//         )}
//         {citizen ? (
//           <>
//             <button className="cn-mobile-link" style={{ color: "#D09A50" }} onClick={() => { navigate("/book-appointment"); setMenu(false); }}>+ Book Appointment</button>
//             <button className="cn-mobile-link" style={{ color: "#f87171" }} onClick={logout}>🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }




// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&display=swap');

//         .cn-outer {
//           background: transparent;
//           padding: 12px 24px;
//           position: sticky;
//           top: 0;
//           z-index: 100;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .cn-outer.scrolled {
//           background: rgba(255, 255, 255, 0.95);
//           backdrop-filter: blur(12px);
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
//         }

//         /* ── Pill container ── */
//         .cn-nav {
//           background: #D09A50;
//           color: #fff;
//           padding: 6px 8px 6px 8px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 56px;
//           border-radius: 999px;
//           width: 96%;
//           box-shadow: 0 4px 24px rgba(0,0,0,0.25);
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           transform: scale(1);
//         }

//         .cn-outer.scrolled .cn-nav {
//           height: 48px;
//           box-shadow: 0 2px 16px rgba(0,0,0,0.15);
//           transform: scale(0.98);
//         }

//         /* ── Brand ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           cursor: pointer;
//           padding: 0 6px 0 4px;
//           transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .cn-brand:hover {
//           transform: translateX(2px);
//         }
//         .cn-logo-wrap {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 2px solid #1a1a1a;
//           flex-shrink: 0;
//           background: #fff;
//           transition: all 0.3s ease;
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 36px;
//           height: 36px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           transition: transform 0.3s ease;
//         }
//         .cn-brand:hover .cn-logo-wrap img {
//           transform: scale(1.1);
//         }
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           transition: opacity 0.3s ease;
//         }
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 13px;
//           font-weight: 700;
//           line-height: 1.25;
//           color: #1a1a1a;
//           white-space: nowrap;
//           transition: font-size 0.3s ease;
//         }
//         .cn-outer.scrolled .cn-brand-name {
//           font-size: 12px;
//         }
//         .cn-brand-sub {
//           font-size: 9px;
//           color: #5a3a0a;
//           letter-spacing: .7px;
//           text-transform: uppercase;
//           font-weight: 600;
//           transition: font-size 0.3s ease;
//         }
//         .cn-outer.scrolled .cn-brand-sub {
//           font-size: 8px;
//         }

//         /* ── Nav links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .cn-link {
//           padding: 7px 16px;
//           border-radius: 999px;
//           font-size: 13px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           border: none;
//           background: transparent;
//           color: rgba(30,15,0,0.75);
//           white-space: nowrap;
//           position: relative;
//           overflow: hidden;
//         }
//         .cn-link::before {
//           content: '';
//           position: absolute;
//           top: 0;
//           left: -100%;
//           width: 100%;
//           height: 100%;
//           background: rgba(0,0,0,0.1);
//           transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           z-index: -1;
//           border-radius: 999px;
//         }
//         .cn-link:hover::before {
//           left: 0;
//         }
//         .cn-link:hover {
//           color: #1a1a1a;
//           transform: translateY(-2px);
//         }
//         .cn-link.active {
//           background: rgba(0,0,0,0.15);
//           color: #1a1a1a;
//           font-weight: 700;
//           transform: scale(1.05);
//         }

//         .cn-citizen-name {
//           font-size: 13px;
//           color: #1a1a1a;
//           font-weight: 700;
//           padding: 0 6px;
//           white-space: nowrap;
//           animation: fadeIn 0.5s ease;
//         }

//         @keyframes fadeIn {
//           from { opacity: 0; transform: translateY(-10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         /* ── Pill buttons ── */
//         .cn-btn-outline {
//           padding: 7px 20px;
//           border-radius: 999px;
//           border: 1.5px solid rgba(30,15,0,0.35);
//           background: transparent;
//           color: #1a1a1a;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           white-space: nowrap;
//           position: relative;
//           overflow: hidden;
//         }
//         .cn-btn-outline::after {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: rgba(0,0,0,0.1);
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//           z-index: -1;
//           border-radius: 999px;
//         }
//         .cn-btn-outline:hover::after {
//           transform: scaleX(1);
//         }
//         .cn-btn-outline:hover {
//           border-color: #1a1a1a;
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(0,0,0,0.15);
//         }

//         .cn-btn-solid {
//           padding: 7px 20px;
//           border-radius: 999px;
//           border: none;
//           background: #1a1a1a;
//           color: #D09A50;
//           font-size: 13px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           box-shadow: 0 2px 10px rgba(0,0,0,0.25);
//           white-space: nowrap;
//           position: relative;
//           overflow: hidden;
//         }
//         .cn-btn-solid::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, transparent, rgba(208,154,80,0.2));
//           transform: translateX(-100%);
//           transition: transform 0.5s ease;
//         }
//         .cn-btn-solid:hover::before {
//           transform: translateX(100%);
//         }
//         .cn-btn-solid:hover {
//           background: #333;
//           box-shadow: 0 6px 20px rgba(0,0,0,0.35);
//           transform: translateY(-3px) scale(1.05);
//         }
//         .cn-btn-solid:active {
//           transform: translateY(-1px) scale(1.02);
//         }

//         .cn-btn-danger {
//           padding: 7px 20px;
//           border-radius: 999px;
//           border: 1.5px solid rgba(180,30,30,0.5);
//           background: transparent;
//           color: #b91c1c;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           white-space: nowrap;
//           position: relative;
//           overflow: hidden;
//         }
//         .cn-btn-danger svg {
//           transition: transform 0.3s ease;
//         }
//         .cn-btn-danger:hover svg {
//           transform: rotate(90deg);
//         }
//         .cn-btn-danger:hover {
//           background: rgba(180,30,30,0.1);
//           border-color: #dc2626;
//           color: #dc2626;
//           transform: translateY(-2px);
//           box-shadow: 0 4px 12px rgba(185,28,28,0.2);
//         }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(0,0,0,0.1);
//           border: none;
//           color: #1a1a1a;
//           font-size: 18px;
//           cursor: pointer;
//           padding: 6px 10px;
//           border-radius: 999px;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//         }
//         .cn-ham:hover {
//           background: rgba(0,0,0,0.18);
//           transform: scale(1.1);
//         }
//         .cn-ham:active {
//           transform: scale(0.95);
//         }

//         /* ── Mobile menu ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 80px;
//           left: 24px;
//           right: 24px;
//           background: #1a1a1a;
//           z-index: 99;
//           padding: 12px;
//           border-radius: 20px;
//           box-shadow: 0 12px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 4px;
//           border: 1px solid rgba(255,255,255,0.08);
//           animation: slideDown 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           transform-origin: top;
//         }

//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-20px) scale(0.95);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0) scale(1);
//           }
//         }

//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 10px 16px;
//           border-radius: 12px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           color: rgba(255,255,255,0.75);
//           background: none;
//           border: none;
//           text-align: left;
//           transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
//           position: relative;
//           overflow: hidden;
//         }
//         .cn-mobile-link::before {
//           content: '';
//           position: absolute;
//           left: 0;
//           top: 50%;
//           transform: translateY(-50%);
//           width: 3px;
//           height: 0;
//           background: #D09A50;
//           transition: height 0.3s ease;
//           border-radius: 0 3px 3px 0;
//         }
//         .cn-mobile-link:hover::before {
//           height: 70%;
//         }
//         .cn-mobile-link:hover {
//           background: rgba(255,255,255,0.06);
//           color: #fff;
//           transform: translateX(4px);
//         }
//         .cn-mobile-link.active {
//           background: rgba(208,154,80,0.15);
//           color: #D09A50;
//         }
//         .cn-mobile-link.active::before {
//           height: 70%;
//         }

//         @media(max-width:700px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-brand-name { font-size: 11px; }
//           .cn-outer.scrolled .cn-brand-name { font-size: 10px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">
//           {/* Brand */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* Desktop links */}
//           <div className="cn-links">
//             <button className={`cn-link${isActive("/") ? " active" : ""}`} onClick={() => navigate("/")}>Home</button>
//             {citizen && (
//               <button className={`cn-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => navigate("/my-appointments")}>My Appointments</button>
//             )}
//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"36px",height:"36px",padding:"0"}}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/><line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>☰</button>
//         </nav>
//       </div>

//       {/* Mobile menu */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button className={`cn-mobile-link${isActive("/") ? " active" : ""}`} onClick={() => { navigate("/"); setMenu(false); }}>🏠 Home</button>
//         {citizen && (
//           <button className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => { navigate("/my-appointments"); setMenu(false); }}>📅 My Appointments</button>
//         )}
//         {citizen ? (
//           <>
//             <button className="cn-mobile-link" style={{ color: "#D09A50"}} onClick={() => { navigate("/book-appointment"); setMenu(false); }}>+ Book Appointment</button>
//             <button className="cn-mobile-link" style={{ color: "#f87171" }} onClick={logout}>🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// ==========================================

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;600;700;800&family=Tiro+Devanagari+Marathi&display=swap');

//         .cn-outer {
//           padding: 16px 24px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }

//         /* ── Rich Glassmorphism Nav ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #187484 0%, #1a3a44 100%);
//           color: #F5E7C2;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 64px;
//           border-radius: 100px;
//           width: 95%;
//           max-width: 1200px;
//           padding: 0 12px 0 8px;
//           border: 1.5px solid rgba(202, 157, 40, 0.3); /* Soft Gold Border */
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
//           transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
//         }

//         .cn-outer.scrolled .cn-nav {
//           height: 56px;
//           width: 90%;
//           background: rgba(24, 116, 132, 0.95);
//           backdrop-filter: blur(10px);
//           transform: translateY(5px);
//         }

//         /* ── Logo & Brand ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           cursor: pointer;
//           padding: 4px 12px;
//           border-radius: 100px;
//           transition: background 0.3s ease;
//         }

//         .cn-brand:hover {
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .cn-logo-wrap {
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 2px solid #CA9D28; /* Gold Border */
//           background: #fff;
//           box-shadow: 0 0 15px rgba(202, 157, 40, 0.3);
//         }

//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px;
//           font-weight: 700;
//           color: #F5E7C2; /* Cream Text */
//           line-height: 1.2;
//         }

//         .cn-brand-sub {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 10px;
//           color: #CA9D28; /* Gold Text */
//           text-transform: uppercase;
//           letter-spacing: 1.5px;
//           font-weight: 700;
//         }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 8px;
//         }

//         .cn-link {
//           color: rgba(245, 231, 194, 0.8);
//           font-size: 13.5px;
//           font-weight: 600;
//           padding: 8px 18px;
//           border-radius: 100px;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           cursor: pointer;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         .cn-link:hover {
//           color: #CA9D28;
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .cn-link.active {
//           background: #CA9D28;
//           color: #1a3a44;
//           font-weight: 700;
//           box-shadow: 0 4px 12px rgba(202, 157, 40, 0.3);
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           color: #1a3a44;
//           padding: 9px 22px;
//           border-radius: 100px;
//           font-weight: 800;
//           font-size: 13px;
//           border: none;
//           cursor: pointer;
//           box-shadow: 0 4px 15px rgba(202, 157, 40, 0.4);
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202, 157, 40, 0.5);
//           filter: brightness(1.1);
//         }

//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248, 113, 113, 0.4);
//           background: rgba(248, 113, 113, 0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .cn-btn-danger:hover {
//           background: #ef4444;
//           color: #fff;
//           border-color: #ef4444;
//           transform: rotate(90deg);
//         }

//         /* ── Mobile UI ── */
//         .cn-ham {
//           display: none;
//           color: #CA9D28;
//           font-size: 24px;
//           background: transparent;
//           border: none;
//           cursor: pointer;
//         }

//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 90px;
//           left: 5%;
//           width: 90%;
//           background: #1a3a44;
//           border: 1.5px solid #CA9D28;
//           border-radius: 24px;
//           padding: 16px;
//           flex-direction: column;
//           gap: 10px;
//           box-shadow: 0 20px 40px rgba(0,0,0,0.4);
//           animation: slideUp 0.4s ease;
//           z-index: 999;
//         }

//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         @media(max-width: 900px) {
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-mobile-menu.open { display: flex; }
//           .cn-brand-name { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार महानगरपालिका</span>
//               <span className="cn-brand-sub">CITIZEN PORTAL</span>
//             </div>
//           </div>

//           <div className="cn-links">
//             <button className={`cn-link${isActive("/") ? " active" : ""}`} onClick={() => navigate("/")}>Home</button>
//             {citizen && (
//               <button className={`cn-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => navigate("/my-appointments")}>My Appointments</button>
//             )}
            
//             {citizen ? (
//               <>
//                 <span style={{ color: '#F5E7C2', fontSize: '13px', fontWeight: '600', margin: '0 10px' }}>👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ BOOK</button>
//                 <button className="cn-btn-danger" onClick={logout}>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/><line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-link" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(!menu)}>{menu ? "✕" : "☰"}</button>
//         </nav>
//       </div>

//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button className="cn-link" style={{textAlign:'left'}} onClick={() => {navigate("/"); setMenu(false)}}>🏠 Home</button>
//         <button className="cn-link" style={{textAlign:'left'}} onClick={() => {navigate("/my-appointments"); setMenu(false)}}>📅 My Appointments</button>
//         {citizen ? (
//           <button className="cn-btn-solid" onClick={() => {navigate("/book-appointment"); setMenu(false)}}>+ Book Appointment</button>
//         ) : (
//           <button className="cn-btn-solid" onClick={() => {navigate("/login"); setMenu(false)}}>Login / Register</button>
//         )}
//       </div>
//     </>
//   );
// }


// ======================================

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 16px 24px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }

//         .cn-outer.scrolled {
//           padding: 8px 24px;
//         }

//         /* ── Rich Teal & Gold Pill ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #187484 0%, #114e59 100%);
//           color: #F5E7C2;
//           padding: 0 12px 0 8px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 64px;
//           border-radius: 100px;
//           width: 96%;
//           max-width: 1200px;
//           border: 1.5px solid rgba(202, 157, 40, 0.4);
//           box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
//           transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
//         }

//         .cn-outer.scrolled .cn-nav {
//           height: 54px;
//           background: rgba(24, 116, 132, 0.98);
//           backdrop-filter: blur(10px);
//           width: 92%;
//           box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
//         }

//         /* ── Brand UI ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           cursor: pointer;
//           padding: 4px 10px;
//           border-radius: 50px;
//           transition: background 0.3s ease;
//         }

//         .cn-brand:hover {
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .cn-logo-wrap {
//           width: 44px;
//           height: 44px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 2px solid #CA9D28;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow: 0 0 12px rgba(202, 157, 40, 0.3);
//         }

//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 38px;
//           height: 38px;
//         }

//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//         }

//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 14px;
//           font-weight: 700;
//           color: #F5E7C2;
//           line-height: 1.2;
//           white-space: nowrap;
//         }

//         .cn-brand-sub {
//           font-size: 10px;
//           color: #CA9D28;
//           letter-spacing: 1px;
//           font-weight: 800;
//           text-transform: uppercase;
//         }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }

//         .cn-link {
//           padding: 8px 18px;
//           border-radius: 50px;
//           font-size: 13.5px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: rgba(245, 231, 194, 0.85);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         .cn-link:hover {
//           color: #CA9D28;
//           background: rgba(255, 255, 255, 0.05);
//         }

//         .cn-link.active {
//           background: #CA9D28;
//           color: #187484;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(202, 157, 40, 0.3);
//         }

//         .cn-citizen-name {
//           font-size: 13px;
//           color: #F5E7C2;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 8px 22px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           color: #1a3a44;
//           font-size: 13px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(202, 157, 40, 0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//         }

//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202, 157, 40, 0.5);
//           filter: brightness(1.1);
//         }

//         .cn-btn-outline {
//           padding: 8px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #CA9D28;
//           background: transparent;
//           color: #CA9D28;
//           font-size: 13px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .cn-btn-outline:hover {
//           background: rgba(202, 157, 40, 0.1);
//           transform: translateY(-2px);
//         }

//         .cn-btn-danger {
//           width: 38px;
//           height: 38px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248, 113, 113, 0.5);
//           background: rgba(248, 113, 113, 0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//         }

//         .cn-btn-danger:hover {
//           background: #dc2626;
//           color: #fff;
//           border-color: #dc2626;
//           transform: rotate(90deg);
//         }

//         /* ── Mobile ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255, 255, 255, 0.1);
//           border: 1px solid #CA9D28;
//           color: #CA9D28;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 12px;
//           border-radius: 50px;
//         }

//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 90px;
//           left: 20px;
//           right: 20px;
//           background: #187484;
//           z-index: 999;
//           padding: 15px;
//           border-radius: 25px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #CA9D28;
//           animation: slideUp 0.3s ease;
//         }

//         @keyframes slideUp {
//           from { opacity: 0; transform: translateY(10px); }
//           to { opacity: 1; transform: translateY(0); }
//         }

//         .cn-mobile-menu.open { display: flex; }

//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 15px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #F5E7C2;
//           background: rgba(255,255,255,0.05);
//           border: none;
//           text-align: left;
//           transition: all 0.2s ease;
//         }

//         .cn-mobile-link.active {
//           background: #CA9D28;
//           color: #187484;
//         }

//         @media(max-width:900px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 95%; }
//           .cn-brand-name { font-size: 12px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">
//           {/* Brand */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub ml-2">जन संवाद</span>
//             </div>
//           </div>

//           {/* Desktop links */}
//           <div className="cn-links">
//             <button className={`cn-link${isActive("/") ? " active" : ""}`} onClick={() => navigate("/")}>Home</button>
//             {citizen && (
//               <button className={`cn-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => navigate("/my-appointments")}>My Appointments</button>
//             )}
//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/><line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>{menu ? "✕" : "☰"}</button>
//         </nav>
//       </div>

//       {/* Mobile menu */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button className={`cn-mobile-link${isActive("/") ? " active" : ""}`} onClick={() => { navigate("/"); setMenu(false); }}>🏠 Home</button>
//         {citizen && (
//           <button className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`} onClick={() => { navigate("/my-appointments"); setMenu(false); }}>📅 My Appointments</button>
//         )}
//         {citizen ? (
//           <>
//             <button className="cn-mobile-link" style={{ color: "#CA9D28"}} onClick={() => { navigate("/book-appointment"); setMenu(false); }}>+ Book Appointment</button>
//             <button className="cn-mobile-link" style={{ color: "#f87171" }} onClick={logout}>🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// =========================================
// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 14px 24px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }
//         .cn-outer.scrolled {
//           padding: 8px 24px;
//         }

//         /* ── Main pill navbar ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #187484 0%, #114e59 100%);
//           color: #F5E7C2;
//           padding: 0 10px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 72px;
//           border-radius: 100px;
//           width: 96%;
//           max-width: 1260px;
//           border: 1.5px solid rgba(202, 157, 40, 0.45);
//           box-shadow: 0 12px 35px rgba(0,0,0,0.28);
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 60px;
//           background: rgba(24,116,132,0.98);
//           backdrop-filter: blur(10px);
//           width: 92%;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.2);
//         }

//         /* ── Brand — protruding pill on the left ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           cursor: pointer;
//           /* Protrudes slightly out of the navbar — matches circled area in screenshot */
//           background: linear-gradient(135deg, #1a8496 0%, #135f6e 100%);
//           border: 2px solid rgba(202,157,40,0.6);
//           border-radius: 100px;
//           padding: 6px 22px 6px 6px;
//           margin-left: -2px;
//           height: 80px;
//           box-shadow:
//             0 6px 20px rgba(0,0,0,0.3),
//             0 0 0 3px rgba(202,157,40,0.15),
//             inset 0 1px 0 rgba(255,255,255,0.1);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 68px;
//           padding: 5px 20px 5px 5px;
//         }
//         .cn-brand:hover {
//           background: linear-gradient(135deg, #1e9aaf 0%, #166b7c 100%);
//           box-shadow: 0 8px 28px rgba(0,0,0,0.35), 0 0 0 3px rgba(202,157,40,0.25);
//           transform: translateY(-1px);
//         }

//         /* Logo circle — bigger and clearly visible */
//         .cn-logo-wrap {
//           width: 58px;
//           height: 58px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 2.5px solid #CA9D28;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 3px rgba(202,157,40,0.2),
//             0 4px 14px rgba(0,0,0,0.25);
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 48px;
//           height: 48px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* Brand text — larger and clearer */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 3px;
//         }
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 16px;
//           font-weight: 700;
//           color: #F5E7C2;
//           line-height: 1.25;
//           white-space: nowrap;
//           letter-spacing: 0.1px;
//           text-shadow: 0 1px 4px rgba(0,0,0,0.3);
//         }
//         .cn-brand-sub {
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           font-size: 11px;
//           color: #CA9D28;
//           letter-spacing: 2px;
//           font-weight: 800;
//           text-transform: uppercase;
//         }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: rgba(245,231,194,0.88);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-link:hover {
//           color: #CA9D28;
//           background: rgba(255,255,255,0.07);
//         }
//         .cn-link.active {
//           background: #CA9D28;
//           color: #114e59;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(202,157,40,0.35);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #F5E7C2;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           color: #1a3a44;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(202,157,40,0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202,157,40,0.5);
//           filter: brightness(1.1);
//         }
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #CA9D28;
//           background: transparent;
//           color: #CA9D28;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover {
//           background: rgba(202,157,40,0.1);
//           transform: translateY(-2px);
//         }
//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248,113,113,0.5);
//           background: rgba(248,113,113,0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover {
//           background: #dc2626;
//           color: #fff;
//           border-color: #dc2626;
//           transform: rotate(90deg);
//         }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid #CA9D28;
//           color: #CA9D28;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 12px;
//           border-radius: 50px;
//           margin-right: 4px;
//         }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 96px;
//           left: 16px;
//           right: 16px;
//           background: #187484;
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #CA9D28;
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #F5E7C2;
//           background: rgba(255,255,255,0.05);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
//         .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 95%; }
//           .cn-brand-name { font-size: 13px; }
//           .cn-brand { height: 72px; padding: 5px 18px 5px 5px; }
//           .cn-logo-wrap { width: 50px; height: 50px; }
//         }
//         @media(max-width:600px){
//           .cn-outer { padding: 10px 12px; }
//           .cn-nav { width: 100%; border-radius: 80px; }
//           .cn-brand-name { font-size: 12px; }
//           .cn-brand-sub { font-size: 10px; letter-spacing: 1.5px; }
//           .cn-brand { height: 66px; gap: 10px; padding: 4px 14px 4px 4px; }
//           .cn-logo-wrap { width: 46px; height: 46px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill (protruding left section) ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//           <div className="cn-links">
//             <button
//               className={`cn-link${isActive("/") ? " active" : ""}`}
//               onClick={() => navigate("/")}
//             >Home</button>

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button
//           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
//           onClick={() => { navigate("/"); setMenu(false); }}
//         >🏠 Home</button>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#CA9D28" }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#f87171" }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// ====================================

// import React, { useState, useEffect } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import logo from "../../assets/vvcmclogo.jpg";

// export default function CitizenNavbar() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [menu, setMenu] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const citizen = (() => {
//     try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
//   })();

//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const logout = () => {
//     localStorage.removeItem("citizenUser");
//     navigate("/login");
//     setMenu(false);
//   };

//   const isActive = (path) => location.pathname === path;

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

//         .cn-outer {
//           padding: 12px 24px;
//           position: sticky;
//           top: 0;
//           z-index: 1000;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.4s ease;
//         }
//         .cn-outer.scrolled {
//           padding: 8px 24px;
//         }

//         /* ── Main pill navbar ── */
//         .cn-nav {
//           background: linear-gradient(135deg, #187484 0%, #114e59 100%);
//           color: #F5E7C2;
//           padding: 0 14px 0 0;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           height: 80px;
//           border-radius: 100px;
//           width: 96%;
//           max-width: 1280px;
//           border: 1.5px solid rgba(202, 157, 40, 0.45);
//           box-shadow: 0 12px 35px rgba(0,0,0,0.28);
//           transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
//           overflow: visible;
//         }
//         .cn-outer.scrolled .cn-nav {
//           height: 64px;
//           background: rgba(24,116,132,0.98);
//           backdrop-filter: blur(10px);
//           width: 92%;
//           box-shadow: 0 4px 20px rgba(0,0,0,0.2);
//         }

//         /* ── Brand pill — protrudes out, visibly bigger ── */
//         .cn-brand {
//           display: flex;
//           align-items: center;
//           gap: 16px;
//           cursor: pointer;
//           background: linear-gradient(135deg, #1c8fa3 0%, #155f6e 100%);
//           border: 2px solid rgba(202,157,40,0.7);
//           border-radius: 100px;
//           /* top/bottom protrude out of the navbar */
//           padding: 8px 28px 8px 8px;
//           margin-left: -2px;
//           height: 96px;
//           box-shadow:
//             0 8px 28px rgba(0,0,0,0.35),
//             0 0 0 4px rgba(202,157,40,0.12),
//             inset 0 1px 0 rgba(255,255,255,0.12);
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//           position: relative;
//           z-index: 2;
//         }
//         .cn-outer.scrolled .cn-brand {
//           height: 78px;
//           padding: 6px 24px 6px 6px;
//         }
//         .cn-brand:hover {
//           background: linear-gradient(135deg, #20a3b9 0%, #186e80 100%);
//           box-shadow: 0 10px 32px rgba(0,0,0,0.4), 0 0 0 4px rgba(202,157,40,0.25);
//           transform: translateY(-1px);
//         }

//         /* ── Logo circle — BIG and clearly visible ── */
//         .cn-logo-wrap {
//           width: 74px;
//           height: 74px;
//           border-radius: 50%;
//           overflow: hidden;
//           border: 3px solid #CA9D28;
//           background: #fff;
//           flex-shrink: 0;
//           transition: all 0.3s ease;
//           box-shadow:
//             0 0 0 4px rgba(202,157,40,0.22),
//             0 6px 18px rgba(0,0,0,0.3);
//         }
//         .cn-outer.scrolled .cn-logo-wrap {
//           width: 58px;
//           height: 58px;
//         }
//         .cn-logo-wrap img {
//           width: 100%;
//           height: 100%;
//           object-fit: cover;
//           display: block;
//         }

//         /* ── Brand text — LARGE and clear ── */
//         .cn-brand-text {
//           display: flex;
//           flex-direction: column;
//           gap: 4px;
//         }

//         /* "वसई-विरार शहर महानगरपालिका" — large */
//         .cn-brand-name {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 20px;
//           font-weight: 700;
//           color: #F5E7C2;
//           line-height: 1.25;
//           white-space: nowrap;
//           letter-spacing: 0.2px;
//           text-shadow: 0 1px 6px rgba(0,0,0,0.35);
//         }
//         .cn-outer.scrolled .cn-brand-name {
//           font-size: 17px;
//         }

//         /* "जन संवाद" — bold golden, clearly readable */
//         .cn-brand-sub {
//           font-family: 'Tiro Devanagari Marathi', serif;
//           font-size: 16px;
//           color: #F5C842;
//           letter-spacing: 1.5px;
//           font-weight: 700;
//           line-height: 1.2;
//         }
//         .cn-outer.scrolled .cn-brand-sub {
//           font-size: 13px;
//         }

//         /* ── Nav Links ── */
//         .cn-links {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//         }
//         .cn-link {
//           padding: 9px 20px;
//           border-radius: 50px;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           background: transparent;
//           color: rgba(245,231,194,0.88);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-link:hover {
//           color: #CA9D28;
//           background: rgba(255,255,255,0.07);
//         }
//         .cn-link.active {
//           background: #CA9D28;
//           color: #114e59;
//           font-weight: 800;
//           box-shadow: 0 4px 12px rgba(202,157,40,0.35);
//         }

//         .cn-citizen-name {
//           font-size: 14px;
//           color: #F5E7C2;
//           font-weight: 700;
//           padding: 0 8px;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }

//         /* ── Buttons ── */
//         .cn-btn-solid {
//           padding: 9px 24px;
//           border-radius: 50px;
//           border: none;
//           background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
//           color: #1a3a44;
//           font-size: 13.5px;
//           font-weight: 800;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           box-shadow: 0 4px 15px rgba(202,157,40,0.3);
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           text-transform: uppercase;
//           letter-spacing: 0.5px;
//           white-space: nowrap;
//         }
//         .cn-btn-solid:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 6px 20px rgba(202,157,40,0.5);
//           filter: brightness(1.1);
//         }
//         .cn-btn-outline {
//           padding: 9px 22px;
//           border-radius: 50px;
//           border: 1.5px solid #CA9D28;
//           background: transparent;
//           color: #CA9D28;
//           font-size: 13.5px;
//           font-weight: 700;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//           white-space: nowrap;
//         }
//         .cn-btn-outline:hover {
//           background: rgba(202,157,40,0.1);
//           transform: translateY(-2px);
//         }
//         .cn-btn-danger {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           border: 1.5px solid rgba(248,113,113,0.5);
//           background: rgba(248,113,113,0.1);
//           color: #f87171;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           flex-shrink: 0;
//         }
//         .cn-btn-danger:hover {
//           background: #dc2626;
//           color: #fff;
//           border-color: #dc2626;
//           transform: rotate(90deg);
//         }

//         /* ── Hamburger ── */
//         .cn-ham {
//           display: none;
//           background: rgba(255,255,255,0.1);
//           border: 1px solid #CA9D28;
//           color: #CA9D28;
//           font-size: 20px;
//           cursor: pointer;
//           padding: 6px 12px;
//           border-radius: 50px;
//           margin-right: 4px;
//         }

//         /* ── Mobile dropdown ── */
//         .cn-mobile-menu {
//           display: none;
//           position: fixed;
//           top: 104px;
//           left: 16px;
//           right: 16px;
//           background: #187484;
//           z-index: 999;
//           padding: 14px;
//           border-radius: 24px;
//           box-shadow: 0 15px 40px rgba(0,0,0,0.4);
//           flex-direction: column;
//           gap: 8px;
//           border: 1.5px solid #CA9D28;
//           animation: slideUp 0.3s ease;
//         }
//         @keyframes slideUp {
//           from { opacity:0; transform:translateY(10px); }
//           to   { opacity:1; transform:translateY(0); }
//         }
//         .cn-mobile-menu.open { display: flex; }
//         .cn-mobile-link {
//           padding: 12px 20px;
//           border-radius: 14px;
//           font-size: 14px;
//           font-weight: 600;
//           color: #F5E7C2;
//           background: rgba(255,255,255,0.05);
//           border: none;
//           text-align: left;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           font-family: 'Plus Jakarta Sans', sans-serif;
//         }
//         .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
//         .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

//         /* ── Responsive ── */
//         @media(max-width:960px){
//           .cn-links { display: none; }
//           .cn-ham { display: block; }
//           .cn-nav { width: 95%; height: 72px; }
//           .cn-brand { height: 86px; padding: 6px 20px 6px 6px; gap: 12px; }
//           .cn-logo-wrap { width: 62px; height: 62px; }
//           .cn-brand-name { font-size: 16px; }
//           .cn-brand-sub { font-size: 13px; }
//         }
//         @media(max-width:600px){
//           .cn-outer { padding: 10px 12px; }
//           .cn-nav { width: 100%; height: 66px; }
//           .cn-brand { height: 78px; padding: 5px 16px 5px 5px; gap: 10px; }
//           .cn-logo-wrap { width: 54px; height: 54px; }
//           .cn-brand-name { font-size: 13.5px; }
//           .cn-brand-sub { font-size: 12px; letter-spacing: 1px; }
//         }
//         @media(max-width:400px){
//           .cn-brand-name { font-size: 12px; }
//           .cn-brand-sub { font-size: 11px; }
//           .cn-logo-wrap { width: 46px; height: 46px; }
//           .cn-brand { gap: 8px; padding: 4px 12px 4px 4px; }
//         }
//       `}</style>

//       <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
//         <nav className="cn-nav">

//           {/* ── Brand pill ── */}
//           <div className="cn-brand" onClick={() => navigate("/")}>
//             <div className="cn-logo-wrap">
//               <img src={logo} alt="VVCMC" />
//             </div>
//             <div className="cn-brand-text">
//               <span className="cn-brand-name">वसई-विरार शहर महानगरपालिका</span>
//               <span className="cn-brand-sub">जन संवाद</span>
//             </div>
//           </div>

//           {/* ── Desktop links ── */}
//           <div className="cn-links">
//             <button
//               className={`cn-link${isActive("/") ? " active" : ""}`}
//               onClick={() => navigate("/")}
//             >Home</button>

//             {citizen && (
//               <button
//                 className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
//                 onClick={() => navigate("/my-appointments")}
//               >My Appointments</button>
//             )}

//             {citizen ? (
//               <>
//                 <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
//                 <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
//                 <button className="cn-btn-danger" onClick={logout} title="Logout">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
//                     <line x1="12" y1="2" x2="12" y2="12"/>
//                   </svg>
//                 </button>
//               </>
//             ) : (
//               <>
//                 <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
//                 <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
//               </>
//             )}
//           </div>

//           <button className="cn-ham" onClick={() => setMenu(m => !m)}>
//             {menu ? "✕" : "☰"}
//           </button>
//         </nav>
//       </div>

//       {/* ── Mobile menu ── */}
//       <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
//         <button
//           className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
//           onClick={() => { navigate("/"); setMenu(false); }}
//         >🏠 Home</button>

//         {citizen && (
//           <button
//             className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
//             onClick={() => { navigate("/my-appointments"); setMenu(false); }}
//           >📅 My Appointments</button>
//         )}

//         {citizen ? (
//           <>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#CA9D28" }}
//               onClick={() => { navigate("/book-appointment"); setMenu(false); }}
//             >+ Book Appointment</button>
//             <button
//               className="cn-mobile-link"
//               style={{ color: "#f87171" }}
//               onClick={logout}
//             >🚪 Logout</button>
//           </>
//         ) : (
//           <>
//             <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
//             <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// =============================

import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/panvellogo.jpg";

export default function CitizenNavbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const citizen = (() => {
    try { return JSON.parse(localStorage.getItem("citizenUser") || "null"); } catch { return null; }
  })();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const logout = () => {
    localStorage.removeItem("citizenUser");
    navigate("/login");
    setMenu(false);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Tiro+Devanagari+Marathi:wght@400&family=Plus+Jakarta+Sans:wght@600;700;800&display=swap');

        .cn-outer {
          padding: 10px 20px;
          position: sticky;
          top: 0;
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .cn-outer.scrolled { padding: 6px 20px; }

        /* ── Main pill navbar ── */
        .cn-nav {
          background: linear-gradient(135deg, #187484 0%, #114e59 100%);
          padding: 0 16px 0 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          border-radius: 100px;
          width: 97%;
          max-width: 1300px;
          border: 2px solid rgba(202,157,40,0.5);
          box-shadow: 0 10px 36px rgba(0,0,0,0.3);
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
          overflow: visible;
        }
        .cn-outer.scrolled .cn-nav {
          height: 70px;
          width: 93%;
        }

        /* ── Brand pill — large protruding left section ── */
        .cn-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          cursor: pointer;
          background: linear-gradient(135deg, #1c8fa3 0%, #145f6f 100%);
          border: 2.5px solid rgba(202,157,40,0.75);
          border-radius: 100px;
          /* big protrusion top and bottom */
          padding: 10px 32px 10px 10px;
          margin-left: -3px;
          height: 110px;
          box-shadow:
            0 10px 30px rgba(0,0,0,0.4),
            0 0 0 5px rgba(202,157,40,0.1),
            inset 0 1px 0 rgba(255,255,255,0.15);
          transition: all 0.3s ease;
          flex-shrink: 0;
          position: relative;
          z-index: 2;
        }
        .cn-outer.scrolled .cn-brand {
          height: 86px;
          padding: 8px 26px 8px 8px;
          gap: 14px;
        }
        .cn-brand:hover {
          background: linear-gradient(135deg, #22a8bf 0%, #187080 100%);
          box-shadow: 0 12px 36px rgba(0,0,0,0.45), 0 0 0 5px rgba(202,157,40,0.22);
          transform: translateY(-2px);
        }

        /* ── Logo — VERY BIG ── */
        .cn-logo-wrap {
          width: 86px;
          height: 86px;
          border-radius: 50%;
          overflow: hidden;
          border: 3.5px solid #CA9D28;
          background: #fff;
          flex-shrink: 0;
          transition: all 0.3s ease;
          box-shadow:
            0 0 0 5px rgba(202,157,40,0.2),
            0 0 0 8px rgba(202,157,40,0.07),
            0 6px 20px rgba(0,0,0,0.35);
        }
        .cn-outer.scrolled .cn-logo-wrap {
          width: 66px;
          height: 66px;
        }
        .cn-logo-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* ── Brand text ── */
        .cn-brand-text {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        /* "वसई-विरार शहर महानगरपालिका" — very large bold */
        .cn-brand-name {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 24px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          white-space: nowrap;
          letter-spacing: 0.3px;
          text-shadow: 0 2px 8px rgba(0,0,0,0.4);
        }
        .cn-outer.scrolled .cn-brand-name { font-size: 19px; }

        /* "जन संवाद" — large bold golden */
        .cn-brand-sub {
          font-family: 'Tiro Devanagari Marathi', serif;
          font-size: 20px;
          font-weight: 700;
          color: #F5C030;
          line-height: 1.2;
          letter-spacing: 0.5px;
          text-shadow: 0 1px 6px rgba(0,0,0,0.3);
        }
        .cn-outer.scrolled .cn-brand-sub { font-size: 15px; }

        /* ── Nav Links ── */
        .cn-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .cn-link {
          padding: 9px 20px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          background: transparent;
          color: rgba(245,231,194,0.88);
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-link:hover { color: #CA9D28; background: rgba(255,255,255,0.07); }
        .cn-link.active {
          background: #CA9D28;
          color: #114e59;
          font-weight: 800;
          box-shadow: 0 4px 12px rgba(202,157,40,0.35);
        }

        .cn-citizen-name {
          font-size: 14px;
          color: #F5E7C2;
          font-weight: 700;
          padding: 0 8px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }

        /* ── Buttons ── */
        .cn-btn-solid {
          padding: 9px 24px;
          border-radius: 50px;
          border: none;
          background: linear-gradient(135deg, #CA9D28 0%, #CE9A54 100%);
          color: #1a3a44;
          font-size: 13.5px;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(202,157,40,0.3);
          font-family: 'Plus Jakarta Sans', sans-serif;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }
        .cn-btn-solid:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(202,157,40,0.5);
          filter: brightness(1.1);
        }
        .cn-btn-outline {
          padding: 9px 22px;
          border-radius: 50px;
          border: 1.5px solid #CA9D28;
          background: transparent;
          color: #CA9D28;
          font-size: 13.5px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
          white-space: nowrap;
        }
        .cn-btn-outline:hover { background: rgba(202,157,40,0.1); transform: translateY(-2px); }

        .cn-btn-danger {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1.5px solid rgba(248,113,113,0.5);
          background: rgba(248,113,113,0.1);
          color: #f87171;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }
        .cn-btn-danger:hover { background: #dc2626; color: #fff; border-color: #dc2626; transform: rotate(90deg); }

        /* ── Hamburger ── */
        .cn-ham {
          display: none;
          background: rgba(255,255,255,0.1);
          border: 1.5px solid #CA9D28;
          color: #CA9D28;
          font-size: 20px;
          cursor: pointer;
          padding: 6px 14px;
          border-radius: 50px;
          margin-right: 4px;
          flex-shrink: 0;
        }

        /* ── Mobile dropdown ── */
        .cn-mobile-menu {
          display: none;
          position: fixed;
          top: 112px;
          left: 16px;
          right: 16px;
          background: #187484;
          z-index: 999;
          padding: 14px;
          border-radius: 24px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.4);
          flex-direction: column;
          gap: 8px;
          border: 1.5px solid #CA9D28;
          animation: slideUp 0.3s ease;
        }
        @keyframes slideUp {
          from { opacity:0; transform:translateY(10px); }
          to   { opacity:1; transform:translateY(0); }
        }
        .cn-mobile-menu.open { display: flex; }
        .cn-mobile-link {
          padding: 12px 20px;
          border-radius: 14px;
          font-size: 14px;
          font-weight: 600;
          color: #F5E7C2;
          background: rgba(255,255,255,0.05);
          border: none;
          text-align: left;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .cn-mobile-link:hover { background: rgba(255,255,255,0.1); }
        .cn-mobile-link.active { background: #CA9D28; color: #187484; font-weight: 800; }

        /* ── Responsive ── */
        @media(max-width:960px){
          .cn-links { display: none; }
          .cn-ham { display: block; }
          .cn-nav { width: 96%; height: 80px; }
          .cn-brand { height: 96px; padding: 8px 24px 8px 8px; gap: 14px; }
          .cn-logo-wrap { width: 72px; height: 72px; }
          .cn-brand-name { font-size: 19px; }
          .cn-brand-sub { font-size: 16px; }
        }
        @media(max-width:640px){
          .cn-outer { padding: 8px 10px; }
          .cn-nav { width: 100%; height: 72px; }
          .cn-brand { height: 86px; padding: 7px 20px 7px 7px; gap: 12px; }
          .cn-logo-wrap { width: 62px; height: 62px; }
          .cn-brand-name { font-size: 16px; }
          .cn-brand-sub { font-size: 14px; }
        }
        @media(max-width:420px){
          .cn-brand { height: 80px; padding: 6px 16px 6px 6px; gap: 10px; }
          .cn-logo-wrap { width: 54px; height: 54px; }
          .cn-brand-name { font-size: 14px; }
          .cn-brand-sub { font-size: 12px; }
        }
      `}</style>

      <div className={`cn-outer${scrolled ? " scrolled" : ""}`}>
        <nav className="cn-nav">

          {/* ── Brand pill ── */}
          <div className="cn-brand" onClick={() => navigate("/")}>
            <div className="cn-logo-wrap">
              <img src={logo} alt="VVCMC" />
            </div>
            <div className="cn-brand-text">
              <span className="cn-brand-name">पनवेल महानगरपालिका</span>
              <span className="cn-brand-sub">जन संवाद</span>
            </div>
          </div>

          {/* ── Desktop links ── */}
          <div className="cn-links">
            <button
              className={`cn-link${isActive("/") ? " active" : ""}`}
              onClick={() => navigate("/")}
            >Home</button>

            {citizen && (
              <button
                className={`cn-link${isActive("/my-appointments") ? " active" : ""}`}
                onClick={() => navigate("/my-appointments")}
              >My Appointments</button>
            )}

            {citizen ? (
              <>
                <span className="cn-citizen-name">👋 {citizen.fullName?.split(" ")[0]}</span>
                <button className="cn-btn-solid" onClick={() => navigate("/book-appointment")}>+ Book</button>
                <button className="cn-btn-danger" onClick={logout} title="Logout">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18.36 6.64A9 9 0 1 1 5.64 6.64"/>
                    <line x1="12" y1="2" x2="12" y2="12"/>
                  </svg>
                </button>
              </>
            ) : (
              <>
                <button className="cn-btn-outline" onClick={() => navigate("/login")}>Login</button>
                <button className="cn-btn-solid" onClick={() => navigate("/register")}>Register</button>
              </>
            )}
          </div>

          <button className="cn-ham" onClick={() => setMenu(m => !m)}>
            {menu ? "✕" : "☰"}
          </button>
        </nav>
      </div>

      {/* ── Mobile menu ── */}
      <div className={`cn-mobile-menu${menu ? " open" : ""}`}>
        <button
          className={`cn-mobile-link${isActive("/") ? " active" : ""}`}
          onClick={() => { navigate("/"); setMenu(false); }}
        >🏠 Home</button>

        {citizen && (
          <button
            className={`cn-mobile-link${isActive("/my-appointments") ? " active" : ""}`}
            onClick={() => { navigate("/my-appointments"); setMenu(false); }}
          >📅 My Appointments</button>
        )}

        {citizen ? (
          <>
            <button
              className="cn-mobile-link"
              style={{ color: "#CA9D28" }}
              onClick={() => { navigate("/book-appointment"); setMenu(false); }}
            >+ Book Appointment</button>
            <button
              className="cn-mobile-link"
              style={{ color: "#f87171" }}
              onClick={logout}
            >🚪 Logout</button>
          </>
        ) : (
          <>
            <button className="cn-mobile-link" onClick={() => { navigate("/login"); setMenu(false); }}>🔐 Login</button>
            <button className="cn-mobile-link" onClick={() => { navigate("/register"); setMenu(false); }}>📝 Register</button>
          </>
        )}
      </div>
    </>
  );
}