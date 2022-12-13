<template>
    <v-btn
    color="primary"
    @click.stop="updateOnClick()"
    style="margin-left: 50%;"
    >
    Toggle
    </v-btn>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { useDrawerStateStore } from '../stores/drawerState'

export default defineComponent({
   setup(){
    const store = useDrawerStateStore()
    const updateOnClick = () => { 
        store.updateDrawerState()
    }
    return {updateOnClick}
    }   

})

</script>
