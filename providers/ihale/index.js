module.exports = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    name: "İhale Sağlayıcıları",
    description: "İhale Sağlayıcılar",

    type: "object",

    definitions: {
        SaglikBank: require('./saglikbank'),
        Ekap: require('./ekap')
    },

    properties: {
        SaglikBank: {$ref: "#/definitions/SaglikBank"},
        Ekap: {$ref: "#/definitions/Ekap"}
    }
};