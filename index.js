window.Intercom("boot", {
    api_base: "https://api-iam.intercom.io",
    app_id: "ssuzn7y8",
  });

window.Intercom("update");
setTimeout(() => {
  Intercom('show');
}, 10000);
