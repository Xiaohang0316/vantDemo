<template>
<div class="hello">
  <van-field v-model="fieldValue" is-link readonly label="地区" placeholder="请选择所在地区" @click="show = true" />
  <van-popup v-model="show" round position="bottom">
    <van-cascader v-model="cascaderValue" title="请选择所在地区" :options="options" @close="show = false" @finish="onFinish" />
  </van-popup>
</div>
</template>

<script>
export default {
  name: 'Department',
  data() {
    return {
      show: false,
      fieldValue: '',
      cascaderValue: '',
      // 选项列表，children 代表子选项，支持多级嵌套
      options: [{
          text: '浙江省',
          value: '330000',
          children: [{
            text: '杭州市',
            value: '330100'
          }],
        },
        {
          text: '江苏省',
          value: '320000',
          children: [{
            text: '南京市',
            value: '320100'
          }],
        },
      ],
    };
  },
  methods: {
    // 全部选项选择完毕后，会触发 finish 事件
    onFinish({
      selectedOptions
    }) {
      this.show = false;
      this.fieldValue = selectedOptions.map((option) => option.text).join('/');
    },
  },
}
</script>

<style lang="less" scoped>
.hello {
  width: 300px;

  .van-popup {
    ::v-deep .van-cascader {
      .van-tabs {
        .van-tabs__wrap {
          .van-tabs__nav {
            padding-left: 25px;

            .van-tab {
              padding: 0;
            }

            .van-tab::after {
              content: '';
              background: url('../assets/right.svg');
              background-size: 13px;
              width: 13px;
              height: 13px;
              opacity: 1;
            }

            .van-tabs__line {
              display: none;
            }
          }
        }
      }

      .van-tabs__content {
        .van-cascader__option {
          padding-left: 25px;

          .van-icon-success:before {
            content: '';
            background: url('../assets/right.svg');
            background-size: 13px;
            width: 13px;
            height: 13px;
            opacity: 1;
          }

        }
      }
    }
  }
}
</style>
