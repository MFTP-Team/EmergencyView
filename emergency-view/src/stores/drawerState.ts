import type { pointType } from '@/models/enums/pointType'
import { defineStore } from 'pinia'

export const useDrawerStateStore = defineStore({
    id:'drawerState',
    state: () => ({
        drawerState: false,
        drawerDataType: undefined as pointType | undefined
    }),
    getters: {
        getDrawerState: (state):boolean =>{ return state.drawerState},
        getDrawerDataType: (state):pointType | undefined =>{return state.drawerDataType}
    },
    actions:{
        updateDrawerState(){ 
            this.drawerState  = !this.drawerState
        },
        updateDrawerDataType(dataType:pointType){
            this.drawerDataType = dataType
        }
    }
})