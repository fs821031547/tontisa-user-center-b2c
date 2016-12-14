<template>
  <div id="app">
    <HeaderBar></HeaderBar>
    <el-row class="tac">
      <el-col :span="4">
        <menus></menus>
      </el-col>
      <el-col :span="20">
        <router-view></router-view>
        <Address></Address>
      </el-col>
    </el-row>
  </div>

</template>

<script>

import HeaderBar from './components/header_bar'
import menus from './components/menus'
import Address from './components/address'

export default {
  components: {
    menus,
    HeaderBar,
    Address
  }
}
</script>

<style>
</style>
