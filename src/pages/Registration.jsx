import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";
import heroBg from "../assets/vvcmcbuildingbanner.png";
// import mayorImg from "../assets/ajivir5.jpeg";
import mayorImg from "../assets/nitinpatilsir.jpeg";

import logo from "../assets/panvellogo.jpg";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm]       = useState({ fullName: "", userName: "", mobileNumber: "", email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState("");
  const [success, setSuccess] = useState(false);
  const [showPass, setShowPass]        = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.fullName || !form.mobileNumber || !form.password) { setError("सर्व required fields भरा ❌"); return; }
    if (!/^\d{10}$/.test(form.mobileNumber)) { setError("Mobile number 10 digits असावा ❌"); return; }
    if (form.password.length < 6) { setError("Password किमान 6 characters असावा ❌"); return; }
    if (form.password !== form.confirmPassword) { setError("Passwords जुळत नाहीत ❌"); return; }
    try {
      setLoading(true);
      const res = await citizenAxios.post("/citizen/register", {
        fullName: form.fullName, userName: form.userName, mobileNumber: form.mobileNumber,address: form.address,pincode: form.pincode,
        email: form.email, password: form.password,
      });
      if (!res.data.success) { setError(res.data.message || "Registration failed ❌"); return; }
      setSuccess(true);
      setTimeout(() => navigate("/login"), 2000);
    } catch (e) {
      setError(e?.response?.data?.message || "Server Error ❌");
    } finally { setLoading(false); }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700;800&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }

        .login-container {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: url(${heroBg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: relative;
          font-family: 'Inter', 'Noto Sans Devanagari', sans-serif;
        }
        .login-container::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(22, 101, 52, 0.75);
        }

        .login-card-wrapper {
          position: relative;
          z-index: 1;
          display: flex;
          max-width: 980px;
          width: 95%;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
          my: 32px;
        }

        /* ── Left Panel ── */
        .login-left {
          flex: 1.2;
          padding: 36px 42px;
          background: #fff;
          overflow-y: auto;
        }

        /* ── Right Panel ── */
        .login-right {
          flex: 0.8;
          background: linear-gradient(135deg, #14b8a6, #0891b2);
          padding: 50px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }
        .login-right::before {
          content: '';
          position: absolute;
          top: -50px; right: -50px;
          width: 300px; height: 300px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .login-right::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 250px; height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        /* ── VVCMC Header ── */
        .vvcmc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
        }
        .vvcmc-logo {
          width: 52px; height: 52px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 24px;
          flex-shrink: 0;
        }
        .vvcmc-text h3 { font-size: 15px; color: #b45309; font-weight: 700; margin: 0; line-height: 1.3; }
        .vvcmc-text p  { font-size: 13px; color: #92400e; font-family: 'Noto Sans Devanagari', sans-serif; margin: 0; }

        /* ── Heading ── */
        .login-heading { margin-bottom: 4px; }
        .login-heading h1 { font-size: 28px; font-weight: 800; color: #111827; margin: 0; }
        .login-subheading {
          font-size: 14px; color: #6b7280;
          margin-bottom: 20px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        /* ── Error / Success ── */
        .login-error {
          background: #fef2f2; border: 1px solid #fecaca;
          border-radius: 10px; padding: 12px;
          font-size: 13px; color: #dc2626; margin-bottom: 16px; font-weight: 500;
        }
        .login-success {
          background: #f0fdf4; border: 1px solid #86efac;
          border-radius: 10px; padding: 18px;
          font-size: 14px; color: #166534; font-weight: 600;
          text-align: center; margin-bottom: 16px;
        }

        /* ── 2-col grid ── */
        .reg-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0 18px;
        }
        .reg-field      { margin-bottom: 16px; }
        .reg-field.full { grid-column: 1 / -1; }

        /* ── Label ── */
        .login-label {
          display: block; font-size: 13px; font-weight: 600;
          color: #374151; margin-bottom: 6px;
        }
        .req { color: #ef4444; margin-left: 2px; }

        /* ── Input wrapper ── */
        .login-input-wrapper { position: relative; }
        .login-input-icon {
          position: absolute; left: 14px; top: 50%;
          transform: translateY(-50%);
          color: #6b7280; font-size: 16px; pointer-events: none;
        }
        .login-input {
          width: 100%;
          padding: 11px 14px 11px 42px;
          font-size: 13.5px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          background: #f9fafb;
          color: #111827;
        }
        .login-input.no-icon { padding-left: 14px; }
        .login-input:focus {
          border-color: #166534;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
          background: #fff;
        }
        .login-input::placeholder { color: #9ca3af; font-family: 'Noto Sans Devanagari', sans-serif; }

        .login-pass-toggle {
          position: absolute; right: 12px; top: 50%;
          transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          font-size: 16px; color: #6b7280; padding: 0;
        }
        .login-pass-toggle:hover { color: #374151; }

        .input-hint { font-size: 11px; color: #9ca3af; margin-top: 4px; }

        /* ── Button ── */
        .login-btn {
          width: 100%; padding: 13px; border-radius: 10px; border: none;
          background: linear-gradient(135deg, #166534, #16a34a);
          color: #fff; font-weight: 700; font-size: 14px;
          cursor: pointer; transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(22, 101, 52, 0.3);
          font-family: 'Inter', sans-serif;
          margin-top: 4px;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 101, 52, 0.4);
        }
        .login-btn:disabled { background: #d1d5db; cursor: not-allowed; box-shadow: none; transform: none; }

        /* ── Footer ── */
        .login-footer { text-align: center; margin-top: 20px; font-size: 13px; color: #6b7280; }
        .login-link { color: #166534; font-weight: 700; cursor: pointer; }
        .login-link:hover { text-decoration: underline; }

        /* ── Right panel ── */
        .mayor-section { position: relative; z-index: 1; text-align: center; }
        .mayor-img-wrapper {
          width: 170px; height: 170px;
          margin: 0 auto 20px; position: relative;
        }
        .mayor-img-border {
          width: 100%; height: 100%; border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          padding: 6px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);
        }
        .mayor-img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; object-position: top center; border: 4px solid #fff; transform: none !important; scale: 1 !important; direction: ltr !important; }
        .mayor-chair-badge {
          position: absolute; bottom: 5px; right: 5px;
          width: 42px; height: 42px; background: #fff;
          border-radius: 50%; display: flex; align-items: center; justify-content: center;
          font-size: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }
        .mayor-name {
          font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 8px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          text-shadow: 0 2px 8px rgba(0,0,0,0.2);
        }
        .mayor-title { font-size: 14px; color: rgba(255,255,255,0.9); margin-bottom: 20px; font-family: 'Noto Sans Devanagari', sans-serif; }
        .mayor-progress { width: 160px; height: 8px; background: rgba(255,255,255,0.25); border-radius: 10px; overflow: hidden; margin: 0 auto 24px; }
        .mayor-progress-bar { height: 100%; width: 65%; background: linear-gradient(90deg, #16a34a, #4ade80); border-radius: 10px; }

        .mayor-info-card {
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 14px;
          padding: 16px 20px;
          text-align: left;
        }
        .mayor-info-item {
          display: flex; align-items: center; gap: 10px;
          font-size: 13px; color: rgba(255,255,255,0.9);
          font-family: 'Noto Sans Devanagari', sans-serif;
          padding: 6px 0;
        }
        .mayor-info-item:not(:last-child) { border-bottom: 1px solid rgba(255,255,255,0.12); }
        .mayor-info-icon { font-size: 18px; flex-shrink: 0; }

        .mayor-decorations { position: absolute; width: 100%; height: 100%; top: 0; left: 0; pointer-events: none; }
        .mayor-icon { position: absolute; font-size: 50px; opacity: 0.12; color: #fff; }
        .mayor-icon-1 { top: 10%; left: 6%; }
        .mayor-icon-2 { top: 20%; right: 8%; }
        .mayor-icon-3 { bottom: 22%; left: 8%; }
        .mayor-icon-4 { bottom: 12%; right: 6%; }

        @media (max-width: 768px) {
          .login-card-wrapper { flex-direction: column; }
          .login-left { padding: 28px 24px; }
          .login-right { padding: 40px 24px; }
          .reg-grid { grid-template-columns: 1fr; }
          .reg-field.full { grid-column: 1; }
          .mayor-img-wrapper { width: 130px; height: 130px; }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card-wrapper">

          {/* ── Left Panel (Form) ── */}
          <div className="login-left">

            <div className="vvcmc-header">
              {/* <div className="vvcmc-logo">🏛️</div> */}
               <div className="vvcmc-logo">
                <img src={logo} alt="VVCMC Logo" style={{ width: "50px", height: "50px", borderRadius: "50%", objectFit: "cover" }} />
              </div>
              <div className="vvcmc-text">
                <h3>पनवेल महानगरपालिका</h3>
                <p>जन संवाद</p>
              </div>
            </div>

            <div className="login-heading">
              <h1>Account तयार करा</h1>
            </div>
            <div className="login-subheading">
              Mayor Appointment बुक करण्यासाठी register करा
            </div>

            {/* ── Success ── */}
            {success ? (
              <div className="login-success">
                ✅ Registration successful!<br />
                <span style={{ fontSize: 13, fontWeight: 400 }}>Login page वर redirect होत आहे...</span>
              </div>
            ) : (
              <>
                {error && <div className="login-error">⚠️ {error}</div>}

                <form onSubmit={handleRegister}>
                  <div className="reg-grid">

                    {/* Full Name */}
                    <div className="reg-field">
                      <label className="login-label">Full Name <span className="req">*</span></label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">👤</span>
                        <input
                          className="login-input"
                          type="text"
                          placeholder="आपले पूर्ण नाव"
                          value={form.fullName}
                          onChange={ch("fullName")}
                          autoFocus
                        />
                      </div>
                    </div>

                    {/* User Name */}
                    <div className="reg-field">
                      <label className="login-label">User Name</label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">🪪</span>
                        <input
                          className="login-input"
                          type="text"
                          placeholder="Username"
                          value={form.userName}
                          onChange={ch("userName")}
                        />
                      </div>
                    </div>

                    {/* Mobile */}
                    <div className="reg-field">
                      <label className="login-label">Mobile Number <span className="req">*</span></label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">📱</span>
                        <input
                          className="login-input"
                          type="tel"
                          placeholder="10 digit mobile"
                          value={form.mobileNumber}
                          onChange={ch("mobileNumber")}
                          maxLength={10}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="reg-field">
                      <label className="login-label">Email</label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">✉️</span>
                        <input
                          className="login-input"
                          type="email"
                          placeholder="Email (optional)"
                          value={form.email}
                          onChange={ch("email")}
                        />
                      </div>
                    </div>
                      <div className="reg-field">
                      <label className="login-label">Address</label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">📱</span>
                        <input
                          className="login-input"
                          type="text"
                          placeholder="Address"
                          value={form.address}
                          onChange={ch("address")}
                         
                        />
                      </div>
                    </div>
                       <div className="reg-field">
                      <label className="login-label">Pincode</label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">📱</span>
                        <input
                          className="login-input"
                          type="text"
                          placeholder="Pincode"
                          value={form.pincode}
                          onChange={ch("pincode")}
                          maxLength={6}
                        />
                      </div>
                    </div>
                    

                    {/* Password */}
                    <div className="reg-field">
                      <label className="login-label">Password <span className="req">*</span></label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">🔒</span>
                        <input
                          className="login-input"
                          type={showPass ? "text" : "password"}
                          placeholder="Min. 6 characters"
                          value={form.password}
                          onChange={ch("password")}
                        />
                        <button
                          type="button"
                          className="login-pass-toggle"
                          onClick={() => setShowPass(!showPass)}
                          tabIndex={-1}
                        >
                          {showPass ? "👁️" : "👁️‍🗨️"}
                        </button>
                      </div>
                      <div className="input-hint">किमान 6 characters</div>
                    </div>

                    {/* Confirm Password */}
                    <div className="reg-field">
                      <label className="login-label">Confirm Password <span className="req">*</span></label>
                      <div className="login-input-wrapper">
                        <span className="login-input-icon">🔐</span>
                        <input
                          className="login-input"
                          type={showConfirmPass ? "text" : "password"}
                          placeholder="Password परत टाका"
                          value={form.confirmPassword}
                          onChange={ch("confirmPassword")}
                        />
                        <button
                          type="button"
                          className="login-pass-toggle"
                          onClick={() => setShowConfirmPass(!showConfirmPass)}
                          tabIndex={-1}
                        >
                          {showConfirmPass ? "👁️" : "👁️‍🗨️"}
                        </button>
                      </div>
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="login-btn"
                    disabled={loading || !form.fullName || !form.mobileNumber || !form.password || !form.confirmPassword}
                  >
                    {loading ? "⏳ Registering..." : "✅ Register करा"}
                  </button>
                </form>

                <div className="login-footer">
                  आधीच account आहे?{" "}
                  <span className="login-link" onClick={() => navigate("/login")}>Login करा</span>
                </div>
              </>
            )}
          </div>

          {/* ── Right Panel (Mayor) ── */}
          <div className="login-right">
            <div className="mayor-decorations">
              <div className="mayor-icon mayor-icon-1">🏛️</div>
              <div className="mayor-icon mayor-icon-2">🤝</div>
              <div className="mayor-icon mayor-icon-3">🏢</div>
              <div className="mayor-icon mayor-icon-4">🏙️</div>
            </div>

            <div className="mayor-section">
              <div className="mayor-img-wrapper">
                <div className="mayor-img-border">
                  <img src={mayorImg} alt="Mayor" className="mayor-img" />
                </div>
                <div className="mayor-chair-badge">🪑</div>
              </div>

              <h2 className="mayor-name">मा. श्री.नितीन पाटील</h2>
              <p className="mayor-title">मा. महापौर, पनवेल महानगरपालिका</p>

              <div className="mayor-progress">
                <div className="mayor-progress-bar"></div>
              </div>

              <div className="mayor-info-card">
                <div className="mayor-info-item">
                  <span className="mayor-info-icon">📅</span>
                  <span>Appointment सहज बुक करा</span>
                </div>
                <div className="mayor-info-item">
                  <span className="mayor-info-icon">🔔</span>
                  <span>SMS द्वारे notification मिळवा</span>
                </div>
                <div className="mayor-info-item">
                  <span className="mayor-info-icon">🛡️</span>
                  <span>Secure Government Portal</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}