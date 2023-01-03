<script setup lang="ts">
import Map from '../components/Map.vue'
import Drawer from'../components/Drawer.vue'
</script>

<template>
    <v-card>
      <v-layout>
        <Drawer></Drawer>
        <v-main style="height: 100vh">
          <div>
            <Map></Map>
          </div>
        </v-main>
      </v-layout>
    </v-card>
</template>
