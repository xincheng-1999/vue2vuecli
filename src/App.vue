<template>
  <input ref="inputBox" type="number" v-model="inputVal" @input="handleInput">
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <router-view></router-view>
</template>

<script>
import { ref } from '@vue/reactivity'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  setup(){
    const inputVal = ref('')
    const inputBox = ref()
    const handleInput = ()=>{
      console.log(inputVal.value,typeof inputVal.value,inputBox.value);
    }
    return {
      inputVal,
      inputBox,
      handleInput
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
