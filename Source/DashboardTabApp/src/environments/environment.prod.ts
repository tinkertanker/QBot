export const environment = {
    production: false,
    apiBaseUrl: "https://tt-qbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "b00c5e03-a95c-41c3-98f2-76a2ef4b502c",
        clientId: "c27c91b7-af1a-4bea-9162-d4c5e605f768",
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
};
