var ornek = {
    "dn": "CN=Cem TOPKAYA,CN=Users,DC=fresenius,DC=com,DC=tr",
    "cn": "Cem TOPKAYA",
    "sn": "TOPKAYA",
    "description": "IT YONETICISI",
    "givenName": "Cem",
    "whenCreated": "20081118124836.0Z",
    "displayName": "Cem TOPKAYA",
    "userAccountControl": "512",
    "pwdLastSet": "130729720721698710",
    "sAMAccountName": "cem.topkaya",
    "userPrincipalName": "cem.topkaya@fresenius.com.tr",
    "mail": "cem.topkaya@fmc-ag.com",
    "pager": "2365"
};

var adSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "required": ["pager", "displayName", "mail"],
    "properties": {
        "dn": {"type": "string"},
        "cn": {"type": "string"},
        "sn": {"type": "string"},
        "description": {"type": "string"},
        "givenName": {"type": "string"},
        "whenCreated": {"type": "string"},
        "displayName": {"type": "string",default:""},
        "userAccountControl": {"type": "string"},
        "pwdLastSet": {"type": "string"},
        "sAMAccountName": {"type": "string"},
        "userPrincipalName": {"type": "string"},
        "mail": {"type": "string",default:""},
        "pager": {type: "string",default:""}
    }
};

module.exports = adSchema;