export const environment = {
    production: false,
    apiBaseUrl: "https://acsqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://acsqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "b00c5e03-a95c-41c3-98f2-76a2ef4b502c",
        clientId: "1fc4c811-a3b5-4295-803e-0542f4a1605d",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
