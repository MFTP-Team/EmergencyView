//Stocke les geoJson lors du démarrage
import { defineStore } from 'pinia'

export const useGeoJsonStore = defineStore({
    id:'geoJsonStore',
    state: () => ({
        geoJsonStorePolygonFire:import.meta.env.VITE_BASE_URL_API+'/api/fire/geo/polygon',
        geoJsonStorePointFire:import.meta.env.VITE_BASE_URL_API+'/api/fire/geo/point',
        geoJsonStorePointStation:import.meta.env.VITE_BASE_URL_API+'/api/resource/station/geo/point',
        geoJsonStoreTrucks:import.meta.env.VITE_BASE_URL_API+'/api/resource/truck/geo/point',
    }),
    getters: {
        getGeoJsonPolygonFires: (state):string =>{ return state.geoJsonStorePolygonFire},
        getGeoJsonPointFires: (state):string =>{ return state.geoJsonStorePointFire},
        getGeoJsonPointStations: (state):string =>{ return state.geoJsonStorePointStation},
        getGeoJsonTrucks: (state):string =>{ return state.geoJsonStoreTrucks},
    },
    actions:{
    }
})