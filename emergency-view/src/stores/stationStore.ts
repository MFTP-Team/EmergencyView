import { defineStore } from 'pinia'
import type { Station } from '@/models/Station'

export const useStationStore = defineStore({
    id:'StationStore',
    state: () => ({
        station: undefined as Station | undefined
    }),
    getters: {
        getStation: (state):Station | undefined =>{ return state.station},
    },
    actions:{
        loadStation(id:Number){ 
            //TO_DO : requete axios
        }
    }
})