import Vue from 'vue';
import Vuex from 'vuex';
import { type } from 'os';
import { stat } from 'fs';

Vue.use(Vuex);
let store = new Vuex.Store({
    state:{
        //admin:localStorage.getItem("admin") || {},
        admin:sessionStorage.getItem("admin") || {},
    },
    getters:{
        getAdmin(state){
            return state.admin;
        },
    },
    mutations:{
         SET_ADMIN(state,data){
            //localStorage.setItem('admin', JSON.stringify(data));
            sessionStorage.setItem('admin', JSON.stringify(data));
            state.admin=data;
        },
    },
    actions:{
        setAdmin({commit,state}, data){
            commit("SET_ADMIN", data);
        },

    },

});

export default store;