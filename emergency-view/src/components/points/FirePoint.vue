<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import fireIcon from '@/assets/icone/fire.png'
import { useGeoJsonStore } from '@/stores/geoJsonStore'
import { useDrawerStateStore } from '@/stores/drawerState'

export default defineComponent({

  setup() {
    const center = ref([4.869733536816722,45.783726561289825])
    const projection = ref('EPSG:4326')
    const zoom = ref(16)
    const rotation = ref(0)

    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const geoJsonStore = useGeoJsonStore()

    const fireLocalisation:string = geoJsonStore.getGeoJsonFires

    const store = useDrawerStateStore()

    const actionOnSelect = (event:any) => {
      store.updateDrawerState()
    }

    const filterSelection = (feature:any) =>{
      console.log(feature.values_.type)
      return feature.values_.type == "FIRE";
    }
    

    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      fireLocalisation,
      fireIcon,
      actionOnSelect,
      filterSelection
    }
  },
})

</script>

<template>
  <PointSelection :actionOnSelect="actionOnSelect" :filterSelection="filterSelection" :markerIcon="fireIcon"/>

  <ol-vector-layer>
    <ol-source-vector :url="fireLocalisation" :format="geoJson" :projection="projection">
    </ol-source-vector>
    <ol-style>
      <ol-style-icon :src="fireIcon" :scale="0.1"></ol-style-icon>
    </ol-style>
  </ol-vector-layer>
</template>