export const gatewayIp = "";

export const irokoApiService = gatewayIp + "/PATH_PREFIX/";

export const environment = {
  production: true,
  alias: "prod",
  irokoApiIp: "https://" + irokoApiService,
  signUpLink: "",

  //mircsoft properties
  applicationId: "7c735c93-9970-4db1-bf64-f7ccd2e95a62",
  tenantId: "371f1742-8518-485e-b91e-c18e846b41ba",
  redirectURL: "http://localhost:4200/",
  enableDebug: false,

  //google properties
  firebaseConfig: {
    apiKey: "AIzaSyBgqucgSadAZYDB4LuCGSU6zl8Vg8TLUtg",
    authDomain: "sales-point-dbc98.firebaseapp.com",
    projectId: "sales-point-dbc98",
    storageBucket: "sales-point-dbc98.appspot.com",
    messagingSenderId: "703187381127",
    appId: "1:703187381127:web:68cffa0c44dd1c7a1e4122",
    measurementId: "G-B3LYBH18K8",
  },
};
