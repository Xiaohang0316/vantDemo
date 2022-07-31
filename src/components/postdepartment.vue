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
  name: 'Postdepartment',
  data() {
    return {
      show: false,
      selectData:'',
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
      this.selectData = item;
      console.log(this.selectData.name)
    },
  },
}
</script>

<style lang="less" scoped>
.hello {
  width: 300px;
  ::v-deep .van-popup {
    .van-action-sheet__item {
      text-align: left;
      &::after {
        content: '';
        background: url('../assets/right.svg');
        background-size: 13px;
        width: 13px;
        height: 13px;
        opacity: 1;
        display: inline-block;
        float: right;

      }
    }
  }

}
</style>
