<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Department />
    <Postdepartment />
    <div class="vantheight">
      <div class="headeraa"></div>
      <div class="vantList">
        <VantList />
      </div>
    </div>

  </div>
</template>

<script>
import Department from './components/department.vue'
import Postdepartment from './components/postdepartment.vue'
import VantList from './components/vantList.vue'

export default {
  name: 'App',
  components: {
    Department,
    Postdepartment,
    VantList
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .vantheight {
    height: 300px;
    .headeraa {
      background: linear-gradient(180deg, #6EA3F4 0%, rgba(212, 232, 255, 0) 100%);
      height: 100px;
    }
    .vantList {
      height: 200px;
      overflow: auto;
      &::-webkit-scrollbar {
        /*隐藏滚轮*/
        display: none;
      }
    }
  }
}
</style>
