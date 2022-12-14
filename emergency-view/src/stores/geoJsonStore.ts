//Stocke les geoJson lors du démarrage

import { defineStore } from 'pinia'

export const useGeoJsonStore = defineStore({
    id:'geoJsonStore',
    state: () => ({
        geoJsonStoreFires:"src/assets/ressources-test/json-fires-test.json",
        geoJsonStoreStations:"src/assets/ressources-test/json-stations-test.json",
        geoJsonStoreTrucks:"src/assets/ressources-test/json-trucks-test.json",
    }),
    getters: {
        getGeoJsonFires: (state):string =>{ return state.geoJsonStoreFires},
        getGeoJsonStations: (state):string =>{ return state.geoJsonStoreStations},
        getGeoJsonTrucks: (state):string =>{ return state.geoJsonStoreTrucks},
    },
    actions:{
        updateGeoJsonFire(geoJson:string){ 
            this.geoJsonStoreFires  = geoJson
        },
        updateGeoJsonStations(geoJson:string){ 
            this.geoJsonStoreStations  = geoJson
        },
        updateGeoJsonTrucks(geoJson:string){ 
            this.geoJsonStoreTrucks  = geoJson
        },
    }
})