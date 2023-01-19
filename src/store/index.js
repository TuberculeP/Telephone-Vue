import { createStore } from 'vuex'

export default createStore({
  state: {
    inputValue: "",
    contactList: [
      {name: "Satan", number: "0666"},
      {name: "Messagerie Free", number: "666"},
    ],
    historyCalls: [
    ]
  },
  getters: {
  },
  mutations: {
    insertContact(state, contact){
      state.contactList.unshift(contact)
    },
    addHistory(state, history){
      state.historyCalls.unshift(history)
    }
  },
  actions: {
  },
  modules: {
  }
})
