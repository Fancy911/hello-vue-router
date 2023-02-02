<template>
    <div>
        <el-menu 
            :default-active="activeIndex" 
            class="el-menu-demo" 
            mode="horizontal" 
            @select="handleSelect"
            :router="true"
        >
            <el-menu-item index="/index">首页</el-menu-item>
                <el-submenu index="/user">
                    <template slot="title">用户管理</template>
                    <el-menu-item index="/user/accountInfoView">账户信息</el-menu-item>
                    <el-menu-item index="/user/roleManage">角色管理</el-menu-item>
                    <el-menu-item index="/user/authoManage">权限管理</el-menu-item>
                </el-submenu>
            <el-menu-item index="/message">消息中心</el-menu-item>
            <el-menu-item index="/order">订单管理</el-menu-item>
        </el-menu>
    </div>
  
</template>

<script>
export default {
    data() {
      return {
      
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
        this.$router.push(key)
      }
    }
}
</script>

<style>

</style>