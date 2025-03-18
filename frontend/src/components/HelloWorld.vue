<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <button @click="showAlert">Mostrar Alerta</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    msg: String
  }
})
export default class SideBar extends Vue {}
</script>

<style scoped lang="scss">

</style>
