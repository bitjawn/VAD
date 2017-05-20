import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';    

Vue.use(Vuex);

const state = {
    userMessages: []
}

const mutations = {
    addMessage: (state, msg) => {msg.id = uuid.v4(); state.userMessages.push(msg);},   
    removeMessage: (state, id) => {
        var index = state.userMessages.find(x => x.id == id);
        if (index != -1) {
            state.userMessages.splice(index, 1);
        }
    }
}

const actions = {
    addNewMessage: ({commit}, payload) => commit('addMessage', payload),
    removeUserMessage: ({commit}, payload) => commit('removeMessage', payload)
}

const getters = {
    messages: state => state.userMessages
}   

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})