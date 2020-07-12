<template>
  <div class="header">
    <div class="l-content">
      <el-button
       plain
        icon="el-icon-edit"
        size="mini"
        circle
        @click="collapseMenu"
      ></el-button>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{ current.label }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="r-content">
      <el-dropdown>
        <span class="el-dropdown-link">
          <img :src="userImg" alt="" class="userImg" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "",
  props: [""],
  data() {
    return {
      userImg: require("../assets/images/user.png"),
    };
  },
  components: {},
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
  methods: {
    // 点击后收缩
    collapseMenu(){
     this.$store.commit('collapseMenu')
    },
    // 点击后退出
    logout(){
      this.$store.commit('clearToken')
      this.$store.commit('clearMenu')
      location.reload()
    }
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
}
.l-content {
  display: flex;
  align-items: center;
  .el-button {
    margin-right: 10px;
  }
}
.r-content {
  .userImg {
    height: 54px;
    width: 54px;
  }
}
</style>
