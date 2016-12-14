<template>
  <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
    <el-submenu index="1" v-for="item in menus.menu" v-if="item.sub!=null">
    <template slot="title" >{{item.name}}</template>
    <el-menu-item v-if="item.sub!=null" index="1-1" v-for="nav in item.sub"><router-link :to="{path:nav.link}">{{nav.name}}</router-link></el-menu-item>
    </el-submenu>
    <el-menu-item index="2" v-else><router-link :to="{path:item.link}">{{item.name}}</router-link></el-menu-item>
    <!--<el-submenu index="1" >-->
      <!--<template slot="title" >会员中心</template>-->
      <!--<el-menu-item index="1-1" >常用信息</el-menu-item>-->
      <!--<el-menu-item index="1-2">常用地址</el-menu-item>-->
      <!--<el-menu-item index="1-3">账号绑定</el-menu-item>-->
      <!--<el-menu-item index="1-4">修改密码</el-menu-item>-->
    <!--</el-submenu>-->
    <!--<el-menu-item index="2">订单管理</el-menu-item>-->
    <!--<el-menu-item index="3">发票申请</el-menu-item>-->
    <!--<el-menu-item index="3">支付记录</el-menu-item>-->
    <!--<el-menu-item index="3">个人定制</el-menu-item>-->
  </el-menu>
</template>

<script>
import menu from './../assets/menus.js'
export default {
    data(){
      return {
      menus:menu
      };
    },
    methods: {
      handleOpen(key, keyPath) {

      },
      handleClose(key, keyPath) {

      }
    },
    mounted(){
         console.log(menu);
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a{
    text-decoration: none;
    color: #475669;
    display:block
}
</style>
