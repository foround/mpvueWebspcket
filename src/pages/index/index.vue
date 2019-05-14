<template>
  <div @click="clickHandle">
    <websocket></websocket>
    <i-button type="primary" bind:click="handleClick">这是一个按钮</i-button>
  </div>
</template>

<script>
import websocket from '../../components/common/websocket.vue'
console.log(websocket)
export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },
  components:{
    websocket
  },
  methods: {
    bindViewTap () {
      const url = '../logs/main'
      mpvue.navigateTo({ url })
    },
  },

  async created () {
    let data = await this.$http.get('http://47.106.147.88:7269/douban/movie/top250')
    console.log(data)
  },
  mounted() {
  },
  onHide(){
      console.log('destroyed');
  },
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
.all{
  width:7.5rem;
  height:1rem;
  background-color:blue;
}
.all:after{
  display:block;
  content:'';
  clear:both;
}
.left{
  float:left;
  width:3rem;
  height:1rem;
  background-color:red;
}

.right{
  float:left;
  width:4.5rem;
  height:1rem;
  background-color:green;
}
</style>
