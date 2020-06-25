import Vuex from 'vuex';
import Vue from 'vue'
import users from './modules/users';


//Load vue
Vue.use(Vuex);

//create a store
export default new Vuex.Store({
    modules: {
        users
    }
})