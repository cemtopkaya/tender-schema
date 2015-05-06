module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "Dogrulama",
    description: "Kullanıcı arayüzündeki doğrulama mesajlarını taşır.",
    properties: {
        KullaniciGirisi: {$ref: require('./kullaniciGiris')}
    }
};