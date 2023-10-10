(function(window) {
    window["env"] = window["env"] || {};
  
    // BackEnd Environment variables
    window["env"]["serverApiUrls"] = 'https://ops-bk.sandbox.fynarfin.io';
    window["env"]["serverApiUrl"]  = 'https://ops-bk.sandbox.fynarfin.io';
  
    window["env"]["apiPath"] = '';
    window["env"]["apiVersion"]  = '/v1';
  
    window["env"]["platformTenantId"]  = 'gorilla';
    window["env"]["platformTenantIds"]  = 'gorilla';
  
    window["env"]["authEnabled"] = 'false';

    window["env"]["oauthEnabled"] = 'false';
    window["env"]["oauthType"] = 'keycloak';
    window["env"]["oauthServerUrl"] = 'http://keycloak.sandbox.fynarfin.io/auth';
    window["env"]["oauthRealm"] = 'paymenthub';
    window["env"]["oauthClientId"] = 'opsapp';
    window["env"]["oauthClientSecret"] = 'cRNPVfLctgkMPMLpXTLJPPT1fnz2wdI9';
    window["env"]["oauthBasicAuth"] = 'true';
    window["env"]["oauthBasicAuthToken"] = 'Y2xpZW50Og==';
  
    // Language Environment variables
    window["env"]["defaultLanguage"] = 'en';
    window["env"]["supportedLanguages"] = 'en,fr,es';

  })(this);