import { createStore } from 'vuex'
import axios from 'axios'


export default createStore({
  state: {
    products: [],
    shoppingCart: [],
    customerDetails: {}
  },
  mutations: {
    getProducts(state, products) {
      state.products = products
    },
    addToCart(state, product) {
      state.shoppingCart.push(product)
    },
    deleteItem(state, id) {
      var tempArray = []
      var duplicate = []
      //Otetaan duplikaatti talteen omaan arrayhyn
      duplicate = state.shoppingCart.filter((item) => item.id == id)
      if(duplicate.length >= 1) {
        //Filtteröidään väliaikaisesta arraysta kaikki annetun id:n tuotteet
        tempArray = state.shoppingCart.filter((item) => item.id !==id)
        //Poistetaan duplikaatti arraysta viimeisin object pois
        duplicate.pop()
        //Yhdistetään arrayt
        state.shoppingCart = tempArray.concat(duplicate)
      } else {
        state.shoppingCart = state.shoppingCart.filter((item) => item.id !==id)
      }
      
      
    },
    submitContact(state, customerDetails) {
      state.customerDetails = customerDetails
    },
    clearData(state) {
      //Tyhjennetään ostoskori onnistuneen oston päätteeksi
      state.shoppingCart = []
    }
  },
  actions: {
    getProducts({ commit }) {
      axios('https://fakestoreapi.com/products?limit=5').then(response => {
        commit('getProducts', response.data)
      })
    },
    addToCart({ commit }, id) {
      axios(`https://fakestoreapi.com/products/${id}`).then(response => {
        commit('addToCart', response.data)
      })
    },
    deleteItem({ commit }, id) {
      if(confirm('Are you sure?')) {
        commit('deleteItem', id)
      }
      else {
        return
      }
    },
    submitContact({ commit }, form) {
      var customerDetails = form
      commit('submitContact', customerDetails)
    },
    clearData({ commit }) {
      commit('clearData')
    }
  },
  getters: {
      //Lasketaan koko ostoskorin arvo
      cartTotal(state) {
        var shoppingCart = state.shoppingCart
        var shoppingCartTotal = shoppingCart.reduce(function(prev, cur) {
          return prev + cur.price;
        }, 0);
        return shoppingCartTotal
    },
      //Käännetään ostoskori stringiksi, joka voidaan lisätä ostovahvistukseen
      shoppingCartToString(state) {
        var shoppingCart = state.shoppingCart
        var cartString =  ""
        shoppingCart.forEach(function(item) {
         cartString += item.title + " " + item.price + ' €<br>'
      })
        return cartString
      }
  },
  modules: {
  }
})
