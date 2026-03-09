// DoglyTdc Webhook Helper
(function(global){
  "use strict";
  function createClient(opts){
    opts = opts || {};
    var webhookUrl = opts.webhookUrl || "__WEBHOOK_URL__";
    var webhookToken = opts.webhookToken || "__WEBHOOK_TOKEN__";
    function request(action, payload){
      if(!webhookToken) return Promise.resolve({ success: false, error: "webhook_not_configured" });
      return fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-webhook-token": webhookToken },
        body: JSON.stringify(Object.assign({ action: action }, payload || {})),
      }).then(function(r){ return r.json(); });
    }
    return {
      bootstrap: function(){ return request("bootstrap"); },
      profile: function(){ return request("profile"); },
      loadConfig: function(){ return request("load_config"); },
      saveConfig: function(config){ return request("save_config", { config: config || {} }); },
      syncKey: function(apiKey, provider){ return request("sync_key", { api_key: apiKey, provider: provider }); },
    };
  }
  global.DoglyWebhook = { createClient: createClient };
})(typeof window !== "undefined" ? window : globalThis);
