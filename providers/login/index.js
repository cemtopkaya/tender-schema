module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "Providers",
    description: "Kullanıcı Giriş Sağlayıcıları",
    type: "object",
    definitions: {
        AD : require('./providerActiveDirectory'),
        TW : require('./providerTwitter'),
        FB : require('./providerFacebook'),
        GP : require('./providerGooglePlus')
    },
    properties: {
        AD: {$ref: "#/definitions/AD"},
        TW: {$ref: "#/definitions/TW"},
        FB: {$ref: "#/definitions/FB"},
        GP: {$ref: "#/definitions/GP"}
    }
};