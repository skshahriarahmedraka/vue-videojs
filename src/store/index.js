import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    vCardList: [
      {
        "banner" : "/media/ssar/programming/",
        "videoLength" : "",
        "title" : "",
        "pageLogo" : "",
        "pageName" : "",
        "verified" : "",
        "views" : "",
        "timeAgo" : "",
        "publishDate" : ""
        
    }
    ]
                    
  },
  mutations: {
    DrawerValueChange(state) {
      state.drawer = !state.drawer
    }
  },
  actions: {
    DrawerAction(commit) {
      commit('DrawerValueChange')
    }
  },
  modules: {
  },
  getters :{
    drawervalue(state){
      return state.drawer
    }
  }
})


// state = {
//   dataSelected: [ ]
// },
// mutation = {
//   FILTERSELECTED(state, payload) {
//     state.selected = payload
//   }
// },
// action = {
//   hasSelected(context,param) {
//     context.commit('FILTERSELECTED',param)
//   }
// },