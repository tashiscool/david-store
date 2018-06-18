import { gateway as MoltinGateway} from "./services/moltin"

let client_id = 'j6hSilXRQfxKohTndUuVrErLcSJWP15P347L6Im0M4';

if (process.env.REACT_APP_MOLTIN_CLIENT_ID) {
  client_id = process.env.REACT_APP_MOLTIN_CLIENT_ID;
}

const Moltin = MoltinGateway({
  client_id,
  application: 'react-demo-store'
});

export const GetProducts = () => Promise.resolve({
  "data": [{
    "type": "product",
    "id": "353bae23-1fb5-4bed-bf8a-07d5bd01225c",
    "name": "somecoolproduct-18",
    "slug": "anything-18",
    "sku": "anything-18",
    "manage_stock": false,
    "description": "This is just long description of the product",
    "price": [{
      "amount": 5891,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2018-06-12T20:10:47+00:00",
        "updated_at": "2018-06-12T20:10:47+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        },
        "without_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        }
      },
      "stock": {
        "level": 0,
        "availability": "out-stock"
      }
    },
    "relationships": {},
    "material": null,
    "max_watt": null,
    "bulb_qty": null,
    "bulb": null,
    "new": null,
    "on_sale": null,
    "background_colour": "#ffffff",
    "review": null,
    "finish": null
  }, {
    "type": "product",
    "id": "c5594065-7481-4481-b18e-96d0cb0958f3",
    "name": "Black Mod",
    "slug": "Black_Mod",
    "sku": "BKMD100BLK",
    "manage_stock": false,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 9000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2018-06-12T14:24:59+00:00",
        "updated_at": "2018-06-12T14:24:59+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 9000,
          "currency": "USD",
          "formatted": "$90.00"
        },
        "without_tax": {
          "amount": 9000,
          "currency": "USD",
          "formatted": "$90.00"
        }
      },
      "stock": {
        "level": 0,
        "availability": "out-stock"
      }
    },
    "relationships": {
      "categories": {
        "data": [{
          "type": "category",
          "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
        }]
      },
      "brands": {
        "data": [{
          "type": "brand",
          "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c"
        }]
      },
      "parent": {
        "data": {
          "type": "product",
          "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df"
        }
      }
    },
    "material": null,
    "max_watt": null,
    "bulb_qty": null,
    "bulb": null,
    "new": null,
    "on_sale": null,
    "background_colour": "#ffffff",
    "review": null,
    "finish": null
  }, {
    "type": "product",
    "id": "2015b11a-196a-48d8-a431-1a7482b8b041",
    "name": "somecoolproduct-24",
    "slug": "anything-24",
    "sku": "anything-24",
    "manage_stock": false,
    "description": "This is just long description of the product",
    "price": [{
      "amount": 5891,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2018-06-12T14:18:41+00:00",
        "updated_at": "2018-06-12T14:18:41+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        },
        "without_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        }
      },
      "stock": {
        "level": 0,
        "availability": "out-stock"
      }
    },
    "relationships": {},
    "material": null,
    "max_watt": null,
    "bulb_qty": null,
    "bulb": null,
    "new": null,
    "on_sale": null,
    "background_colour": "#ffffff",
    "review": null,
    "finish": null
  }, {
    "type": "product",
    "id": "ed2280fe-ee09-4e92-a5d0-bc5b5c9edc8a",
    "name": "somecoolproduct-72",
    "slug": "anything-72",
    "sku": "anything-72",
    "manage_stock": false,
    "description": "This is just long description of the product",
    "price": [{
      "amount": 5891,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2018-06-12T14:14:25+00:00",
        "updated_at": "2018-06-12T14:14:25+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        },
        "without_tax": {
          "amount": 5891,
          "currency": "USD",
          "formatted": "$58.91"
        }
      },
      "stock": {
        "level": 0,
        "availability": "out-stock"
      }
    },
    "relationships": {},
    "material": null,
    "max_watt": null,
    "bulb_qty": null,
    "bulb": null,
    "new": null,
    "on_sale": null,
    "background_colour": "#ffffff",
    "review": null,
    "finish": null
  }, {
    "type": "product",
    "id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
    "name": "Crown",
    "slug": "crown",
    "sku": "CWLP100BLK",
    "manage_stock": true,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 47500,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T14:58:42+00:00",
        "updated_at": "2018-05-30T10:49:24+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 47500,
          "currency": "USD",
          "formatted": "$475.00"
        },
        "without_tax": {
          "amount": 47500,
          "currency": "USD",
          "formatted": "$475.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "a636c261-0259-4975-ac8e-77246ec9cfe0"
        }]
      },
      "brands": {
        "data": [{
          "type": "brand",
          "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
        }
      }
    },
    "material": null,
    "max_watt": null,
    "bulb_qty": null,
    "bulb": null,
    "new": null,
    "on_sale": null,
    "background_colour": "#d9d9d9",
    "review": null,
    "finish": "test"
  }, {
    "type": "product",
    "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61",
    "name": "Multi-Vibe",
    "slug": "Multi_Vibe",
    "sku": "MUVB100MUL",
    "manage_stock": false,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 32500,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:29:02+00:00",
        "updated_at": "2018-03-13T13:44:03+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 32500,
          "currency": "USD",
          "formatted": "$325.00"
        },
        "without_tax": {
          "amount": 32500,
          "currency": "USD",
          "formatted": "$325.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "28fc136c-f059-4e99-a754-4a8aa569cf11"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "a636c261-0259-4975-ac8e-77246ec9cfe0"
        }]
      },
      "collections": {
        "data": [{
          "type": "collection",
          "id": "12912957-4159-4eea-b1c4-685876588300"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "28fc136c-f059-4e99-a754-4a8aa569cf11"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": null,
    "on_sale": null,
    "background_colour": "#f0f0f0",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "bf8a9d62-6ca9-45f6-85eb-f0d1d9ae7fdd",
    "name": "Woodsy",
    "slug": "Woodsy",
    "sku": "WDLP100BRO",
    "manage_stock": false,
    "description": "Woodsy Lamp",
    "price": [{
      "amount": 40000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:28:41+00:00",
        "updated_at": "2018-06-12T11:18:04+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 40000,
          "currency": "USD",
          "formatted": "$400.00"
        },
        "without_tax": {
          "amount": 40000,
          "currency": "USD",
          "formatted": "$400.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "8afcb63b-c6fc-486b-beab-599159bb4e37"
        }, {
          "type": "file",
          "id": "b74215d3-96db-48a6-9e1f-c3ce4517741a"
        }, {
          "type": "file",
          "id": "5f5223d7-215a-4eda-8559-068ae8462f53"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "8afcb63b-c6fc-486b-beab-599159bb4e37"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": null,
    "on_sale": null,
    "background_colour": "#f1e2cc",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "001b9188-3959-4269-aaf6-e4a74f8607b8",
    "name": "White Mod",
    "slug": "WHMO100WHI",
    "sku": "WHMO100WHI",
    "manage_stock": false,
    "description": "White Mod Lamp",
    "price": [{
      "amount": 40000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:28:21+00:00",
        "updated_at": "2018-03-13T13:43:42+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 40000,
          "currency": "USD",
          "formatted": "$400.00"
        },
        "without_tax": {
          "amount": 40000,
          "currency": "USD",
          "formatted": "$400.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
        }]
      },
      "collections": {
        "data": [{
          "type": "collection",
          "id": "12912957-4159-4eea-b1c4-685876588300"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": null,
    "on_sale": null,
    "background_colour": "#f0f0f0",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "36c21093-8996-4a9d-aacb-bf061f0769ed",
    "name": "Red Woman",
    "slug": "REWO100RED",
    "sku": "RDWO100RED",
    "manage_stock": false,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 29000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:27:50+00:00",
        "updated_at": "2018-03-13T13:45:21+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 29000,
          "currency": "USD",
          "formatted": "$290.00"
        },
        "without_tax": {
          "amount": 29000,
          "currency": "USD",
          "formatted": "$290.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "f6669358-85db-4367-9cde-1deb77acb5f4"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
        }]
      },
      "collections": {
        "data": [{
          "type": "collection",
          "id": "12912957-4159-4eea-b1c4-685876588300"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "f8cf26b3-6d38-4275-937a-624a83994702"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": null,
    "on_sale": null,
    "background_colour": "#f0e4e4",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe",
    "name": "Little Grey",
    "slug": "Little_Grey",
    "sku": "LIGR100GRY",
    "manage_stock": false,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 47500,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:27:23+00:00",
        "updated_at": "2018-03-13T13:44:09+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 47500,
          "currency": "USD",
          "formatted": "$475.00"
        },
        "without_tax": {
          "amount": 47500,
          "currency": "USD",
          "formatted": "$475.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "0975231a-e6a2-40b1-8d43-c0538fd0d3b0"
        }]
      },
      "collections": {
        "data": [{
          "type": "collection",
          "id": "12912957-4159-4eea-b1c4-685876588300"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "0975231a-e6a2-40b1-8d43-c0538fd0d3b0"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": null,
    "on_sale": null,
    "background_colour": "#dadada",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df",
    "name": "Black Mod",
    "slug": "Black_Mod",
    "sku": "BKMD100BLK",
    "manage_stock": false,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 9000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:26:58+00:00",
        "updated_at": "2018-06-12T14:24:59+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 9000,
          "currency": "USD",
          "formatted": "$90.00"
        },
        "without_tax": {
          "amount": 9000,
          "currency": "USD",
          "formatted": "$90.00"
        }
      },
      "stock": {
        "level": 501,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
        }]
      },
      "collections": {
        "data": [{
          "type": "collection",
          "id": "12912957-4159-4eea-b1c4-685876588300"
        }]
      },
      "brands": {
        "data": [{
          "type": "brand",
          "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": true,
    "on_sale": null,
    "background_colour": "#e2d1bf",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "2bc131a2-9cca-4a04-b40c-b19f773a1354",
    "name": "Jewellery",
    "slug": "Jewellery",
    "sku": "JWLP100SIL",
    "manage_stock": false,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 50000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:26:36+00:00",
        "updated_at": "2018-03-16T22:58:28+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 50000,
          "currency": "USD",
          "formatted": "$500.00"
        },
        "without_tax": {
          "amount": 50000,
          "currency": "USD",
          "formatted": "$500.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "ca9dd645-638c-4dfa-9a60-1fa544d125fd"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "ca9dd645-638c-4dfa-9a60-1fa544d125fd"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": null,
    "on_sale": null,
    "background_colour": "#e6e1e1",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "41c84c63-4d5e-4135-979f-e4b681b83dcc",
    "name": "Orb",
    "slug": "orb",
    "sku": "ORLP100WHI",
    "manage_stock": false,
    "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
    "price": [{
      "amount": 45000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:26:03+00:00",
        "updated_at": "2018-03-13T13:43:57+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 45000,
          "currency": "USD",
          "formatted": "$450.00"
        },
        "without_tax": {
          "amount": 45000,
          "currency": "USD",
          "formatted": "$450.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "61118f21-14a2-466c-a84b-c30b1f900cf9"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "61118f21-14a2-466c-a84b-c30b1f900cf9"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": null,
    "on_sale": null,
    "background_colour": "#ded7cb",
    "review": null,
    "finish": "Matt Black"
  }, {
    "type": "product",
    "id": "4cdb1d36-19ee-48b2-a7c7-f3d4350ee45a",
    "name": "Green Mod",
    "slug": "green_mod",
    "sku": "GNMD100GRN",
    "manage_stock": false,
    "description": "Description of green mod floor lamp would go here. ",
    "price": [{
      "amount": 40000,
      "currency": "USD",
      "includes_tax": true
    }],
    "status": "live",
    "commodity_type": "physical",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-19T13:25:05+00:00",
        "updated_at": "2018-05-10T08:36:43+00:00"
      },
      "display_price": {
        "with_tax": {
          "amount": 40000,
          "currency": "USD",
          "formatted": "$400.00"
        },
        "without_tax": {
          "amount": 40000,
          "currency": "USD",
          "formatted": "$400.00"
        }
      },
      "stock": {
        "level": 500,
        "availability": "in-stock"
      }
    },
    "relationships": {
      "files": {
        "data": [{
          "type": "file",
          "id": "e316f189-6e6f-4a80-88ff-57b4c89f434d"
        }]
      },
      "categories": {
        "data": [{
          "type": "category",
          "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
        }]
      },
      "main_image": {
        "data": {
          "type": "main_image",
          "id": "4468c3dc-43cb-415e-ba18-4d5c92c0d151"
        }
      }
    },
    "material": "Steel & acrylic",
    "max_watt": "40W",
    "bulb_qty": "6",
    "bulb": "E27",
    "new": true,
    "on_sale": null,
    "background_colour": "#d7f0ea",
    "review": null,
    "finish": "Matt Black"
  }],
  "included": {
    "collections": [{
      "id": "12912957-4159-4eea-b1c4-685876588300",
      "type": "collection",
      "status": "live",
      "name": "Top Picks",
      "slug": "top_picks",
      "description": "Top Picks Collection",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-26T11:18:05+00:00",
          "updated_at": "2018-05-18T15:49:03+00:00"
        }
      },
      "relationships": {
        "products": {
          "data": [{
            "type": "product",
            "id": "36c21093-8996-4a9d-aacb-bf061f0769ed"
          }, {
            "type": "product",
            "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df"
          }, {
            "type": "product",
            "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe"
          }, {
            "type": "product",
            "id": "001b9188-3959-4269-aaf6-e4a74f8607b8"
          }, {
            "type": "product",
            "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61"
          }]
        }
      }
    }],
    "parents": [{
      "type": "product",
      "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df",
      "name": "Black Mod",
      "slug": "Black_Mod",
      "sku": "BKMD100BLK",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 9000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:26:58+00:00",
          "updated_at": "2018-06-12T14:24:59+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 9000,
            "currency": "USD",
            "formatted": "$90.00"
          },
          "without_tax": {
            "amount": 9000,
            "currency": "USD",
            "formatted": "$90.00"
          }
        },
        "stock": {
          "level": 501,
          "availability": "in-stock"
        },
        "variation_matrix": []
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "brands": {
          "data": [{
            "type": "brand",
            "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c"
          }]
        },
        "children": {
          "data": [{
            "type": "product",
            "id": "c5594065-7481-4481-b18e-96d0cb0958f3"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
          }
        }
      }
    }],
    "files": [{
      "type": "file",
      "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/7cc08cbb-256e-4271-9b01-d03a9fac9f0a.png"
      },
      "file_name": "lamp7-trans.png",
      "mime_type": "image/png",
      "file_size": 165764,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:28:04.662Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
      }
    }, {
      "type": "file",
      "id": "28fc136c-f059-4e99-a754-4a8aa569cf11",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/28fc136c-f059-4e99-a754-4a8aa569cf11.png"
      },
      "file_name": "lamp6-trans.png",
      "mime_type": "image/png",
      "file_size": 362075,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-19T13:58:55.823Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/28fc136c-f059-4e99-a754-4a8aa569cf11"
      }
    }, {
      "type": "file",
      "id": "8afcb63b-c6fc-486b-beab-599159bb4e37",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/8afcb63b-c6fc-486b-beab-599159bb4e37.png"
      },
      "file_name": "lamp5-trans.png",
      "mime_type": "image/png",
      "file_size": 206936,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T14:07:13.436Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/8afcb63b-c6fc-486b-beab-599159bb4e37"
      }
    }, {
      "type": "file",
      "id": "b74215d3-96db-48a6-9e1f-c3ce4517741a",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/b74215d3-96db-48a6-9e1f-c3ce4517741a.png"
      },
      "file_name": "Screen Shot 2018-05-08 at 16.17.44.png",
      "mime_type": "image/png",
      "file_size": 161252,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1581,
          "height": 1035
        },
        "timestamps": {
          "created_at": "2018-05-08T15:25:20.04Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/b74215d3-96db-48a6-9e1f-c3ce4517741a"
      }
    }, {
      "type": "file",
      "id": "5f5223d7-215a-4eda-8559-068ae8462f53",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/5f5223d7-215a-4eda-8559-068ae8462f53.png"
      },
      "file_name": "Screen Shot 2018-06-12 at 12.17.58.png",
      "mime_type": "image/png",
      "file_size": 5534,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 291,
          "height": 240
        },
        "timestamps": {
          "created_at": "2018-06-12T11:18:03.903Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/5f5223d7-215a-4eda-8559-068ae8462f53"
      }
    }, {
      "type": "file",
      "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/a88767b3-6d2e-4f93-bab3-6c1f7bbde612.png"
      },
      "file_name": "lamp4-trans.png",
      "mime_type": "image/png",
      "file_size": 152192,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:32:31.091Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
      }
    }, {
      "type": "file",
      "id": "f6669358-85db-4367-9cde-1deb77acb5f4",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/f6669358-85db-4367-9cde-1deb77acb5f4.png"
      },
      "file_name": "lamp3-trans.png",
      "mime_type": "image/png",
      "file_size": 110041,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:30:34.871Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/f6669358-85db-4367-9cde-1deb77acb5f4"
      }
    }, {
      "type": "file",
      "id": "0975231a-e6a2-40b1-8d43-c0538fd0d3b0",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/0975231a-e6a2-40b1-8d43-c0538fd0d3b0.png"
      },
      "file_name": "lamp2-trans.png",
      "mime_type": "image/png",
      "file_size": 370532,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:29:42.019Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/0975231a-e6a2-40b1-8d43-c0538fd0d3b0"
      }
    }, {
      "type": "file",
      "id": "e490fd98-2439-46ef-88e6-20629d3bd269",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/e490fd98-2439-46ef-88e6-20629d3bd269.png"
      },
      "file_name": "lamp1-trans.png",
      "mime_type": "image/png",
      "file_size": 174605,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:33:26.942Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/e490fd98-2439-46ef-88e6-20629d3bd269"
      }
    }, {
      "type": "file",
      "id": "ca9dd645-638c-4dfa-9a60-1fa544d125fd",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/ca9dd645-638c-4dfa-9a60-1fa544d125fd.png"
      },
      "file_name": "lamp10-trans.png",
      "mime_type": "image/png",
      "file_size": 248479,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:30:13.75Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/ca9dd645-638c-4dfa-9a60-1fa544d125fd"
      }
    }, {
      "type": "file",
      "id": "61118f21-14a2-466c-a84b-c30b1f900cf9",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/61118f21-14a2-466c-a84b-c30b1f900cf9.png"
      },
      "file_name": "lamp9-trans.png",
      "mime_type": "image/png",
      "file_size": 105397,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:29:16.953Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/61118f21-14a2-466c-a84b-c30b1f900cf9"
      }
    }, {
      "type": "file",
      "id": "e316f189-6e6f-4a80-88ff-57b4c89f434d",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/e316f189-6e6f-4a80-88ff-57b4c89f434d.png"
      },
      "file_name": "lamp8-trans.png",
      "mime_type": "image/png",
      "file_size": 171225,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:32:09.472Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/e316f189-6e6f-4a80-88ff-57b4c89f434d"
      }
    }],
    "main_images": [{
      "type": "file",
      "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/7cc08cbb-256e-4271-9b01-d03a9fac9f0a.png"
      },
      "file_name": "lamp7-trans.png",
      "mime_type": "image/png",
      "file_size": 165764,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:28:04.662Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
      }
    }, {
      "type": "file",
      "id": "28fc136c-f059-4e99-a754-4a8aa569cf11",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/28fc136c-f059-4e99-a754-4a8aa569cf11.png"
      },
      "file_name": "lamp6-trans.png",
      "mime_type": "image/png",
      "file_size": 362075,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-19T13:58:55.823Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/28fc136c-f059-4e99-a754-4a8aa569cf11"
      }
    }, {
      "type": "file",
      "id": "8afcb63b-c6fc-486b-beab-599159bb4e37",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/8afcb63b-c6fc-486b-beab-599159bb4e37.png"
      },
      "file_name": "lamp5-trans.png",
      "mime_type": "image/png",
      "file_size": 206936,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T14:07:13.436Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/8afcb63b-c6fc-486b-beab-599159bb4e37"
      }
    }, {
      "type": "file",
      "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/a88767b3-6d2e-4f93-bab3-6c1f7bbde612.png"
      },
      "file_name": "lamp4-trans.png",
      "mime_type": "image/png",
      "file_size": 152192,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:32:31.091Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
      }
    }, {
      "type": "file",
      "id": "f8cf26b3-6d38-4275-937a-624a83994702",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/f8cf26b3-6d38-4275-937a-624a83994702.png"
      },
      "file_name": "f6669358-85db-4367-9cde-1deb77acb5f4.png",
      "mime_type": "image/png",
      "file_size": 110041,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2018-03-13T13:45:21.673Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/f8cf26b3-6d38-4275-937a-624a83994702"
      }
    }, {
      "type": "file",
      "id": "0975231a-e6a2-40b1-8d43-c0538fd0d3b0",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/0975231a-e6a2-40b1-8d43-c0538fd0d3b0.png"
      },
      "file_name": "lamp2-trans.png",
      "mime_type": "image/png",
      "file_size": 370532,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:29:42.019Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/0975231a-e6a2-40b1-8d43-c0538fd0d3b0"
      }
    }, {
      "type": "file",
      "id": "e490fd98-2439-46ef-88e6-20629d3bd269",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/e490fd98-2439-46ef-88e6-20629d3bd269.png"
      },
      "file_name": "lamp1-trans.png",
      "mime_type": "image/png",
      "file_size": 174605,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:33:26.942Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/e490fd98-2439-46ef-88e6-20629d3bd269"
      }
    }, {
      "type": "file",
      "id": "ca9dd645-638c-4dfa-9a60-1fa544d125fd",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/ca9dd645-638c-4dfa-9a60-1fa544d125fd.png"
      },
      "file_name": "lamp10-trans.png",
      "mime_type": "image/png",
      "file_size": 248479,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:30:13.75Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/ca9dd645-638c-4dfa-9a60-1fa544d125fd"
      }
    }, {
      "type": "file",
      "id": "61118f21-14a2-466c-a84b-c30b1f900cf9",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/61118f21-14a2-466c-a84b-c30b1f900cf9.png"
      },
      "file_name": "lamp9-trans.png",
      "mime_type": "image/png",
      "file_size": 105397,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-20T07:29:16.953Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/61118f21-14a2-466c-a84b-c30b1f900cf9"
      }
    }, {
      "type": "file",
      "id": "4468c3dc-43cb-415e-ba18-4d5c92c0d151",
      "link": {
        "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/4468c3dc-43cb-415e-ba18-4d5c92c0d151.png"
      },
      "file_name": "lamp8-trans.png",
      "mime_type": "image/png",
      "file_size": 171225,
      "public": true,
      "meta": {
        "dimensions": {
          "width": 1000,
          "height": 1000
        },
        "timestamps": {
          "created_at": "2017-06-19T13:59:49.327Z"
        }
      },
      "links": {
        "self": "https://api.moltin.com/v2/files/4468c3dc-43cb-415e-ba18-4d5c92c0d151"
      }
    }]
  },
  "links": {
    "current": "https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0&include=files, main_images, collections",
    "first": "https://api.moltin.com/v2/products?page[limit]=100&page[offset]=0&include=files, main_images, collections",
    "last": null
  },
  "meta": {
    "results": {
      "total": 14,
      "all": 14
    },
    "page": {
      "limit": 100,
      "offset": 0,
      "current": 1,
      "total": 1
    }
  }
})

export const GetProduct = ID => Moltin.Products.Get(ID);

export const GetCategories = () => Promise.resolve({
  "data": [{
    "id": "521e6029-0e0e-4704-b9a5-9777047ada04",
    "type": "category",
    "status": "live",
    "name": "Bright",
    "slug": "bright",
    "description": "Bright Category",
    "meta": {
      "timestamps": {
        "created_at": "2018-02-05T11:19:08+00:00",
        "updated_at": "2018-05-15T07:37:15+00:00"
      }
    },
    "relationships": {
      "products": {
        "data": [{
          "type": "product",
          "id": "41c84c63-4d5e-4135-979f-e4b681b83dcc"
        }, {
          "type": "product",
          "id": "bf8a9d62-6ca9-45f6-85eb-f0d1d9ae7fdd"
        }, {
          "type": "product",
          "id": "36c21093-8996-4a9d-aacb-bf061f0769ed"
        }]
      }
    },
    "background_colour": "#ded7cb",
    "background_image": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/61118f21-14a2-466c-a84b-c30b1f900cf9.png"
  }, {
    "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd",
    "type": "category",
    "status": "live",
    "name": "Modern",
    "slug": "modern",
    "description": "Modern Category",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-26T11:17:21+00:00",
        "updated_at": "2018-02-05T11:26:12+00:00"
      }
    },
    "relationships": {
      "products": {
        "data": [{
          "type": "product",
          "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df"
        }, {
          "type": "product",
          "id": "4cdb1d36-19ee-48b2-a7c7-f3d4350ee45a"
        }, {
          "type": "product",
          "id": "001b9188-3959-4269-aaf6-e4a74f8607b8"
        }]
      }
    },
    "background_colour": "#e2d1bf",
    "background_image": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/e490fd98-2439-46ef-88e6-20629d3bd269.png"
  }, {
    "id": "a636c261-0259-4975-ac8e-77246ec9cfe0",
    "type": "category",
    "status": "live",
    "name": "Unique",
    "slug": "unique",
    "description": "Unique Category",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-26T11:17:05+00:00",
        "updated_at": "2017-07-27T10:57:06+00:00"
      }
    },
    "relationships": {
      "products": {
        "data": [{
          "type": "product",
          "id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981"
        }, {
          "type": "product",
          "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61"
        }]
      }
    },
    "background_colour": "#d9d9d9",
    "background_image": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/7cc08cbb-256e-4271-9b01-d03a9fac9f0a.png"
  }],
  "included": {
    "products": [{
      "type": "product",
      "id": "001b9188-3959-4269-aaf6-e4a74f8607b8",
      "name": "White Mod",
      "slug": "WHMO100WHI",
      "sku": "WHMO100WHI",
      "manage_stock": false,
      "description": "White Mod Lamp",
      "price": [{
        "amount": 40000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:28:21+00:00",
          "updated_at": "2018-03-13T13:43:42+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          },
          "without_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
          }
        }
      }
    }, {
      "type": "product",
      "id": "36c21093-8996-4a9d-aacb-bf061f0769ed",
      "name": "Red Woman",
      "slug": "REWO100RED",
      "sku": "RDWO100RED",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 29000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:27:50+00:00",
          "updated_at": "2018-03-13T13:45:21+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 29000,
            "currency": "USD",
            "formatted": "$290.00"
          },
          "without_tax": {
            "amount": 29000,
            "currency": "USD",
            "formatted": "$290.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "f6669358-85db-4367-9cde-1deb77acb5f4"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "f8cf26b3-6d38-4275-937a-624a83994702"
          }
        }
      }
    }, {
      "type": "product",
      "id": "41c84c63-4d5e-4135-979f-e4b681b83dcc",
      "name": "Orb",
      "slug": "orb",
      "sku": "ORLP100WHI",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 45000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:26:03+00:00",
          "updated_at": "2018-03-13T13:43:57+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 45000,
            "currency": "USD",
            "formatted": "$450.00"
          },
          "without_tax": {
            "amount": 45000,
            "currency": "USD",
            "formatted": "$450.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "61118f21-14a2-466c-a84b-c30b1f900cf9"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "61118f21-14a2-466c-a84b-c30b1f900cf9"
          }
        }
      }
    }, {
      "type": "product",
      "id": "4cdb1d36-19ee-48b2-a7c7-f3d4350ee45a",
      "name": "Green Mod",
      "slug": "green_mod",
      "sku": "GNMD100GRN",
      "manage_stock": false,
      "description": "Description of green mod floor lamp would go here. ",
      "price": [{
        "amount": 40000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:25:05+00:00",
          "updated_at": "2018-05-10T08:36:43+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          },
          "without_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "e316f189-6e6f-4a80-88ff-57b4c89f434d"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "4468c3dc-43cb-415e-ba18-4d5c92c0d151"
          }
        }
      }
    }, {
      "type": "product",
      "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df",
      "name": "Black Mod",
      "slug": "Black_Mod",
      "sku": "BKMD100BLK",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 9000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:26:58+00:00",
          "updated_at": "2018-06-12T14:24:59+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 9000,
            "currency": "USD",
            "formatted": "$90.00"
          },
          "without_tax": {
            "amount": 9000,
            "currency": "USD",
            "formatted": "$90.00"
          }
        },
        "stock": {
          "level": 501,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "brands": {
          "data": [{
            "type": "brand",
            "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
          }
        }
      }
    }, {
      "type": "product",
      "id": "9eda5ba0-4f4a-4074-8547-ccb05d1b5981",
      "name": "Crown",
      "slug": "crown",
      "sku": "CWLP100BLK",
      "manage_stock": true,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 47500,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T14:58:42+00:00",
          "updated_at": "2018-05-30T10:49:24+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          },
          "without_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "a636c261-0259-4975-ac8e-77246ec9cfe0"
          }]
        },
        "brands": {
          "data": [{
            "type": "brand",
            "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "7cc08cbb-256e-4271-9b01-d03a9fac9f0a"
          }
        }
      }
    }, {
      "type": "product",
      "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61",
      "name": "Multi-Vibe",
      "slug": "Multi_Vibe",
      "sku": "MUVB100MUL",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 32500,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:29:02+00:00",
          "updated_at": "2018-03-13T13:44:03+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 32500,
            "currency": "USD",
            "formatted": "$325.00"
          },
          "without_tax": {
            "amount": 32500,
            "currency": "USD",
            "formatted": "$325.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "28fc136c-f059-4e99-a754-4a8aa569cf11"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "a636c261-0259-4975-ac8e-77246ec9cfe0"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "28fc136c-f059-4e99-a754-4a8aa569cf11"
          }
        }
      }
    }, {
      "type": "product",
      "id": "bf8a9d62-6ca9-45f6-85eb-f0d1d9ae7fdd",
      "name": "Woodsy",
      "slug": "Woodsy",
      "sku": "WDLP100BRO",
      "manage_stock": false,
      "description": "Woodsy Lamp",
      "price": [{
        "amount": 40000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:28:41+00:00",
          "updated_at": "2018-06-12T11:18:04+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          },
          "without_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "8afcb63b-c6fc-486b-beab-599159bb4e37"
          }, {
            "type": "file",
            "id": "b74215d3-96db-48a6-9e1f-c3ce4517741a"
          }, {
            "type": "file",
            "id": "5f5223d7-215a-4eda-8559-068ae8462f53"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "8afcb63b-c6fc-486b-beab-599159bb4e37"
          }
        }
      }
    }]
  },
  "links": {
    "current": "https://api.moltin.com/v2/categories?page[limit]=100&page[offset]=0&include=products",
    "first": "https://api.moltin.com/v2/categories?page[limit]=100&page[offset]=0&include=products",
    "last": null
  },
  "meta": {
    "results": {
      "total": 3,
      "all": 3
    },
    "page": {
      "limit": 100,
      "offset": 0,
      "current": 1,
      "total": 1
    }
  }
})

export const GetCategory = ID => Moltin.Categories.Get(ID);

export const GetCollections = () => Promise.resolve({
  "data": [{
    "id": "12912957-4159-4eea-b1c4-685876588300",
    "type": "collection",
    "status": "live",
    "name": "Top Picks",
    "slug": "top_picks",
    "description": "Top Picks Collection",
    "meta": {
      "timestamps": {
        "created_at": "2017-06-26T11:18:05+00:00",
        "updated_at": "2018-05-18T15:49:03+00:00"
      }
    },
    "relationships": {
      "products": {
        "data": [{
          "type": "product",
          "id": "36c21093-8996-4a9d-aacb-bf061f0769ed"
        }, {
          "type": "product",
          "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df"
        }, {
          "type": "product",
          "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe"
        }, {
          "type": "product",
          "id": "001b9188-3959-4269-aaf6-e4a74f8607b8"
        }, {
          "type": "product",
          "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61"
        }]
      }
    }
  }],
  "included": {
    "products": [{
      "type": "product",
      "id": "001b9188-3959-4269-aaf6-e4a74f8607b8",
      "name": "White Mod",
      "slug": "WHMO100WHI",
      "sku": "WHMO100WHI",
      "manage_stock": false,
      "description": "White Mod Lamp",
      "price": [{
        "amount": 40000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:28:21+00:00",
          "updated_at": "2018-03-13T13:43:42+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          },
          "without_tax": {
            "amount": 40000,
            "currency": "USD",
            "formatted": "$400.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "a88767b3-6d2e-4f93-bab3-6c1f7bbde612"
          }
        }
      }
    }, {
      "type": "product",
      "id": "36c21093-8996-4a9d-aacb-bf061f0769ed",
      "name": "Red Woman",
      "slug": "REWO100RED",
      "sku": "RDWO100RED",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 29000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:27:50+00:00",
          "updated_at": "2018-03-13T13:45:21+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 29000,
            "currency": "USD",
            "formatted": "$290.00"
          },
          "without_tax": {
            "amount": 29000,
            "currency": "USD",
            "formatted": "$290.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "f6669358-85db-4367-9cde-1deb77acb5f4"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "521e6029-0e0e-4704-b9a5-9777047ada04"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "f8cf26b3-6d38-4275-937a-624a83994702"
          }
        }
      }
    }, {
      "type": "product",
      "id": "61abf56a-194e-4e13-a717-92d2f0c9d4df",
      "name": "Black Mod",
      "slug": "Black_Mod",
      "sku": "BKMD100BLK",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 9000,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:26:58+00:00",
          "updated_at": "2018-06-12T14:24:59+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 9000,
            "currency": "USD",
            "formatted": "$90.00"
          },
          "without_tax": {
            "amount": 9000,
            "currency": "USD",
            "formatted": "$90.00"
          }
        },
        "stock": {
          "level": 501,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "b8fac5c9-8605-48d0-bcf7-e6ada1a8c6bd"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "brands": {
          "data": [{
            "type": "brand",
            "id": "c46e07d2-23ef-4b3b-8437-7bcdbf38bc4c"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "e490fd98-2439-46ef-88e6-20629d3bd269"
          }
        }
      }
    }, {
      "type": "product",
      "id": "a6fa6cbe-a718-45ab-ae1e-883c5a72ee61",
      "name": "Multi-Vibe",
      "slug": "Multi_Vibe",
      "sku": "MUVB100MUL",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 32500,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:29:02+00:00",
          "updated_at": "2018-03-13T13:44:03+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 32500,
            "currency": "USD",
            "formatted": "$325.00"
          },
          "without_tax": {
            "amount": 32500,
            "currency": "USD",
            "formatted": "$325.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "28fc136c-f059-4e99-a754-4a8aa569cf11"
          }]
        },
        "categories": {
          "data": [{
            "type": "category",
            "id": "a636c261-0259-4975-ac8e-77246ec9cfe0"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "28fc136c-f059-4e99-a754-4a8aa569cf11"
          }
        }
      }
    }, {
      "type": "product",
      "id": "d77dcc0c-1e74-4e06-aff9-7f666dedafbe",
      "name": "Little Grey",
      "slug": "Little_Grey",
      "sku": "LIGR100GRY",
      "manage_stock": false,
      "description": "Abstract, sculptural, refined and edgy with a modern twist. Its symmetrical, spoked structure generates a clever geometric presence, which works well in a contemporary environment.",
      "price": [{
        "amount": 47500,
        "currency": "USD",
        "includes_tax": true
      }],
      "status": "live",
      "commodity_type": "physical",
      "meta": {
        "timestamps": {
          "created_at": "2017-06-19T13:27:23+00:00",
          "updated_at": "2018-03-13T13:44:09+00:00"
        },
        "display_price": {
          "with_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          },
          "without_tax": {
            "amount": 47500,
            "currency": "USD",
            "formatted": "$475.00"
          }
        },
        "stock": {
          "level": 500,
          "availability": "in-stock"
        }
      },
      "relationships": {
        "files": {
          "data": [{
            "type": "file",
            "id": "0975231a-e6a2-40b1-8d43-c0538fd0d3b0"
          }]
        },
        "collections": {
          "data": [{
            "type": "collection",
            "id": "12912957-4159-4eea-b1c4-685876588300"
          }]
        },
        "main_image": {
          "data": {
            "type": "main_image",
            "id": "0975231a-e6a2-40b1-8d43-c0538fd0d3b0"
          }
        }
      }
    }]
  },
  "links": {
    "current": "https://api.moltin.com/v2/collections?page[limit]=100&page[offset]=0&include=products",
    "first": "https://api.moltin.com/v2/collections?page[limit]=100&page[offset]=0&include=products",
    "last": null
  },
  "meta": {
    "results": {
      "total": 1,
      "all": 1
    },
    "page": {
      "limit": 100,
      "offset": 0,
      "current": 1,
      "total": 1
    }
  }
});

export const GetBrands = () => Moltin.Brands.All();

export const GetFile = ID => Moltin.Files.Get(ID);

export const AddCart = (id, quantity) => Moltin.Cart.AddProduct(id, quantity);

export const UpdateCartPlus = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity + 1);

export const UpdateCartMinus = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity - 1);

export const UpdateCart = (ID, quantity) =>
  Moltin.Cart.UpdateItemQuantity(ID, quantity);

export const GetCartItems = () => Promise.resolve({
  "data": [],
  "meta": {
    "display_price": {
      "with_tax": {
        "amount": 0,
        "currency": "",
        "formatted": "0"
      },
      "without_tax": {
        "amount": 0,
        "currency": "",
        "formatted": "0"
      }
    },
    "timestamps": {
      "created_at": "0001-01-01T00:00:00Z",
      "updated_at": "0001-01-01T00:00:00Z"
    }
  }
});

export const Checkout = data => Moltin.Cart.Checkout(data);

export const GetOrder = ID => Moltin.Orders.Get(ID);

export const OrderPay = (ID, data) => Moltin.Orders.Payment(ID, data);

export const DeleteCart = () => Moltin.Cart.Delete();
