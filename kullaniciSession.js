module.exports = {
    name: "Kullanıcı Session",
    description: "Session içinde kullanılacak kullanıcı",
    type:"object",
    definitions:{
        Kullanici : require('./ortak/kullanici')
    },
    properties:{ $ref: "#/definitions/Kullanici" }
};