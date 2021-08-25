import Vue from 'vue'
import Vuex from 'vuex'
import datastore from './datastore'
import products from './datastore/products'
Vue.use(Vuex)

const store = new Vuex.Store({

    modules: {
      datastore,
      products
    },

    state: {},
    getters: {},
    mutations: {},
    actions: {}
})

export default store