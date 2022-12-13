import { defineStore } from 'pinia'

export const useDrawerStateStore = defineStore({
    id:'drawerState',
    state: () => ({
        drawerState: true,
    }),
    getters: {
        getDrawerState: (state):boolean =>{ return state.drawerState},
    },
    actions:{
        updateDrawerState(){ 
            this.drawerState  = !this.drawerState
        }
    }
})