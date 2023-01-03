import { defineStore } from 'pinia'
import type { Fire } from '@/models/Fire'

export const useFireStore = defineStore({
    id:'fireStore',
    state: () => ({
        fire: undefined as Fire | undefined
    }),
    getters: {
        getFire: (state):Fire | undefined =>{ return state.fire},
    },
    actions:{
        loadFire(id:Number){ 
            //TO_DO : requete axios
        }
    }
})