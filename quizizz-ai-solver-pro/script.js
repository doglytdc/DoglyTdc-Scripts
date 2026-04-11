// Quizizz/Wayground AI Solver Pro v17 - DoglyTdc
// Alt=Show/Hide | D=Detect | R=Resolve+Auto | All Types | Tables | Drag Simulation | Passage
(function(){
"use strict";

var CFG = {
  webhookUrl: "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook",
  webhookToken: "85489d2193193d9680dca2113e8f5edc6288fc9c67e44a14",
  manualKey: "",
  profileName: "DoglyTdc Solver",
  version: "17.0",
  supabaseUrl: "https://ucsyxzpdbnuyehizezvb.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjc3l4enBkYm51eWVoaXplenZiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ5NzUwODQsImV4cCI6MjA4MDU1MTA4NH0.1_xuCxeV0NlMxQRhsNC_f_RYGbFYJZ9RKwYAB3e7vtM"
};

// ═══ SVG ICONS ═══
var IC = {
  brain: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.1-.5 2.1-1.2 2.8C16 9.6 17 11.2 17 13c0 2.8-2.2 5-5 5s-5-2.2-5-5c0-1.8 1-3.4 2.2-4.2C8.5 8.1 8 7.1 8 6a4 4 0 0 1 4-4z"/><path d="M12 18v4"/><path d="M8 22h8"/></svg>',
  search: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>',
  zap: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  eye: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
  camera: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>',
  play: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"/></svg>',
  pause: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  minus: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/></svg>',
  target: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  list: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  settings: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v2m0 18v2m-9-11h2m18 0h2m-4.2-5.8 1.4-1.4M4.2 19.8l1.4-1.4m0-12.8L4.2 4.2m15.6 15.6-1.4-1.4"/></svg>',
  key: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.78 7.78 5.5 5.5 0 0 1 7.78-7.78Zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4"/></svg>',
  link: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  loader: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
  info: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  trash: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>',
  rotate: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>',
  keyboard: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="M6 8h.001"/><path d="M10 8h.001"/><path d="M14 8h.001"/><path d="M18 8h.001"/><path d="M8 12h.001"/><path d="M12 12h.001"/><path d="M16 12h.001"/><path d="M7 16h10"/></svg>',
  arrowR: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
  checkCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  xCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
  chat: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  send: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  image: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
  sparkle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>'
};

// ═══ CLEANUP ═══
["qs-panel","qs-fab","qs-style"].forEach(function(id){ var e=document.getElementById(id); if(e) e.remove(); });

// ═══ LOAD html2canvas CDN ═══
function loadH2C() {
  return new Promise(function(res) {
    if(typeof html2canvas !== "undefined") { res(true); return; }
    var s = document.createElement("script");
    s.src = "https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js";
    s.onload = function(){ res(true); };
    s.onerror = function(){ res(false); };
    document.head.appendChild(s);
  });
}
loadH2C();

// ═══ USER PROFILE (DoglyTdc) ═══
var userProfile = { name: null, avatar: null, loaded: false };
function fetchUserProfile() {
  if(!S.useDogly || !S.webhookToken || S.webhookToken === "85489d2193193d9680dca2113e8f5edc6288fc9c67e44a14") return;
  fetch(CFG.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": S.webhookToken },
    body: JSON.stringify({ action: "profile" })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d.success && d.profile) {
      userProfile.name = d.profile.full_name || d.profile.email || "Usuario";
      userProfile.avatar = d.profile.avatar_url || null;
      userProfile.loaded = true;
      updateProfileUI();
    }
  }).catch(function(){});
}
function updateProfileUI() {
  var avatarEl = document.getElementById("qs-cfg-avatar");
  var nameEl = document.getElementById("qs-cfg-name");
  var subEl = document.getElementById("qs-cfg-sub");
  var statusEl = document.getElementById("qs-cfg-pstatus");
  if(!userProfile.loaded) return;
  if(avatarEl) {
    avatarEl.innerHTML = userProfile.avatar
      ? '<img src="'+userProfile.avatar+'">'
      : (userProfile.name||"U")[0].toUpperCase();
  }
  if(nameEl) nameEl.textContent = userProfile.name || "Usuario";
  if(subEl) subEl.textContent = "DoglyTdc Solver Pro • Conectado";
  if(statusEl) { statusEl.className = "qs-cfg-pstatus connected"; statusEl.innerHTML = '<span class="dot"></span> Online'; }
}

// ═══ REMOTE CONFIG SYNC (DoglyTdc) ═══
function loadRemoteConfig() {
  if(!CFG.webhookUrl || CFG.webhookUrl === "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook" || !CFG.webhookToken || CFG.webhookToken === "85489d2193193d9680dca2113e8f5edc6288fc9c67e44a14") return;
  fetch(CFG.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": CFG.webhookToken },
    body: JSON.stringify({ action: "load_config" })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d.success) {
      if(d.config) {
        // Restore saved API key
        if(d.config.apiKey && d.config.apiKey.length > 5 && !S.apiKey) {
          S.apiKey = d.config.apiKey;
          updateBadge && updateBadge();
          log("API Key restaurada do servidor", "suc");
        }
        // Restore saved settings
        if(d.config.settings) {
          Object.keys(d.config.settings).forEach(function(k) {
            if(S.settings.hasOwnProperty(k)) S.settings[k] = d.config.settings[k];
          });
          // Update toggle UI
          panel && panel.querySelectorAll(".qs-tg").forEach(function(tg) {
            var s = tg.getAttribute("data-s");
            if(s && S.settings.hasOwnProperty(s)) tg.classList.toggle("ac", S.settings[s]);
          });
        }
        // Restore webhook token if saved
        if(d.config.webhookToken && d.config.webhookToken.length > 5) {
          S.webhookToken = d.config.webhookToken;
          S.useDogly = true;
        }
      }
      // Show available providers info
      if(d.providers) {
        var provList = Object.keys(d.providers).map(function(p){ return p.toUpperCase() + "(" + d.providers[p].count + ")"; }).join(", ");
        if(provList) log("Pool de chaves: " + provList, "inf");
      }
      log("Config carregada do DoglyTdc", "suc");
      updateCfgProvider && updateCfgProvider();
    }
  }).catch(function(e){ log("Erro ao carregar config: " + e.message, "wrn"); });
}

function saveRemoteConfig() {
  if(!S.useDogly || !S.webhookToken || S.webhookToken === "85489d2193193d9680dca2113e8f5edc6288fc9c67e44a14") return;
  var config = {
    apiKey: S.apiKey || "",
    settings: S.settings,
    webhookToken: S.webhookToken,
    savedAt: new Date().toISOString()
  };
  fetch(CFG.webhookUrl || S.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": S.webhookToken },
    body: JSON.stringify({ action: "save_config", config: config })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d.success) log("Config sincronizada com DoglyTdc", "suc");
    else log("Erro sync: " + (d.error || "?"), "wrn");
  }).catch(function(e){ log("Erro sync: " + e.message, "wrn"); });
}

var isMobile = window.innerWidth <= 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
var S = {
  apiKey: CFG.manualKey || "",
  webhookUrl: CFG.webhookUrl,
  webhookToken: CFG.webhookToken,
  useDogly: (CFG.webhookToken && CFG.webhookToken !== "85489d2193193d9680dca2113e8f5edc6288fc9c67e44a14" && CFG.webhookToken.length > 5),
  solving: false,
  autoMode: false,
  autoInterval: null,
  hidden: false,
  minimized: false,
  isDragging: false,
  settings: { autoSubmit: true, autoAdvance: true, visionMode: true, screenshotMode: true, delay: 2000 },
  stats: { solved: 0, correct: 0, wrong: 0, streak: 0, bestStreak: 0 },
  logs: [],
  chatMessages: [],
  lastQ: null,
  lastAutoQ: null,
  lastQHash: "",
  feedbackObserver: null,
  waitingFeedback: false,
  // ═══ PASSAGE PERSISTENCE (v14) ═══
  passageText: "",
  passageImages: [],
  lastPassageHash: "",
  // Real-time site monitor state
  siteState: {
    isQuizizz: false,
    gameMode: "unknown",
    questionNumber: 0,
    totalQuestions: 0,
    timeLeft: null,
    playerScore: null,
    playerRank: null,
    isReading: false,
    isPowerUp: false,
    hasCountdown: false,
    lastFeedbackResult: null,
    url: location.href,
    pageTitle: document.title
  },
  monitorInterval: null,
  _prevScore: null,
  _prevStreak: null,
  // v14: Track DOM state for feedback
  _answeredAt: 0,
  _preAnswerDOM: "",
  _feedbackChecks: 0
};

function getApiType() {
  if(S.useDogly) return "doglytdc";
  if(!S.apiKey || S.apiKey.length < 5) return null;
  if(S.apiKey.indexOf("gsk_") === 0) return "groq";
  if(S.apiKey.indexOf("AIza") === 0) return "google";
  return "groq";
}

// ═══ STYLES ═══
var css = document.createElement("style");
css.id = "qs-style";
css.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
#qs-fab{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,rgba(139,92,246,0.9),rgba(217,70,239,0.85));border:2px solid rgba(255,255,255,0.15);box-shadow:0 8px 32px rgba(139,92,246,0.5),0 0 0 4px rgba(139,92,246,0.1);cursor:pointer;z-index:2147483647;display:none;align-items:center;justify-content:center;color:#fff;transition:all .3s cubic-bezier(0.16,1,0.3,1);touch-action:none;-webkit-tap-highlight-color:transparent}
#qs-fab:hover{transform:scale(1.1)}#qs-fab:active{transform:scale(0.95)}
#qs-fab .fab-pulse{position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(139,92,246,0.4);animation:qs-fab-pulse 2s ease-out infinite}
@keyframes qs-fab-pulse{0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.4);opacity:0}}
#qs-fab .fab-badge{position:absolute;top:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:#22c55e;color:#fff;font-size:8px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid rgba(8,8,16,0.9);font-family:Inter,sans-serif}
#qs-panel{position:fixed;bottom:20px;right:20px;width:390px;max-width:calc(100vw - 16px);max-height:calc(100vh - 40px);background:rgba(8,8,16,0.94);border-radius:22px;font-family:'Inter',-apple-system,sans-serif;color:#e2e8f0;z-index:2147483647;box-shadow:0 32px 96px rgba(0,0,0,0.9),0 0 0 1px rgba(139,92,246,0.15),0 0 60px rgba(139,92,246,0.04);backdrop-filter:saturate(200%) blur(80px);-webkit-backdrop-filter:saturate(200%) blur(80px);overflow:hidden;touch-action:none;user-select:none;transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),opacity 0.4s cubic-bezier(0.16,1,0.3,1)}
#qs-panel.hidden{transform:scale(0.85) translateY(20px);opacity:0;pointer-events:none}
@media(max-width:768px){#qs-panel{bottom:0;right:0;left:0;width:100%;max-width:100%;border-radius:22px 22px 0 0;max-height:70vh}#qs-fab{bottom:16px;right:16px}}
.qs-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:0.1;pointer-events:none;z-index:0}
.qs-orb1{width:200px;height:200px;background:radial-gradient(circle,#8b5cf6,transparent 70%);top:-60px;right:-40px;animation:qs-float 8s ease-in-out infinite}
.qs-orb2{width:160px;height:160px;background:radial-gradient(circle,#d946ef,transparent 70%);bottom:-40px;left:-30px;animation:qs-float 10s ease-in-out infinite reverse}
.qs-orb3{width:100px;height:100px;background:radial-gradient(circle,#06b6d4,transparent 70%);top:50%;left:50%;transform:translate(-50%,-50%);animation:qs-float 12s ease-in-out infinite}
@keyframes qs-float{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,8px)}}
.qs-h{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:linear-gradient(180deg,rgba(139,92,246,0.06) 0%,transparent 100%);border-bottom:1px solid rgba(255,255,255,0.05);cursor:move;position:relative;z-index:1}
.qs-p{display:flex;align-items:center;gap:10px}
.qs-av{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(139,92,246,0.25),rgba(217,70,239,0.25));border:1px solid rgba(139,92,246,0.2);color:#a78bfa;backdrop-filter:blur(10px)}
.qs-i h3{font-size:12.5px;font-weight:700;margin:0 0 1px;color:#c4b5fd;display:flex;align-items:center;gap:6px}
.qs-i span{font-size:9.5px;color:rgba(255,255,255,0.22);letter-spacing:0.3px}
.qs-b{font-size:7px;padding:2px 7px;border-radius:5px;font-weight:800;letter-spacing:.5px;text-transform:uppercase}
.qs-b.on{background:rgba(139,92,246,0.2);color:#a78bfa;border:1px solid rgba(139,92,246,0.15)}.qs-b.dtdc{background:rgba(6,182,212,0.15);color:#67e8f9;border:1px solid rgba(6,182,212,0.2)}.qs-b.off{background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.15)}
.qs-hb{display:flex;gap:5px}
.qs-ib{width:28px;height:28px;border-radius:9px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.5);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;-webkit-tap-highlight-color:transparent}
.qs-ib:hover,.qs-ib:active{background:rgba(139,92,246,0.15);color:#a78bfa;border-color:rgba(139,92,246,0.2)}
.qs-n{display:flex;padding:5px 8px;gap:2px;background:rgba(0,0,0,0.35);border-bottom:1px solid rgba(255,255,255,0.04);position:relative;z-index:1;overflow-x:auto;-webkit-overflow-scrolling:touch}
.qs-n::-webkit-scrollbar{display:none}
.qs-nb{flex:0 0 auto;padding:7px 10px;border:none;border-radius:9px;background:transparent;color:rgba(255,255,255,0.3);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:4px;font-family:inherit;white-space:nowrap;-webkit-tap-highlight-color:transparent}
.qs-nb:hover{background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.6)}
.qs-nb.ac{background:linear-gradient(135deg,rgba(139,92,246,0.2),rgba(217,70,239,0.15));color:#c4b5fd;border:1px solid rgba(139,92,246,0.15);box-shadow:0 2px 12px rgba(139,92,246,0.08)}
.qs-pg{display:none;padding:12px;max-height:380px;overflow-y:auto;position:relative;z-index:1}.qs-pg.ac{display:block}
.qs-pg::-webkit-scrollbar{width:3px}.qs-pg::-webkit-scrollbar-track{background:transparent}.qs-pg::-webkit-scrollbar-thumb{background:rgba(139,92,246,0.2);border-radius:3px}
@media(max-width:768px){.qs-pg{max-height:calc(70vh - 120px);padding:10px}}
.qs-qc{background:rgba(255,255,255,0.02);border-radius:14px;padding:12px;margin-bottom:10px;border:1px solid rgba(255,255,255,0.05);backdrop-filter:blur(10px)}
.qs-tb{font-size:8.5px;padding:3px 9px;background:rgba(139,92,246,0.1);border-radius:5px;color:#a78bfa;font-weight:700;text-transform:uppercase;letter-spacing:.4px;border:1px solid rgba(139,92,246,0.1)}
.qs-qt{font-size:12px;line-height:1.6;color:rgba(255,255,255,0.8);min-height:36px;margin-top:8px}
.qs-qt.em{color:rgba(255,255,255,0.3);font-style:italic;text-align:center;font-size:11.5px}
.qs-qt img{max-width:100%;border-radius:8px;margin:6px 0}
.qs-ol{margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.04)}
.qs-oi{display:flex;gap:7px;padding:4px 0;font-size:11.5px;color:rgba(255,255,255,0.65);align-items:center}
.qs-oi img{max-width:45px;border-radius:4px}
.qs-ol-letter{color:#a78bfa;font-weight:700;font-size:10px;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:rgba(139,92,246,0.1);border:1px solid rgba(139,92,246,0.1)}
.qs-blocks{margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.04);display:flex;flex-direction:column;gap:6px}
.qs-block-row{display:flex;gap:6px;align-items:stretch}
.qs-block-drag{flex:1;padding:8px 10px;border-radius:10px;background:linear-gradient(135deg,rgba(139,92,246,0.15),rgba(168,85,247,0.1));border:1px solid rgba(139,92,246,0.2);display:flex;align-items:center;justify-content:center;gap:8px;font-size:12px;font-weight:600;color:rgba(255,255,255,0.9);min-height:40px;text-align:center}
.qs-block-drag .qs-frac{display:inline-flex;flex-direction:column;align-items:center;gap:0;line-height:1;font-size:13px}
.qs-block-drag .qs-frac-num{border-bottom:1.5px solid rgba(255,255,255,0.5);padding:0 3px 2px}
.qs-block-drag .qs-frac-den{padding:2px 3px 0}
.qs-block-drop{flex:0 0 50px;padding:6px;border-radius:10px;background:rgba(255,255,255,0.03);border:1.5px dashed rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:700;color:rgba(255,255,255,0.5);min-height:40px}
.qs-block-label{font-size:9px;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:2px;display:flex;align-items:center;gap:4px}
.qs-block-sep{display:flex;align-items:center;justify-content:center;color:rgba(139,92,246,0.4);font-size:14px;padding:0 2px}
.qs-ac{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.qs-bt{padding:10px;border:none;border-radius:11px;font-size:11.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .2s;font-family:inherit;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}
.qs-bt:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,0.04) 0%,transparent 60%);pointer-events:none}
.qs-bt.pr{background:linear-gradient(135deg,rgba(139,92,246,0.35),rgba(217,70,239,0.25));color:#e2d4f5;border:1px solid rgba(139,92,246,0.2)}
.qs-bt.pr:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(139,92,246,0.2)}
.qs-bt.sc{background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.06)}
.qs-bt.sc:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.8)}
.qs-bt.am{background:linear-gradient(135deg,rgba(245,158,11,0.25),rgba(239,68,68,0.2));color:#fbbf24;border:1px solid rgba(245,158,11,0.2)}
.qs-bt.am.active{background:linear-gradient(135deg,rgba(34,197,94,0.3),rgba(6,182,212,0.2));color:#34d399;border:1px solid rgba(34,197,94,0.25)}
.qs-bt:disabled{opacity:0.35;cursor:not-allowed;transform:none!important}
.qs-st{margin-top:8px;padding:8px 10px;border-radius:9px;font-size:11px;display:none;align-items:center;gap:7px;font-weight:500}
.qs-st.vi{display:flex}.qs-st.inf{background:rgba(59,130,246,0.06);color:#60a5fa;border:1px solid rgba(59,130,246,0.1)}.qs-st.suc{background:rgba(52,211,153,0.06);color:#34d399;border:1px solid rgba(52,211,153,0.1)}.qs-st.err{background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1)}.qs-st.wrn{background:rgba(251,191,36,0.06);color:#fbbf24;border:1px solid rgba(251,191,36,0.1)}
.qs-sg{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:10px}
.qs-sc{background:rgba(255,255,255,0.02);border-radius:10px;padding:8px 4px;text-align:center;border:1px solid rgba(255,255,255,0.04)}
.qs-sv{font-size:18px;font-weight:800;color:#c4b5fd;font-variant-numeric:tabular-nums}.qs-sc.s .qs-sv{color:#34d399}.qs-sc.e .qs-sv{color:#f87171}.qs-sc.st .qs-sv{color:#fbbf24}
.qs-sl{font-size:7.5px;color:rgba(255,255,255,0.22);text-transform:uppercase;letter-spacing:.4px;margin-top:1px}
.qs-fb{margin-top:6px;padding:7px 10px;border-radius:9px;font-size:10.5px;font-weight:600;display:none;align-items:center;gap:7px;animation:qs-fadeIn 0.3s ease}
.qs-fb.correct{display:flex;background:rgba(34,197,94,0.08);color:#34d399;border:1px solid rgba(34,197,94,0.15)}
.qs-fb.wrong{display:flex;background:rgba(248,113,113,0.08);color:#f87171;border:1px solid rgba(248,113,113,0.15)}
@keyframes qs-fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
.qs-ss{margin-bottom:12px}
.qs-st2{font-size:9.5px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin-bottom:6px;padding-left:4px;letter-spacing:.4px;display:flex;align-items:center;gap:5px}
.qs-grp{background:rgba(255,255,255,0.02);border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.04)}
.qs-si{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.03)}.qs-si:last-child{border:none}
.qs-sil{display:flex;align-items:center;gap:8px}
.qs-sic{width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;background:rgba(139,92,246,0.08);color:#a78bfa;border:1px solid rgba(139,92,246,0.08)}
.qs-sii h4{font-size:12px;font-weight:500;margin:0 0 1px;color:rgba(255,255,255,0.85)}.qs-sii p{font-size:9.5px;color:rgba(255,255,255,0.3);margin:0}
.qs-tg{position:relative;width:38px;height:20px;background:rgba(255,255,255,0.06);border-radius:10px;cursor:pointer;transition:all .25s;border:1px solid rgba(255,255,255,0.06);flex-shrink:0}
.qs-tg.ac{background:rgba(139,92,246,0.4);border-color:rgba(139,92,246,0.3)}.qs-tg:after{content:"";position:absolute;width:16px;height:16px;background:#fff;border-radius:50%;top:1px;left:1px;transition:all .25s cubic-bezier(0.16,1,0.3,1);box-shadow:0 2px 4px rgba(0,0,0,0.3)}.qs-tg.ac:after{left:19px}
.qs-aki{width:100%;padding:9px 10px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.06);border-radius:9px;color:#e2e8f0;font-size:11.5px;font-family:'SF Mono',Monaco,Consolas,monospace;outline:none;box-sizing:border-box;margin-top:6px;transition:border-color .2s}.qs-aki:focus{border-color:rgba(139,92,246,0.4)}
.qs-aka{display:flex;gap:5px;margin-top:6px}
.qs-akb{flex:1;padding:8px;border-radius:7px;font-size:10.5px;font-weight:600;cursor:pointer;border:none;transition:all .15s;font-family:inherit}
.qs-akb.sv{background:rgba(139,92,246,0.2);color:#a78bfa;border:1px solid rgba(139,92,246,0.15)}.qs-akb.cl{background:rgba(248,113,113,0.08);color:#f87171;border:1px solid rgba(248,113,113,0.1)}
.qs-lc{background:rgba(255,255,255,0.02);border-radius:12px;border:1px solid rgba(255,255,255,0.04);overflow:hidden}
.qs-lh{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.04)}
.qs-lh h4{font-size:11.5px;margin:0;color:rgba(255,255,255,0.6);font-weight:600;display:flex;align-items:center;gap:6px}
.qs-lh h4 .log-count{font-size:9px;background:rgba(139,92,246,0.15);color:#a78bfa;padding:1px 6px;border-radius:8px;font-weight:700}
.qs-clb{padding:4px 8px;border-radius:6px;background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1);font-size:9.5px;cursor:pointer;display:flex;align-items:center;gap:3px;font-family:inherit;transition:all .15s}.qs-clb:hover{background:rgba(248,113,113,0.12)}
.qs-ll{max-height:320px;overflow-y:auto;padding:4px}
.qs-ll::-webkit-scrollbar{width:3px}.qs-ll::-webkit-scrollbar-thumb{background:rgba(139,92,246,0.15);border-radius:3px}
.qs-li{display:flex;gap:6px;padding:6px 8px;border-radius:7px;margin-bottom:2px;font-size:10.5px;background:rgba(0,0,0,0.15);align-items:flex-start;transition:background .15s}
.qs-li:hover{background:rgba(0,0,0,0.25)}
.qs-li .log-icon{width:18px;height:18px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px}
.qs-li.inf .log-icon{background:rgba(96,165,250,0.1);color:#60a5fa}
.qs-li.suc .log-icon{background:rgba(52,211,153,0.1);color:#34d399}
.qs-li.err .log-icon{background:rgba(248,113,113,0.1);color:#f87171}
.qs-li.wrn .log-icon{background:rgba(251,191,36,0.1);color:#fbbf24}
.qs-lt{font-size:8.5px;color:rgba(255,255,255,0.2);font-family:'SF Mono',Monaco,Consolas,monospace;min-width:48px;margin-top:1px}.qs-lm{color:rgba(255,255,255,0.6);flex:1;line-height:1.4}
.qs-el{padding:24px;text-align:center;color:rgba(255,255,255,0.15);font-size:11px;display:flex;flex-direction:column;align-items:center;gap:8px}
.qs-chat-wrap{display:flex;flex-direction:column;height:100%}
.qs-chat-msgs{flex:1;overflow-y:auto;padding:8px;display:flex;flex-direction:column;gap:6px;min-height:200px;max-height:300px}
.qs-chat-msgs::-webkit-scrollbar{width:3px}.qs-chat-msgs::-webkit-scrollbar-thumb{background:rgba(139,92,246,0.15);border-radius:3px}
.qs-chat-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:30px 16px;text-align:center;color:rgba(255,255,255,0.2);font-size:11px}
.qs-chat-empty svg{opacity:0.3}
.qs-cmsg{max-width:88%;padding:9px 12px;border-radius:14px;font-size:11.5px;line-height:1.55;word-break:break-word;animation:qs-fadeIn .3s ease}
.qs-cmsg.user{align-self:flex-end;background:linear-gradient(135deg,rgba(139,92,246,0.3),rgba(217,70,239,0.2));color:#e2d4f5;border:1px solid rgba(139,92,246,0.15);border-bottom-right-radius:4px}
.qs-cmsg.ai{align-self:flex-start;background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.85);border:1px solid rgba(255,255,255,0.06);border-bottom-left-radius:4px}
.qs-cmsg.ai .ai-label{font-size:8.5px;color:#a78bfa;font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-bottom:3px;display:flex;align-items:center;gap:4px}
.qs-cmsg.loading{color:rgba(255,255,255,0.3);font-style:italic}
.qs-cmsg img{max-width:100%;border-radius:8px;margin:4px 0}
.qs-chat-bar{display:flex;gap:6px;padding:8px 10px;border-top:1px solid rgba(255,255,255,0.05);background:rgba(0,0,0,0.3);align-items:center}
.qs-chat-input{flex:1;padding:9px 12px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:10px;color:#e2e8f0;font-size:12px;outline:none;font-family:inherit;transition:border-color .2s;min-width:0}
.qs-chat-input:focus{border-color:rgba(139,92,246,0.35)}
.qs-chat-input::placeholder{color:rgba(255,255,255,0.2)}
.qs-chat-btn{width:34px;height:34px;border-radius:10px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0;-webkit-tap-highlight-color:transparent}
.qs-chat-btn.ss{background:rgba(6,182,212,0.15);color:#67e8f9;border:1px solid rgba(6,182,212,0.15)}
.qs-chat-btn.ss:hover{background:rgba(6,182,212,0.25)}
.qs-chat-btn.snd{background:linear-gradient(135deg,rgba(139,92,246,0.4),rgba(217,70,239,0.3));color:#e2d4f5;border:1px solid rgba(139,92,246,0.2)}
.qs-chat-btn.snd:hover{background:linear-gradient(135deg,rgba(139,92,246,0.55),rgba(217,70,239,0.4))}
.qs-chat-btn:disabled{opacity:0.3;cursor:not-allowed}
.qs-dtdc{background:rgba(6,182,212,0.04);border:1px solid rgba(6,182,212,0.1);border-radius:9px;padding:8px 10px;margin-bottom:8px;display:flex;align-items:center;gap:6px;font-size:10.5px;color:#67e8f9}
.qs-vis{background:rgba(234,179,8,0.04);border:1px solid rgba(234,179,8,0.1);border-radius:9px;padding:8px 10px;margin-bottom:8px;display:flex;align-items:center;gap:6px;font-size:10.5px;color:rgba(251,191,36,0.8)}
.qs-keys{background:rgba(139,92,246,0.03);border:1px solid rgba(139,92,246,0.08);border-radius:9px;padding:8px 10px;margin-bottom:10px;font-size:10.5px;color:rgba(167,139,250,0.7);display:flex;align-items:center;gap:5px;flex-wrap:wrap}
.qs-keys kbd{background:rgba(139,92,246,0.12);border:1px solid rgba(139,92,246,0.15);border-radius:4px;padding:1px 6px;font-size:9.5px;font-weight:700;color:#c4b5fd;font-family:'SF Mono',Monaco,monospace}
.qs-passage-bar{background:rgba(96,165,250,0.06);border:1px solid rgba(96,165,250,0.12);border-radius:9px;padding:7px 10px;margin-bottom:8px;font-size:9.5px;color:#60a5fa;display:flex;align-items:center;gap:5px}
@keyframes qs-spin{to{transform:rotate(360deg)}}.qs-spin{animation:qs-spin 1s linear infinite;display:inline-flex}
@keyframes qs-pulse{0%,100%{opacity:1}50%{opacity:0.5}}.qs-pulse{animation:qs-pulse 1.5s infinite}
/* ═══ CONFIG PAGE v15 ═══ */
.qs-cfg-hero{background:linear-gradient(135deg,rgba(139,92,246,0.12) 0%,rgba(217,70,239,0.08) 50%,rgba(6,182,212,0.06) 100%);border:1px solid rgba(139,92,246,0.12);border-radius:16px;padding:16px;margin-bottom:12px;position:relative;overflow:hidden}
.qs-cfg-hero::before{content:"";position:absolute;top:-30px;right:-30px;width:100px;height:100px;background:radial-gradient(circle,rgba(139,92,246,0.15),transparent 70%);filter:blur(20px);pointer-events:none}
.qs-cfg-hero::after{content:"";position:absolute;bottom:-20px;left:-20px;width:80px;height:80px;background:radial-gradient(circle,rgba(217,70,239,0.1),transparent 70%);filter:blur(15px);pointer-events:none}
.qs-cfg-profile{display:flex;align-items:center;gap:12px;position:relative;z-index:1}
.qs-cfg-avatar{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#c4b5fd;background:linear-gradient(135deg,rgba(139,92,246,0.35),rgba(217,70,239,0.3));border:2px solid rgba(139,92,246,0.2);box-shadow:0 4px 16px rgba(139,92,246,0.2);object-fit:cover;overflow:hidden;flex-shrink:0}
.qs-cfg-avatar img{width:100%;height:100%;object-fit:cover;border-radius:12px}
.qs-cfg-pinfo{flex:1;min-width:0}
.qs-cfg-pname{font-size:14px;font-weight:700;color:rgba(255,255,255,0.92);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-bottom:2px}
.qs-cfg-psub{font-size:10px;color:rgba(139,92,246,0.6);display:flex;align-items:center;gap:4px}
.qs-cfg-pstatus{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;letter-spacing:.3px;text-transform:uppercase}
.qs-cfg-pstatus.connected{background:rgba(34,197,94,0.1);color:#34d399;border:1px solid rgba(34,197,94,0.15)}
.qs-cfg-pstatus.disconnected{background:rgba(248,113,113,0.08);color:#f87171;border:1px solid rgba(248,113,113,0.12)}
.qs-cfg-pstatus .dot{width:5px;height:5px;border-radius:50%;display:inline-block}
.qs-cfg-pstatus.connected .dot{background:#34d399;box-shadow:0 0 6px rgba(34,197,94,0.5)}
.qs-cfg-pstatus.disconnected .dot{background:#f87171}
.qs-cfg-section{margin-bottom:12px}
.qs-cfg-stitle{font-size:10px;font-weight:700;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:.6px;padding:0 4px 8px;display:flex;align-items:center;gap:6px}
.qs-cfg-stitle svg{opacity:0.5}
.qs-cfg-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:14px;overflow:hidden;backdrop-filter:blur(10px)}
.qs-cfg-card.highlight{border-color:rgba(139,92,246,0.15);background:rgba(139,92,246,0.03)}
.qs-cfg-row{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border-bottom:1px solid rgba(255,255,255,0.03);gap:10px;transition:background .15s}
.qs-cfg-row:last-child{border-bottom:none}
.qs-cfg-row:hover{background:rgba(255,255,255,0.015)}
.qs-cfg-row-left{display:flex;align-items:center;gap:10px;flex:1;min-width:0}
.qs-cfg-row-icon{width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid rgba(255,255,255,0.04)}
.qs-cfg-row-icon.purple{background:rgba(139,92,246,0.1);color:#a78bfa;border-color:rgba(139,92,246,0.1)}
.qs-cfg-row-icon.cyan{background:rgba(6,182,212,0.1);color:#67e8f9;border-color:rgba(6,182,212,0.1)}
.qs-cfg-row-icon.amber{background:rgba(245,158,11,0.1);color:#fbbf24;border-color:rgba(245,158,11,0.1)}
.qs-cfg-row-icon.green{background:rgba(34,197,94,0.1);color:#34d399;border-color:rgba(34,197,94,0.1)}
.qs-cfg-row-icon.rose{background:rgba(244,63,94,0.1);color:#fb7185;border-color:rgba(244,63,94,0.1)}
.qs-cfg-row-info{flex:1;min-width:0}
.qs-cfg-row-info h4{font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.88);margin:0 0 2px}
.qs-cfg-row-info p{font-size:10px;color:rgba(255,255,255,0.3);margin:0;line-height:1.3}
.qs-cfg-input-group{padding:12px 14px}
.qs-cfg-input{width:100%;padding:10px 12px;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.06);border-radius:10px;color:#e2e8f0;font-size:12px;font-family:'SF Mono',Monaco,Consolas,monospace;outline:none;box-sizing:border-box;transition:all .2s;letter-spacing:.3px}
.qs-cfg-input:focus{border-color:rgba(139,92,246,0.4);background:rgba(0,0,0,0.6);box-shadow:0 0 0 3px rgba(139,92,246,0.06)}
.qs-cfg-input::placeholder{color:rgba(255,255,255,0.15);font-family:Inter,sans-serif;font-size:11px;letter-spacing:0}
.qs-cfg-input-label{font-size:10px;font-weight:600;color:rgba(255,255,255,0.4);margin-bottom:6px;display:flex;align-items:center;gap:4px}
.qs-cfg-btns{display:flex;gap:6px;margin-top:8px}
.qs-cfg-btn{flex:1;padding:9px 12px;border-radius:9px;font-size:11px;font-weight:600;cursor:pointer;border:none;transition:all .2s;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:5px}
.qs-cfg-btn.primary{background:linear-gradient(135deg,rgba(139,92,246,0.3),rgba(217,70,239,0.2));color:#c4b5fd;border:1px solid rgba(139,92,246,0.2)}
.qs-cfg-btn.primary:hover{background:linear-gradient(135deg,rgba(139,92,246,0.4),rgba(217,70,239,0.3));transform:translateY(-1px);box-shadow:0 4px 12px rgba(139,92,246,0.15)}
.qs-cfg-btn.sync{background:rgba(6,182,212,0.12);color:#67e8f9;border:1px solid rgba(6,182,212,0.15)}
.qs-cfg-btn.sync:hover{background:rgba(6,182,212,0.2);transform:translateY(-1px)}
.qs-cfg-btn.danger{background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1)}
.qs-cfg-btn.danger:hover{background:rgba(248,113,113,0.12)}
.qs-cfg-btn.success{background:rgba(34,197,94,0.1);color:#34d399;border:1px solid rgba(34,197,94,0.15)}
.qs-cfg-btn:disabled{opacity:0.3;cursor:not-allowed;transform:none!important}
.qs-cfg-status{margin-top:8px;padding:8px 12px;border-radius:9px;font-size:10.5px;font-weight:500;display:none;align-items:center;gap:6px;animation:qs-fadeIn .3s ease}
.qs-cfg-status.show{display:flex}
.qs-cfg-status.success{background:rgba(34,197,94,0.06);color:#34d399;border:1px solid rgba(34,197,94,0.1)}
.qs-cfg-status.error{background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1)}
.qs-cfg-status.info{background:rgba(96,165,250,0.06);color:#60a5fa;border:1px solid rgba(96,165,250,0.1)}
.qs-cfg-divider{height:1px;background:linear-gradient(90deg,transparent,rgba(139,92,246,0.1),transparent);margin:4px 0}
.qs-cfg-version{text-align:center;padding:12px;font-size:9px;color:rgba(255,255,255,0.12);letter-spacing:.5px}
.qs-cfg-version span{color:rgba(139,92,246,0.4);font-weight:700}
.qs-cfg-api-badge{display:inline-flex;align-items:center;gap:3px;padding:2px 7px;border-radius:5px;font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.3px}
.qs-cfg-api-badge.active{background:rgba(34,197,94,0.1);color:#34d399;border:1px solid rgba(34,197,94,0.12)}
.qs-cfg-api-badge.inactive{background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.25);border:1px solid rgba(255,255,255,0.05)}
`;
document.head.appendChild(css);

// ═══ FAB ═══
var fab = document.createElement("div");
fab.id = "qs-fab";
fab.innerHTML = '<div class="fab-pulse"></div>' + IC.sparkle + '<div class="fab-badge" id="qs-fab-badge" style="display:none">0</div>';
document.body.appendChild(fab);

// ═══ PANEL ═══
var panel = document.createElement("div");
panel.id = "qs-panel";

var apiType = getApiType();
var kst = S.useDogly ? "DOGLYTDC" : apiType ? apiType.toUpperCase() : "SEM KEY";
var kbc = S.useDogly ? "dtdc" : apiType ? "on" : "off";

panel.innerHTML = [
'<div class="qs-orb qs-orb1"></div><div class="qs-orb qs-orb2"></div><div class="qs-orb qs-orb3"></div>',
'<div class="qs-h"><div class="qs-p"><div class="qs-av">',IC.brain,'</div><div class="qs-i"><h3>',CFG.profileName,' <span class="qs-b ',kbc,'">',kst,'</span></h3><span>v',CFG.version,' All Types AI</span></div></div><div class="qs-hb"><button class="qs-ib" id="qs-hide" title="Minimizar">',IC.minus,'</button></div></div>',
'<div class="qs-n">',
  '<button class="qs-nb ac" data-p="main">',IC.target,' Solver</button>',
  '<button class="qs-nb" data-p="chat">',IC.chat,' Chat</button>',
  '<button class="qs-nb" data-p="logs">',IC.list,' Logs</button>',
  '<button class="qs-nb" data-p="cfg">',IC.settings,' Config</button>',
'</div>',

// === MAIN PAGE ===
'<div class="qs-pg ac" data-p="main">',
  '<div id="qs-monitor" style="background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.1);border-radius:10px;padding:8px 10px;margin-bottom:8px;font-size:10px;display:flex;flex-wrap:wrap;gap:6px;align-items:center">',
    '<span id="qs-mon-status" style="display:inline-flex;align-items:center;gap:4px;color:#a78bfa;font-weight:700"><span style="width:6px;height:6px;border-radius:50%;background:#a78bfa;display:inline-block"></span> Monitorando...</span>',
    '<span id="qs-mon-mode" style="color:rgba(255,255,255,0.35);font-size:9px">--</span>',
    '<span id="qs-mon-progress" style="color:rgba(255,255,255,0.35);font-size:9px;margin-left:auto">--</span>',
    '<span id="qs-mon-time" style="color:#fbbf24;font-size:9px;font-weight:600;display:none">-- </span>',
    '<span id="qs-mon-score" style="color:#34d399;font-size:9px;font-weight:600;display:none">-- </span>',
  '</div>',
  // Passage indicator
  '<div class="qs-passage-bar" id="qs-passage-bar" style="display:none">',IC.eye,' <span id="qs-passage-info">Texto/Passagem detectado e salvo</span></div>',
  isMobile ? '' : '<div class="qs-keys">'+IC.keyboard+' <kbd>Alt</kbd> Ocultar <kbd>D</kbd> Detectar <kbd>R</kbd> Resolver</div>',
  '<div class="qs-sg"><div class="qs-sc"><div class="qs-sv" id="st-s">0</div><div class="qs-sl">Total</div></div><div class="qs-sc s"><div class="qs-sv" id="st-c">0</div><div class="qs-sl">Corretas</div></div><div class="qs-sc e"><div class="qs-sv" id="st-e">0</div><div class="qs-sl">Erros</div></div><div class="qs-sc st"><div class="qs-sv" id="st-str">0</div><div class="qs-sl">Streak</div></div></div>',
  '<div class="qs-fb" id="qs-fb"><span id="qs-fbx"></span></div>',
  '<div class="qs-qc"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px"><span class="qs-tb" id="qs-tp">Aguardando...</span><span id="qs-vb" style="font-size:8.5px;color:rgba(251,191,36,0.7);display:none;align-items:center;gap:3px">',IC.camera,' Vision</span></div><div class="qs-qt em" id="qs-q">',isMobile ? 'Toque <b>Detectar</b> ou <b>Resolver</b>' : 'Pressione <b>D</b> para detectar ou <b>R</b> para resolver','</div></div>',
  '<div class="qs-ac" style="margin-bottom:7px"><button class="qs-bt sc" id="qs-det">',IC.search,' Detectar</button><button class="qs-bt pr" id="qs-slv">',IC.zap,' Resolver</button></div>',
  '<div class="qs-ac"><button class="qs-bt sc" id="qs-scr">',IC.camera,' Screenshot</button><button class="qs-bt am" id="qs-auto">',IC.play,' Auto</button></div>',
  '<div class="qs-st" id="qs-st"><span id="qs-stx"></span></div>',
'</div>',

// === CHAT PAGE ===
'<div class="qs-pg" data-p="chat">',
  '<div class="qs-chat-wrap">',
    '<div class="qs-chat-msgs" id="qs-chat-msgs">',
      '<div class="qs-chat-empty">',IC.chat,'<div>Chat AI com Screenshot</div><div style="font-size:10px;color:rgba(255,255,255,0.15)">Capture a tela e pergunte a IA.</div></div>',
    '</div>',
    '<div class="qs-chat-bar">',
      '<button class="qs-chat-btn ss" id="qs-chat-ss" title="Capturar tela">',IC.camera,'</button>',
      '<input class="qs-chat-input" id="qs-chat-in" placeholder="Pergunte sobre a questao..." />',
      '<button class="qs-chat-btn snd" id="qs-chat-send" title="Enviar">',IC.send,'</button>',
    '</div>',
  '</div>',
'</div>',

// === LOGS PAGE ===
'<div class="qs-pg" data-p="logs"><div class="qs-lc"><div class="qs-lh"><h4>',IC.list,' Logs <span class="log-count" id="qs-log-count">0</span></h4><button class="qs-clb" id="qs-cl">',IC.trash,' Limpar</button></div><div class="qs-ll" id="qs-lg"><div class="qs-el">',IC.info,'<span>Nenhum log registrado</span></div></div></div></div>',

// === CONFIG PAGE v15 ===
'<div class="qs-pg" data-p="cfg">',

  // ─── Profile Hero Card ───
  '<div class="qs-cfg-hero">',
    '<div class="qs-cfg-profile">',
      '<div class="qs-cfg-avatar" id="qs-cfg-avatar">', (S.useDogly ? '?' : '?'), '</div>',
      '<div class="qs-cfg-pinfo">',
        '<div class="qs-cfg-pname" id="qs-cfg-name">', (S.useDogly ? 'Carregando...' : 'Não conectado'), '</div>',
        '<div class="qs-cfg-psub" id="qs-cfg-sub">DoglyTdc Solver Pro</div>',
      '</div>',
      '<div class="qs-cfg-pstatus ', (S.useDogly ? 'connected' : 'disconnected'), '" id="qs-cfg-pstatus">',
        '<span class="dot"></span> ', (S.useDogly ? 'Online' : 'Offline'),
      '</div>',
    '</div>',
  '</div>',

  // ─── Connection Section ───
  '<div class="qs-cfg-section">',
    '<div class="qs-cfg-stitle">', IC.link, ' Conexão DoglyTdc</div>',
    '<div class="qs-cfg-card highlight">',
      '<div class="qs-cfg-input-group">',
        '<div class="qs-cfg-input-label">', IC.key, ' Webhook Token</div>',
        '<input type="text" class="qs-cfg-input" id="qs-wt" placeholder="Cole seu token de webhook..." value="', (S.webhookToken !== "85489d2193193d9680dca2113e8f5edc6288fc9c67e44a14" ? S.webhookToken : ""), '">',
        '<div class="qs-cfg-btns">',
          '<button class="qs-cfg-btn primary" id="qs-ws">', IC.link, ' Conectar</button>',
        '</div>',
        '<div class="qs-cfg-status" id="qs-cfg-conn-status"></div>',
      '</div>',
    '</div>',
  '</div>',

  // ─── API Key Section ───
  '<div class="qs-cfg-section">',
    '<div class="qs-cfg-stitle">', IC.key, ' Chave de API</div>',
    '<div class="qs-cfg-card">',
      '<div class="qs-cfg-row">',
        '<div class="qs-cfg-row-left">',
          '<div class="qs-cfg-row-icon purple">', IC.zap, '</div>',
          '<div class="qs-cfg-row-info">',
            '<h4>Provedor atual</h4>',
            '<p id="qs-cfg-provider">', (S.useDogly ? 'DoglyTdc Rotation Pool' : S.apiKey ? getApiType().toUpperCase() : 'Nenhum configurado'), '</p>',
          '</div>',
        '</div>',
        '<div class="qs-cfg-api-badge ', (S.useDogly || S.apiKey ? 'active' : 'inactive'), '" id="qs-cfg-api-badge">', (S.useDogly || S.apiKey ? 'Ativo' : 'Inativo'), '</div>',
      '</div>',
      '<div class="qs-cfg-input-group" style="border-top:1px solid rgba(255,255,255,0.03)">',
        '<div class="qs-cfg-input-label">', IC.key, ' API Key Manual (Groq, Google, OpenAI)</div>',
        '<input type="password" class="qs-cfg-input" id="qs-ki" placeholder="gsk_... ou AIza... ou sk-...">',
        '<div class="qs-cfg-btns">',
          '<button class="qs-cfg-btn primary" id="qs-ks">', IC.check, ' Salvar</button>',
          '<button class="qs-cfg-btn sync" id="qs-ksync">', IC.rotate, ' Sync</button>',
          '<button class="qs-cfg-btn danger" id="qs-kc">', IC.trash, ' Limpar</button>',
        '</div>',
        '<div class="qs-cfg-status" id="qs-cfg-key-status"></div>',
      '</div>',
    '</div>',
  '</div>',

  // ─── Behavior Settings ───
  '<div class="qs-cfg-section">',
    '<div class="qs-cfg-stitle">', IC.settings, ' Comportamento</div>',
    '<div class="qs-cfg-card">',
      '<div class="qs-cfg-row"><div class="qs-cfg-row-left"><div class="qs-cfg-row-icon cyan">', IC.camera, '</div><div class="qs-cfg-row-info"><h4>Screenshot AI</h4><p>Captura visual real da tela</p></div></div><div class="qs-tg ', S.settings.screenshotMode?"ac":"", '" data-s="screenshotMode"></div></div>',
      '<div class="qs-cfg-row"><div class="qs-cfg-row-left"><div class="qs-cfg-row-icon amber">', IC.eye, '</div><div class="qs-cfg-row-info"><h4>Vision Mode</h4><p>Envia imagens para a IA analisar</p></div></div><div class="qs-tg ', S.settings.visionMode?"ac":"", '" data-s="visionMode"></div></div>',
      '<div class="qs-cfg-row"><div class="qs-cfg-row-left"><div class="qs-cfg-row-icon green">', IC.zap, '</div><div class="qs-cfg-row-info"><h4>Auto-Submit</h4><p>Seleciona a resposta automaticamente</p></div></div><div class="qs-tg ', S.settings.autoSubmit?"ac":"", '" data-s="autoSubmit"></div></div>',
      '<div class="qs-cfg-row"><div class="qs-cfg-row-left"><div class="qs-cfg-row-icon rose">', IC.arrowR, '</div><div class="qs-cfg-row-info"><h4>Auto-Advance</h4><p>Avança para próxima questão</p></div></div><div class="qs-tg ', S.settings.autoAdvance?"ac":"", '" data-s="autoAdvance"></div></div>',
    '</div>',
  '</div>',

  // ─── About ───
  '<div class="qs-cfg-divider"></div>',
  '<div class="qs-cfg-version">',
    '<span>Quizizz AI Solver Pro</span> v', CFG.version, ' — DoglyTdc Edition<br>',
    'All Types • Blocks • V/F • Vision • Feedback v17',
  '</div>',

'</div>'
].join("");
document.body.appendChild(panel);

// ═══ DOM REFS ═══
var qEl = panel.querySelector("#qs-q");
var tpEl = panel.querySelector("#qs-tp");
var stEl = panel.querySelector("#qs-st");
var stxEl = panel.querySelector("#qs-stx");
var vbEl = panel.querySelector("#qs-vb");
var fbEl = panel.querySelector("#qs-fb");
var fbxEl = panel.querySelector("#qs-fbx");
var detBtn = panel.querySelector("#qs-det");
var slvBtn = panel.querySelector("#qs-slv");
var scrBtn = panel.querySelector("#qs-scr");
var autoBtn = panel.querySelector("#qs-auto");
var hideBtn = panel.querySelector("#qs-hide");
var header = panel.querySelector(".qs-h");
var logsEl = panel.querySelector("#qs-lg");
var logCountEl = panel.querySelector("#qs-log-count");
var navBtns = panel.querySelectorAll(".qs-nb");
var pages = panel.querySelectorAll(".qs-pg");
var chatMsgsEl = panel.querySelector("#qs-chat-msgs");
var chatInput = panel.querySelector("#qs-chat-in");
var chatSendBtn = panel.querySelector("#qs-chat-send");
var chatSSBtn = panel.querySelector("#qs-chat-ss");
var fabBadge = document.querySelector("#qs-fab-badge");
var passageBar = panel.querySelector("#qs-passage-bar");
var passageInfo = panel.querySelector("#qs-passage-info");

// ═══ UTILS ═══
function log(m, t) {
  t = t || "inf";
  var now = new Date();
  var tm = now.toLocaleTimeString("pt-BR", {hour:"2-digit",minute:"2-digit",second:"2-digit"});
  S.logs.unshift({m:m,t:t,tm:tm});
  if(S.logs.length > 150) S.logs.pop();
  renderLogs();
}
function renderLogs() {
  logCountEl.textContent = S.logs.length;
  if(!S.logs.length) { logsEl.innerHTML = '<div class="qs-el">'+IC.info+'<span>Nenhum log</span></div>'; return; }
  var iconMap = { inf: IC.info, suc: IC.checkCircle, err: IC.xCircle, wrn: IC.eye };
  logsEl.innerHTML = S.logs.map(function(l){
    return '<div class="qs-li '+l.t+'"><div class="log-icon">'+(iconMap[l.t]||IC.info)+'</div><span class="qs-lt">'+l.tm+'</span><span class="qs-lm">'+l.m+'</span></div>';
  }).join("");
}
function setStatus(m, t) {
  stxEl.textContent = m;
  stEl.className = "qs-st vi " + t;
  log(m, t === "suc" ? "suc" : t === "err" ? "err" : t === "wrn" ? "wrn" : "inf");
}
function updateStats() {
  panel.querySelector("#st-s").textContent = S.stats.solved;
  panel.querySelector("#st-c").textContent = S.stats.correct;
  panel.querySelector("#st-e").textContent = S.stats.wrong;
  panel.querySelector("#st-str").textContent = S.stats.streak;
  if(S.minimized && S.stats.solved > 0) { fabBadge.style.display = "flex"; fabBadge.textContent = S.stats.correct; }
}
function showFeedback(correct, msg) {
  fbEl.className = "qs-fb " + (correct ? "correct" : "wrong");
  fbxEl.innerHTML = (correct ? IC.checkCircle : IC.xCircle) + " " + msg;
  setTimeout(function(){ fbEl.className = "qs-fb"; }, 4000);
}
function updateBadge() {
  var b = panel.querySelector(".qs-b");
  var at = getApiType();
  if(at === "doglytdc") { b.className = "qs-b dtdc"; b.textContent = "DOGLYTDC"; }
  else if(at) { b.className = "qs-b on"; b.textContent = at.toUpperCase(); }
  else { b.className = "qs-b off"; b.textContent = "SEM KEY"; }
}
function norm(s){ return (s||"").replace(/[^a-zA-Z\u00C0-\u017F\s0-9]/g,"").trim().toLowerCase(); }
function qHash(q){ return (q||"").replace(/\s+/g,"").substring(0,80); }

// ═══ CLEAN AI RESPONSE ═══
function cleanAIResponse(text) {
  if(!text) return text;
  var cleaned = text
    .replace(/^(a resposta (correta )?(e|é):?\s*)/i, "")
    .replace(/^(the (correct )?answer is:?\s*)/i, "")
    .replace(/^(resposta:?\s*)/i, "")
    .replace(/^(answer:?\s*)/i, "")
    .replace(/^(alternativa correta:?\s*)/i, "")
    .replace(/^(a alternativa (correta )?e:?\s*)/i, "")
    .replace(/^(com base na (imagem|questao|pergunta|tela|screenshot),?\s*)/i, "")
    .replace(/^(analisando a (imagem|questao|tela),?\s*)/i, "")
    .replace(/^(de acordo com a (imagem|questao),?\s*)/i, "")
    .replace(/^(olhando para a (imagem|tela),?\s*)/i, "")
    .replace(/^(based on the (image|screenshot|screen),?\s*)/i, "")
    .replace(/^(looking at the (image|screen|question),?\s*)/i, "")
    .trim();
  var lines = cleaned.split("\n").filter(function(l){ return l.trim().length > 0; });
  if(lines.length > 4) cleaned = lines.slice(0, 4).join("\n");
  return cleaned;
}

// ═══ NAVIGATION ═══
navBtns.forEach(function(btn){
  btn.addEventListener("click", function(){
    var p = btn.getAttribute("data-p");
    navBtns.forEach(function(b){b.classList.remove("ac");});
    btn.classList.add("ac");
    pages.forEach(function(pg){pg.classList.toggle("ac", pg.getAttribute("data-p") === p);});
  });
});

// ═══ SHOW/HIDE + MINIMIZE TO FAB ═══
function minimizeToFab() {
  S.minimized = true;
  panel.classList.add("hidden");
  fab.style.display = "flex";
  if(S.stats.correct > 0) { fabBadge.style.display = "flex"; fabBadge.textContent = S.stats.correct; }
}
function restoreFromFab() {
  S.minimized = false;
  panel.classList.remove("hidden");
  fab.style.display = "none";
  fabBadge.style.display = "none";
}
function togglePanel() {
  if(S.minimized) restoreFromFab(); else minimizeToFab();
}
hideBtn.addEventListener("click", minimizeToFab);
fab.addEventListener("click", restoreFromFab);

// ═══ TOGGLES ═══
panel.querySelectorAll(".qs-tg").forEach(function(tg){
  tg.addEventListener("click", function(){
    var s = tg.getAttribute("data-s");
    S.settings[s] = !S.settings[s];
    tg.classList.toggle("ac", S.settings[s]);
    log(s + " " + (S.settings[s] ? "ON" : "OFF"), "inf"); saveRemoteConfig();
  });
});

// ═══ KEY MANAGEMENT v15 ═══
function setCfgStatus(elId, msg, type) {
  var el = panel.querySelector("#" + elId);
  if(!el) return;
  el.className = "qs-cfg-status show " + type;
  el.innerHTML = (type === "success" ? IC.checkCircle : type === "error" ? IC.xCircle : IC.loader) + " " + msg;
  if(type !== "info") setTimeout(function(){ el.className = "qs-cfg-status"; }, 4000);
}
function updateCfgProvider() {
  var provEl = panel.querySelector("#qs-cfg-provider");
  var badgeEl = panel.querySelector("#qs-cfg-api-badge");
  if(provEl) provEl.textContent = S.useDogly ? "DoglyTdc Rotation Pool" : S.apiKey ? getApiType().toUpperCase() : "Nenhum configurado";
  if(badgeEl) {
    var active = S.useDogly || S.apiKey;
    badgeEl.className = "qs-cfg-api-badge " + (active ? "active" : "inactive");
    badgeEl.textContent = active ? "Ativo" : "Inativo";
  }
}
panel.querySelector("#qs-ks").addEventListener("click", function(){
  var nk = panel.querySelector("#qs-ki").value.trim();
  if(nk && nk.length > 5) {
    S.apiKey = nk; S.useDogly = false; updateBadge(); updateCfgProvider();
    panel.querySelector("#qs-ki").value = ""; panel.querySelector("#qs-ki").type = "password";
    log("API Key salva!", "suc"); setCfgStatus("qs-cfg-key-status", "API Key salva com sucesso!", "success"); saveRemoteConfig();
  } else { setCfgStatus("qs-cfg-key-status", "Key muito curta (mín. 6 caracteres)", "error"); }
});
panel.querySelector("#qs-ksync").addEventListener("click", function(){
  var nk = panel.querySelector("#qs-ki").value.trim() || S.apiKey;
  if(!nk || nk.length < 5) { setCfgStatus("qs-cfg-key-status", "Insira uma API Key primeiro", "error"); return; }
  if(!S.useDogly || !S.webhookToken || S.webhookToken === "85489d2193193d9680dca2113e8f5edc6288fc9c67e44a14") { setCfgStatus("qs-cfg-key-status", "Conecte ao DoglyTdc primeiro", "error"); return; }
  setCfgStatus("qs-cfg-key-status", "Sincronizando com DoglyTdc...", "info");
  var provider = "groq";
  if(nk.indexOf("AIza") === 0) provider = "google";
  else if(nk.indexOf("sk-") === 0) provider = "openai";
  fetch(CFG.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": S.webhookToken },
    body: JSON.stringify({ action: "sync_key", api_key: nk, provider: provider })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d.success) {
      log("Key sincronizada! (" + provider + ")", "suc");
      setCfgStatus("qs-cfg-key-status", "Key sincronizada com " + provider.toUpperCase() + "!", "success");
      panel.querySelector("#qs-ki").value = "";
    } else { setCfgStatus("qs-cfg-key-status", "Erro: " + (d.error || "falhou"), "error"); }
  }).catch(function(e){ setCfgStatus("qs-cfg-key-status", "Erro de conexão: " + e.message, "error"); });
});
panel.querySelector("#qs-kc").addEventListener("click", function(){
  S.apiKey = ""; updateBadge(); updateCfgProvider();
  log("Key removida", "inf"); setCfgStatus("qs-cfg-key-status", "API Key removida", "success");
});
panel.querySelector("#qs-ws").addEventListener("click", function(){
  var token = panel.querySelector("#qs-wt").value.trim();
  if(token && token.length > 5) {
    S.webhookToken = token; S.useDogly = true; updateBadge(); updateCfgProvider();
    log("DoglyTdc conectado!", "suc");
    setCfgStatus("qs-cfg-conn-status", "Conectado ao DoglyTdc!", "success");
    // Update profile status
    var statusEl = panel.querySelector("#qs-cfg-pstatus");
    if(statusEl) { statusEl.className = "qs-cfg-pstatus connected"; statusEl.innerHTML = '<span class="dot"></span> Online'; }
    fetchUserProfile(); loadRemoteConfig(); saveRemoteConfig();
  } else { setCfgStatus("qs-cfg-conn-status", "Token inválido (mín. 6 caracteres)", "error"); }
});
panel.querySelector("#qs-cl").addEventListener("click", function(){ S.logs = []; renderLogs(); });

// ═══ DRAG ═══
var dsx=0,dsy=0,psx=0,psy=0;
if(!isMobile) { header.addEventListener("mousedown", dStart); document.addEventListener("mousemove", dMove); document.addEventListener("mouseup", dEnd); }
header.addEventListener("touchstart", dStart, {passive:false});
document.addEventListener("touchmove", dMove, {passive:false});
document.addEventListener("touchend", dEnd);
function dStart(e){ if(S.minimized)return; var tgt=e.target; if(tgt&&(tgt.closest(".qs-ib")||tgt.closest("button")||tgt.tagName==="BUTTON"||tgt.tagName==="SVG"||tgt.tagName==="path")) return; e.preventDefault(); S.isDragging=true; var t=e.touches?e.touches[0]:e; var r=panel.getBoundingClientRect(); dsx=t.clientX;dsy=t.clientY;psx=r.left;psy=r.top; panel.style.transition="none"; }
function dMove(e){ if(!S.isDragging)return; e.preventDefault(); var t=e.touches?e.touches[0]:e; if(!isMobile) { panel.style.left=Math.max(0,Math.min(psx+t.clientX-dsx,window.innerWidth-panel.offsetWidth))+"px"; panel.style.top=Math.max(0,Math.min(psy+t.clientY-dsy,window.innerHeight-panel.offsetHeight))+"px"; panel.style.right="auto"; panel.style.bottom="auto"; } }
function dEnd(){ S.isDragging=false; panel.style.transition=""; }

// ══════════════════════════════════════════════════════════
// ═══ SCREENSHOT CAPTURE ═══
// ══════════════════════════════════════════════════════════
function captureScreenshot() {
  return new Promise(function(res) {
    try {
      panel.style.visibility = "hidden";
      fab.style.visibility = "hidden";
      function doCapture() {
        if(typeof html2canvas !== "undefined") {
          html2canvas(document.documentElement, {
            width: window.innerWidth, height: window.innerHeight,
            x: window.scrollX, y: window.scrollY,
            scale: window.devicePixelRatio > 1 ? 1 : 0.8,
            useCORS: true, allowTaint: true, logging: false,
            backgroundColor: null, removeContainer: true,
            ignoreElements: function(el) { return el.id === "qs-panel" || el.id === "qs-fab" || el.id === "qs-style"; }
          }).then(function(canvas) {
            panel.style.visibility = ""; fab.style.visibility = "";
            if(S.minimized) fab.style.display = "flex";
            var maxW = 1280;
            if(canvas.width > maxW) {
              var ratio = maxW / canvas.width;
              var resized = document.createElement("canvas");
              resized.width = maxW; resized.height = Math.round(canvas.height * ratio);
              resized.getContext("2d").drawImage(canvas, 0, 0, resized.width, resized.height);
              res(resized.toDataURL("image/jpeg", 0.75));
            } else { res(canvas.toDataURL("image/jpeg", 0.75)); }
          }).catch(function(e) {
            panel.style.visibility = ""; fab.style.visibility = "";
            if(S.minimized) fab.style.display = "flex";
            res(canvasFallback());
          });
        } else { panel.style.visibility = ""; fab.style.visibility = ""; if(S.minimized) fab.style.display = "flex"; res(canvasFallback()); }
      }
      if(typeof html2canvas === "undefined") {
        loadH2C().then(function(ok) { if(ok) setTimeout(doCapture, 100); else { panel.style.visibility = ""; fab.style.visibility = ""; res(canvasFallback()); } });
      } else doCapture();
    } catch(e) { panel.style.visibility = ""; fab.style.visibility = ""; if(S.minimized) fab.style.display = "flex"; res(null); }
  });
}

function canvasFallback() {
  try {
    var canvas = document.createElement("canvas");
    canvas.width = window.innerWidth * 0.7; canvas.height = window.innerHeight * 0.7;
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0d0d1a"; ctx.fillRect(0, 0, canvas.width, canvas.height);
    var scale = 0.7;
    document.querySelectorAll("img").forEach(function(img) {
      if(!img.offsetParent || img.naturalWidth < 30 || img.naturalHeight < 30) return;
      var rect = img.getBoundingClientRect();
      if(rect.bottom < 0 || rect.top > window.innerHeight) return;
      if(img.src.indexOf("avatar") >= 0 || img.src.indexOf("logo") >= 0 || img.src.indexOf("favicon") >= 0) return;
      try { ctx.drawImage(img, rect.left * scale, rect.top * scale, Math.min(rect.width, 400) * scale, Math.min(rect.height, 400) * scale); } catch(e){}
    });
    ctx.font = "bold " + (13 * scale) + "px Inter, system-ui, sans-serif";
    ctx.fillStyle = "#e2e8f0";
    var drawnY = new Set();
    document.querySelectorAll('[class*="question"], [class*="option"], [class*="Option"], .typeset, .ql-editor, [class*="stimulus"], h1, h2, h3, p, span, button').forEach(function(el) {
      if(!el.offsetParent || el.closest("#qs-panel") || el.closest("#qs-fab")) return;
      var rect = el.getBoundingClientRect();
      if(rect.bottom < 0 || rect.top > window.innerHeight) return;
      var text = (el.innerText || "").trim();
      if(!text || text.length < 2) return;
      var yKey = Math.round(rect.top / 10);
      if(drawnY.has(yKey)) return; drawnY.add(yKey);
      text.split("\n").slice(0, 4).forEach(function(line, li) {
        if(line.trim().length < 2) return;
        ctx.fillText(line.trim().substring(0, 120), rect.left * scale + 4, (rect.top + 14 + li * 16) * scale);
      });
    });
    return canvas.toDataURL("image/jpeg", 0.7);
  } catch(e) { return null; }
}

// ══════════════════════════════════════════════════════════
// ═══ CHAT AI ═══
// ══════════════════════════════════════════════════════════
var chatScreenshot = null;
function addChatMessage(role, text, imgSrc) { S.chatMessages.push({role:role, text:text, img:imgSrc||null}); renderChat(); }
function renderChat() {
  if(!S.chatMessages.length) { chatMsgsEl.innerHTML = '<div class="qs-chat-empty">'+IC.chat+'<div>Chat AI com Screenshot</div></div>'; return; }
  chatMsgsEl.innerHTML = S.chatMessages.map(function(m){
    var content = '';
    if(m.role === 'ai') content += '<div class="ai-label">'+IC.sparkle+' AI</div>';
    if(m.img) content += '<img src="'+m.img+'" style="max-width:180px;max-height:120px;border-radius:8px;margin-bottom:4px;display:block">';
    content += '<div>' + m.text + '</div>';
    return '<div class="qs-cmsg '+m.role+'">'+content+'</div>';
  }).join("");
  chatMsgsEl.scrollTop = chatMsgsEl.scrollHeight;
}
chatSSBtn.addEventListener("click", function(){
  chatSSBtn.disabled = true; chatSSBtn.innerHTML = '<span class="qs-spin">'+IC.loader+'</span>';
  captureScreenshot().then(function(b64){
    chatSSBtn.disabled = false; chatSSBtn.innerHTML = IC.camera;
    if(b64) { chatScreenshot = b64; addChatMessage("user", "Screenshot capturado", b64); log("Chat: screenshot", "suc"); }
    else log("Chat: falha no screenshot", "err");
  });
});
function sendChatMessage() {
  var text = chatInput.value.trim();
  if(!text && !chatScreenshot) return;
  var at = getApiType();
  if(!at) { addChatMessage("ai", "Configure API Key ou DoglyTdc primeiro."); return; }
  var userText = text || "O que esta na tela? Qual a resposta correta?";
  addChatMessage("user", userText); chatInput.value = "";
  S.chatMessages.push({role:"ai", text:"Analisando...", img:null, loading:true}); renderChat();
  var msgParts = []; msgParts.push({type: "text", text: userText});
  var ssPromise = chatScreenshot ? Promise.resolve(chatScreenshot) : captureScreenshot();
  ssPromise.then(function(ss){
    if(ss) msgParts.push({type: "image_url", image_url: {url: ss}});
    chatScreenshot = null;
    var messages = [
      {role: "system", content: "Voce e um assistente de questoes. REGRAS: Responda SOMENTE a resposta. SEM explicacoes. SEM frases como 'a resposta e'. APENAS o resultado."},
      {role: "user", content: msgParts}
    ];
    return callAI(messages);
  }).then(function(ans){
    S.chatMessages = S.chatMessages.filter(function(m){ return !m.loading; });
    addChatMessage("ai", cleanAIResponse(ans.trim()));
  }).catch(function(e){
    S.chatMessages = S.chatMessages.filter(function(m){ return !m.loading; });
    addChatMessage("ai", "Erro: " + e.message);
  });
}
chatSendBtn.addEventListener("click", sendChatMessage);
chatInput.addEventListener("keydown", function(e){ if(e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChatMessage(); } });

// ══════════════════════════════════════════════════════════
// ═══ REAL-TIME SITE MONITOR ═══
// ══════════════════════════════════════════════════════════
var monStatusEl, monModeEl, monProgressEl, monTimeEl, monScoreEl;
setTimeout(function(){
  monStatusEl = document.getElementById("qs-mon-status");
  monModeEl = document.getElementById("qs-mon-mode");
  monProgressEl = document.getElementById("qs-mon-progress");
  monTimeEl = document.getElementById("qs-mon-time");
  monScoreEl = document.getElementById("qs-mon-score");
}, 100);

function monitorSite() {
  var st = S.siteState;
  var url = location.href;
  var host = location.hostname;

  // 1. Detect Quizizz/Wayground
  st.isQuizizz = /quiziz|wayground/i.test(host) || /quiziz|wayground/i.test(url) || !!document.querySelector('[class*="quizizz"], [class*="Quizizz"], [data-testid*="quiz"], [class*="wayground"], [class*="Wayground"]');

  // 2. Detect game mode
  var prevMode = st.gameMode;
  
  var finishedSels = '[class*="game-over"], [class*="GameOver"], [class*="game-summary"], [class*="GameSummary"], [class*="leaderboard"], [class*="Leaderboard"], [class*="result-screen"], [class*="ResultScreen"], [class*="score-screen"], [class*="ScoreScreen"], [class*="end-screen"], [class*="EndScreen"], [class*="game-end"], [class*="GameEnd"], [class*="final-score"], [class*="FinalScore"], [class*="quiz-ended"], [class*="QuizEnded"], [data-testid="game-over"], [data-testid="results"]';
  var finishedEl = document.querySelector(finishedSels);
  if(finishedEl && finishedEl.offsetParent !== null) { st.gameMode = "finished"; }
  else if(document.querySelector('[class*="lobby"], [class*="Lobby"], [class*="waiting-room"], [class*="WaitingRoom"], [class*="join-screen"], [class*="JoinScreen"], [data-testid="lobby"]') && !document.querySelector('[class*="question"], [class*="Question"]')) { st.gameMode = "lobby"; }
  else if(document.querySelector('[class*="passage"], [class*="Passage"], [class*="reading"], [class*="Reading"], [class*="text-passage"], [class*="TextPassage"], [class*="reading-comprehension"], [class*="stimulus-text"], [class*="StimulusText"]')) {
    st.gameMode = "reading"; st.isReading = true;
    // ═══ v14: PASSAGE PERSISTENCE ═══
    capturePassageText();
  }
  else if(document.querySelector('[class*="power-up"], [class*="PowerUp"], [class*="powerup"], [class*="redemption"]')) { st.gameMode = "powerup"; st.isPowerUp = true; }
  else if(document.querySelector('[class*="countdown"], [class*="Countdown"], [class*="timer-full"], [class*="interstitial"]') && !document.querySelector('[class*="option"], [class*="Option"]')) { st.gameMode = "countdown"; }
  else if(document.querySelector('[class*="question"], [class*="Question"], [class*="option"], [class*="Option"], [data-testid="question"]')) {
    st.gameMode = "playing"; st.isReading = false; st.isPowerUp = false;
  }
  else { st.gameMode = "unknown"; }

  // 3. Question progress
  st.questionNumber = 0; st.totalQuestions = 0;
  var progressTexts = document.querySelectorAll('[class*="progress"], [class*="Progress"], [class*="question-number"], [class*="QuestionNumber"], [class*="counter"], [class*="Counter"], [data-testid*="progress"]');
  for(var pi = 0; pi < progressTexts.length; pi++) {
    var ptxt = (progressTexts[pi].innerText || "").trim();
    var pmatch = ptxt.match(/(\d+)\s*[\/|of|de]\s*(\d+)/i);
    if(pmatch) { st.questionNumber = parseInt(pmatch[1]); st.totalQuestions = parseInt(pmatch[2]); break; }
    var pmatch2 = ptxt.match(/(?:question|questao|pergunta)\s*(\d+)/i);
    if(pmatch2) { st.questionNumber = parseInt(pmatch2[1]); }
  }
  if(!st.totalQuestions) {
    var progressBar = document.querySelector('[class*="progress-bar"] [class*="fill"], [role="progressbar"], [class*="progress"] [style*="width"]');
    if(progressBar) { var w = progressBar.style.width; if(w && w.indexOf("%") >= 0) { var pct = parseFloat(w); if(pct > 0 && pct <= 100 && st.questionNumber > 0) st.totalQuestions = Math.round(st.questionNumber / (pct / 100)); } }
  }
  if(!st.totalQuestions) {
    var dots = document.querySelectorAll('[class*="progress"] [class*="dot"], [class*="progress"] [class*="circle"], [class*="progress"] span[class*="step"]');
    if(dots.length >= 3) { st.totalQuestions = dots.length; var activeDots = 0; dots.forEach(function(d){ if(d.classList.toString().match(/active|current|done|completed|filled/i)) activeDots++; }); if(activeDots > 0) st.questionNumber = activeDots; }
  }

  // 4. Timer
  st.timeLeft = null;
  var timerEls = document.querySelectorAll('[class*="timer"], [class*="Timer"], [class*="countdown"], [class*="time-left"], [data-testid*="timer"]');
  for(var ti = 0; ti < timerEls.length; ti++) {
    var tel = timerEls[ti]; if(tel.closest("#qs-panel")) continue;
    var ttxt = (tel.innerText || "").trim();
    var tmatch = ttxt.match(/(\d+)\s*:?\s*(\d*)/);
    if(tmatch) { st.timeLeft = tmatch[2] ? tmatch[1] + ":" + tmatch[2] : tmatch[1] + "s"; break; }
  }

  // 5. Score
  st.playerScore = null;
  var scoreEls = document.querySelectorAll('[class*="score"], [class*="Score"], [class*="points"], [class*="Points"], [data-testid*="score"]');
  for(var si = 0; si < scoreEls.length; si++) {
    var sel = scoreEls[si]; if(sel.closest("#qs-panel")) continue;
    var stxt = (sel.innerText || "").trim();
    var smatch = stxt.match(/([\d,]+)/);
    if(smatch && smatch[1].length <= 8) { st.playerScore = smatch[1]; break; }
  }

  // 6. Update UI
  if(monStatusEl) {
    var statusColor = st.isQuizizz ? "#22c55e" : "#fbbf24";
    var statusText = st.isQuizizz ? "Quizizz Ativo" : "Monitorando...";
    monStatusEl.innerHTML = '<span style="width:6px;height:6px;border-radius:50%;background:'+statusColor+';display:inline-block;animation:qs-pulse 1.5s infinite"></span> ' + statusText;
    monStatusEl.style.color = statusColor;
  }
  if(monModeEl) {
    var modeMap = { playing: "\uD83C\uDFAE Jogando", lobby: "\u23F3 Lobby", finished: "\uD83C\uDFC1 Finalizado", reading: "\uD83D\uDCD6 Texto/Leitura", powerup: "\u26A1 Power-Up", countdown: "\u23F1 Contagem", unknown: "\uD83D\uDC40 Detectando..." };
    monModeEl.textContent = modeMap[st.gameMode] || st.gameMode;
    monModeEl.style.color = st.gameMode === "playing" ? "#34d399" : st.gameMode === "finished" ? "#f87171" : st.gameMode === "reading" ? "#60a5fa" : "rgba(255,255,255,0.4)";
  }
  if(monProgressEl) {
    if(st.totalQuestions > 0) { monProgressEl.textContent = "\uD83D\uDCCB " + st.questionNumber + "/" + st.totalQuestions; monProgressEl.style.color = "#c4b5fd"; }
    else if(st.questionNumber > 0) { monProgressEl.textContent = "\uD83D\uDCCB Q" + st.questionNumber; monProgressEl.style.color = "#c4b5fd"; }
    else { monProgressEl.textContent = ""; }
  }
  if(monTimeEl) { if(st.timeLeft) { monTimeEl.style.display = "inline"; monTimeEl.textContent = "\u23F1 " + st.timeLeft; } else { monTimeEl.style.display = "none"; } }
  if(monScoreEl) { if(st.playerScore) { monScoreEl.style.display = "inline"; monScoreEl.textContent = "\uD83C\uDFC6 " + st.playerScore; } else { monScoreEl.style.display = "none"; } }

  if(prevMode !== st.gameMode && prevMode !== "unknown") {
    var modeNames = { playing: "Jogando", lobby: "Lobby", finished: "Quiz finalizado!", reading: "Leitura/Texto", powerup: "Power-Up", countdown: "Contagem" };
    log("Estado: " + (modeNames[st.gameMode] || st.gameMode), st.gameMode === "finished" ? "wrn" : "inf");
    if(st.gameMode === "finished") { if(S.autoMode) { toggleAutoMode(); log("Auto desligado (finalizado)", "wrn"); } }
  }
}
S.monitorInterval = setInterval(monitorSite, 1000);
setTimeout(monitorSite, 300);

// ══════════════════════════════════════════════════════════
// ═══ v14: PASSAGE TEXT PERSISTENCE ═══
// ══════════════════════════════════════════════════════════
function capturePassageText() {
  var passageSelectors = [
    '[class*="passage"]', '[class*="Passage"]', '[class*="reading-text"]', '[class*="ReadingText"]',
    '[class*="stimulus-text"]', '[class*="StimulusText"]', '[class*="stimulus"]', '[class*="Stimulus"]',
    '[class*="text-passage"]', '[class*="TextPassage"]', '[class*="reading-comprehension"]',
    '[class*="reading"] [class*="content"]', '[class*="Reading"] [class*="content"]',
    '[class*="passage-content"]', '[class*="PassageContent"]',
    '.ql-editor', '.typeset'
  ];
  var text = "";
  for(var i = 0; i < passageSelectors.length; i++) {
    var els = document.querySelectorAll(passageSelectors[i]);
    for(var j = 0; j < els.length; j++) {
      var el = els[j];
      if(el.closest("#qs-panel")) continue;
      var t = (el.innerText || "").trim();
      if(t.length > text.length && t.length > 20) text = t;
    }
  }
  // Also capture passage images
  var passageImgs = [];
  passageSelectors.forEach(function(sel) {
    document.querySelectorAll(sel + " img").forEach(function(img) {
      if(img.src && img.naturalWidth > 30 && passageImgs.indexOf(img.src) === -1) passageImgs.push(img.src);
    });
  });
  
  var hash = qHash(text);
  if(text.length > 20 && hash !== S.lastPassageHash) {
    S.passageText = text;
    S.passageImages = passageImgs;
    S.lastPassageHash = hash;
    log("Texto/Passagem salvo (" + text.length + " chars)", "suc");
    if(passageBar) { passageBar.style.display = "flex"; passageInfo.textContent = "Texto salvo: " + text.substring(0, 60) + "..."; }
  }
}

// ══════════════════════════════════════════════════════════
// ═══ FEEDBACK DETECTION v14 (COMPLETELY REWRITTEN) ═══
// ══════════════════════════════════════════════════════════
function detectFeedback() {
  // === LAYER 1: Direct class/attribute matches (most reliable) ===
  var allEls = document.querySelectorAll('*');
  for(var i = 0; i < allEls.length; i++) {
    var el = allEls[i];
    if(el.closest("#qs-panel") || !el.offsetParent) continue;
    var cls = (el.className || "").toString();
    var ds = el.dataset || {};
    
    // Exact class matches for correct
    if(cls.match(/\b(is-correct|isCorrect|correct-answer|correctAnswer|right-answer|selected-correct|selectedCorrect|answer-correct|answerCorrect)\b/i)) return "correct";
    // Exact class matches for wrong 
    if(cls.match(/\b(is-incorrect|isIncorrect|incorrect-answer|incorrectAnswer|wrong-answer|selected-incorrect|selectedIncorrect|answer-incorrect|answerIncorrect|is-wrong|isWrong|answer-wrong|answerWrong)\b/i)) return "wrong";
    
    // Data attributes
    if(ds.correct === "true" || ds.result === "correct" || ds.testid === "correct-option") return "correct";
    if(ds.correct === "false" || ds.result === "incorrect" || ds.testid === "incorrect-option" || ds.result === "wrong") return "wrong";
  }

  // === LAYER 2: Feedback overlay/modal with text ===
  var feedbackSels = '[class*="feedback"], [class*="Feedback"], [class*="result"], [class*="Result"], [class*="answer-review"], [class*="AnswerReview"], [class*="response-status"], [class*="ResponseStatus"], [class*="correctness"], [class*="explanation"], [class*="Explanation"], [class*="toast"], [class*="Toast"], [class*="notification"], [class*="Notification"], [class*="alert"], [class*="Alert"], [class*="banner"], [class*="Banner"]';
  var feedbackEls = document.querySelectorAll(feedbackSels);
  for(var fi = 0; fi < feedbackEls.length; fi++) {
    var fa = feedbackEls[fi];
    if(fa.closest("#qs-panel") || !fa.offsetParent) continue;
    if(getComputedStyle(fa).display === "none" || getComputedStyle(fa).visibility === "hidden" || getComputedStyle(fa).opacity === "0") continue;
    
    var faCls = (fa.className || "").toString().toLowerCase();
    var faText = (fa.innerText || "").toLowerCase().trim();
    
    // Class-based detection
    if(faCls.match(/correct|success|right|acerto|acertou/)) return "correct";
    if(faCls.match(/incorrect|wrong|error|fail|errado|errou|mistake/)) return "wrong";
    
    // Text-based detection - check for feedback words
    if(faText.match(/\b(correct|correto|certo|nice|great|awesome|well done|acertou|that'?s right|brilliant|amazing|good job|excelente|perfeito|parabens)\b/i)) return "correct";
    if(faText.match(/\b(incorrect|incorreto|errado|wrong|oops|sorry|too bad|errou|not quite|try again|tente novamente|nao foi dessa vez|resposta errada)\b/i)) return "wrong";
    
    // Background color of feedback element
    var faBg = getComputedStyle(fa).backgroundColor;
    if(faBg && faBg !== "rgba(0, 0, 0, 0)" && faBg !== "transparent") {
      var frgb = faBg.match(/rgb[a]?\((\d+),\s*(\d+),\s*(\d+)/);
      if(frgb) {
        var fr = parseInt(frgb[1]), fg = parseInt(frgb[2]), fb2 = parseInt(frgb[3]);
        if(fg > 130 && fg > fr * 1.3 && fg > fb2 * 1.2) return "correct";
        if(fr > 150 && fr > fg * 1.4 && fr > fb2 * 1.2) return "wrong";
      }
    }
  }

  // === LAYER 3: Option element color analysis (after answer submission) ===
  var optionEls = document.querySelectorAll('[class*="option"], [class*="Option"], [role="option"], [class*="choice"], [class*="Choice"], [class*="answer"], [class*="Answer"]');
  var hasGreen = false, hasRed = false, selectedIsGreen = false, selectedIsRed = false;
  for(var oi = 0; oi < optionEls.length; oi++) {
    var opt = optionEls[oi];
    if(opt.closest("#qs-panel") || !opt.offsetParent) continue;
    
    var isSelected = (opt.className || "").toString().match(/selected|active|chosen|picked|clicked/i) || opt.getAttribute("aria-selected") === "true" || opt.getAttribute("aria-pressed") === "true";
    
    var optBg = getComputedStyle(opt).backgroundColor;
    var optBorder = getComputedStyle(opt).borderColor || "";
    var optBoxShadow = getComputedStyle(opt).boxShadow || "";
    
    // Check all color properties
    var colorsToCheck = [optBg, optBorder, optBoxShadow];
    for(var ci = 0; ci < colorsToCheck.length; ci++) {
      var color = colorsToCheck[ci];
      if(!color) continue;
      var rgbs = color.match(/rgb[a]?\((\d+),\s*(\d+),\s*(\d+)/g) || [];
      for(var ri = 0; ri < rgbs.length; ri++) {
        var rgb = rgbs[ri].match(/rgb[a]?\((\d+),\s*(\d+),\s*(\d+)/);
        if(!rgb) continue;
        var r = parseInt(rgb[1]), g = parseInt(rgb[2]), b = parseInt(rgb[3]);
        
        // Detect green (correct)
        var isGreenColor = (g > 120 && g > r * 1.2 && g > b * 1.1) || (r < 100 && g > 140 && b < 120) || (g > 160 && r < 150 && b < 150);
        // Detect red (wrong)
        var isRedColor = (r > 150 && r > g * 1.3 && r > b * 1.2) || (r > 180 && g < 130 && b < 140) || (r > 200 && g < 100);
        
        if(isGreenColor) { hasGreen = true; if(isSelected) selectedIsGreen = true; }
        if(isRedColor) { hasRed = true; if(isSelected) selectedIsRed = true; }
      }
    }
  }
  
  // If selected option is green = correct, if red = wrong
  if(selectedIsGreen) return "correct";
  if(selectedIsRed) return "wrong";
  // If any option turned green but selected turned red = wrong (the green shows correct answer)
  if(hasRed && hasGreen) return "wrong";
  // If only green appeared (selected is green) = correct
  if(hasGreen && !hasRed) return "correct";
  // If only red appeared = wrong
  if(hasRed && !hasGreen) return "wrong";

  // === LAYER 4: SVG/Icon detection ===
  var iconContainers = document.querySelectorAll('[class*="feedback"], [class*="Feedback"], [class*="result"], [class*="Result"], [class*="icon"], [class*="Icon"]');
  for(var si2 = 0; si2 < iconContainers.length; si2++) {
    var sp = iconContainers[si2];
    if(sp.closest("#qs-panel") || !sp.offsetParent) continue;
    var svgs = sp.querySelectorAll("svg");
    for(var sv = 0; sv < svgs.length; sv++) {
      var paths = svgs[sv].querySelectorAll("path, polyline");
      var svgFill = getComputedStyle(svgs[sv]).color || getComputedStyle(svgs[sv]).fill || "";
      for(var p = 0; p < paths.length; p++) {
        var d = paths[p].getAttribute("d") || "";
        if(d.match(/[Mm].*[Ll].*[Ll]/) && d.split(/[LlMm]/).length <= 5) return "correct"; // checkmark
        if(d.match(/18.*6.*6.*18|6.*18.*18.*6|M.*6.*L.*18/)) return "wrong"; // X mark
      }
    }
    var iconText = (sp.innerText || "").trim();
    if(iconText.match(/^[\u2713\u2714\u2611\u2705]$/)) return "correct";
    if(iconText.match(/^[\u2717\u2718\u2716\u00D7\u274C]$/)) return "wrong";
  }

  // === LAYER 5: Score/streak delta ===
  var currentScore = null;
  var scoreElements = document.querySelectorAll('[class*="score"], [class*="Score"], [class*="points"], [class*="Points"]');
  for(var sci = 0; sci < scoreElements.length; sci++) {
    var sce = scoreElements[sci];
    if(sce.closest("#qs-panel")) continue;
    var scoreText = (sce.innerText || "").trim();
    var scoreMatch = scoreText.match(/([\d,]+)/);
    if(scoreMatch) { currentScore = parseInt(scoreMatch[1].replace(/,/g, "")); break; }
  }
  if(currentScore !== null && S._prevScore !== null && S.waitingFeedback) {
    if(currentScore > S._prevScore) { S._prevScore = currentScore; return "correct"; }
    if(currentScore === S._prevScore) { 
      // Score didn't increase after answering = probably wrong
      // But wait a bit to be sure (only after some checks)
      if(S._feedbackChecks > 8) { S._prevScore = currentScore; return "wrong"; }
    }
  }
  if(currentScore !== null) S._prevScore = currentScore;

  var currentStreak = null;
  var streakEls = document.querySelectorAll('[class*="streak"], [class*="Streak"]');
  for(var stri = 0; stri < streakEls.length; stri++) {
    var stel = streakEls[stri];
    if(stel.closest("#qs-panel") || !stel.offsetParent) continue;
    var strText = (stel.innerText || "").match(/(\d+)/);
    if(strText) { currentStreak = parseInt(strText[1]); break; }
  }
  if(currentStreak !== null && S._prevStreak !== null) {
    if(currentStreak > S._prevStreak) { S._prevStreak = currentStreak; return "correct"; }
    if(currentStreak === 0 && S._prevStreak > 0) { S._prevStreak = currentStreak; return "wrong"; }
    if(currentStreak < S._prevStreak) { S._prevStreak = currentStreak; return "wrong"; }
  }
  if(currentStreak !== null) S._prevStreak = currentStreak;

  // === LAYER 6: DOM change detection (v14 - new!) ===
  // If the question area changed significantly after answering, check what appeared
  if(S.waitingFeedback && S._feedbackChecks > 5) {
    var bodyText = (document.body.innerText || "").toLowerCase();
    // Search in the last portion of visible text
    var lastChunk = bodyText.slice(-800);
    if(lastChunk.match(/\b(correct!?|correto!?|certo!?|nice!?|great!?|awesome!?|well done!?|acertou!?|that'?s right!?)\b/)) return "correct";
    if(lastChunk.match(/\b(incorrect!?|incorreto!?|errado!?|wrong!?|oops!?|sorry!?|too bad!?|errou!?|not quite!?|try again!?)\b/)) return "wrong";
  }

  return null;
}

function startFeedbackWatch() {
  S.waitingFeedback = true;
  S._feedbackChecks = 0;
  S._answeredAt = Date.now();
  
  // Snapshot current score/streak
  var scoreEls2 = document.querySelectorAll('[class*="score"], [class*="Score"], [class*="points"], [class*="Points"]');
  for(var i2 = 0; i2 < scoreEls2.length; i2++) {
    if(scoreEls2[i2].closest("#qs-panel")) continue;
    var sm = (scoreEls2[i2].innerText || "").match(/([\d,]+)/);
    if(sm) { S._prevScore = parseInt(sm[1].replace(/,/g, "")); break; }
  }
  var streakEls2 = document.querySelectorAll('[class*="streak"], [class*="Streak"]');
  for(var j2 = 0; j2 < streakEls2.length; j2++) {
    if(streakEls2[j2].closest("#qs-panel")) continue;
    var stm = (streakEls2[j2].innerText || "").match(/(\d+)/);
    if(stm) { S._prevStreak = parseInt(stm[1]); break; }
  }
  
  var maxChecks = 40;
  var checkDelay = 250;
  function checkFb() {
    S._feedbackChecks++;
    if(!S.waitingFeedback || S._feedbackChecks >= maxChecks) {
      if(S._feedbackChecks >= maxChecks && S.waitingFeedback) {
        S.waitingFeedback = false;
        S.stats.wrong++; S.stats.streak = 0;
        showFeedback(false, "Sem feedback (provavel erro)");
        log("Timeout feedback - contado como erro", "wrn");
        updateStats();
        if(S.settings.autoAdvance) setTimeout(clickNextOrAdvance, 1000);
      }
      S.waitingFeedback = false;
      return;
    }
    var fb = detectFeedback();
    if(fb) {
      S.waitingFeedback = false;
      if(fb === "correct") {
        S.stats.correct++; S.stats.streak++;
        if(S.stats.streak > S.stats.bestStreak) S.stats.bestStreak = S.stats.streak;
        showFeedback(true, "Correto! Streak: " + S.stats.streak);
        log("\u2705 CORRETO! Streak: " + S.stats.streak, "suc");
      } else {
        S.stats.wrong++; S.stats.streak = 0;
        showFeedback(false, "Errado! Streak resetado");
        log("\u274C ERRADO! Streak resetado", "err");
      }
      updateStats();
      if(S.settings.autoAdvance) setTimeout(clickNextOrAdvance, 1500);
      return;
    }
    setTimeout(checkFb, checkDelay);
  }
  setTimeout(checkFb, 400);
}

// ══════════════════════════════════════════════════════════
// ═══ ADVANCE TO NEXT QUESTION ═══
// ══════════════════════════════════════════════════════════
function clickNextOrAdvance() {
  var nextSelectors = [
    'button[data-cy="next-button"]','button[data-testid="next"]','button[data-testid="next-button"]',
    'button[data-cy="next-question-btn"]','button[class*="Next"]','button[class*="next"]',
    'button[class*="continue"]','button[class*="Continue"]','button[class*="proceed"]',
    '.next-button','.continue-button','button[class*="NavigationButton"]',
    '[class*="navigation"] button','.gameplay-footer button:not([disabled])',
    'button[class*="skip"]','button[class*="Skip"]',
    // Wayground specific
    'button[class*="advance"]','button[class*="Advance"]',
    '[class*="next-question"]','[class*="NextQuestion"]'
  ];
  for(var i = 0; i < nextSelectors.length; i++) {
    var btns = document.querySelectorAll(nextSelectors[i]);
    for(var j = 0; j < btns.length; j++) {
      var btn = btns[j];
      if(btn && btn.offsetParent !== null && !btn.disabled && !btn.closest("#qs-panel")) {
        var text = (btn.innerText || "").toLowerCase();
        if(text.indexOf("next") >= 0 || text.indexOf("continue") >= 0 || text.indexOf("proximo") >= 0 || text.indexOf("proxima") >= 0 || text.indexOf("avancar") >= 0 || text.indexOf("skip") >= 0 || text.indexOf("pular") >= 0 || text === "" || text.indexOf("arrow") >= 0) {
          btn.click(); log("Avancou: " + (btn.innerText||"next").trim().substring(0,20), "inf"); return true;
        }
      }
    }
  }
  // Also try clicking any visible primary button
  var primaryBtns = document.querySelectorAll('button[class*="primary"]:not([disabled]), button[class*="Primary"]:not([disabled])');
  for(var pb = 0; pb < primaryBtns.length; pb++) {
    var pBtn = primaryBtns[pb];
    if(pBtn.offsetParent !== null && !pBtn.closest("#qs-panel")) {
      pBtn.click(); log("Avancou (primary btn)", "inf"); return true;
    }
  }
  try { document.dispatchEvent(new KeyboardEvent("keydown", { key: "ArrowRight", code: "ArrowRight", keyCode: 39, bubbles: true })); return true; } catch(e) {}
  try { document.dispatchEvent(new KeyboardEvent("keydown", { key: "Enter", code: "Enter", keyCode: 13, bubbles: true })); return true; } catch(e) {}
  return false;
}

// ══════════════════════════════════════════════════════════
// ═══ CONTENT EXTRACTION (v14 - All Types) ═══
// ══════════════════════════════════════════════════════════
function extractFullPageContent() {
  var data = { question: "", questionImages: [], options: [], optionImages: [], allImages: [], questionType: "unknown", rawHTML: "", elements: [], dropZones: [], inputElement: null, matchRight: null, screenshot: null, passageText: S.passageText, fillBlanks: [] };
  try {
    // ═══ QUESTION TEXT EXTRACTION ═══
    var qSelectors = [
      '[data-testid="question-text"]','[data-testid="question-container"] .question-text-color',
      '#questionText .question-text-color','.question-text-color','.question-text',
      '[class*="QuestionText"]','[class*="questionText"]','[class*="question-text"]',
      '.question-content','.typeset','.ql-editor','.katex-html',
      '[class*="passage"] .text-content','.question-container .text','.question .text-content',
      'main [class*="question"]','[class*="stimulus"]','[class*="Stimulus"]',
      '[class*="prompt"]','[class*="Prompt"]',
      // Wayground specific
      '[class*="question-header"]','[class*="QuestionHeader"]',
      '[class*="question-body"]','[class*="QuestionBody"]',
      '[class*="question-stem"]','[class*="QuestionStem"]'
    ];
    for(var i = 0; i < qSelectors.length; i++) {
      var qe = document.querySelector(qSelectors[i]);
      if(qe && qe.innerText.trim().length > 2) { data.question = qe.innerText.trim().replace(/\s+/g, " "); data.rawHTML = qe.innerHTML; break; }
    }
    if(!data.question) {
      var mainArea = document.querySelector('main, [class*="game"], [class*="Game"], [class*="quiz"], [class*="Quiz"], [class*="wayground"], [class*="Wayground"]');
      if(mainArea) { var headings = mainArea.querySelectorAll("h1, h2, h3, [class*='title'], [class*='Title']"); headings.forEach(function(h) { if(h.innerText.trim().length > 5 && !data.question) data.question = h.innerText.trim(); }); }
    }

    // ═══ QUESTION IMAGES ═══
    var qImgSelectors = [
      'img[data-testid="question-container-image"]','[data-testid="question-container"] img',
      '.question-media img','.question-container img','#questionMedia img','.media-container img',
      '[class*="QuestionMedia"] img','[class*="question"] img:not([class*="option"])',
      '.ql-editor img','[class*="stimulus"] img','[class*="Stimulus"] img'
    ];
    qImgSelectors.forEach(function(sel) { document.querySelectorAll(sel).forEach(function(img) { if(img.src && img.naturalWidth > 20 && data.questionImages.indexOf(img.src) === -1) data.questionImages.push(img.src); }); });
    document.querySelectorAll("img").forEach(function(img) {
      if(img.src && img.naturalWidth > 30 && img.naturalHeight > 30 && img.offsetParent !== null) {
        var src = img.src;
        if(src.indexOf("avatar") === -1 && src.indexOf("logo") === -1 && src.indexOf("icon") === -1 && src.indexOf("emoji") === -1 && src.indexOf("branding") === -1 && src.indexOf("badge") === -1 && src.indexOf("favicon") === -1 && src.indexOf("profile") === -1 && data.allImages.indexOf(src) === -1) data.allImages.push(src);
      }
    });
    
    // ═══ OPTION DETECTION (v14 - ALL TYPES) ═══
    var optData = detectOptions();
    data.options = optData.options; data.optionImages = optData.images; data.questionType = optData.type;
    data.elements = optData.elements; data.dropZones = optData.dropZones;
    data.inputElement = optData.inputElement; data.matchRight = optData.matchRight || null;
    data.fillBlanks = optData.fillBlanks || [];
  } catch(e) { console.error("Extract error:", e); }
  return data;
}

// ══════════════════════════════════════════════════════════
// ═══ OPTION DETECTION v17 (ALL QUESTION TYPES - BLOCK-FIRST) ═══
// ══════════════════════════════════════════════════════════
function detectOptions() {
  var result = { type: "unknown", options: [], images: [], elements: [], dropZones: [], inputElement: null, matchRight: null, fillBlanks: [] };

  // ── Helpers ──
  function optText(el) {
    var ann = el.querySelector('annotation[encoding="application/x-tex"]');
    if(ann) return ann.textContent.trim();
    var ot = el.querySelector('#optionText, .option-text, [class*="OptionText"], [class*="optionText"], [class*="option-text"]');
    if(ot) return ot.innerText.trim();
    var katex = el.querySelector(".katex");
    if(katex) { var a2 = katex.querySelector('annotation[encoding="application/x-tex"]'); return a2 ? a2.textContent.trim() : katex.innerText.trim(); }
    var clone = el.cloneNode(true);
    clone.querySelectorAll("button, [class*='badge'], [class*='indicator'], [class*='index'], svg, [class*='number']").forEach(function(b){ b.remove(); });
    return clone.innerText.trim().replace(/^[A-Da-d][.)\s]+/, "").replace(/^\d+[.)\s]+/, "");
  }
  function optImg(el) { var img = el.querySelector("img"); return img && img.src && img.naturalWidth > 20 ? img.src : null; }
  function vis(el) { return el && el.offsetParent !== null && !el.closest("#qs-panel"); }
  function qAll(sels) {
    var arr = [];
    if(typeof sels === "string") sels = sels.split(",").map(function(s){ return s.trim(); });
    for(var i = 0; i < sels.length; i++) {
      try { var found = document.querySelectorAll(sels[i]); for(var j = 0; j < found.length; j++) { if(vis(found[j]) && arr.indexOf(found[j]) === -1) arr.push(found[j]); } } catch(e) {}
    }
    return arr;
  }
  function qFirst(sels) { var all = qAll(sels); return all.length > 0 ? all[0] : null; }

  // ── Better text extraction for fraction blocks ──
  function extractBlockText(el) {
    var fractions = el.querySelectorAll('.katex, math, [class*="frac"], [class*="Frac"], [class*="fraction"], [class*="Fraction"]');
    if(fractions.length > 0) {
      var fracTexts = [];
      fractions.forEach(function(frac) {
        var ann = frac.querySelector('annotation[encoding="application/x-tex"]');
        if(ann) { fracTexts.push(ann.textContent.trim()); return; }
        var num = frac.querySelector('[class*="numer"], [class*="Numer"]');
        var den = frac.querySelector('[class*="denom"], [class*="Denom"]');
        if(num && den && num !== den) { fracTexts.push(num.innerText.trim() + "/" + den.innerText.trim()); }
        else { fracTexts.push(frac.innerText.trim().replace(/\s+/g, "/")); }
      });
      return fracTexts.join(" ");
    }
    // Stacked numbers (Wayground fractions: numerator over denominator)
    var leafNodes = [];
    el.querySelectorAll('span, div, p').forEach(function(s) {
      if(s.children.length === 0 || (s.children.length === 1 && s.children[0].tagName === "BR")) {
        var t = s.innerText.trim();
        if(t && /^[0-9]+$/.test(t)) {
          var r = s.getBoundingClientRect();
          leafNodes.push({ text: t, x: r.left + r.width/2, y: r.top + r.height/2 });
        }
      }
    });
    if(leafNodes.length >= 2) {
      leafNodes.sort(function(a,b){ return a.x - b.x || a.y - b.y; });
      var groups = []; var curGroup = [leafNodes[0]];
      for(var ni = 1; ni < leafNodes.length; ni++) {
        if(Math.abs(leafNodes[ni].x - curGroup[0].x) < 30) curGroup.push(leafNodes[ni]);
        else { groups.push(curGroup); curGroup = [leafNodes[ni]]; }
      }
      groups.push(curGroup);
      var fracs = [];
      groups.forEach(function(g) {
        g.sort(function(a,b){ return a.y - b.y; });
        if(g.length === 2) fracs.push(g[0].text + "/" + g[1].text);
        else if(g.length === 1) fracs.push(g[0].text);
        else { for(var gi = 0; gi < g.length; gi += 2) { if(gi+1 < g.length) fracs.push(g[gi].text + "/" + g[gi+1].text); else fracs.push(g[gi].text); } }
      });
      if(fracs.length > 0) return fracs.join(" ");
    }
    return (el.innerText || "").trim().replace(/\s+/g, " ");
  }

  // ══════════════════════════════════════════════════════
  // ═══ 1. EQUATION EDITOR ═══
  // ══════════════════════════════════════════════════════
  var eq = qFirst([
    'div[data-cy="equation-editor"]', '[class*="equation-editor"]', '[class*="EquationEditor"]',
    '[class*="MathResponse"]', '[class*="math-response"]', '[class*="math-input"]',
    '[class*="MathInput"]', '[class*="math-keyboard"]', '[class*="MathKeyboard"]'
  ]);
  if(eq) { result.type = "equation"; result.inputElement = eq; return result; }

  // ══════════════════════════════════════════════════════
  // ═══ 2. TYPED / OPEN-ENDED / SHORT ANSWER ═══
  // ══════════════════════════════════════════════════════
  var openSels = [
    'textarea[data-cy="open-ended-textarea"]', 'input[data-cy="answer-input"]',
    'input.answer-input', '[data-testid="text-input"]', '[data-testid="answer-input"]',
    'input[type="text"][class*="answer"]', 'textarea[class*="answer"]',
    '[class*="TypedAnswer"] input', '[class*="typed-answer"] input', '[class*="typedAnswer"] input',
    '.typed-answer-input input', '.typed-answer-input textarea',
    '[class*="FillInTheBlank"] input', '[class*="fill-blank"] input', '[class*="FillBlank"] input',
    '[class*="openEnded"] textarea', '[class*="OpenEnded"] textarea', '[class*="open-ended"] textarea',
    '[class*="short-answer"] input', '[class*="ShortAnswer"] input',
    '[class*="free-response"] textarea', '[class*="FreeResponse"] textarea',
    '[class*="text-response"] input', '[class*="TextResponse"] input',
    '[class*="answer-field"] input', '[class*="AnswerField"] input',
    '[class*="response-input"] input', '[class*="ResponseInput"] input',
    'input[placeholder*="answer" i]', 'input[placeholder*="resposta" i]',
    'input[placeholder*="digite" i]', 'input[placeholder*="type" i]',
    'textarea[placeholder*="answer" i]', 'textarea[placeholder*="resposta" i]',
    '[contenteditable="true"][class*="answer"]', '[contenteditable="true"][class*="response"]'
  ];
  var oe = qFirst(openSels);
  if(oe) { result.type = "open"; result.inputElement = oe; return result; }

  // ══════════════════════════════════════════════════════
  // ═══ 3. FILL-IN-THE-BLANK WITH SELECT ═══
  // ══════════════════════════════════════════════════════
  var fillSelects = qAll([
    '[class*="fill"] select', '[class*="Fill"] select', '[class*="blank"] select', '[class*="Blank"] select',
    '[class*="cloze"] select', '[class*="Cloze"] select', '[class*="gap"] select', '[class*="Gap"] select',
    'select[class*="answer"]', 'select[class*="response"]',
    '[class*="sentence"] select', '[class*="Sentence"] select'
  ]);
  if(fillSelects.length > 0) {
    result.type = "fill_select";
    fillSelects.forEach(function(sel) {
      result.fillBlanks.push(sel); result.elements.push(sel);
      sel.querySelectorAll("option").forEach(function(o) { if(o.value && o.innerText.trim()) result.options.push(o.innerText.trim()); });
    });
    return result;
  }

  var clickBlanks = qAll([
    '[class*="blank-option"]', '[class*="BlankOption"]', '[class*="cloze-blank"]', '[class*="ClozeBlank"]',
    '[class*="fill-blank"]', '[class*="FillBlank"]', 'button[class*="blank"]',
    '[class*="gap-option"]', '[class*="GapOption"]', '[class*="blank-space"][role="button"]',
    '[class*="blank-button"]', '[class*="BlankButton"]',
    '[class*="response-blank"]', '[class*="ResponseBlank"]'
  ]);
  if(clickBlanks.length > 0) {
    result.type = "fill_select";
    clickBlanks.forEach(function(el) { result.fillBlanks.push(el); result.elements.push(el); });
    var popupOpts = qAll([
      '[class*="dropdown"] [class*="option"]', '[class*="Dropdown"] [class*="option"]',
      '[class*="popup"] [class*="option"]', '[class*="Popup"] [class*="option"]',
      '[class*="menu"] [class*="item"]', '[class*="Menu"] [class*="item"]',
      '[role="listbox"] [role="option"]', '[class*="popover"] [class*="item"]',
      '[class*="Popover"] [class*="item"]', '[class*="select-menu"] [class*="option"]'
    ]);
    popupOpts.forEach(function(o) { result.options.push(o.innerText.trim()); });
    if(result.options.length > 0) return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 4. LABELING ═══
  // ══════════════════════════════════════════════════════
  var labelBlanks = qAll([
    '[class*="label-blank"]', '[class*="LabelBlank"]', '[class*="labeling"] input',
    '[class*="Labeling"] input', '[class*="label-input"]', '[class*="LabelInput"]',
    '[class*="diagram"] input', '[class*="Diagram"] input'
  ]);
  if(labelBlanks.length > 0) {
    result.type = "labeling"; result.inputElement = labelBlanks[0];
    labelBlanks.forEach(function(el) { result.elements.push(el); });
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 5. HOTSPOT ═══
  // ══════════════════════════════════════════════════════
  var hotspot = qFirst([
    '[class*="hotspot"]', '[class*="Hotspot"]', '[data-testid*="hotspot"]',
    '[class*="image-click"]', '[class*="ImageClick"]', '[class*="click-region"]'
  ]);
  if(hotspot) { result.type = "hotspot"; result.inputElement = hotspot; return result; }

  // ══════════════════════════════════════════════════════
  // ═══ 6. TABLE-BASED QUESTIONS ═══
  // ══════════════════════════════════════════════════════
  var tableEls = qAll([
    'table[class*="question"]', 'table[class*="answer"]', 'table[class*="grid"]',
    '[class*="grid-question"]', '[class*="GridQuestion"]', '[class*="matrix"]', '[class*="Matrix"]',
    '[class*="table-question"]', '[class*="TableQuestion"]',
    '[role="grid"]', '[class*="data-table"]', '[class*="DataTable"]'
  ]);
  if(tableEls.length > 0) {
    var tbl = tableEls[0];
    var cells = tbl.querySelectorAll('td, th');
    var clickableCells = [];
    cells.forEach(function(cell) {
      if(vis(cell)) {
        var btn = cell.querySelector('button, input, [role="button"], [role="checkbox"], [role="radio"]');
        if(btn) clickableCells.push(btn);
        else if(cell.getAttribute("role") === "button" || cell.onclick || cell.style.cursor === "pointer") clickableCells.push(cell);
      }
    });
    if(clickableCells.length > 0) {
      result.type = "table_select";
      var headers = []; tbl.querySelectorAll('th, thead td').forEach(function(h) { if(h.innerText.trim()) headers.push(h.innerText.trim()); });
      var rows = tbl.querySelectorAll('tbody tr, tr');
      rows.forEach(function(row) {
        var rowCells = row.querySelectorAll('td, th');
        var rowData = [];
        rowCells.forEach(function(c) { rowData.push(c.innerText.trim()); });
        if(rowData.join("").length > 0) result.options.push(rowData.join(" | "));
      });
      result.elements = clickableCells;
      if(headers.length > 0) result.matchRight = headers;
      return result;
    }
  }

  // ══════════════════════════════════════════════════════
  // ═══ 7. CATEGORIZE (semantic selectors) ═══
  // ══════════════════════════════════════════════════════
  var catZones = qAll([
    '[class*="categorize"] [class*="zone"]', '[class*="Categorize"] [class*="zone"]',
    '[class*="category-zone"]', '[class*="CategoryZone"]',
    '[class*="category-container"]', '[class*="CategoryContainer"]',
    '[class*="bucket"]', '[class*="Bucket"]',
    '[class*="classification"] [class*="zone"]', '[class*="Classification"] [class*="zone"]',
    '[class*="category-drop"]', '[class*="CategoryDrop"]',
    '[class*="sort-zone"]', '[class*="SortZone"]',
    '[data-testid*="category"]', '[data-testid*="bucket"]'
  ]);
  var catItems = qAll([
    '[class*="categorize"] [class*="item"]', '[class*="Categorize"] [class*="draggable"]',
    '[class*="category-item"]', '[class*="CategoryItem"]',
    '[class*="classification"] [class*="item"]', '[class*="Classification"] [class*="item"]',
    '[class*="categorize"] [class*="draggable"]', '[class*="Categorize"] [class*="drag"]',
    '[class*="sort-item"]', '[class*="SortItem"]',
    '[data-testid*="categorize-item"]', '[data-testid*="drag-item"]'
  ]);
  if(catZones.length > 0 && catItems.length > 0) {
    result.type = "categorize";
    catZones.forEach(function(el){ result.dropZones.push(el); });
    catItems.forEach(function(el){ result.options.push(el.innerText.trim()); result.elements.push(el); });
    result.matchRight = [];
    catZones.forEach(function(z) {
      var title = z.querySelector('[class*="title"], [class*="header"], [class*="name"], [class*="label"], h3, h4, h5');
      result.matchRight.push(title ? title.innerText.trim() : z.innerText.trim().split("\n")[0]);
    });
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 8. REORDER / SORTING ═══
  // ══════════════════════════════════════════════════════
  var sortItems = qAll([
    '[class*="sortable"] li', '[class*="Sortable"] li',
    '[class*="reorder"] li', '[class*="Reorder"] li',
    '[class*="ordering"] li', '[class*="Ordering"] li',
    '[class*="sort-item"]', '[class*="SortItem"]',
    '[class*="reorder-item"]', '[class*="ReorderItem"]',
    '[class*="sequencing"] [class*="item"]', '[class*="Sequencing"] [class*="item"]',
    '[class*="order-item"]', '[class*="OrderItem"]',
    '[data-testid*="reorder"]', '[data-testid*="sort-item"]',
    '[class*="sortable-list"] > *', '[class*="SortableList"] > *'
  ]);
  if(sortItems.length > 1) {
    result.type = "reorder";
    sortItems.forEach(function(el) { result.options.push(el.innerText.trim()); result.elements.push(el); });
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 9. DRAG AND DROP (semantic selectors first) ═══
  // ══════════════════════════════════════════════════════
  var dzSelectors = [
    "button.droppable-blank", ".drop-zone", '[class*="DropZone"]', '[class*="drop-zone"]',
    '[data-testid*="drop"]', '[class*="blank-space"]', '[class*="droppable"]', '[class*="Droppable"]',
    '[class*="drop-target"]', '[class*="DropTarget"]', '[class*="target-zone"]', '[class*="TargetZone"]',
    '[class*="answer-blank"]', '[class*="AnswerBlank"]',
    '[class*="answer-slot"]', '[class*="AnswerSlot"]',
    '[class*="drop-area"]', '[class*="DropArea"]', '[class*="response-zone"]', '[class*="ResponseZone"]',
    '[class*="snap-zone"]', '[class*="SnapZone"]', '[class*="target-blank"]', '[class*="TargetBlank"]',
    '[data-testid*="drop-zone"]', '[data-testid*="blank"]'
  ];
  var dgSelectors = [
    ".drag-option", ".draggable-option", '[class*="DragOption"]', '[class*="draggable"]',
    '[data-testid*="drag"]', '[class*="sortable-item"]', '[class*="drag-item"]', '[class*="DragItem"]',
    '[class*="Draggable"]', '[class*="drag-block"]', '[class*="DragBlock"]',
    '[class*="movable"]', '[class*="Movable"]',
    '[class*="chip"]', '[class*="Chip"]', '[class*="token"]', '[class*="Token"]',
    '[class*="answer-token"]', '[class*="AnswerToken"]', '[class*="block-option"]', '[class*="BlockOption"]',
    '[class*="tile"]', '[class*="Tile"]', '[class*="snap-item"]', '[class*="SnapItem"]',
    '[data-testid*="drag-item"]', '[draggable="true"]'
  ];
  var dropZones = qAll(dzSelectors);
  var dragItems = qAll(dgSelectors);

  // If semantic drag selectors found real items, use them
  if(dragItems.length >= 2 && dropZones.length >= 1) {
    var zoneLabels = dropZones.map(function(z){ return (z.innerText || z.getAttribute("aria-label") || "").trim(); }).filter(Boolean);
    if(dropZones.length > 1) {
      result.type = "categorize";
      result.matchRight = zoneLabels.length > 0 ? zoneLabels : dropZones.map(function(z){ return extractBlockText(z); });
    } else { result.type = "drag"; }
    result.dropZones = dropZones;
    dragItems.forEach(function(el) { result.options.push(extractBlockText(el)); result.elements.push(el); var im = optImg(el); if(im) result.images.push(im); });
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 9b. WAYGROUND GRID DETECTION (visual heuristic) ═══
  // This MUST run BEFORE MCQ to avoid fragments showing as A,B,C,D...
  // ══════════════════════════════════════════════════════
  var gameArea = document.querySelector('[class*="game"], [class*="Game"], [class*="quiz"], [class*="Quiz"], [class*="gameplay"], [class*="Gameplay"], main, [class*="question-area"], [class*="QuestionArea"]');
  if(gameArea) {
    var allBlocks = [];
    gameArea.querySelectorAll('div, button, [role="button"]').forEach(function(el) {
      if(!vis(el) || el.closest("#qs-panel")) return;
      var rect = el.getBoundingClientRect();
      if(rect.width < 50 || rect.height < 35) return;
      
      var style = getComputedStyle(el);
      var bgColor = style.backgroundColor;
      var hasBg = (bgColor && bgColor !== "rgba(0, 0, 0, 0)" && bgColor !== "transparent" && bgColor !== "rgb(0, 0, 0)" && bgColor !== "rgb(255, 255, 255)");
      var hasBgImage = (style.backgroundImage && style.backgroundImage !== "none");
      if(!hasBg && !hasBgImage) return;
      
      var txt = (el.innerText || "").trim().replace(/\s+/g, " ");
      if(txt.length < 1 || txt.length > 100) return;
      
      var hasDragAttr = el.getAttribute("draggable") === "true" || el.getAttribute("data-drag") || el.getAttribute("data-draggable");
      var hasGrabCursor = style.cursor === "grab" || style.cursor === "move" || style.cursor === "pointer";
      allBlocks.push({ el: el, text: txt, rect: rect, bg: bgColor, hasDrag: hasDragAttr || hasGrabCursor });
    });

    // Remove blocks contained within other blocks (keep outermost)
    var filteredBlocks = allBlocks.filter(function(block, idx) {
      for(var oi = 0; oi < allBlocks.length; oi++) {
        if(oi === idx) continue;
        if(allBlocks[oi].el.contains(block.el) && allBlocks[oi].el !== block.el) return false;
      }
      return true;
    });

    // Need at least 4 blocks for a grid layout
    if(filteredBlocks.length >= 4) {
      // Check if these look like a grid (blocks have similar sizes)
      var avgW = filteredBlocks.reduce(function(s,b){ return s + b.rect.width; },0) / filteredBlocks.length;
      var avgH = filteredBlocks.reduce(function(s,b){ return s + b.rect.height; },0) / filteredBlocks.length;
      var sameSize = filteredBlocks.filter(function(b){ return Math.abs(b.rect.width - avgW) < avgW*0.5 && Math.abs(b.rect.height - avgH) < avgH*0.5; });
      
      if(sameSize.length >= 4) {
        // Determine layout: left (drag) vs right (drop) by splitting at midpoint
        var allCenterX = sameSize.map(function(b){ return b.rect.left + b.rect.width/2; });
        allCenterX.sort(function(a,b){ return a-b; });
        var medianX = allCenterX[Math.floor(allCenterX.length/2)];
        
        // Check for two-column layout
        var leftBlocks = sameSize.filter(function(b){ return (b.rect.left + b.rect.width/2) < medianX - 10; });
        var rightBlocks = sameSize.filter(function(b){ return (b.rect.left + b.rect.width/2) > medianX + 10; });
        
        if(leftBlocks.length >= 2 && rightBlocks.length >= 2) {
          leftBlocks.sort(function(a,b){ return a.rect.top - b.rect.top; });
          rightBlocks.sort(function(a,b){ return a.rect.top - b.rect.top; });
          
          // Determine which side is drag (fractions/numbers) and which is drop (symbols)
          var rightHasSymbols = rightBlocks.some(function(b){ return /^[<>≤≥=]+$/.test(b.text.trim()); });
          var leftHasSymbols = leftBlocks.some(function(b){ return /^[<>≤≥=]+$/.test(b.text.trim()); });
          
          var srcBlocks, tgtBlocks;
          if(rightHasSymbols && !leftHasSymbols) { srcBlocks = leftBlocks; tgtBlocks = rightBlocks; }
          else if(leftHasSymbols && !rightHasSymbols) { srcBlocks = rightBlocks; tgtBlocks = leftBlocks; }
          else {
            // Default: left = drag, right = drop
            var leftHasDrag = leftBlocks.some(function(b){ return b.hasDrag; });
            var rightHasDrag = rightBlocks.some(function(b){ return b.hasDrag; });
            if(leftHasDrag && !rightHasDrag) { srcBlocks = leftBlocks; tgtBlocks = rightBlocks; }
            else if(rightHasDrag && !leftHasDrag) { srcBlocks = rightBlocks; tgtBlocks = leftBlocks; }
            else { srcBlocks = leftBlocks; tgtBlocks = rightBlocks; }
          }
          
          result.type = tgtBlocks.length > 1 ? "categorize" : "drag";
          srcBlocks.forEach(function(b){ result.options.push(extractBlockText(b.el)); result.elements.push(b.el); });
          tgtBlocks.forEach(function(b){ result.dropZones.push(b.el); });
          result.matchRight = tgtBlocks.map(function(b){ return extractBlockText(b.el); });
          return result;
        }
        
        // ═══ TOP/BOTTOM ROW DETECTION (Quizizz Match) ═══
        // If left/right split failed, try top/bottom split
        if(leftBlocks.length < 2 || rightBlocks.length < 2) {
          var allCenterY = sameSize.map(function(b){ return b.rect.top + b.rect.height/2; });
          allCenterY.sort(function(a,b){ return a-b; });
          // Find gap between rows
          var maxGap = 0, gapY = 0;
          for(var gi = 1; gi < allCenterY.length; gi++) {
            var gap = allCenterY[gi] - allCenterY[gi-1];
            if(gap > maxGap) { maxGap = gap; gapY = (allCenterY[gi] + allCenterY[gi-1]) / 2; }
          }
          if(maxGap > 20 && gapY > 0) {
            var topRow = sameSize.filter(function(b){ return (b.rect.top + b.rect.height/2) < gapY; });
            var bottomRow = sameSize.filter(function(b){ return (b.rect.top + b.rect.height/2) > gapY; });
            if(topRow.length >= 2 && bottomRow.length >= 2) {
              // Determine which row is drag (colored/vibrant) and which is drop (darker/muted)
              var topHasDrag = topRow.some(function(b){ return b.hasDrag; });
              var bottomHasDrag = bottomRow.some(function(b){ return b.hasDrag; });
              var topAvgBrightness = 0, bottomAvgBrightness = 0;
              topRow.forEach(function(b) {
                var rgb = b.bg.match(/rgb[a]?\((\d+),\s*(\d+),\s*(\d+)/);
                if(rgb) topAvgBrightness += (parseInt(rgb[1]) + parseInt(rgb[2]) + parseInt(rgb[3])) / 3;
              });
              bottomRow.forEach(function(b) {
                var rgb = b.bg.match(/rgb[a]?\((\d+),\s*(\d+),\s*(\d+)/);
                if(rgb) bottomAvgBrightness += (parseInt(rgb[1]) + parseInt(rgb[2]) + parseInt(rgb[3])) / 3;
              });
              topAvgBrightness /= topRow.length; bottomAvgBrightness /= bottomRow.length;
              var srcRow, tgtRow;
              if(topHasDrag && !bottomHasDrag) { srcRow = topRow; tgtRow = bottomRow; }
              else if(bottomHasDrag && !topHasDrag) { srcRow = bottomRow; tgtRow = topRow; }
              else if(topAvgBrightness > bottomAvgBrightness + 10) { srcRow = topRow; tgtRow = bottomRow; }
              else if(bottomAvgBrightness > topAvgBrightness + 10) { srcRow = bottomRow; tgtRow = topRow; }
              else { srcRow = topRow; tgtRow = bottomRow; }
              srcRow.sort(function(a,b){ return a.rect.left - b.rect.left; });
              tgtRow.sort(function(a,b){ return a.rect.left - b.rect.left; });
              result.type = "match";
              srcRow.forEach(function(b){ result.options.push(extractBlockText(b.el)); result.elements.push(b.el); });
              tgtRow.forEach(function(b){ result.dropZones.push(b.el); });
              result.matchRight = tgtRow.map(function(b){ return extractBlockText(b.el); });
              return result;
            }
          }
        }

        // Single-column layout (all blocks are drag items, find drop zones separately)
        if(leftBlocks.length < 2 || rightBlocks.length < 2) {
          // Check for draggable blocks + dashed-border drop zones
          var dragBlocks = sameSize.filter(function(b){ return b.hasDrag; });
          if(dragBlocks.length >= 2) {
            var dzSeen = new Set();
            var foundDropZones = [];
            document.querySelectorAll('div, span, section, [class*="answer"], [class*="blank"]').forEach(function(el) {
              if(!vis(el) || dzSeen.has(el) || el.closest("#qs-panel")) return;
              var style = getComputedStyle(el);
              var isDashed = style.borderStyle && style.borderStyle.indexOf("dashed") >= 0;
              var isDroppable = el.getAttribute("droppable") === "true" || el.getAttribute("data-drop");
              if(isDashed || isDroppable) {
                var rect = el.getBoundingClientRect();
                if(rect.width > 30 && rect.height > 20) { dzSeen.add(el); foundDropZones.push(el); }
              }
            });
            result.type = foundDropZones.length > 1 ? "categorize" : "drag";
            dragBlocks.forEach(function(b){ result.options.push(extractBlockText(b.el)); result.elements.push(b.el); });
            result.dropZones = foundDropZones;
            if(foundDropZones.length > 0) result.matchRight = foundDropZones.map(function(z){ return (z.innerText||"").trim() || "[zona]"; });
            return result;
          }
        }
      }
    }
  }

  // Fallback drag: detect blocks by visual heuristics (draggable attribute)
  if(dragItems.length === 0) {
    var candidateBlocks = document.querySelectorAll('button, [role="button"], [tabindex="0"]');
    var blockCandidates = [];
    candidateBlocks.forEach(function(el) {
      if(!vis(el)) return;
      var txt = (el.innerText || "").trim();
      if(txt.length >= 1 && txt.length <= 40) {
        var style = getComputedStyle(el);
        var hasDragAttr = el.getAttribute("draggable") === "true" || el.getAttribute("data-drag") || el.getAttribute("data-draggable");
        var hasDragHandle = el.querySelector('svg') && el.innerHTML.match(/circle|dot|grip|drag|handle/i);
        var hasGrabCursor = style.cursor === "grab" || style.cursor === "move";
        if(hasDragAttr || hasDragHandle || hasGrabCursor) blockCandidates.push(el);
      }
    });
    if(blockCandidates.length >= 2) {
      dragItems = blockCandidates;
      // Find drop zones by dashed borders
      var dzSeen2 = new Set();
      document.querySelectorAll('div, span, section, [class*="answer"], [class*="blank"]').forEach(function(el) {
        if(!vis(el) || dzSeen2.has(el)) return;
        var style = getComputedStyle(el);
        var isDashed = style.borderStyle && style.borderStyle.indexOf("dashed") >= 0;
        var isDroppable = el.getAttribute("droppable") === "true" || el.getAttribute("data-drop");
        if(isDashed || isDroppable) {
          var rect = el.getBoundingClientRect();
          if(rect.width > 30 && rect.height > 20) { dzSeen2.add(el); dropZones.push(el); }
        }
      });
      var zoneLabels2 = dropZones.map(function(z){ return (z.innerText||"").trim(); }).filter(Boolean);
      result.type = dropZones.length > 1 ? "categorize" : "drag";
      result.dropZones = dropZones;
      if(dropZones.length > 0) result.matchRight = zoneLabels2.length > 0 ? zoneLabels2 : dropZones.map(function(z){ return extractBlockText(z); });
      dragItems.forEach(function(el) { result.options.push(extractBlockText(el)); result.elements.push(el); });
      return result;
    }
  }

  // ══════════════════════════════════════════════════════
  // ═══ 10. DROPDOWN ═══
  // ══════════════════════════════════════════════════════
  var dd = qFirst([
    'button.options-dropdown', '[class*="Dropdown"][class*="answer"]', '[class*="dropdown"][class*="answer"]',
    'select[class*="answer"]', 'select[class*="response"]', '[class*="drop-down"][class*="answer"]',
    '[class*="select-answer"]', '[class*="SelectAnswer"]',
    '[data-testid*="dropdown"]', '[role="listbox"]:not([class*="fill"])'
  ]);
  if(dd) {
    result.type = "dropdown"; result.inputElement = dd;
    dd.querySelectorAll("option, li, [class*='item'], [class*='option'], [role='option']").forEach(function(o) {
      var t = o.innerText.trim();
      if(t && t.length > 0 && t !== "--" && t.toLowerCase() !== "select" && t.toLowerCase() !== "selecione") result.options.push(t);
    });
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 11. MATCH / CONNECT ═══
  // ══════════════════════════════════════════════════════
  var matchPairs = [
    { left: '[class*="match"] [class*="left"], [class*="Match"] [class*="left"]', right: '[class*="match"] [class*="right"], [class*="Match"] [class*="right"]' },
    { left: '[class*="match"] [class*="source"], [class*="Match"] [class*="source"]', right: '[class*="match"] [class*="target"], [class*="Match"] [class*="target"]' },
    { left: '[class*="pair"] [class*="left"], [class*="Pair"] [class*="left"]', right: '[class*="pair"] [class*="right"], [class*="Pair"] [class*="right"]' },
    { left: '[class*="connect"] [class*="source"], [class*="Connect"] [class*="source"]', right: '[class*="connect"] [class*="target"], [class*="Connect"] [class*="target"]' },
    { left: '[class*="match-left"], [class*="MatchLeft"]', right: '[class*="match-right"], [class*="MatchRight"]' },
    { left: '[data-testid*="match-left"]', right: '[data-testid*="match-right"]' }
  ];
  for(var mi = 0; mi < matchPairs.length; mi++) {
    var mLeft = qAll(matchPairs[mi].left.split(",").map(function(s){ return s.trim(); }));
    var mRight = qAll(matchPairs[mi].right.split(",").map(function(s){ return s.trim(); }));
    if(mLeft.length > 0 && mRight.length > 0) {
      result.type = "match"; result.matchRight = [];
      mLeft.forEach(function(el){ result.options.push(el.innerText.trim()); });
      mRight.forEach(function(el){ result.matchRight.push(el.innerText.trim()); });
      result.elements = mLeft.concat(mRight);
      return result;
    }
  }

  // ══════════════════════════════════════════════════════
  // ═══ 12. TRUE/FALSE MULTI-STATEMENT ═══
  // ══════════════════════════════════════════════════════
  var tfStmts = qAll([
    '[class*="true-false-statement"]', '[class*="TrueFalseStatement"]',
    '[class*="tf-row"]', '[class*="TfRow"]',
    '[class*="statement-row"]', '[class*="StatementRow"]',
    '[class*="tf-statement"]', '[class*="TFStatement"]',
    '[data-testid*="tf-statement"]', '[data-testid*="true-false-row"]'
  ]);
  if(tfStmts.length > 1) {
    result.type = "true_false_multi";
    tfStmts.forEach(function(stmt) {
      var stmtText = stmt.querySelector('[class*="text"], [class*="statement"], p, span');
      var text = stmtText ? stmtText.innerText.trim() : stmt.innerText.trim().split("\n")[0];
      result.options.push(text);
      result.elements.push(stmt);
      var tfBtns = stmt.querySelectorAll('button, [role="radio"], [role="checkbox"], [class*="option"]');
      if(tfBtns.length >= 2) result.dropZones.push({ stmt: stmt, buttons: Array.from(tfBtns) });
    });
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 12b. V/F WAYGROUND HEURISTIC ═══
  // Detect rows where each row has a statement and True/False buttons
  // ══════════════════════════════════════════════════════
  if(gameArea) {
    // Look for groups of buttons with V/F or True/False text
    var vfBtns = [];
    gameArea.querySelectorAll('button, [role="button"], [role="radio"], [role="checkbox"]').forEach(function(btn) {
      if(!vis(btn)) return;
      var t = (btn.innerText || "").trim().toLowerCase();
      if(t === "v" || t === "f" || t === "true" || t === "false" || t === "verdadeiro" || t === "falso") {
        vfBtns.push(btn);
      }
    });
    // V/F buttons come in pairs (V + F for each statement)
    if(vfBtns.length >= 4 && vfBtns.length % 2 === 0) {
      result.type = "true_false_multi";
      // Group into pairs by proximity (each pair shares a similar Y position)
      vfBtns.sort(function(a,b) { return a.getBoundingClientRect().top - b.getBoundingClientRect().top || a.getBoundingClientRect().left - b.getBoundingClientRect().left; });
      var pairs = [];
      for(var vi = 0; vi < vfBtns.length; vi += 2) {
        if(vi+1 < vfBtns.length) pairs.push([vfBtns[vi], vfBtns[vi+1]]);
      }
      // For each pair, find the nearest statement text (sibling or parent text)
      pairs.forEach(function(pair, idx) {
        var parentRow = pair[0].closest('div, li, tr, [class*="row"], [class*="statement"]');
        var statementText = "";
        if(parentRow) {
          // Get text from the row excluding the buttons themselves
          var clone = parentRow.cloneNode(true);
          clone.querySelectorAll('button, [role="button"], [role="radio"], [role="checkbox"]').forEach(function(b){ b.remove(); });
          statementText = clone.innerText.trim().replace(/\s+/g, " ");
        }
        if(!statementText) statementText = "Afirmação " + (idx+1);
        result.options.push(statementText);
        result.elements.push(parentRow || pair[0]);
        result.dropZones.push({ stmt: parentRow || pair[0], buttons: pair });
      });
      if(result.options.length >= 2) return result;
      // Reset if detection failed
      result = { type: "unknown", options: [], images: [], elements: [], dropZones: [], inputElement: null, matchRight: null, fillBlanks: [] };
    }
  }

  // ══════════════════════════════════════════════════════
  // ═══ 13. MCQ / MSQ / SIMPLE TRUE-FALSE (MAIN) ═══
  // ══════════════════════════════════════════════════════
  var optSelectors = [
    '.option.is-selectable', '[data-testid="option"]', '[data-testid="answer-option"]',
    '[data-testid="option-container"]', '[data-cy="option"]',
    '[class*="OptionCard"]', '[class*="option-card"]', '[class*="optionCard"]',
    '.options-container .option', '.options-list .option',
    '[class*="MCQOption"]', '[class*="mcq-option"]', '[class*="mcqOption"]',
    '.option-item', '.answer-option',
    '[role="option"]', '[role="radio"][class*="option"]', '[role="checkbox"][class*="option"]',
    'button[class*="option"]:not([class*="dropdown"])',
    '[class*="AnswerOption"]', '[class*="answerOption"]', '[class*="answer-option"]',
    '[class*="choice"]', '[class*="Choice"]',
    '[class*="alternative"]', '[class*="Alternative"]',
    '[class*="true-false"] button', '[class*="TrueFalse"] button',
    '[class*="answer-choice"]', '[class*="AnswerChoice"]',
    '[class*="quiz-option"]', '[class*="QuizOption"]',
    '[class*="response-option"]', '[class*="ResponseOption"]',
    '[class*="game-option"]', '[class*="GameOption"]',
    '[class*="option-button"]', '[class*="OptionButton"]'
  ];
  var optEls = [];
  for(var si = 0; si < optSelectors.length; si++) {
    try {
      var found = document.querySelectorAll(optSelectors[si]);
      var filtered = [];
      for(var fi = 0; fi < found.length; fi++) { if(vis(found[fi])) filtered.push(found[fi]); }
      if(filtered.length >= 2) { optEls = filtered; break; }
    } catch(e) {}
  }

  // Fallback: find clickable containers with option-like patterns
  if(optEls.length < 2) {
    var gameArea2 = document.querySelector('[class*="game"], [class*="Game"], [class*="quiz"], [class*="Quiz"], [class*="question-area"], main, [class*="gameplay"]');
    if(gameArea2) {
      var containers = gameArea2.querySelectorAll('[class*="option"], [class*="answer"]');
      var validOpts = [];
      containers.forEach(function(el) {
        if(vis(el) && el.innerText.trim().length > 0 && !el.querySelector('[class*="option"]')) validOpts.push(el);
      });
      if(validOpts.length >= 2) optEls = validOpts;
    }
  }

  if(optEls.length >= 2) {
    // SAFETY CHECK: skip if these look like draggable match blocks, not MCQ options
    var draggableCount = 0;
    optEls.forEach(function(el) {
      if(el.getAttribute("draggable") === "true" || (getComputedStyle(el).cursor === "grab" || getComputedStyle(el).cursor === "move")) draggableCount++;
      var svgInner = el.innerHTML || "";
      if(svgInner.match(/circle.*circle.*circle|grip|drag-handle|dots/i)) draggableCount++;
    });
    if(draggableCount >= optEls.length * 0.5) {
      // Most options are draggable - this is likely a drag/match question, not MCQ
      return result;
    }
    // SAFETY CHECK: filter out single-letter fragments that are game block artifacts
    var texts = optEls.map(function(el){ return optText(el); });
    var allSingleChar = texts.every(function(t){ return t.length <= 2; });
    var hasManyOpts = optEls.length > 6;
    // If all options are single characters and there are many of them, this is likely
    // fragmented game block detection (A, B, C, D, E, F, G...), skip it
    if(allSingleChar && hasManyOpts) {
      return result; // Return unknown
    }

    var allTexts = optEls.map(function(el){ return optText(el).toLowerCase(); });
    var isTF = optEls.length === 2 && (
      (allTexts.indexOf("true") >= 0 && allTexts.indexOf("false") >= 0) ||
      (allTexts.indexOf("verdadeiro") >= 0 && allTexts.indexOf("falso") >= 0) ||
      (allTexts.indexOf("v") >= 0 && allTexts.indexOf("f") >= 0) ||
      (allTexts.indexOf("sim") >= 0 && allTexts.indexOf("nao") >= 0) ||
      (allTexts.indexOf("yes") >= 0 && allTexts.indexOf("no") >= 0)
    );

    var isMSQ = optEls.some(function(el) {
      return el.classList.toString().match(/msq|multi-select|multiSelect|checkbox/i) ||
        el.getAttribute("data-type") === "msq" ||
        el.closest('[class*="multi-select"], [class*="MultiSelect"], [class*="checkbox-group"], [class*="CheckboxGroup"]') ||
        el.querySelector('input[type="checkbox"], [class*="checkbox"], [role="checkbox"]');
    });

    var hasImages = false;
    optEls.forEach(function(el) {
      var t = optText(el); var im = optImg(el);
      result.options.push(t); result.elements.push(el);
      if(im) { result.images.push(im); hasImages = true; } else { result.images.push(null); }
    });

    if(isTF) result.type = "true_false";
    else if(hasImages && !result.options.some(function(o){ return o.length > 3; })) result.type = isMSQ ? "image_multi" : "image_single";
    else result.type = isMSQ ? "multi" : "single";
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 14. POLL ═══
  // ══════════════════════════════════════════════════════
  var pollOpts = qAll([
    '[class*="poll"] .option', '[class*="Poll"] .option',
    '[class*="poll-option"]', '[class*="PollOption"]',
    '[data-testid*="poll-option"]'
  ]);
  if(pollOpts.length > 0) {
    result.type = "poll";
    pollOpts.forEach(function(el) { result.options.push(el.innerText.trim()); result.elements.push(el); });
    return result;
  }

  // ══════════════════════════════════════════════════════
  // ═══ 15. WORD SELECT ═══
  // ══════════════════════════════════════════════════════
  var wordSels = qAll([
    '[class*="word-select"]', '[class*="WordSelect"]',
    '[class*="selectable-word"]', '[class*="SelectableWord"]',
    '[class*="tap-word"]', '[class*="TapWord"]',
    '[class*="clickable-word"]', '[class*="ClickableWord"]',
    '[data-testid*="word-select"]'
  ]);
  if(wordSels.length > 2) {
    result.type = "word_select";
    wordSels.forEach(function(el) { result.options.push(el.innerText.trim()); result.elements.push(el); });
    return result;
  }

  return result;
}

// ═══ AI CALL ═══
function callAI(messages) {
  return new Promise(function(res, rej) {
    if(S.useDogly && S.webhookToken) {
      log("Consultando DoglyTdc...", "inf");
      fetch(S.webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-webhook-token": S.webhookToken },
        body: JSON.stringify({ action: "ai", messages: messages })
      })
      .then(function(r){ if(!r.ok) throw new Error("Webhook " + r.status); return r.json(); })
      .then(function(d){
        if(d.success && d.content) { log("Via " + (d.provider||"DoglyTdc"), "suc"); res(d.content); }
        else throw new Error(d.error || "Sem resposta");
      })
      .catch(function(e){
        log("DoglyTdc falhou: " + e.message, "wrn");
        if(S.apiKey && S.apiKey.length > 5) callDirect(messages).then(res).catch(rej);
        else rej(e);
      });
      return;
    }
    if(!S.apiKey || S.apiKey.length < 5) { rej(new Error("Configure API Key ou DoglyTdc")); return; }
    callDirect(messages).then(res).catch(rej);
  });
}

function callDirect(messages) {
  return new Promise(function(res, rej) {
    var at = getApiType();
    if(at === "google" || (at !== "groq" && S.apiKey.indexOf("AIza") === 0)) {
      var parts = [];
      messages.forEach(function(m) {
        if(typeof m.content === "string") { parts.push({text: m.role + ": " + m.content}); }
        else if(Array.isArray(m.content)) {
          m.content.forEach(function(c) {
            if(c.type === "text") parts.push({text: c.text});
            else if(c.type === "image_url") parts.push({inline_data: {mime_type: "image/jpeg", data: c.image_url.url.replace(/^data:image\/[^;]+;base64,/,"")}});
          });
        }
      });
      fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=" + S.apiKey, {
        method: "POST", headers: {"Content-Type": "application/json"},
        body: JSON.stringify({contents: [{role:"user", parts:parts}], generationConfig: {temperature:0.1, maxOutputTokens:2000}})
      })
      .then(function(r){ if(!r.ok) throw new Error("Google API " + r.status); return r.json(); })
      .then(function(d){ res(d.candidates?.[0]?.content?.parts?.[0]?.text || ""); })
      .catch(rej);
    } else {
      var textMsgs = messages.map(function(m){
        if(typeof m.content === "string") return m;
        if(Array.isArray(m.content)) return {role: m.role, content: m.content.filter(function(c){return c.type==="text";}).map(function(c){return c.text;}).join("\n")};
        return m;
      });
      fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST", headers: {"Content-Type": "application/json", "Authorization": "Bearer " + S.apiKey},
        body: JSON.stringify({model: "llama-3.3-70b-versatile", messages: textMsgs, temperature:0.1, max_tokens:1000})
      })
      .then(function(r){ if(!r.ok) throw new Error("Groq API " + r.status); return r.json(); })
      .then(function(d){ res(d.choices?.[0]?.message?.content || ""); })
      .catch(rej);
    }
  });
}

// ═══ IMAGE TO BASE64 ═══
function imgToBase64(url) {
  return new Promise(function(res) {
    try {
      var img = new Image(); img.crossOrigin = "anonymous";
      img.onload = function() { try { var c = document.createElement("canvas"); c.width = Math.min(img.naturalWidth, 800); c.height = Math.min(img.naturalHeight, 800); c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); res(c.toDataURL("image/jpeg", 0.7)); } catch(e) { res(null); } };
      img.onerror = function(){ res(null); }; img.src = url;
    } catch(e) { res(null); }
  });
}

// ═══ BUILD AI PROMPT (v14 - Enhanced) ═══
function buildPrompt(data, screenshotB64) {
  return new Promise(function(res) {
    var sysPrompt = "Voce e um assistente que RESOLVE questoes do Quizizz/Wayground. REGRAS ABSOLUTAS:\n1. Responda SOMENTE com a resposta correta. NADA MAIS.\n2. PROIBIDO dizer 'a resposta e', 'correto', 'com base na imagem'.\n3. Para alternativas: APENAS a LETRA + texto. Ex: B) Fotossintese\n4. Para V/F: apenas True ou False\n5. Para aberta/digitacao: apenas a palavra/frase exata\n6. Para V/F multiplo: responda cada afirmacao. Ex: 1. True\n2. False\n3. True\n7. Para ordenar: liste na ordem correta numerada\n8. Para categorizar: Item -> Categoria\n9. Para completar frase: palavra(s) exata(s) que preenchem\n10. NUNCA explique. ZERO texto extra. Formato LIMPO.\n11. Analise screenshots e imagens com atencao maxima.";
    
    var typeInstructions = {
      single: "ESCOLHA UNICA. Responda com a LETRA seguida do texto. Ex: A) texto",
      multi: "MULTIPLA ESCOLHA. Liste TODAS as corretas separadas por virgula. Ex: A, C",
      image_single: "IMAGENS. Analise e responda com a LETRA.",
      image_multi: "Multipla escolha com IMAGENS. Liste as letras corretas.",
      open: "RESPOSTA ABERTA/DIGITACAO. Apenas a palavra ou frase exata para digitar.",
      equation: "EQUACAO. Apenas o resultado numerico.",
      drag: "ARRASTAR E SOLTAR. Responda APENAS o texto/numero exato do bloco correto. Exemplo: se as opcoes sao 2, -2, 30, 34, -34, responda apenas o numero correto como: 34",
      reorder: "ORDENAR BLOCOS. Liste na ordem correta, numerados. Ex: 1. Primeiro\n2. Segundo",
      dropdown: "DROPDOWN. Texto exato da opcao correta.",
      match: "CONECTAR. Formato: Esquerda -> Direita",
      true_false: "Responda APENAS: True ou False",
      true_false_multi: "VERDADEIRO/FALSO para CADA afirmacao. Responda cada uma em uma linha:\n1. True/False\n2. True/False\netc.",
      categorize: "CATEGORIZAR/COMBINAR blocos com zonas. Para cada bloco da esquerda, indique a zona correta da direita. Formato OBRIGATORIO:\nTextoDoBloco -> SimboloDaZona\nTextoDoBloco2 -> SimboloDaZona2\nExemplo para fracoes: 21/21 72/72 -> =\n9/8 9/4 -> >\nIMPORTANTE: use EXATAMENTE o texto dos blocos e simbolos fornecidos.",
      labeling: "ROTULAR. Rotulo correto para cada espaco.",
      hotspot: "HOTSPOT. Descreva a area correta para clicar.",
      poll: "ENQUETE. Escolha a mais adequada.",
      fill_select: "COMPLETAR A FRASE selecionando. Responda a(s) palavra(s) correta(s) para cada espaco, numeradas:\n1. palavra\n2. palavra",
      word_select: "SELECIONAR PALAVRAS corretas. Liste as palavras que devem ser selecionadas, separadas por virgula.",
      table_select: "TABELA/GRID. Analise a tabela e indique as celulas corretas. Para cada linha, indique a coluna correta. Formato:\n1. NomeColuna\n2. NomeColuna",
      unknown: "Analise e responda da forma mais adequada."
    };
    
    var userParts = [];
    var instruction = typeInstructions[data.questionType] || typeInstructions.unknown;
    var textContent = instruction + "\n\nPERGUNTA: \"" + (data.question || "[Veja a imagem/screenshot]") + "\"";
    
    // Include passage text if available
    if(data.passageText && data.passageText.length > 20) {
      textContent += "\n\nTEXTO/PASSAGEM DE REFERENCIA:\n\"" + data.passageText.substring(0, 2000) + "\"";
    }
    
    if(data.options && data.options.length > 0) {
      if(data.questionType === "true_false_multi") {
        textContent += "\n\nAFIRMACOES:";
        data.options.forEach(function(o, i) { textContent += "\n" + (i+1) + ". " + o; });
      } else if(data.questionType === "drag" || data.questionType === "categorize") {
        textContent += "\n\nBLOCOS:";
        data.options.forEach(function(o, i) { textContent += "\n" + (i+1) + ". " + (o || "[Bloco]"); });
      } else if(data.questionType === "true_false") {
        textContent += "\n\nOPCOES:";
        data.options.forEach(function(o) { textContent += "\n- " + (o || "V/F"); });
      } else if(data.questionType === "reorder") {
        textContent += "\n\nBLOCOS PARA ORDENAR:";
        data.options.forEach(function(o, i) { textContent += "\n" + (i+1) + ". " + (o || "[Bloco]"); });
      } else {
        textContent += "\n\nALTERNATIVAS:";
        data.options.forEach(function(o, i) { textContent += "\n" + String.fromCharCode(65+i) + ") " + (o || "[Imagem]"); });
      }
    }
    if(data.matchRight) {
      textContent += "\n\n" + (data.questionType === "categorize" ? "ZONAS/CATEGORIAS:" : data.questionType === "drag" ? "ZONAS DE DESTINO:" : "ITENS DIREITA:");
      data.matchRight.forEach(function(r, i) { textContent += "\n" + (i+1) + ". " + r; });
    }
    userParts.push({type: "text", text: textContent});
    
    var imgPromises = [];
    if(screenshotB64 && S.settings.screenshotMode) { userParts.push({type: "image_url", image_url: {url: screenshotB64}}); log("Screenshot enviado", "suc"); }
    if(S.settings.visionMode && (data.questionImages.length > 0 || data.allImages.length > 0)) {
      var allImgs = data.questionImages.slice();
      data.optionImages.forEach(function(im){ if(im && allImgs.indexOf(im) === -1) allImgs.push(im); });
      if(allImgs.length === 0) allImgs = data.allImages.slice(0, 6);
      imgPromises = allImgs.slice(0, 6).map(imgToBase64);
    }
    if(imgPromises.length > 0) {
      Promise.all(imgPromises).then(function(b64s) {
        b64s.forEach(function(b64) { if(b64) userParts.push({type: "image_url", image_url: {url: b64}}); });
        var imgCount = b64s.filter(Boolean).length;
        if(imgCount > 0) log(imgCount + " imagens enviadas", "inf");
        res([{role: "system", content: sysPrompt}, {role: "user", content: userParts}]);
      });
    } else {
      if(userParts.length > 1) res([{role: "system", content: sysPrompt}, {role: "user", content: userParts}]);
      else res([{role: "system", content: sysPrompt}, {role: "user", content: textContent}]);
    }
  });
}

// ═══ DETECT QUESTION ═══
function detect() {
  // Also try to capture passage if we're on a reading page
  if(S.siteState.gameMode === "reading") capturePassageText();
  
  var data = extractFullPageContent();
  if(!data.question && data.allImages.length === 0 && data.options.length === 0) {
    qEl.className = "qs-qt em"; qEl.textContent = "Nenhuma questao detectada";
    tpEl.textContent = "Nao encontrada"; setStatus("Questao nao encontrada", "err");
    return null;
  }
  S.lastQ = data; S.lastQHash = qHash(data.question);
  var typeNames = {
    single: "Escolha Unica", multi: "Multipla Escolha", image_single: "Imagem (Unica)",
    image_multi: "Imagem (Multi)", open: "Digitacao/Escrita", equation: "Equacao",
    drag: "Arrastar/Soltar", reorder: "Ordenar Blocos", dropdown: "Dropdown",
    match: "Conectar", true_false: "V ou F", true_false_multi: "V/F Multiplo",
    poll: "Enquete", categorize: "Categorizar Blocos", labeling: "Rotular",
    hotspot: "Hotspot", fill_select: "Completar (Selecionar)", word_select: "Selecionar Palavras",
    table_select: "Tabela/Grid",
    unknown: "Desconhecido"
  };
  tpEl.textContent = typeNames[data.questionType] || data.questionType;
  
  var html = '<div style="margin-bottom:5px;font-weight:600;color:rgba(255,255,255,0.9)">' + (data.question || "[Screenshot]") + '</div>';
  if(data.passageText && data.passageText.length > 20) {
    html += '<div style="font-size:9.5px;color:#60a5fa;margin:4px 0;padding:4px 8px;background:rgba(96,165,250,0.06);border-radius:6px;border:1px solid rgba(96,165,250,0.1)">\uD83D\uDCDD Texto de referencia salvo (' + data.passageText.length + ' chars)</div>';
  }
  if(data.questionImages.length > 0) { html += '<div style="display:flex;gap:3px;flex-wrap:wrap;margin:4px 0">'; data.questionImages.forEach(function(src){ html += '<img src="'+src+'" style="max-width:80px;max-height:60px;border-radius:6px;border:1px solid rgba(139,92,246,0.15)">'; }); html += '</div>'; }
  if(data.options.length > 0) {
    if((data.questionType === "drag" || data.questionType === "categorize") && ((data.dropZones && data.dropZones.length > 0) || (data.matchRight && data.matchRight.length > 0))) {
      html += '<div class="qs-blocks">';
      var zoneLabels = (data.matchRight && data.matchRight.length > 0) ? data.matchRight : data.dropZones.map(function(z){ return (z.innerText||"").trim(); });
      var maxRows = Math.max(data.options.length, zoneLabels.length);
      for(var bi = 0; bi < maxRows; bi++) {
        html += '<div class="qs-block-row">';
        if(bi < data.options.length) {
          var optTxt = data.options[bi] || "[Imagem]";
          var fracParts = optTxt.match(/(\d+)\/(\d+)/g);
          if(fracParts && fracParts.length > 0) {
            html += '<div class="qs-block-drag">';
            fracParts.forEach(function(fp, fi) {
              var nums = fp.split("/");
              if(fi > 0) html += '<span style="margin:0 4px;color:rgba(255,255,255,0.25)">&nbsp;</span>';
              html += '<span class="qs-frac"><span class="qs-frac-num">'+nums[0]+'</span><span class="qs-frac-den">'+nums[1]+'</span></span>';
            });
            html += '</div>';
          } else html += '<div class="qs-block-drag">'+optTxt+'</div>';
        } else html += '<div class="qs-block-drag" style="opacity:0.3">—</div>';
        html += '<div class="qs-block-sep">→</div>';
        if(bi < zoneLabels.length) html += '<div class="qs-block-drop">'+zoneLabels[bi]+'</div>';
        else html += '<div class="qs-block-drop" style="opacity:0.3">?</div>';
        html += '</div>';
      }
      html += '</div>';
    } else if(data.questionType === "reorder") {
      html += '<div class="qs-blocks">';
      data.options.forEach(function(o, i) {
        html += '<div class="qs-block-row"><div class="qs-block-drag" style="flex:1"><span style="color:#a78bfa;font-size:10px;margin-right:6px">'+(i+1)+'.</span>'+(o||"[Imagem]")+'</div></div>';
      });
      html += '</div>';
    } else if(data.questionType === "true_false_multi") {
      html += '<div class="qs-blocks">';
      data.options.forEach(function(o, i) {
        html += '<div class="qs-block-row"><div class="qs-block-drag" style="justify-content:flex-start;text-align:left;line-height:1.45">'+o+'</div><div class="qs-block-drop" style="flex:0 0 72px">V / F</div></div>';
      });
      html += '</div>';
    } else if(data.questionType === "true_false") {
      html += '<div class="qs-block-row">';
      data.options.forEach(function(o) {
        html += '<div class="qs-block-drop" style="flex:1 1 0">'+(o || 'V/F')+'</div>';
      });
      html += '</div>';
    } else {
      html += '<div class="qs-ol">';
      data.options.forEach(function(o, i) {
        var letter = String.fromCharCode(65 + i);
        var imgHtml = (data.optionImages && data.optionImages[i]) ? '<img src="'+data.optionImages[i]+'" style="max-width:40px;border-radius:4px;margin-left:4px">' : '';
        html += '<div class="qs-oi"><span class="qs-ol-letter">'+letter+'</span> ' + (o || '[Imagem]') + imgHtml + '</div>';
      });
      html += '</div>';
    }
  }
  var imgCount = data.questionImages.length + data.allImages.length;
  if(imgCount > 0 || S.settings.screenshotMode) vbEl.style.display = "inline-flex"; else vbEl.style.display = "none";
  qEl.className = "qs-qt"; qEl.innerHTML = html;
  var dzCount = (data.dropZones ? data.dropZones.length : 0);
  var statusExtra = (data.questionType === "drag" || data.questionType === "categorize") ? data.options.length + " blocos" + (dzCount > 0 ? " → " + dzCount + " zonas" : "") : (data.questionType === "true_false_multi" ? data.options.length + " afirmações" : (data.questionType === "true_false" ? data.options.length + " opções V/F" : data.options.length + " opcoes"));
  setStatus((typeNames[data.questionType]||"?") + " | " + statusExtra + (data.passageText ? " | Texto ref." : ""), "suc");
  return data;
}

// ═══ SOLVE ═══
function solve() {
  if(S.solving) return;
  var data = S.lastQ || extractFullPageContent();
  if(!data || (!data.question && data.allImages.length === 0 && data.options.length === 0)) { data = detect(); if(!data) { setStatus("Nenhuma questao", "err"); return; } }
  var at = getApiType();
  if(!at) { setStatus("Configure API Key ou DoglyTdc", "err"); navBtns[3].click(); return; }
  S.solving = true; S.stats.solved++; updateStats();
  slvBtn.disabled = true; slvBtn.innerHTML = '<span class="qs-spin">'+IC.loader+'</span> Pensando...';
  setStatus("Capturando + consultando IA...", "inf");
  var ssPromise = S.settings.screenshotMode ? captureScreenshot() : Promise.resolve(null);
  ssPromise.then(function(screenshotB64) { return buildPrompt(data, screenshotB64); })
  .then(function(messages) { return callAI(messages); })
  .then(function(ans) {
    var ca = cleanAIResponse(ans.trim().replace(/[\"\x60]/g, ""));
    log("IA: " + ca.substring(0, 100), "suc");
    applyAnswer(data, ca);
    startFeedbackWatch();
  }).catch(function(e) {
    S.stats.wrong++; setStatus("Erro: " + e.message, "err");
    showFeedback(false, "Erro: " + e.message.substring(0,40));
  }).finally(function() {
    S.solving = false; updateStats();
    slvBtn.disabled = false; slvBtn.innerHTML = IC.zap+' Resolver';
  });
}

function detectAndSolve() { var data = detect(); if(data) setTimeout(solve, 200); }

// ═══ DRAG-DROP SIMULATION HELPERS ═══
function _center(el) {
  var r = el.getBoundingClientRect();
  return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
}

function simulateDragDrop(srcEl, tgtEl) {
  if(!srcEl || !tgtEl) return false;
  var success = false;
  try {
    srcEl.scrollIntoView({ block: "center", inline: "center", behavior: "instant" });
    tgtEl.scrollIntoView({ block: "center", inline: "center", behavior: "instant" });
  } catch(e) {}

  var src = _center(srcEl);
  var tgt = _center(tgtEl);

  // Method 1: Native HTML5 drag events
  try {
    var dt;
    try { dt = new DataTransfer(); }
    catch(e) { dt = { data: {}, setData: function(k,v){ this.data[k]=v; }, getData: function(k){ return this.data[k]||""; }, types: [], effectAllowed: "all", dropEffect: "move" }; }
    dt.setData("text/plain", (srcEl.innerText || "").trim());

    srcEl.dispatchEvent(new MouseEvent("mousedown", { bubbles: true, cancelable: true, clientX: src.x, clientY: src.y }));
    srcEl.dispatchEvent(new DragEvent("dragstart", { bubbles: true, cancelable: true, clientX: src.x, clientY: src.y, dataTransfer: dt }));
    tgtEl.dispatchEvent(new DragEvent("dragenter", { bubbles: true, cancelable: true, clientX: tgt.x, clientY: tgt.y, dataTransfer: dt }));
    tgtEl.dispatchEvent(new DragEvent("dragover", { bubbles: true, cancelable: true, clientX: tgt.x, clientY: tgt.y, dataTransfer: dt }));
    tgtEl.dispatchEvent(new DragEvent("drop", { bubbles: true, cancelable: true, clientX: tgt.x, clientY: tgt.y, dataTransfer: dt }));
    srcEl.dispatchEvent(new DragEvent("dragend", { bubbles: true, cancelable: true, clientX: tgt.x, clientY: tgt.y, dataTransfer: dt }));
    tgtEl.dispatchEvent(new MouseEvent("mouseup", { bubbles: true, cancelable: true, clientX: tgt.x, clientY: tgt.y }));
    success = true;
  } catch(e1) {
    log("DragEvent fallback: " + e1.message, "wrn");
  }

  // Method 2: Pointer + mouse chain (works better in modern React UIs)
  try {
    var pid = Date.now() % 10000;
    srcEl.dispatchEvent(new PointerEvent("pointerdown", { bubbles:true, cancelable:true, pointerId:pid, pointerType:isMobile?"touch":"mouse", clientX:src.x, clientY:src.y, buttons:1 }));
    srcEl.dispatchEvent(new MouseEvent("mousedown", { bubbles:true, cancelable:true, clientX:src.x, clientY:src.y, buttons:1 }));
    for(var st = 1; st <= 6; st++) {
      var mx = src.x + (tgt.x - src.x) * (st / 6);
      var my = src.y + (tgt.y - src.y) * (st / 6);
      document.dispatchEvent(new PointerEvent("pointermove", { bubbles:true, cancelable:true, pointerId:pid, pointerType:isMobile?"touch":"mouse", clientX:mx, clientY:my, buttons:1 }));
      document.dispatchEvent(new MouseEvent("mousemove", { bubbles:true, cancelable:true, clientX:mx, clientY:my, buttons:1 }));
    }
    tgtEl.dispatchEvent(new PointerEvent("pointerup", { bubbles:true, cancelable:true, pointerId:pid, pointerType:isMobile?"touch":"mouse", clientX:tgt.x, clientY:tgt.y }));
    tgtEl.dispatchEvent(new MouseEvent("mouseup", { bubbles:true, cancelable:true, clientX:tgt.x, clientY:tgt.y }));
    tgtEl.dispatchEvent(new MouseEvent("click", { bubbles:true, cancelable:true, clientX:tgt.x, clientY:tgt.y }));
    success = true;
  } catch(e2) {
    log("Pointer fallback: " + e2.message, "wrn");
  }

  // Method 3: Click source then target (Wayground fallback)
  try {
    srcEl.click();
    setTimeout(function(){ try { tgtEl.click(); } catch(e) {} }, 80);
    success = true;
  } catch(e3) {}

  log("Drag tentado: " + ((srcEl.innerText||"").trim().substring(0,20)) + " → " + ((tgtEl.innerText||"").trim().substring(0,20) || "zona"), success ? "suc" : "wrn");
  return success;
}

function simulateTouchDrag(srcEl, tgtEl) {
  return simulateDragDrop(srcEl, tgtEl);
}

function findBestMatch(answer, options, elements) {
  if(!elements || elements.length === 0) return null;
  var ca = norm(answer.replace(/^[A-Da-d][).\s]+/, ""));

  // Direct letter match (A, B, C...)
  var letterMatch = answer.match(/^\s*([A-Da-d])\s*[).\s]/);
  if(!letterMatch) letterMatch = answer.match(/^\s*([A-Da-d])\s*$/);
  if(letterMatch) {
    var idx = letterMatch[1].toUpperCase().charCodeAt(0) - 65;
    if(idx >= 0 && idx < elements.length) return { el: elements[idx], idx: idx };
  }

  // Exact match
  for(var i = 0; i < options.length; i++) {
    if(norm(options[i]) === ca) return { el: elements[i], idx: i };
  }
  // Partial match
  for(var j = 0; j < options.length; j++) {
    if(norm(options[j]).indexOf(ca) >= 0 || ca.indexOf(norm(options[j])) >= 0) return { el: elements[j], idx: j };
  }
  // Word overlap
  var bestScore = 0, bestIdx = -1;
  var words1 = ca.split(/\s+/).filter(Boolean);
  for(var k = 0; k < options.length; k++) {
    var words2 = norm(options[k]).split(/\s+/).filter(Boolean);
    var common = words1.filter(function(w){ return words2.indexOf(w) >= 0; }).length;
    var score = common / Math.max(words1.length, words2.length, 1);
    if(score > bestScore && score > 0.2) { bestScore = score; bestIdx = k; }
  }
  // Numeric match (important for math blocks like 2, -2, 30, 34, -34)
  var numMatch = ca.match(/^-?\d+\.?\d*$/);
  if(numMatch) {
    for(var n = 0; n < options.length; n++) {
      var optNum = norm(options[n]).match(/^-?\d+\.?\d*$/);
      if(optNum && optNum[0] === numMatch[0]) return { el: elements[n], idx: n };
    }
  }
  if(bestIdx >= 0) return { el: elements[bestIdx], idx: bestIdx };
  return null;
}

function getZoneLabel(zoneEl) {
  if(!zoneEl) return "";
  var label = (zoneEl.getAttribute("aria-label") || zoneEl.getAttribute("title") || "").trim();
  var txt = (zoneEl.innerText || "").trim().replace(/s+/g, " ");
  return txt || label;
}

function findZoneByLabel(label, zones) {
  if(!zones || zones.length === 0) return null;
  if(!label) return zones[0];
  var n = norm(label);
  for(var i = 0; i < zones.length; i++) {
    var zl = norm(getZoneLabel(zones[i]));
    if(zl && (zl === n || zl.indexOf(n) >= 0 || n.indexOf(zl) >= 0)) return zones[i];
  }
  var sym = (label.match(/<=|>=|<|>|=|≤|≥/) || [null])[0];
  if(sym) {
    for(var j = 0; j < zones.length; j++) {
      if((getZoneLabel(zones[j]) || "").indexOf(sym) >= 0) return zones[j];
    }
  }
  return zones[0];
}

function parsePairMappings(answerText) {
  var lines = (answerText || "").split(/[
]+/).map(function(l){ return l.trim(); }).filter(Boolean);
  var pairs = [];
  lines.forEach(function(line) {
    var cleaned = line.replace(/^d+[.)s-]+/, "").trim();
    if(!cleaned) return;

    // Item -> Category
    var arrowParts = cleaned.split(/s*(?:->|=>|→|:)s*/);
    if(arrowParts.length >= 2) {
      pairs.push({ left: arrowParts[0].trim(), right: arrowParts.slice(1).join(" ").trim() });
      return;
    }

    // Comparisons: "9/8 > 9/4" => left item "9/8 9/4", right category ">"
    var cmp = cleaned.match(/^(.+?)s*(<=|>=|<|>|=|≤|≥)s*(.+)$/);
    if(cmp) {
      pairs.push({ left: (cmp[1] + " " + cmp[3]).trim(), right: cmp[2] });
    }
  });
  return pairs;
}

// ═══ APPLY ANSWER (v14 - All Types) ═══
function applyAnswer(data, answer) {
  var ca = answer;
  switch(data.questionType) {
    case "single": case "image_single": case "true_false": case "poll": {
      if(data.elements && data.elements.length > 0) {
        var match = null, matchIdx = -1;
        var letterMatch = ca.match(/^\s*([A-Da-d])\s*[).\s]/);
        if(!letterMatch) letterMatch = ca.match(/^\s*([A-Da-d])\s*$/);
        if(letterMatch) { matchIdx = letterMatch[1].toUpperCase().charCodeAt(0) - 65; if(matchIdx >= 0 && matchIdx < data.elements.length) match = data.elements[matchIdx]; }
        if(!match) { var cleanCa = norm(ca.replace(/^[A-Da-d][).\s]+/, "")); for(var i = 0; i < data.options.length; i++) { if(norm(data.options[i]) === cleanCa) { match = data.elements[i]; matchIdx = i; break; } } }
        if(!match) { var cleanCa2 = norm(ca.replace(/^[A-Da-d][).\s]+/, "")); for(var j = 0; j < data.options.length; j++) { if(norm(data.options[j]).indexOf(cleanCa2) >= 0 || cleanCa2.indexOf(norm(data.options[j])) >= 0) { match = data.elements[j]; matchIdx = j; break; } } }
        if(!match) { var bestScore = 0; var cleanCa3 = norm(ca.replace(/^[A-Da-d][).\s]+/, "")); for(var k = 0; k < data.options.length; k++) { var w1 = cleanCa3.split(/\s+/).filter(Boolean); var w2 = norm(data.options[k]).split(/\s+/).filter(Boolean); var common = w1.filter(function(w){ return w2.indexOf(w) >= 0; }).length; var score = common / Math.max(w1.length, w2.length, 1); if(score > bestScore && score > 0.2) { bestScore = score; match = data.elements[k]; matchIdx = k; } } }
        if(match) { highlight(match); match.click(); setStatus(String.fromCharCode(65+matchIdx) + ") " + (data.options[matchIdx]||"").substring(0,50), "suc"); if(S.settings.autoSubmit) setTimeout(clickSubmit, 700); }
        else { setStatus("IA: " + ca.substring(0,60) + " (sem match)", "wrn"); if(S.settings.autoSubmit) setTimeout(clickSubmit, 1000); }
      }
      break;
    }
    case "multi": case "image_multi": {
      var lines = ca.split(/[\n,;]+/).map(function(l){ return l.trim(); }).filter(Boolean);
      var found = 0;
      data.elements.forEach(function(el, idx) {
        var shouldSelect = lines.some(function(line) { var lm = line.match(/^([A-Da-d])\s*[).]?/); if(lm && (lm[1].toUpperCase().charCodeAt(0) - 65) === idx) return true; var cl = norm(line.replace(/^[A-Da-d][).\s]+/, "")); return norm(data.options[idx]).indexOf(cl) >= 0 || cl.indexOf(norm(data.options[idx])) >= 0; });
        if(shouldSelect) { highlight(el); el.click(); found++; }
      });
      setStatus(found + " opcoes selecionadas", found > 0 ? "suc" : "err");
      if(S.settings.autoSubmit && found > 0) setTimeout(clickSubmit, 700);
      break;
    }
    case "true_false_multi": {
      // Each line: "1. True" or "2. False"
      var tfLines = ca.split(/[\n]+/).map(function(l){ return l.trim(); }).filter(Boolean);
      var tfFound = 0;
      tfLines.forEach(function(line, idx) {
        var isTrue = line.match(/true|verdadeiro|v$/i);
        if(data.dropZones && data.dropZones[idx]) {
          var btns = data.dropZones[idx].buttons;
          if(btns && btns.length >= 2) {
            // Find the True or False button
            var targetBtn = null;
            btns.forEach(function(btn) {
              var btnText = (btn.innerText || "").toLowerCase().trim();
              if(isTrue && btnText.match(/^(true|verdadeiro|v|sim|yes)$/i)) targetBtn = btn;
              if(!isTrue && btnText.match(/^(false|falso|f|nao|no)$/i)) targetBtn = btn;
            });
            // Fallback: first button = True, second = False
            if(!targetBtn) targetBtn = isTrue ? btns[0] : btns[1];
            if(targetBtn) { highlight(targetBtn); targetBtn.click(); tfFound++; }
          }
        }
      });
      setStatus(tfFound + " afirmacoes marcadas", tfFound > 0 ? "suc" : "wrn");
      if(S.settings.autoSubmit && tfFound > 0) setTimeout(clickSubmit, 700);
      break;
    }
    case "open": case "labeling": {
      var inputEl = data.inputElement;
      if(inputEl) {
        inputEl.focus();
        inputEl.click();
        var typed = false;
        // Method 1: React-compatible native setter
        try {
          var proto = inputEl.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
          var nativeSet = Object.getOwnPropertyDescriptor(proto, 'value');
          if(nativeSet && nativeSet.set) {
            nativeSet.set.call(inputEl, ca);
            inputEl.dispatchEvent(new Event("input", {bubbles:true}));
            inputEl.dispatchEvent(new Event("change", {bubbles:true}));
            typed = true;
          }
        } catch(e) { log("Native setter falhou: " + e.message, "wrn"); }
        // Method 2: Direct value assignment
        if(!typed) {
          try {
            inputEl.value = ca;
            inputEl.dispatchEvent(new Event("input", {bubbles:true}));
            inputEl.dispatchEvent(new Event("change", {bubbles:true}));
            typed = true;
          } catch(e2) { log("Direct value falhou: " + e2.message, "wrn"); }
        }
        // Method 3: execCommand (works on contentEditable and some inputs)
        if(!typed || !inputEl.value) {
          try {
            inputEl.focus();
            inputEl.select && inputEl.select();
            document.execCommand("selectAll", false, null);
            document.execCommand("insertText", false, ca);
            typed = true;
          } catch(e3) { log("execCommand falhou: " + e3.message, "wrn"); }
        }
        // Method 4: Character-by-character simulation
        if(!typed || (!inputEl.value && !inputEl.textContent)) {
          try {
            inputEl.focus();
            for(var ci = 0; ci < ca.length; ci++) {
              var ch = ca[ci];
              inputEl.dispatchEvent(new KeyboardEvent("keydown", {key:ch, code:"Key"+ch.toUpperCase(), bubbles:true, cancelable:true}));
              inputEl.dispatchEvent(new KeyboardEvent("keypress", {key:ch, code:"Key"+ch.toUpperCase(), bubbles:true, cancelable:true}));
              inputEl.dispatchEvent(new InputEvent("input", {data:ch, inputType:"insertText", bubbles:true, cancelable:true}));
              inputEl.dispatchEvent(new KeyboardEvent("keyup", {key:ch, code:"Key"+ch.toUpperCase(), bubbles:true, cancelable:true}));
            }
            typed = true;
          } catch(e4) { log("Char-by-char falhou: " + e4.message, "wrn"); }
        }
        // Final: dispatch extra events to trigger React/framework state updates
        inputEl.dispatchEvent(new Event("input", {bubbles:true}));
        inputEl.dispatchEvent(new Event("change", {bubbles:true}));
        inputEl.dispatchEvent(new Event("blur", {bubbles:true}));
        setTimeout(function() { inputEl.dispatchEvent(new Event("input", {bubbles:true})); inputEl.dispatchEvent(new Event("change", {bubbles:true})); }, 100);
        setStatus("Digitado: " + ca.substring(0,50), "suc");
        if(S.settings.autoSubmit) setTimeout(clickSubmit, 800);
      } else {
        // Fallback: try to find ANY visible input/textarea on the page
        var fallbackInput = document.querySelector('input[type="text"]:not([disabled]), textarea:not([disabled]), [contenteditable="true"]');
        if(fallbackInput && !fallbackInput.closest("#qs-panel")) {
          fallbackInput.focus();
          try { document.execCommand("selectAll", false, null); document.execCommand("insertText", false, ca); } catch(e) { fallbackInput.value = ca; }
          fallbackInput.dispatchEvent(new Event("input", {bubbles:true}));
          fallbackInput.dispatchEvent(new Event("change", {bubbles:true}));
          setStatus("Digitado (fallback): " + ca.substring(0,50), "suc");
          if(S.settings.autoSubmit) setTimeout(clickSubmit, 800);
        } else {
          setStatus("Input nao encontrado", "err");
        }
      }
      break;
    }
    case "fill_select": {
      // Fill blanks with selections
      var fillLines = ca.split(/[\n]+/).map(function(l){ return l.trim().replace(/^\d+[.)\s]+/, ""); }).filter(Boolean);
      var fillFound = 0;
      data.fillBlanks.forEach(function(blank, idx) {
        var targetWord = fillLines[idx] || fillLines[0] || ca.trim();
        if(blank.tagName === "SELECT") {
          // It's a real <select>
          var opts = blank.querySelectorAll("option");
          opts.forEach(function(o) {
            if(norm(o.innerText).indexOf(norm(targetWord)) >= 0 || norm(targetWord).indexOf(norm(o.innerText)) >= 0) {
              blank.value = o.value;
              blank.dispatchEvent(new Event("change", {bubbles:true}));
              fillFound++;
            }
          });
        } else {
          // Clickable blank - click it to open menu, then select
          blank.click();
          setTimeout(function() {
            var menuItems = document.querySelectorAll('[class*="dropdown"] [class*="option"], [class*="menu"] [class*="item"], [class*="popup"] [class*="option"], [role="option"], [role="menuitem"]');
            menuItems.forEach(function(item) {
              if(item.offsetParent !== null && !item.closest("#qs-panel")) {
                if(norm(item.innerText).indexOf(norm(targetWord)) >= 0 || norm(targetWord).indexOf(norm(item.innerText)) >= 0) {
                  item.click(); fillFound++;
                }
              }
            });
          }, 300);
        }
      });
      setStatus("Preenchido: " + ca.substring(0,60), fillFound > 0 ? "suc" : "wrn");
      if(S.settings.autoSubmit) setTimeout(clickSubmit, 1200);
      break;
    }
    case "word_select": {
      // Select specific words from clickable options
      var words = ca.split(/[,;\n]+/).map(function(w){ return w.trim(); }).filter(Boolean);
      var wsFound = 0;
      data.elements.forEach(function(el) {
        var elText = norm(el.innerText);
        var shouldSelect = words.some(function(w){ return norm(w) === elText || elText.indexOf(norm(w)) >= 0; });
        if(shouldSelect) { highlight(el); el.click(); wsFound++; }
      });
      setStatus(wsFound + " palavras selecionadas", wsFound > 0 ? "suc" : "wrn");
      if(S.settings.autoSubmit && wsFound > 0) setTimeout(clickSubmit, 700);
      break;
    }
    case "drag": case "reorder": {
      if(data.elements && data.elements.length > 0) {
        var moved = 0;

        if(data.questionType === "reorder") {
          var orderLines = ca.split(/[
]+/).map(function(l){ return l.trim().replace(/^d+[.)s]+/, ""); }).filter(Boolean);
          if(orderLines.length === 0) orderLines = ca.split(/[,;]+/).map(function(l){ return l.trim(); }).filter(Boolean);
          setStatus("Ordem: " + orderLines.join(" > "), "inf");

          var remaining = data.elements.slice();
          orderLines.forEach(function(item, idx) {
            var opts = remaining.map(function(el){ return (el.innerText || "").trim(); });
            var found = findBestMatch(item, opts, remaining);
            var target = (data.dropZones && data.dropZones[idx]) ? data.dropZones[idx] : data.elements[idx];
            if(found && target && found.el !== target) {
              highlight(found.el);
              if(simulateDragDrop(found.el, target)) moved++;
              remaining = remaining.filter(function(el){ return el !== found.el; });
            }
          });
        } else {
          // Drag to one or more zones
          var mappings = parsePairMappings(ca);
          if(data.dropZones && data.dropZones.length > 1 && mappings.length > 0) {
            mappings.forEach(function(pair) {
              var src = findBestMatch(pair.left, data.options, data.elements);
              var zone = findZoneByLabel(pair.right, data.dropZones);
              if(src && zone) {
                highlight(src.el);
                if(simulateDragDrop(src.el, zone)) moved++;
              }
            });
            setStatus(moved + " bloco(s) movido(s)", moved > 0 ? "suc" : "wrn");
          } else {
            // Single-zone drag
            var dm = findBestMatch(ca, data.options, data.elements);
            if(dm) {
              highlight(dm.el);
              var targetZone = (data.dropZones && data.dropZones.length > 0) ? data.dropZones[0] : null;
              if(targetZone) {
                if(simulateDragDrop(dm.el, targetZone)) moved++;
                setStatus("Arrastando: " + dm.el.innerText.trim().substring(0,40), "suc");
              } else {
                dm.el.click(); moved++;
                setStatus("Clicado: " + dm.el.innerText.trim().substring(0,40), "suc");
              }
            } else {
              setStatus("Resposta: " + ca.substring(0,60) + " (sem match)", "wrn");
            }
          }
        }

        if(moved === 0 && data.questionType === "reorder") {
          // visual fallback only
          var colors = ["#22c55e","#3b82f6","#f59e0b","#ef4444","#8b5cf6"];
          data.elements.forEach(function(el, idx) {
            el.style.border = "2px solid " + colors[idx%5];
          });
        }
      }
      if(S.settings.autoSubmit) setTimeout(clickSubmit, 1500);
      break;
    }
    case "match": case "categorize": {
      var pairLines = parsePairMappings(ca);
      var applied = 0;

      if(data.questionType === "match" && data.elements && data.matchRight && data.matchRight.length > 0) {
        var leftCount = data.options ? data.options.length : 0;
        var leftEls = data.elements.slice(0, leftCount);
        var rightEls = data.elements.slice(leftCount);

        pairLines.forEach(function(pair) {
          var left = findBestMatch(pair.left, leftEls.map(function(e){ return e.innerText || ""; }), leftEls);
          var right = findBestMatch(pair.right, rightEls.map(function(e){ return e.innerText || ""; }), rightEls);
          if(left && right) {
            highlight(left.el); highlight(right.el);
            left.el.click();
            setTimeout(function(){ right.el.click(); }, 120);
            applied++;
          }
        });
      } else if(data.dropZones && data.dropZones.length > 0 && data.elements && data.elements.length > 0) {
        // Categorize / multi-drop (Wayground style)
        pairLines.forEach(function(pair) {
          var src = findBestMatch(pair.left, data.options, data.elements);
          var zone = findZoneByLabel(pair.right, data.dropZones);
          if(src && zone) {
            highlight(src.el);
            // Method 1: Try drag-drop
            var dragOk = simulateDragDrop(src.el, zone);
            // Method 2: Click source then click zone (Wayground click-to-match)
            if(!dragOk) {
              try {
                src.el.click();
                setTimeout(function(){ zone.click(); }, 150);
              } catch(e) {}
            }
            applied++;
          }
        });

        // If no mappings parsed but we have equal counts, try sequential pairing
        if(pairLines.length === 0 && data.elements.length === data.dropZones.length) {
          var answerLines = ca.split(/[
]+/).map(function(l){ return l.trim().replace(/^d+[.)s]+/, ""); }).filter(Boolean);
          data.elements.forEach(function(el, idx) {
            if(idx < data.dropZones.length) {
              highlight(el);
              simulateDragDrop(el, data.dropZones[idx]);
              try { el.click(); setTimeout(function(){ data.dropZones[idx].click(); }, 150); } catch(e) {}
              applied++;
            }
          });
        }
      }

      if(applied > 0) setStatus(applied + " pareamento(s) aplicado(s)", "suc");
      else setStatus("Sem pareamento aplicável: " + ca.substring(0,80), "wrn");

      if(S.settings.autoSubmit) setTimeout(clickSubmit, 1300);
      break;
    }
    case "equation": {
      setStatus("Resultado: " + ca, "suc");
      var eqInput = document.querySelector('input[class*="equation"], input[class*="answer"], [class*="equation-editor"] input');
      if(eqInput) { eqInput.value = ca.replace(/[^0-9.,-/=xXyYs+-*]/g, "").trim(); eqInput.dispatchEvent(new Event("input", {bubbles:true})); eqInput.dispatchEvent(new Event("change", {bubbles:true})); }
      if(S.settings.autoSubmit) setTimeout(clickSubmit, 700);
      break;
    }
    case "dropdown": { setStatus("Dropdown: " + ca, "inf"); if(S.settings.autoSubmit) setTimeout(clickSubmit, 700); break; }
    case "hotspot": { setStatus("Hotspot: " + ca, "inf"); break; }
    case "table_select": {
      // Parse AI response lines like "1. ColumnName" and click matching cells
      var tblLines = ca.split(/[\n]+/).map(function(l){ return l.trim().replace(/^\d+[.)\s]+/, ""); }).filter(Boolean);
      var tblFound = 0;
      if(data.matchRight && data.matchRight.length > 0 && data.elements && data.elements.length > 0) {
        // Try to match column headers to clickable cells per row
        tblLines.forEach(function(line) {
          var colIdx = -1;
          for(var ci = 0; ci < data.matchRight.length; ci++) {
            if(norm(data.matchRight[ci]).indexOf(norm(line)) >= 0 || norm(line).indexOf(norm(data.matchRight[ci])) >= 0) { colIdx = ci; break; }
          }
          if(colIdx >= 0 && data.elements[tblFound * data.matchRight.length + colIdx]) {
            var cell = data.elements[tblFound * data.matchRight.length + colIdx];
            highlight(cell); cell.click(); tblFound++;
          }
        });
      }
      if(tblFound === 0) {
        // Fallback: click elements matching the answer text
        data.elements.forEach(function(el) {
          tblLines.forEach(function(line) {
            if(norm(el.innerText).indexOf(norm(line)) >= 0 || norm(line).indexOf(norm(el.innerText)) >= 0) {
              highlight(el); el.click(); tblFound++;
            }
          });
        });
      }
      setStatus("Tabela: " + tblFound + " celula(s) selecionada(s)", tblFound > 0 ? "suc" : "wrn");
      if(S.settings.autoSubmit) setTimeout(clickSubmit, 800);
      break;
    }
  }
  updateStats();
}

function highlight(el) { el.style.border = "2px solid #22c55e"; el.style.boxShadow = "0 0 20px rgba(34,197,94,0.25), inset 0 0 0 1px rgba(34,197,94,0.1)"; el.style.transition = "all 0.3s"; el.style.borderRadius = (el.style.borderRadius || "8px"); }

function clickSubmit() {
  var submitSelectors = ['button[data-cy="submit-button"]','button[data-testid="submit"]','button[data-testid="submit-button"]','.submit-button','button[class*="Submit"]','button[class*="submit"]','button[class*="check-answer"]','button[class*="CheckAnswer"]','button[class*="check"]','button[class*="Check"]','.gameplay-footer button:not([disabled])','button[class*="primary"]:not([disabled])','button[class*="confirm"]','button[class*="Confirm"]'];
  for(var i = 0; i < submitSelectors.length; i++) {
    var btns = document.querySelectorAll(submitSelectors[i]);
    for(var j = 0; j < btns.length; j++) {
      var btn = btns[j];
      if(btn && btn.offsetParent !== null && !btn.disabled && !btn.closest("#qs-panel")) { btn.click(); log("Auto-submit", "inf"); return; }
    }
  }
}

// ═══ AUTO MODE ═══
function toggleAutoMode() {
  S.autoMode = !S.autoMode;
  if(S.autoMode) {
    autoBtn.innerHTML = IC.pause+' Auto ON'; autoBtn.className = 'qs-bt am active qs-pulse';
    log("Auto Mode ATIVADO!", "suc"); S.lastAutoQ = ""; autoSolveLoop();
  } else {
    autoBtn.innerHTML = IC.play+' Auto'; autoBtn.className = 'qs-bt am';
    if(S.autoInterval) { clearTimeout(S.autoInterval); S.autoInterval = null; }
    log("Auto Mode OFF", "inf");
  }
}

function autoSolveLoop() {
  if(!S.autoMode) return;
  
  // If in reading mode, capture passage and wait
  if(S.siteState.gameMode === "reading") {
    capturePassageText();
    log("Modo leitura - salvando texto...", "inf");
    clickNextOrAdvance();
    S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay);
    return;
  }
  
  // If in lobby/countdown/powerup, just wait
  if(S.siteState.gameMode === "lobby" || S.siteState.gameMode === "countdown" || S.siteState.gameMode === "powerup") {
    S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay);
    return;
  }
  
  var data = extractFullPageContent();
  var currentHash = qHash(data.question);
  if(data.question && currentHash !== S.lastAutoQ) {
    S.lastAutoQ = currentHash; S.lastQ = data; S.lastQHash = currentHash;
    log("Nova questao (auto) - " + (data.questionType || "?"), "inf"); detect();
    setTimeout(function(){ if(!S.autoMode) return; solve(); S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay + 4000); }, 500);
  } else if(!data.question && data.allImages.length > 0) {
    var imgHash = data.allImages.join(",").substring(0, 80);
    if(imgHash !== S.lastAutoQ) {
      S.lastAutoQ = imgHash; S.lastQ = data; log("Questao imagem (auto)", "inf"); detect();
      setTimeout(function(){ if(!S.autoMode) return; solve(); S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay + 4000); }, 500);
    } else { clickNextOrAdvance(); S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay); }
  } else { clickNextOrAdvance(); S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay); }
}

// ═══ BUTTON EVENTS ═══
detBtn.addEventListener("click", detect);
slvBtn.addEventListener("click", solve);
scrBtn.addEventListener("click", function() {
  setStatus("Capturando...", "inf");
  captureScreenshot().then(function(b64) {
    if(b64) { log("Screenshot: " + Math.round(b64.length/1024) + "KB", "suc"); setStatus("Screenshot pronto!", "suc"); S._lastScreenshot = b64; }
    else setStatus("Falha na captura", "err");
  });
});
autoBtn.addEventListener("click", toggleAutoMode);

// ═══ KEYBOARD SHORTCUTS ═══
var _altOnly = false, _altDown = false;
document.addEventListener("keydown", function(e) {
  var tgt = e.target;
  if(tgt && tgt.closest && tgt.closest("#qs-panel")) { var tn = (tgt.tagName || "").toLowerCase(); if(tn === "input" || tn === "textarea") return; }
  if(e.code === "AltLeft" || e.code === "AltRight") { _altDown = true; _altOnly = true; return; }
  if(_altDown) _altOnly = false;
  var tag = (tgt.tagName || "").toLowerCase();
  if(tag === "input" || tag === "textarea" || (tgt.isContentEditable && !(tgt.closest && tgt.closest("#qs-panel")))) return;
  if((e.code === "KeyD") && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); e.stopPropagation(); detect(); return; }
  if((e.code === "KeyR") && !e.ctrlKey && !e.metaKey && !e.altKey) { e.preventDefault(); e.stopPropagation(); detectAndSolve(); return; }
}, true);
document.addEventListener("keyup", function(e) {
  if(e.code === "AltLeft" || e.code === "AltRight") { if(_altOnly && _altDown) togglePanel(); _altDown = false; _altOnly = false; }
}, true);

// ═══ MUTATION OBSERVER ═══
var observer = new MutationObserver(function() {
  if(!S.autoMode || S.solving) return;
  clearTimeout(S._obTimeout);
  S._obTimeout = setTimeout(function() {
    var data = extractFullPageContent();
    var hash = qHash(data.question);
    if(hash && hash !== S.lastQHash) { S.lastQHash = hash; S.lastQ = data; log("Nova questao (observer)", "inf"); detect(); }
  }, 600);
});
observer.observe(document.body, {childList: true, subtree: true, characterData: true});

// ═══ INIT ═══
log("Solver v" + CFG.version + " carregado!", "suc");
log(isMobile ? "Mobile - toque para interagir" : "Alt=Ocultar | D=Detectar | R=Resolver", "suc");
log("All Types + Tables + Passage + Feedback v16 ativo", "inf");
if(S.useDogly) {
  log("DoglyTdc ativo!", "suc");
  fetch(CFG.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": CFG.webhookToken },
    body: JSON.stringify({ action: "bootstrap" })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d && d.success) {
      if(d.profile) {
        userProfile.name = d.profile.full_name || d.profile.email || "Usuario";
        userProfile.avatar = d.profile.avatar_url || null;
        userProfile.loaded = true;
        updateProfileUI();
      }
      if(d.config) {
        if(d.config.apiKey && d.config.apiKey.length > 5 && !S.apiKey) S.apiKey = d.config.apiKey;
        if(d.config.settings) {
          Object.keys(d.config.settings).forEach(function(k) {
            if(S.settings.hasOwnProperty(k)) S.settings[k] = d.config.settings[k];
          });
        }
      }
      if(d.providers) {
        var provList = Object.keys(d.providers).map(function(p){ return p.toUpperCase() + "(" + d.providers[p].count + ")"; }).join(", ");
        if(provList) log("Pool de chaves: " + provList, "inf");
      }
      updateCfgProvider && updateCfgProvider();
      updateBadge && updateBadge();
      return;
    }
    fetchUserProfile();
    loadRemoteConfig();
  }).catch(function(){
    fetchUserProfile();
    loadRemoteConfig();
  });
}
else if(S.apiKey) log("API: " + getApiType().toUpperCase(), "suc");
else log("Configure API Key ou DoglyTdc", "wrn");

setTimeout(function() { var d = detect(); if(d) log("Questao encontrada! Tipo: " + d.questionType, "suc"); }, 1500);


;(() => {
  if (typeof extractPageContent !== "function" || typeof applyAnswer !== "function") return;

  function dgTxt(el) {
    return ((el && (el.innerText || el.textContent)) || "").trim().replace(/\s+/g, " ");
  }

  function dgChoiceText(el) {
    if (!el) return "";
    try {
      var latex = el.querySelector && el.querySelector('annotation[encoding="application/x-tex"]');
      if (latex && latex.textContent && latex.textContent.trim()) {
        return latex.textContent.trim().replace(/\s+/g, " ");
      }

      var explicit = el.querySelector && el.querySelector('#optionText, [id="optionText"], [data-cy="option-text"], [class*="option-text"], [class*="OptionText"], .option-inner, .dnd-option-text');
      var explicitText = explicit ? ((explicit.innerText || explicit.textContent) || "").trim().replace(/\s+/g, " ") : "";
      if (explicitText) return explicitText;

      var imgAlt = el.querySelector && el.querySelector('img[alt]');
      var altText = imgAlt ? String(imgAlt.getAttribute('alt') || '').trim().replace(/\s+/g, ' ') : '';
      if (altText) return altText;

      var ownAria = el.getAttribute ? String(el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ') : '';
      if (ownAria) return ownAria;

      var ownData = el.getAttribute ? String(el.getAttribute('data-answer') || el.getAttribute('data-option') || el.getAttribute('data-text') || el.getAttribute('data-value') || '').trim().replace(/\s+/g, ' ') : '';
      if (ownData) return ownData;
    } catch (_) {}
    return dgTxt(el);
  }

  function dgNorm(v) {
    if (typeof norm === "function") return norm(v || "");
    return String(v || "")
      .toLowerCase()
      .replace(/[×✕✖x]/g, " x ")
      .replace(/[÷]/g, " / ")
      .replace(/[−–—]/g, " - ")
      .replace(/[·•]/g, " ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s/+.\-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function dgIsPlaceholderSelectText(txt) {
    var t = dgNorm(txt);
    return /^(select answer|select the answer|choose answer|choose option|selecione a resposta|selecionar resposta|selecione|selecionar|escolha|responder)$/.test(t);
  }

  function dgIsActionText(txt) {
    if (typeof isChoiceActionText === "function") return isChoiceActionText(txt);
    return /^(reset|reiniciar|submit|enviar|check|verificar|next|proxima|próxima|continue|continuar|skip|pular)$/i.test((txt || "").trim());
  }

  function dgIsDesktopWide() {
    var w = Math.max(window.innerWidth || 0, (document.documentElement && document.documentElement.clientWidth) || 0);
    return w >= 1100;
  }

  function dgForcedMode() {
    var raw = dgNorm(S && S.settings ? S.settings.detectionMode : "auto");
    if (!raw || /^(auto|automatico|automatic|automático|detectar|detect)$/.test(raw)) return "auto";
    if (/^(single|single_choice|choice|alternativa|alternativas|resposta|answer|answers|mcq|radio)$/.test(raw)) return "choice";
    if (/^(multiple|multi|multi_choice|multipla|múltipla|multiplas|múltiplas|multi answer|multi answers|msq|checkbox)$/.test(raw)) return "multi_choice";
    if (/^(drag|drag_drop|drag and drop|dragdrop|arrastar|arrastar soltar|arrastar e soltar|soltar|match|connect|ligar|conectar)$/.test(raw)) return "drag";
    if (/^(reorder|ordenar|sort|arrange)$/.test(raw)) return "drag";
    if (/^(blank|lacuna|lacunas|fill_blank|fill in the blank)$/.test(raw)) return "select";
    if (/multi.?select|multi.?dropdown|multi.?blank|varias lacunas|varias opcoes|várias opções/.test(raw)) return "multi_select";
    if (/dropdown|select|combobox|listbox|blank|lacuna/.test(raw)) return "select";
    if (/multi|multiple|multipla|múltipla|msq|checkbox|todas|todos|all answers/.test(raw) && /choice|option|alternativa|resposta|answer/.test(raw)) return "multi_choice";
    if (/single|radio|unica|única|choice|option|alternativa|resposta|answer|mcq/.test(raw)) return "choice";
    if (/drag|match|connect|ligar|conectar|ordenar|sort|arrange|drop/.test(raw)) return "drag";
    if (/equation|open|text|typing|digit|input|codigo|código|texto/.test(raw)) return "open";
    return "auto";
  }

  function dgHasForcedChoiceMode() {
    var mode = dgForcedMode();
    return mode === "choice" || mode === "multi_choice";
  }

  function dgHasForcedSelectMode() {
    var mode = dgForcedMode();
    return mode === "select" || mode === "multi_select";
  }

  function dgQuestionText(result) {
    var raw = "";
    if (result) raw = result.question || result.prompt || result.title || "";
    if (!raw) {
      var q = document.querySelector('h1, h2, [class*="question"], [class*="prompt"], [data-testid*="question"]');
      raw = dgTxt(q);
    }
    return raw || "";
  }

  function dgCountLikelyChoiceDescendants(el) {
    if (!el || !el.querySelectorAll) return 0;
    var seen = new Set();
    var count = 0;
    var isDesktop = dgIsDesktopWide();
    var minWidth = window.innerWidth * (isDesktop ? 0.16 : 0.38);
    var minTop = window.innerHeight * (isDesktop ? 0.22 : 0.34);
    var maxHeight = Math.min(window.innerHeight * (isDesktop ? 0.72 : 0.40), isDesktop ? 560 : 280);
    var nodes = [];
    try {
      nodes = Array.from(el.querySelectorAll('button, label, div, article, li, section, [role="button"], [role="radio"], [role="option"], [role="checkbox"], [class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"], [class*="choice"], [class*="Choice"], [class*="alternative"], [class*="Alternative"], [class*="card"], [class*="Card"], [data-testid], [data-cy]'));
    } catch (_) {}
    for (var i = 0; i < nodes.length; i++) {
      if (count >= 4) break;
      var node = nodes[i];
      if (!node || node === el || !node.getBoundingClientRect || node.closest('#qs-panel') || node.offsetParent === null) continue;
      var txt = dgChoiceText(node);
      if (!txt || txt.length > 320 || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) continue;
      var rect = node.getBoundingClientRect();
      if (rect.width < minWidth || rect.height < 34 || rect.height > maxHeight || rect.top < minTop) continue;
      var cls = ((node.className && String(node.className)) || '').toLowerCase();
      var role = ((node.getAttribute && node.getAttribute('role')) || '').toLowerCase();
      var style = window.getComputedStyle ? window.getComputedStyle(node) : null;
      var bg = style ? String(style.backgroundColor || '') : '';
      var bgImg = style ? String(style.backgroundImage || '') : '';
      var border = style ? String(style.borderColor || '') : '';
      var visual = role === 'button' || role === 'radio' || role === 'option' || role === 'checkbox'
        || /option|choice|answer|alternative|card|selectable|mcq|quiz-option/.test(cls)
        || (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent')
        || (bgImg && bgImg !== 'none')
        || (border && border !== 'rgba(0, 0, 0, 0)' && border !== 'transparent');
      if (!visual) continue;
      var key = dgNorm(txt) + '|' + Math.round(rect.top / 10) + '|' + Math.round(rect.left / 10) + '|' + Math.round(rect.width / 10);
      if (seen.has(key)) continue;
      seen.add(key);
      count++;
    }
    return count;
  }

  function dgGetQuestionAnchor(result) {
    var selectors = [
      '[data-testid*="question"]',
      '[class*="question"]',
      '[class*="prompt"]',
      'h1',
      'h2'
    ];
    var qText = dgNorm(dgQuestionText(result));
    var best = null;
    var bestScore = -999;

    function scoreAnchor(el) {
      if (!el || !el.getBoundingClientRect || !el.offsetParent || el.closest("#qs-panel")) return -999;
      var txt = dgNorm(dgTxt(el));
      if (!txt) return -999;
      var rect = el.getBoundingClientRect();
      var cls = ((el.className && String(el.className)) || "").toLowerCase();
      var interactiveCount = 0;
      var visualChoiceCount = 0;
      try {
        interactiveCount = el.querySelectorAll('button, [role="button"], [role="radio"], [role="option"], [role="checkbox"], input, select').length;
      } catch (_) {}
      try {
        visualChoiceCount = dgCountLikelyChoiceDescendants(el);
      } catch (_) {}
      var score = 0;
      if (!qText || txt === qText) score += 240;
      else if (txt.indexOf(qText) >= 0) score += 170;
      else if (qText.indexOf(txt) >= 0) score += 120;
      else return -999;
      if (visualChoiceCount >= 2 && rect.height >= Math.min(window.innerHeight * 0.30, 240)) return -999;
      if (/question|prompt/.test(cls)) score += 24;
      if (rect.height <= Math.min(window.innerHeight * 0.28, 220)) score += 70;
      else score -= Math.min(220, Math.round(rect.height - Math.min(window.innerHeight * 0.28, 220)));
      if (rect.width <= window.innerWidth * 0.94) score += 16;
      if (interactiveCount) score -= Math.min(260, interactiveCount * 48);
      if (visualChoiceCount) score -= Math.min(320, visualChoiceCount * 95);
      return score;
    }

    for (var s = 0; s < selectors.length; s++) {
      var nodes = [];
      try { nodes = Array.from(document.querySelectorAll(selectors[s])); } catch (_) {}
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var score = scoreAnchor(el);
        if (score > bestScore) {
          best = el;
          bestScore = score;
        }
      }
    }
    return bestScore > -200 ? best : null;
  }

  function dgRelevantQuestionRect(result) {
    var qAnchor = dgGetQuestionAnchor(result);
    var qRect = qAnchor && qAnchor.getBoundingClientRect ? qAnchor.getBoundingClientRect() : null;
    if (!qRect) return null;

    var qInteractive = 0;
    var qVisualChoices = 0;
    try {
      qInteractive = qAnchor.querySelectorAll('button, [role="button"], [role="radio"], [role="option"], [role="checkbox"], input, select').length;
    } catch (_) {}
    try {
      qVisualChoices = dgCountLikelyChoiceDescendants(qAnchor);
    } catch (_) {}

    if (qVisualChoices >= 2 || (qRect.height > Math.min(window.innerHeight * 0.34, 260) && qInteractive >= 2)) return null;
    if (qRect.height > Math.min(window.innerHeight * 0.44, 420)) return null;
    if (qRect.bottom > window.innerHeight * 0.78) return null;
    return qRect;
  }

  function dgIsMultiQuestion(result) {
    var forced = dgForcedMode();
    if (forced === "multi_choice" || forced === "multi_select") return true;
    if (forced === "choice" || forced === "select") return false;

    try {
      var nativeOptions = Array.from(document.querySelectorAll('.option.is-selectable, .option.is-msq, .question-options-layout .option, [class*="option"][class*="selectable"]')).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var rect = el.getBoundingClientRect();
        return rect.width > 36 && rect.height > 24;
      });
      if (nativeOptions.some(function(el) {
        var cls = ((el.className && String(el.className)) || '').toLowerCase();
        return /is-msq|checkbox|multiple/.test(cls) || !!(el.querySelector && el.querySelector('input[type="checkbox"], [role="checkbox"]'));
      })) {
        return true;
      }
    } catch (_) {}

    var txt = dgNorm(dgQuestionText(result));
    return /select all|choose all|more than one|multiple answers|multi select|marque todas|marque todos|selecione todas|selecione todos|mais de uma|mais de um|duas respostas|duas opcoes|duas opções/.test(txt);
  }

  function dgLooksLikeDragType(result) {
    var txt = dgNorm((result && (result.questionType || result.type || result.selectMode)) || "");
    return /match|connect|drag|drop|sort|reorder|arrange/.test(txt);
  }

  function dgHasRealDragSignals(result) {
    var arrays = [
      result && result.dragItems,
      result && result.dragElements,
      result && result.draggables,
      result && result.dropZones,
      result && result.dropTargets,
      result && result.targets,
      result && result.zones,
      result && result.matches,
      result && result.pairs,
    ];
    for (var i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i]) && arrays[i].length >= 2) return true;
    }

    var draggables = 0;
    var droppables = 0;
    try {
      draggables = Array.from(document.querySelectorAll('[draggable="true"], [data-rbd-draggable-id], [class*="drag"], [class*="Drag"]')).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var rect = el.getBoundingClientRect();
        return rect.width > 24 && rect.height > 24;
      }).length;
    } catch (_) {}
    try {
      droppables = Array.from(document.querySelectorAll('[aria-dropeffect], [data-rbd-droppable-id], [class*="dropzone"], [class*="drop-zone"], [class*="droppable"], [class*="target"], [class*="blank"]')).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var rect = el.getBoundingClientRect();
        return rect.width > 36 && rect.height > 24;
      }).length;
    } catch (_) {}
    return draggables >= 2 && droppables >= 2;
  }

  function dgLooksLikeChoiceContainer(el) {
    if (!el || !el.getBoundingClientRect) return false;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
    var bg = style ? String(style.backgroundColor || "") : "";
    var bgImg = style ? String(style.backgroundImage || "") : "";
    var inlineStyle = ((el.getAttribute && el.getAttribute("style")) || "").toLowerCase();
    if (/question|prompt|toolbar|header|footer|modal|dialog|drawer|sheet|menu|dropdown|select|combobox|listbox|toast|solver|config|chat|logs/.test(cls)) return false;
    if (/radio|option|button|checkbox/.test(role)) return true;
    if (typeof el.onclick === "function") return true;
    if (el.tagName === "BUTTON" || el.tagName === "LABEL") return true;
    if (/option|choice|answer|alternative|alternativa|mcq|quiz|card/.test(cls)) return true;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent" && bg !== "rgb(0, 0, 0)" && bg !== "rgb(255, 255, 255)") return true;
    if (bgImg && bgImg !== "none") return true;
    if (/background/.test(inlineStyle)) return true;
    if (style && (style.cursor === "pointer" || style.cursor === "grab")) return true;
    if (el.getAttribute && (el.getAttribute("data-testid") || el.getAttribute("data-answer") || el.getAttribute("data-option") || el.getAttribute("data-index") || el.getAttribute("data-id"))) return true;
    return false;
  }

  function dgIsChoiceGroupShell(el) {
    if (!el || !el.getBoundingClientRect) return false;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var rect = el.getBoundingClientRect();
    var nestedChoices = 0;
    try {
      nestedChoices = el.querySelectorAll('.option.is-selectable, .option.is-msq, [role="radio"], [role="option"], [role="checkbox"], [class*="answer-option"], [class*="AnswerOption"], [class*="mcq-option"], [class*="quiz-option"], #optionText, [id="optionText"], .option-inner, .dnd-option-text').length;
    } catch (_) {}
    if (nestedChoices < 2) return false;
    if (/question-options-layout|resizeable-question-container|question-container|question-card|question-body|prompt-container/.test(cls)) return true;
    if (rect.width >= window.innerWidth * 0.72 && rect.height >= Math.min(window.innerHeight * 0.26, 220)) return true;
    return false;
  }

  function dgIsNativeChoiceRoot(el) {
    if (!el || !el.getBoundingClientRect) return false;
    if (dgIsChoiceGroupShell(el)) return false;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var testId = ((el.getAttribute && (el.getAttribute("data-testid") || el.getAttribute("data-cy") || el.getAttribute("data-testid"))) || "").toLowerCase();
    return /(^|\s)(option|is-selectable|is-msq)(\s|$)|option-inner|answer-option|mcq-option|quiz-option/.test(cls)
      || /option|choice|answer|alternative|alternativa/.test(testId)
      || role === "radio"
      || role === "option"
      || role === "checkbox";
  }

  function dgChoiceScore(el, result) {
    if (!el || !el.getBoundingClientRect) return -999;
    var txt = dgChoiceText(el);
    var rect = el.getBoundingClientRect();
    if (dgIsChoiceGroupShell(el)) return -999;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
    var bg = style ? String(style.backgroundColor || "") : "";
    var bgImg = style ? String(style.backgroundImage || "") : "";
    var inlineStyle = ((el.getAttribute && el.getAttribute("style")) || "").toLowerCase();
    var radius = style ? parseFloat(style.borderRadius || "0") || 0 : 0;
    var isDesktop = dgIsDesktopWide();
    var approxLines = Math.max(1, Math.round(rect.height / 24));
    var score = 0;
    if (!txt || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return -999;
    if (txt.length > 300) score -= 120;
    else if (txt.length > 160) score -= 30;
    else score += 60;
    if (rect.width >= window.innerWidth * (isDesktop ? 0.14 : 0.36)) score += 26;
    if (rect.width >= Math.min(window.innerWidth * 0.45, 200)) score += 60;
    if (isDesktop && rect.width >= window.innerWidth * 0.32) score += 28;
    if (rect.height >= 36 && rect.height <= 640) score += 40;
    if (isDesktop && rect.height > 300 && rect.height <= 760) score += 24;
    if (isDesktop && approxLines <= 18) score += 16;
    if (rect.top > window.innerHeight * 0.15) score += 18;
    if (role === "button" || role === "radio" || role === "option" || role === "checkbox") score += 36;
    if (el.tagName === "BUTTON" || el.tagName === "LABEL") score += 28;
    if (/option|choice|answer|alternative|alternativa|radio|checkbox|card/.test(cls)) score += 40;
    if (/is-selectable|is-msq|option-inner|answer-option|mcq-option|quiz-option/.test(cls)) score += 85;
    if (dgIsNativeChoiceRoot(el)) score += 120;
    if (el.querySelector && el.querySelector('#optionText, [id="optionText"], annotation[encoding="application/x-tex"], .option-inner, .dnd-option-text')) score += 70;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      var isNeutral = /^rgb\((0, 0, 0|255, 255, 255|24[0-9], 24[0-9], 24[0-9]|25[0-5], 25[0-5], 25[0-5])\)$/.test(bg);
      score += isNeutral ? 20 : 55;
    }
    if (bgImg && bgImg !== "none") score += 30;
    if (/background/.test(inlineStyle)) score += 35;
    if (radius >= 6) score += 12;
    if (style && style.cursor === "pointer") score += 30;
    if (/question|prompt/.test(cls)) score -= 80;
    if (/selected|active|correct|incorrect/.test(cls)) score += 4;
    if (rect.width >= window.innerWidth * 0.7 && rect.height >= 60) score += 50;
    var q = dgNorm(dgQuestionText(result));
    if (q && dgNorm(txt) === q) score -= 140;
    return score;
  }

  function dgPromoteChoiceRoot(el, result) {
    if (!el) return el;
    if (dgIsNativeChoiceRoot(el)) return el;
    var best = el;
    var bestScore = dgChoiceScore(el, result);
    var childText = dgNorm(dgTxt(el));
    var childLen = childText.length;
    var cur = el;
    for (var depth = 0; depth < 5 && cur && cur.parentElement; depth++) {
      cur = cur.parentElement;
      if (!cur || cur === document.body || cur === document.documentElement || cur.closest("#qs-panel")) break;
      if (dgIsChoiceGroupShell(cur)) break;
      var rect = cur.getBoundingClientRect ? cur.getBoundingClientRect() : null;
      if (!rect) continue;
      if (rect.width < 90 || rect.height < 28 || rect.height > (dgIsDesktopWide() ? Math.min(window.innerHeight * 0.72, 760) : Math.min(window.innerHeight * 0.45, 360))) continue;
      var txt = dgNorm(dgTxt(cur));
      if (!txt) continue;
      if (childText && txt !== childText && txt.indexOf(childText) < 0) continue;
      if (childLen && txt.length > childLen * 1.35 + 28) continue;
      var siblingChoiceBlocks = 0;
      try {
        siblingChoiceBlocks = Array.from(cur.children || []).filter(function(kid) {
          if (!kid || kid === best || (kid.contains && kid.contains(best))) return false;
          if (!kid.getBoundingClientRect) return false;
          var kidRect = kid.getBoundingClientRect();
          var kidTxt = dgTxt(kid);
          if (!kidTxt || kidTxt.length > 320) return false;
          return kidRect.width >= rect.width * 0.42 && kidRect.height >= 34;
        }).length;
      } catch (_) {}
      if (siblingChoiceBlocks >= 2) break;
      var score = dgChoiceScore(cur, result);
      if (score > bestScore + 18) {
        best = cur;
        bestScore = score;
      }
    }
    return best;
  }

  function dgFindVisualChoiceRoot(el, result) {
    if (!el) return null;
    var baseText = dgNorm(dgChoiceText(el) || dgTxt(el));
    var cur = el;
    for (var depth = 0; depth < 5 && cur; depth++) {
      if (!cur || cur === document.body || cur === document.documentElement || cur.closest('#qs-panel')) break;
      if (dgIsChoiceGroupShell(cur)) break;
      var rect = cur.getBoundingClientRect ? cur.getBoundingClientRect() : null;
      if (!rect || rect.width < 80 || rect.height < 28 || rect.height > Math.min(window.innerHeight * (dgIsDesktopWide() ? 0.72 : 0.45), dgIsDesktopWide() ? 560 : 360)) {
        cur = cur.parentElement;
        continue;
      }
      var txt = dgNorm(dgChoiceText(cur));
      if (txt && (!baseText || txt === baseText || txt.indexOf(baseText) >= 0)) {
        if (dgIsNativeChoiceRoot(cur) || dgLooksLikeChoiceContainer(cur) || dgChoiceScore(cur, result) >= 72) return cur;
      }
      cur = cur.parentElement;
    }
    return null;
  }

  function dgNativeChoiceSelectors() {
    return [
      '.option.is-selectable', '.option.is-msq', '.question-options-layout .option', '.question-options-layout .option.is-selectable',
      '[class*="question-options"] .option', '[class*="question-options"] [class*="option"]',
      '[data-cy="option"]', '[data-testid="option"]', '[data-cy*="option"]', '[data-testid*="option"]',
      '[class*="answer-option"]', '[class*="AnswerOption"]', '[class*="option-inner"]', '[class*="OptionInner"]',
      '[class*="mcq-option"]', '[class*="quiz-option"]', '[role="radio"]', '[role="option"]', '[role="checkbox"]',
      'label[class*="option"]', 'label[class*="Option"]', 'label[class*="answer"]', 'label[class*="Answer"]'
    ];
  }

  function dgCollectNativeChoiceRoots(result) {
    var forcedChoice = dgHasForcedChoiceMode();
    var qRect = dgRelevantQuestionRect(result);
    var seen = new Set();
    var out = [];
    var nativeSelectorText = dgNativeChoiceSelectors().join(', ');
    var nodes = [];
    try {
      nodes = Array.from(document.querySelectorAll(nativeSelectorText));
    } catch (_) {}

    nodes.forEach(function(node) {
      if (!node || !node.getBoundingClientRect || node.closest('#qs-panel')) return;
      var root = node;
      try {
        if (node.closest) {
          root = node.closest('.option.is-selectable, .option.is-msq, .question-options-layout .option, [class*="question-options"] .option, [class*="answer-option"], [class*="AnswerOption"], [class*="mcq-option"], [class*="quiz-option"], [role="radio"], [role="option"], [role="checkbox"], label, button') || node;
        }
      } catch (_) {}
      root = dgFindVisualChoiceRoot(root, result) || dgPromoteChoiceRoot(root, result);
      if (!root || !root.getBoundingClientRect || root.closest('#qs-panel') || dgIsChoiceGroupShell(root)) return;

      var rect = root.getBoundingClientRect();
      var txt = dgChoiceText(root);
      if (!txt || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;
      if (qRect && !forcedChoice && rect.top < qRect.bottom - 40) return;
      if (rect.width < window.innerWidth * (dgIsDesktopWide() ? 0.12 : 0.34)) return;
      if (rect.height < 30 || rect.height > (dgIsDesktopWide() ? 760 : 320)) return;

      var hasNativeMarker = dgIsNativeChoiceRoot(root) || !!(root.querySelector && root.querySelector('#optionText, [id="optionText"], [data-cy="option-text"], [data-testid="option-text"], [class*="option-text"], [class*="OptionText"], .option-inner, .dnd-option-text, annotation[encoding="application/x-tex"]'));
      if (!hasNativeMarker) return;

      var score = dgChoiceScore(root, result);
      if (score < (forcedChoice ? 12 : 18)) return;

      var key = dgNorm(txt) + '|' + Math.round(rect.top / 6) + '|' + Math.round(rect.left / 6) + '|' + Math.round(rect.width / 6);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(root);
    });

    return out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });
  }

  function dgCollectStructuredGridOptions(result) {
    var nativeRoots = dgCollectNativeChoiceRoots(result);
    if (nativeRoots.length >= 2) return nativeRoots;
    if (!dgHasForcedChoiceMode() && dgLooksLikeDragType(result) && dgHasRealDragSignals(result)) return [];
    var isDesktop = dgIsDesktopWide();
    var qRect = dgRelevantQuestionRect(result);
    var containers = [];
    var nativeSelectorText = dgNativeChoiceSelectors().join(', ');
    try {
      containers = Array.from(document.querySelectorAll('.question-options-layout, .options-grid, .options-container, [class*="question-options"], [class*="options-grid"], [class*="OptionsGrid"], [class*="answer-grid"], [class*="AnswerGrid"], [class*="choices-grid"], [class*="ChoicesGrid"], [class*="answers"], [class*="Answers"], [class*="choices"], [class*="Choices"], [class*="alternatives"], [class*="Alternatives"]'));
    } catch (_) {}

    function looksLikeGridCard(el) {
      if (!el || !el.getBoundingClientRect || el.closest('#qs-panel') || dgIsChoiceGroupShell(el)) return false;
      var rect = el.getBoundingClientRect();
      var txt = dgChoiceText(el);
      if (!txt || txt.length > (isDesktop ? 420 : 260) || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return false;
      if (rect.width < window.innerWidth * (isDesktop ? 0.12 : 0.34)) return false;
      if (rect.height < 40 || rect.height > (isDesktop ? 760 : 320)) return false;
      if (qRect && !dgHasForcedChoiceMode() && rect.top < qRect.bottom - 36) return false;
      var cls = ((el.className && String(el.className)) || '').toLowerCase();
      var role = ((el.getAttribute && el.getAttribute('role')) || '').toLowerCase();
      if (/drag|drop|droppable|draggable|blank|target|match|connect/.test(cls) || role === 'textbox') return false;
      var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
      var bg = style ? String(style.backgroundColor || '') : '';
      var bgImg = style ? String(style.backgroundImage || '') : '';
      var border = style ? String(style.borderColor || '') : '';
      return dgIsNativeChoiceRoot(el)
        || dgLooksLikeChoiceContainer(el)
        || !!(bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent')
        || !!(bgImg && bgImg !== 'none')
        || !!(border && border !== 'rgba(0, 0, 0, 0)');
    }

    for (var ci = 0; ci < containers.length; ci++) {
      var container = containers[ci];
      if (!container || container.closest('#qs-panel')) continue;
      var pool = [];
      try {
        pool = Array.from(container.querySelectorAll(nativeSelectorText));
      } catch (_) {}
      if (!pool.length) {
        pool = Array.from(container.querySelectorAll('button, label, div, article, li, section, [role="button"], [role="radio"], [role="option"], [role="checkbox"], [class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"]'));
      }
      var children = pool.map(function(child) {
        return dgFindVisualChoiceRoot(child, result) || dgPromoteChoiceRoot(child, result);
      }).filter(looksLikeGridCard);
      if (children.length < 2) continue;

      var seen = new Set();
      var normalized = children.filter(function(el) {
        var rect = el.getBoundingClientRect();
        var key = dgNorm(dgChoiceText(el)) + '|' + Math.round(rect.top / 8) + '|' + Math.round(rect.left / 8);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      if (normalized.length < 2) continue;

      var avgWidth = normalized.reduce(function(sum, el) { return sum + el.getBoundingClientRect().width; }, 0) / normalized.length;
      var similar = normalized.filter(function(el) {
        return Math.abs(el.getBoundingClientRect().width - avgWidth) <= Math.max(140, avgWidth * 0.72);
      });
      if (similar.length >= 2) {
        return similar.sort(function(a, b) {
          var ar = a.getBoundingClientRect();
          var br = b.getBoundingClientRect();
          return ar.top - br.top || ar.left - br.left;
        }).slice(0, 8);
      }
    }

    return [];
  }

  function dgCollectViewportChoiceCards(result) {
    if (!dgHasForcedChoiceMode() && (dgLooksLikeDragType(result) || dgHasRealDragSignals(result))) return [];
    var isDesktop = dgIsDesktopWide();
    var qRect = dgRelevantQuestionRect(result);
    var pool = [];
    try {
      pool = Array.from(document.querySelectorAll('button, label, div, article, li, section'));
    } catch (_) {}

    var seen = new Set();
    var out = [];

    function hasCardVisual(el) {
      if (!el) return false;
      var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
      var bg = style ? String(style.backgroundColor || '') : '';
      var bgImg = style ? String(style.backgroundImage || '') : '';
      var border = style ? String(style.borderColor || '') : '';
      var shadow = style ? String(style.boxShadow || '') : '';
      return (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent')
        || (bgImg && bgImg !== 'none')
        || (border && border !== 'rgba(0, 0, 0, 0)' && border !== 'transparent')
        || (shadow && shadow !== 'none');
    }

    pool.forEach(function(node) {
      if (!node || !node.getBoundingClientRect || node.closest('#qs-panel') || node.offsetParent === null) return;
      var el = dgFindVisualChoiceRoot(node, result) || dgPromoteChoiceRoot(node, result);
      if (!el || !el.getBoundingClientRect || el.closest('#qs-panel') || dgIsChoiceGroupShell(el)) return;

      var rect = el.getBoundingClientRect();
      var txt = dgChoiceText(el);
      if (!txt || txt.length > (isDesktop ? 120 : 90) || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;
      if (rect.width < window.innerWidth * (isDesktop ? 0.18 : 0.40)) return;
      if (rect.height < 90 || rect.height > (isDesktop ? 560 : 320)) return;
      if (rect.top < window.innerHeight * (isDesktop ? 0.42 : 0.40)) return;
      if (qRect && rect.top < qRect.bottom - 8) return;
      if (!dgLooksLikeChoiceContainer(el) && !dgIsNativeChoiceRoot(el) && !hasCardVisual(el)) return;

      var score = dgChoiceScore(el, result);
      if (score < 110) return;

      var key = dgNorm(txt) + '|' + Math.round(rect.top / 8) + '|' + Math.round(rect.left / 8) + '|' + Math.round(rect.width / 8);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(el);
    });

    if (out.length < 2) return [];

    out = out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });

    var avgWidth = out.reduce(function(sum, el) { return sum + el.getBoundingClientRect().width; }, 0) / out.length;
    var avgHeight = out.reduce(function(sum, el) { return sum + el.getBoundingClientRect().height; }, 0) / out.length;
    var normalized = out.filter(function(el) {
      var rect = el.getBoundingClientRect();
      return Math.abs(rect.width - avgWidth) <= Math.max(160, avgWidth * 0.72)
        && Math.abs(rect.height - avgHeight) <= Math.max(140, avgHeight * 0.65);
    });

    return (normalized.length >= 2 ? normalized : out).slice(0, 8);
  }

  function dgCollectLegacyChoiceOptions(result) {
    var seen = new Set();
    var out = [];

    function push(el) {
      if (!el) return;
      var promoted = dgPromoteChoiceRoot(el, result);
      if (!promoted || !promoted.getBoundingClientRect || promoted.closest("#qs-panel")) return;
      if (dgIsChoiceGroupShell(promoted)) return;
      var rect = promoted.getBoundingClientRect();
      var txt = dgChoiceText(promoted);
      if (!txt || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;
      if (rect.width < 40 || rect.height < 24 || rect.height > (dgIsDesktopWide() ? Math.min(window.innerHeight * 0.84, 760) : Math.min(window.innerHeight * 0.38, 320))) return;
      var key = dgNorm(txt) + "|" + Math.round(rect.top / 8) + "|" + Math.round(rect.left / 8) + "|" + Math.round(rect.width / 8);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(promoted);
    }

    var optSelectors = [
      '.option.is-selectable','[data-testid="option"]','[data-testid="answer-option"]',
      '[class*="OptionCard"]','[class*="option-card"]','.options-container .option',
      '[class*="MCQOption"]','[class*="mcq-option"]','.option-item','.answer-option',
      'button[class*="option"]','[role="option"]','[class*="AnswerOption"]','[class*="answerOption"]',
      '[class*="choice"]','[class*="Choice"]','[class*="alternative"]','[class*="Alternative"]',
      '[class*="answer-choice"]','[class*="AnswerChoice"]','[class*="quiz-option"]','[class*="QuizOption"]',
      '[class*="response-option"]','[class*="ResponseOption"]','[role="radio"]','[role="checkbox"]',
      'label[class*="option"]','label[class*="Option"]','label[class*="answer"]','label[class*="Answer"]'
    ];

    for (var si = 0; si < optSelectors.length; si++) {
      try {
        var found = document.querySelectorAll(optSelectors[si]);
        if (found.length >= 2) {
          Array.from(found).forEach(function(el) {
            if (el && el.offsetParent !== null && !el.closest("#qs-panel")) push(el);
          });
          if (out.length >= 2) break;
        }
      } catch (_) {}
    }

    if (out.length < 2) {
      var containerSels = ['[class*="options"]', '[class*="Options"]', '[class*="choices"]', '[class*="Choices"]', '[class*="answers"]', '[class*="Answers"]'];
      for (var ci = 0; ci < containerSels.length; ci++) {
        try {
          var containers = document.querySelectorAll(containerSels[ci]);
          for (var cj = 0; cj < containers.length; cj++) {
            var container = containers[cj];
            if (!container || container.closest("#qs-panel")) continue;
            var kids = container.querySelectorAll('button, [role="button"], [role="option"], [role="radio"], [role="checkbox"], label, [class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"]');
            Array.from(kids).forEach(function(el) {
              if (el && el.offsetParent !== null && !el.closest("#qs-panel") && dgChoiceText(el)) push(el);
            });
            if (out.length >= 2) break;
          }
          if (out.length >= 2) break;
        } catch (_) {}
      }
    }

    if (out.length < 2) {
      var mainArea = document.querySelector('main, [class*="game"], [class*="Game"], [class*="quiz"], [class*="Quiz"]') || document.body;
      if (mainArea) {
        var blockCandidates = Array.from(mainArea.querySelectorAll('button, label, div, article, li, section')).filter(function(el) {
          if (!el || !el.getBoundingClientRect || !el.offsetParent || el.closest("#qs-panel")) return false;
          var txt = dgChoiceText(el);
          if (!txt || txt.length < 1 || txt.length > 120 || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return false;
          var rect = el.getBoundingClientRect();
          var isDesktop = dgIsDesktopWide();
          if (rect.width < window.innerWidth * (isDesktop ? 0.14 : 0.40) || rect.height < 36 || rect.height > (isDesktop ? Math.min(window.innerHeight * 0.84, 760) : 220)) return false;
          if (rect.top < window.innerHeight * (isDesktop ? 0.18 : 0.38)) return false;
          var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
          var bg = style ? String(style.backgroundColor || "") : "";
          var bgImg = style ? String(style.backgroundImage || "") : "";
          var border = style ? String(style.borderColor || "") : "";
          var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
          return role === 'button' || role === 'radio' || role === 'option' || role === 'checkbox' || el.tagName === 'BUTTON' || el.tagName === 'LABEL' || (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') || bgImg !== 'none' || (border && border !== 'rgba(0, 0, 0, 0)');
        });

        if (blockCandidates.length >= 2) {
          var avgWidth = blockCandidates.reduce(function(sum, el) { return sum + el.getBoundingClientRect().width; }, 0) / blockCandidates.length;
          blockCandidates.filter(function(el) {
            return Math.abs(el.getBoundingClientRect().width - avgWidth) < Math.max(40, avgWidth * 0.24);
          }).slice(0, 8).forEach(push);
        }
      }
    }

    return out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });
  }

  function dgCollectChoiceOptions(result) {
    var nativeChoiceRoots = dgCollectNativeChoiceRoots(result);
    if (nativeChoiceRoots.length >= 2) return nativeChoiceRoots;
    if (!dgHasForcedChoiceMode() && dgLooksLikeDragType(result) && dgHasRealDragSignals(result)) return [];
    var seen = new Set();
    var out = [];
    var forcedChoice = dgHasForcedChoiceMode();
    var qRect = dgRelevantQuestionRect(result);
    var nativeSelectorText = dgNativeChoiceSelectors().join(', ');
    var structuredGrid = dgCollectStructuredGridOptions(result);
    if (structuredGrid.length >= 2) return structuredGrid;
    var viewportCards = dgCollectViewportChoiceCards(result);
    if (viewportCards.length >= 2) return viewportCards;
    var nativeNodes = [];
    var seededNodes = [];
    var textSeedNodes = [];
    try {
      seededNodes = Array.isArray(result && result.elements) ? result.elements.filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var txt = dgChoiceText(el);
        return !!txt && !dgIsActionText(txt) && !dgIsPlaceholderSelectText(txt);
      }) : [];
    } catch (_) {}
    try {
      textSeedNodes = Array.from(document.querySelectorAll('#optionText, [id="optionText"], [data-cy="option-text"], [data-testid="option-text"], [class*="option-text"], [class*="OptionText"], .option-inner, .dnd-option-text, annotation[encoding="application/x-tex"]'));
    } catch (_) {}
    try {
      nativeNodes = Array.from(document.querySelectorAll(nativeSelectorText));
    } catch (_) {}
    var nodes = seededNodes.concat(textSeedNodes).concat(nativeNodes).concat(Array.from(document.querySelectorAll('button, label, div, article, li, span, section, [role="button"], [role="radio"], [role="option"], [role="checkbox"], [class*="option"], [class*="Option"], [class*="choice"], [class*="Choice"], [class*="answer"], [class*="Answer"], [class*="alternative"], [class*="Alternative"], [class*="card"], [class*="Card"], [data-testid], [data-answer], [data-option], [data-index]')));

    function toClickable(el) {
      if (!el) return null;
      if (el.closest) {
        var nativeRoot = el.closest('.option.is-selectable, .option.is-msq, .question-options-layout .option, [class*="question-options"] .option, [class*="answer-option"], [class*="AnswerOption"], [class*="mcq-option"], [class*="quiz-option"], [role="radio"], [role="option"], [role="checkbox"], label, button');
        if (nativeRoot && nativeRoot !== document.body && nativeRoot !== document.documentElement && !nativeRoot.closest('#qs-panel')) {
          return dgPromoteChoiceRoot(nativeRoot, result);
        }
      }
      if (el.closest) {
        var semanticRoot = el.closest('[class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"], [class*="choice"], [class*="Choice"], [class*="alternative"], [class*="Alternative"], [class*="mcq"], [class*="quiz-option"], [data-testid*="option"], [data-cy*="option"]');
        if (semanticRoot && semanticRoot !== document.body && semanticRoot !== document.documentElement && !semanticRoot.closest('#qs-panel') && !dgIsChoiceGroupShell(semanticRoot)) {
          return dgPromoteChoiceRoot(semanticRoot, result);
        }
      }
      var visualRoot = dgFindVisualChoiceRoot(el, result);
      if (visualRoot) return visualRoot;
      if (el.closest) {
        var root = el.closest('button, label, [role="button"], [role="radio"], [role="option"], [role="checkbox"]');
        if (root && root !== document.body && root !== document.documentElement) return dgPromoteChoiceRoot(root, result);
      }
      return dgPromoteChoiceRoot(el, result);
    }

    nodes.forEach(function(node) {
      var el = toClickable(node);
      if (!el || el.closest("#qs-panel")) return;
      var elRect = el.getBoundingClientRect ? el.getBoundingClientRect() : null;
      if (!el.offsetParent && !(elRect && elRect.width > 0 && elRect.height > 0)) return;
      var txt = dgChoiceText(el);
      var rect = elRect || { top: 0, left: 0, width: 0, height: 0, bottom: 0 };
      if (qRect && !forcedChoice) {
        if (rect.top < qRect.bottom - 24) return;
        if (Math.abs((rect.left + rect.width / 2) - (window.innerWidth / 2)) > window.innerWidth * 0.50) return;
      }
      var isNativeChoice = dgIsNativeChoiceRoot(el);
      var isLargeColoredBlock = rect.width >= (dgIsDesktopWide() ? window.innerWidth * 0.14 : window.innerWidth * 0.38) && rect.height >= 36 && txt.length <= (dgIsDesktopWide() ? 420 : 300);
      if (!dgLooksLikeChoiceContainer(el) && !isLargeColoredBlock && !isNativeChoice) return;
      var score = dgChoiceScore(el, result);
      if (score < (isNativeChoice || forcedChoice ? 24 : 48)) return;
      var key = dgNorm(txt) + "|" + Math.round(rect.top / 6) + "|" + Math.round(rect.left / 6) + "|" + Math.round(rect.width / 6);
      if (seen.has(key)) return;

      for (var i = 0; i < out.length; i++) {
        var prev = out[i];
        var prevRect = prev.getBoundingClientRect();
        var sameText = dgNorm(dgChoiceText(prev)) === dgNorm(txt);
        var sameSpot = Math.abs(prevRect.top - rect.top) < 20 && Math.abs(prevRect.left - rect.left) < 20;
        var nested = prev.contains(el) || el.contains(prev);
        if (sameText && (sameSpot || nested)) {
          if (dgChoiceScore(el, result) > dgChoiceScore(prev, result)) out[i] = el;
          seen.add(key);
          return;
        }
      }

      seen.add(key);
      out.push(el);
    });

    out = out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });

    if (out.length > 8) {
      out = out.filter(function(el) {
        var rect = el.getBoundingClientRect();
        return dgIsNativeChoiceRoot(el) || (rect.width >= window.innerWidth * (dgIsDesktopWide() ? 0.12 : 0.34) && rect.height >= 34);
      });
    }

    if (out.length < 2 && seededNodes.length >= 2) {
      out = seededNodes.map(function(el) { return toClickable(el); }).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var txt = dgChoiceText(el);
        return !!txt && !dgIsActionText(txt) && !dgIsPlaceholderSelectText(txt);
      }).sort(function(a, b) {
        var ar = a.getBoundingClientRect();
        var br = b.getBoundingClientRect();
        return ar.top - br.top || ar.left - br.left;
      });
    }

    if (out.length < 2) {
      var legacyOut = dgCollectLegacyChoiceOptions(result);
      if (legacyOut.length >= 2) out = legacyOut;
    }

    return out;
  }

  function dgScoreTrigger(el) {
    if (!el || !el.getBoundingClientRect) return -999;
    var txt = dgTxt(el);
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var popup = ((el.getAttribute && el.getAttribute("aria-haspopup")) || "").toLowerCase();
    var rect = el.getBoundingClientRect();
    var score = 0;
    if (dgIsPlaceholderSelectText(txt)) score += 280;
    if (popup === "listbox" || role === "combobox") score += 120;
    if (el.tagName === "BUTTON") score += 18;
    if (el.tagName === "SELECT") score += 70;
    if (rect.width >= 110 && rect.height >= 30 && rect.height <= 96) score += 20;
    if (txt.length > 80) score -= 40;
    return score;
  }

  function dgCollectSelectTriggers() {
    var seen = new Set();
    var out = [];
    var pool = Array.from(document.querySelectorAll('button.options-dropdown, button[aria-haspopup="listbox"], [role="combobox"], [aria-haspopup="listbox"], select, [class*="select"], [class*="Select"], [class*="dropdown"], [class*="Dropdown"]'));

    function push(el) {
      if (!el || !el.offsetParent || el.closest("#qs-panel")) return;
      var txt = dgTxt(el);
      var rect = el.getBoundingClientRect();
      if (!txt || dgIsActionText(txt)) return;
      if (rect.width < 100 || rect.height < 28 || rect.height > 96) return;

      var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
      var popup = ((el.getAttribute && el.getAttribute("aria-haspopup")) || "").toLowerCase();
      var interactive = el.tagName === "SELECT" || el.tagName === "BUTTON" || popup === "listbox" || role === "combobox";
      if (!interactive && !dgIsPlaceholderSelectText(txt)) return;

      var key = dgNorm(txt) + "|" + Math.round(rect.top / 8) + "|" + Math.round(rect.left / 8) + "|" + Math.round(rect.width / 8);
      if (seen.has(key)) return;

      for (var i = 0; i < out.length; i++) {
        var ex = out[i];
        var exTxt = dgTxt(ex);
        var exRect = ex.getBoundingClientRect();
        var sameText = dgNorm(exTxt) === dgNorm(txt);
        var nested = ex.contains(el) || el.contains(ex);
        var sameSpot = Math.abs(exRect.top - rect.top) < 18 && Math.abs(exRect.left - rect.left) < 18;
        if (sameText && (nested || sameSpot)) {
          if (dgScoreTrigger(el) > dgScoreTrigger(ex)) out[i] = el;
          seen.add(key);
          return;
        }
      }

      seen.add(key);
      out.push(el);
    }

    pool.forEach(push);
    return out.sort(function(a, b) {
      return dgScoreTrigger(b) - dgScoreTrigger(a) || a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });
  }

  function dgGetMenuItems(trigger) {
    var out = [];
    var seen = new Set();
    var trigRect = trigger && trigger.getBoundingClientRect ? trigger.getBoundingClientRect() : null;
    var selectors = [
      '[role="option"]','[role="menuitem"]','[role="menuitemradio"]','[role="menuitemcheckbox"]','li[role="option"]',
      '[class*="dropdown"] [class*="option"]','[class*="Dropdown"] [class*="option"]','[class*="menu"] [class*="item"]','[class*="Menu"] [class*="item"]',
      '[class*="popup"] [class*="option"]','[class*="Popup"] [class*="option"]','[class*="listbox"] > *','[class*="Listbox"] > *',
      '[data-radix-popper-content-wrapper] [role="option"]','[data-radix-popper-content-wrapper] [data-value]','[data-value]'
    ];

    function add(el) {
      if (!el || !el.offsetParent || el.closest("#qs-panel")) return;
      if (trigger && (el === trigger || (trigger.contains && trigger.contains(el)) || (el.contains && el.contains(trigger)))) return;

      var txt = dgTxt(el);
      if (!txt || txt.length > 80 || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;

      var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
      var popup = ((el.getAttribute && el.getAttribute("aria-haspopup")) || "").toLowerCase();
      if (popup === "listbox" || role === "combobox") return;

      var rect = el.getBoundingClientRect();
      if (rect.width < 40 || rect.height < 20 || rect.height > 96) return;
      if (trigRect) {
        var center = rect.left + rect.width / 2;
        var trigCenter = trigRect.left + trigRect.width / 2;
        if (Math.abs(center - trigCenter) > Math.max(trigRect.width * 1.4, 220)) return;
        if (rect.top < trigRect.top - 64 || rect.top > trigRect.bottom + Math.min(window.innerHeight * 0.82, 620)) return;
      }

      var key = dgNorm(txt) + "|" + Math.round(rect.top / 6) + "|" + Math.round(rect.left / 6);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(el);
    }

    selectors.forEach(function(sel) {
      try { document.querySelectorAll(sel).forEach(add); } catch (_) {}
    });

    return out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });
  }

  function dgUniqueOptions(items) {
    var seen = new Set();
    return (items || []).map(function(el) { return dgTxt(el); }).filter(function(txt) {
      var key = dgNorm(txt);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function dgShouldOverrideResult(result, triggers) {
    if (!triggers.length) return false;
    if (!result || !result.questionType) return true;
    if (result.questionType === "unknown" || result.questionType === "dropdown") return true;
    var opts = Array.isArray(result.options) ? result.options : [];
    if (!opts.length && triggers.length > 0) return true;
    if (opts.some(dgIsPlaceholderSelectText)) return true;
    if (opts.length > 1 && opts.every(function(opt) { return dgNorm(opt) === dgNorm(opts[0]); })) return true;
    if ((result.fillBlanks || []).length && triggers.length !== (result.fillBlanks || []).length) return true;
    return false;
  }

  var __dgExtract = extractPageContent;
  extractPageContent = function() {
    var result = __dgExtract.apply(this, arguments) || {};
    try {
      var forcedMode = dgForcedMode();
      if (forcedMode === "drag" && (dgHasRealDragSignals(result) || dgLooksLikeDragType(result))) {
        result.questionType = /match|connect/.test(dgNorm((result && (result.questionType || result.type || "")) || "")) ? "match" : "drag";
        result.type = result.questionType;
        result.selectMode = "drag";
        result.dynamicSelect = false;
        log("DRAG FORCE v2.6.0: type=" + result.questionType, "inf");
        return result;
      }
      var triggers = dgCollectSelectTriggers();
      if (triggers.length) {
        var placeholderTriggers = triggers.filter(function(el) { return dgIsPlaceholderSelectText(dgTxt(el)); });
        var targetTriggers = placeholderTriggers.length ? placeholderTriggers : triggers;
        var menuItems = dgGetMenuItems(targetTriggers[0]);
        var options = dgUniqueOptions(menuItems);

        if (dgHasForcedSelectMode() || dgShouldOverrideResult(result, targetTriggers) || targetTriggers.length > 1) {
          var forcedMultiSelect = forcedMode === "multi_select";
          result.questionType = forcedMultiSelect || targetTriggers.length > 1 ? "multi" : "single";
          result.type = result.questionType;
          result.selectMode = forcedMultiSelect || targetTriggers.length > 1 ? "multi_select" : "single_select";
          result.dynamicSelect = true;
          result.inputElement = targetTriggers[0];
          result.fillBlanks = targetTriggers.slice();
          result.elements = menuItems.slice();
          result.options = options.slice();
          result.isWaygroundSelectPatched = true;
          log("SELECT PATCH v2.6.0: mode=" + result.selectMode + " blanks=" + result.fillBlanks.length + " opts=" + result.options.length + (forcedMode !== "auto" ? " forced=" + forcedMode : ""), "inf");
        }
      }

      var choiceEls = dgCollectChoiceOptions(result);
      if (choiceEls.length) {
        var choiceOptions = dgUniqueOptions(choiceEls);
        var falseDragDesktop = dgIsDesktopWide() && dgLooksLikeDragType(result) && !dgHasRealDragSignals(result);
        var shouldPatchChoices = choiceEls.length >= 2 && (
          dgHasForcedChoiceMode() ||
          !result.questionType ||
          result.questionType === "unknown" ||
          result.questionType === "dropdown" ||
          falseDragDesktop ||
          !Array.isArray(result.options) ||
          !result.options.length ||
          result.options.every(function(opt) { return dgIsPlaceholderSelectText(opt); })
        );
        if (shouldPatchChoices && forcedMode !== "drag") {
          var isMulti = forcedMode === "multi_choice" ? true : dgIsMultiQuestion(result);
          result.questionType = isMulti ? "multi" : "single";
          result.type = result.questionType;
          result.selectMode = isMulti ? "multi_choice" : "single_choice";
          result.dynamicSelect = false;
          result.inputElement = choiceEls[0];
          result.fillBlanks = [];
          result.elements = choiceEls.slice();
          result.options = choiceOptions.slice();
          result.isWaygroundChoicePatched = true;
          log("CHOICE PATCH v2.6.0: mode=" + result.selectMode + " opts=" + result.options.length + (forcedMode !== "auto" ? " forced=" + forcedMode : ""), "inf");
        }
      } else if (dgHasForcedChoiceMode()) {
        log("CHOICE PATCH miss v2.6.0: forced=" + forcedMode + " type=" + String(result.questionType || "unknown"), "wrn");
      }

      if (forcedMode !== 'auto' && window.__dgLastEmbeddedDetectionMode !== forcedMode) {
        window.__dgLastEmbeddedDetectionMode = forcedMode;
        log("DETECTION EMBED v2.6.0: mode=" + forcedMode, "inf");
      }
    } catch (e) {
      log("SELECT PATCH extract error: " + (e && e.message ? e.message : e), "wrn");
    }
    return result;
  };

  function dgUiModeFromLabel(label) {
    var txt = dgNorm(label);
    if (/^auto$/.test(txt)) return 'auto';
    if (/^alternativa|single|choice|mcq|radio/.test(txt)) return 'choice';
    if (/multi|multipla|múltipla/.test(txt)) return 'multi_choice';
    if (/arrastar|drag|soltar|match|connect/.test(txt)) return 'drag';
    if (/multi.?select/.test(txt)) return 'multi_select';
    if (/select|dropdown|combobox|lacuna|blank/.test(txt)) return 'select';
    if (/v\/f|verdadeiro|falso|true false/.test(txt)) return 'true_false';
    if (/aberta|open|texto/.test(txt)) return 'open';
    if (/enquete|poll/.test(txt)) return 'poll';
    return '';
  }

  function dgFindDetectionButtons(panel) {
    return Array.from(panel.querySelectorAll('button, [role="button"], [role="tab"]')).filter(function(el) {
      var mode = dgUiModeFromLabel(dgTxt(el));
      return !!mode && !el.closest('.dg-detection-embed-bar');
    });
  }

  function dgPersistEmbeddedDetection(mode, btn) {
    if (!mode) return;
    try {
      if (!S.settings) S.settings = {};
      S.settings.detectionMode = mode;
      S.settings.forceDetectionMode = mode;
      S.settings.detectionEmbeddedAt = new Date().toISOString();
      try { localStorage.setItem('dgly_detection_mode', mode); } catch (_) {}
      var client = window.DoglyWebhook && window.DoglyWebhook.createClient ? window.DoglyWebhook.createClient({}) : null;
      var payload = Object.assign({}, S.settings, {
        detectionMode: mode,
        forceDetectionMode: mode,
        detectionEmbeddedAt: S.settings.detectionEmbeddedAt,
      });
      var done = function(ok) {
        if (btn) {
          btn.dataset.pending = '0';
          btn.textContent = ok ? ('✓ Embutido: ' + mode) : 'Embutir detecção';
          btn.style.opacity = '1';
        }
        setStatus('Detecção embutida: ' + mode, ok ? 'suc' : 'wrn');
        log('DETECTION SAVE v2.6.0: ' + mode + ' ' + (ok ? 'ok' : 'fallback'), ok ? 'suc' : 'wrn');
        var panel = document.querySelector('#qs-panel');
        var detectBtn = panel ? Array.from(panel.querySelectorAll('button')).find(function(el) { return /detectar|detect/.test(dgNorm(dgTxt(el))); }) : null;
        if (detectBtn) setTimeout(function() { try { detectBtn.click(); } catch (_) {} }, 120);
      };
      if (client && client.saveConfig) {
        if (btn) {
          btn.textContent = 'Embutindo...';
          btn.style.opacity = '0.82';
        }
        Promise.resolve(client.saveConfig(payload)).then(function(res) {
          done(!res || res.success !== false);
        }).catch(function() {
          done(false);
        });
      } else {
        done(false);
      }
    } catch (_) {}
  }

  function dgInjectDetectionEmbedUi() {
    var panel = document.querySelector('#qs-panel');
    if (!panel) return;
    var buttons = dgFindDetectionButtons(panel);
    if (buttons.length < 2) return;
    var host = buttons[0].parentElement;
    if (!host || !host.parentElement) return;
    var bar = host.parentElement.querySelector('.dg-detection-embed-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'dg-detection-embed-bar';
      bar.style.display = 'flex';
      bar.style.alignItems = 'center';
      bar.style.justifyContent = 'space-between';
      bar.style.gap = '10px';
      bar.style.marginTop = '12px';
      bar.style.padding = '10px 12px';
      bar.style.borderRadius = '14px';
      bar.style.border = '1px solid rgba(123,92,255,.28)';
      bar.style.background = 'linear-gradient(135deg, rgba(20,24,36,.92), rgba(51,30,92,.88))';
      bar.style.boxShadow = '0 12px 28px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.06)';

      var info = document.createElement('div');
      info.className = 'dg-detection-embed-info';
      info.style.display = 'flex';
      info.style.flexDirection = 'column';
      info.style.minWidth = '0';

      var title = document.createElement('strong');
      title.textContent = 'Embutir detecção';
      title.style.fontSize = '12px';
      title.style.color = '#f8faff';

      var meta = document.createElement('span');
      meta.className = 'dg-detection-embed-meta';
      meta.textContent = 'Selecione um modo estável e aplique neste script';
      meta.style.fontSize = '11px';
      meta.style.color = 'rgba(222,231,255,.72)';
      meta.style.lineHeight = '1.35';

      var apply = document.createElement('button');
      apply.type = 'button';
      apply.className = 'dg-detection-embed-action';
      apply.textContent = 'Embutir detecção';
      apply.style.border = '0';
      apply.style.cursor = 'pointer';
      apply.style.padding = '10px 14px';
      apply.style.borderRadius = '12px';
      apply.style.fontWeight = '700';
      apply.style.fontSize = '12px';
      apply.style.color = '#ffffff';
      apply.style.whiteSpace = 'nowrap';
      apply.style.background = 'linear-gradient(135deg, #7c3aed, #22c55e)';
      apply.style.boxShadow = '0 10px 22px rgba(124,58,237,.28)';
      apply.addEventListener('click', function() {
        var selected = apply.dataset.selectedMode || (S.settings && S.settings.pendingDetectionMode) || (S.settings && S.settings.detectionMode) || 'auto';
        dgPersistEmbeddedDetection(selected, apply);
      });

      info.appendChild(title);
      info.appendChild(meta);
      bar.appendChild(info);
      bar.appendChild(apply);
      host.parentElement.appendChild(bar);
    }

    var actionBtn = bar.querySelector('.dg-detection-embed-action');
    var metaEl = bar.querySelector('.dg-detection-embed-meta');
    buttons.forEach(function(btn) {
      if (btn.dataset.dgEmbedHooked === '1') return;
      btn.dataset.dgEmbedHooked = '1';
      btn.addEventListener('click', function() {
        var mode = dgUiModeFromLabel(dgTxt(btn));
        if (!mode) return;
        if (!S.settings) S.settings = {};
        S.settings.pendingDetectionMode = mode;
        if (actionBtn) actionBtn.dataset.selectedMode = mode;
        if (actionBtn) actionBtn.textContent = 'Embutir: ' + mode;
        if (metaEl) metaEl.textContent = 'Modo selecionado: ' + mode + ' · será salvo neste script';
      }, true);
    });

    var currentMode = (S.settings && (S.settings.pendingDetectionMode || S.settings.detectionMode)) || 'auto';
    if (actionBtn && !actionBtn.dataset.selectedMode) actionBtn.dataset.selectedMode = currentMode;
    if (metaEl) metaEl.textContent = 'Modo atual: ' + currentMode + ' · clique em Embutir para forçar';
  }

  setTimeout(dgInjectDetectionEmbedUi, 900);
  setInterval(dgInjectDetectionEmbedUi, 1500);

  function dgParseAnswers(answer, blanksCount) {
    var raw = String(answer || "").trim();
    if (!raw) return [];
    var lines = raw.split(/\n+/).map(function(v) { return v.trim(); }).filter(Boolean);
    if (lines.length === 1 && blanksCount > 1) {
      lines = raw.split(/[;,|]+/).map(function(v) { return v.trim(); }).filter(Boolean);
    }
    if (lines.length === 1 && blanksCount > 1) {
      var tf = raw.match(/(verdadeiro|falso|true|false|v\/f|v|f)/ig);
      if (tf && tf.length > 1) lines = tf;
    }
    return lines.map(function(v) { return v.replace(/^\s*([A-Z]|\d+)\s*[).:-]?\s*/i, "").trim(); }).filter(Boolean);
  }

  function dgItemScore(itemText, answerText) {
    var item = dgNorm(itemText);
    var ans = dgNorm(answerText);
    if (!item || !ans) return -1;
    if (item === ans) return 1000;
    var tfTrue = /^(true|verdadeiro|v|sim|yes)$/i;
    var tfFalse = /^(false|falso|f|nao|não|no)$/i;
    if (tfTrue.test(answerText) && tfTrue.test(itemText)) return 950;
    if (tfFalse.test(answerText) && tfFalse.test(itemText)) return 950;
    if (item.indexOf(ans) >= 0 || ans.indexOf(item) >= 0) return 820 - Math.abs(item.length - ans.length);
    var aWords = ans.split(/\s+/).filter(Boolean);
    var iWords = item.split(/\s+/).filter(Boolean);
    var common = aWords.filter(function(w) { return iWords.indexOf(w) >= 0; }).length;
    if (!common) return -1;
    return Math.round((common / Math.max(aWords.length, iWords.length, 1)) * 700);
  }

  function dgResolveMenuItem(items, answerText, usedMap) {
    if (!items || !items.length) return null;
    var best = null;
    var bestScore = -1;
    var letterMatch = String(answerText || "").match(/^\s*([A-Da-d])\s*[).\s]?/);
    if (letterMatch) {
      var idx = letterMatch[1].toUpperCase().charCodeAt(0) - 65;
      if (idx >= 0 && idx < items.length && !(usedMap && usedMap[idx])) return { el: items[idx], idx: idx, label: dgTxt(items[idx]) };
    }
    for (var i = 0; i < items.length; i++) {
      if (usedMap && usedMap[i]) continue;
      var score = dgItemScore(dgTxt(items[i]), answerText);
      if (score > bestScore) {
        best = items[i];
        bestScore = score;
      }
    }
    if (!best || bestScore < 0) return null;
    return { el: best, idx: items.indexOf(best), label: dgTxt(best) };
  }

  function dgResolveChoiceElement(items, answerText, usedMap) {
    if (!items || !items.length) return null;
    var best = null;
    var bestScore = -1;
    var letterMatch = String(answerText || "").match(/^\s*([A-Da-d])\s*[).\s-]?/);
    if (letterMatch) {
      var idx = letterMatch[1].toUpperCase().charCodeAt(0) - 65;
      if (idx >= 0 && idx < items.length && !(usedMap && usedMap[idx])) return { el: items[idx], idx: idx, label: dgTxt(items[idx]) };
    }
    for (var i = 0; i < items.length; i++) {
      if (usedMap && usedMap[i]) continue;
      var label = dgChoiceText(items[i]).replace(/^\s*([A-Z]|\d+)\s*[).:-]\s*/i, "").trim();
      var score = dgItemScore(label, answerText);
      if (score > bestScore) {
        best = items[i];
        bestScore = score;
      }
    }
    if (!best || bestScore < 0) return null;
    return { el: best, idx: items.indexOf(best), label: dgChoiceText(best) };
  }

  function dgClickChoice(el, done) {
    if (!el) return done(false);
    try { highlight(el); } catch (_) {}
    try { el.click(); } catch (_) {}
    setTimeout(function() {
      done(true);
    }, 80);
  }

  function dgOpenAndPick(trigger, answerText, done, usedMap) {
    if (!trigger) {
      done(false, answerText);
      return;
    }
    try { highlight(trigger); } catch (_) {}
    try { trigger.click(); } catch (_) {}
    setTimeout(function() {
      var items = dgGetMenuItems(trigger);
      var resolved = dgResolveMenuItem(items, answerText, usedMap);
      if (resolved && resolved.el) {
        try { highlight(resolved.el); } catch (_) {}
        try { resolved.el.click(); } catch (_) {}
        if (usedMap) usedMap[resolved.idx] = true;
        done(true, resolved.label || answerText);
      } else {
        done(false, answerText);
      }
    }, 280);
  }

  var __dgApply = applyAnswer;
  applyAnswer = function(data, answer) {
    try {
      if (data && data.isWaygroundChoicePatched && Array.isArray(data.elements) && data.elements.length) {
        var choiceParts = dgParseAnswers(answer, data.questionType === "multi" ? data.elements.length : 1);
        var choiceUsed = {};
        if ((data.questionType === "multi" || data.selectMode === "multi_choice") && choiceParts.length > 1) {
          var cp = 0;
          var clicked = 0;
          (function nextChoice() {
            if (cp >= choiceParts.length) {
              setStatus(clicked + " alternativas marcadas", clicked > 0 ? "suc" : "wrn");
              log("CHOICE MULTI v2.6.0: marcadas=" + clicked, clicked > 0 ? "suc" : "wrn");
              if (S.settings.autoSubmit && clicked > 0) setTimeout(clickSubmit, 850);
              return;
            }
            var resolvedChoice = dgResolveChoiceElement(data.elements, choiceParts[cp], choiceUsed);
            if (!resolvedChoice) {
              log("CHOICE MULTI miss: " + choiceParts[cp], "wrn");
              cp++;
              return setTimeout(nextChoice, 120);
            }
            choiceUsed[resolvedChoice.idx] = true;
            dgClickChoice(resolvedChoice.el, function(ok) {
              if (ok) clicked++;
              log("CHOICE[" + (cp + 1) + "] " + (ok ? "ok" : "fail") + ": " + resolvedChoice.label, ok ? "suc" : "wrn");
              cp++;
              setTimeout(nextChoice, 150);
            });
          })();
          return;
        }

        var wantedChoice = choiceParts[0] || String(answer || "").trim();
        var resolvedSingleChoice = dgResolveChoiceElement(data.elements, wantedChoice, choiceUsed);
        if (resolvedSingleChoice && resolvedSingleChoice.el) {
          dgClickChoice(resolvedSingleChoice.el, function(ok) {
            setStatus("Alternativa: " + String(resolvedSingleChoice.label || wantedChoice).substring(0, 60), ok ? "suc" : "wrn");
            log("CHOICE v2.6.0: " + (ok ? "respondido" : "falhou") + " -> " + String(resolvedSingleChoice.label || wantedChoice).substring(0, 60), ok ? "suc" : "wrn");
            if (S.settings.autoSubmit && ok) setTimeout(clickSubmit, 850);
          });
          return;
        }
      }

      if (data && (data.selectMode || data.isWaygroundSelectPatched || (data.dynamicSelect && (data.inputElement || (data.fillBlanks && data.fillBlanks.length))))) {
        var blanks = Array.isArray(data.fillBlanks) && data.fillBlanks.length ? data.fillBlanks.filter(Boolean) : (data.inputElement ? [data.inputElement] : []);
        if (!blanks.length) return __dgApply.apply(this, arguments);

        var parts = dgParseAnswers(answer, blanks.length);
        var used = {};

        if (blanks.length > 1) {
          var idx = 0;
          var okCount = 0;
          (function nextBlank() {
            if (idx >= blanks.length) {
              setStatus(okCount + "/" + blanks.length + " selects preenchidos", okCount > 0 ? "suc" : "wrn");
              log("MULTI SELECT v2.6.0: preenchidos=" + okCount + "/" + blanks.length, okCount > 0 ? "suc" : "wrn");
              if (S.settings.autoSubmit && okCount > 0) setTimeout(clickSubmit, 900);
              return;
            }
            var desired = parts[idx] || parts[0] || String(answer || "").trim();
            dgOpenAndPick(blanks[idx], desired, function(ok, label) {
              if (ok) okCount++;
              log("SELECT[" + (idx + 1) + "] " + (ok ? "ok" : "fail") + ": " + String(label || desired).substring(0, 60), ok ? "suc" : "wrn");
              idx++;
              setTimeout(nextBlank, ok ? 220 : 160);
            });
          })();
          return;
        }

        if ((data.questionType === "multi" || data.selectMode === "multi_select") && parts.length > 1) {
          var p = 0;
          var selected = 0;
          (function nextItem() {
            if (p >= parts.length) {
              setStatus(selected + " opcoes selecionadas", selected > 0 ? "suc" : "wrn");
              log("MULTI SELECT options v2.6.0: selecionadas=" + selected, selected > 0 ? "suc" : "wrn");
              if (S.settings.autoSubmit && selected > 0) setTimeout(clickSubmit, 900);
              return;
            }
            dgOpenAndPick(blanks[0], parts[p], function(ok) {
              if (ok) selected++;
              p++;
              setTimeout(nextItem, ok ? 220 : 160);
            }, used);
          })();
          return;
        }

        var wanted = parts[0] || String(answer || "").trim();
        dgOpenAndPick(blanks[0], wanted, function(ok, label) {
          setStatus((data.selectMode === "multi_select" ? "Multi Select" : "Select") + ": " + String(label || wanted).substring(0, 60), ok ? "suc" : "wrn");
          log("SELECT v2.6.0: " + (ok ? "respondido" : "sem match") + " -> " + String(label || wanted).substring(0, 60), ok ? "suc" : "wrn");
          if (S.settings.autoSubmit && ok) setTimeout(clickSubmit, 850);
        });
        return;
      }
    } catch (e) {
      log("SELECT PATCH apply error: " + (e && e.message ? e.message : e), "wrn");
    }
    return __dgApply.apply(this, arguments);
  };
})();

;(() => {
  if (typeof extractPageContent !== "function" || typeof applyAnswer !== "function") return;

  function dgTxt(el) {
    return ((el && (el.innerText || el.textContent)) || "").trim().replace(/\s+/g, " ");
  }

  function dgChoiceText(el) {
    if (!el) return "";
    try {
      var latex = el.querySelector && el.querySelector('annotation[encoding="application/x-tex"]');
      if (latex && latex.textContent && latex.textContent.trim()) {
        return latex.textContent.trim().replace(/\s+/g, " ");
      }

      var explicit = el.querySelector && el.querySelector('#optionText, [id="optionText"], [data-cy="option-text"], [class*="option-text"], [class*="OptionText"], .option-inner, .dnd-option-text');
      var explicitText = explicit ? ((explicit.innerText || explicit.textContent) || "").trim().replace(/\s+/g, " ") : "";
      if (explicitText) return explicitText;

      var imgAlt = el.querySelector && el.querySelector('img[alt]');
      var altText = imgAlt ? String(imgAlt.getAttribute('alt') || '').trim().replace(/\s+/g, ' ') : '';
      if (altText) return altText;

      var ownAria = el.getAttribute ? String(el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ') : '';
      if (ownAria) return ownAria;

      var ownData = el.getAttribute ? String(el.getAttribute('data-answer') || el.getAttribute('data-option') || el.getAttribute('data-text') || el.getAttribute('data-value') || '').trim().replace(/\s+/g, ' ') : '';
      if (ownData) return ownData;
    } catch (_) {}
    return dgTxt(el);
  }

  function dgNorm(v) {
    if (typeof norm === "function") return norm(v || "");
    return String(v || "")
      .toLowerCase()
      .replace(/[×✕✖x]/g, " x ")
      .replace(/[÷]/g, " / ")
      .replace(/[−–—]/g, " - ")
      .replace(/[·•]/g, " ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s/+.\-]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function dgIsPlaceholderSelectText(txt) {
    var t = dgNorm(txt);
    return /^(select answer|select the answer|choose answer|choose option|selecione a resposta|selecionar resposta|selecione|selecionar|escolha|responder)$/.test(t);
  }

  function dgIsActionText(txt) {
    if (typeof isChoiceActionText === "function") return isChoiceActionText(txt);
    return /^(reset|reiniciar|submit|enviar|check|verificar|next|proxima|próxima|continue|continuar|skip|pular)$/i.test((txt || "").trim());
  }

  function dgIsDesktopWide() {
    var w = Math.max(window.innerWidth || 0, (document.documentElement && document.documentElement.clientWidth) || 0);
    return w >= 1100;
  }

  function dgForcedMode() {
    var raw = dgNorm(S && S.settings ? S.settings.detectionMode : "auto");
    if (!raw || /^(auto|automatico|automatic|automático|detectar|detect)$/.test(raw)) return "auto";
    if (/^(single|single_choice|choice|alternativa|alternativas|resposta|answer|answers|mcq|radio)$/.test(raw)) return "choice";
    if (/^(multiple|multi|multi_choice|multipla|múltipla|multiplas|múltiplas|multi answer|multi answers|msq|checkbox)$/.test(raw)) return "multi_choice";
    if (/^(drag|drag_drop|drag and drop|dragdrop|arrastar|arrastar soltar|arrastar e soltar|soltar|match|connect|ligar|conectar)$/.test(raw)) return "drag";
    if (/^(reorder|ordenar|sort|arrange)$/.test(raw)) return "drag";
    if (/^(blank|lacuna|lacunas|fill_blank|fill in the blank)$/.test(raw)) return "select";
    if (/multi.?select|multi.?dropdown|multi.?blank|varias lacunas|varias opcoes|várias opções/.test(raw)) return "multi_select";
    if (/dropdown|select|combobox|listbox|blank|lacuna/.test(raw)) return "select";
    if (/multi|multiple|multipla|múltipla|msq|checkbox|todas|todos|all answers/.test(raw) && /choice|option|alternativa|resposta|answer/.test(raw)) return "multi_choice";
    if (/single|radio|unica|única|choice|option|alternativa|resposta|answer|mcq/.test(raw)) return "choice";
    if (/drag|match|connect|ligar|conectar|ordenar|sort|arrange|drop/.test(raw)) return "drag";
    if (/equation|open|text|typing|digit|input|codigo|código|texto/.test(raw)) return "open";
    return "auto";
  }

  function dgHasForcedChoiceMode() {
    var mode = dgForcedMode();
    return mode === "choice" || mode === "multi_choice";
  }

  function dgHasForcedSelectMode() {
    var mode = dgForcedMode();
    return mode === "select" || mode === "multi_select";
  }

  function dgQuestionText(result) {
    var raw = "";
    if (result) raw = result.question || result.prompt || result.title || "";
    if (!raw) {
      var q = document.querySelector('h1, h2, [class*="question"], [class*="prompt"], [data-testid*="question"]');
      raw = dgTxt(q);
    }
    return raw || "";
  }

  function dgCountLikelyChoiceDescendants(el) {
    if (!el || !el.querySelectorAll) return 0;
    var seen = new Set();
    var count = 0;
    var isDesktop = dgIsDesktopWide();
    var minWidth = window.innerWidth * (isDesktop ? 0.16 : 0.38);
    var minTop = window.innerHeight * (isDesktop ? 0.22 : 0.34);
    var maxHeight = Math.min(window.innerHeight * (isDesktop ? 0.72 : 0.40), isDesktop ? 560 : 280);
    var nodes = [];
    try {
      nodes = Array.from(el.querySelectorAll('button, label, div, article, li, section, [role="button"], [role="radio"], [role="option"], [role="checkbox"], [class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"], [class*="choice"], [class*="Choice"], [class*="alternative"], [class*="Alternative"], [class*="card"], [class*="Card"], [data-testid], [data-cy]'));
    } catch (_) {}
    for (var i = 0; i < nodes.length; i++) {
      if (count >= 4) break;
      var node = nodes[i];
      if (!node || node === el || !node.getBoundingClientRect || node.closest('#qs-panel') || node.offsetParent === null) continue;
      var txt = dgChoiceText(node);
      if (!txt || txt.length > 320 || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) continue;
      var rect = node.getBoundingClientRect();
      if (rect.width < minWidth || rect.height < 34 || rect.height > maxHeight || rect.top < minTop) continue;
      var cls = ((node.className && String(node.className)) || '').toLowerCase();
      var role = ((node.getAttribute && node.getAttribute('role')) || '').toLowerCase();
      var style = window.getComputedStyle ? window.getComputedStyle(node) : null;
      var bg = style ? String(style.backgroundColor || '') : '';
      var bgImg = style ? String(style.backgroundImage || '') : '';
      var border = style ? String(style.borderColor || '') : '';
      var visual = role === 'button' || role === 'radio' || role === 'option' || role === 'checkbox'
        || /option|choice|answer|alternative|card|selectable|mcq|quiz-option/.test(cls)
        || (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent')
        || (bgImg && bgImg !== 'none')
        || (border && border !== 'rgba(0, 0, 0, 0)' && border !== 'transparent');
      if (!visual) continue;
      var key = dgNorm(txt) + '|' + Math.round(rect.top / 10) + '|' + Math.round(rect.left / 10) + '|' + Math.round(rect.width / 10);
      if (seen.has(key)) continue;
      seen.add(key);
      count++;
    }
    return count;
  }

  function dgGetQuestionAnchor(result) {
    var selectors = [
      '[data-testid*="question"]',
      '[class*="question"]',
      '[class*="prompt"]',
      'h1',
      'h2'
    ];
    var qText = dgNorm(dgQuestionText(result));
    var best = null;
    var bestScore = -999;

    function scoreAnchor(el) {
      if (!el || !el.getBoundingClientRect || !el.offsetParent || el.closest("#qs-panel")) return -999;
      var txt = dgNorm(dgTxt(el));
      if (!txt) return -999;
      var rect = el.getBoundingClientRect();
      var cls = ((el.className && String(el.className)) || "").toLowerCase();
      var interactiveCount = 0;
      var visualChoiceCount = 0;
      try {
        interactiveCount = el.querySelectorAll('button, [role="button"], [role="radio"], [role="option"], [role="checkbox"], input, select').length;
      } catch (_) {}
      try {
        visualChoiceCount = dgCountLikelyChoiceDescendants(el);
      } catch (_) {}
      var score = 0;
      if (!qText || txt === qText) score += 240;
      else if (txt.indexOf(qText) >= 0) score += 170;
      else if (qText.indexOf(txt) >= 0) score += 120;
      else return -999;
      if (visualChoiceCount >= 2 && rect.height >= Math.min(window.innerHeight * 0.30, 240)) return -999;
      if (/question|prompt/.test(cls)) score += 24;
      if (rect.height <= Math.min(window.innerHeight * 0.28, 220)) score += 70;
      else score -= Math.min(220, Math.round(rect.height - Math.min(window.innerHeight * 0.28, 220)));
      if (rect.width <= window.innerWidth * 0.94) score += 16;
      if (interactiveCount) score -= Math.min(260, interactiveCount * 48);
      if (visualChoiceCount) score -= Math.min(320, visualChoiceCount * 95);
      return score;
    }

    for (var s = 0; s < selectors.length; s++) {
      var nodes = [];
      try { nodes = Array.from(document.querySelectorAll(selectors[s])); } catch (_) {}
      for (var i = 0; i < nodes.length; i++) {
        var el = nodes[i];
        var score = scoreAnchor(el);
        if (score > bestScore) {
          best = el;
          bestScore = score;
        }
      }
    }
    return bestScore > -200 ? best : null;
  }

  function dgRelevantQuestionRect(result) {
    var qAnchor = dgGetQuestionAnchor(result);
    var qRect = qAnchor && qAnchor.getBoundingClientRect ? qAnchor.getBoundingClientRect() : null;
    if (!qRect) return null;

    var qInteractive = 0;
    var qVisualChoices = 0;
    try {
      qInteractive = qAnchor.querySelectorAll('button, [role="button"], [role="radio"], [role="option"], [role="checkbox"], input, select').length;
    } catch (_) {}
    try {
      qVisualChoices = dgCountLikelyChoiceDescendants(qAnchor);
    } catch (_) {}

    if (qVisualChoices >= 2 || (qRect.height > Math.min(window.innerHeight * 0.34, 260) && qInteractive >= 2)) return null;
    if (qRect.height > Math.min(window.innerHeight * 0.44, 420)) return null;
    if (qRect.bottom > window.innerHeight * 0.78) return null;
    return qRect;
  }

  function dgIsMultiQuestion(result) {
    var forced = dgForcedMode();
    if (forced === "multi_choice" || forced === "multi_select") return true;
    if (forced === "choice" || forced === "select") return false;

    try {
      var nativeOptions = Array.from(document.querySelectorAll('.option.is-selectable, .option.is-msq, .question-options-layout .option, [class*="option"][class*="selectable"]')).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var rect = el.getBoundingClientRect();
        return rect.width > 36 && rect.height > 24;
      });
      if (nativeOptions.some(function(el) {
        var cls = ((el.className && String(el.className)) || '').toLowerCase();
        return /is-msq|checkbox|multiple/.test(cls) || !!(el.querySelector && el.querySelector('input[type="checkbox"], [role="checkbox"]'));
      })) {
        return true;
      }
    } catch (_) {}

    var txt = dgNorm(dgQuestionText(result));
    return /select all|choose all|more than one|multiple answers|multi select|marque todas|marque todos|selecione todas|selecione todos|mais de uma|mais de um|duas respostas|duas opcoes|duas opções/.test(txt);
  }

  function dgLooksLikeDragType(result) {
    var txt = dgNorm((result && (result.questionType || result.type || result.selectMode)) || "");
    return /match|connect|drag|drop|sort|reorder|arrange/.test(txt);
  }

  function dgHasRealDragSignals(result) {
    var arrays = [
      result && result.dragItems,
      result && result.dragElements,
      result && result.draggables,
      result && result.dropZones,
      result && result.dropTargets,
      result && result.targets,
      result && result.zones,
      result && result.matches,
      result && result.pairs,
    ];
    for (var i = 0; i < arrays.length; i++) {
      if (Array.isArray(arrays[i]) && arrays[i].length >= 2) return true;
    }

    var draggables = 0;
    var droppables = 0;
    try {
      draggables = Array.from(document.querySelectorAll('[draggable="true"], [data-rbd-draggable-id], [class*="drag"], [class*="Drag"]')).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var rect = el.getBoundingClientRect();
        return rect.width > 24 && rect.height > 24;
      }).length;
    } catch (_) {}
    try {
      droppables = Array.from(document.querySelectorAll('[aria-dropeffect], [data-rbd-droppable-id], [class*="dropzone"], [class*="drop-zone"], [class*="droppable"], [class*="target"], [class*="blank"]')).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var rect = el.getBoundingClientRect();
        return rect.width > 36 && rect.height > 24;
      }).length;
    } catch (_) {}
    return draggables >= 2 && droppables >= 2;
  }

  function dgLooksLikeChoiceContainer(el) {
    if (!el || !el.getBoundingClientRect) return false;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
    var bg = style ? String(style.backgroundColor || "") : "";
    var bgImg = style ? String(style.backgroundImage || "") : "";
    var inlineStyle = ((el.getAttribute && el.getAttribute("style")) || "").toLowerCase();
    if (/question|prompt|toolbar|header|footer|modal|dialog|drawer|sheet|menu|dropdown|select|combobox|listbox|toast|solver|config|chat|logs/.test(cls)) return false;
    if (/radio|option|button|checkbox/.test(role)) return true;
    if (typeof el.onclick === "function") return true;
    if (el.tagName === "BUTTON" || el.tagName === "LABEL") return true;
    if (/option|choice|answer|alternative|alternativa|mcq|quiz|card/.test(cls)) return true;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent" && bg !== "rgb(0, 0, 0)" && bg !== "rgb(255, 255, 255)") return true;
    if (bgImg && bgImg !== "none") return true;
    if (/background/.test(inlineStyle)) return true;
    if (style && (style.cursor === "pointer" || style.cursor === "grab")) return true;
    if (el.getAttribute && (el.getAttribute("data-testid") || el.getAttribute("data-answer") || el.getAttribute("data-option") || el.getAttribute("data-index") || el.getAttribute("data-id"))) return true;
    return false;
  }

  function dgIsChoiceGroupShell(el) {
    if (!el || !el.getBoundingClientRect) return false;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var rect = el.getBoundingClientRect();
    var nestedChoices = 0;
    try {
      nestedChoices = el.querySelectorAll('.option.is-selectable, .option.is-msq, [role="radio"], [role="option"], [role="checkbox"], [class*="answer-option"], [class*="AnswerOption"], [class*="mcq-option"], [class*="quiz-option"], #optionText, [id="optionText"], .option-inner, .dnd-option-text').length;
    } catch (_) {}
    if (nestedChoices < 2) return false;
    if (/question-options-layout|resizeable-question-container|question-container|question-card|question-body|prompt-container/.test(cls)) return true;
    if (rect.width >= window.innerWidth * 0.72 && rect.height >= Math.min(window.innerHeight * 0.26, 220)) return true;
    return false;
  }

  function dgIsNativeChoiceRoot(el) {
    if (!el || !el.getBoundingClientRect) return false;
    if (dgIsChoiceGroupShell(el)) return false;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var testId = ((el.getAttribute && (el.getAttribute("data-testid") || el.getAttribute("data-cy") || el.getAttribute("data-testid"))) || "").toLowerCase();
    return /(^|\s)(option|is-selectable|is-msq)(\s|$)|option-inner|answer-option|mcq-option|quiz-option/.test(cls)
      || /option|choice|answer|alternative|alternativa/.test(testId)
      || role === "radio"
      || role === "option"
      || role === "checkbox";
  }

  function dgChoiceScore(el, result) {
    if (!el || !el.getBoundingClientRect) return -999;
    var txt = dgChoiceText(el);
    var rect = el.getBoundingClientRect();
    if (dgIsChoiceGroupShell(el)) return -999;
    var cls = ((el.className && String(el.className)) || "").toLowerCase();
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
    var bg = style ? String(style.backgroundColor || "") : "";
    var bgImg = style ? String(style.backgroundImage || "") : "";
    var inlineStyle = ((el.getAttribute && el.getAttribute("style")) || "").toLowerCase();
    var radius = style ? parseFloat(style.borderRadius || "0") || 0 : 0;
    var isDesktop = dgIsDesktopWide();
    var approxLines = Math.max(1, Math.round(rect.height / 24));
    var score = 0;
    if (!txt || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return -999;
    if (txt.length > 300) score -= 120;
    else if (txt.length > 160) score -= 30;
    else score += 60;
    if (rect.width >= window.innerWidth * (isDesktop ? 0.14 : 0.36)) score += 26;
    if (rect.width >= Math.min(window.innerWidth * 0.45, 200)) score += 60;
    if (isDesktop && rect.width >= window.innerWidth * 0.32) score += 28;
    if (rect.height >= 36 && rect.height <= 640) score += 40;
    if (isDesktop && rect.height > 300 && rect.height <= 760) score += 24;
    if (isDesktop && approxLines <= 18) score += 16;
    if (rect.top > window.innerHeight * 0.15) score += 18;
    if (role === "button" || role === "radio" || role === "option" || role === "checkbox") score += 36;
    if (el.tagName === "BUTTON" || el.tagName === "LABEL") score += 28;
    if (/option|choice|answer|alternative|alternativa|radio|checkbox|card/.test(cls)) score += 40;
    if (/is-selectable|is-msq|option-inner|answer-option|mcq-option|quiz-option/.test(cls)) score += 85;
    if (dgIsNativeChoiceRoot(el)) score += 120;
    if (el.querySelector && el.querySelector('#optionText, [id="optionText"], annotation[encoding="application/x-tex"], .option-inner, .dnd-option-text')) score += 70;
    if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") {
      var isNeutral = /^rgb\((0, 0, 0|255, 255, 255|24[0-9], 24[0-9], 24[0-9]|25[0-5], 25[0-5], 25[0-5])\)$/.test(bg);
      score += isNeutral ? 20 : 55;
    }
    if (bgImg && bgImg !== "none") score += 30;
    if (/background/.test(inlineStyle)) score += 35;
    if (radius >= 6) score += 12;
    if (style && style.cursor === "pointer") score += 30;
    if (/question|prompt/.test(cls)) score -= 80;
    if (/selected|active|correct|incorrect/.test(cls)) score += 4;
    if (rect.width >= window.innerWidth * 0.7 && rect.height >= 60) score += 50;
    var q = dgNorm(dgQuestionText(result));
    if (q && dgNorm(txt) === q) score -= 140;
    return score;
  }

  function dgPromoteChoiceRoot(el, result) {
    if (!el) return el;
    if (dgIsNativeChoiceRoot(el)) return el;
    var best = el;
    var bestScore = dgChoiceScore(el, result);
    var childText = dgNorm(dgTxt(el));
    var childLen = childText.length;
    var cur = el;
    for (var depth = 0; depth < 5 && cur && cur.parentElement; depth++) {
      cur = cur.parentElement;
      if (!cur || cur === document.body || cur === document.documentElement || cur.closest("#qs-panel")) break;
      if (dgIsChoiceGroupShell(cur)) break;
      var rect = cur.getBoundingClientRect ? cur.getBoundingClientRect() : null;
      if (!rect) continue;
      if (rect.width < 90 || rect.height < 28 || rect.height > (dgIsDesktopWide() ? Math.min(window.innerHeight * 0.72, 760) : Math.min(window.innerHeight * 0.45, 360))) continue;
      var txt = dgNorm(dgTxt(cur));
      if (!txt) continue;
      if (childText && txt !== childText && txt.indexOf(childText) < 0) continue;
      if (childLen && txt.length > childLen * 1.35 + 28) continue;
      var siblingChoiceBlocks = 0;
      try {
        siblingChoiceBlocks = Array.from(cur.children || []).filter(function(kid) {
          if (!kid || kid === best || (kid.contains && kid.contains(best))) return false;
          if (!kid.getBoundingClientRect) return false;
          var kidRect = kid.getBoundingClientRect();
          var kidTxt = dgTxt(kid);
          if (!kidTxt || kidTxt.length > 320) return false;
          return kidRect.width >= rect.width * 0.42 && kidRect.height >= 34;
        }).length;
      } catch (_) {}
      if (siblingChoiceBlocks >= 2) break;
      var score = dgChoiceScore(cur, result);
      if (score > bestScore + 18) {
        best = cur;
        bestScore = score;
      }
    }
    return best;
  }

  function dgFindVisualChoiceRoot(el, result) {
    if (!el) return null;
    var baseText = dgNorm(dgChoiceText(el) || dgTxt(el));
    var cur = el;
    for (var depth = 0; depth < 5 && cur; depth++) {
      if (!cur || cur === document.body || cur === document.documentElement || cur.closest('#qs-panel')) break;
      if (dgIsChoiceGroupShell(cur)) break;
      var rect = cur.getBoundingClientRect ? cur.getBoundingClientRect() : null;
      if (!rect || rect.width < 80 || rect.height < 28 || rect.height > Math.min(window.innerHeight * (dgIsDesktopWide() ? 0.72 : 0.45), dgIsDesktopWide() ? 560 : 360)) {
        cur = cur.parentElement;
        continue;
      }
      var txt = dgNorm(dgChoiceText(cur));
      if (txt && (!baseText || txt === baseText || txt.indexOf(baseText) >= 0)) {
        if (dgIsNativeChoiceRoot(cur) || dgLooksLikeChoiceContainer(cur) || dgChoiceScore(cur, result) >= 72) return cur;
      }
      cur = cur.parentElement;
    }
    return null;
  }

  function dgNativeChoiceSelectors() {
    return [
      '.option.is-selectable', '.option.is-msq', '.question-options-layout .option', '.question-options-layout .option.is-selectable',
      '[class*="question-options"] .option', '[class*="question-options"] [class*="option"]',
      '[data-cy="option"]', '[data-testid="option"]', '[data-cy*="option"]', '[data-testid*="option"]',
      '[class*="answer-option"]', '[class*="AnswerOption"]', '[class*="option-inner"]', '[class*="OptionInner"]',
      '[class*="mcq-option"]', '[class*="quiz-option"]', '[role="radio"]', '[role="option"]', '[role="checkbox"]',
      'label[class*="option"]', 'label[class*="Option"]', 'label[class*="answer"]', 'label[class*="Answer"]'
    ];
  }

  function dgCollectNativeChoiceRoots(result) {
    var forcedChoice = dgHasForcedChoiceMode();
    var qRect = dgRelevantQuestionRect(result);
    var seen = new Set();
    var out = [];
    var nativeSelectorText = dgNativeChoiceSelectors().join(', ');
    var nodes = [];
    try {
      nodes = Array.from(document.querySelectorAll(nativeSelectorText));
    } catch (_) {}

    nodes.forEach(function(node) {
      if (!node || !node.getBoundingClientRect || node.closest('#qs-panel')) return;
      var root = node;
      try {
        if (node.closest) {
          root = node.closest('.option.is-selectable, .option.is-msq, .question-options-layout .option, [class*="question-options"] .option, [class*="answer-option"], [class*="AnswerOption"], [class*="mcq-option"], [class*="quiz-option"], [role="radio"], [role="option"], [role="checkbox"], label, button') || node;
        }
      } catch (_) {}
      root = dgFindVisualChoiceRoot(root, result) || dgPromoteChoiceRoot(root, result);
      if (!root || !root.getBoundingClientRect || root.closest('#qs-panel') || dgIsChoiceGroupShell(root)) return;

      var rect = root.getBoundingClientRect();
      var txt = dgChoiceText(root);
      if (!txt || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;
      if (qRect && !forcedChoice && rect.top < qRect.bottom - 40) return;
      if (rect.width < window.innerWidth * (dgIsDesktopWide() ? 0.12 : 0.34)) return;
      if (rect.height < 30 || rect.height > (dgIsDesktopWide() ? 760 : 320)) return;

      var hasNativeMarker = dgIsNativeChoiceRoot(root) || !!(root.querySelector && root.querySelector('#optionText, [id="optionText"], [data-cy="option-text"], [data-testid="option-text"], [class*="option-text"], [class*="OptionText"], .option-inner, .dnd-option-text, annotation[encoding="application/x-tex"]'));
      if (!hasNativeMarker) return;

      var score = dgChoiceScore(root, result);
      if (score < (forcedChoice ? 12 : 18)) return;

      var key = dgNorm(txt) + '|' + Math.round(rect.top / 6) + '|' + Math.round(rect.left / 6) + '|' + Math.round(rect.width / 6);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(root);
    });

    return out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });
  }

  function dgCollectStructuredGridOptions(result) {
    var nativeRoots = dgCollectNativeChoiceRoots(result);
    if (nativeRoots.length >= 2) return nativeRoots;
    if (!dgHasForcedChoiceMode() && dgLooksLikeDragType(result) && dgHasRealDragSignals(result)) return [];
    var isDesktop = dgIsDesktopWide();
    var qRect = dgRelevantQuestionRect(result);
    var containers = [];
    var nativeSelectorText = dgNativeChoiceSelectors().join(', ');
    try {
      containers = Array.from(document.querySelectorAll('.question-options-layout, .options-grid, .options-container, [class*="question-options"], [class*="options-grid"], [class*="OptionsGrid"], [class*="answer-grid"], [class*="AnswerGrid"], [class*="choices-grid"], [class*="ChoicesGrid"], [class*="answers"], [class*="Answers"], [class*="choices"], [class*="Choices"], [class*="alternatives"], [class*="Alternatives"]'));
    } catch (_) {}

    function looksLikeGridCard(el) {
      if (!el || !el.getBoundingClientRect || el.closest('#qs-panel') || dgIsChoiceGroupShell(el)) return false;
      var rect = el.getBoundingClientRect();
      var txt = dgChoiceText(el);
      if (!txt || txt.length > (isDesktop ? 420 : 260) || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return false;
      if (rect.width < window.innerWidth * (isDesktop ? 0.12 : 0.34)) return false;
      if (rect.height < 40 || rect.height > (isDesktop ? 760 : 320)) return false;
      if (qRect && !dgHasForcedChoiceMode() && rect.top < qRect.bottom - 36) return false;
      var cls = ((el.className && String(el.className)) || '').toLowerCase();
      var role = ((el.getAttribute && el.getAttribute('role')) || '').toLowerCase();
      if (/drag|drop|droppable|draggable|blank|target|match|connect/.test(cls) || role === 'textbox') return false;
      var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
      var bg = style ? String(style.backgroundColor || '') : '';
      var bgImg = style ? String(style.backgroundImage || '') : '';
      var border = style ? String(style.borderColor || '') : '';
      return dgIsNativeChoiceRoot(el)
        || dgLooksLikeChoiceContainer(el)
        || !!(bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent')
        || !!(bgImg && bgImg !== 'none')
        || !!(border && border !== 'rgba(0, 0, 0, 0)');
    }

    for (var ci = 0; ci < containers.length; ci++) {
      var container = containers[ci];
      if (!container || container.closest('#qs-panel')) continue;
      var pool = [];
      try {
        pool = Array.from(container.querySelectorAll(nativeSelectorText));
      } catch (_) {}
      if (!pool.length) {
        pool = Array.from(container.querySelectorAll('button, label, div, article, li, section, [role="button"], [role="radio"], [role="option"], [role="checkbox"], [class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"]'));
      }
      var children = pool.map(function(child) {
        return dgFindVisualChoiceRoot(child, result) || dgPromoteChoiceRoot(child, result);
      }).filter(looksLikeGridCard);
      if (children.length < 2) continue;

      var seen = new Set();
      var normalized = children.filter(function(el) {
        var rect = el.getBoundingClientRect();
        var key = dgNorm(dgChoiceText(el)) + '|' + Math.round(rect.top / 8) + '|' + Math.round(rect.left / 8);
        if (seen.has(key)) return false;
        seen.add(key);
        return true;
      });
      if (normalized.length < 2) continue;

      var avgWidth = normalized.reduce(function(sum, el) { return sum + el.getBoundingClientRect().width; }, 0) / normalized.length;
      var similar = normalized.filter(function(el) {
        return Math.abs(el.getBoundingClientRect().width - avgWidth) <= Math.max(140, avgWidth * 0.72);
      });
      if (similar.length >= 2) {
        return similar.sort(function(a, b) {
          var ar = a.getBoundingClientRect();
          var br = b.getBoundingClientRect();
          return ar.top - br.top || ar.left - br.left;
        }).slice(0, 8);
      }
    }

    return [];
  }

  function dgCollectViewportChoiceCards(result) {
    if (!dgHasForcedChoiceMode() && (dgLooksLikeDragType(result) || dgHasRealDragSignals(result))) return [];
    var isDesktop = dgIsDesktopWide();
    var qRect = dgRelevantQuestionRect(result);
    var pool = [];
    try {
      pool = Array.from(document.querySelectorAll('button, label, div, article, li, section'));
    } catch (_) {}

    var seen = new Set();
    var out = [];

    function hasCardVisual(el) {
      if (!el) return false;
      var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
      var bg = style ? String(style.backgroundColor || '') : '';
      var bgImg = style ? String(style.backgroundImage || '') : '';
      var border = style ? String(style.borderColor || '') : '';
      var shadow = style ? String(style.boxShadow || '') : '';
      return (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent')
        || (bgImg && bgImg !== 'none')
        || (border && border !== 'rgba(0, 0, 0, 0)' && border !== 'transparent')
        || (shadow && shadow !== 'none');
    }

    pool.forEach(function(node) {
      if (!node || !node.getBoundingClientRect || node.closest('#qs-panel') || node.offsetParent === null) return;
      var el = dgFindVisualChoiceRoot(node, result) || dgPromoteChoiceRoot(node, result);
      if (!el || !el.getBoundingClientRect || el.closest('#qs-panel') || dgIsChoiceGroupShell(el)) return;

      var rect = el.getBoundingClientRect();
      var txt = dgChoiceText(el);
      if (!txt || txt.length > (isDesktop ? 120 : 90) || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;
      if (rect.width < window.innerWidth * (isDesktop ? 0.18 : 0.40)) return;
      if (rect.height < 90 || rect.height > (isDesktop ? 560 : 320)) return;
      if (rect.top < window.innerHeight * (isDesktop ? 0.42 : 0.40)) return;
      if (qRect && rect.top < qRect.bottom - 8) return;
      if (!dgLooksLikeChoiceContainer(el) && !dgIsNativeChoiceRoot(el) && !hasCardVisual(el)) return;

      var score = dgChoiceScore(el, result);
      if (score < 110) return;

      var key = dgNorm(txt) + '|' + Math.round(rect.top / 8) + '|' + Math.round(rect.left / 8) + '|' + Math.round(rect.width / 8);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(el);
    });

    if (out.length < 2) return [];

    out = out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });

    var avgWidth = out.reduce(function(sum, el) { return sum + el.getBoundingClientRect().width; }, 0) / out.length;
    var avgHeight = out.reduce(function(sum, el) { return sum + el.getBoundingClientRect().height; }, 0) / out.length;
    var normalized = out.filter(function(el) {
      var rect = el.getBoundingClientRect();
      return Math.abs(rect.width - avgWidth) <= Math.max(160, avgWidth * 0.72)
        && Math.abs(rect.height - avgHeight) <= Math.max(140, avgHeight * 0.65);
    });

    return (normalized.length >= 2 ? normalized : out).slice(0, 8);
  }

  function dgCollectLegacyChoiceOptions(result) {
    var seen = new Set();
    var out = [];

    function push(el) {
      if (!el) return;
      var promoted = dgPromoteChoiceRoot(el, result);
      if (!promoted || !promoted.getBoundingClientRect || promoted.closest("#qs-panel")) return;
      if (dgIsChoiceGroupShell(promoted)) return;
      var rect = promoted.getBoundingClientRect();
      var txt = dgChoiceText(promoted);
      if (!txt || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;
      if (rect.width < 40 || rect.height < 24 || rect.height > (dgIsDesktopWide() ? Math.min(window.innerHeight * 0.84, 760) : Math.min(window.innerHeight * 0.38, 320))) return;
      var key = dgNorm(txt) + "|" + Math.round(rect.top / 8) + "|" + Math.round(rect.left / 8) + "|" + Math.round(rect.width / 8);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(promoted);
    }

    var optSelectors = [
      '.option.is-selectable','[data-testid="option"]','[data-testid="answer-option"]',
      '[class*="OptionCard"]','[class*="option-card"]','.options-container .option',
      '[class*="MCQOption"]','[class*="mcq-option"]','.option-item','.answer-option',
      'button[class*="option"]','[role="option"]','[class*="AnswerOption"]','[class*="answerOption"]',
      '[class*="choice"]','[class*="Choice"]','[class*="alternative"]','[class*="Alternative"]',
      '[class*="answer-choice"]','[class*="AnswerChoice"]','[class*="quiz-option"]','[class*="QuizOption"]',
      '[class*="response-option"]','[class*="ResponseOption"]','[role="radio"]','[role="checkbox"]',
      'label[class*="option"]','label[class*="Option"]','label[class*="answer"]','label[class*="Answer"]'
    ];

    for (var si = 0; si < optSelectors.length; si++) {
      try {
        var found = document.querySelectorAll(optSelectors[si]);
        if (found.length >= 2) {
          Array.from(found).forEach(function(el) {
            if (el && el.offsetParent !== null && !el.closest("#qs-panel")) push(el);
          });
          if (out.length >= 2) break;
        }
      } catch (_) {}
    }

    if (out.length < 2) {
      var containerSels = ['[class*="options"]', '[class*="Options"]', '[class*="choices"]', '[class*="Choices"]', '[class*="answers"]', '[class*="Answers"]'];
      for (var ci = 0; ci < containerSels.length; ci++) {
        try {
          var containers = document.querySelectorAll(containerSels[ci]);
          for (var cj = 0; cj < containers.length; cj++) {
            var container = containers[cj];
            if (!container || container.closest("#qs-panel")) continue;
            var kids = container.querySelectorAll('button, [role="button"], [role="option"], [role="radio"], [role="checkbox"], label, [class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"]');
            Array.from(kids).forEach(function(el) {
              if (el && el.offsetParent !== null && !el.closest("#qs-panel") && dgChoiceText(el)) push(el);
            });
            if (out.length >= 2) break;
          }
          if (out.length >= 2) break;
        } catch (_) {}
      }
    }

    if (out.length < 2) {
      var mainArea = document.querySelector('main, [class*="game"], [class*="Game"], [class*="quiz"], [class*="Quiz"]') || document.body;
      if (mainArea) {
        var blockCandidates = Array.from(mainArea.querySelectorAll('button, label, div, article, li, section')).filter(function(el) {
          if (!el || !el.getBoundingClientRect || !el.offsetParent || el.closest("#qs-panel")) return false;
          var txt = dgChoiceText(el);
          if (!txt || txt.length < 1 || txt.length > 120 || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return false;
          var rect = el.getBoundingClientRect();
          var isDesktop = dgIsDesktopWide();
          if (rect.width < window.innerWidth * (isDesktop ? 0.14 : 0.40) || rect.height < 36 || rect.height > (isDesktop ? Math.min(window.innerHeight * 0.84, 760) : 220)) return false;
          if (rect.top < window.innerHeight * (isDesktop ? 0.18 : 0.38)) return false;
          var style = window.getComputedStyle ? window.getComputedStyle(el) : null;
          var bg = style ? String(style.backgroundColor || "") : "";
          var bgImg = style ? String(style.backgroundImage || "") : "";
          var border = style ? String(style.borderColor || "") : "";
          var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
          return role === 'button' || role === 'radio' || role === 'option' || role === 'checkbox' || el.tagName === 'BUTTON' || el.tagName === 'LABEL' || (bg && bg !== 'rgba(0, 0, 0, 0)' && bg !== 'transparent') || bgImg !== 'none' || (border && border !== 'rgba(0, 0, 0, 0)');
        });

        if (blockCandidates.length >= 2) {
          var avgWidth = blockCandidates.reduce(function(sum, el) { return sum + el.getBoundingClientRect().width; }, 0) / blockCandidates.length;
          blockCandidates.filter(function(el) {
            return Math.abs(el.getBoundingClientRect().width - avgWidth) < Math.max(40, avgWidth * 0.24);
          }).slice(0, 8).forEach(push);
        }
      }
    }

    return out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });
  }

  function dgCollectChoiceOptions(result) {
    var nativeChoiceRoots = dgCollectNativeChoiceRoots(result);
    if (nativeChoiceRoots.length >= 2) return nativeChoiceRoots;
    if (!dgHasForcedChoiceMode() && dgLooksLikeDragType(result) && dgHasRealDragSignals(result)) return [];
    var seen = new Set();
    var out = [];
    var forcedChoice = dgHasForcedChoiceMode();
    var qRect = dgRelevantQuestionRect(result);
    var nativeSelectorText = dgNativeChoiceSelectors().join(', ');
    var structuredGrid = dgCollectStructuredGridOptions(result);
    if (structuredGrid.length >= 2) return structuredGrid;
    var viewportCards = dgCollectViewportChoiceCards(result);
    if (viewportCards.length >= 2) return viewportCards;
    var nativeNodes = [];
    var seededNodes = [];
    var textSeedNodes = [];
    try {
      seededNodes = Array.isArray(result && result.elements) ? result.elements.filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var txt = dgChoiceText(el);
        return !!txt && !dgIsActionText(txt) && !dgIsPlaceholderSelectText(txt);
      }) : [];
    } catch (_) {}
    try {
      textSeedNodes = Array.from(document.querySelectorAll('#optionText, [id="optionText"], [data-cy="option-text"], [data-testid="option-text"], [class*="option-text"], [class*="OptionText"], .option-inner, .dnd-option-text, annotation[encoding="application/x-tex"]'));
    } catch (_) {}
    try {
      nativeNodes = Array.from(document.querySelectorAll(nativeSelectorText));
    } catch (_) {}
    var nodes = seededNodes.concat(textSeedNodes).concat(nativeNodes).concat(Array.from(document.querySelectorAll('button, label, div, article, li, span, section, [role="button"], [role="radio"], [role="option"], [role="checkbox"], [class*="option"], [class*="Option"], [class*="choice"], [class*="Choice"], [class*="answer"], [class*="Answer"], [class*="alternative"], [class*="Alternative"], [class*="card"], [class*="Card"], [data-testid], [data-answer], [data-option], [data-index]')));

    function toClickable(el) {
      if (!el) return null;
      if (el.closest) {
        var nativeRoot = el.closest('.option.is-selectable, .option.is-msq, .question-options-layout .option, [class*="question-options"] .option, [class*="answer-option"], [class*="AnswerOption"], [class*="mcq-option"], [class*="quiz-option"], [role="radio"], [role="option"], [role="checkbox"], label, button');
        if (nativeRoot && nativeRoot !== document.body && nativeRoot !== document.documentElement && !nativeRoot.closest('#qs-panel')) {
          return dgPromoteChoiceRoot(nativeRoot, result);
        }
      }
      if (el.closest) {
        var semanticRoot = el.closest('[class*="option"], [class*="Option"], [class*="answer"], [class*="Answer"], [class*="choice"], [class*="Choice"], [class*="alternative"], [class*="Alternative"], [class*="mcq"], [class*="quiz-option"], [data-testid*="option"], [data-cy*="option"]');
        if (semanticRoot && semanticRoot !== document.body && semanticRoot !== document.documentElement && !semanticRoot.closest('#qs-panel') && !dgIsChoiceGroupShell(semanticRoot)) {
          return dgPromoteChoiceRoot(semanticRoot, result);
        }
      }
      var visualRoot = dgFindVisualChoiceRoot(el, result);
      if (visualRoot) return visualRoot;
      if (el.closest) {
        var root = el.closest('button, label, [role="button"], [role="radio"], [role="option"], [role="checkbox"]');
        if (root && root !== document.body && root !== document.documentElement) return dgPromoteChoiceRoot(root, result);
      }
      return dgPromoteChoiceRoot(el, result);
    }

    nodes.forEach(function(node) {
      var el = toClickable(node);
      if (!el || el.closest("#qs-panel")) return;
      var elRect = el.getBoundingClientRect ? el.getBoundingClientRect() : null;
      if (!el.offsetParent && !(elRect && elRect.width > 0 && elRect.height > 0)) return;
      var txt = dgChoiceText(el);
      var rect = elRect || { top: 0, left: 0, width: 0, height: 0, bottom: 0 };
      if (qRect && !forcedChoice) {
        if (rect.top < qRect.bottom - 24) return;
        if (Math.abs((rect.left + rect.width / 2) - (window.innerWidth / 2)) > window.innerWidth * 0.50) return;
      }
      var isNativeChoice = dgIsNativeChoiceRoot(el);
      var isLargeColoredBlock = rect.width >= (dgIsDesktopWide() ? window.innerWidth * 0.14 : window.innerWidth * 0.38) && rect.height >= 36 && txt.length <= (dgIsDesktopWide() ? 420 : 300);
      if (!dgLooksLikeChoiceContainer(el) && !isLargeColoredBlock && !isNativeChoice) return;
      var score = dgChoiceScore(el, result);
      if (score < (isNativeChoice || forcedChoice ? 24 : 48)) return;
      var key = dgNorm(txt) + "|" + Math.round(rect.top / 6) + "|" + Math.round(rect.left / 6) + "|" + Math.round(rect.width / 6);
      if (seen.has(key)) return;

      for (var i = 0; i < out.length; i++) {
        var prev = out[i];
        var prevRect = prev.getBoundingClientRect();
        var sameText = dgNorm(dgChoiceText(prev)) === dgNorm(txt);
        var sameSpot = Math.abs(prevRect.top - rect.top) < 20 && Math.abs(prevRect.left - rect.left) < 20;
        var nested = prev.contains(el) || el.contains(prev);
        if (sameText && (sameSpot || nested)) {
          if (dgChoiceScore(el, result) > dgChoiceScore(prev, result)) out[i] = el;
          seen.add(key);
          return;
        }
      }

      seen.add(key);
      out.push(el);
    });

    out = out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });

    if (out.length > 8) {
      out = out.filter(function(el) {
        var rect = el.getBoundingClientRect();
        return dgIsNativeChoiceRoot(el) || (rect.width >= window.innerWidth * (dgIsDesktopWide() ? 0.12 : 0.34) && rect.height >= 34);
      });
    }

    if (out.length < 2 && seededNodes.length >= 2) {
      out = seededNodes.map(function(el) { return toClickable(el); }).filter(function(el) {
        if (!el || !el.getBoundingClientRect || el.closest("#qs-panel")) return false;
        var txt = dgChoiceText(el);
        return !!txt && !dgIsActionText(txt) && !dgIsPlaceholderSelectText(txt);
      }).sort(function(a, b) {
        var ar = a.getBoundingClientRect();
        var br = b.getBoundingClientRect();
        return ar.top - br.top || ar.left - br.left;
      });
    }

    if (out.length < 2) {
      var legacyOut = dgCollectLegacyChoiceOptions(result);
      if (legacyOut.length >= 2) out = legacyOut;
    }

    return out;
  }

  function dgScoreTrigger(el) {
    if (!el || !el.getBoundingClientRect) return -999;
    var txt = dgTxt(el);
    var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
    var popup = ((el.getAttribute && el.getAttribute("aria-haspopup")) || "").toLowerCase();
    var rect = el.getBoundingClientRect();
    var score = 0;
    if (dgIsPlaceholderSelectText(txt)) score += 280;
    if (popup === "listbox" || role === "combobox") score += 120;
    if (el.tagName === "BUTTON") score += 18;
    if (el.tagName === "SELECT") score += 70;
    if (rect.width >= 110 && rect.height >= 30 && rect.height <= 96) score += 20;
    if (txt.length > 80) score -= 40;
    return score;
  }

  function dgCollectSelectTriggers() {
    var seen = new Set();
    var out = [];
    var pool = Array.from(document.querySelectorAll('button.options-dropdown, button[aria-haspopup="listbox"], [role="combobox"], [aria-haspopup="listbox"], select, [class*="select"], [class*="Select"], [class*="dropdown"], [class*="Dropdown"]'));

    function push(el) {
      if (!el || !el.offsetParent || el.closest("#qs-panel")) return;
      var txt = dgTxt(el);
      var rect = el.getBoundingClientRect();
      if (!txt || dgIsActionText(txt)) return;
      if (rect.width < 100 || rect.height < 28 || rect.height > 96) return;

      var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
      var popup = ((el.getAttribute && el.getAttribute("aria-haspopup")) || "").toLowerCase();
      var interactive = el.tagName === "SELECT" || el.tagName === "BUTTON" || popup === "listbox" || role === "combobox";
      if (!interactive && !dgIsPlaceholderSelectText(txt)) return;

      var key = dgNorm(txt) + "|" + Math.round(rect.top / 8) + "|" + Math.round(rect.left / 8) + "|" + Math.round(rect.width / 8);
      if (seen.has(key)) return;

      for (var i = 0; i < out.length; i++) {
        var ex = out[i];
        var exTxt = dgTxt(ex);
        var exRect = ex.getBoundingClientRect();
        var sameText = dgNorm(exTxt) === dgNorm(txt);
        var nested = ex.contains(el) || el.contains(ex);
        var sameSpot = Math.abs(exRect.top - rect.top) < 18 && Math.abs(exRect.left - rect.left) < 18;
        if (sameText && (nested || sameSpot)) {
          if (dgScoreTrigger(el) > dgScoreTrigger(ex)) out[i] = el;
          seen.add(key);
          return;
        }
      }

      seen.add(key);
      out.push(el);
    }

    pool.forEach(push);
    return out.sort(function(a, b) {
      return dgScoreTrigger(b) - dgScoreTrigger(a) || a.getBoundingClientRect().top - b.getBoundingClientRect().top;
    });
  }

  function dgGetMenuItems(trigger) {
    var out = [];
    var seen = new Set();
    var trigRect = trigger && trigger.getBoundingClientRect ? trigger.getBoundingClientRect() : null;
    var selectors = [
      '[role="option"]','[role="menuitem"]','[role="menuitemradio"]','[role="menuitemcheckbox"]','li[role="option"]',
      '[class*="dropdown"] [class*="option"]','[class*="Dropdown"] [class*="option"]','[class*="menu"] [class*="item"]','[class*="Menu"] [class*="item"]',
      '[class*="popup"] [class*="option"]','[class*="Popup"] [class*="option"]','[class*="listbox"] > *','[class*="Listbox"] > *',
      '[data-radix-popper-content-wrapper] [role="option"]','[data-radix-popper-content-wrapper] [data-value]','[data-value]'
    ];

    function add(el) {
      if (!el || !el.offsetParent || el.closest("#qs-panel")) return;
      if (trigger && (el === trigger || (trigger.contains && trigger.contains(el)) || (el.contains && el.contains(trigger)))) return;

      var txt = dgTxt(el);
      if (!txt || txt.length > 80 || dgIsActionText(txt) || dgIsPlaceholderSelectText(txt)) return;

      var role = ((el.getAttribute && el.getAttribute("role")) || "").toLowerCase();
      var popup = ((el.getAttribute && el.getAttribute("aria-haspopup")) || "").toLowerCase();
      if (popup === "listbox" || role === "combobox") return;

      var rect = el.getBoundingClientRect();
      if (rect.width < 40 || rect.height < 20 || rect.height > 96) return;
      if (trigRect) {
        var center = rect.left + rect.width / 2;
        var trigCenter = trigRect.left + trigRect.width / 2;
        if (Math.abs(center - trigCenter) > Math.max(trigRect.width * 1.4, 220)) return;
        if (rect.top < trigRect.top - 64 || rect.top > trigRect.bottom + Math.min(window.innerHeight * 0.82, 620)) return;
      }

      var key = dgNorm(txt) + "|" + Math.round(rect.top / 6) + "|" + Math.round(rect.left / 6);
      if (seen.has(key)) return;
      seen.add(key);
      out.push(el);
    }

    selectors.forEach(function(sel) {
      try { document.querySelectorAll(sel).forEach(add); } catch (_) {}
    });

    return out.sort(function(a, b) {
      var ar = a.getBoundingClientRect();
      var br = b.getBoundingClientRect();
      return ar.top - br.top || ar.left - br.left;
    });
  }

  function dgUniqueOptions(items) {
    var seen = new Set();
    return (items || []).map(function(el) { return dgTxt(el); }).filter(function(txt) {
      var key = dgNorm(txt);
      if (!key || seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }

  function dgShouldOverrideResult(result, triggers) {
    if (!triggers.length) return false;
    if (!result || !result.questionType) return true;
    if (result.questionType === "unknown" || result.questionType === "dropdown") return true;
    var opts = Array.isArray(result.options) ? result.options : [];
    if (!opts.length && triggers.length > 0) return true;
    if (opts.some(dgIsPlaceholderSelectText)) return true;
    if (opts.length > 1 && opts.every(function(opt) { return dgNorm(opt) === dgNorm(opts[0]); })) return true;
    if ((result.fillBlanks || []).length && triggers.length !== (result.fillBlanks || []).length) return true;
    return false;
  }

  var __dgExtract = extractPageContent;
  extractPageContent = function() {
    var result = __dgExtract.apply(this, arguments) || {};
    try {
      var forcedMode = dgForcedMode();
      if (forcedMode === "drag" && (dgHasRealDragSignals(result) || dgLooksLikeDragType(result))) {
        result.questionType = /match|connect/.test(dgNorm((result && (result.questionType || result.type || "")) || "")) ? "match" : "drag";
        result.type = result.questionType;
        result.selectMode = "drag";
        result.dynamicSelect = false;
        log("DRAG FORCE v2.6.0: type=" + result.questionType, "inf");
        return result;
      }
      var triggers = dgCollectSelectTriggers();
      if (triggers.length) {
        var placeholderTriggers = triggers.filter(function(el) { return dgIsPlaceholderSelectText(dgTxt(el)); });
        var targetTriggers = placeholderTriggers.length ? placeholderTriggers : triggers;
        var menuItems = dgGetMenuItems(targetTriggers[0]);
        var options = dgUniqueOptions(menuItems);

        if (dgHasForcedSelectMode() || dgShouldOverrideResult(result, targetTriggers) || targetTriggers.length > 1) {
          var forcedMultiSelect = forcedMode === "multi_select";
          result.questionType = forcedMultiSelect || targetTriggers.length > 1 ? "multi" : "single";
          result.type = result.questionType;
          result.selectMode = forcedMultiSelect || targetTriggers.length > 1 ? "multi_select" : "single_select";
          result.dynamicSelect = true;
          result.inputElement = targetTriggers[0];
          result.fillBlanks = targetTriggers.slice();
          result.elements = menuItems.slice();
          result.options = options.slice();
          result.isWaygroundSelectPatched = true;
          log("SELECT PATCH v2.6.0: mode=" + result.selectMode + " blanks=" + result.fillBlanks.length + " opts=" + result.options.length + (forcedMode !== "auto" ? " forced=" + forcedMode : ""), "inf");
        }
      }

      var choiceEls = dgCollectChoiceOptions(result);
      if (choiceEls.length) {
        var choiceOptions = dgUniqueOptions(choiceEls);
        var falseDragDesktop = dgIsDesktopWide() && dgLooksLikeDragType(result) && !dgHasRealDragSignals(result);
        var shouldPatchChoices = choiceEls.length >= 2 && (
          dgHasForcedChoiceMode() ||
          !result.questionType ||
          result.questionType === "unknown" ||
          result.questionType === "dropdown" ||
          falseDragDesktop ||
          !Array.isArray(result.options) ||
          !result.options.length ||
          result.options.every(function(opt) { return dgIsPlaceholderSelectText(opt); })
        );
        if (shouldPatchChoices && forcedMode !== "drag") {
          var isMulti = forcedMode === "multi_choice" ? true : dgIsMultiQuestion(result);
          result.questionType = isMulti ? "multi" : "single";
          result.type = result.questionType;
          result.selectMode = isMulti ? "multi_choice" : "single_choice";
          result.dynamicSelect = false;
          result.inputElement = choiceEls[0];
          result.fillBlanks = [];
          result.elements = choiceEls.slice();
          result.options = choiceOptions.slice();
          result.isWaygroundChoicePatched = true;
          log("CHOICE PATCH v2.6.0: mode=" + result.selectMode + " opts=" + result.options.length + (forcedMode !== "auto" ? " forced=" + forcedMode : ""), "inf");
        }
      } else if (dgHasForcedChoiceMode()) {
        log("CHOICE PATCH miss v2.6.0: forced=" + forcedMode + " type=" + String(result.questionType || "unknown"), "wrn");
      }

      if (forcedMode !== 'auto' && window.__dgLastEmbeddedDetectionMode !== forcedMode) {
        window.__dgLastEmbeddedDetectionMode = forcedMode;
        log("DETECTION EMBED v2.6.0: mode=" + forcedMode, "inf");
      }
    } catch (e) {
      log("SELECT PATCH extract error: " + (e && e.message ? e.message : e), "wrn");
    }
    return result;
  };

  function dgUiModeFromLabel(label) {
    var txt = dgNorm(label);
    if (/^auto$/.test(txt)) return 'auto';
    if (/^alternativa|single|choice|mcq|radio/.test(txt)) return 'choice';
    if (/multi|multipla|múltipla/.test(txt)) return 'multi_choice';
    if (/arrastar|drag|soltar|match|connect/.test(txt)) return 'drag';
    if (/multi.?select/.test(txt)) return 'multi_select';
    if (/select|dropdown|combobox|lacuna|blank/.test(txt)) return 'select';
    if (/v\/f|verdadeiro|falso|true false/.test(txt)) return 'true_false';
    if (/aberta|open|texto/.test(txt)) return 'open';
    if (/enquete|poll/.test(txt)) return 'poll';
    return '';
  }

  function dgFindDetectionButtons(panel) {
    return Array.from(panel.querySelectorAll('button, [role="button"], [role="tab"]')).filter(function(el) {
      var mode = dgUiModeFromLabel(dgTxt(el));
      return !!mode && !el.closest('.dg-detection-embed-bar');
    });
  }

  function dgPersistEmbeddedDetection(mode, btn) {
    if (!mode) return;
    try {
      if (!S.settings) S.settings = {};
      S.settings.detectionMode = mode;
      S.settings.forceDetectionMode = mode;
      S.settings.detectionEmbeddedAt = new Date().toISOString();
      try { localStorage.setItem('dgly_detection_mode', mode); } catch (_) {}
      var client = window.DoglyWebhook && window.DoglyWebhook.createClient ? window.DoglyWebhook.createClient({}) : null;
      var payload = Object.assign({}, S.settings, {
        detectionMode: mode,
        forceDetectionMode: mode,
        detectionEmbeddedAt: S.settings.detectionEmbeddedAt,
      });
      var done = function(ok) {
        if (btn) {
          btn.dataset.pending = '0';
          btn.textContent = ok ? ('✓ Embutido: ' + mode) : 'Embutir detecção';
          btn.style.opacity = '1';
        }
        setStatus('Detecção embutida: ' + mode, ok ? 'suc' : 'wrn');
        log('DETECTION SAVE v2.6.0: ' + mode + ' ' + (ok ? 'ok' : 'fallback'), ok ? 'suc' : 'wrn');
        var panel = document.querySelector('#qs-panel');
        var detectBtn = panel ? Array.from(panel.querySelectorAll('button')).find(function(el) { return /detectar|detect/.test(dgNorm(dgTxt(el))); }) : null;
        if (detectBtn) setTimeout(function() { try { detectBtn.click(); } catch (_) {} }, 120);
      };
      if (client && client.saveConfig) {
        if (btn) {
          btn.textContent = 'Embutindo...';
          btn.style.opacity = '0.82';
        }
        Promise.resolve(client.saveConfig(payload)).then(function(res) {
          done(!res || res.success !== false);
        }).catch(function() {
          done(false);
        });
      } else {
        done(false);
      }
    } catch (_) {}
  }

  function dgInjectDetectionEmbedUi() {
    var panel = document.querySelector('#qs-panel');
    if (!panel) return;
    var buttons = dgFindDetectionButtons(panel);
    if (buttons.length < 2) return;
    var host = buttons[0].parentElement;
    if (!host || !host.parentElement) return;
    var bar = host.parentElement.querySelector('.dg-detection-embed-bar');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'dg-detection-embed-bar';
      bar.style.display = 'flex';
      bar.style.alignItems = 'center';
      bar.style.justifyContent = 'space-between';
      bar.style.gap = '10px';
      bar.style.marginTop = '12px';
      bar.style.padding = '10px 12px';
      bar.style.borderRadius = '14px';
      bar.style.border = '1px solid rgba(123,92,255,.28)';
      bar.style.background = 'linear-gradient(135deg, rgba(20,24,36,.92), rgba(51,30,92,.88))';
      bar.style.boxShadow = '0 12px 28px rgba(0,0,0,.26), inset 0 1px 0 rgba(255,255,255,.06)';

      var info = document.createElement('div');
      info.className = 'dg-detection-embed-info';
      info.style.display = 'flex';
      info.style.flexDirection = 'column';
      info.style.minWidth = '0';

      var title = document.createElement('strong');
      title.textContent = 'Embutir detecção';
      title.style.fontSize = '12px';
      title.style.color = '#f8faff';

      var meta = document.createElement('span');
      meta.className = 'dg-detection-embed-meta';
      meta.textContent = 'Selecione um modo estável e aplique neste script';
      meta.style.fontSize = '11px';
      meta.style.color = 'rgba(222,231,255,.72)';
      meta.style.lineHeight = '1.35';

      var apply = document.createElement('button');
      apply.type = 'button';
      apply.className = 'dg-detection-embed-action';
      apply.textContent = 'Embutir detecção';
      apply.style.border = '0';
      apply.style.cursor = 'pointer';
      apply.style.padding = '10px 14px';
      apply.style.borderRadius = '12px';
      apply.style.fontWeight = '700';
      apply.style.fontSize = '12px';
      apply.style.color = '#ffffff';
      apply.style.whiteSpace = 'nowrap';
      apply.style.background = 'linear-gradient(135deg, #7c3aed, #22c55e)';
      apply.style.boxShadow = '0 10px 22px rgba(124,58,237,.28)';
      apply.addEventListener('click', function() {
        var selected = apply.dataset.selectedMode || (S.settings && S.settings.pendingDetectionMode) || (S.settings && S.settings.detectionMode) || 'auto';
        dgPersistEmbeddedDetection(selected, apply);
      });

      info.appendChild(title);
      info.appendChild(meta);
      bar.appendChild(info);
      bar.appendChild(apply);
      host.parentElement.appendChild(bar);
    }

    var actionBtn = bar.querySelector('.dg-detection-embed-action');
    var metaEl = bar.querySelector('.dg-detection-embed-meta');
    buttons.forEach(function(btn) {
      if (btn.dataset.dgEmbedHooked === '1') return;
      btn.dataset.dgEmbedHooked = '1';
      btn.addEventListener('click', function() {
        var mode = dgUiModeFromLabel(dgTxt(btn));
        if (!mode) return;
        if (!S.settings) S.settings = {};
        S.settings.pendingDetectionMode = mode;
        if (actionBtn) actionBtn.dataset.selectedMode = mode;
        if (actionBtn) actionBtn.textContent = 'Embutir: ' + mode;
        if (metaEl) metaEl.textContent = 'Modo selecionado: ' + mode + ' · será salvo neste script';
      }, true);
    });

    var currentMode = (S.settings && (S.settings.pendingDetectionMode || S.settings.detectionMode)) || 'auto';
    if (actionBtn && !actionBtn.dataset.selectedMode) actionBtn.dataset.selectedMode = currentMode;
    if (metaEl) metaEl.textContent = 'Modo atual: ' + currentMode + ' · clique em Embutir para forçar';
  }

  setTimeout(dgInjectDetectionEmbedUi, 900);
  setInterval(dgInjectDetectionEmbedUi, 1500);

  function dgParseAnswers(answer, blanksCount) {
    var raw = String(answer || "").trim();
    if (!raw) return [];
    var lines = raw.split(/\n+/).map(function(v) { return v.trim(); }).filter(Boolean);
    if (lines.length === 1 && blanksCount > 1) {
      lines = raw.split(/[;,|]+/).map(function(v) { return v.trim(); }).filter(Boolean);
    }
    if (lines.length === 1 && blanksCount > 1) {
      var tf = raw.match(/(verdadeiro|falso|true|false|v\/f|v|f)/ig);
      if (tf && tf.length > 1) lines = tf;
    }
    return lines.map(function(v) { return v.replace(/^\s*([A-Z]|\d+)\s*[).:-]?\s*/i, "").trim(); }).filter(Boolean);
  }

  function dgItemScore(itemText, answerText) {
    var item = dgNorm(itemText);
    var ans = dgNorm(answerText);
    if (!item || !ans) return -1;
    if (item === ans) return 1000;
    var tfTrue = /^(true|verdadeiro|v|sim|yes)$/i;
    var tfFalse = /^(false|falso|f|nao|não|no)$/i;
    if (tfTrue.test(answerText) && tfTrue.test(itemText)) return 950;
    if (tfFalse.test(answerText) && tfFalse.test(itemText)) return 950;
    if (item.indexOf(ans) >= 0 || ans.indexOf(item) >= 0) return 820 - Math.abs(item.length - ans.length);
    var aWords = ans.split(/\s+/).filter(Boolean);
    var iWords = item.split(/\s+/).filter(Boolean);
    var common = aWords.filter(function(w) { return iWords.indexOf(w) >= 0; }).length;
    if (!common) return -1;
    return Math.round((common / Math.max(aWords.length, iWords.length, 1)) * 700);
  }

  function dgResolveMenuItem(items, answerText, usedMap) {
    if (!items || !items.length) return null;
    var best = null;
    var bestScore = -1;
    var letterMatch = String(answerText || "").match(/^\s*([A-Da-d])\s*[).\s]?/);
    if (letterMatch) {
      var idx = letterMatch[1].toUpperCase().charCodeAt(0) - 65;
      if (idx >= 0 && idx < items.length && !(usedMap && usedMap[idx])) return { el: items[idx], idx: idx, label: dgTxt(items[idx]) };
    }
    for (var i = 0; i < items.length; i++) {
      if (usedMap && usedMap[i]) continue;
      var score = dgItemScore(dgTxt(items[i]), answerText);
      if (score > bestScore) {
        best = items[i];
        bestScore = score;
      }
    }
    if (!best || bestScore < 0) return null;
    return { el: best, idx: items.indexOf(best), label: dgTxt(best) };
  }

  function dgResolveChoiceElement(items, answerText, usedMap) {
    if (!items || !items.length) return null;
    var best = null;
    var bestScore = -1;
    var letterMatch = String(answerText || "").match(/^\s*([A-Da-d])\s*[).\s-]?/);
    if (letterMatch) {
      var idx = letterMatch[1].toUpperCase().charCodeAt(0) - 65;
      if (idx >= 0 && idx < items.length && !(usedMap && usedMap[idx])) return { el: items[idx], idx: idx, label: dgTxt(items[idx]) };
    }
    for (var i = 0; i < items.length; i++) {
      if (usedMap && usedMap[i]) continue;
      var label = dgChoiceText(items[i]).replace(/^\s*([A-Z]|\d+)\s*[).:-]\s*/i, "").trim();
      var score = dgItemScore(label, answerText);
      if (score > bestScore) {
        best = items[i];
        bestScore = score;
      }
    }
    if (!best || bestScore < 0) return null;
    return { el: best, idx: items.indexOf(best), label: dgChoiceText(best) };
  }

  function dgClickChoice(el, done) {
    if (!el) return done(false);
    try { highlight(el); } catch (_) {}
    try { el.click(); } catch (_) {}
    setTimeout(function() {
      done(true);
    }, 80);
  }

  function dgOpenAndPick(trigger, answerText, done, usedMap) {
    if (!trigger) {
      done(false, answerText);
      return;
    }
    try { highlight(trigger); } catch (_) {}
    try { trigger.click(); } catch (_) {}
    setTimeout(function() {
      var items = dgGetMenuItems(trigger);
      var resolved = dgResolveMenuItem(items, answerText, usedMap);
      if (resolved && resolved.el) {
        try { highlight(resolved.el); } catch (_) {}
        try { resolved.el.click(); } catch (_) {}
        if (usedMap) usedMap[resolved.idx] = true;
        done(true, resolved.label || answerText);
      } else {
        done(false, answerText);
      }
    }, 280);
  }

  var __dgApply = applyAnswer;
  applyAnswer = function(data, answer) {
    try {
      if (data && data.isWaygroundChoicePatched && Array.isArray(data.elements) && data.elements.length) {
        var choiceParts = dgParseAnswers(answer, data.questionType === "multi" ? data.elements.length : 1);
        var choiceUsed = {};
        if ((data.questionType === "multi" || data.selectMode === "multi_choice") && choiceParts.length > 1) {
          var cp = 0;
          var clicked = 0;
          (function nextChoice() {
            if (cp >= choiceParts.length) {
              setStatus(clicked + " alternativas marcadas", clicked > 0 ? "suc" : "wrn");
              log("CHOICE MULTI v2.6.0: marcadas=" + clicked, clicked > 0 ? "suc" : "wrn");
              if (S.settings.autoSubmit && clicked > 0) setTimeout(clickSubmit, 850);
              return;
            }
            var resolvedChoice = dgResolveChoiceElement(data.elements, choiceParts[cp], choiceUsed);
            if (!resolvedChoice) {
              log("CHOICE MULTI miss: " + choiceParts[cp], "wrn");
              cp++;
              return setTimeout(nextChoice, 120);
            }
            choiceUsed[resolvedChoice.idx] = true;
            dgClickChoice(resolvedChoice.el, function(ok) {
              if (ok) clicked++;
              log("CHOICE[" + (cp + 1) + "] " + (ok ? "ok" : "fail") + ": " + resolvedChoice.label, ok ? "suc" : "wrn");
              cp++;
              setTimeout(nextChoice, 150);
            });
          })();
          return;
        }

        var wantedChoice = choiceParts[0] || String(answer || "").trim();
        var resolvedSingleChoice = dgResolveChoiceElement(data.elements, wantedChoice, choiceUsed);
        if (resolvedSingleChoice && resolvedSingleChoice.el) {
          dgClickChoice(resolvedSingleChoice.el, function(ok) {
            setStatus("Alternativa: " + String(resolvedSingleChoice.label || wantedChoice).substring(0, 60), ok ? "suc" : "wrn");
            log("CHOICE v2.6.0: " + (ok ? "respondido" : "falhou") + " -> " + String(resolvedSingleChoice.label || wantedChoice).substring(0, 60), ok ? "suc" : "wrn");
            if (S.settings.autoSubmit && ok) setTimeout(clickSubmit, 850);
          });
          return;
        }
      }

      if (data && (data.selectMode || data.isWaygroundSelectPatched || (data.dynamicSelect && (data.inputElement || (data.fillBlanks && data.fillBlanks.length))))) {
        var blanks = Array.isArray(data.fillBlanks) && data.fillBlanks.length ? data.fillBlanks.filter(Boolean) : (data.inputElement ? [data.inputElement] : []);
        if (!blanks.length) return __dgApply.apply(this, arguments);

        var parts = dgParseAnswers(answer, blanks.length);
        var used = {};

        if (blanks.length > 1) {
          var idx = 0;
          var okCount = 0;
          (function nextBlank() {
            if (idx >= blanks.length) {
              setStatus(okCount + "/" + blanks.length + " selects preenchidos", okCount > 0 ? "suc" : "wrn");
              log("MULTI SELECT v2.6.0: preenchidos=" + okCount + "/" + blanks.length, okCount > 0 ? "suc" : "wrn");
              if (S.settings.autoSubmit && okCount > 0) setTimeout(clickSubmit, 900);
              return;
            }
            var desired = parts[idx] || parts[0] || String(answer || "").trim();
            dgOpenAndPick(blanks[idx], desired, function(ok, label) {
              if (ok) okCount++;
              log("SELECT[" + (idx + 1) + "] " + (ok ? "ok" : "fail") + ": " + String(label || desired).substring(0, 60), ok ? "suc" : "wrn");
              idx++;
              setTimeout(nextBlank, ok ? 220 : 160);
            });
          })();
          return;
        }

        if ((data.questionType === "multi" || data.selectMode === "multi_select") && parts.length > 1) {
          var p = 0;
          var selected = 0;
          (function nextItem() {
            if (p >= parts.length) {
              setStatus(selected + " opcoes selecionadas", selected > 0 ? "suc" : "wrn");
              log("MULTI SELECT options v2.6.0: selecionadas=" + selected, selected > 0 ? "suc" : "wrn");
              if (S.settings.autoSubmit && selected > 0) setTimeout(clickSubmit, 900);
              return;
            }
            dgOpenAndPick(blanks[0], parts[p], function(ok) {
              if (ok) selected++;
              p++;
              setTimeout(nextItem, ok ? 220 : 160);
            }, used);
          })();
          return;
        }

        var wanted = parts[0] || String(answer || "").trim();
        dgOpenAndPick(blanks[0], wanted, function(ok, label) {
          setStatus((data.selectMode === "multi_select" ? "Multi Select" : "Select") + ": " + String(label || wanted).substring(0, 60), ok ? "suc" : "wrn");
          log("SELECT v2.6.0: " + (ok ? "respondido" : "sem match") + " -> " + String(label || wanted).substring(0, 60), ok ? "suc" : "wrn");
          if (S.settings.autoSubmit && ok) setTimeout(clickSubmit, 850);
        });
        return;
      }
    } catch (e) {
      log("SELECT PATCH apply error: " + (e && e.message ? e.message : e), "wrn");
    }
    return __dgApply.apply(this, arguments);
  };
})();
})();