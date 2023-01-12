  
<script lang="ts">
import type { Station } from '@/models/Station'
import { defineComponent, ref, toRef } from 'vue'
import type {Ref} from 'vue'
import type { PropType } from 'vue'
import { useStationStore } from '@/stores/stationStore'

  export default defineComponent({
    props: {
      data: { 
        type: Object as PropType<Station>, 
        required: true
      },
    },
   setup(props){
    const station = toRef(props,"data")
    const stationStore = useStationStore()

    const isSliderDisable:Ref<boolean> = ref(true)

    function deleteStation(){
      if(isSliderDisable.value){
        stationStore.deleteStationFromDB(station.value.id)
      }
    }

    function updateStation(){
      if(isSliderDisable.value){
        isSliderDisable.value = false
      }else{ 
        stationStore.updateStation(station.value)
        isSliderDisable.value = true
      }
    }

    

    return{
      isSliderDisable,
      station,
      updateStation,
      deleteStation
    }
   },
})
</script>


<template>
  <v-expansion-panel>
    <v-expansion-panel-title expand-icon="mdi-plus" collapse-icon="mdi-minus">
      <v-icon icon="mdi-access-point"></v-icon>
      Capteur n°{{station.id}}
    </v-expansion-panel-title>
    
    <v-expansion-panel-text>
      <div>
        <v-btn style="float:right;" prepend-icon="mdi-close" variant="plain"></v-btn>
      </div>

      <v-container>
        <v-row>
          <v-col>
            Longitude :
            <v-text-field
              v-model="station.longitude"
              hide-details
              variant="outlined"
              type="number"
              step="0.000001"
              :disabled="isSliderDisable"
            ></v-text-field>
          </v-col>

          <v-col>
            Latitude :
            <v-text-field
              v-model="station.latitude"
              hide-details
              type="number"
              step="0.000001"
              variant="outlined"
              :disabled="isSliderDisable"
            ></v-text-field>
          </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn @click="updateStation">{{isSliderDisable ? "Modifier" : "Valider"}}</v-btn>
        </v-col>
        <v-col>
          <v-btn :disabled="!isSliderDisable" @click="deleteStation">Supprimer</v-btn>
        </v-col>
      </v-row>
    </v-container>
    </v-expansion-panel-text>
  </v-expansion-panel>
</template>



