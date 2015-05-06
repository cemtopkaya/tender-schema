var ornek = {
    "eposta": "cem.topkaya@fresenius.com.tr",
    "hata": 2
};

var schema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "required": ["eposta"],
    "properties": {
        "eposta": { "type": "string" },
        "hata": { "type": "string" }
    }
};

module.exports = schema;