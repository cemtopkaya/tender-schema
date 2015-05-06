module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "EKAP KÝK Ihale Bilgileri",
    type: "object",
    required: ["EkapId","raw"],
    additionalProperties: false,
    properties: {
        EkapId: {type: "number",default:0},
        WebAdresi: {type: "string"},
        SartnameAdresi: {type: "string"},
        raw: {type: "string",default:""}
    }
};