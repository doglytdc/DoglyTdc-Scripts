// Alura AI Solver Pro v2 - DoglyTdc
// Alt=Show/Hide | D=Detect | R=Resolve | Enhanced Detection + Chat AI
(function(){
"use strict";

var CFG = {
  webhookUrl: "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook",
  webhookToken: "727185dd9d50d068ae4d4ec90c5f74daa70583b14b6aac27",
  manualKey: "",
  profileName: "DoglyTdc Solver",
  version: "2.0",
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
  check: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
  x: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  loader: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>',
  info: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  send: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  sparkle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>',
  checkCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
  xCircle: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>',
  image: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>'
};

// ═══ CLEANUP ═══
["al-panel","al-fab","al-style"].forEach(function(id){ var e=document.getElementById(id); if(e) e.remove(); });

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
  if(!S.useDogly || !S.webhookToken || S.webhookToken === "727185dd9d50d068ae4d4ec90c5f74daa70583b14b6aac27") return;
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
  var avatarEl = document.getElementById("al-cfg-avatar");
  var nameEl = document.getElementById("al-cfg-name");
  var subEl = document.getElementById("al-cfg-sub");
  var statusEl2 = document.getElementById("al-cfg-pstatus");
  if(!userProfile.loaded) return;
  if(avatarEl) { avatarEl.innerHTML = userProfile.avatar ? '<img src="'+userProfile.avatar+'">' : (userProfile.name||"U")[0].toUpperCase(); }
  if(nameEl) nameEl.textContent = userProfile.name || "Usuario";
  if(subEl) subEl.textContent = "DoglyTdc Alura Pro v2 • Conectado";
  if(statusEl2) { statusEl2.className = "al-cfg-pstatus connected"; statusEl2.innerHTML = '<span class="dot"></span> Online'; }
}

// ═══ REMOTE CONFIG SYNC ═══
function loadRemoteConfig() {
  if(!CFG.webhookUrl || CFG.webhookUrl === "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook" || !CFG.webhookToken || CFG.webhookToken === "727185dd9d50d068ae4d4ec90c5f74daa70583b14b6aac27") return;
  fetch(CFG.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": CFG.webhookToken },
    body: JSON.stringify({ action: "load_config" })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d.success) {
      if(d.config) {
        if(d.config.apiKey && d.config.apiKey.length > 5 && !S.apiKey) {
          S.apiKey = d.config.apiKey;
          updateBadge && updateBadge();
          log("API Key restaurada do servidor", "suc");
        }
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
      log("Config carregada do DoglyTdc", "suc");
    }
  }).catch(function(e){ log("Erro ao carregar config: " + e.message, "wrn"); });
}

function saveRemoteConfig() {
  if(!S.useDogly || !S.webhookToken || S.webhookToken === "727185dd9d50d068ae4d4ec90c5f74daa70583b14b6aac27") return;
  var config = { apiKey: S.apiKey || "", settings: S.settings, webhookToken: S.webhookToken, savedAt: new Date().toISOString() };
  fetch(CFG.webhookUrl || S.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": S.webhookToken },
    body: JSON.stringify({ action: "save_config", config: config })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d.success) log("Config sincronizada", "suc");
  }).catch(function(){});
}

var isMobile = window.innerWidth <= 768 || /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
var S = {
  apiKey: CFG.manualKey || "",
  webhookUrl: CFG.webhookUrl,
  webhookToken: CFG.webhookToken,
  useDogly: (CFG.webhookToken && CFG.webhookToken !== "727185dd9d50d068ae4d4ec90c5f74daa70583b14b6aac27" && CFG.webhookToken.length > 5),
  solving: false,
  autoMode: false,
  autoInterval: null,
  hidden: false,
  minimized: false,
  isDragging: false,
  settings: { autoSubmit: true, autoAdvance: true, visionMode: true, screenshotMode: true, delay: 2500, domExtract: true, smartDetect: true, autoScreenshot: true },
  stats: { solved: 0, correct: 0, wrong: 0, streak: 0, bestStreak: 0, domExtracted: 0 },
  logs: [],
  chatMessages: [],
  chatHistory: [],
  lastQ: null,
  lastAutoQ: null,
  lastQHash: "",
  siteState: { isAlura: false, pageType: "unknown", courseName: "", lessonName: "", questionNumber: 0, totalQuestions: 0, url: location.href },
  monitorInterval: null
};

function getApiType() {
  if(S.useDogly) return "doglytdc";
  if(!S.apiKey || S.apiKey.length < 5) return null;
  if(S.apiKey.indexOf("gsk_") === 0) return "groq";
  if(S.apiKey.indexOf("AIza") === 0) return "google";
  return "groq";
}

function norm(t) { return (t||"").toLowerCase().replace(/[^a-z0-9\u00C0-\u024F]/g,"").trim(); }
function qHash(t) { var h=0; t=(t||""); for(var i=0;i<t.length;i++){h=((h<<5)-h)+t.charCodeAt(i);h|=0;} return ""+h; }

// ═══ STYLES ═══
var css = document.createElement("style");
css.id = "al-style";
css.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
#al-fab{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,rgba(0,102,204,0.9),rgba(0,153,255,0.85));border:2px solid rgba(255,255,255,0.15);box-shadow:0 8px 32px rgba(0,102,204,0.5),0 0 0 4px rgba(0,102,204,0.1);cursor:pointer;z-index:2147483647;display:none;align-items:center;justify-content:center;color:#fff;transition:all .3s cubic-bezier(0.16,1,0.3,1);touch-action:none;-webkit-tap-highlight-color:transparent}
#al-fab:hover{transform:scale(1.1)}#al-fab:active{transform:scale(0.95)}
#al-fab .fab-pulse{position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(0,102,204,0.4);animation:al-fab-pulse 2s ease-out infinite}
@keyframes al-fab-pulse{0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.4);opacity:0}}
#al-fab .fab-badge{position:absolute;top:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:#22c55e;color:#fff;font-size:8px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid rgba(8,8,16,0.9);font-family:Inter,sans-serif}
#al-panel{position:fixed;bottom:20px;right:20px;width:400px;max-width:calc(100vw - 16px);max-height:calc(100vh - 40px);background:rgba(8,8,16,0.95);border-radius:22px;font-family:'Inter',-apple-system,sans-serif;color:#e2e8f0;z-index:2147483647;box-shadow:0 32px 96px rgba(0,0,0,0.9),0 0 0 1px rgba(0,102,204,0.15),0 0 60px rgba(0,102,204,0.04);backdrop-filter:saturate(200%) blur(80px);-webkit-backdrop-filter:saturate(200%) blur(80px);overflow:hidden;touch-action:none;user-select:none;transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),opacity 0.4s cubic-bezier(0.16,1,0.3,1)}
#al-panel.hidden{transform:scale(0.85) translateY(20px);opacity:0;pointer-events:none}
@media(max-width:768px){#al-panel{bottom:0;right:0;left:0;width:100%;max-width:100%;border-radius:22px 22px 0 0;max-height:70vh}#al-fab{bottom:16px;right:16px}}
.al-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:0.1;pointer-events:none;z-index:0}
.al-orb1{width:200px;height:200px;background:radial-gradient(circle,#0066cc,transparent 70%);top:-60px;right:-40px;animation:al-float 8s ease-in-out infinite}
.al-orb2{width:160px;height:160px;background:radial-gradient(circle,#0099ff,transparent 70%);bottom:-40px;left:-30px;animation:al-float 10s ease-in-out infinite reverse}
@keyframes al-float{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,8px)}}
.al-h{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:linear-gradient(180deg,rgba(0,102,204,0.06) 0%,transparent 100%);border-bottom:1px solid rgba(255,255,255,0.05);cursor:move;position:relative;z-index:1}
.al-p{display:flex;align-items:center;gap:10px}
.al-av{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(0,102,204,0.25),rgba(0,153,255,0.25));border:1px solid rgba(0,102,204,0.2);color:#66b3ff;backdrop-filter:blur(10px)}
.al-i h3{font-size:12.5px;font-weight:700;margin:0 0 1px;color:#99ccff;display:flex;align-items:center;gap:6px}
.al-i span{font-size:9.5px;color:rgba(255,255,255,0.22);letter-spacing:0.3px}
.al-b{font-size:7px;padding:2px 7px;border-radius:5px;font-weight:800;letter-spacing:.5px;text-transform:uppercase}
.al-b.on{background:rgba(0,102,204,0.2);color:#66b3ff;border:1px solid rgba(0,102,204,0.15)}.al-b.dtdc{background:rgba(6,182,212,0.15);color:#67e8f9;border:1px solid rgba(6,182,212,0.2)}.al-b.off{background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.15)}
.al-hb{display:flex;gap:5px}
.al-ib{width:28px;height:28px;border-radius:9px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.5);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
.al-ib:hover{background:rgba(0,102,204,0.15);color:#66b3ff;border-color:rgba(0,102,204,0.2)}
.al-n{display:flex;padding:5px 8px;gap:2px;background:rgba(0,0,0,0.35);border-bottom:1px solid rgba(255,255,255,0.04);position:relative;z-index:1;overflow-x:auto}
.al-n::-webkit-scrollbar{display:none}
.al-nb{flex:0 0 auto;padding:7px 10px;border:none;border-radius:9px;background:transparent;color:rgba(255,255,255,0.3);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:4px;font-family:inherit;white-space:nowrap}
.al-nb:hover{background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.6)}
.al-nb.ac{background:linear-gradient(135deg,rgba(0,102,204,0.2),rgba(0,153,255,0.15));color:#99ccff;border:1px solid rgba(0,102,204,0.15);box-shadow:0 2px 12px rgba(0,102,204,0.08)}
.al-pg{display:none;padding:12px;max-height:380px;overflow-y:auto;position:relative;z-index:1}.al-pg.ac{display:block}
.al-pg::-webkit-scrollbar{width:3px}.al-pg::-webkit-scrollbar-track{background:transparent}.al-pg::-webkit-scrollbar-thumb{background:rgba(0,102,204,0.2);border-radius:3px}
@media(max-width:768px){.al-pg{max-height:calc(70vh - 120px);padding:10px}}
.al-qc{background:rgba(255,255,255,0.02);border-radius:14px;padding:12px;margin-bottom:10px;border:1px solid rgba(255,255,255,0.05)}
.al-tb{font-size:8.5px;padding:3px 9px;background:rgba(0,102,204,0.1);border-radius:5px;color:#66b3ff;font-weight:700;text-transform:uppercase;letter-spacing:.4px;border:1px solid rgba(0,102,204,0.1)}
.al-qt{font-size:12px;line-height:1.6;color:rgba(255,255,255,0.8);min-height:36px;margin-top:8px}
.al-qt.em{color:rgba(255,255,255,0.3);font-style:italic;text-align:center;font-size:11.5px}
.al-ol{margin-top:8px;padding-top:8px;border-top:1px solid rgba(255,255,255,0.04)}
.al-oi{display:flex;gap:7px;padding:4px 0;font-size:11.5px;color:rgba(255,255,255,0.65);align-items:flex-start}
.al-ol-letter{color:#66b3ff;font-weight:700;font-size:10px;min-width:18px;height:18px;display:flex;align-items:center;justify-content:center;border-radius:5px;background:rgba(0,102,204,0.1);border:1px solid rgba(0,102,204,0.1);flex-shrink:0}
.al-ac{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.al-bt{padding:10px;border:none;border-radius:11px;font-size:11.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .2s;font-family:inherit;position:relative;overflow:hidden}
.al-bt:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,0.04) 0%,transparent 60%);pointer-events:none}
.al-bt.pr{background:linear-gradient(135deg,rgba(0,102,204,0.35),rgba(0,153,255,0.25));color:#cce5ff;border:1px solid rgba(0,102,204,0.2)}
.al-bt.pr:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,102,204,0.2)}
.al-bt.sc{background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.06)}
.al-bt.sc:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.8)}
.al-bt.am{background:linear-gradient(135deg,rgba(245,158,11,0.25),rgba(239,68,68,0.2));color:#fbbf24;border:1px solid rgba(245,158,11,0.2)}
.al-bt.am.active{background:linear-gradient(135deg,rgba(34,197,94,0.3),rgba(6,182,212,0.2));color:#34d399;border:1px solid rgba(34,197,94,0.25)}
.al-bt:disabled{opacity:0.35;cursor:not-allowed;transform:none!important}
.al-st{margin-top:8px;padding:8px 10px;border-radius:9px;font-size:11px;display:none;align-items:center;gap:7px;font-weight:500}
.al-st.vi{display:flex}.al-st.inf{background:rgba(59,130,246,0.06);color:#60a5fa;border:1px solid rgba(59,130,246,0.1)}.al-st.suc{background:rgba(52,211,153,0.06);color:#34d399;border:1px solid rgba(52,211,153,0.1)}.al-st.err{background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1)}.al-st.wrn{background:rgba(251,191,36,0.06);color:#fbbf24;border:1px solid rgba(251,191,36,0.1)}
.al-sg{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:10px}
.al-sc{background:rgba(255,255,255,0.02);border-radius:10px;padding:8px 4px;text-align:center;border:1px solid rgba(255,255,255,0.04)}
.al-sv{font-size:18px;font-weight:800;color:#99ccff;font-variant-numeric:tabular-nums}.al-sc.s .al-sv{color:#34d399}.al-sc.e .al-sv{color:#f87171}.al-sc.st .al-sv{color:#fbbf24}
.al-sl{font-size:7.5px;color:rgba(255,255,255,0.22);text-transform:uppercase;letter-spacing:.4px;margin-top:1px}
.al-fb{margin-top:6px;padding:7px 10px;border-radius:9px;font-size:10.5px;font-weight:600;display:none;align-items:center;gap:7px;animation:al-fadeIn 0.3s ease}
.al-fb.correct{display:flex;background:rgba(34,197,94,0.08);color:#34d399;border:1px solid rgba(34,197,94,0.15)}
.al-fb.wrong{display:flex;background:rgba(248,113,113,0.08);color:#f87171;border:1px solid rgba(248,113,113,0.15)}
.al-fb.dom{display:flex;background:rgba(0,102,204,0.08);color:#66b3ff;border:1px solid rgba(0,102,204,0.15)}
@keyframes al-fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
.al-ss{margin-bottom:12px}
.al-st2{font-size:9.5px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin-bottom:6px;padding-left:4px;letter-spacing:.4px;display:flex;align-items:center;gap:5px}
.al-grp{background:rgba(255,255,255,0.02);border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.04)}
.al-si{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.03)}.al-si:last-child{border:none}
.al-sil{display:flex;align-items:center;gap:8px}
.al-sic{width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;background:rgba(0,102,204,0.08);color:#66b3ff;border:1px solid rgba(0,102,204,0.08)}
.al-sin{font-size:11.5px;font-weight:500}
.al-sid{font-size:9px;color:rgba(255,255,255,0.25);margin-top:1px}
.al-tg{width:36px;height:20px;border-radius:10px;background:rgba(255,255,255,0.08);cursor:pointer;position:relative;transition:all .2s;border:1px solid rgba(255,255,255,0.06)}
.al-tg:after{content:"";position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;background:rgba(255,255,255,0.3);transition:all .2s}
.al-tg.ac{background:rgba(0,102,204,0.3);border-color:rgba(0,102,204,0.3)}.al-tg.ac:after{transform:translateX(16px);background:#66b3ff}
.al-le{font-size:10px;padding:4px 8px;margin:1px 0;border-radius:4px;font-family:'SF Mono',monospace;display:flex;align-items:center;gap:5px}
.al-le .t{font-size:8px;color:rgba(255,255,255,0.15);min-width:35px}
.al-le.inf{color:rgba(255,255,255,0.45)}.al-le.suc{color:#34d399}.al-le.err{color:#f87171}.al-le.wrn{color:#fbbf24}
.al-spin{display:inline-block;animation:al-spin .8s linear infinite}@keyframes al-spin{to{transform:rotate(360deg)}}
@keyframes al-pulse{0%,100%{opacity:1}50%{opacity:0.4}}
.al-cfg-profile{display:flex;align-items:center;gap:10px;padding:10px;background:rgba(255,255,255,0.02);border-radius:12px;margin-bottom:10px;border:1px solid rgba(255,255,255,0.04)}
.al-cfg-avatar{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,rgba(0,102,204,0.2),rgba(0,153,255,0.2));display:flex;align-items:center;justify-content:center;font-weight:700;color:#66b3ff;font-size:14px;overflow:hidden;border:1px solid rgba(0,102,204,0.15)}
.al-cfg-avatar img{width:100%;height:100%;object-fit:cover;border-radius:10px}
.al-cfg-pinfo{flex:1}
.al-cfg-pname{font-size:12px;font-weight:600;color:#e2e8f0}
.al-cfg-psub{font-size:9px;color:rgba(255,255,255,0.3)}
.al-cfg-pstatus{font-size:8px;color:rgba(255,255,255,0.2);display:flex;align-items:center;gap:3px;margin-top:2px}
.al-cfg-pstatus .dot{width:5px;height:5px;border-radius:50%;background:#ef4444}
.al-cfg-pstatus.connected .dot{background:#22c55e}
.al-cfg-pstatus.connected{color:#22c55e}
.al-cfg-divider{height:1px;background:rgba(255,255,255,0.04);margin:8px 0}
.al-cfg-version{text-align:center;font-size:8.5px;color:rgba(255,255,255,0.15);padding:6px 0}
.al-key-input{width:100%;padding:8px 10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:8px;color:#e2e8f0;font-size:11px;font-family:inherit;outline:none;margin-top:6px;transition:border-color .2s;box-sizing:border-box}
.al-key-input:focus{border-color:rgba(0,102,204,0.3)}
.al-key-input::placeholder{color:rgba(255,255,255,0.15)}
.al-key-save{margin-top:6px;padding:7px 14px;background:linear-gradient(135deg,rgba(0,102,204,0.3),rgba(0,153,255,0.2));border:1px solid rgba(0,102,204,0.2);border-radius:8px;color:#99ccff;font-size:10.5px;font-weight:600;cursor:pointer;font-family:inherit;transition:all .2s;width:100%}
.al-key-save:hover{background:linear-gradient(135deg,rgba(0,102,204,0.4),rgba(0,153,255,0.3))}
.al-chat-area{height:240px;overflow-y:auto;padding:8px;background:rgba(0,0,0,0.25);border-radius:10px;margin-bottom:8px;border:1px solid rgba(255,255,255,0.03)}
.al-chat-area::-webkit-scrollbar{width:3px}.al-chat-area::-webkit-scrollbar-thumb{background:rgba(0,102,204,0.2);border-radius:3px}
.al-cmsg{padding:8px 12px;border-radius:12px;font-size:11px;line-height:1.6;margin-bottom:6px;max-width:88%;word-wrap:break-word;white-space:pre-wrap}
.al-cmsg.user{background:rgba(0,102,204,0.12);color:#99ccff;margin-left:auto;border:1px solid rgba(0,102,204,0.1)}
.al-cmsg.ai{background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.75);border:1px solid rgba(255,255,255,0.04)}
.al-cmsg.system{background:rgba(34,197,94,0.06);color:#34d399;border:1px solid rgba(34,197,94,0.1);font-size:10px;text-align:center;max-width:100%}
.al-cmsg img{max-width:100%;border-radius:8px;margin-top:6px;border:1px solid rgba(255,255,255,0.06)}
.al-cmsg code{background:rgba(0,0,0,0.3);padding:1px 4px;border-radius:3px;font-size:10px;font-family:'SF Mono',monospace}
.al-cmsg pre{background:rgba(0,0,0,0.3);padding:6px 8px;border-radius:6px;font-size:10px;overflow-x:auto;margin:4px 0;font-family:'SF Mono',monospace}
.al-chat-input-row{display:flex;gap:4px;align-items:flex-end}
.al-chat-input{flex:1;padding:8px 10px;background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.06);border-radius:8px;color:#e2e8f0;font-size:11px;font-family:inherit;outline:none;resize:none;min-height:32px;max-height:80px}
.al-chat-input:focus{border-color:rgba(0,102,204,0.3)}
.al-chat-btn{width:32px;height:32px;border-radius:8px;border:1px solid rgba(0,102,204,0.15);background:rgba(0,102,204,0.1);color:#66b3ff;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s;flex-shrink:0}
.al-chat-btn:hover{background:rgba(0,102,204,0.2)}
.al-chat-btn.active{background:rgba(34,197,94,0.15);border-color:rgba(34,197,94,0.25);color:#34d399}
.al-chat-ctx{font-size:9px;color:rgba(255,255,255,0.2);padding:2px 0 4px;display:flex;align-items:center;gap:4px}
.al-mon-item{display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:rgba(255,255,255,0.02);border-radius:8px;margin-bottom:4px;border:1px solid rgba(255,255,255,0.03)}
.al-mon-label{font-size:10px;color:rgba(255,255,255,0.3);display:flex;align-items:center;gap:5px}
.al-mon-value{font-size:11px;font-weight:600;color:rgba(255,255,255,0.6);max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.al-highlight{outline:3px solid rgba(0,102,204,0.6)!important;outline-offset:2px;transition:outline .3s;border-radius:4px}
.al-det-info{font-size:9px;color:rgba(255,255,255,0.25);margin-top:4px;padding:4px 8px;background:rgba(255,255,255,0.02);border-radius:6px}
`;
document.head.appendChild(css);

// ═══ FAB ═══
var fab = document.createElement("div"); fab.id = "al-fab";
fab.innerHTML = IC.sparkle + '<div class="fab-pulse"></div><div class="fab-badge" id="al-fbadge">!</div>';
document.body.appendChild(fab);

// ═══ PANEL ═══
var panel = document.createElement("div"); panel.id = "al-panel"; panel.className = "hidden";
panel.innerHTML = [
  '<div class="al-orb al-orb1"></div><div class="al-orb al-orb2"></div>',
  '<div class="al-h" id="al-header">',
    '<div class="al-p">',
      '<div class="al-av">' + IC.brain + '</div>',
      '<div class="al-i"><h3>Alura Solver <span class="al-b ' + (S.useDogly ? 'dtdc' : getApiType() ? 'on' : 'off') + '" id="al-badge">' + (S.useDogly ? 'DOGLYTDC' : getApiType() ? 'GROQ' : 'NO KEY') + '</span></h3><span>v' + CFG.version + ' • DoglyTdc</span></div>',
    '</div>',
    '<div class="al-hb">',
      '<div class="al-ib" id="al-minbtn" title="Minimizar">' + IC.minus + '</div>',
      '<div class="al-ib" id="al-hidebtn" title="Ocultar (Alt)">' + IC.x + '</div>',
    '</div>',
  '</div>',
  '<div class="al-n" id="al-nav">',
    '<button class="al-nb ac" data-tab="solver">' + IC.zap + ' Solver</button>',
    '<button class="al-nb" data-tab="chat">' + IC.send + ' Chat IA</button>',
    '<button class="al-nb" data-tab="logs">' + IC.list + ' Logs</button>',
    '<button class="al-nb" data-tab="stats">' + IC.target + ' Stats</button>',
    '<button class="al-nb" data-tab="settings">' + IC.settings + ' Config</button>',
    '<button class="al-nb" data-tab="monitor">' + IC.eye + ' Monitor</button>',
  '</div>',
  // ═══ SOLVER TAB ═══
  '<div class="al-pg ac" id="al-tab-solver">',
    '<div class="al-qc">',
      '<div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:4px"><span class="al-tb" id="al-type">Tipo</span><span style="font-size:9px;color:rgba(255,255,255,0.2)" id="al-method">-</span></div>',
      '<div class="al-qt em" id="al-question">Pressione Detectar para iniciar</div>',
      '<div class="al-ol" id="al-options"></div>',
      '<div class="al-det-info" id="al-det-info" style="display:none"></div>',
    '</div>',
    '<div class="al-ac">',
      '<button class="al-bt pr" id="al-detect">' + IC.search + ' Detectar</button>',
      '<button class="al-bt pr" id="al-solve">' + IC.zap + ' Resolver</button>',
      '<button class="al-bt sc" id="al-screenshot">' + IC.camera + ' Screenshot</button>',
      '<button class="al-bt am" id="al-auto">' + IC.play + ' Auto</button>',
    '</div>',
    '<div class="al-st" id="al-status"></div>',
    '<div class="al-fb" id="al-feedback"></div>',
  '</div>',
  // ═══ CHAT TAB (improved) ═══
  '<div class="al-pg" id="al-tab-chat">',
    '<div class="al-chat-ctx" id="al-chat-ctx">' + IC.info + ' Chat com IA - envie perguntas ou screenshots</div>',
    '<div class="al-chat-area" id="al-chatmsgs"></div>',
    '<div class="al-chat-input-row">',
      '<button class="al-chat-btn" id="al-chatss" title="Capturar screenshot e enviar para IA">' + IC.camera + '</button>',
      '<button class="al-chat-btn" id="al-chatctx" title="Enviar questao atual para IA">' + IC.zap + '</button>',
      '<input class="al-chat-input" id="al-chatinput" placeholder="Pergunte sobre a questao...">',
      '<button class="al-chat-btn" id="al-chatsend">' + IC.send + '</button>',
    '</div>',
  '</div>',
  // ═══ LOGS TAB ═══
  '<div class="al-pg" id="al-tab-logs"><div id="al-loglist" style="max-height:340px;overflow-y:auto;font-size:10px"></div></div>',
  // ═══ STATS TAB ═══
  '<div class="al-pg" id="al-tab-stats">',
    '<div class="al-sg">',
      '<div class="al-sc"><div class="al-sv" id="al-st-solved">0</div><div class="al-sl">Resolvidas</div></div>',
      '<div class="al-sc s"><div class="al-sv" id="al-st-correct">0</div><div class="al-sl">Corretas</div></div>',
      '<div class="al-sc e"><div class="al-sv" id="al-st-wrong">0</div><div class="al-sl">Erradas</div></div>',
      '<div class="al-sc st"><div class="al-sv" id="al-st-streak">0</div><div class="al-sl">Streak</div></div>',
    '</div>',
    '<div class="al-sc" style="margin-bottom:8px;padding:8px"><div class="al-sv" id="al-st-dom" style="color:#66b3ff">0</div><div class="al-sl">Extraidas do DOM</div></div>',
  '</div>',
  // ═══ SETTINGS TAB ═══
  '<div class="al-pg" id="al-tab-settings">',
    '<div class="al-cfg-profile">',
      '<div class="al-cfg-avatar" id="al-cfg-avatar">U</div>',
      '<div class="al-cfg-pinfo"><div class="al-cfg-pname" id="al-cfg-name">Usuario</div><div class="al-cfg-psub" id="al-cfg-sub">' + (S.useDogly ? "DoglyTdc Alura Pro v2" : "Modo Local") + '</div><div class="al-cfg-pstatus ' + (S.useDogly ? 'connected' : '') + '" id="al-cfg-pstatus"><span class="dot"></span> ' + (S.useDogly ? "Online" : "Offline") + '</div></div>',
    '</div>',
    '<div class="al-ss"><div class="al-st2">' + IC.settings + ' Automacao</div><div class="al-grp">',
      '<div class="al-si"><div class="al-sil"><div class="al-sic">' + IC.zap + '</div><div><div class="al-sin">Auto Submit</div><div class="al-sid">Submeter automaticamente</div></div></div><div class="al-tg ' + (S.settings.autoSubmit?'ac':'') + '" data-s="autoSubmit"></div></div>',
      '<div class="al-si"><div class="al-sil"><div class="al-sic">' + IC.play + '</div><div><div class="al-sin">Auto Advance</div><div class="al-sid">Avancar para proxima</div></div></div><div class="al-tg ' + (S.settings.autoAdvance?'ac':'') + '" data-s="autoAdvance"></div></div>',
      '<div class="al-si"><div class="al-sil"><div class="al-sic">' + IC.eye + '</div><div><div class="al-sin">Vision Mode</div><div class="al-sid">Enviar imagens para IA</div></div></div><div class="al-tg ' + (S.settings.visionMode?'ac':'') + '" data-s="visionMode"></div></div>',
      '<div class="al-si"><div class="al-sil"><div class="al-sic">' + IC.camera + '</div><div><div class="al-sin">Auto Screenshot</div><div class="al-sid">Screenshot automatico ao resolver</div></div></div><div class="al-tg ' + (S.settings.autoScreenshot?'ac':'') + '" data-s="autoScreenshot"></div></div>',
      '<div class="al-si"><div class="al-sil"><div class="al-sic">' + IC.search + '</div><div><div class="al-sin">Smart Detect</div><div class="al-sid">Deteccao inteligente de alternativas</div></div></div><div class="al-tg ' + (S.settings.smartDetect?'ac':'') + '" data-s="smartDetect"></div></div>',
      '<div class="al-si"><div class="al-sil"><div class="al-sic">' + IC.search + '</div><div><div class="al-sin">DOM Extract</div><div class="al-sid">Extrair respostas do DOM</div></div></div><div class="al-tg ' + (S.settings.domExtract?'ac':'') + '" data-s="domExtract"></div></div>',
    '</div></div>',
    '<div class="al-ss"><div class="al-st2">' + IC.key + ' API Key (Groq)</div>',
      '<input class="al-key-input" type="password" id="al-apikey" placeholder="gsk_... (Groq API Key)" value="' + (S.apiKey || '') + '">',
      '<button class="al-key-save" id="al-keysave">Salvar API Key</button>',
    '</div>',
    '<div class="al-cfg-divider"></div>',
    '<div class="al-cfg-version"><span>Alura AI Solver Pro</span> v' + CFG.version + ' — DoglyTdc Edition<br>Smart Detect • Vision • Screenshot AI • Chat</div>',
  '</div>',
  // ═══ MONITOR TAB ═══
  '<div class="al-pg" id="al-tab-monitor">',
    '<div class="al-mon-item"><div class="al-mon-label">Status</div><div class="al-mon-value" id="al-mon-status">Detectando...</div></div>',
    '<div class="al-mon-item"><div class="al-mon-label">Pagina</div><div class="al-mon-value" id="al-mon-page">-</div></div>',
    '<div class="al-mon-item"><div class="al-mon-label">Curso</div><div class="al-mon-value" id="al-mon-course">-</div></div>',
    '<div class="al-mon-item"><div class="al-mon-label">Aula</div><div class="al-mon-value" id="al-mon-lesson">-</div></div>',
    '<div class="al-mon-item"><div class="al-mon-label">Progresso</div><div class="al-mon-value" id="al-mon-progress">-</div></div>',
    '<div class="al-mon-item"><div class="al-mon-label">Elementos</div><div class="al-mon-value" id="al-mon-elements">-</div></div>',
  '</div>',
].join("");
document.body.appendChild(panel);

// ═══ ELEMENT REFS ═══
var qEl = document.getElementById("al-question");
var tpEl = document.getElementById("al-type");
var methodEl = document.getElementById("al-method");
var optsEl = document.getElementById("al-options");
var statusEl = document.getElementById("al-status");
var feedbackEl = document.getElementById("al-feedback");
var logList = document.getElementById("al-loglist");
var badge = document.getElementById("al-badge");
var fbadge = document.getElementById("al-fbadge");
var detInfo = document.getElementById("al-det-info");

// ═══ HELPER FUNCTIONS ═══
function log(msg, type) {
  type = type || "inf";
  var t = new Date().toLocaleTimeString();
  S.logs.push({ msg:msg, type:type, time:t });
  if(S.logs.length > 200) S.logs.shift();
  if(logList) {
    var le = document.createElement("div"); le.className = "al-le " + type;
    le.innerHTML = '<span class="t">' + t + '</span>' + msg;
    logList.appendChild(le);
    logList.scrollTop = logList.scrollHeight;
  }
  console.log("[Alura Solver] " + msg);
}

function setStatus(msg, type) {
  if(!statusEl) return;
  statusEl.className = "al-st vi " + (type||"inf");
  statusEl.innerHTML = (type==="suc"?IC.checkCircle:type==="err"?IC.xCircle:IC.info) + " " + msg;
}

function showFeedback(isCorrect, msg, isDom) {
  if(!feedbackEl) return;
  feedbackEl.className = "al-fb " + (isDom ? "dom" : isCorrect ? "correct" : "wrong");
  feedbackEl.innerHTML = (isDom ? IC.search : isCorrect ? IC.checkCircle : IC.xCircle) + " " + msg;
  setTimeout(function(){ feedbackEl.className = "al-fb"; }, 6000);
}

function updateStats() {
  var se = document.getElementById("al-st-solved");
  var ce = document.getElementById("al-st-correct");
  var we = document.getElementById("al-st-wrong");
  var ste = document.getElementById("al-st-streak");
  var de = document.getElementById("al-st-dom");
  if(se) se.textContent = S.stats.solved;
  if(ce) ce.textContent = S.stats.correct;
  if(we) we.textContent = S.stats.wrong;
  if(ste) ste.textContent = S.stats.streak;
  if(de) de.textContent = S.stats.domExtracted;
}

function updateBadge() {
  var at = getApiType();
  if(badge) {
    badge.textContent = S.useDogly ? "DOGLYTDC" : at === "groq" ? "GROQ" : at === "google" ? "GEMINI" : "NO KEY";
    badge.className = "al-b " + (S.useDogly ? "dtdc" : at ? "on" : "off");
  }
  if(fbadge) {
    fbadge.textContent = at || S.useDogly ? "\u2713" : "!";
    fbadge.style.background = at || S.useDogly ? "#22c55e" : "#ef4444";
  }
}

function highlight(el) {
  if(!el) return;
  el.classList.add("al-highlight");
  el.scrollIntoView && el.scrollIntoView({behavior:"smooth",block:"center"});
  setTimeout(function(){ el.classList.remove("al-highlight"); }, 3000);
}

// ═══ IMPROVED SCREENSHOT CAPTURE ═══
function captureScreenshot(targetEl) {
  return new Promise(function(res) {
    if(typeof html2canvas === "undefined") { res(null); return; }
    // Smart target: try exercise area first, then main content
    var el = targetEl || document.querySelector(".task-body__content") || document.querySelector(".task-body") || document.querySelector('[class*="exercise"]') || document.querySelector('[class*="atividade"]') || document.querySelector("main") || document.querySelector(".content") || document.body;
    html2canvas(el, {
      useCORS: true,
      scale: 0.7,
      logging: false,
      width: Math.min(el.scrollWidth, 1400),
      height: Math.min(el.scrollHeight, 1000),
      windowWidth: Math.min(el.scrollWidth, 1400),
      windowHeight: Math.min(el.scrollHeight, 1000)
    })
    .then(function(canvas){ res(canvas.toDataURL("image/jpeg", 0.7)); })
    .catch(function(e){ console.error("Screenshot error:", e); res(null); });
  });
}

// ═══ NAVIGATION ═══
var nav = document.getElementById("al-nav");
nav.addEventListener("click", function(e) {
  var btn = e.target.closest(".al-nb");
  if(!btn) return;
  var tab = btn.getAttribute("data-tab");
  nav.querySelectorAll(".al-nb").forEach(function(b){ b.classList.remove("ac"); });
  btn.classList.add("ac");
  panel.querySelectorAll(".al-pg").forEach(function(p){ p.classList.remove("ac"); });
  var pg = document.getElementById("al-tab-" + tab);
  if(pg) pg.classList.add("ac");
});

// ═══ FAB & PANEL TOGGLE ═══
fab.style.display = "flex";
fab.addEventListener("click", function() {
  S.hidden = !S.hidden;
  panel.classList.toggle("hidden", S.hidden);
});

document.getElementById("al-hidebtn").addEventListener("click", function() {
  S.hidden = true; panel.classList.add("hidden");
});
document.getElementById("al-minbtn").addEventListener("click", function() {
  S.minimized = !S.minimized;
  panel.querySelectorAll(".al-pg, .al-n").forEach(function(el){ el.style.display = S.minimized ? "none" : ""; });
});

// ═══ KEYBOARD SHORTCUT ═══
document.addEventListener("keydown", function(e) {
  if(e.key === "Alt") { e.preventDefault(); S.hidden = !S.hidden; panel.classList.toggle("hidden", S.hidden); }
  var tag = (document.activeElement||{}).tagName || "";
  if(tag === "INPUT" || tag === "TEXTAREA" || (document.activeElement||{}).isContentEditable) return;
  if(e.key === "d") detect();
  if(e.key === "r") solve();
});

// ═══ DRAGGING ═══
var dragData = { startX:0, startY:0, origX:0, origY:0 };
var header = document.getElementById("al-header");
header.addEventListener("mousedown", function(e) {
  S.isDragging = true;
  dragData.startX = e.clientX; dragData.startY = e.clientY;
  var r = panel.getBoundingClientRect();
  dragData.origX = r.left; dragData.origY = r.top;
});
document.addEventListener("mousemove", function(e) {
  if(!S.isDragging) return;
  var dx = e.clientX - dragData.startX, dy = e.clientY - dragData.startY;
  panel.style.left = (dragData.origX + dx) + "px";
  panel.style.top = (dragData.origY + dy) + "px";
  panel.style.right = "auto"; panel.style.bottom = "auto";
});
document.addEventListener("mouseup", function() { S.isDragging = false; });

// ═══ SETTINGS TOGGLES ═══
panel.querySelectorAll(".al-tg").forEach(function(tg) {
  tg.addEventListener("click", function() {
    var s = tg.getAttribute("data-s");
    if(s && S.settings.hasOwnProperty(s)) {
      S.settings[s] = !S.settings[s];
      tg.classList.toggle("ac", S.settings[s]);
      log(s + ": " + (S.settings[s] ? "ON" : "OFF"), "inf");
      saveRemoteConfig();
    }
  });
});

// ═══ API KEY ═══
document.getElementById("al-keysave").addEventListener("click", function() {
  var val = document.getElementById("al-apikey").value.trim();
  S.apiKey = val;
  updateBadge();
  saveRemoteConfig();
  log("API Key " + (val ? "salva" : "removida"), val ? "suc" : "wrn");
});

// ══════════════════════════════════════════════════════════
// ═══ IMPROVED CHAT SYSTEM WITH SCREENSHOT AI ANALYSIS ═══
// ══════════════════════════════════════════════════════════
var chatMsgsEl = document.getElementById("al-chatmsgs");
var chatInput = document.getElementById("al-chatinput");
var chatSendBtn = document.getElementById("al-chatsend");
var chatSSBtn = document.getElementById("al-chatss");
var chatCtxBtn = document.getElementById("al-chatctx");

function addChatMessage(role, text, img) {
  S.chatMessages.push({ role:role, text:text, img:img||null, time: new Date().toLocaleTimeString() });
  if(S.chatMessages.length > 80) S.chatMessages.shift();
  renderChat();
}

function renderChat() {
  if(!chatMsgsEl) return;
  chatMsgsEl.innerHTML = S.chatMessages.map(function(m) {
    var content = (m.text || "").replace(/</g,"&lt;").replace(/>/g,"&gt;");
    // Basic markdown: bold, code blocks, inline code
    content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    content = content.replace(/\`\`\`([\s\S]*?)\`\`\`/g, '<pre>$1</pre>');
    content = content.replace(/\`([^\`]+)\`/g, '<code>$1</code>');
    if(m.img) content += '<br><img src="'+m.img+'">';
    var timeStr = m.time ? '<div style="font-size:8px;opacity:0.3;margin-top:2px">'+m.time+'</div>' : '';
    return '<div class="al-cmsg '+m.role+'">'+content+timeStr+'</div>';
  }).join("");
  chatMsgsEl.scrollTop = chatMsgsEl.scrollHeight;
}

// Chat: Send screenshot to AI for analysis
chatSSBtn.addEventListener("click", function(){
  chatSSBtn.disabled = true; chatSSBtn.innerHTML = '<span class="al-spin">'+IC.loader+'</span>';
  addChatMessage("system", "\uD83D\uDCF7 Capturando screenshot...");
  
  captureScreenshot().then(function(b64){
    chatSSBtn.disabled = false; chatSSBtn.innerHTML = IC.camera;
    if(!b64) { addChatMessage("system", "\u274C Falha na captura"); return; }
    
    addChatMessage("user", "\uD83D\uDCF7 Screenshot capturado - analisando...", b64);
    
    // Automatically send to AI for analysis
    var at = getApiType();
    if(!at) { addChatMessage("ai", "Configure API Key ou DoglyTdc para analisar."); return; }
    
    // Build context from current detection
    var ctx = S.lastQ ? ("Questao detectada: " + (S.lastQ.question||"").substring(0,200) + "\nAlternativas: " + (S.lastQ.options||[]).map(function(o,i){return String.fromCharCode(65+i)+") "+o;}).join(", ")) : "";
    
    var messages = [
      {role: "system", content: "Voce e um assistente que analisa exercicios da plataforma Alura.\nAnalise o screenshot e responda:\n1. Qual e a PERGUNTA do exercicio?\n2. Quais sao as ALTERNATIVAS (se houver)?\n3. Qual e a RESPOSTA CORRETA e por que?\n4. Tipo: escolha unica, multipla escolha, V/F, ou resposta aberta?\nSeja claro e direto. Se for codigo, mostre o codigo correto."},
      {role: "user", content: [
        {type: "text", text: "Analise este screenshot de exercicio da Alura." + (ctx ? "\n\nContexto detectado:\n" + ctx : "")},
        {type: "image_url", image_url: {url: b64}}
      ]}
    ];
    
    // Add to chat history
    S.chatHistory.push({role:"user", content: "Analise este screenshot da Alura" + (ctx ? " - " + ctx.substring(0,100) : "")});
    
    callAI(messages).then(function(ans){
      addChatMessage("ai", ans.trim());
      S.chatHistory.push({role:"assistant", content: ans.trim()});
    }).catch(function(e){
      addChatMessage("ai", "\u274C Erro: " + e.message);
    });
  });
});

// Chat: Send current question context
chatCtxBtn.addEventListener("click", function(){
  var data = detect();
  if(!data || (!data.question && data.options.length === 0)) {
    addChatMessage("system", "\u26A0 Nenhum exercicio detectado. Tente o screenshot.");
    return;
  }
  
  var ctxMsg = "\uD83D\uDCDD Questao atual:\n" + (data.question || "[sem texto]");
  if(data.options.length > 0) {
    ctxMsg += "\n\nAlternativas:";
    data.options.forEach(function(o,i){ ctxMsg += "\n" + String.fromCharCode(65+i) + ") " + o; });
  }
  ctxMsg += "\nTipo: " + data.questionType;
  if(data.domAnswers && data.domAnswers.length > 0) {
    ctxMsg += "\nDOM: " + data.domAnswers.map(function(d){return d.text;}).join(", ");
  }
  addChatMessage("user", ctxMsg);
  
  // Send to AI with screenshot if enabled
  var at = getApiType();
  if(!at) { addChatMessage("ai", "Configure API Key ou DoglyTdc."); return; }
  
  var ssPromise = S.settings.autoScreenshot ? captureScreenshot() : Promise.resolve(null);
  ssPromise.then(function(ss) {
    var userParts = [{type: "text", text: "Resolva este exercicio da Alura:\n\n" + ctxMsg.replace(/[\uD83D\uDCDD\uD83D\uDCF7]/g,"")}];
    if(ss) userParts.push({type: "image_url", image_url: {url: ss}});
    
    var messages = [
      {role: "system", content: "Voce e um assistente que resolve exercicios da plataforma Alura. Responda com a RESPOSTA CORRETA e uma explicacao BREVE. Se for escolha, indique a LETRA + texto. Se for codigo, mostre o codigo completo. Se for V/F, diga Verdadeiro ou Falso e explique brevemente."},
    ];
    // Add chat history for context
    S.chatHistory.slice(-6).forEach(function(h){ messages.push(h); });
    messages.push({role: "user", content: userParts});
    
    return callAI(messages);
  }).then(function(ans){
    addChatMessage("ai", ans.trim());
    S.chatHistory.push({role:"user", content: ctxMsg.substring(0,200)});
    S.chatHistory.push({role:"assistant", content: ans.trim()});
    if(S.chatHistory.length > 20) S.chatHistory = S.chatHistory.slice(-14);
  }).catch(function(e){
    addChatMessage("ai", "\u274C Erro: " + e.message);
  });
});

// Chat: Send text message with optional screenshot
function sendChatMessage() {
  var text = chatInput.value.trim();
  if(!text) return;
  chatInput.value = "";
  
  var at = getApiType();
  if(!at) { addChatMessage("ai", "Configure API Key ou DoglyTdc primeiro."); return; }
  
  addChatMessage("user", text);
  
  // Build AI messages with full context
  var ssPromise = S.settings.autoScreenshot ? captureScreenshot() : Promise.resolve(null);
  ssPromise.then(function(ss) {
    // Build context from current question
    var ctx = "";
    if(S.lastQ) {
      ctx = "\n\n[Contexto do exercicio atual]\nPergunta: " + (S.lastQ.question||"").substring(0,300);
      if(S.lastQ.options && S.lastQ.options.length > 0) {
        ctx += "\nAlternativas: " + S.lastQ.options.map(function(o,i){return String.fromCharCode(65+i)+") "+o;}).join(" | ");
      }
      ctx += "\nTipo: " + S.lastQ.questionType;
    }
    
    var userParts = [{type: "text", text: text + ctx}];
    if(ss) userParts.push({type: "image_url", image_url: {url: ss}});
    
    var messages = [
      {role: "system", content: "Voce e um assistente para exercicios da plataforma Alura (cursos de tecnologia/programacao). Responda de forma clara e direta. Se o usuario perguntar a resposta, de a resposta correta. Se pedir explicacao, explique brevemente. Para codigo, mostre o codigo correto."}
    ];
    S.chatHistory.slice(-8).forEach(function(h){ messages.push(h); });
    messages.push({role: "user", content: userParts.length > 1 ? userParts : text + ctx});
    
    return callAI(messages);
  }).then(function(ans){
    addChatMessage("ai", ans.trim());
    S.chatHistory.push({role:"user", content: text});
    S.chatHistory.push({role:"assistant", content: ans.trim()});
    if(S.chatHistory.length > 20) S.chatHistory = S.chatHistory.slice(-14);
  }).catch(function(e){
    addChatMessage("ai", "\u274C Erro: " + e.message);
  });
}
chatSendBtn.addEventListener("click", sendChatMessage);
chatInput.addEventListener("keydown", function(e){ if(e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendChatMessage(); } });

// ══════════════════════════════════════════════════════════
// ═══ IMPROVED ALURA SITE MONITOR ═══
// ══════════════════════════════════════════════════════════
function monitorSite() {
  var st = S.siteState;
  var host = location.hostname;
  var url = location.href;

  st.isAlura = /alura\.com\.br/i.test(host) || /cursos\.alura/i.test(host);
  st.url = url;
  
  // Detect page type (improved patterns)
  if(url.match(/\/task\//i) || url.match(/\/exercise/i) || url.match(/\/atividade/i)) st.pageType = "exercise";
  else if(url.match(/\/video\//i) || url.match(/\/aula\//i)) st.pageType = "video";
  else if(url.match(/\/course\//i) || url.match(/\/curso\//i) || url.match(/\/formacao\//i)) st.pageType = "course";
  else st.pageType = "other";

  // Course name (expanded selectors)
  var courseSelectors = [
    '.course-header__title', '.courseName', '[class*="course-name"]',
    '.formacao__header h1', 'h1.course-header-banner-title',
    '.bootcamp-header-course-info__title', '[class*="headerTitle"]',
    '.course-header-banner__title', '.header-course__title'
  ];
  st.courseName = "";
  for(var ci = 0; ci < courseSelectors.length; ci++) {
    var ce = document.querySelector(courseSelectors[ci]);
    if(ce && ce.innerText.trim()) { st.courseName = ce.innerText.trim().substring(0, 80); break; }
  }
  if(!st.courseName) {
    var bcs = document.querySelectorAll('.breadcrumb li, .breadcrumb a, nav[aria-label="breadcrumb"] a, .breadcrumb__link');
    if(bcs.length > 1) st.courseName = bcs[bcs.length - 2].innerText.trim().substring(0, 80);
  }
  // From URL
  if(!st.courseName) {
    var um = url.match(/\/course\/([^\/]+)/i) || url.match(/\/curso\/([^\/]+)/i);
    if(um) st.courseName = um[1].replace(/-/g, " ");
  }

  // Lesson name
  var lessonSelectors = [
    '.task-menu-nav-item-link--active', '.task-body__title',
    '.task-actions__title', '.bootcamp-task__title',
    'h1.task-body__header-title', '[class*="taskTitle"]'
  ];
  st.lessonName = "";
  for(var li = 0; li < lessonSelectors.length; li++) {
    var le = document.querySelector(lessonSelectors[li]);
    if(le && le.innerText.trim()) { st.lessonName = le.innerText.trim().substring(0, 80); break; }
  }
  if(!st.lessonName) {
    var h1 = document.querySelector("h1");
    if(h1 && h1.innerText.trim().length > 5 && !h1.closest("#al-panel")) st.lessonName = h1.innerText.trim().substring(0, 80);
  }

  // Progress
  var progressSelectors = [
    '.course-header-banner-progress__number', '.progress-number',
    '[class*="progress"] span', '.task-menu-header-numbers',
    '.bootcamp-progress__text', '[class*="progressText"]'
  ];
  for(var pi = 0; pi < progressSelectors.length; pi++) {
    var pe = document.querySelector(progressSelectors[pi]);
    if(pe) {
      var pText = pe.innerText.trim();
      var pMatch = pText.match(/(\d+)\s*[\/|de]\s*(\d+)/i);
      if(pMatch) { st.questionNumber = parseInt(pMatch[1]); st.totalQuestions = parseInt(pMatch[2]); break; }
    }
  }

  // Count interactive elements
  var formCount = document.querySelectorAll("form").length;
  var radioCount = document.querySelectorAll('input[type="radio"]').length;
  var checkCount = document.querySelectorAll('input[type="checkbox"]').length;
  var textareaCount = document.querySelectorAll("textarea").length;
  
  // Update monitor UI
  var monStatus = document.getElementById("al-mon-status");
  var monPage = document.getElementById("al-mon-page");
  var monCourse = document.getElementById("al-mon-course");
  var monLesson = document.getElementById("al-mon-lesson");
  var monProgress = document.getElementById("al-mon-progress");
  var monElements = document.getElementById("al-mon-elements");

  if(monStatus) monStatus.innerHTML = st.isAlura ? '<span style="color:#22c55e">\u2705 Alura Detectada</span>' : '<span style="color:#fbbf24">\u26A0 Nao e Alura</span>';
  if(monPage) monPage.textContent = { exercise:"\uD83D\uDCDD Exercicio", video:"\uD83C\uDFA5 Video", course:"\uD83D\uDCDA Curso", other:"\uD83D\uDCC4 Outro" }[st.pageType] || st.pageType;
  if(monCourse) monCourse.textContent = st.courseName || "-";
  if(monLesson) monLesson.textContent = st.lessonName || "-";
  if(monProgress) monProgress.textContent = st.totalQuestions ? st.questionNumber + "/" + st.totalQuestions : "-";
  if(monElements) monElements.textContent = "F:" + formCount + " R:" + radioCount + " C:" + checkCount + " T:" + textareaCount;
}
S.monitorInterval = setInterval(monitorSite, 1500);
setTimeout(monitorSite, 300);

// ══════════════════════════════════════════════════════════
// ═══ ENHANCED DOM ANSWER EXTRACTION ═══
// ══════════════════════════════════════════════════════════
function extractDOMAnswers() {
  var results = [];

  // Method 1: data-correct attribute (classic Alura)
  document.querySelectorAll('[data-correct="true"], [data-is-correct="true"], [data-answer="true"]').forEach(function(el) {
    if(el.closest("#al-panel")) return;
    var text = el.innerText.trim();
    if(text && !results.some(function(r){ return r.text === text; })) {
      results.push({ text: text, element: el, index: -1, method: "data-correct" });
    }
  });

  // Method 2: CSS classes indicating correct answer
  var correctClasses = [
    '.alternativa--correta', '.alternative--correct', '.is-correct',
    '[class*="correct"]', '[class*="correta"]', '[class*="right-answer"]',
    '[class*="resposta-certa"]', 'li.right', 'li.correct',
    '[aria-label*="corret"]', '[aria-label*="correct"]'
  ];
  correctClasses.forEach(function(sel) {
    try {
      document.querySelectorAll(sel).forEach(function(el) {
        if(el.closest("#al-panel")) return;
        var text = el.innerText.trim();
        if(text && text.length > 0 && text.length < 500 && !results.some(function(r){ return r.text === text; })) {
          results.push({ text: text, element: el, index: -1, method: "class-correct" });
        }
      });
    } catch(e){}
  });

  // Method 3: Hidden inputs with answer data
  document.querySelectorAll('input[name*="answer"][type="hidden"], input[name*="resposta"][type="hidden"], input[data-answer], input[data-correct-answer], [data-gabarito]').forEach(function(el) {
    var val = el.value || el.getAttribute("data-answer") || el.getAttribute("data-correct-answer") || el.getAttribute("data-gabarito");
    if(val && !results.some(function(r){ return r.text === val; })) {
      results.push({ text: val, element: el, index: -1, method: "hidden-input" });
    }
  });

  // Method 4: JSON in script tags
  document.querySelectorAll('script[type="application/json"], script[type="application/ld+json"], script:not([src])').forEach(function(scriptEl) {
    try {
      var content = scriptEl.textContent || "";
      if(content.length > 5000000 || content.length < 10) return;
      var keywords = ["correct","correta","answer","resposta","gabarito","isRight","isCorrect"];
      if(!keywords.some(function(k){ return content.indexOf(k) >= 0; })) return;
      var json = JSON.parse(content);
      var findCorrect = function(obj, depth) {
        if(!obj || typeof obj !== "object" || depth > 8) return;
        if(Array.isArray(obj)) { obj.forEach(function(item){ findCorrect(item, depth+1); }); return; }
        var isCorrect = obj.correct === true || obj.isCorrect === true || obj.correta === true || obj.is_correct === true || obj.isRight === true;
        if(isCorrect) {
          var t = obj.text || obj.content || obj.value || obj.alternativa || obj.label || obj.description || obj.titulo || "";
          if(typeof t === "string" && t.length > 0 && t.length < 500 && !results.some(function(r){ return r.text === t; })) {
            results.push({ text: t, element: null, index: -1, method: "json-script" });
          }
        }
        Object.keys(obj).forEach(function(k){ findCorrect(obj[k], depth+1); });
      };
      findCorrect(json, 0);
    } catch(e) {}
  });

  // Method 5: Check for React/Vue data attributes on alternatives
  document.querySelectorAll('[data-reactid], [data-v], [data-testid]').forEach(function(el) {
    if(el.closest("#al-panel")) return;
    var attrs = el.attributes;
    for(var ai = 0; ai < attrs.length; ai++) {
      var name = attrs[ai].name.toLowerCase();
      var val = attrs[ai].value.toLowerCase();
      if((name.indexOf("correct") >= 0 || name.indexOf("answer") >= 0 || name.indexOf("right") >= 0) && (val === "true" || val === "1" || val === "yes")) {
        var text = el.innerText.trim();
        if(text && !results.some(function(r){ return r.text === text; })) {
          results.push({ text: text, element: el, index: -1, method: "data-attr" });
        }
      }
    }
  });

  return results;
}

// ══════════════════════════════════════════════════════════
// ═══ COMPLETELY REWRITTEN CONTENT EXTRACTION ═══
// ══════════════════════════════════════════════════════════
function extractFullPageContent() {
  var data = { question: "", questionHtml: "", questionImages: [], options: [], optionHtml: [], optionImages: [], allImages: [], questionType: "unknown", elements: [], inputElement: null, domAnswers: [], codeBlocks: [], rawText: "", detectionMethods: [] };
  
  try {
    // ════════════════════════════════════════
    // ═══ STEP 1: QUESTION TEXT EXTRACTION ═══
    // ════════════════════════════════════════
    
    // Strategy A: Direct question selectors (Alura-specific)
    var questionSelectors = [
      // Alura modern layout
      '.task-body__content > h3', '.task-body__content > h2', '.task-body__content > p',
      '.task-body__content .formattedText > h3', '.task-body__content .formattedText > p',
      // Alura exercise/task
      '.exercise-content h3', '.exercise-content h2', '.exercise-content p:first-of-type',
      '.task-statement', '.task-body p:first-of-type',
      // Alura formacao
      '.formacao-task-content h3', '.formacao-task-content p:first-of-type',
      // Generic question patterns
      '[class*="question-text"]', '[class*="enunciado"]', '[class*="pergunta"]',
      '[class*="statement"]', '[class*="question-body"]',
      // Form-based
      'form > h3', 'form > p:first-of-type', 'form > div > h3', 'form > div > p:first-of-type',
      // Fallback content areas
      '.task-actions__body h3', '.task-actions__body p',
      '.quiz-question', '.quiz-content',
      'main h3', 'main h2'
    ];
    
    for(var i = 0; i < questionSelectors.length; i++) {
      var qEls = document.querySelectorAll(questionSelectors[i]);
      for(var qi = 0; qi < qEls.length; qi++) {
        var qe = qEls[qi];
        if(qe && qe.innerText.trim().length > 8 && !qe.closest("#al-panel") && !qe.closest("nav") && !qe.closest("header") && !qe.closest("footer")) {
          var qText = qe.innerText.trim().replace(/\s+/g, " ");
          // Skip if it looks like a navigation/menu item
          if(qText.length < 200 || !data.question) {
            if(!data.question) {
              data.question = qText;
              data.questionHtml = qe.innerHTML;
              data.detectionMethods.push("selector:" + questionSelectors[i]);
            } else if(qText.length > data.question.length && data.question.length < 30) {
              data.question = qText;
              data.questionHtml = qe.innerHTML;
            }
          }
          break;
        }
      }
      if(data.question && data.question.length > 30) break;
    }
    
    // Strategy B: Collect ALL text before the alternatives section
    if(!data.question || data.question.length < 15) {
      var contentAreas = document.querySelectorAll(".task-body__content, .exercise-content, .formacao-task-content, main .content, form, main");
      for(var ca = 0; ca < contentAreas.length; ca++) {
        var area = contentAreas[ca];
        if(!area || area.closest("#al-panel")) continue;
        var textNodes = area.querySelectorAll("p, h1, h2, h3, h4, span, div");
        var collected = [];
        for(var tn = 0; tn < textNodes.length && tn < 10; tn++) {
          var node = textNodes[tn];
          var t = node.innerText.trim();
          if(t.length > 5 && !node.closest("#al-panel") && !node.closest("nav") && !node.closest("ul") && !node.closest("ol") && !node.querySelector("input")) {
            collected.push(t);
          }
        }
        if(collected.length > 0) {
          data.question = collected.join("\n").substring(0, 600);
          data.detectionMethods.push("text-collection");
          break;
        }
      }
    }
    
    // Strategy C: Get the full visible text of the page content area
    if(!data.question || data.question.length < 10) {
      var mainArea = document.querySelector(".task-body, main, .content, form");
      if(mainArea) {
        data.question = mainArea.innerText.trim().substring(0, 500);
        data.detectionMethods.push("full-text-fallback");
      }
    }
    
    // ═══ Extract code blocks in question ═══
    var codeEls = document.querySelectorAll("pre, code, .code-block, .highlight, [class*='code-snippet'], .CodeMirror-code, .ace_content");
    codeEls.forEach(function(ce) {
      if(ce.closest("#al-panel")) return;
      var code = ce.innerText.trim();
      if(code.length > 5 && code.length < 5000) {
        data.codeBlocks.push(code);
      }
    });
    
    // ═══ Extract images ═══
    var imgArea = document.querySelector(".task-body__content, .task-body, .exercise-content, main");
    if(imgArea) {
      imgArea.querySelectorAll("img").forEach(function(img) {
        if(img.src && img.naturalWidth > 30 && img.offsetParent !== null) {
          var src = img.src;
          if(src.indexOf("avatar") === -1 && src.indexOf("logo") === -1 && src.indexOf("icon") === -1 && src.indexOf("favicon") === -1) {
            if(data.questionImages.indexOf(src) === -1) data.questionImages.push(src);
            if(data.allImages.indexOf(src) === -1) data.allImages.push(src);
          }
        }
      });
    }
    
    // ══════════════════════════════════════════
    // ═══ STEP 2: OPTION/ALTERNATIVE DETECTION ═══
    // ══════════════════════════════════════════
    
    // Strategy A: Radio buttons and their labels
    var radioInputs = document.querySelectorAll('input[type="radio"]:not(#al-panel input)');
    if(radioInputs.length >= 2) {
      var optEls = [];
      radioInputs.forEach(function(radio) {
        if(radio.closest("#al-panel")) return;
        // Find the label/container for this radio
        var container = radio.closest("li") || radio.closest("label") || radio.closest('[class*="alternativa"]') || radio.closest('[class*="alternative"]') || radio.closest('[class*="option"]') || radio.parentElement;
        if(container && optEls.indexOf(container) === -1) {
          optEls.push(container);
        }
      });
      if(optEls.length >= 2) {
        optEls.forEach(function(el) {
          var t = el.innerText.trim().replace(/^[A-E][.)\s]+/, "").replace(/^\s*\n/, "");
          data.options.push(t);
          data.optionHtml.push(el.innerHTML);
          data.elements.push(el);
          var img = el.querySelector("img");
          data.optionImages.push(img && img.src ? img.src : null);
        });
        data.questionType = "single";
        data.detectionMethods.push("radio-inputs");
      }
    }
    
    // Strategy B: Checkbox inputs (multiple choice)
    if(data.options.length === 0) {
      var checkboxInputs = document.querySelectorAll('input[type="checkbox"]:not(#al-panel input):not([class*="toggle"])');
      if(checkboxInputs.length >= 2) {
        var cbEls = [];
        checkboxInputs.forEach(function(cb) {
          if(cb.closest("#al-panel") || cb.closest("nav") || cb.closest("header")) return;
          var container = cb.closest("li") || cb.closest("label") || cb.closest('[class*="alternativa"]') || cb.closest('[class*="option"]') || cb.parentElement;
          if(container && cbEls.indexOf(container) === -1) cbEls.push(container);
        });
        if(cbEls.length >= 2) {
          cbEls.forEach(function(el) {
            var t = el.innerText.trim().replace(/^[A-E][.)\s]+/, "");
            data.options.push(t);
            data.optionHtml.push(el.innerHTML);
            data.elements.push(el);
            data.optionImages.push(el.querySelector("img")?.src || null);
          });
          data.questionType = "multi";
          data.detectionMethods.push("checkbox-inputs");
        }
      }
    }
    
    // Strategy C: Alura-specific alternative selectors
    if(data.options.length === 0) {
      var altSelectors = [
        'form li', '.task-body__content li', '.alternativas li', '.alternatives li',
        'ul.task-body__options li', '[class*="alternativa"]:not(#al-panel *)',
        '[class*="alternative"]:not(#al-panel *)',
        'label.alternative', 'label[class*="alternativa"]',
        '[role="option"]', '[role="radio"]', '[role="listbox"] > *',
        'button[class*="alternativa"]', 'button[class*="alternative"]',
        'form .option', 'form [class*="opcao"]',
        // Generic list items in forms/content
        'form ul li', 'form ol li'
      ];
      
      for(var si = 0; si < altSelectors.length; si++) {
        try {
          var found = document.querySelectorAll(altSelectors[si]);
          var validEls = Array.from(found).filter(function(el) {
            return el.offsetParent !== null && !el.closest("#al-panel") && !el.closest("nav") && el.innerText.trim().length > 0;
          });
          if(validEls.length >= 2 && validEls.length <= 10) {
            validEls.forEach(function(el) {
              var t = el.innerText.trim().replace(/^[A-E][.)\s]+/, "");
              data.options.push(t);
              data.optionHtml.push(el.innerHTML);
              data.elements.push(el);
              data.optionImages.push(el.querySelector("img")?.src || null);
            });
            data.questionType = el.querySelector('input[type="checkbox"]') ? "multi" : "single";
            data.detectionMethods.push("alt-selector:" + altSelectors[si]);
            break;
          }
        } catch(e){}
      }
    }
    
    // Strategy D: Buttons that look like alternatives
    if(data.options.length === 0) {
      var btnEls = document.querySelectorAll("form button, .task-body button, main button");
      var altButtons = Array.from(btnEls).filter(function(b) {
        if(b.closest("#al-panel") || b.closest("nav") || b.closest("header")) return false;
        var t = b.innerText.trim().toLowerCase();
        // Exclude submit/next buttons
        if(t.match(/^(enviar|submit|responder|confirmar|proximo|next|avancar|continuar|voltar|anterior)/)) return false;
        return b.offsetParent !== null && b.innerText.trim().length > 0 && b.innerText.trim().length < 300;
      });
      if(altButtons.length >= 2 && altButtons.length <= 8) {
        altButtons.forEach(function(el) {
          data.options.push(el.innerText.trim());
          data.optionHtml.push(el.innerHTML);
          data.elements.push(el);
          data.optionImages.push(null);
        });
        data.questionType = "single";
        data.detectionMethods.push("button-alternatives");
      }
    }
    
    // ═══ STEP 3: DETECT OPEN/TEXT QUESTIONS ═══
    if(data.options.length === 0) {
      var inputSelectors = [
        'textarea:not(#al-panel textarea)',
        'input[type="text"]:not([class*="search"]):not(#al-panel input):not([name*="search"])',
        '[contenteditable="true"]:not(#al-panel *)',
        'input[type="number"]:not(#al-panel input)',
        'input[name*="answer"]', 'input[name*="resposta"]',
        '.ace_editor', '.CodeMirror', '.monaco-editor',
        '.code-editor textarea'
      ];
      for(var oi = 0; oi < inputSelectors.length; oi++) {
        try {
          var oe = document.querySelector(inputSelectors[oi]);
          if(oe && oe.offsetParent !== null && !oe.closest("#al-panel")) {
            data.questionType = "open";
            data.inputElement = oe;
            data.detectionMethods.push("input:" + inputSelectors[oi]);
            break;
          }
        } catch(e){}
      }
    }
    
    // ═══ STEP 4: DETECT TRUE/FALSE ═══
    if(data.options.length === 2) {
      var allTexts = data.options.map(function(o){ return o.trim().toLowerCase(); });
      var isTF = (
        (allTexts.indexOf("verdadeiro") >= 0 && allTexts.indexOf("falso") >= 0) ||
        (allTexts.indexOf("true") >= 0 && allTexts.indexOf("false") >= 0) ||
        (allTexts.indexOf("v") >= 0 && allTexts.indexOf("f") >= 0) ||
        (allTexts.indexOf("sim") >= 0 && allTexts.indexOf("nao") >= 0) ||
        (allTexts.indexOf("certo") >= 0 && allTexts.indexOf("errado") >= 0)
      );
      if(isTF) data.questionType = "true_false";
    }
    
    // ═══ STEP 5: Check "Selecione X alternativas" ═══
    var bodyText = document.body.innerText || "";
    var selectMulti = bodyText.match(/selecione\s+(\d+)\s+alternativa/i) || bodyText.match(/marque\s+(\d+)\s+alternativa/i) || bodyText.match(/escolha\s+(\d+)\s+opcoe?s?/i);
    if(selectMulti && parseInt(selectMulti[1]) > 1) {
      data.questionType = "multi";
    }
    
    // ═══ STEP 6: DOM ANSWERS ═══
    if(S.settings.domExtract) {
      data.domAnswers = extractDOMAnswers();
    }
    
    // ═══ Collect raw text for AI context ═══
    data.rawText = (data.question + " " + data.options.join(" ")).substring(0, 800);
    
  } catch(e) { console.error("Extract error:", e); }
  return data;
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
    if(at === "google" || S.apiKey.indexOf("AIza") === 0) {
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
      // Groq
      var textMsgs = messages.map(function(m){
        if(typeof m.content === "string") return m;
        if(Array.isArray(m.content)) return {role: m.role, content: m.content.filter(function(c){return c.type==="text";}).map(function(c){return c.text;}).join("\n")};
        return m;
      });
      fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST", headers: {"Content-Type": "application/json", "Authorization": "Bearer " + S.apiKey},
        body: JSON.stringify({model: "llama-3.3-70b-versatile", messages: textMsgs, temperature:0.1, max_tokens:1500})
      })
      .then(function(r){ if(!r.ok) throw new Error("Groq API " + r.status); return r.json(); })
      .then(function(d){ res(d.choices?.[0]?.message?.content || ""); })
      .catch(rej);
    }
  });
}

function imgToBase64(url) {
  return new Promise(function(res) {
    try {
      var img = new Image(); img.crossOrigin = "anonymous";
      img.onload = function() { try { var c = document.createElement("canvas"); c.width = Math.min(img.naturalWidth, 800); c.height = Math.min(img.naturalHeight, 800); c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); res(c.toDataURL("image/jpeg", 0.7)); } catch(e) { res(null); } };
      img.onerror = function(){ res(null); }; img.src = url;
    } catch(e) { res(null); }
  });
}

// ═══ BUILD PROMPT (improved) ═══
function buildPrompt(data, screenshotB64) {
  return new Promise(function(res) {
    var sysPrompt = "Voce e um assistente ESPECIALISTA que RESOLVE exercicios da plataforma Alura (cursos de tecnologia/programacao). REGRAS:\n" +
      "1. Responda SOMENTE com a resposta correta. SEM explicacao, SEM introducao.\n" +
      "2. Para alternativas: APENAS a LETRA + texto. Ex: B) Fotossintese\n" +
      "3. Para V/F: apenas Verdadeiro ou Falso\n" +
      "4. Para aberta/digitacao: apenas a palavra, frase ou CODIGO exato\n" +
      "5. Para multipla escolha: TODAS as corretas separadas por virgula. Ex: A, C\n" +
      "6. ZERO texto extra. Formato LIMPO. Sem 'a resposta e', sem 'correto', sem explicacao.\n" +
      "7. Analise imagens/screenshots com ATENCAO. A questao pode conter codigo, diagramas, tabelas.\n" +
      "8. Contexto: exercicios de TI/programacao (Java, Python, JS, HTML, CSS, SQL, DevOps, etc).\n" +
      "9. Se a questao pedir codigo, responda APENAS com o codigo limpo.";

    var typeInstructions = {
      single: "ESCOLHA UNICA. Responda SOMENTE: LETRA) texto_da_alternativa",
      multi: "MULTIPLA ESCOLHA. Liste TODAS as corretas: A, C (apenas letras separadas por virgula)",
      true_false: "Responda APENAS: Verdadeiro ou Falso",
      open: "RESPOSTA ABERTA. Apenas o texto/codigo/numero exato.",
      unknown: "Analise e responda da forma mais adequada."
    };

    var userParts = [];
    var instruction = typeInstructions[data.questionType] || typeInstructions.unknown;
    var textContent = instruction + "\n\nPERGUNTA: \"" + (data.question || "[Veja a imagem/screenshot]") + "\"";

    if(data.codeBlocks && data.codeBlocks.length > 0) {
      textContent += "\n\nCODIGO NA QUESTAO:\n" + data.codeBlocks.slice(0,3).join("\n---\n");
    }

    if(data.options && data.options.length > 0) {
      textContent += "\n\nALTERNATIVAS:";
      data.options.forEach(function(o, i) { textContent += "\n" + String.fromCharCode(65+i) + ") " + (o || "[Imagem]"); });
    }
    userParts.push({type: "text", text: textContent});

    // Add screenshot
    if(screenshotB64) { userParts.push({type: "image_url", image_url: {url: screenshotB64}}); }
    
    // Add question images
    var imgPromises = [];
    if(S.settings.visionMode && data.questionImages.length > 0) {
      imgPromises = data.questionImages.slice(0, 3).map(imgToBase64);
    }
    
    if(imgPromises.length > 0) {
      Promise.all(imgPromises).then(function(b64s) {
        b64s.forEach(function(b64) { if(b64) userParts.push({type: "image_url", image_url: {url: b64}}); });
        res([{role: "system", content: sysPrompt}, {role: "user", content: userParts}]);
      });
    } else {
      if(userParts.length > 1) res([{role: "system", content: sysPrompt}, {role: "user", content: userParts}]);
      else res([{role: "system", content: sysPrompt}, {role: "user", content: textContent}]);
    }
  });
}

// ═══ DETECT ═══
function detect() {
  var data = extractFullPageContent();
  if(!data.question && data.allImages.length === 0 && data.options.length === 0) {
    qEl.className = "al-qt em"; qEl.textContent = "Nenhum exercicio detectado nesta pagina";
    tpEl.textContent = "Nao encontrado"; setStatus("Exercicio nao encontrado. Tente screenshot.", "err");
    return null;
  }
  S.lastQ = data; S.lastQHash = qHash(data.question);
  var typeNames = { single: "Escolha Unica", multi: "Multipla Escolha", true_false: "V/F", open: "Digitacao/Codigo", unknown: "Desconhecido" };
  tpEl.textContent = typeNames[data.questionType] || data.questionType;

  // Show DOM extract info
  if(data.domAnswers && data.domAnswers.length > 0) {
    methodEl.textContent = "\uD83D\uDD0D DOM: " + data.domAnswers.length + " resposta(s)";
    methodEl.style.color = "#66b3ff";
  } else {
    methodEl.textContent = "\uD83E\uDD16 IA necessaria";
    methodEl.style.color = "rgba(255,255,255,0.3)";
  }

  // Show question
  qEl.className = "al-qt";
  qEl.textContent = data.question.substring(0, 350) || "[Imagem/Screenshot]";
  
  // Show options
  optsEl.innerHTML = "";
  if(data.options.length > 0) {
    data.options.forEach(function(o, i) {
      var isDOM = data.domAnswers.some(function(d){ 
        return norm(d.text) === norm(o) || 
               norm(o).indexOf(norm(d.text)) >= 0 || 
               norm(d.text).indexOf(norm(o)) >= 0;
      });
      var optText = o.length > 120 ? o.substring(0,117) + "..." : o;
      optsEl.innerHTML += '<div class="al-oi"><span class="al-ol-letter" style="' + (isDOM ? 'background:rgba(34,197,94,0.2);color:#34d399;border-color:rgba(34,197,94,0.2)' : '') + '">' + String.fromCharCode(65+i) + '</span><span>' + optText + (isDOM ? ' \u2705' : '') + '</span></div>';
    });
  } else if(data.questionType === "open") {
    optsEl.innerHTML = '<div class="al-oi"><span style="color:rgba(255,255,255,0.3)">\u270D Resposta aberta/codigo</span></div>';
  }
  
  // Show detection info
  if(detInfo) {
    detInfo.style.display = "block";
    detInfo.innerHTML = "Metodos: " + data.detectionMethods.join(", ") + 
      (data.codeBlocks.length > 0 ? " | Codigo: " + data.codeBlocks.length + " bloco(s)" : "") +
      (data.questionImages.length > 0 ? " | Imgs: " + data.questionImages.length : "") +
      " | Opts: " + data.options.length;
  }
  
  log("Detectado: " + data.questionType + " (" + data.options.length + " opts) - " + data.question.substring(0,60), "suc");
  setStatus("Exercicio detectado: " + typeNames[data.questionType], "suc");
  return data;
}

// ═══ CLICK SUBMIT ═══
function clickSubmit() {
  var submitSelectors = [
    'button[type="submit"]', 'button.task-actions__submit',
    'button[class*="submit"]', 'button[class*="confirmar"]',
    'button[class*="responder"]', 'button[class*="enviar"]',
    'button[class*="check"]', 'button[class*="verify"]',
    'button[class*="verificar"]', 'input[type="submit"]',
    'button.btn-answer', '.task-actions button',
    'form button:not([type="button"])', 'button[class*="primary"]',
    'button[class*="confirm"]'
  ];
  for(var i = 0; i < submitSelectors.length; i++) {
    var btns = document.querySelectorAll(submitSelectors[i]);
    for(var j = 0; j < btns.length; j++) {
      var btn = btns[j];
      if(btn && btn.offsetParent !== null && !btn.disabled && !btn.closest("#al-panel")) {
        var text = (btn.innerText || "").toLowerCase().trim();
        if(text.match(/^(responder|confirmar|enviar|submit|verificar|check|corrigir|salvar|concluir)/)) {
          btn.click(); log("Submit: " + text.substring(0,25), "inf"); return true;
        }
      }
    }
  }
  // Fallback: any visible form submit
  var form = document.querySelector("form:not(#al-panel form)");
  if(form) {
    var formBtn = form.querySelector('button:not([type="button"])');
    if(formBtn && formBtn.offsetParent) { formBtn.click(); log("Submit (fallback)", "inf"); return true; }
  }
  return false;
}

// ═══ CLICK NEXT ═══
function clickNext() {
  var nextSelectors = [
    'button[class*="next"]', 'button[class*="proximo"]', 'button[class*="proxima"]',
    'button[class*="avancar"]', 'button[class*="continue"]', 'button[class*="continuar"]',
    'a[class*="next"]', 'a[class*="proximo"]', 'a[class*="proxima"]',
    '.task-menu-nav-item-link--next', '.pagination__next', '.next-task',
    'a[href*="/task/"]'
  ];
  for(var i = 0; i < nextSelectors.length; i++) {
    var btns = document.querySelectorAll(nextSelectors[i]);
    for(var j = 0; j < btns.length; j++) {
      var btn = btns[j];
      if(btn && btn.offsetParent !== null && !btn.disabled && !btn.closest("#al-panel")) {
        var text = (btn.innerText || "").toLowerCase().trim();
        if(text.match(/^(proximo|proxima|next|avancar|continuar|continue|seguinte)/)) {
          btn.click(); log("Avancou: " + text.substring(0,25), "inf"); return true;
        }
      }
    }
  }
  return false;
}

// ═══ APPLY ANSWER (improved matching) ═══
function applyAnswer(data, answer) {
  answer = answer.trim();
  
  switch(data.questionType) {
    case "single": case "true_false": {
      if(data.elements && data.elements.length > 0) {
        var match = null, matchIdx = -1;
        
        // 1. Letter match (A, B, C, etc)
        var lm = answer.match(/^\s*([A-Ea-e])\s*[).:\s]/);
        if(!lm) lm = answer.match(/^\s*([A-Ea-e])\s*$/);
        if(lm) { matchIdx = lm[1].toUpperCase().charCodeAt(0) - 65; if(matchIdx >= 0 && matchIdx < data.elements.length) match = data.elements[matchIdx]; }
        
        // 2. Exact text match
        if(!match) {
          var ca = norm(answer.replace(/^[A-Ea-e][).:\s]+/, ""));
          for(var i = 0; i < data.options.length; i++) {
            if(norm(data.options[i]) === ca) { match = data.elements[i]; matchIdx = i; break; }
          }
        }
        
        // 3. Contains match
        if(!match) {
          var ca2 = norm(answer.replace(/^[A-Ea-e][).:\s]+/, ""));
          for(var i2 = 0; i2 < data.options.length; i2++) {
            if(norm(data.options[i2]).indexOf(ca2) >= 0 || ca2.indexOf(norm(data.options[i2])) >= 0) { match = data.elements[i2]; matchIdx = i2; break; }
          }
        }
        
        // 4. Word overlap scoring
        if(!match) {
          var ca3 = norm(answer.replace(/^[A-Ea-e][).:\s]+/, ""));
          var bestScore = 0;
          for(var k = 0; k < data.options.length; k++) {
            var w1 = ca3.split(/\s+/).filter(function(w){return w.length>2;});
            var w2 = norm(data.options[k]).split(/\s+/).filter(function(w){return w.length>2;});
            var common = w1.filter(function(w){ return w2.indexOf(w) >= 0; }).length;
            var score = common / Math.max(w1.length, w2.length, 1);
            if(score > bestScore && score > 0.15) { bestScore = score; match = data.elements[k]; matchIdx = k; }
          }
        }
        
        if(match) {
          highlight(match);
          var radio = match.querySelector('input[type="radio"], input[type="checkbox"]');
          if(radio) { radio.click(); radio.checked = true; radio.dispatchEvent(new Event("change", {bubbles:true})); radio.dispatchEvent(new Event("input", {bubbles:true})); }
          else { match.click(); }
          setStatus(String.fromCharCode(65+matchIdx) + ") " + (data.options[matchIdx]||"").substring(0,50), "suc");
          if(S.settings.autoSubmit) setTimeout(clickSubmit, 800);
        } else {
          setStatus("IA: " + answer.substring(0,60) + " (sem match)", "wrn");
        }
      }
      break;
    }
    case "multi": {
      var lines = answer.split(/[\n,;]+/).map(function(l){ return l.trim(); }).filter(Boolean);
      var found = 0;
      data.elements.forEach(function(el, idx) {
        var shouldSelect = lines.some(function(line) {
          var lm2 = line.match(/^([A-Ea-e])\s*[).]?/);
          if(lm2 && (lm2[1].toUpperCase().charCodeAt(0) - 65) === idx) return true;
          var cl = norm(line.replace(/^[A-Ea-e][).\s]+/, ""));
          return norm(data.options[idx]).indexOf(cl) >= 0 || cl.indexOf(norm(data.options[idx])) >= 0;
        });
        if(shouldSelect) {
          highlight(el);
          var cb = el.querySelector('input[type="checkbox"], input[type="radio"]');
          if(cb) { cb.click(); cb.checked = true; cb.dispatchEvent(new Event("change", {bubbles:true})); }
          else { el.click(); }
          found++;
        }
      });
      setStatus(found + " opcoes selecionadas", found > 0 ? "suc" : "err");
      if(S.settings.autoSubmit && found > 0) setTimeout(clickSubmit, 800);
      break;
    }
    case "open": {
      var inputEl = data.inputElement;
      if(inputEl) {
        // Clean AI response for code/text input
        var cleanAnswer = answer.replace(/^(resposta:|answer:|resultado:|output:)\s*/i, "").trim();
        // Remove markdown code fences
        cleanAnswer = cleanAnswer.replace(/^\`\`\`[a-z]*\n?/gm, "").replace(/\`\`\`$/gm, "").trim();
        
        inputEl.focus();
        try {
          var tagName = inputEl.tagName.toUpperCase();
          if(tagName === "TEXTAREA" || tagName === "INPUT") {
            var proto = tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
            var nativeSet = Object.getOwnPropertyDescriptor(proto, 'value');
            if(nativeSet && nativeSet.set) {
              nativeSet.set.call(inputEl, cleanAnswer);
              inputEl.dispatchEvent(new Event("input", {bubbles:true}));
              inputEl.dispatchEvent(new Event("change", {bubbles:true}));
              inputEl.dispatchEvent(new KeyboardEvent("keyup", {bubbles:true}));
            }
          } else if(inputEl.isContentEditable) {
            inputEl.textContent = cleanAnswer;
            inputEl.dispatchEvent(new Event("input", {bubbles:true}));
          } else {
            // CodeMirror / Monaco / Ace
            inputEl.value = cleanAnswer;
            inputEl.dispatchEvent(new Event("input", {bubbles:true}));
          }
        } catch(e) { inputEl.value = cleanAnswer; inputEl.dispatchEvent(new Event("input", {bubbles:true})); }
        highlight(inputEl);
        setStatus("Digitado: " + cleanAnswer.substring(0,50), "suc");
        if(S.settings.autoSubmit) setTimeout(clickSubmit, 800);
      }
      break;
    }
    default: {
      setStatus("IA diz: " + answer.substring(0,80), "inf");
    }
  }
}

// ═══ SOLVE ═══
function solve() {
  if(S.solving) return;
  S.solving = true;
  var solveBtn = document.getElementById("al-solve");
  if(solveBtn) { solveBtn.disabled = true; solveBtn.innerHTML = '<span class="al-spin">' + IC.loader + '</span> Resolvendo...'; }
  setStatus("Analisando exercicio...", "inf");

  var data = S.lastQ || detect();
  if(!data) { S.solving = false; if(solveBtn) { solveBtn.disabled = false; solveBtn.innerHTML = IC.zap + ' Resolver'; } return; }

  // ═══ STRATEGY 1: DOM EXTRACTION (instant, no API) ═══
  if(S.settings.domExtract && data.domAnswers && data.domAnswers.length > 0) {
    log("\uD83D\uDD0D DOM: " + data.domAnswers.length + " resposta(s)!", "suc");
    S.stats.solved++; S.stats.correct++; S.stats.streak++; S.stats.domExtracted++;
    if(S.stats.streak > S.stats.bestStreak) S.stats.bestStreak = S.stats.streak;
    updateStats();

    if(data.questionType === "multi") {
      // Multiple correct from DOM
      data.domAnswers.forEach(function(da) {
        for(var mi = 0; mi < data.options.length; mi++) {
          if(norm(data.options[mi]).indexOf(norm(da.text)) >= 0 || norm(da.text).indexOf(norm(data.options[mi])) >= 0) {
            highlight(data.elements[mi]);
            var cb = data.elements[mi].querySelector('input[type="checkbox"], input[type="radio"]');
            if(cb) { cb.click(); cb.checked = true; cb.dispatchEvent(new Event("change", {bubbles:true})); }
            else data.elements[mi].click();
          }
        }
      });
    } else if(data.elements.length > 0) {
      var domAnswer = data.domAnswers[0];
      var clicked = false;
      for(var di = 0; di < data.options.length; di++) {
        if(norm(data.options[di]).indexOf(norm(domAnswer.text)) >= 0 || norm(domAnswer.text).indexOf(norm(data.options[di])) >= 0) {
          highlight(data.elements[di]);
          var radio = data.elements[di].querySelector('input[type="radio"], input[type="checkbox"]');
          if(radio) { radio.click(); radio.checked = true; radio.dispatchEvent(new Event("change", {bubbles:true})); }
          else { data.elements[di].click(); }
          clicked = true;
          break;
        }
      }
      if(!clicked && domAnswer.element && domAnswer.element.offsetParent) {
        highlight(domAnswer.element);
        var dr = domAnswer.element.querySelector('input[type="radio"], input[type="checkbox"]');
        if(dr) { dr.click(); dr.checked = true; }
        else domAnswer.element.click();
      }
    }

    showFeedback(true, "DOM: " + data.domAnswers[0].text.substring(0, 50) + " (" + data.domAnswers[0].method + ")", true);
    setStatus("\u2705 Resposta extraida do DOM!", "suc");
    S.solving = false;
    if(solveBtn) { solveBtn.disabled = false; solveBtn.innerHTML = IC.zap + ' Resolver'; }
    if(S.settings.autoSubmit) setTimeout(clickSubmit, 600);
    if(S.settings.autoAdvance) setTimeout(clickNext, 2500);
    return;
  }

  // ═══ STRATEGY 2: AI (screenshot + vision + text) ═══
  var at = getApiType();
  if(!at) {
    setStatus("Configure API Key ou DoglyTdc", "err");
    S.solving = false;
    if(solveBtn) { solveBtn.disabled = false; solveBtn.innerHTML = IC.zap + ' Resolver'; }
    return;
  }

  // Always capture screenshot for better AI accuracy
  var ssPromise = S.settings.autoScreenshot ? captureScreenshot() : Promise.resolve(null);
  ssPromise.then(function(ss) {
    return buildPrompt(data, ss);
  }).then(function(messages) {
    return callAI(messages);
  }).then(function(answer) {
    answer = answer.trim().replace(/^[\s\n]+|[\s\n]+$/g, "");
    log("IA: " + answer.substring(0, 100), "suc");
    S.stats.solved++;
    updateStats();
    applyAnswer(data, answer);
    showFeedback(true, "IA: " + answer.substring(0, 50));
    if(S.settings.autoAdvance) setTimeout(clickNext, 3000);
  }).catch(function(e) {
    log("Erro IA: " + e.message, "err");
    setStatus("Erro: " + e.message, "err");
    showFeedback(false, "Erro: " + e.message);
  }).finally(function() {
    S.solving = false;
    if(solveBtn) { solveBtn.disabled = false; solveBtn.innerHTML = IC.zap + ' Resolver'; }
  });
}

// ═══ AUTO MODE ═══
function toggleAutoMode() {
  S.autoMode = !S.autoMode;
  var autoBtn = document.getElementById("al-auto");
  if(S.autoMode) {
    autoBtn.classList.add("active");
    autoBtn.innerHTML = IC.pause + " Auto ON";
    log("Auto Mode: ON (delay " + S.settings.delay + "ms)", "suc");
    runAutoLoop();
  } else {
    autoBtn.classList.remove("active");
    autoBtn.innerHTML = IC.play + " Auto";
    log("Auto Mode: OFF", "wrn");
    if(S.autoInterval) { clearTimeout(S.autoInterval); S.autoInterval = null; }
  }
}

function runAutoLoop() {
  if(!S.autoMode) return;
  var data = detect();
  if(data) {
    var newHash = qHash(data.question);
    if(newHash !== S.lastAutoQ) {
      S.lastAutoQ = newHash;
      setTimeout(function() { if(S.autoMode) solve(); }, 500);
    }
  }
  S.autoInterval = setTimeout(runAutoLoop, S.settings.delay);
}

// ═══ BUTTON EVENTS ═══
document.getElementById("al-detect").addEventListener("click", detect);
document.getElementById("al-solve").addEventListener("click", solve);
document.getElementById("al-auto").addEventListener("click", toggleAutoMode);
document.getElementById("al-screenshot").addEventListener("click", function() {
  var ssBtn = document.getElementById("al-screenshot");
  ssBtn.disabled = true; ssBtn.innerHTML = '<span class="al-spin">' + IC.loader + '</span>';
  captureScreenshot().then(function(b64) {
    ssBtn.disabled = false; ssBtn.innerHTML = IC.camera + " Screenshot";
    if(b64) { log("Screenshot capturado (" + Math.round(b64.length/1024) + "KB)", "suc"); setStatus("Screenshot pronto para resolver", "suc"); }
    else { log("Falha no screenshot", "err"); }
  });
});

// ═══ OBSERVE DOM MUTATIONS (auto-detect new questions) ═══
var lastUrl = location.href;
var urlObserver = setInterval(function() {
  if(location.href !== lastUrl) {
    lastUrl = location.href;
    log("URL mudou: " + lastUrl.split("/").pop(), "inf");
    setTimeout(function() { detect(); monitorSite(); }, 1500);
  }
}, 1000);

// Also observe DOM changes for SPA navigation
try {
  var mutObs = new MutationObserver(function(mutations) {
    var hasNewContent = mutations.some(function(m) {
      return m.addedNodes.length > 0 && Array.from(m.addedNodes).some(function(n) {
        return n.nodeType === 1 && !n.closest("#al-panel") && (n.querySelector && (n.querySelector("form") || n.querySelector('input[type="radio"]') || n.querySelector("textarea")));
      });
    });
    if(hasNewContent) {
      setTimeout(function() { if(!S.solving) detect(); }, 800);
    }
  });
  var mainEl = document.querySelector("main") || document.querySelector(".task-body") || document.body;
  mutObs.observe(mainEl, { childList: true, subtree: true });
} catch(e){}

// ═══ INIT ═══
log("\uD83D\uDCDA Alura AI Solver Pro v" + CFG.version + " carregado!", "suc");
log("Alt=Mostrar/Ocultar | D=Detectar | R=Resolver", "inf");
log("Chat IA: screenshot + analise automatica", "inf");
if(S.useDogly) { fetchUserProfile(); loadRemoteConfig(); log("DoglyTdc conectado", "suc"); }
else if(S.apiKey) { log("Groq API Key configurada", "suc"); }
else { log("Configure API Key ou DoglyTdc nas configuracoes", "wrn"); }
updateBadge();

// Auto-detect on exercise pages
setTimeout(function() {
  detect();
  log("Auto-detect ativado", "inf");
}, 1500);

})();