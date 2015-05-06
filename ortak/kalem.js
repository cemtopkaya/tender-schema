module.exports = {
    name: "İhale",
    description: "İhaleye ait herşey",
    type: "object",
    definitions: {
    },
    required: [],
    additionalProperties: false,
    properties: {
        Id: {type: "integer", default: 0},
        SiraNo: {type: "string"},
        MalzemeCinsi: {type: "string"},
        Miktar: {type: "string"},
        Birim: {type: "string"},
        Aciklama: {type: "string"},
        OnayDurum_Id: {type: "integer", default: 1}
    }
};