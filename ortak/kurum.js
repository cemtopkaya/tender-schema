module.exports = {
    name: "Kurum",
    description: "Tüm alanlarda geçerli temel kurum bilgisi. İhale açan kurum bilgisi, ya da diğerleri için geçerli olacaktır.",
    type: "object",
    definitions: {},
    required: ["Id", "Adi"],
    additionalProperties: false,
    properties: {
        Id: {type: "integer", default: 0},
        Adi: {type: "string", default:"Kurum Adı"},
        Tel: {type: "string"},
        Eposta: {type: "string"},
        Faks: {type: "string"},
        AcikAdres: {type: "string"}
    }
};