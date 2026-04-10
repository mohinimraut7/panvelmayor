import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import citizenAxios from "../services/citizenAxios";
import heroBg from "../assets/vvcmcbuildingbanner.png";
import mayorImg from "../assets/nitinpatilsir.jpeg";
import logo from "../assets/panvellogo.jpg";
import meeting1 from "../assets/nitinpatilsirgroup1.png";


export default function Login() {
  const navigate = useNavigate();

  const [mode, setMode] = useState("password");
  const [form, setForm]         = useState({ username: "", password: "" });
  const [loading, setLoading]   = useState(false);
  const [error, setError]       = useState("");
  const [showPass, setShowPass] = useState(false);

  const [otpStep, setOtpStep]           = useState("mobile");
  const [mobileNo, setMobileNo]         = useState("");
  const [otp, setOtp]                   = useState(["", "", "", "", "", ""]);
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [timeLeft, setTimeLeft]         = useState(0);
  const [canResend, setCanResend]       = useState(false);
  const [otpLoading, setOtpLoading]     = useState(false);
  const otpRefs = useRef([]);

  const ch = (f) => (e) => setForm(p => ({ ...p, [f]: e.target.value }));

  useEffect(() => {
    if (timeLeft <= 0) { setCanResend(true); return; }
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const formatTime = (s) =>
    `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.username || !form.password) { setError("सर्व fields भरा ❌"); return; }
    try {
      setLoading(true);
      const res = await citizenAxios.post("/citizen/login", {
        username: form.username.trim(),
        password: form.password,
      });
      if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
      localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
      localStorage.setItem("citizenToken", res.data.token || "");
      navigate("/my-appointments");
    } catch (e) {
      setError(e?.response?.data?.message || "Server Error ❌");
    } finally {
      setLoading(false);
    }
  };

  const sendOtp = async () => {
    const mobile = mobileNo.trim();
    if (!/^[0-9]{10}$/.test(mobile)) { setError("10 अंकी valid mobile number टाका!"); return; }
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
      const res = await citizenAxios.post("/citizen/citizenLoginByMobile", { mobileNo: mobileNo.trim() });
      if (!res.data.success) { setError(res.data.message || "Login failed ❌"); return; }
      localStorage.setItem("citizenUser",  JSON.stringify(res.data.citizen));
      localStorage.setItem("citizenToken", res.data.token || "");
      navigate("/my-appointments");
    } catch (err) {
      setError(err?.response?.data?.message || "Server Error ❌");
    } finally {
      setOtpLoading(false);
    }
  };

  const handleOtpChange = (index, value) => {
    if (!/^[0-9]?$/.test(value)) return;
    const next = [...otp]; next[index] = value; setOtp(next);
    if (value && index < 5) otpRefs.current[index + 1]?.focus();
  };
  const handleOtpKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) otpRefs.current[index - 1]?.focus();
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
    setMode(m); setError(""); setOtpStep("mobile");
    setOtp(["", "", "", "", "", ""]); setMobileNo(""); setTimeLeft(0); setShowPass(false);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@400;500;600;700;800&family=Crimson+Pro:wght@400;600;700;800&family=DM+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }

        :root {
          --navy:    #0D1F5C;
          --royal:   #1B3A8C;
          --gold:    #C9A227;
          --gold-lt: #E8C84A;
          --gold-dk: #A07D10;
          --cream:   #FDF8EC;
        }

        .lp-root {
          min-height: 100vh;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          font-family: 'DM Sans', 'Noto Sans Devanagari', sans-serif;
          overflow: hidden;
          background: var(--navy);
        }
        .lp-bg {
          position:absolute; inset:0;
          background-image: url(${heroBg});
          background-size:cover; background-position:center;
          background-repeat:no-repeat; z-index:0;
        }
        .lp-bg::after {
          content:''; position:absolute; inset:0;
          background: linear-gradient(135deg, rgba(13,31,92,0.93) 0%, rgba(27,58,140,0.88) 40%, rgba(13,31,92,0.95) 100%);
        }
        .lp-orb { position:absolute; border-radius:50%; pointer-events:none; z-index:1; animation:orbFloat 8s ease-in-out infinite; }
        .lp-orb-1 { width:380px;height:380px;top:-120px;right:-100px;background:radial-gradient(circle,rgba(201,162,39,0.18) 0%,transparent 70%);animation-delay:0s; }
        .lp-orb-2 { width:280px;height:280px;bottom:-80px;left:-60px;background:radial-gradient(circle,rgba(201,162,39,0.12) 0%,transparent 70%);animation-delay:3s; }
        @keyframes orbFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-20px)} }

        /* ── CARD ── */
        .lp-card {
          position:relative; z-index:10;
          display:flex; width:min(840px,95vw);
          border-radius:28px; overflow:hidden;
          box-shadow: 0 0 0 1px rgba(201,162,39,0.3), 0 40px 80px rgba(0,0,0,0.5);
          animation: cardReveal 0.7s cubic-bezier(0.22,1,0.36,1) both;
        }
        @keyframes cardReveal {
          0%{opacity:0;transform:translateY(32px) scale(0.97)}
          100%{opacity:1;transform:translateY(0) scale(1)}
        }

        /* ── LEFT PANEL ── */
        .lp-left {
          flex:1; padding:28px 34px;          /* compact padding */
          background:var(--cream); position:relative; overflow:hidden;
        }
        .lp-left::before {
          content:''; position:absolute; top:0; left:0; right:0; height:4px;
          background:linear-gradient(90deg,var(--gold-dk),var(--gold),var(--gold-lt),var(--gold));
        }

        /* Header */
        .lp-header {
          display:flex; align-items:center; gap:12px;
          margin-bottom:18px; padding-bottom:16px;
          border-bottom:1.5px solid rgba(201,162,39,0.2);
        }
        .lp-logo-ring {
          width:50px; height:50px; border-radius:50%; padding:3px; flex-shrink:0;
          background:linear-gradient(135deg,var(--gold),var(--gold-lt),var(--gold-dk));
          box-shadow:0 4px 14px rgba(201,162,39,0.35);
        }
        .lp-logo-ring img { width:100%;height:100%;border-radius:50%;object-fit:cover;border:2px solid #fff; }
        .lp-org-name { font-family:'Noto Sans Devanagari',sans-serif; font-size:14px;font-weight:800;color:var(--navy);line-height:1.3; }
        .lp-org-sub  { font-size:11px;color:var(--gold-dk);font-weight:600;letter-spacing:0.4px; }

        /* Tabs */
        .lp-tabs {
          display:flex; background:rgba(13,31,92,0.07);
          border-radius:12px; padding:4px; margin-bottom:16px;
          border:1px solid rgba(13,31,92,0.1);
        }
        .lp-tab {
          flex:1; padding:9px 8px; border:none; border-radius:10px;
          font-size:13px;font-weight:600;cursor:pointer;transition:all 0.25s;
          color:#7a849a;background:transparent;font-family:'DM Sans',sans-serif;
        }
        .lp-tab.active { background:var(--navy);color:var(--gold-lt);box-shadow:0 3px 12px rgba(13,31,92,0.35); }

        /* Error */
        .lp-error {
          background:#fff0f0;border:1px solid #ffc5c5;border-left:3px solid #dc2626;
          border-radius:10px;padding:10px 13px;font-size:13px;color:#b91c1c;
          margin-bottom:14px;font-weight:500;display:flex;align-items:center;gap:8px;
        }

        /* Field */
        .lp-field { margin-bottom:14px; }
        .lp-label { display:block;font-size:11px;font-weight:700;color:var(--navy);margin-bottom:5px;letter-spacing:0.4px;text-transform:uppercase; }
        .lp-input-wrap { position:relative; }
        .lp-icon { position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:15px;color:var(--royal);opacity:0.7; }
        .lp-input {
          width:100%;padding:10px 12px 10px 40px;font-size:13.5px;
          border:1.5px solid rgba(13,31,92,0.18);border-radius:10px;outline:none;
          font-family:'DM Sans','Noto Sans Devanagari',sans-serif;
          transition:all 0.2s;background:#fff;color:#111827;
          box-shadow:0 1px 4px rgba(13,31,92,0.05);
        }
        .lp-input:focus { border-color:var(--royal);box-shadow:0 0 0 3px rgba(27,58,140,0.12);background:#fff; }
        .lp-input::placeholder { color:#b0b8cc;font-family:'Noto Sans Devanagari',sans-serif;font-size:12.5px; }
        .lp-pass-toggle { position:absolute;right:12px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:16px;color:#8090a8;padding:0;transition:color 0.2s; }
        .lp-pass-toggle:hover { color:var(--navy); }

        /* Button */
        .lp-btn {
          width:100%;padding:12px;border-radius:11px;border:none;
          background:linear-gradient(135deg,var(--navy) 0%,var(--royal) 100%);
          color:var(--gold-lt);font-weight:700;font-size:14px;
          cursor:pointer;transition:all 0.25s;
          box-shadow:0 4px 18px rgba(13,31,92,0.35);
          font-family:'DM Sans',sans-serif;letter-spacing:0.3px;
        }
        .lp-btn:hover:not(:disabled) { transform:translateY(-2px);box-shadow:0 8px 24px rgba(13,31,92,0.45); }
        .lp-btn:disabled { background:#d1d5db;color:#9ca3af;cursor:not-allowed;box-shadow:none;transform:none; }

        /* Footer */
        .lp-footer { text-align:center;margin-top:14px;font-size:13px;color:#6b7280; }
        .lp-link { color:var(--royal);font-weight:700;cursor:pointer;text-decoration:none;transition:color 0.2s; }
        .lp-link:hover { color:var(--navy);text-decoration:underline; }

        /* OTP prefix */
        .lp-prefix { position:absolute;left:12px;top:50%;transform:translateY(-50%);font-size:13px;font-weight:700;color:var(--navy);display:flex;align-items:center;gap:4px; }
        .lp-input.with-prefix { padding-left:78px; }

        /* OTP boxes */
        .lp-otp-boxes { display:flex;gap:7px;justify-content:center;margin-bottom:14px; }
        .lp-otp-box {
          width:43px;height:50px;border:1.5px solid rgba(13,31,92,0.18);border-radius:11px;
          font-size:22px;font-weight:800;text-align:center;color:var(--navy);
          outline:none;background:#fff;transition:all 0.2s;font-family:'Crimson Pro',serif;
        }
        .lp-otp-box:focus { border-color:var(--gold);box-shadow:0 0 0 3px rgba(201,162,39,0.18);background:#fffdf5; }

        /* Timer / back / resend */
        .lp-timer { text-align:center;font-size:13px;color:#6b7280;margin-bottom:14px; }
        .lp-back-btn { background:none;border:none;font-size:13px;font-weight:600;color:#6b7280;cursor:pointer;display:flex;align-items:center;gap:4px;margin-bottom:12px;padding:0;font-family:'DM Sans',sans-serif;transition:color 0.2s; }
        .lp-back-btn:hover { color:var(--navy); }
        .lp-resend { background:none;border:none;font-size:13px;font-weight:700;cursor:pointer;transition:all 0.2s;font-family:'DM Sans',sans-serif; }
        .lp-resend:disabled { color:#94a3b8;cursor:not-allowed; }
        .lp-resend:not(:disabled) { color:var(--gold-dk); }
        .lp-resend:not(:disabled):hover { text-decoration:underline; }

        /* ── RIGHT PANEL ── */
        .lp-right {
          width:310px;flex-shrink:0;
          background:linear-gradient(160deg,var(--royal) 0%,var(--navy) 60%,#080f30 100%);
          padding:40px 28px;
          display:flex;flex-direction:column;align-items:center;justify-content:center;
          position:relative;overflow:hidden;
        }
        .lp-right::before {
          content:'';position:absolute;top:0;left:0;right:0;height:4px;
          background:linear-gradient(90deg,var(--gold-dk),var(--gold),var(--gold-lt));z-index:2;
        }
        .lp-right-deco { position:absolute;inset:0;pointer-events:none;overflow:hidden; }
        .lp-right-deco::before {
          content:'';position:absolute;top:-80px;right:-80px;width:280px;height:280px;border-radius:50%;
          background:radial-gradient(circle,rgba(201,162,39,0.15) 0%,transparent 60%);
        }
        .lp-right-deco::after {
          content:'';position:absolute;bottom:-60px;left:-60px;width:200px;height:200px;border-radius:50%;
          background:radial-gradient(circle,rgba(40,80,184,0.3) 0%,transparent 60%);
        }

        /* Chevrons */
        .lp-chevrons { position:absolute;top:18px;right:12px;opacity:0.13;pointer-events:none; }

        /* Floating icons */
        .lp-float { position:absolute;font-size:38px;opacity:0.07;color:#fff;animation:iconDrift 6s ease-in-out infinite;pointer-events:none; }
        .lp-float-1{top:10%;left:8%;animation-delay:0s}
        .lp-float-2{top:20%;right:10%;animation-delay:1.5s}
        .lp-float-3{bottom:22%;left:6%;animation-delay:3s}
        .lp-float-4{bottom:10%;right:8%;animation-delay:4.5s}
        @keyframes iconDrift { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(5deg)} }

        /* Mayor */
        .lp-mayor-wrap { position:relative;z-index:2;text-align:center; }
        .lp-mayor-ring {
          width:155px;height:155px;margin:0 auto 16px;border-radius:50%;padding:4px;
          background:linear-gradient(135deg,var(--gold-dk),var(--gold),var(--gold-lt),var(--gold));
          box-shadow:0 0 0 6px rgba(201,162,39,0.15),0 16px 48px rgba(0,0,0,0.4);
          animation:mayorGlow 4s ease-in-out infinite;
        }
        @keyframes mayorGlow {
          0%,100%{box-shadow:0 0 0 6px rgba(201,162,39,0.15),0 16px 48px rgba(0,0,0,0.4)}
          50%    {box-shadow:0 0 0 10px rgba(201,162,39,0.25),0 20px 56px rgba(0,0,0,0.5)}
        }
        .lp-mayor-ring img { width:100%;height:100%;border-radius:50%;object-fit:cover;object-position:top center;border:3px solid #fff; }
        .lp-mayor-badge {
          position:absolute;bottom:4px;right:4px;width:38px;height:38px;
          background:linear-gradient(135deg,var(--gold),var(--gold-lt));
          border-radius:50%;display:flex;align-items:center;justify-content:center;
          font-size:18px;box-shadow:0 4px 12px rgba(0,0,0,0.3);border:3px solid #fff;
        }
        .lp-mayor-name { font-family:'Noto Sans Devanagari',sans-serif;font-size:20px;font-weight:800;color:#fff;line-height:1.2;margin-bottom:5px;text-shadow:0 2px 12px rgba(0,0,0,0.3); }
        .lp-mayor-title { font-family:'Noto Sans Devanagari',sans-serif;font-size:12px;color:rgba(255,255,255,0.72);margin-bottom:20px;line-height:1.55; }

        .lp-divider { width:100%;height:1px;background:linear-gradient(90deg,transparent,rgba(201,162,39,0.4),transparent);margin-bottom:18px; }

        /* Quote box */
        .lp-quote { background:rgba(255,255,255,0.06);border:1px solid rgba(201,162,39,0.22);border-radius:14px;padding:14px 16px;text-align:center; }
        .lp-quote-mark { font-family:'Crimson Pro',serif;font-size:26px;color:var(--gold);line-height:0.5;display:block;margin-bottom:8px;opacity:0.7; }
        .lp-quote-text { font-family:'Noto Sans Devanagari',sans-serif;font-size:12.5px;color:rgba(255,255,255,0.80);line-height:1.75; }

        /* ── RESPONSIVE ── */
        @media(max-width:768px){
          .lp-card{flex-direction:column}
          .lp-right{width:100%;padding:32px 24px}
          .lp-mayor-ring{width:120px;height:120px}
          .lp-left{padding:24px 20px}
        }
        @media(max-width:480px){
          .lp-left{padding:20px 16px}
          .lp-otp-box{width:38px;height:46px;font-size:20px}
        }
      `}</style>

      <div className="lp-root">
        <div className="lp-bg" />
        <div className="lp-orb lp-orb-1" />
        <div className="lp-orb lp-orb-2" />

        <div className="lp-card">

          {/* ══ LEFT — compact form ══ */}
          <div className="lp-left">

            <div className="lp-header">
              <div className="lp-logo-ring">
                <img src={logo} alt="पनवेल महानगरपालिका" />
              </div>
              <div>
                <div className="lp-org-name">पनवेल महानगरपालिका</div>
                <div className="lp-org-sub">✦ जन संवाद पोर्टल</div>
              </div>
            </div>

            <div className="lp-tabs">
              <button className={`lp-tab ${mode === "password" ? "active" : ""}`} onClick={() => switchMode("password")}>
                🔒 Password Login
              </button>
              <button className={`lp-tab ${mode === "otp" ? "active" : ""}`} onClick={() => switchMode("otp")}>
                📱 OTP Login
              </button>
            </div>

            {error && <div className="lp-error">⚠️ {error}</div>}

            {/* PASSWORD */}
            {mode === "password" && (
              <form onSubmit={handleLogin}>
                <div className="lp-field">
                  <label className="lp-label">Username</label>
                  <div className="lp-input-wrap">
                    <span className="lp-icon">👤</span>
                    <input className="lp-input" type="text" placeholder="Username टाका"
                      value={form.username} onChange={ch("username")} autoComplete="username" autoFocus />
                  </div>
                </div>
                <div className="lp-field">
                  <label className="lp-label">Password</label>
                  <div className="lp-input-wrap">
                    <span className="lp-icon">🔒</span>
                    <input className="lp-input" type={showPass ? "text" : "password"}
                      placeholder="Password टाका" value={form.password}
                      onChange={ch("password")} autoComplete="current-password" />
                    <button type="button" className="lp-pass-toggle"
                      onClick={() => setShowPass(!showPass)} tabIndex={-1}>
                      {showPass ? "👁️" : "👁️‍🗨️"}
                    </button>
                  </div>
                </div>
                <button type="submit" className="lp-btn" disabled={loading || !form.username || !form.password}>
                  {loading ? "⏳ Logging in..." : "🔐 Login करा"}
                </button>
                <div className="lp-footer">
                  Account नाही?{" "}
                  <span className="lp-link" onClick={() => navigate("/register")}>Register करा</span>
                </div>
              </form>
            )}

            {/* OTP */}
            {mode === "otp" && (
              <div>
                {otpStep === "mobile" && (
                  <>
                    <div className="lp-field">
                      <label className="lp-label">Mobile Number</label>
                      <div className="lp-input-wrap">
                        <span className="lp-prefix">🇮🇳 +91</span>
                        <input className="lp-input with-prefix" type="tel" maxLength={10}
                          placeholder="10 अंकी नंबर" value={mobileNo}
                          onChange={(e) => setMobileNo(e.target.value.replace(/\D/g, "").slice(0, 10))}
                          onKeyDown={(e) => e.key === "Enter" && sendOtp()} autoFocus />
                      </div>
                    </div>
                    <button className="lp-btn" onClick={sendOtp} disabled={mobileNo.length !== 10 || otpLoading}>
                      {otpLoading ? "⏳ पाठवत आहे..." : "OTP पाठवा →"}
                    </button>
                    <div className="lp-footer">
                      Account नाही?{" "}
                      <span className="lp-link" onClick={() => navigate("/register")}>Register करा</span>
                    </div>
                  </>
                )}
                {otpStep === "otp" && (
                  <>
                    <button className="lp-back-btn" onClick={() => { setOtpStep("mobile"); setOtp(["","","","","",""]); setError(""); }}>
                      ← मागे जा
                    </button>
                    <div style={{ fontSize:13, color:"#64748b", marginBottom:12 }}>
                      <span style={{ color:"var(--gold-dk)", fontWeight:700 }}>+91 ******{mobileNo.slice(-3)}</span> वर OTP पाठवला
                    </div>
                    <div className="lp-otp-boxes" onPaste={handleOtpPaste}>
                      {otp.map((digit, i) => (
                        <input key={i} ref={(el) => (otpRefs.current[i] = el)}
                          className="lp-otp-box" type="tel" maxLength={1}
                          value={digit} placeholder="·"
                          onChange={(e) => handleOtpChange(i, e.target.value)}
                          onKeyDown={(e) => handleOtpKeyDown(i, e)} />
                      ))}
                    </div>
                    <div className="lp-timer">
                      {timeLeft > 0 ? (
                        <>OTP expire होईल: <strong style={{ color: timeLeft <= 15 ? "#dc2626" : "var(--gold-dk)" }}>{formatTime(timeLeft)}</strong></>
                      ) : (
                        <span style={{ color:"#dc2626", fontWeight:600 }}>OTP expire झाला!</span>
                      )}
                      <div style={{ marginTop:5 }}>
                        OTP नाही मिळाला?{" "}
                        <button className="lp-resend" onClick={sendOtp} disabled={!canResend}>पुन्हा पाठवा</button>
                      </div>
                    </div>
                    <button className="lp-btn" onClick={verifyOtp} disabled={otp.join("").length < 6 || otpLoading}>
                      {otpLoading ? "⏳ Verifying..." : "✅ Verify & Login"}
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          {/* ══ RIGHT PANEL ══ */}
          <div className="lp-right">
            <div className="lp-right-deco" />
            <div className="lp-chevrons">
              <svg width="110" height="110" viewBox="0 0 120 120" fill="none">
                <g stroke="rgba(201,162,39,1)" strokeWidth="1.2" fill="none">
                  <polyline points="80,10 95,25 80,40"/>
                  <polyline points="65,10 80,25 65,40"/>
                  <polyline points="50,10 65,25 50,40"/>
                  <polyline points="80,40 95,55 80,70"/>
                  <polyline points="65,40 80,55 65,70"/>
                  <polyline points="80,70 95,85 80,100"/>
                  <polyline points="65,70 80,85 65,100"/>
                </g>
              </svg>
            </div>
            <div className="lp-float lp-float-1">🏛️</div>
            <div className="lp-float lp-float-2">🤝</div>
            <div className="lp-float lp-float-3">🏢</div>
            <div className="lp-float lp-float-4">🌏</div>

            <div className="lp-mayor-wrap">
              <div style={{ position:"relative", width:"fit-content", margin:"0 auto" }}>
                <div className="lp-mayor-ring">
                  <img src={mayorImg} alt="मा. महापौर श्री. नितीन पाटील" />
                </div>
                <div className="lp-mayor-badge">🪑</div>
              </div>
              <div className="lp-mayor-name">मा. श्री. नितीन पाटील</div>
              <div className="lp-mayor-title">मा. महापौर<br/>पनवेल महानगरपालिका</div>
              <div className="lp-divider" />
              <div className="lp-quote">
                <span className="lp-quote-mark">"</span>
                <div className="lp-quote-text">
                  नागरिकांच्या समस्या थेट महापौरांपर्यंत पोहोचवण्यासाठी हे जन संवाद व्यासपीठ
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
