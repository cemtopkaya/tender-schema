var tahtaGenelBilgileri = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "required": [
        "Adi",
        "Aciklama"
    ],
    definitions: {

    },
    "properties": {
        "Adi": {"type": "string"},
        "Aciklama": {"type": "string"}
    },
    additionalProperties: false
};

module.exports = tahtaGenelBilgileri;