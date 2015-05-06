module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "Tahta",
    description: "Tahta bilgileri",
    type: "object",
    definitions: {
        Genel: require('./tahtaGenelBilgileri'),
        Kullanici: require('../ortak/kullanici'),
        AnahtarKelimeler: require('../ortak/anahtarKelimeler')
    },
    properties: {
        Genel: {"$ref": "#/definitions/Genel"},
        Kullanicilar: {
            type: "array",
            items: {"$ref": "#/definitions/Kullanici"}
        },
        AnahtarKelimeler: {"$ref": "#/definitions/AnahtarKelimeler", default: []}
    }
};