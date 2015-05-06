var ornek = {
    "SaglikBankId": "CN=Cem TOPKAYA,CN=Users,DC=fresenius,DC=com,DC=tr",
    "RssAdresi": "TOPKAYA",
    "WebAdresi": "Cem TOPKAYA",
    "raw": "IT YONETICISI"
};


module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "SaglikBank Ihale Bilgileri",

    type: "object",

    required: ["SaglikBankId", "raw"],

    additionalProperties: false,

    properties: {
        SaglikBankId: {type: "string", default: ""},
        RssAdresi: {type: "string", default: ""},
        WebAdresi: {type: "string", default: ""},
        SartnameAdresi: {type: "string", default: ""},
        raw: {type: "string", default: ""}
    }
};