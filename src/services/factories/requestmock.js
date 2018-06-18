import StorageFactory from './storage'
import {buildRequestBody, parseJSON} from '../utils/helpers'

class RequestFactoryMock {
  constructor(config) {
    this.config = config

    this.storage = new StorageFactory()
  }

  authenticate() {

    return Promise.resolve([])
  }

  send(uri, method, body = undefined, token = undefined) {

    return Promise.resolve({
      "data": [{
        "id": "06762054-5ff8-41f4-b2cd-62ae2c786a05",
        "type": "cart_item",
        "product_id": "001b9188-3959-4269-aaf6-e4a74f8607b8",
        "name": "White Mod",
        "description": "White Mod Lamp",
        "sku": "WHMO100WHI",
        "image": {
          "mime_type": "image/png",
          "file_name": "lamp4-trans.png",
          "href": "https://s3-eu-west-1.amazonaws.com/bkt-svc-files-cmty-api-moltin-com/e8c53cb0-120d-4ea5-8941-ce74dec06038/a88767b3-6d2e-4f93-bab3-6c1f7bbde612.png"
        },
        "quantity": 2,
        "manage_stock": false,
        "unit_price": {"amount": 40000, "currency": "USD", "includes_tax": true},
        "value": {"amount": 80000, "currency": "USD", "includes_tax": true},
        "links": {"product": "https://api.moltin.com/products/001b9188-3959-4269-aaf6-e4a74f8607b8"},
        "meta": {
          "display_price": {
            "with_tax": {
              "unit": {"amount": 40000, "currency": "USD", "formatted": "$400.00"},
              "value": {"amount": 80000, "currency": "USD", "formatted": "$800.00"}
            },
            "without_tax": {
              "unit": {"amount": 40000, "currency": "USD", "formatted": "$400.00"},
              "value": {"amount": 80000, "currency": "USD", "formatted": "$800.00"}
            }
          }, "timestamps": {"created_at": "2018-06-18T20:21:07.093Z", "updated_at": "2018-06-18T20:21:09.389Z"}
        }
      }],
      "meta": {
        "display_price": {
          "with_tax": {"amount": 80000, "currency": "USD", "formatted": "$800.00"},
          "without_tax": {"amount": 80000, "currency": "USD", "formatted": "$800.00"}
        }, "timestamps": {"created_at": "2018-06-18T20:21:07.093Z", "updated_at": "2018-06-18T20:21:09.389Z"}
      }
    })
  }
}

export default RequestFactoryMock
