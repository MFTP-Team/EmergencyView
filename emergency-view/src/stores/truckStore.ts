import { defineStore } from 'pinia'
import type { Truck } from '@/models/Truck'

export const useTruckStore = defineStore({
    id:'TruckStore',
    state: () => ({
        truck: undefined as Truck | undefined
    }),
    getters: {
        getTruck: (state):Truck | undefined =>{ return state.truck},
    },
    actions:{
        loadTruck(id:Number){ 
            //TO_DO : requete axios
        }
    }
})