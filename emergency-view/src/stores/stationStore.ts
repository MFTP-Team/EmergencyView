import { defineStore } from 'pinia'
import type { Station } from '@/models/Station'
import axios from 'axios'

export const useStationStore = defineStore({
    id:'stationStore',
    state: () => ({
        stationArray: [] as Station[]
    }),
    getters: {
        getAllstation: (state):Station[] =>{ return state.stationArray},
    },
    actions:{
        async addStation(id:number){ 
            try {
                const response = await axios.get(import.meta.env.VITE_BASE_URL_API + '/api/station/get/'+id)
                this.stationArray.push(response.data)
            } catch (error) {
                console.log(error)
            }
        },
        deleteStationFromArray(id:number){
           const indexToRemove:any = this.stationArray?.find(item =>{ return item.id === id})
           this.stationArray?.splice(indexToRemove,indexToRemove)
        },
        async deleteStationFromDB(id:number){
            try {
                const response = await axios.delete(import.meta.env.VITE_BASE_URL_API + '/api/station/delete/'+id)
                this.deleteStationFromArray(id)
            } catch (error) {
                console.log(error)
            }
        },
        async updateStation(station:Station){
            try {
                const indexToUpdate:any = this.stationArray?.find(item =>{ return item.id === station.id})
                const response = await axios.put(
                    import.meta.env.VITE_BASE_URL_API + '/api/station/edit',
                    { 
                        id:station.id,
                        latitude:station.latitude,
                        longitude:station.longitude,
                    }
                )

                //On verifie que l'objet retourné a le meme id que l'objet supprimé et qu'il est présent dans notre tableau locale
                if(response.status === 200){
                    this.stationArray[indexToUpdate] = station
                }
            } catch (error) {
                console.log(error)
            }
        }, 
        async addStationToBDD(latitude:number,longitude:number,radius:number){
            try {
                const response = await axios.post(
                    import.meta.env.VITE_BASE_URL_API + '/api/station/add',
                    { 
                        latitude:latitude,
                        longitude:longitude,
                    })
            } catch (error) {
                console.log(error)
            }
        }
    }
})