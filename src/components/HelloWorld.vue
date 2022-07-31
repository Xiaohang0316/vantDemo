<template>
<div class="hello">
  <van-cell is-link title="基础用法" @click="show = true" />
  <van-action-sheet v-model="show" :actions="actions" @select="onSelect" />
</div>
</template>

<script>
import {
  Toast
} from 'vant';
export default {
  name: 'Department',
  data() {
    return {
      show: false,
      actions: [{
        name: '选项一'
      }, {
        name: '选项二'
      }, {
        name: '选项三'
      }],
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
  },
}
</script>

<style lang="less" scoped>
.hello {
  width: 300px;

}
</style>
