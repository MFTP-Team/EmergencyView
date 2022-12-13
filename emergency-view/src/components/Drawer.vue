  
<script lang="ts">
import { defineComponent } from 'vue'
import { useDrawerStateStore } from '../stores/drawerState'
import { ref } from 'vue'

import { storeToRefs } from 'pinia'

  export default defineComponent({
   setup(){

    const store = useDrawerStateStore()
    const refStore = storeToRefs(store)
    
    const drawerState = ref(refStore.drawerState)

    return{
        drawerState
    }
   },
})
</script>


<template>
    <v-navigation-drawer
          v-model="drawerState"
          temporary
    >
        <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
            title="John Leider"
        ></v-list-item>
  
        <v-divider></v-divider>
  
        <v-list density="compact" nav>
            <v-list-item prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>


