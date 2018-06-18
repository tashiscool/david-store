import 'fetch-everywhere'
import 'es6-promise'

import ConfigIface from './configIFace'
import RequestFactoryMock from './factories/requestmock'
import StorageFactory from './factories/storage'
import ProductsEndpoint from './endpoints/products'
import CurrenciesEndpoint from './endpoints/currencies'
import BrandsEndpoint from './endpoints/brands'
import CartEndpoint from './endpoints/cart'
import CategoriesEndpoint from './endpoints/categories'
import CollectionsEndpoint from './endpoints/collections'
import OrdersEndpoint from './endpoints/orders'
import GatewaysEndpoint from './endpoints/gateways'
import CustomersEndpoint from './endpoints/customers'
import InventoriesEndpoint from './endpoints/inventories'
import FlowsEndpoint from './endpoints/flows'
import FieldsEndpoint from './endpoints/fields'
import FilesEndpoint from './endpoints/files'
import AddressesEndpoint from './endpoints/addresses'
import TransactionsEndpoint from './endpoints/transactions'

import { cartIdentifier } from './utils/helpers'

export default class Moltin {
  constructor(config) {
    this.config = config
    this.cartId = cartIdentifier()

    this.request = new RequestFactoryMock(config)
    this.storage = new StorageFactory()

    this.Products = new ProductsEndpoint(config)
    this.Currencies = new CurrenciesEndpoint(config)
    this.Brands = new BrandsEndpoint(config)
    this.Categories = new CategoriesEndpoint(config)
    this.Collections = new CollectionsEndpoint(config)
    this.Orders = new OrdersEndpoint(config)
    this.Gateways = new GatewaysEndpoint(config)
    this.Customers = new CustomersEndpoint(config)
    this.Inventories = new InventoriesEndpoint(config)
    this.Files = new FilesEndpoint(config)
    this.Flows = new FlowsEndpoint(config)
    this.Fields = new FieldsEndpoint(config)
    this.Addresses = new AddressesEndpoint(config)
    this.Transactions = new TransactionsEndpoint(config)
  }

  // Expose `Cart` class on Moltin class
  Cart(id = this.cartId) {
    console.log(id)
    console.log(this.request)
    console.log(new CartEndpoint(this.request, id))
    return new CartEndpoint(this.request, id)
  }

  // Expose `authenticate` function on the Moltin class
  Authenticate() {
    return this.request.authenticate()
  }
}

// Export a function to instantiate the Moltin class
const gateway = config => new Moltin(new ConfigIface(config))

export { gateway }
