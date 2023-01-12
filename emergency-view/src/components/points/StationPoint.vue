<script lang="ts">
import {inject, ref} from 'vue'
import { defineComponent } from 'vue'

import stationIcon from '@/assets/icone/fire-station.png'
import { useGeoJsonStore } from '@/stores/geoJsonStore'
import { useStationStore } from '@/stores/stationStore'

export default defineComponent({

  setup() {
    const center = ref([4.869733536816722,45.783726561289825])
    const projection = ref('EPSG:4326')
    const zoom = ref(16)
    const rotation = ref(0)

    const radius = ref(180)

    const format = inject('ol-format');
    const geoJson = new format.GeoJSON();

    const strategy = inject('ol-loadingstrategy');
    const bbox = strategy.bbox;

    const geoJsonStore = useGeoJsonStore()
    const stationLocalisation:string = geoJsonStore.getGeoJsonPointStations
    const stationStore = useStationStore()


    const actionOnSelect = (event:any) => {
      if(event.selected.length !== 0 ){
        const selectedId = event.selected[0].values_.id
        stationStore.addStation(selectedId)
      }

    }

    const filterSelection = (feature:any) =>{
      return feature.values_.type == "STATION";
    }

    return {
      center,
      projection,
      zoom,
      rotation,
      geoJson,
      stationLocalisation,
      stationIcon,
      actionOnSelect,
      filterSelection,
      bbox,
      radius
    }
  },
})

</script>

<template>
  <PointSelection :actionOnSelect="actionOnSelect" :filterSelection="filterSelection" :markerIcon="stationIcon"/>
  <ol-vector-layer>
    <ol-source-vector :url="stationLocalisation" :format="geoJson" :strategy="bbox" :projection="projection">
    </ol-source-vector>
    <ol-style>
      <ol-style-icon :src="stationIcon" :scale="0.05"></ol-style-icon>
    </ol-style>
  </ol-vector-layer>
</template>