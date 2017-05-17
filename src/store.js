import Vue from 'vue';
import Vuex from 'vuex';
import uuid from 'uuid';    

Vue.use(Vuex);

const state = {
    userMessages: [
        {id:uuid.v4(), name:'Test 0', email:'test@tested.net', subject:'Header', message:'Test message zero'}
    ]
}

const mutations = {
    addMessage: (state, msg) => {msg.id = uuid.v4(); state.userMessages.push(msg);}   
}

const actions = {
    addNewMessage: (context, payload) => context.commit('addMessage', payload),
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