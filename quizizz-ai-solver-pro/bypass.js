// DoglyTdc Bypass Loader
(function(){
  "use strict";
  function getParams(){
    try {
      var src = (document.currentScript && document.currentScript.src) || "";
      var url = new URL(src);
      var payload = url.searchParams.get("payload");
      if (payload) return JSON.parse(decodeURIComponent(payload));
      return {
        token: url.searchParams.get("token") || "",
        webhook: url.searchParams.get("webhook") || "",
        raw: url.searchParams.get("raw") || "",
        scriptId: url.searchParams.get("scriptId") || "",
      };
    } catch (_e) {
      return {};
    }
  }
  function withBust(url){ return url + (url.indexOf("?") !== -1 ? "&" : "?") + "t=" + Date.now(); }
  function inject(url){
    return new Promise(function(resolve,reject){
      var s=document.createElement("script");
      s.src=withBust(url);
      s.async=false;
      s.onload=function(){s.remove();resolve(true)};
      s.onerror=function(){s.remove();reject(new Error("load_failed"))};
      (document.head||document.documentElement).appendChild(s);
    });
  }
  async function run(){
    var p=getParams();
    var webhook = p.webhook || "__WEBHOOK_URL__";
    if (p.token) {
      var b = webhook + "?token=" + encodeURIComponent(p.token) + "&format=bundle" + (p.scriptId ? "&script_id=" + encodeURIComponent(p.scriptId) : "");
      try { await inject(b); return; } catch (_e) {}
    }
    if (p.raw) { try { await inject(p.raw); } catch (_e) {} }
  }
  run();
})();
