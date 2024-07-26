import { createStore } from 'vuex';
import rootMutations from './mutations'
import rootActions from './actions'
import rootGetters from './getters'

import counterModule from './counter/index'


export default createStore({
    modules: {
        numbers: counterModule
    },
    state() {
        return {
            loggedIn: false
        }
    },
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});