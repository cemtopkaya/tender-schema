module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "Kullanıcı",
    description: "Session içinde kullanılacak kullanıcı",

    type: "object",

    definitions: {
        IhaleProviders: require('../providers/ihale'),
        Kurum: require('./kurum'),
        Kalem: require('./kalem')
    },

    required: ["Id"],

    additionalProperties: false,

    properties: {
        Id: {type: "integer", default: 0},
        // Nereden çekildiyse(SaglikBank, EKAP vs.)
        IhaleProviders: {$ref: "#/defitinions/IhaleProviders"},
        IhaleNo: {type: "string"},
        Konusu: {type: "string"},
        IhaleTarihi: {type: "integer"},
        IhaleUsul: {type: "string"},
        YapilacagiAdres: {type: "string"},
        SartnameAdres: {type: "string"},
        SistemeEklenmeTarihi: {type: "integer"},
        Kurum: {$ref: "#/definitions/Kurum"},
        Kalemler: {
            "type": "array",
            "items": [
                {
                    "schema": {$ref: "#/definitions/Kalem"}
                }
            ],
            default: []
        }
    }
};