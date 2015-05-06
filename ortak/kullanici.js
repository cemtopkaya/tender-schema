module.exports = {
    name: "Kullanıcı",
    description: "Session içinde kullanılacak kullanıcı",
    type: "object",
    definitions: {
        Providers: require('../providers/login')
    },
    required: ["Id", "Providers"],
    additionalProperties: false,
    properties: {
        Id: {type: "integer", default: 0},
        AdiSoyadi: {type: "string"},
        EPosta: {type: "string", format: "email"},
        Sifre: {type: "string"},
        Providers: {$ref: "#/definitions/Providers", default: {}}
    }
};