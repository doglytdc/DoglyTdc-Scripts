// DoglyTdc Webhook Helper - Pre-configured
(function(global){
  "use strict";
  var W="https://ucsyxzpdbnuyehizezvb.supabase.co/functions/v1/script-webhook";
  var T="90722c090ec50f368401add86adf4144234d281c40c72d21";
  function createClient(opts){
    opts = opts || {};
    var webhookUrl = opts.webhookUrl || W;
    var webhookToken = opts.webhookToken || T;
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
      ai: function(messages, provider){ return request("ai", { messages: messages, provider: provider }); },
    };
  }
  global.DoglyWebhook = { createClient: createClient };
})(typeof window !== "undefined" ? window : globalThis);
