  
<script lang="ts">
import { defineComponent } from 'vue'
import { ref } from 'vue'
import { useTruckStore } from '@/stores/truckStore'

  export default defineComponent({
   setup(){
    const show = ref(false)

    const truckStore = useTruckStore()
    const truckData = truckStore.getTruck

    return{
      show
    }
   },
})
</script>


<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Camion_Citerne_Feux_For%C3%AAts_2000.jpg"
      height="200px"
      cover
    ></v-img>

    <v-card-title>
      Truck
    </v-card-title>

    <v-card-subtitle>
        PINON PINPON PINPON
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
        color="orange-lighten-2"
        variant="text"
      >
        Explore
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
        :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
        @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          PINPON PINPON PINPON PIN PON PIN PON 
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>



