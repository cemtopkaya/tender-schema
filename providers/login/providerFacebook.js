var ornek = {
    "id": 198874455,
    "id_str": "198874455",
    "name": "Cem Topkaya",
    "screen_name": "cemtopkaya",
    "location": "İstanbul, Antalya",
    "profile_location": null,
    "description": "senin benim gibi.. serserinin 1i,Anasının gözü,Programlamanın hastası,tatlı sever birisi... Neydi öyle Lale Çılgınlığı ya. En sevdiğim herşey O oldu :)",
    "url": "http://t.co/CkyzOkoUWS",
    "entities": {
        "url": {
            "urls": [
                {
                    "url": "http://t.co/CkyzOkoUWS",
                    "expanded_url": "http://cemtopkaya.com",
                    "display_url": "cemtopkaya.com",
                    "indices": [
                        0,
                        22
                    ]
                }
            ]
        },
        "description": {
            "urls": []
        }
    },
    "protected": true,
    "followers_count": 65,
    "friends_count": 242,
    "listed_count": 0,
    "created_at": "Tue Oct 05 13:36:20 +0000 2010",
    "favourites_count": 27,
    "utc_offset": 10800,
    "time_zone": "Istanbul",
    "geo_enabled": true,
    "verified": false,
    "statuses_count": 612,
    "lang": "en",
    "status": {
        "created_at": "Sat Apr 18 15:15:31 +0000 2015",
        "id": 589447170413219800,
        "id_str": "589447170413219840",
        "text": "Everybdy in this country should learn how 2 program a compter.Becuse it teachs u how to think  https://t.co/VQCK5zGXaw @YouTube aracılığıyla",
        "source": "<a href=\"http://twitter.com\" rel=\"nofollow\">Twitter Web Client</a>",
        "truncated": false,
        "in_reply_to_status_id": null,
        "in_reply_to_status_id_str": null,
        "in_reply_to_user_id": null,
        "in_reply_to_user_id_str": null,
        "in_reply_to_screen_name": null,
        "geo": null,
        "coordinates": null,
        "place": null,
        "contributors": null,
        "retweet_count": 0,
        "favorite_count": 0,
        "entities": {
            "hashtags": [],
            "symbols": [],
            "user_mentions": [
                {
                    "screen_name": "YouTube",
                    "name": "YouTube",
                    "id": 10228272,
                    "id_str": "10228272",
                    "indices": [
                        119,
                        127
                    ]
                }
            ],
            "urls": [
                {
                    "url": "https://t.co/VQCK5zGXaw",
                    "expanded_url": "https://youtu.be/dU1xS07N-FA",
                    "display_url": "youtu.be/dU1xS07N-FA",
                    "indices": [
                        95,
                        118
                    ]
                }
            ]
        },
        "favorited": false,
        "retweeted": false,
        "possibly_sensitive": false,
        "lang": "en"
    },
    "contributors_enabled": false,
    "is_translator": false,
    "is_translation_enabled": false,
    "profile_background_color": "FFF04D",
    "profile_background_image_url": "http://pbs.twimg.com/profile_background_images/160701110/BJK_Gerilla_by_screwshell.jpg",
    "profile_background_image_url_https": "https://pbs.twimg.com/profile_background_images/160701110/BJK_Gerilla_by_screwshell.jpg",
    "profile_background_tile": false,
    "profile_image_url": "http://pbs.twimg.com/profile_images/2732525299/103227bdfc3c0f8afd3c34425ed882eb_normal.png",
    "profile_image_url_https": "https://pbs.twimg.com/profile_images/2732525299/103227bdfc3c0f8afd3c34425ed882eb_normal.png",
    "profile_banner_url": "https://pbs.twimg.com/profile_banners/198874455/1360154110",
    "profile_link_color": "4B74DB",
    "profile_sidebar_border_color": "FFF8AD",
    "profile_sidebar_fill_color": "F6FFD1",
    "profile_text_color": "333333",
    "profile_use_background_image": true,
    "default_profile": false,
    "default_profile_image": false,
    "following": false,
    "follow_request_sent": false,
    "notifications": false,
    "suspended": false,
    "needs_phone_verification": false
};

var facebookSchema = {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "http://jsonschema.net",
    "type": "object",
    "properties": {
        "id": {
            "type": "integer",
            default:0
        },
        "id_str": {
            
            "type": "string"
        },
        "name": {
            "type": "string",
            "default": ""
        },
        "screen_name": {
            
            "type": "string"
        },
        "location": {
            
            "type": "string"
        },
        "profile_location": {
            
            "type": "null"
        },
        "description": {
            
            "type": "string"
        },
        "url": {
            
            "type": "string"
        },
        "entities": {
            
            "type": "object",
            "properties": {
                "url": {
                    
                    "type": "object",
                    "properties": {
                        "urls": {
                            
                            "type": "array",
                            "items": {
                                
                                "type": "object",
                                "properties": {
                                    "url": {
                                        
                                        "type": "string"
                                    },
                                    "expanded_url": {
                                        
                                        "type": "string"
                                    },
                                    "display_url": {
                                        
                                        "type": "string"
                                    },
                                    "indices": {
                                        
                                        "type": "array",
                                        "items": [
                                            {
                                                
                                                "type": "integer"
                                            },
                                            {
                                                
                                                "type": "integer"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "description": {
                    
                    "type": "object",
                    "properties": {
                        "urls": {
                            
                            "type": "array",
                            "items": []
                        }
                    }
                }
            }
        },
        "protected": {
            
            "type": "boolean"
        },
        "followers_count": {
            
            "type": "integer"
        },
        "friends_count": {
            
            "type": "integer"
        },
        "listed_count": {
            
            "type": "integer"
        },
        "created_at": {
            
            "type": "string"
        },
        "favourites_count": {
            
            "type": "integer"
        },
        "utc_offset": {
            
            "type": "integer"
        },
        "time_zone": {
            
            "type": "string"
        },
        "geo_enabled": {
            
            "type": "boolean"
        },
        "verified": {
            
            "type": "boolean"
        },
        "statuses_count": {
            
            "type": "integer"
        },
        "lang": {
            
            "type": "string"
        },
        "status": {
            
            "type": "object",
            "properties": {
                "created_at": {
                    
                    "type": "string"
                },
                "id": {
                    
                    "type": "integer"
                },
                "id_str": {
                    
                    "type": "string"
                },
                "text": {
                    
                    "type": "string"
                },
                "source": {
                    
                    "type": "string"
                },
                "truncated": {
                    
                    "type": "boolean"
                },
                "in_reply_to_status_id": {
                    
                    "type": "null"
                },
                "in_reply_to_status_id_str": {
                    
                    "type": "null"
                },
                "in_reply_to_user_id": {
                    
                    "type": "null"
                },
                "in_reply_to_user_id_str": {
                    
                    "type": "null"
                },
                "in_reply_to_screen_name": {
                    
                    "type": "null"
                },
                "geo": {
                    
                    "type": "null"
                },
                "coordinates": {
                    
                    "type": "null"
                },
                "place": {
                    
                    "type": "null"
                },
                "contributors": {
                    
                    "type": "null"
                },
                "retweet_count": {
                    
                    "type": "integer"
                },
                "favorite_count": {
                    
                    "type": "integer"
                },
                "entities": {
                    
                    "type": "object",
                    "properties": {
                        "hashtags": {
                            
                            "type": "array",
                            "items": []
                        },
                        "symbols": {
                            
                            "type": "array",
                            "items": []
                        },
                        "user_mentions": {
                            
                            "type": "array",
                            "items": {
                                
                                "type": "object",
                                "properties": {
                                    "screen_name": {
                                        
                                        "type": "string"
                                    },
                                    "name": {
                                        
                                        "type": "string"
                                    },
                                    "id": {
                                        
                                        "type": "integer"
                                    },
                                    "id_str": {
                                        
                                        "type": "string"
                                    },
                                    "indices": {
                                        
                                        "type": "array",
                                        "items": [
                                            {
                                                
                                                "type": "integer"
                                            },
                                            {
                                                
                                                "type": "integer"
                                            }
                                        ]
                                    }
                                }
                            }
                        },
                        "urls": {
                            
                            "type": "array",
                            "items": {
                                
                                "type": "object",
                                "properties": {
                                    "url": {
                                        
                                        "type": "string"
                                    },
                                    "expanded_url": {
                                        
                                        "type": "string"
                                    },
                                    "display_url": {
                                        
                                        "type": "string"
                                    },
                                    "indices": {
                                        
                                        "type": "array",
                                        "items": [
                                            {
                                                
                                                "type": "integer"
                                            },
                                            {
                                                
                                                "type": "integer"
                                            }
                                        ]
                                    }
                                }
                            }
                        }
                    }
                },
                "favorited": {
                    
                    "type": "boolean"
                },
                "retweeted": {
                    
                    "type": "boolean"
                },
                "possibly_sensitive": {
                    
                    "type": "boolean"
                },
                "lang": {
                    
                    "type": "string"
                }
            }
        },
        "contributors_enabled": {
            
            "type": "boolean"
        },
        "is_translator": {
            
            "type": "boolean"
        },
        "is_translation_enabled": {
            
            "type": "boolean"
        },
        "profile_background_color": {
            
            "type": "string"
        },
        "profile_background_image_url": {
            
            "type": "string"
        },
        "profile_background_image_url_https": {
            
            "type": "string"
        },
        "profile_background_tile": {
            
            "type": "boolean"
        },
        "profile_image_url": {
            
            "type": "string"
        },
        "profile_image_url_https": {
            
            "type": "string"
        },
        "profile_banner_url": {
            
            "type": "string"
        },
        "profile_link_color": {
            
            "type": "string"
        },
        "profile_sidebar_border_color": {
            
            "type": "string"
        },
        "profile_sidebar_fill_color": {
            
            "type": "string"
        },
        "profile_text_color": {
            
            "type": "string"
        },
        "profile_use_background_image": {
            
            "type": "boolean"
        },
        "default_profile": {
            
            "type": "boolean"
        },
        "default_profile_image": {
            
            "type": "boolean"
        },
        "following": {
            
            "type": "boolean"
        },
        "follow_request_sent": {
            
            "type": "boolean"
        },
        "notifications": {
            
            "type": "boolean"
        },
        "suspended": {
            
            "type": "boolean"
        },
        "needs_phone_verification": {
            
            "type": "boolean"
        }
    },
    "required": [
        "id",
        "name"
    ]
};

module.exports = facebookSchema;