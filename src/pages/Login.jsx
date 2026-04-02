
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";
import heroBg from "../assets/vvcmcbuildingbanner.png";
import mayorImg from "../assets/nitinpatilsir.jpeg";
// import logo from "../assets/logo2new.jpeg";
import logo from "../assets/panvellogo.jpg";


export default function Login() {
  const navigate = useNavigate();

  // ── Tab: "password" | "otp" ───────────────────────────────────────────────
  const [mode, setMode] = useState("password");

  // ── Password Login State ──────────────────────────────────────────────────
  const [form, setForm]         = useState({ username: "", password: "" });
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [showPass, setShowPass] = useState(false);

  // ── OTP Login State ───────────────────────────────────────────────────────
  const [otpStep, setOtpStep]           = useState("mobile"); // "mobile" | "otp"
  const [mobileNo, setMobileNo]         = useState("");
  const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft]         = useState(0);
  const [canResend, setCanResend]       = useState(false);
  const [otpLoading, setOtpLoading]     = useState(false);
  const otpRefs = useRef([]);

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  // ── Countdown Timer ───────────────────────────────────────────────────────
  useEffect(() => {
    if (timeLeft <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  // ── Password Login → POST /login ──────────────────────────────────────────
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.username || !form.password) {
      setError("सर्व fields भरा ❌");
      return;
    }
    try {
      setLoading(true);
      const res = await citizenAxios.post("/citizen/login", {
        username: form.username.trim(),
        password: form.password,
      });
      if (!res.data.success) {
        setError(res.data.message || "Login failed ❌");
        return;
      }
      localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
      localStorage.setItem("citizenToken", res.data.token || "");
      navigate("/my-appointments");
    } catch (e) {
      setError(e?.response?.data?.message || "Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  // ── Send OTP ──────────────────────────────────────────────────────────────
  const sendOtp = async () => {
    const mobile = mobileNo.trim();
    if (!/^[0-9]{10}$/.test(mobile)) {
      setError("10 अंकी valid mobile number टाका!");
      return;
    }

    setError("");
    setOtpLoading(true);

    const newOtp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(newOtp);
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);

    const smsText = `Dear Citizen ${newOtp} is OTP for VVCMC Divyang Kalyan Management System login for citizen registration.VVCMC`;
    const smsApiUrl = `https://1.rapidsms.co.in/api/push.json?apikey=67e12059b220a&route=&sender=VVMCDM&mobileno=${mobile}&text=${encodeURIComponent(smsText)}`;

    fetch(smsApiUrl, { method: "GET", mode: "no-cors" }).catch(() => {});

    setOtpStep("otp");
    setOtpLoading(false);
    setTimeout(() => otpRefs.current[0]?.focus(), 120);
  };

  // ── Verify OTP → POST /citizenLoginByMobile ───────────────────────────────
  const verifyOtp = async () => {
    const entered = otp.join("");
    if (entered.length < 6) { setError("6 अंकी OTP टाका!"); return; }
    if (timeLeft <= 0)       { setError("OTP expire झाला! पुन्हा पाठवा."); return; }

    if (entered !== generatedOtp) {
      setError("❌ चुकीचा OTP! पुन्हा try करा.");
      setOtp(["", "", "", "", "", ""]);
      setTimeout(() => otpRefs.current[0]?.focus(), 50);
      return;
    }

    try {
      setOtpLoading(true);
      setError("");
      const res = await citizenAxios.post("/citizen/citizenLoginByMobile", {
        mobileNo: mobileNo.trim(),
      });
      if (!res.data.success) {
        setError(res.data.message || "Login failed ❌");
        return;
      }
      localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
      localStorage.setItem("citizenToken", res.data.token || "");
      navigate("/my-appointments");
    } catch (err) {
      setError(err?.response?.data?.message || "Server Error ❌");
    } finally {
      setOtpLoading(false);
    }
  };

  // ── OTP Box Handlers ──────────────────────────────────────────────────────
  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...otp]; next[index] = value; setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0)
      otpRefs.current[index - 1]?.focus();
  };
  const handleOtpPaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const next = [...otp];
    pasted.split("").forEach((ch, i) => { next[i] = ch; });
    setOtp(next);
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  };

  const switchMode = (m) => {
    setMode(m);
    setError("");
    setOtpStep("mobile");
    setOtp(["", "", "", "", "", ""]);
    setMobileNo("");
    setTimeLeft(0);
    setShowPass(false);
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
          max-width: 950px;
          width: 95%;
          background: #fff;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.25);
        }

        .login-left {
          flex: 1;
          padding: 40px 45px;
          background: #fff;
        }

        .login-right {
          flex: 1;
          background: linear-gradient(135deg, #14b8a6, #0891b2);
          padding: 50px;
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
          top: -50px;
          right: -50px;
          width: 300px;
          height: 300px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }
        .login-right::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 250px;
          height: 250px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 50%;
        }

        .vvcmc-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 28px;
        }
        .vvcmc-logo {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
        }
        .vvcmc-text h3 {
          font-size: 15px;
          color: #b45309;
          font-weight: 700;
          margin: 0;
          line-height: 1.3;
        }
        .vvcmc-text p {
          font-size: 13px;
          color: #92400e;
          font-family: 'Noto Sans Devanagari', sans-serif;
          margin: 0;
        }

        .login-heading {
          margin-bottom: 8px;
        }
        .login-heading h1 {
          font-size: 32px;
          font-weight: 800;
          color: #111827;
          margin: 0;
        }
        .login-subheading {
          font-size: 14px;
          color: #6b7280;
          margin-bottom: 28px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .login-tabs {
          display: flex;
          background: #f3f4f6;
          border-radius: 12px;
          padding: 4px;
          margin-bottom: 24px;
        }
        .login-tab {
          flex: 1;
          padding: 10px;
          border: none;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          color: #6b7280;
          background: transparent;
          font-family: 'Inter', sans-serif;
        }
        .login-tab.active {
          background: #fff;
          color: #166534;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .login-error {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 10px;
          padding: 12px;
          font-size: 13px;
          color: #dc2626;
          margin-bottom: 20px;
          font-weight: 500;
        }

        .login-field {
          margin-bottom: 20px;
        }
        .login-label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: #374151;
          margin-bottom: 8px;
        }
        .login-input-wrapper {
          position: relative;
        }
        .login-input-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: #6b7280;
          font-size: 18px;
        }
        .login-input {
          width: 100%;
          padding: 12px 14px 12px 45px;
          font-size: 14px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          outline: none;
          font-family: 'Inter', sans-serif;
          transition: all 0.2s;
          background: #f9fafb;
          color: #111827;
        }
        .login-input:focus {
          border-color: #166534;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
          background: #fff;
        }
        .login-input::placeholder {
          color: #9ca3af;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .login-pass-toggle {
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          font-size: 18px;
          color: #6b7280;
          padding: 0;
        }
        .login-pass-toggle:hover {
          color: #374151;
        }

        .login-btn {
          width: 100%;
          padding: 13px;
          border-radius: 10px;
          border: none;
          background: linear-gradient(135deg, #166534, #16a34a);
          color: #fff;
          font-weight: 700;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s;
          box-shadow: 0 4px 14px rgba(22, 101, 52, 0.3);
          font-family: 'Inter', sans-serif;
        }
        .login-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(22, 101, 52, 0.4);
        }
        .login-btn:disabled {
          background: #d1d5db;
          cursor: not-allowed;
          box-shadow: none;
          transform: none;
        }

        .login-footer {
          text-align: center;
          margin-top: 24px;
          font-size: 13px;
          color: #6b7280;
        }
        .login-link {
          color: #166534;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
        }
        .login-link:hover {
          text-decoration: underline;
        }

        .mayor-section {
          position: relative;
          z-index: 1;
          text-align: center;
        }
        .mayor-img-wrapper {
          width: 180px;
          height: 180px;
          margin: 0 auto 20px;
          position: relative;
        }
        .mayor-img-border {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: linear-gradient(135deg, #f59e0b, #d97706);
          padding: 6px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }
        .mayor-img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: top center;
          border: 4px solid #fff;
          transform: none !important;
        }
        .mayor-chair-badge {
          position: absolute;
          bottom: 5px;
          right: 5px;
          width: 45px;
          height: 45px;
          background: #fff;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        .mayor-name {
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          margin-bottom: 8px;
          font-family: 'Noto Sans Devanagari', sans-serif;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }
        .mayor-title {
          font-size: 14px;
          color: rgba(255, 255, 255, 0.9);
          margin-bottom: 24px;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }

        .mayor-progress {
          width: 160px;
          height: 8px;
          background: rgba(255, 255, 255, 0.25);
          border-radius: 10px;
          overflow: hidden;
          margin: 0 auto;
        }
        .mayor-progress-bar {
          height: 100%;
          width: 65%;
          background: linear-gradient(90deg, #16a34a, #4ade80);
          border-radius: 10px;
        }

        .mayor-decorations {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          pointer-events: none;
        }
        .mayor-icon {
          position: absolute;
          font-size: 50px;
          opacity: 0.15;
          color: #fff;
        }
        .mayor-icon-1 { top: 15%; left: 8%; }
        .mayor-icon-2 { top: 25%; right: 12%; }
        .mayor-icon-3 { bottom: 20%; left: 10%; }
        .mayor-icon-4 { bottom: 15%; right: 8%; }

        .otp-mobile-prefix {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 13px;
          font-weight: 700;
          color: #374151;
        }
        .login-input.with-prefix {
          padding-left: 75px;
        }

        .otp-boxes {
          display: flex;
          gap: 8px;
          justify-content: center;
          margin-bottom: 20px;
        }
        .otp-box {
          width: 45px;
          height: 52px;
          border: 1.5px solid #d1d5db;
          border-radius: 10px;
          font-size: 22px;
          font-weight: 800;
          text-align: center;
          color: #111827;
          outline: none;
          background: #f9fafb;
          transition: all 0.2s;
        }
        .otp-box:focus {
          border-color: #166534;
          background: #fff;
          box-shadow: 0 0 0 3px rgba(22, 101, 52, 0.1);
        }

        .otp-timer {
          text-align: center;
          font-size: 13px;
          color: #6b7280;
          margin-bottom: 16px;
        }
        .otp-timer strong {
          font-size: 14px;
        }

        .otp-back-btn {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 600;
          color: #6b7280;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          margin-bottom: 16px;
          padding: 0;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }
        .otp-back-btn:hover {
          color: #166534;
        }

        .resend-btn {
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s;
          font-family: 'Noto Sans Devanagari', sans-serif;
        }
        .resend-btn:disabled {
          color: #94a3b8;
          cursor: not-allowed;
        }
        .resend-btn:not(:disabled) {
          color: #f97316;
        }
        .resend-btn:not(:disabled):hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .login-card-wrapper {
            flex-direction: column;
          }
          .login-right {
            padding: 40px 30px;
          }
          .mayor-img-wrapper {
            width: 140px;
            height: 140px;
          }
        }
      `}</style>

      <div className="login-container">
        <div className="login-card-wrapper">
{/* >>>>>>> */}
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
              <h1>Welcome Back</h1>
            </div>
            <div className="login-subheading">
              Mayor Appointment Portal वर login करा
            </div>

            {/* ── TABS ── */}
            <div className="login-tabs">
              <button
                className={`login-tab ${mode === "password" ? "active" : ""}`}
                onClick={() => switchMode("password")}
              >
                🔒 Password Login
              </button>
              <button
                className={`login-tab ${mode === "otp" ? "active" : ""}`}
                onClick={() => switchMode("otp")}
              >
                📱 OTP Login
              </button>
            </div>

            {/* ── Error Box ── */}
            {error && <div className="login-error">⚠️ {error}</div>}

            {/* ════════ PASSWORD TAB ════════ */}
            {mode === "password" && (
              <div>
                <form onSubmit={handleLogin}>
                  <div className="login-field">
                    <label className="login-label">Username</label>
                    <div className="login-input-wrapper">
                      <span className="login-input-icon">👤</span>
                      <input
                        className="login-input"
                        type="text"
                        placeholder="Username टाका"
                        value={form.username}
                        onChange={ch("username")}
                        autoComplete="username"
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className="login-field">
                    <label className="login-label">Password</label>
                    <div className="login-input-wrapper">
                      <span className="login-input-icon">🔒</span>
                      <input
                        className="login-input"
                        type={showPass ? "text" : "password"}
                        placeholder="Password टाका"
                        value={form.password}
                        onChange={ch("password")}
                        autoComplete="current-password"
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
                  </div>

                  <button
                    type="submit"
                    className="login-btn"
                    disabled={loading || !form.username || !form.password}
                  >
                    {loading ? "⏳ Logging in..." : "🔐 Login"}
                  </button>

                  <div className="login-footer">
                    Account नाही?{" "}
                    <span className="login-link" onClick={() => navigate("/register")}>
                      Register करा
                    </span>
                  </div>
                </form>
              </div>
            )}

            {/* ════════ OTP TAB ════════ */}
            {mode === "otp" && (
              <div>

                {/* STEP 1 — Mobile Number Input */}
                {otpStep === "mobile" && (
                  <>
                    <div className="login-field">
                      <label className="login-label">Mobile Number</label>
                      <div className="login-input-wrapper">
                        <span className="otp-mobile-prefix">🇮🇳 +91</span>
                        <input
                          className="login-input with-prefix"
                          type="tel"
                          maxLength={10}
                          placeholder="10 अंकी नंबर"
                          value={mobileNo}
                          onChange={(e) =>
                            setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))
                          }
                          onKeyDown={(e) => e.key === "Enter" && sendOtp()}
                          autoFocus
                        />
                      </div>
                    </div>

                    <button
                      className="login-btn"
                      onClick={sendOtp}
                      disabled={mobileNo.length !== 10 || otpLoading}
                    >
                      {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
                    </button>

                    <div className="login-footer">
                      Account नाही?{" "}
                      <span className="login-link" onClick={() => navigate("/register")}>
                        Register करा
                      </span>
                    </div>
                  </>
                )}

                {/* STEP 2 — OTP Entry */}
                {otpStep === "otp" && (
                  <>
                    <button
                      className="otp-back-btn"
                      onClick={() => {
                        setOtpStep("mobile");
                        setOtp(["", "", "", "", "", ""]);
                        setError("");
                      }}
                    >
                      ← मागे जा
                    </button>

                    <div style={{ fontSize: 13, color: "#64748b", marginBottom: 16 }}>
                      <span style={{ color: "#f97316", fontWeight: 700 }}>
                        +91 ******{mobileNo.slice(-3)}
                      </span>{" "}
                      वर OTP पाठवला
                    </div>

                    {/* 6-box OTP input */}
                    <div className="otp-boxes" onPaste={handleOtpPaste}>
                      {otp.map((digit, i) => (
                        <input
                          key={i}
                          ref={(el) => (otpRefs.current[i] = el)}
                          className="otp-box"
                          type="tel"
                          maxLength={1}
                          value={digit}
                          placeholder="·"
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(i, e)}
                        />
                      ))}
                    </div>

                    {/* Timer & Resend */}
                    <div className="otp-timer">
                      {timeLeft > 0 ? (
                        <>
                          OTP expire होईल:{" "}
                          <strong style={{ color: timeLeft <= 15 ? "#dc2626" : "#f97316" }}>
                            {formatTime(timeLeft)}
                          </strong>
                        </>
                      ) : (
                        <span style={{ color: "#dc2626", fontWeight: 600 }}>
                          OTP expire झाला!
                        </span>
                      )}
                      <div style={{ marginTop: 6 }}>
                        OTP नाही मिळाला?{" "}
                        <button
                          className="resend-btn"
                          onClick={sendOtp}
                          disabled={!canResend}
                        >
                          पुन्हा पाठवा
                        </button>
                      </div>
                    </div>

                    <button
                      className="login-btn"
                      onClick={verifyOtp}
                      disabled={otp.join("").length < 6 || otpLoading}
                    >
                      {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
                    </button>
                  </>
                )}
              </div>
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
            </div>
          </div>

        </div>
      </div>
    </>
  );
}