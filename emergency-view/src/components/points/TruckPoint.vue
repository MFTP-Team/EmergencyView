<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import truckIcon from '@/assets/icone/fire-truck.png'
import { useGeoJsonStore } from '@/stores/geoJsonStore'
import { useDrawerStateStore } from '@/stores/drawerState'
import { useTruckStore } from '@/stores/truckStore'
import { pointType } from '@/models/enums/pointType'

import PointSelection from './action/PointSelection.vue'

export default defineComponent({

  setup() {
    const projection = ref('EPSG:4326')

    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const geoJsonStore = useGeoJsonStore()
    const trucksLocalisation:string = geoJsonStore.getGeoJsonTrucks

    const drawerStore = useDrawerStateStore()
    const truckStore = useTruckStore()

    const actionOnSelect = (event:any) => {

      const selectedId = event.selected[0].values_.id

      drawerStore.updateDrawerDataType(pointType.TRUCK)

      truckStore.loadTruck(selectedId)

      drawerStore.updateDrawerState()

      
      console.log()

      console.log()

    }

    const filterSelection = (feature:any) =>{
      return feature.values_.type == "TRUCK";
    }

    return {
      projection,
      geoJson,
      trucksLocalisation,
      truckIcon,
      actionOnSelect,
      filterSelection
    }
  },
})

</script>

<template>

  <PointSelection :actionOnSelect="actionOnSelect" :filterSelection="filterSelection" :markerIcon="truckIcon"/>

  <ol-vector-layer>
    <ol-source-vector :url="trucksLocalisation" :format="geoJson" :projection="projection">
    </ol-source-vector>
    <ol-style>
      <ol-style-icon :src="truckIcon" :scale="0.1"></ol-style-icon>
    </ol-style>
    </ol-vector-layer>
</template>