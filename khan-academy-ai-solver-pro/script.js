// Khan Academy AI Solver Pro v1 - DoglyTdc
// Alt=Show/Hide | D=Detect | R=Resolve+Auto | Fetch Intercept + AI Vision
(function(){
"use strict";

var CFG = {
  webhookUrl: "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook",
  webhookToken: "137a39770c10d5bb7349de3f353316576f81d0b1a0e0fb44",
  manualKey: "",
  profileName: "DoglyTdc Khan Solver",
  version: "1.0",
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
  rotate: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>',
  chat: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  send: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  sparkle: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>',
  book: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/></svg>'
};

// ═══ CLEANUP ═══
["ka-panel","ka-fab","ka-style"].forEach(function(id){ var e=document.getElementById(id); if(e) e.remove(); });

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
  if(!S.useDogly || !S.webhookToken || S.webhookToken === "137a39770c10d5bb7349de3f353316576f81d0b1a0e0fb44") return;
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
  var avatarEl = document.getElementById("ka-cfg-avatar");
  var nameEl = document.getElementById("ka-cfg-name");
  var subEl = document.getElementById("ka-cfg-sub");
  var statusEl = document.getElementById("ka-cfg-pstatus");
  if(!userProfile.loaded) return;
  if(avatarEl) {
    avatarEl.innerHTML = userProfile.avatar
      ? '<img src="'+userProfile.avatar+'">'
      : (userProfile.name||"U")[0].toUpperCase();
  }
  if(nameEl) nameEl.textContent = userProfile.name || "Usuario";
  if(subEl) subEl.textContent = "DoglyTdc Khan Solver • Conectado";
  if(statusEl) { statusEl.className = "ka-cfg-pstatus connected"; statusEl.innerHTML = '<span class="dot"></span> Online'; }
}

// ═══ REMOTE CONFIG SYNC (DoglyTdc) ═══
function loadRemoteConfig() {
  if(!CFG.webhookUrl || CFG.webhookUrl === "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook" || !CFG.webhookToken || CFG.webhookToken === "137a39770c10d5bb7349de3f353316576f81d0b1a0e0fb44") return;
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
      updateCfgProvider && updateCfgProvider();
    }
  }).catch(function(e){ log("Erro ao carregar config: " + e.message, "wrn"); });
}

function saveRemoteConfig() {
  if(!S.useDogly || !S.webhookToken || S.webhookToken === "137a39770c10d5bb7349de3f353316576f81d0b1a0e0fb44") return;
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
  useDogly: (CFG.webhookToken && CFG.webhookToken !== "137a39770c10d5bb7349de3f353316576f81d0b1a0e0fb44" && CFG.webhookToken.length > 5),
  solving: false,
  autoMode: false,
  autoInterval: null,
  hidden: false,
  minimized: false,
  isDragging: false,
  settings: { autoSubmit: true, autoAdvance: true, visionMode: true, screenshotMode: true, useInterception: true, delay: 2500 },
  stats: { solved: 0, correct: 0, wrong: 0, streak: 0, bestStreak: 0 },
  logs: [],
  chatMessages: [],
  lastQ: null,
  lastAutoQ: null,
  lastQHash: "",
  // ═══ KHAN ACADEMY INTERCEPTION ═══
  interceptedAnswers: [],
  lastInterceptedData: null,
  interceptActive: false,
  siteState: {
    isKhanAcademy: false,
    exerciseMode: "unknown",
    questionNumber: 0,
    totalQuestions: 0,
    streakCount: null,
    url: location.href,
    pageTitle: document.title
  },
  monitorInterval: null
};

function getApiType() {
  if(S.useDogly) return "doglytdc";
  if(!S.apiKey || S.apiKey.length < 5) return null;
  if(S.apiKey.indexOf("gsk_") === 0) return "groq";
  if(S.apiKey.indexOf("AIza") === 0) return "google";
  return "groq";
}

// ═══════════════════════════════════════════════════
// ═══ KHAN ACADEMY FETCH INTERCEPTION ═══
// ═══════════════════════════════════════════════════
var _origFetch = window.fetch;
window.fetch = function() {
  var args = arguments;
  var url = typeof args[0] === "string" ? args[0] : (args[0] && args[0].url ? args[0].url : "");
  
  return _origFetch.apply(this, args).then(function(response) {
    // Intercept getAssessmentItem responses
    if(url.indexOf("/getAssessmentItem") >= 0 || url.indexOf("getAssessmentItem") >= 0) {
      var cloned = response.clone();
      cloned.json().then(function(data) {
        try {
          processInterceptedData(data);
        } catch(e) {
          console.warn("[KA Solver] Intercept parse error:", e);
        }
      }).catch(function(){});
    }
    // Also intercept PracticeExercise queries
    if(url.indexOf("PracticeExercise") >= 0 || url.indexOf("practiceExercise") >= 0 || url.indexOf("getExercise") >= 0) {
      var cloned2 = response.clone();
      cloned2.json().then(function(data) {
        try {
          processExerciseData(data);
        } catch(e) {}
      }).catch(function(){});
    }
    return response;
  });
};

function processInterceptedData(data) {
  if(!data || !data.data) return;
  
  var item = data.data.assessmentItem || data.data;
  if(!item || !item.item) return;
  
  var itemData;
  try {
    itemData = JSON.parse(item.item.data || item.item);
  } catch(e) {
    try { itemData = JSON.parse(item.item); } catch(e2) { return; }
  }
  
  if(!itemData) return;
  
  S.lastInterceptedData = itemData;
  S.interceptActive = true;
  
  var answers = extractAnswersFromData(itemData);
  if(answers && answers.length > 0) {
    S.interceptedAnswers = answers;
    log("\u2705 Respostas interceptadas: " + answers.length + " item(ns)", "suc");
    answers.forEach(function(a, i) {
      log("  " + (i+1) + ". " + (a.type || "?") + ": " + (a.value || "").substring(0, 80), "inf");
    });
    // Auto-display in question area
    if(qEl) {
      var html = '<div style="color:#22c55e;font-weight:700;margin-bottom:6px">\uD83D\uDD13 Respostas da API:</div>';
      answers.forEach(function(a, i) {
        html += '<div style="padding:3px 0;color:rgba(255,255,255,0.8)">' + (i+1) + '. <span style="color:#34d399">' + (a.value || "N/A") + '</span> <span style="color:rgba(255,255,255,0.3);font-size:9px">(' + (a.type || "?") + ')</span></div>';
      });
      qEl.className = "ka-qt"; qEl.innerHTML = html;
    }
  }
}

function extractAnswersFromData(itemData) {
  var answers = [];
  
  // Handle different Khan Academy question structures
  if(!itemData) return answers;
  
  // Structure: { question: { widgets: { ... } } }
  var question = itemData.question || itemData;
  var widgets = question.widgets || {};
  
  Object.keys(widgets).forEach(function(key) {
    var widget = widgets[key];
    if(!widget) return;
    var type = widget.type || key.replace(/\s*\d+$/, "");
    var options = widget.options || {};
    
    switch(type) {
      case "radio":
      case "multiple-choice": {
        var choices = options.choices || [];
        choices.forEach(function(choice, idx) {
          if(choice.correct) {
            answers.push({
              type: "mcq",
              value: choice.content || choice.value || ("Opcao " + (idx+1)),
              index: idx,
              widget: key
            });
          }
        });
        break;
      }
      case "input-number":
      case "numeric-input": {
        var numAnswers = options.answers || [];
        numAnswers.forEach(function(ans) {
          if(ans.status === "correct" || ans.correct) {
            answers.push({
              type: "numeric",
              value: String(ans.value || ans.message || ""),
              widget: key
            });
          }
        });
        // Also check simplify
        if(options.value !== undefined) {
          answers.push({ type: "numeric", value: String(options.value), widget: key });
        }
        break;
      }
      case "expression":
      case "input-expression": {
        var exprAnswers = options.answerForms || options.answers || [];
        exprAnswers.forEach(function(ans) {
          if(ans.status === "correct" || ans.correct || ans.considered === "correct") {
            answers.push({
              type: "expression",
              value: ans.value || ans.form || ans.expression || "",
              widget: key
            });
          }
        });
        // Fallback
        if(options.value !== undefined) {
          answers.push({ type: "expression", value: String(options.value), widget: key });
        }
        break;
      }
      case "dropdown": {
        var dChoices = options.choices || [];
        dChoices.forEach(function(choice, idx) {
          if(choice.correct) {
            answers.push({
              type: "dropdown",
              value: choice.content || choice.value || ("Opcao " + (idx+1)),
              index: idx,
              widget: key
            });
          }
        });
        break;
      }
      case "orderer":
      case "sorter": {
        var correctOrder = options.correctOptions || options.correct || [];
        if(correctOrder.length > 0) {
          answers.push({
            type: "order",
            value: correctOrder.map(function(o){ return o.content || o; }).join(" → "),
            items: correctOrder,
            widget: key
          });
        }
        break;
      }
      case "categorizer":
      case "matcher": {
        var categories = options.categories || [];
        var items = options.items || [];
        var values = options.values || [];
        if(values.length > 0 && categories.length > 0) {
          var mappings = items.map(function(item, idx) {
            return (item || "Item "+(idx+1)) + " → " + (categories[values[idx]] || "?");
          });
          answers.push({
            type: "categorize",
            value: mappings.join(", "),
            widget: key
          });
        }
        break;
      }
      case "free-response":
      case "text-input": {
        if(options.answers) {
          options.answers.forEach(function(ans) {
            if(ans.correct || ans.status === "correct") {
              answers.push({ type: "text", value: ans.value || "", widget: key });
            }
          });
        }
        break;
      }
      case "interactive-graph":
      case "grapher": {
        if(options.correct) {
          answers.push({
            type: "graph",
            value: JSON.stringify(options.correct).substring(0, 100),
            widget: key
          });
        }
        break;
      }
      default: {
        // Try to find correct answers generically
        if(options.choices) {
          options.choices.forEach(function(c, idx) {
            if(c.correct) answers.push({ type: type, value: c.content || c.value || "Opcao "+(idx+1), index: idx, widget: key });
          });
        }
        if(options.answers) {
          (Array.isArray(options.answers) ? options.answers : [options.answers]).forEach(function(a) {
            if(a && (a.correct || a.status === "correct")) {
              answers.push({ type: type, value: a.value || a.content || JSON.stringify(a).substring(0,60), widget: key });
            }
          });
        }
        if(options.correct !== undefined && typeof options.correct !== "object") {
          answers.push({ type: type, value: String(options.correct), widget: key });
        }
        break;
      }
    }
  });
  
  return answers;
}

function processExerciseData(data) {
  try {
    var exercise = data.data && data.data.exerciseBySlug;
    if(exercise) {
      log("Exercicio: " + (exercise.title || exercise.slug || "?"), "inf");
    }
  } catch(e) {}
}

// ═══ STYLES ═══
var css = document.createElement("style");
css.id = "ka-style";
css.textContent = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
#ka-fab{position:fixed;bottom:24px;right:24px;width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,rgba(20,122,70,0.9),rgba(46,172,104,0.85));border:2px solid rgba(255,255,255,0.15);box-shadow:0 8px 32px rgba(20,122,70,0.5),0 0 0 4px rgba(20,122,70,0.1);cursor:pointer;z-index:2147483647;display:none;align-items:center;justify-content:center;color:#fff;transition:all .3s cubic-bezier(0.16,1,0.3,1);touch-action:none;-webkit-tap-highlight-color:transparent}
#ka-fab:hover{transform:scale(1.1)}#ka-fab:active{transform:scale(0.95)}
#ka-fab .fab-pulse{position:absolute;inset:-4px;border-radius:50%;border:2px solid rgba(20,122,70,0.4);animation:ka-fab-pulse 2s ease-out infinite}
@keyframes ka-fab-pulse{0%{transform:scale(1);opacity:0.6}100%{transform:scale(1.4);opacity:0}}
#ka-fab .fab-badge{position:absolute;top:-2px;right:-2px;width:18px;height:18px;border-radius:50%;background:#22c55e;color:#fff;font-size:8px;font-weight:800;display:flex;align-items:center;justify-content:center;border:2px solid rgba(8,8,16,0.9);font-family:Inter,sans-serif}
#ka-panel{position:fixed;bottom:20px;right:20px;width:390px;max-width:calc(100vw - 16px);max-height:calc(100vh - 40px);background:rgba(8,8,16,0.94);border-radius:22px;font-family:'Inter',-apple-system,sans-serif;color:#e2e8f0;z-index:2147483647;box-shadow:0 32px 96px rgba(0,0,0,0.9),0 0 0 1px rgba(20,122,70,0.15),0 0 60px rgba(20,122,70,0.04);backdrop-filter:saturate(200%) blur(80px);-webkit-backdrop-filter:saturate(200%) blur(80px);overflow:hidden;touch-action:none;user-select:none;transition:transform 0.4s cubic-bezier(0.16,1,0.3,1),opacity 0.4s cubic-bezier(0.16,1,0.3,1)}
#ka-panel.hidden{transform:scale(0.85) translateY(20px);opacity:0;pointer-events:none}
@media(max-width:768px){#ka-panel{bottom:0;right:0;left:0;width:100%;max-width:100%;border-radius:22px 22px 0 0;max-height:70vh}#ka-fab{bottom:16px;right:16px}}
.ka-orb{position:absolute;border-radius:50%;filter:blur(90px);opacity:0.1;pointer-events:none;z-index:0}
.ka-orb1{width:200px;height:200px;background:radial-gradient(circle,#147a46,transparent 70%);top:-60px;right:-40px;animation:ka-float 8s ease-in-out infinite}
.ka-orb2{width:160px;height:160px;background:radial-gradient(circle,#2eac68,transparent 70%);bottom:-40px;left:-30px;animation:ka-float 10s ease-in-out infinite reverse}
@keyframes ka-float{0%,100%{transform:translate(0,0)}50%{transform:translate(-12px,8px)}}
.ka-h{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background:linear-gradient(180deg,rgba(20,122,70,0.06) 0%,transparent 100%);border-bottom:1px solid rgba(255,255,255,0.05);cursor:move;position:relative;z-index:1}
.ka-p{display:flex;align-items:center;gap:10px}
.ka-av{width:40px;height:40px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(20,122,70,0.25),rgba(46,172,104,0.25));border:1px solid rgba(20,122,70,0.2);color:#4ade80;backdrop-filter:blur(10px)}
.ka-i h3{font-size:12.5px;font-weight:700;margin:0 0 1px;color:#86efac;display:flex;align-items:center;gap:6px}
.ka-i span{font-size:9.5px;color:rgba(255,255,255,0.22);letter-spacing:0.3px}
.ka-b{font-size:7px;padding:2px 7px;border-radius:5px;font-weight:800;letter-spacing:.5px;text-transform:uppercase}
.ka-b.on{background:rgba(20,122,70,0.2);color:#4ade80;border:1px solid rgba(20,122,70,0.15)}.ka-b.dtdc{background:rgba(6,182,212,0.15);color:#67e8f9;border:1px solid rgba(6,182,212,0.2)}.ka-b.off{background:rgba(239,68,68,0.12);color:#f87171;border:1px solid rgba(239,68,68,0.15)}
.ka-hb{display:flex;gap:5px}
.ka-ib{width:28px;height:28px;border-radius:9px;border:1px solid rgba(255,255,255,0.06);background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.5);cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .2s}
.ka-ib:hover{background:rgba(20,122,70,0.15);color:#4ade80;border-color:rgba(20,122,70,0.2)}
.ka-n{display:flex;padding:5px 8px;gap:2px;background:rgba(0,0,0,0.35);border-bottom:1px solid rgba(255,255,255,0.04);position:relative;z-index:1;overflow-x:auto}
.ka-n::-webkit-scrollbar{display:none}
.ka-nb{flex:0 0 auto;padding:7px 10px;border:none;border-radius:9px;background:transparent;color:rgba(255,255,255,0.3);font-size:10.5px;font-weight:600;cursor:pointer;transition:all .2s;display:flex;align-items:center;justify-content:center;gap:4px;font-family:inherit;white-space:nowrap}
.ka-nb:hover{background:rgba(255,255,255,0.04);color:rgba(255,255,255,0.6)}
.ka-nb.ac{background:linear-gradient(135deg,rgba(20,122,70,0.2),rgba(46,172,104,0.15));color:#86efac;border:1px solid rgba(20,122,70,0.15);box-shadow:0 2px 12px rgba(20,122,70,0.08)}
.ka-pg{display:none;padding:12px;max-height:380px;overflow-y:auto;position:relative;z-index:1}.ka-pg.ac{display:block}
.ka-pg::-webkit-scrollbar{width:3px}.ka-pg::-webkit-scrollbar-thumb{background:rgba(20,122,70,0.2);border-radius:3px}
@media(max-width:768px){.ka-pg{max-height:calc(70vh - 120px);padding:10px}}
.ka-qc{background:rgba(255,255,255,0.02);border-radius:14px;padding:12px;margin-bottom:10px;border:1px solid rgba(255,255,255,0.05)}
.ka-tb{font-size:8.5px;padding:3px 9px;background:rgba(20,122,70,0.1);border-radius:5px;color:#4ade80;font-weight:700;text-transform:uppercase;letter-spacing:.4px;border:1px solid rgba(20,122,70,0.1)}
.ka-qt{font-size:12px;line-height:1.6;color:rgba(255,255,255,0.8);min-height:36px;margin-top:8px}
.ka-qt.em{color:rgba(255,255,255,0.3);font-style:italic;text-align:center;font-size:11.5px}
.ka-ac{display:grid;grid-template-columns:1fr 1fr;gap:7px}
.ka-bt{padding:10px;border:none;border-radius:11px;font-size:11.5px;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:6px;transition:all .2s;font-family:inherit;position:relative;overflow:hidden}
.ka-bt:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(255,255,255,0.04) 0%,transparent 60%);pointer-events:none}
.ka-bt.pr{background:linear-gradient(135deg,rgba(20,122,70,0.35),rgba(46,172,104,0.25));color:#d1fae5;border:1px solid rgba(20,122,70,0.2)}
.ka-bt.pr:hover{transform:translateY(-1px);box-shadow:0 6px 20px rgba(20,122,70,0.2)}
.ka-bt.sc{background:rgba(255,255,255,0.03);color:rgba(255,255,255,0.55);border:1px solid rgba(255,255,255,0.06)}
.ka-bt.sc:hover{background:rgba(255,255,255,0.06);color:rgba(255,255,255,0.8)}
.ka-bt.am{background:linear-gradient(135deg,rgba(245,158,11,0.25),rgba(239,68,68,0.2));color:#fbbf24;border:1px solid rgba(245,158,11,0.2)}
.ka-bt.am.active{background:linear-gradient(135deg,rgba(34,197,94,0.3),rgba(6,182,212,0.2));color:#34d399;border:1px solid rgba(34,197,94,0.25)}
.ka-bt:disabled{opacity:0.35;cursor:not-allowed;transform:none!important}
.ka-st{margin-top:8px;padding:8px 10px;border-radius:9px;font-size:11px;display:none;align-items:center;gap:7px;font-weight:500}
.ka-st.vi{display:flex}.ka-st.inf{background:rgba(59,130,246,0.06);color:#60a5fa;border:1px solid rgba(59,130,246,0.1)}.ka-st.suc{background:rgba(52,211,153,0.06);color:#34d399;border:1px solid rgba(52,211,153,0.1)}.ka-st.err{background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1)}.ka-st.wrn{background:rgba(251,191,36,0.06);color:#fbbf24;border:1px solid rgba(251,191,36,0.1)}
.ka-sg{display:grid;grid-template-columns:repeat(4,1fr);gap:5px;margin-bottom:10px}
.ka-sc{background:rgba(255,255,255,0.02);border-radius:10px;padding:8px 4px;text-align:center;border:1px solid rgba(255,255,255,0.04)}
.ka-sv{font-size:18px;font-weight:800;color:#86efac;font-variant-numeric:tabular-nums}.ka-sc.s .ka-sv{color:#34d399}.ka-sc.e .ka-sv{color:#f87171}.ka-sc.st .ka-sv{color:#fbbf24}
.ka-sl{font-size:7.5px;color:rgba(255,255,255,0.22);text-transform:uppercase;letter-spacing:.4px;margin-top:1px}
.ka-ss{margin-bottom:12px}
.ka-st2{font-size:9.5px;color:rgba(255,255,255,0.3);text-transform:uppercase;margin-bottom:6px;padding-left:4px;letter-spacing:.4px;display:flex;align-items:center;gap:5px}
.ka-grp{background:rgba(255,255,255,0.02);border-radius:12px;overflow:hidden;border:1px solid rgba(255,255,255,0.04)}
.ka-si{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid rgba(255,255,255,0.03)}.ka-si:last-child{border:none}
.ka-sil{display:flex;align-items:center;gap:8px}
.ka-sic{width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;background:rgba(20,122,70,0.08);color:#4ade80;border:1px solid rgba(20,122,70,0.08)}
.ka-sii h4{font-size:12px;font-weight:500;margin:0 0 1px;color:rgba(255,255,255,0.85)}.ka-sii p{font-size:9.5px;color:rgba(255,255,255,0.3);margin:0}
.ka-tg{position:relative;width:38px;height:20px;background:rgba(255,255,255,0.06);border-radius:10px;cursor:pointer;transition:all .25s;border:1px solid rgba(255,255,255,0.06);flex-shrink:0}
.ka-tg.ac{background:rgba(20,122,70,0.4);border-color:rgba(20,122,70,0.3)}.ka-tg:after{content:"";position:absolute;width:16px;height:16px;background:#fff;border-radius:50%;top:1px;left:1px;transition:all .25s cubic-bezier(0.16,1,0.3,1);box-shadow:0 2px 4px rgba(0,0,0,0.3)}.ka-tg.ac:after{left:19px}
.ka-aki{width:100%;padding:9px 10px;background:rgba(0,0,0,0.4);border:1px solid rgba(255,255,255,0.06);border-radius:9px;color:#e2e8f0;font-size:11.5px;font-family:'SF Mono',Monaco,Consolas,monospace;outline:none;box-sizing:border-box;margin-top:6px;transition:border-color .2s}.ka-aki:focus{border-color:rgba(20,122,70,0.4)}
.ka-lc{background:rgba(255,255,255,0.02);border-radius:12px;border:1px solid rgba(255,255,255,0.04);overflow:hidden}
.ka-lh{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,0.04)}
.ka-lh h4{font-size:11.5px;margin:0;color:rgba(255,255,255,0.6);font-weight:600;display:flex;align-items:center;gap:6px}
.ka-ll{max-height:320px;overflow-y:auto;padding:4px}
.ka-ll::-webkit-scrollbar{width:3px}.ka-ll::-webkit-scrollbar-thumb{background:rgba(20,122,70,0.15);border-radius:3px}
.ka-li{display:flex;gap:6px;padding:6px 8px;border-radius:7px;margin-bottom:2px;font-size:10.5px;background:rgba(0,0,0,0.15);align-items:flex-start;transition:background .15s}
.ka-li:hover{background:rgba(0,0,0,0.25)}
.ka-li .log-icon{width:18px;height:18px;border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-size:10px}
.ka-li.inf .log-icon{background:rgba(96,165,250,0.1);color:#60a5fa}
.ka-li.suc .log-icon{background:rgba(52,211,153,0.1);color:#34d399}
.ka-li.err .log-icon{background:rgba(248,113,113,0.1);color:#f87171}
.ka-li.wrn .log-icon{background:rgba(251,191,36,0.1);color:#fbbf24}
.ka-lt{font-size:8.5px;color:rgba(255,255,255,0.2);font-family:'SF Mono',Monaco,Consolas,monospace;min-width:48px;margin-top:1px}.ka-lm{color:rgba(255,255,255,0.6);flex:1;line-height:1.4}
.ka-el{padding:24px;text-align:center;color:rgba(255,255,255,0.15);font-size:11px;display:flex;flex-direction:column;align-items:center;gap:8px}
.ka-intercept-bar{background:rgba(20,122,70,0.06);border:1px solid rgba(20,122,70,0.12);border-radius:9px;padding:7px 10px;margin-bottom:8px;font-size:9.5px;color:#4ade80;display:flex;align-items:center;gap:5px}
.ka-keys{background:rgba(20,122,70,0.03);border:1px solid rgba(20,122,70,0.08);border-radius:9px;padding:8px 10px;margin-bottom:10px;font-size:10.5px;color:rgba(74,222,128,0.7);display:flex;align-items:center;gap:5px;flex-wrap:wrap}
.ka-keys kbd{background:rgba(20,122,70,0.12);border:1px solid rgba(20,122,70,0.15);border-radius:4px;padding:1px 6px;font-size:9.5px;font-weight:700;color:#86efac;font-family:'SF Mono',Monaco,monospace}
.ka-cfg-hero{background:linear-gradient(135deg,rgba(20,122,70,0.12) 0%,rgba(46,172,104,0.08) 50%,rgba(6,182,212,0.06) 100%);border:1px solid rgba(20,122,70,0.12);border-radius:16px;padding:16px;margin-bottom:12px;position:relative;overflow:hidden}
.ka-cfg-profile{display:flex;align-items:center;gap:12px;position:relative;z-index:1}
.ka-cfg-avatar{width:48px;height:48px;border-radius:14px;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#86efac;background:linear-gradient(135deg,rgba(20,122,70,0.35),rgba(46,172,104,0.3));border:2px solid rgba(20,122,70,0.2);box-shadow:0 4px 16px rgba(20,122,70,0.2);overflow:hidden;flex-shrink:0}
.ka-cfg-avatar img{width:100%;height:100%;object-fit:cover;border-radius:12px}
.ka-cfg-pinfo{flex:1;min-width:0}
.ka-cfg-pname{font-size:14px;font-weight:700;color:rgba(255,255,255,0.92)}
.ka-cfg-psub{font-size:10px;color:rgba(20,122,70,0.6);display:flex;align-items:center;gap:4px}
.ka-cfg-pstatus{display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:6px;font-size:9px;font-weight:700;letter-spacing:.3px;text-transform:uppercase}
.ka-cfg-pstatus.connected{background:rgba(34,197,94,0.1);color:#34d399;border:1px solid rgba(34,197,94,0.15)}
.ka-cfg-pstatus.disconnected{background:rgba(248,113,113,0.08);color:#f87171;border:1px solid rgba(248,113,113,0.12)}
.ka-cfg-pstatus .dot{width:5px;height:5px;border-radius:50%;display:inline-block}
.ka-cfg-pstatus.connected .dot{background:#34d399;box-shadow:0 0 6px rgba(34,197,94,0.5)}
.ka-cfg-section{margin-bottom:12px}
.ka-cfg-stitle{font-size:10px;font-weight:700;color:rgba(255,255,255,0.3);text-transform:uppercase;letter-spacing:.6px;padding:0 4px 8px;display:flex;align-items:center;gap:6px}
.ka-cfg-card{background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.05);border-radius:14px;overflow:hidden}
.ka-cfg-row{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;border-bottom:1px solid rgba(255,255,255,0.03);gap:10px}
.ka-cfg-row:last-child{border-bottom:none}
.ka-cfg-row-left{display:flex;align-items:center;gap:10px;flex:1;min-width:0}
.ka-cfg-row-icon{width:32px;height:32px;border-radius:9px;display:flex;align-items:center;justify-content:center;flex-shrink:0;border:1px solid rgba(255,255,255,0.04)}
.ka-cfg-row-icon.green{background:rgba(20,122,70,0.1);color:#4ade80;border-color:rgba(20,122,70,0.1)}
.ka-cfg-row-icon.cyan{background:rgba(6,182,212,0.1);color:#67e8f9;border-color:rgba(6,182,212,0.1)}
.ka-cfg-row-info{flex:1;min-width:0}
.ka-cfg-row-info h4{font-size:12.5px;font-weight:600;color:rgba(255,255,255,0.88);margin:0 0 2px}
.ka-cfg-row-info p{font-size:10px;color:rgba(255,255,255,0.3);margin:0}
.ka-cfg-input{width:100%;padding:10px 12px;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.06);border-radius:10px;color:#e2e8f0;font-size:12px;font-family:'SF Mono',Monaco,Consolas,monospace;outline:none;box-sizing:border-box;transition:all .2s}
.ka-cfg-input:focus{border-color:rgba(20,122,70,0.4);box-shadow:0 0 0 3px rgba(20,122,70,0.06)}
.ka-cfg-btns{display:flex;gap:6px;margin-top:8px}
.ka-cfg-btn{flex:1;padding:9px 12px;border-radius:9px;font-size:11px;font-weight:600;cursor:pointer;border:none;transition:all .2s;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:5px}
.ka-cfg-btn.primary{background:linear-gradient(135deg,rgba(20,122,70,0.3),rgba(46,172,104,0.2));color:#86efac;border:1px solid rgba(20,122,70,0.2)}
.ka-cfg-btn.primary:hover{background:linear-gradient(135deg,rgba(20,122,70,0.4),rgba(46,172,104,0.3))}
.ka-cfg-btn.danger{background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1)}
.ka-cfg-btn.sync{background:rgba(6,182,212,0.12);color:#67e8f9;border:1px solid rgba(6,182,212,0.15)}
.ka-cfg-status{margin-top:8px;padding:8px 12px;border-radius:9px;font-size:10.5px;font-weight:500;display:none;align-items:center;gap:6px;animation:ka-fadeIn .3s ease}
.ka-cfg-status.show{display:flex}
.ka-cfg-status.success{background:rgba(34,197,94,0.06);color:#34d399;border:1px solid rgba(34,197,94,0.1)}
.ka-cfg-status.error{background:rgba(248,113,113,0.06);color:#f87171;border:1px solid rgba(248,113,113,0.1)}
.ka-cfg-version{text-align:center;padding:12px;font-size:9px;color:rgba(255,255,255,0.12);letter-spacing:.5px}
@keyframes ka-spin{to{transform:rotate(360deg)}}.ka-spin{animation:ka-spin 1s linear infinite;display:inline-flex}
@keyframes ka-pulse{0%,100%{opacity:1}50%{opacity:0.5}}
@keyframes ka-fadeIn{from{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}
`;
document.head.appendChild(css);

// ═══ UTILS ═══
function norm(s) { return (s||"").toLowerCase().trim().replace(/\s+/g," "); }
function qHash(s) { var h=0; s=(s||""); for(var i=0;i<s.length;i++){h=((h<<5)-h)+s.charCodeAt(i); h|=0;} return String(h); }
function cleanAIResponse(t) { return t.replace(/^(a resposta [eé]:?|the answer is:?|resposta:?|answer:?)/i, "").trim(); }

// ═══ LOG ═══
function log(msg, type) {
  S.logs.unshift({ msg: msg, type: type || "inf", time: new Date() });
  if(S.logs.length > 100) S.logs.length = 100;
  renderLogs();
}
function renderLogs() {
  if(!logListEl) return;
  if(!S.logs.length) { logListEl.innerHTML = '<div class="ka-el">'+IC.list+'<div>Nenhum log</div></div>'; return; }
  var icons = { inf: IC.info, suc: IC.check, err: IC.x, wrn: IC.info };
  logListEl.innerHTML = S.logs.slice(0, 50).map(function(l) {
    var t = l.time; var ts = (t.getHours()<10?"0":"")+t.getHours()+":"+(t.getMinutes()<10?"0":"")+t.getMinutes()+":"+(t.getSeconds()<10?"0":"")+t.getSeconds();
    return '<div class="ka-li '+l.type+'"><div class="log-icon">'+(icons[l.type]||icons.inf)+'</div><span class="ka-lt">'+ts+'</span><span class="ka-lm">'+l.msg+'</span></div>';
  }).join("");
}

// ═══ STATUS ═══
function setStatus(msg, type) {
  if(!stEl) return;
  stEl.className = "ka-st vi " + type;
  var icons = { inf: IC.info, suc: IC.check, err: IC.x, wrn: IC.info };
  stEl.innerHTML = (icons[type]||"") + " " + msg;
}

function updateStats() {
  if(typeof solvedEl !== "undefined" && solvedEl) solvedEl.textContent = S.stats.solved;
  if(typeof correctEl !== "undefined" && correctEl) correctEl.textContent = S.stats.correct;
  if(typeof wrongEl !== "undefined" && wrongEl) wrongEl.textContent = S.stats.wrong;
  if(typeof streakEl !== "undefined" && streakEl) streakEl.textContent = S.stats.streak;
}

// ═══ BUILD PANEL ═══
var fab = document.createElement("div");
fab.id = "ka-fab";
fab.innerHTML = IC.book + '<div class="fab-pulse"></div><div class="fab-badge" id="ka-badge">AI</div>';
document.body.appendChild(fab);

var panel = document.createElement("div");
panel.id = "ka-panel";
panel.innerHTML = [
  '<div class="ka-orb ka-orb1"></div><div class="ka-orb ka-orb2"></div>',
  '<div class="ka-h" id="ka-header">',
    '<div class="ka-p">',
      '<div class="ka-av">'+IC.book+'</div>',
      '<div class="ka-i"><h3>Khan Solver <span class="ka-b on" id="ka-api-badge">AI</span></h3><span>DoglyTdc v'+CFG.version+'</span></div>',
    '</div>',
    '<div class="ka-hb">',
      '<div class="ka-ib" id="ka-min" title="Minimizar">'+IC.minus+'</div>',
      '<div class="ka-ib" id="ka-hide" title="Ocultar (Alt)">'+IC.eye+'</div>',
    '</div>',
  '</div>',
  '<div class="ka-n" id="ka-nav">',
    '<button class="ka-nb ac" data-p="solver">'+IC.zap+' Solver</button>',
    '<button class="ka-nb" data-p="stats">'+IC.target+' Stats</button>',
    '<button class="ka-nb" data-p="logs">'+IC.list+' Logs</button>',
    '<button class="ka-nb" data-p="config">'+IC.settings+' Config</button>',
  '</div>',
  // ─── SOLVER PAGE ───
  '<div class="ka-pg ac" id="ka-p-solver">',
    '<div class="ka-intercept-bar" id="ka-intercept-bar">'+IC.zap+' <span id="ka-intercept-status">Interceptando API do Khan Academy...</span></div>',
    '<div class="ka-keys">'+IC.info+' <kbd>Alt</kbd> Ocultar <kbd>D</kbd> Detectar <kbd>R</kbd> Resolver</div>',
    '<div class="ka-qc">',
      '<div style="display:flex;align-items:center;gap:6px;margin-bottom:6px"><span class="ka-tb" id="ka-tp">Detectando...</span></div>',
      '<div class="ka-qt em" id="ka-q">Aguardando questao...</div>',
    '</div>',
    '<div class="ka-ac">',
      '<button class="ka-bt sc" id="ka-det">'+IC.search+' Detectar</button>',
      '<button class="ka-bt pr" id="ka-slv">'+IC.zap+' Resolver</button>',
      '<button class="ka-bt sc" id="ka-scr">'+IC.camera+' Screenshot</button>',
      '<button class="ka-bt am" id="ka-auto">'+IC.play+' Auto</button>',
    '</div>',
    '<div class="ka-st" id="ka-status"></div>',
  '</div>',
  // ─── STATS PAGE ───
  '<div class="ka-pg" id="ka-p-stats">',
    '<div class="ka-sg">',
      '<div class="ka-sc"><div class="ka-sv" id="ka-s-solved">0</div><div class="ka-sl">Resolvidas</div></div>',
      '<div class="ka-sc s"><div class="ka-sv" id="ka-s-correct">0</div><div class="ka-sl">Corretas</div></div>',
      '<div class="ka-sc e"><div class="ka-sv" id="ka-s-wrong">0</div><div class="ka-sl">Erradas</div></div>',
      '<div class="ka-sc st"><div class="ka-sv" id="ka-s-streak">0</div><div class="ka-sl">Streak</div></div>',
    '</div>',
    '<div class="ka-intercept-bar">'+IC.zap+' Respostas interceptadas: <strong id="ka-intercept-count">0</strong></div>',
  '</div>',
  // ─── LOGS PAGE ───
  '<div class="ka-pg" id="ka-p-logs">',
    '<div class="ka-lc">',
      '<div class="ka-lh"><h4>'+IC.list+' Logs <span class="log-count" id="ka-log-count">0</span></h4><button class="ka-ib" id="ka-cl" style="width:24px;height:24px;border-radius:6px" title="Limpar">'+IC.trash+'</button></div>',
      '<div class="ka-ll" id="ka-log-list"></div>',
    '</div>',
  '</div>',
  // ─── CONFIG PAGE ───
  '<div class="ka-pg" id="ka-p-config">',
    '<div class="ka-cfg-hero">',
      '<div class="ka-cfg-profile">',
        '<div class="ka-cfg-avatar" id="ka-cfg-avatar">K</div>',
        '<div class="ka-cfg-pinfo">',
          '<div class="ka-cfg-pname" id="ka-cfg-name">Khan Solver</div>',
          '<div class="ka-cfg-psub" id="ka-cfg-sub">DoglyTdc Edition</div>',
          '<div class="ka-cfg-pstatus '+(S.useDogly?'connected':'disconnected')+'" id="ka-cfg-pstatus"><span class="dot"></span> '+(S.useDogly?'Online':'Offline')+'</div>',
        '</div>',
      '</div>',
    '</div>',
    '<div class="ka-cfg-section">',
      '<div class="ka-cfg-stitle">'+IC.key+' Provedor de IA</div>',
      '<div class="ka-cfg-card">',
        '<div class="ka-cfg-row">',
          '<div class="ka-cfg-row-left">',
            '<div class="ka-cfg-row-icon green">'+IC.key+'</div>',
            '<div class="ka-cfg-row-info"><h4>API Key</h4><p id="ka-cfg-provider">Groq / Google AI</p></div>',
          '</div>',
        '</div>',
        '<div style="padding:12px 14px">',
          '<input type="password" class="ka-cfg-input" id="ka-ki" placeholder="Cole sua API Key (Groq/Google AI)...">',
          '<div class="ka-cfg-btns">',
            '<button class="ka-cfg-btn primary" id="ka-ks">'+IC.check+' Salvar</button>',
            '<button class="ka-cfg-btn sync" id="ka-ksync">'+IC.rotate+' Sync</button>',
            '<button class="ka-cfg-btn danger" id="ka-kc">'+IC.trash+' Limpar</button>',
          '</div>',
          '<div class="ka-cfg-status" id="ka-cfg-key-status"></div>',
        '</div>',
      '</div>',
    '</div>',
    '<div class="ka-cfg-section">',
      '<div class="ka-cfg-stitle">'+IC.link+' DoglyTdc Webhook</div>',
      '<div class="ka-cfg-card">',
        '<div style="padding:12px 14px">',
          '<input type="password" class="ka-cfg-input" id="ka-wt" placeholder="Token do webhook DoglyTdc..." value="'+(S.webhookToken && S.webhookToken !== "137a39770c10d5bb7349de3f353316576f81d0b1a0e0fb44" ? S.webhookToken : "")+'">',
          '<div class="ka-cfg-btns">',
            '<button class="ka-cfg-btn primary" id="ka-ws">'+IC.check+' Conectar</button>',
          '</div>',
          '<div class="ka-cfg-status" id="ka-cfg-conn-status"></div>',
        '</div>',
      '</div>',
    '</div>',
    '<div class="ka-cfg-section">',
      '<div class="ka-cfg-stitle">'+IC.settings+' Opcoes</div>',
      '<div class="ka-cfg-card">',
        '<div class="ka-si"><div class="ka-sil"><div class="ka-sic">'+IC.zap+'</div><div class="ka-sii"><h4>Auto Submit</h4><p>Enviar resposta automaticamente</p></div></div><div class="ka-tg'+(S.settings.autoSubmit?" ac":"")+'" data-s="autoSubmit"></div></div>',
        '<div class="ka-si"><div class="ka-sil"><div class="ka-sic">'+IC.play+'</div><div class="ka-sii"><h4>Auto Advance</h4><p>Avancar para proxima questao</p></div></div><div class="ka-tg'+(S.settings.autoAdvance?" ac":"")+'" data-s="autoAdvance"></div></div>',
        '<div class="ka-si"><div class="ka-sil"><div class="ka-sic">'+IC.eye+'</div><div class="ka-sii"><h4>Vision Mode</h4><p>Enviar imagens para IA</p></div></div><div class="ka-tg'+(S.settings.visionMode?" ac":"")+'" data-s="visionMode"></div></div>',
        '<div class="ka-si"><div class="ka-sil"><div class="ka-sic">'+IC.camera+'</div><div class="ka-sii"><h4>Screenshot Mode</h4><p>Capturar tela para IA</p></div></div><div class="ka-tg'+(S.settings.screenshotMode?" ac":"")+'" data-s="screenshotMode"></div></div>',
        '<div class="ka-si"><div class="ka-sil"><div class="ka-sic">'+IC.target+'</div><div class="ka-sii"><h4>API Interception</h4><p>Interceptar respostas da API</p></div></div><div class="ka-tg'+(S.settings.useInterception?" ac":"")+'" data-s="useInterception"></div></div>',
      '</div>',
    '</div>',
    '<div class="ka-cfg-version">Khan Academy AI Solver Pro v'+CFG.version+' — DoglyTdc Edition</div>',
  '</div>',
].join("");
document.body.appendChild(panel);

// ═══ DOM REFS ═══
var header = document.getElementById("ka-header");
var navBtns = panel.querySelectorAll(".ka-nb");
var pages = panel.querySelectorAll(".ka-pg");
var qEl = document.getElementById("ka-q");
var tpEl = document.getElementById("ka-tp");
var stEl = document.getElementById("ka-status");
var detBtn = document.getElementById("ka-det");
var slvBtn = document.getElementById("ka-slv");
var scrBtn = document.getElementById("ka-scr");
var autoBtn = document.getElementById("ka-auto");
var logListEl = document.getElementById("ka-log-list");
var solvedEl = document.getElementById("ka-s-solved");
var correctEl = document.getElementById("ka-s-correct");
var wrongEl = document.getElementById("ka-s-wrong");
var streakEl = document.getElementById("ka-s-streak");
var interceptCountEl = document.getElementById("ka-intercept-count");
var interceptStatusEl = document.getElementById("ka-intercept-status");

// ═══ NAV ═══
navBtns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    navBtns.forEach(function(b){ b.classList.remove("ac"); });
    btn.classList.add("ac");
    var pg = btn.getAttribute("data-p");
    pages.forEach(function(p){ p.classList.remove("ac"); });
    var target = document.getElementById("ka-p-" + pg);
    if(target) target.classList.add("ac");
  });
});

// ═══ TOGGLE PANEL ═══
function togglePanel() {
  if(S.minimized) { S.minimized = false; panel.style.display = ""; fab.style.display = "none"; return; }
  S.hidden = !S.hidden;
  panel.classList.toggle("hidden", S.hidden);
  fab.style.display = S.hidden ? "flex" : "none";
}
fab.addEventListener("click", function() { S.hidden = false; S.minimized = false; panel.classList.remove("hidden"); panel.style.display = ""; fab.style.display = "none"; });
document.getElementById("ka-hide").addEventListener("click", togglePanel);
document.getElementById("ka-min").addEventListener("click", function() { S.minimized = true; panel.style.display = "none"; fab.style.display = "flex"; });

// ═══ TOGGLES ═══
panel.querySelectorAll(".ka-tg").forEach(function(tg) {
  tg.addEventListener("click", function() {
    var s = tg.getAttribute("data-s");
    if(s && S.settings.hasOwnProperty(s)) { S.settings[s] = !S.settings[s]; tg.classList.toggle("ac", S.settings[s]); saveRemoteConfig(); }
  });
});

// ═══ CONFIG STATUS HELPER ═══
function setCfgStatus(id, msg, type) {
  var el = document.getElementById(id);
  if(!el) return;
  el.className = "ka-cfg-status show " + type;
  el.textContent = msg;
  setTimeout(function(){ el.className = "ka-cfg-status"; }, 5000);
}

// ═══ API BADGE ═══
function updateBadge() {
  var badgeEl = document.getElementById("ka-api-badge");
  if(badgeEl) {
    var active = S.useDogly || S.apiKey;
    badgeEl.className = "ka-b " + (active ? (S.useDogly ? "dtdc" : "on") : "off");
    badgeEl.textContent = active ? (S.useDogly ? "DTDC" : "API") : "OFF";
  }
}
function updateCfgProvider() {
  var el = document.getElementById("ka-cfg-provider");
  if(!el) return;
  if(S.useDogly) el.textContent = "DoglyTdc (Pool de chaves)";
  else if(S.apiKey) el.textContent = getApiType() === "google" ? "Google AI (Gemini)" : "Groq (Llama)";
  else el.textContent = "Nao configurado";
}
updateBadge(); updateCfgProvider();

// ═══ CONFIG EVENTS ═══
panel.querySelector("#ka-ks").addEventListener("click", function(){
  var nk = panel.querySelector("#ka-ki").value.trim();
  if(nk && nk.length > 5) {
    S.apiKey = nk; S.useDogly = false; updateBadge(); updateCfgProvider();
    panel.querySelector("#ka-ki").value = "";
    log("API Key salva!", "suc"); setCfgStatus("ka-cfg-key-status", "API Key salva!", "success"); saveRemoteConfig();
  } else { setCfgStatus("ka-cfg-key-status", "Key muito curta", "error"); }
});
panel.querySelector("#ka-ksync").addEventListener("click", function(){
  var nk = panel.querySelector("#ka-ki").value.trim() || S.apiKey;
  if(!nk || nk.length < 5) { setCfgStatus("ka-cfg-key-status", "Insira uma API Key", "error"); return; }
  if(!S.useDogly) { setCfgStatus("ka-cfg-key-status", "Conecte ao DoglyTdc primeiro", "error"); return; }
  setCfgStatus("ka-cfg-key-status", "Sincronizando...", "info");
  var provider = nk.indexOf("AIza") === 0 ? "google" : "groq";
  fetch(CFG.webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-webhook-token": S.webhookToken },
    body: JSON.stringify({ action: "sync_key", api_key: nk, provider: provider })
  }).then(function(r){ return r.json(); }).then(function(d){
    if(d.success) { log("Key sincronizada!", "suc"); setCfgStatus("ka-cfg-key-status", "Sincronizada!", "success"); }
    else setCfgStatus("ka-cfg-key-status", "Erro: " + (d.error || "?"), "error");
  }).catch(function(e){ setCfgStatus("ka-cfg-key-status", "Erro: " + e.message, "error"); });
});
panel.querySelector("#ka-kc").addEventListener("click", function(){
  S.apiKey = ""; updateBadge(); updateCfgProvider(); log("Key removida", "inf");
});
panel.querySelector("#ka-ws").addEventListener("click", function(){
  var token = panel.querySelector("#ka-wt").value.trim();
  if(token && token.length > 5) {
    S.webhookToken = token; S.useDogly = true; updateBadge(); updateCfgProvider();
    log("DoglyTdc conectado!", "suc");
    setCfgStatus("ka-cfg-conn-status", "Conectado!", "success");
    var statusEl = panel.querySelector("#ka-cfg-pstatus");
    if(statusEl) { statusEl.className = "ka-cfg-pstatus connected"; statusEl.innerHTML = '<span class="dot"></span> Online'; }
    fetchUserProfile(); loadRemoteConfig(); saveRemoteConfig();
  } else { setCfgStatus("ka-cfg-conn-status", "Token invalido", "error"); }
});
panel.querySelector("#ka-cl").addEventListener("click", function(){ S.logs = []; renderLogs(); });

// ═══ DRAG ═══
var dsx=0,dsy=0,psx=0,psy=0;
if(!isMobile) { header.addEventListener("mousedown", dStart); document.addEventListener("mousemove", dMove); document.addEventListener("mouseup", dEnd); }
header.addEventListener("touchstart", dStart, {passive:false});
document.addEventListener("touchmove", dMove, {passive:false});
document.addEventListener("touchend", dEnd);
function dStart(e){ if(S.minimized)return; var tgt=e.target; if(tgt&&(tgt.closest(".ka-ib")||tgt.closest("button"))) return; e.preventDefault(); S.isDragging=true; var t=e.touches?e.touches[0]:e; var r=panel.getBoundingClientRect(); dsx=t.clientX;dsy=t.clientY;psx=r.left;psy=r.top; panel.style.transition="none"; }
function dMove(e){ if(!S.isDragging)return; e.preventDefault(); var t=e.touches?e.touches[0]:e; if(!isMobile) { panel.style.left=Math.max(0,Math.min(psx+t.clientX-dsx,window.innerWidth-panel.offsetWidth))+"px"; panel.style.top=Math.max(0,Math.min(psy+t.clientY-dsy,window.innerHeight-panel.offsetHeight))+"px"; panel.style.right="auto"; panel.style.bottom="auto"; } }
function dEnd(){ S.isDragging=false; panel.style.transition=""; }

// ═══ SCREENSHOT ═══
function captureScreenshot() {
  return new Promise(function(res) {
    try {
      panel.style.visibility = "hidden"; fab.style.visibility = "hidden";
      function doCapture() {
        if(typeof html2canvas !== "undefined") {
          html2canvas(document.documentElement, {
            width: window.innerWidth, height: window.innerHeight,
            x: window.scrollX, y: window.scrollY,
            scale: window.devicePixelRatio > 1 ? 1 : 0.8,
            useCORS: true, allowTaint: true, logging: false,
            ignoreElements: function(el) { return el.id === "ka-panel" || el.id === "ka-fab" || el.id === "ka-style"; }
          }).then(function(canvas) {
            panel.style.visibility = ""; fab.style.visibility = "";
            var maxW = 1280;
            if(canvas.width > maxW) {
              var ratio = maxW / canvas.width;
              var resized = document.createElement("canvas");
              resized.width = maxW; resized.height = Math.round(canvas.height * ratio);
              resized.getContext("2d").drawImage(canvas, 0, 0, resized.width, resized.height);
              res(resized.toDataURL("image/jpeg", 0.75));
            } else { res(canvas.toDataURL("image/jpeg", 0.75)); }
          }).catch(function() { panel.style.visibility = ""; fab.style.visibility = ""; res(null); });
        } else { panel.style.visibility = ""; fab.style.visibility = ""; res(null); }
      }
      if(typeof html2canvas === "undefined") {
        loadH2C().then(function(ok) { if(ok) setTimeout(doCapture, 100); else { panel.style.visibility = ""; fab.style.visibility = ""; res(null); } });
      } else doCapture();
    } catch(e) { panel.style.visibility = ""; fab.style.visibility = ""; res(null); }
  });
}

// ═══ SITE MONITOR ═══
function monitorSite() {
  var st = S.siteState;
  var host = location.hostname;
  st.isKhanAcademy = /khanacademy|kastatic|kasandbox/i.test(host);
  
  // Update intercept bar
  if(interceptStatusEl) {
    if(S.interceptedAnswers.length > 0) {
      interceptStatusEl.innerHTML = '<span style="color:#22c55e">\u2705 ' + S.interceptedAnswers.length + ' resposta(s) interceptada(s)</span>';
    } else if(st.isKhanAcademy) {
      interceptStatusEl.textContent = "Monitorando API...";
    } else {
      interceptStatusEl.textContent = "Aguardando Khan Academy...";
    }
  }
  if(interceptCountEl) interceptCountEl.textContent = S.interceptedAnswers.length;
  
  // Detect exercise progress
  var progressBar = document.querySelector('[class*="progress"], [role="progressbar"], [data-testid*="progress"]');
  if(progressBar) {
    var w = progressBar.style && progressBar.style.width;
    if(w && w.indexOf("%") >= 0) {
      var pct = parseFloat(w);
      st.questionNumber = Math.round(pct / 10) || 1;
    }
  }
}
S.monitorInterval = setInterval(monitorSite, 2000);
monitorSite();

// ═══ CONTENT EXTRACTION ═══
function extractPageContent() {
  var data = { question: "", questionImages: [], options: [], optionImages: [], allImages: [], questionType: "unknown", elements: [], inputElement: null };
  
  try {
    // Khan Academy question selectors
    var qSelectors = [
      '[class*="perseus-renderer"] .paragraph',
      '[class*="perseus"] .paragraph',
      '.framework-perseus .paragraph',
      '[data-testid="question-content"]',
      '.perseus-renderer',
      '[class*="question-area"]',
      '[class*="item-renderer"]',
      '.structured-item-content'
    ];
    
    for(var i = 0; i < qSelectors.length; i++) {
      var qe = document.querySelector(qSelectors[i]);
      if(qe && qe.innerText.trim().length > 5) {
        data.question = qe.innerText.trim().replace(/\s+/g, " ");
        break;
      }
    }
    
    // Question images
    document.querySelectorAll('.perseus-renderer img, [class*="perseus"] img, .graphie img, svg.graphie').forEach(function(img) {
      if(img.src && img.naturalWidth > 30 && data.questionImages.indexOf(img.src) === -1) data.questionImages.push(img.src);
    });
    
    // All visible images
    document.querySelectorAll("img").forEach(function(img) {
      if(img.src && img.naturalWidth > 30 && img.offsetParent && img.src.indexOf("avatar") === -1 && img.src.indexOf("logo") === -1 && img.src.indexOf("icon") === -1 && data.allImages.indexOf(img.src) === -1) data.allImages.push(img.src);
    });
    
    // Detect options - Khan Academy MCQ
    var optSelectors = [
      '[class*="radio-option"]', '[class*="choice-option"]',
      'fieldset [class*="description"]', '[data-testid*="choice"]',
      'li[class*="option"]', '.perseus-radio-option',
      '[class*="choice-clue"]', 'button[class*="option"]'
    ];
    
    var optEls = [];
    for(var si = 0; si < optSelectors.length; si++) {
      var found = document.querySelectorAll(optSelectors[si]);
      if(found.length >= 2) {
        optEls = Array.from(found).filter(function(el){ return el.offsetParent !== null && !el.closest("#ka-panel"); });
        if(optEls.length >= 2) break;
      }
    }
    
    if(optEls.length >= 2) {
      data.questionType = "mcq";
      optEls.forEach(function(el) {
        data.options.push(el.innerText.trim());
        data.elements.push(el);
        var img = el.querySelector("img");
        if(img && img.src) data.optionImages.push(img.src);
        else data.optionImages.push(null);
      });
    }
    
    // Detect input fields (expression/numeric)
    var inputSelectors = [
      'input[class*="input-with-focus"]', 'input[type="text"][class*="perseus"]',
      '.perseus-input', 'input[class*="expression"]', 'input[class*="math-input"]',
      '.perseus-renderer input[type="text"]', '.mq-editable-field',
      'textarea[class*="perseus"]', '.simple-keypad-input'
    ];
    for(var ii = 0; ii < inputSelectors.length; ii++) {
      var inp = document.querySelector(inputSelectors[ii]);
      if(inp && inp.offsetParent) {
        data.questionType = "expression";
        data.inputElement = inp;
        break;
      }
    }
    
    // Dropdown
    var dropdowns = document.querySelectorAll('select[class*="perseus"], .perseus-dropdown, [class*="dropdown"] select');
    if(dropdowns.length > 0) {
      data.questionType = "dropdown";
      dropdowns.forEach(function(dd) {
        data.elements.push(dd);
        dd.querySelectorAll("option").forEach(function(o) {
          if(o.value && o.innerText.trim()) data.options.push(o.innerText.trim());
        });
      });
    }
    
  } catch(e) { console.error("[KA Solver] Extract error:", e); }
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
        if(typeof m.content === "string") parts.push({text: m.role + ": " + m.content});
        else if(Array.isArray(m.content)) {
          m.content.forEach(function(c) {
            if(c.type === "text") parts.push({text: c.text});
            else if(c.type === "image_url") parts.push({inline_data: {mime_type: "image/jpeg", data: c.image_url.url.replace(/^data:image\\/[^;]+;base64,/,"")}});
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
      _origFetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST", headers: {"Content-Type": "application/json", "Authorization": "Bearer " + S.apiKey},
        body: JSON.stringify({model: "llama-3.3-70b-versatile", messages: textMsgs, temperature:0.1, max_tokens:1000})
      })
      .then(function(r){ if(!r.ok) throw new Error("Groq API " + r.status); return r.json(); })
      .then(function(d){ res(d.choices?.[0]?.message?.content || ""); })
      .catch(rej);
    }
  });
}

// ═══ DETECT ═══
function detect() {
  var data = extractPageContent();
  
  // If we have intercepted answers, use those first
  if(S.interceptedAnswers.length > 0 && S.settings.useInterception) {
    tpEl.textContent = "API Interceptada";
    var html = '<div style="color:#22c55e;font-weight:700;margin-bottom:6px">\uD83D\uDD13 Respostas da API:</div>';
    S.interceptedAnswers.forEach(function(a, i) {
      html += '<div style="padding:3px 0;color:rgba(255,255,255,0.8)">' + (i+1) + '. <span style="color:#34d399">' + (a.value || "N/A") + '</span> <span style="color:rgba(255,255,255,0.3);font-size:9px">(' + (a.type || "?") + ')</span></div>';
    });
    qEl.className = "ka-qt"; qEl.innerHTML = html;
    setStatus("Respostas da API prontas!", "suc");
    S.lastQ = data;
    return data;
  }
  
  if(!data.question && data.allImages.length === 0 && data.options.length === 0) {
    qEl.className = "ka-qt em"; qEl.textContent = "Nenhuma questao detectada";
    tpEl.textContent = "Nao encontrada"; setStatus("Questao nao encontrada", "err");
    return null;
  }
  
  S.lastQ = data; S.lastQHash = qHash(data.question);
  var typeNames = { mcq: "Multipla Escolha", expression: "Expressao/Numero", dropdown: "Dropdown", unknown: "Desconhecido" };
  tpEl.textContent = typeNames[data.questionType] || data.questionType;
  
  var html = '<div style="margin-bottom:5px;font-weight:600;color:rgba(255,255,255,0.9)">' + (data.question || "[Screenshot]").substring(0, 200) + '</div>';
  if(data.options.length > 0) {
    html += '<div style="margin-top:6px">';
    data.options.forEach(function(o, i) {
      html += '<div style="padding:3px 0;color:rgba(255,255,255,0.65);font-size:11px"><span style="color:#4ade80;font-weight:700;font-size:10px;min-width:18px;display:inline-block">'+String.fromCharCode(65+i)+')</span> ' + o.substring(0, 80) + '</div>';
    });
    html += '</div>';
  }
  qEl.className = "ka-qt"; qEl.innerHTML = html;
  setStatus((typeNames[data.questionType]||"?") + " | " + data.options.length + " opcoes", "suc");
  return data;
}

// ═══ APPLY ANSWER ═══
function applyAnswer(data, answer) {
  var ca = answer;
  
  if(data.questionType === "mcq" && data.elements.length > 0) {
    var match = null, matchIdx = -1;
    // Letter match
    var letterMatch = ca.match(/^\s*([A-Da-d])\s*[).\s]/);
    if(!letterMatch) letterMatch = ca.match(/^\s*([A-Da-d])\s*$/);
    if(letterMatch) {
      matchIdx = letterMatch[1].toUpperCase().charCodeAt(0) - 65;
      if(matchIdx >= 0 && matchIdx < data.elements.length) match = data.elements[matchIdx];
    }
    if(!match) {
      var cleanCa = norm(ca.replace(/^[A-Da-d][).\s]+/, ""));
      for(var i = 0; i < data.options.length; i++) {
        if(norm(data.options[i]).indexOf(cleanCa) >= 0 || cleanCa.indexOf(norm(data.options[i])) >= 0) { match = data.elements[i]; matchIdx = i; break; }
      }
    }
    if(match) {
      match.style.border = "2px solid #22c55e"; match.style.boxShadow = "0 0 20px rgba(34,197,94,0.25)"; match.style.transition = "all 0.3s";
      match.click();
      setStatus(String.fromCharCode(65+matchIdx) + ") selecionado", "suc");
      if(S.settings.autoSubmit) setTimeout(clickCheck, 800);
    } else {
      setStatus("IA: " + ca.substring(0,60), "wrn");
    }
  } else if(data.questionType === "expression" && data.inputElement) {
    var inp = data.inputElement;
    inp.focus();
    try {
      var proto = inp.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
      var nativeSet = Object.getOwnPropertyDescriptor(proto, 'value');
      if(nativeSet && nativeSet.set) {
        nativeSet.set.call(inp, ca);
        inp.dispatchEvent(new Event("input", {bubbles:true}));
        inp.dispatchEvent(new Event("change", {bubbles:true}));
      }
    } catch(e) { inp.value = ca; }
    inp.dispatchEvent(new Event("input", {bubbles:true}));
    inp.dispatchEvent(new Event("change", {bubbles:true}));
    setStatus("Digitado: " + ca, "suc");
    if(S.settings.autoSubmit) setTimeout(clickCheck, 800);
  } else if(data.questionType === "dropdown" && data.elements.length > 0) {
    data.elements.forEach(function(dd) {
      var opts = dd.querySelectorAll("option");
      opts.forEach(function(o) {
        if(norm(o.innerText).indexOf(norm(ca)) >= 0 || norm(ca).indexOf(norm(o.innerText)) >= 0) {
          dd.value = o.value;
          dd.dispatchEvent(new Event("change", {bubbles:true}));
        }
      });
    });
    setStatus("Dropdown: " + ca, "suc");
    if(S.settings.autoSubmit) setTimeout(clickCheck, 800);
  } else {
    setStatus("Resposta: " + ca.substring(0,80), "inf");
    if(S.settings.autoSubmit) setTimeout(clickCheck, 1000);
  }
  updateStats();
}

// ═══ CLICK CHECK / NEXT ═══
function clickCheck() {
  var checkSelectors = [
    'button[data-testid="exercise-check-answer"]',
    'button[class*="check-answer"]',
    '[class*="check-answer-button"]',
    'button[data-testid*="check"]',
    'button:not([disabled])[class*="primary"]'
  ];
  for(var i = 0; i < checkSelectors.length; i++) {
    var btn = document.querySelector(checkSelectors[i]);
    if(btn && btn.offsetParent && !btn.disabled && !btn.closest("#ka-panel")) {
      var text = (btn.innerText || "").toLowerCase();
      if(text.indexOf("check") >= 0 || text.indexOf("verificar") >= 0 || text.indexOf("conferir") >= 0 || text.indexOf("checar") >= 0 || text === "") {
        btn.click(); log("Check clicado", "inf");
        if(S.settings.autoAdvance) setTimeout(clickNext, 1500);
        return;
      }
    }
  }
  // Try any primary-looking button
  var anyBtn = document.querySelector('button[class*="primary"]:not([disabled])');
  if(anyBtn && !anyBtn.closest("#ka-panel")) { anyBtn.click(); log("Primary btn clicado", "inf"); if(S.settings.autoAdvance) setTimeout(clickNext, 1500); }
}

function clickNext() {
  var nextSelectors = [
    'button[data-testid="exercise-next-question"]',
    'button[class*="next-question"]',
    '[class*="next-question-button"]',
    'button[data-testid*="next"]',
    'a[class*="next"]',
    'button:not([disabled])[class*="continue"]'
  ];
  for(var i = 0; i < nextSelectors.length; i++) {
    var btn = document.querySelector(nextSelectors[i]);
    if(btn && btn.offsetParent && !btn.disabled && !btn.closest("#ka-panel")) {
      var text = (btn.innerText || "").toLowerCase();
      if(text.indexOf("next") >= 0 || text.indexOf("proximo") >= 0 || text.indexOf("proxima") >= 0 || text.indexOf("continue") >= 0 || text.indexOf("continuar") >= 0 || text === "") {
        btn.click(); log("Avancou", "inf");
        // Clear intercepted answers for new question
        S.interceptedAnswers = [];
        return;
      }
    }
  }
}

// ═══ SOLVE ═══
function solve() {
  if(S.solving) return;
  var data = S.lastQ || extractPageContent();
  
  // If intercepted answers exist, use them directly
  if(S.interceptedAnswers.length > 0 && S.settings.useInterception) {
    S.solving = true; S.stats.solved++; updateStats();
    log("Usando respostas interceptadas da API", "suc");
    
    var answer = S.interceptedAnswers[0];
    if(answer.type === "mcq" && answer.index !== undefined && data.elements && data.elements[answer.index]) {
      var el = data.elements[answer.index];
      el.style.border = "2px solid #22c55e"; el.style.boxShadow = "0 0 20px rgba(34,197,94,0.25)"; el.style.transition = "all 0.3s";
      el.click();
      setStatus("\u2705 " + String.fromCharCode(65+answer.index) + ") " + (answer.value || "").substring(0,50), "suc");
      S.stats.correct++; S.stats.streak++;
      if(S.stats.streak > S.stats.bestStreak) S.stats.bestStreak = S.stats.streak;
    } else if((answer.type === "numeric" || answer.type === "expression") && data.inputElement) {
      var inp = data.inputElement;
      inp.focus();
      try {
        var proto = inp.tagName === "TEXTAREA" ? window.HTMLTextAreaElement.prototype : window.HTMLInputElement.prototype;
        var nativeSet = Object.getOwnPropertyDescriptor(proto, 'value');
        if(nativeSet && nativeSet.set) { nativeSet.set.call(inp, answer.value); inp.dispatchEvent(new Event("input", {bubbles:true})); inp.dispatchEvent(new Event("change", {bubbles:true})); }
      } catch(e) { inp.value = answer.value; inp.dispatchEvent(new Event("input", {bubbles:true})); }
      setStatus("\u2705 Digitado: " + answer.value, "suc");
      S.stats.correct++; S.stats.streak++;
    } else {
      setStatus("Resposta: " + answer.value, "suc");
      S.stats.correct++; S.stats.streak++;
    }
    
    if(S.stats.streak > S.stats.bestStreak) S.stats.bestStreak = S.stats.streak;
    updateStats();
    if(S.settings.autoSubmit) setTimeout(clickCheck, 800);
    
    S.solving = false;
    slvBtn.disabled = false; slvBtn.innerHTML = IC.zap+' Resolver';
    return;
  }
  
  // Fallback to AI
  if(!data || (!data.question && data.allImages.length === 0 && data.options.length === 0)) {
    data = detect();
    if(!data) { setStatus("Nenhuma questao", "err"); return; }
  }
  
  var at = getApiType();
  if(!at) { setStatus("Configure API Key ou DoglyTdc", "err"); navBtns[3].click(); return; }
  
  S.solving = true; S.stats.solved++; updateStats();
  slvBtn.disabled = true; slvBtn.innerHTML = '<span class="ka-spin">'+IC.loader+'</span> Pensando...';
  setStatus("Consultando IA...", "inf");
  
  var ssPromise = S.settings.screenshotMode ? captureScreenshot() : Promise.resolve(null);
  ssPromise.then(function(screenshotB64) {
    var sysPrompt = "Voce e um assistente que RESOLVE questoes do Khan Academy. REGRAS:\n1. Responda SOMENTE com a resposta correta. NADA MAIS.\n2. Para alternativas: APENAS a LETRA + texto. Ex: B) Fotossintese\n3. Para expressao/numero: apenas o valor exato\n4. Para dropdown: texto exato da opcao\n5. NUNCA explique. ZERO texto extra.";
    
    var userParts = [];
    var textContent = "PERGUNTA: \"" + (data.question || "[Veja a imagem/screenshot]") + "\"";
    if(data.options.length > 0) {
      textContent += "\n\nALTERNATIVAS:";
      data.options.forEach(function(o, i) { textContent += "\n" + String.fromCharCode(65+i) + ") " + o; });
    }
    userParts.push({type: "text", text: textContent});
    if(screenshotB64) userParts.push({type: "image_url", image_url: {url: screenshotB64}});
    
    var messages = [{role: "system", content: sysPrompt}];
    if(userParts.length > 1) messages.push({role: "user", content: userParts});
    else messages.push({role: "user", content: textContent});
    
    return callAI(messages);
  }).then(function(ans) {
    var ca = cleanAIResponse(ans.trim().replace(/[\"\x60]/g, ""));
    log("IA: " + ca.substring(0, 100), "suc");
    applyAnswer(data, ca);
  }).catch(function(e) {
    S.stats.wrong++; setStatus("Erro: " + e.message, "err");
  }).finally(function() {
    S.solving = false; updateStats();
    slvBtn.disabled = false; slvBtn.innerHTML = IC.zap+' Resolver';
  });
}

function detectAndSolve() { var data = detect(); if(data) setTimeout(solve, 200); }

// ═══ AUTO MODE ═══
function toggleAutoMode() {
  S.autoMode = !S.autoMode;
  if(S.autoMode) {
    autoBtn.innerHTML = IC.pause+' Auto ON'; autoBtn.className = 'ka-bt am active';
    log("Auto Mode ATIVADO!", "suc"); S.lastAutoQ = ""; autoSolveLoop();
  } else {
    autoBtn.innerHTML = IC.play+' Auto'; autoBtn.className = 'ka-bt am';
    if(S.autoInterval) { clearTimeout(S.autoInterval); S.autoInterval = null; }
    log("Auto Mode OFF", "inf");
  }
}

function autoSolveLoop() {
  if(!S.autoMode) return;
  
  // If intercepted answers available, solve immediately
  if(S.interceptedAnswers.length > 0) {
    detect();
    setTimeout(function(){ if(!S.autoMode) return; solve(); S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay + 3000); }, 500);
    return;
  }
  
  var data = extractPageContent();
  var currentHash = qHash(data.question);
  if(data.question && currentHash !== S.lastAutoQ) {
    S.lastAutoQ = currentHash; S.lastQ = data;
    log("Nova questao (auto)", "inf"); detect();
    setTimeout(function(){ if(!S.autoMode) return; solve(); S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay + 4000); }, 500);
  } else {
    clickNext();
    S.autoInterval = setTimeout(autoSolveLoop, S.settings.delay);
  }
}

// ═══ BUTTON EVENTS ═══
detBtn.addEventListener("click", detect);
slvBtn.addEventListener("click", solve);
scrBtn.addEventListener("click", function() {
  setStatus("Capturando...", "inf");
  captureScreenshot().then(function(b64) {
    if(b64) { log("Screenshot: " + Math.round(b64.length/1024) + "KB", "suc"); setStatus("Screenshot pronto!", "suc"); }
    else setStatus("Falha na captura", "err");
  });
});
autoBtn.addEventListener("click", toggleAutoMode);

// ═══ KEYBOARD SHORTCUTS ═══
var _altOnly = false, _altDown = false;
document.addEventListener("keydown", function(e) {
  var tgt = e.target;
  if(tgt && tgt.closest && tgt.closest("#ka-panel")) { var tn = (tgt.tagName || "").toLowerCase(); if(tn === "input" || tn === "textarea") return; }
  if(e.code === "AltLeft" || e.code === "AltRight") { _altDown = true; _altOnly = true; return; }
  if(_altDown) _altOnly = false;
  var tag = (tgt.tagName || "").toLowerCase();
  if(tag === "input" || tag === "textarea" || tgt.isContentEditable) return;
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
    var data = extractPageContent();
    var hash = qHash(data.question);
    if(hash && hash !== S.lastQHash) { S.lastQHash = hash; S.lastQ = data; log("Nova questao (observer)", "inf"); detect(); }
  }, 600);
});
observer.observe(document.body, {childList: true, subtree: true, characterData: true});

// ═══ INIT ═══
log("Khan Solver v" + CFG.version + " carregado!", "suc");
log(isMobile ? "Mobile - toque para interagir" : "Alt=Ocultar | D=Detectar | R=Resolver", "suc");
log("Fetch Interception + AI Vision ativo", "inf");
if(S.useDogly) {
  log("DoglyTdc ativo!", "suc");
  _origFetch(CFG.webhookUrl, {
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

setTimeout(function() { var d = detect(); if(d) log("Questao encontrada!", "suc"); }, 1500);

})();