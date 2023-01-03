  
<script lang="ts">
import { defineComponent } from 'vue'
import { useDrawerStateStore } from '../stores/drawerState'
import { ref } from 'vue'
import { pointType } from '@/models/enums/pointType'

import FireCard from './card/FireCard.vue'
import StationCard from './card/StationCard.vue'
import TruckCard from './card/TruckCard.vue'


import { storeToRefs } from 'pinia'

  export default defineComponent({
   setup(){

    const store = useDrawerStateStore()
    const refStore = storeToRefs(store)
    
    const drawerState = ref(refStore.drawerState)
    const drawerDataType = ref(refStore.drawerDataType)

    return{
        drawerState,
        drawerDataType,
        pointType
    }
   },
})
</script>


<template>
    <v-navigation-drawer v-model="drawerState">
        <StationCard v-show='drawerDataType == pointType.STATION'/>
        <FireCard v-show='drawerDataType == pointType.FIRE'/>
        <TruckCard v-show='drawerDataType == pointType.TRUCK'/>
    </v-navigation-drawer>
</template>


