// DoglyTdc Bypass Loader - Auto-inject script.js + webhook.js
(function(){
  "use strict";
  var SCRIPT_URL = "https://raw.githubusercontent.com/doglytdc/DoglyTdc-Scripts/main/khan-academy-ai-solver-pro/script.js";
  var WEBHOOK_URL = "https://raw.githubusercontent.com/doglytdc/DoglyTdc-Scripts/main/khan-academy-ai-solver-pro/webhook.js";
  var bust = "t=" + Date.now();
  function loadScript(url) {
    var u = url + (url.indexOf("?") !== -1 ? "&" : "?") + bust;
    return fetch(u, {cache:"no-store"})
      .then(function(r){ if(!r.ok) throw new Error("HTTP " + r.status); return r.text(); });
  }
  Promise.all([loadScript(SCRIPT_URL), loadScript(WEBHOOK_URL)])
    .then(function(results){
      (1,eval)(results[0]);
      try { (1,eval)(results[1]); } catch(e) { console.warn("[DoglyTdc] webhook.js optional:", e); }
      console.log("[DoglyTdc Bypass] Loaded successfully!");
    })
    .catch(function(err){ console.error("[DoglyTdc Bypass] Failed:", err); });
})();
