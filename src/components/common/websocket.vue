<template>
    <view>
        <i-message id="message" />
    </view>
</template>

<script>
import {$Message as Message} from '../../iview/base/index.js'
export default {
  name: 'websocket',
  data: function () {
  },
  created() {
    console.log("created")
  },
  mounted () {
    console.log(this.wsInstance)
    this.wsInstance.onMessage((res) => {
      let {carStatus, parklocId} = JSON.parse(JSON.parse(res.data)).data
      Message({content: carStatus === 1701 ? '车辆已入场' : '车辆已离场'})
    })
  },
  methods: {}
}

</script>

<style scoped>

</style>