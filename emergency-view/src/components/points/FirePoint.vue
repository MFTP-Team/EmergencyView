<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import fireIcon from '@/assets/icone/fire.png'
import { useGeoJsonStore } from '@/stores/geoJsonStore'
import { useDrawerStateStore } from '@/stores/drawerState'
import { useFireStore } from '@/stores/fireStore'

import { pointType } from '@/models/enums/pointType'

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

    const drawerStore = useDrawerStateStore()
    const fireStore = useFireStore()

    const actionOnSelect = (event:any) => {  
      const selectedId = event.selected[0].values_.id
      drawerStore.updateDrawerDataType(pointType.FIRE)
      fireStore.loadFire(selectedId)
      drawerStore.updateDrawerState()
    }

    const filterSelection = (feature:any) =>{
      return feature.values_.type == "FIRE";

      console.log()
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