<script lang="ts">
import {ref,inject} from 'vue'
import { defineComponent } from 'vue'
import { useGeoJsonStore} from '../stores/geoJsonStore'

import stationIcon from '@/assets/icone/fire-station.png'
import fireIcon from '@/assets/icone/fire.png'
import truckIcon from '@/assets/icone/fire-truck.png'

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
    const truckLocalisation:string = geoJsonStore.getGeoJsonTrucks
    const stationLocalisation:string = geoJsonStore.getGeoJsonStations

    return {
      center,
      projection,
      zoom,
      rotation,
      fireLocalisation,
      truckLocalisation,
      stationLocalisation,
      geoJson,
      stationIcon,
      truckIcon,
      fireIcon
    }
  },
})

</script>

<template>
  <div>
    <ol-map :loadTilesWhileAnimating="true" :loadTilesWhileInteracting="true" style="height:100vh; widght:100vw">

        <ol-view ref="view" :center="center" :rotation="rotation" :zoom="zoom" 
        :projection="projection" />

        <ol-tile-layer>
            <ol-source-osm />
        </ol-tile-layer>  

        <ol-vector-layer>
          <ol-source-vector :url="stationLocalisation" :format="geoJson" :projection="projection">
          </ol-source-vector>
            <ol-style>
              <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
              <ol-style-icon :src="stationIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
        </ol-vector-layer>

        <ol-vector-layer>
          <ol-source-vector :url="fireLocalisation" :format="geoJson" :projection="projection">
          </ol-source-vector>
            <ol-style>
              <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
              <ol-style-icon :src="fireIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
        </ol-vector-layer>

        <ol-vector-layer>
          <ol-source-vector :url="truckLocalisation" :format="geoJson" :projection="projection">
          </ol-source-vector>
            <ol-style>
              <ol-style-fill color="rgba(255,255,255,0.1)"></ol-style-fill>
              <ol-style-icon :src="truckIcon" :scale="0.1"></ol-style-icon>
            </ol-style>
        </ol-vector-layer>

    </ol-map>
  </div>
</template>