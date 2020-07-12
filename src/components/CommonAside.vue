<template>
  <el-menu
    default-active="2"
    class="el-menu-vertical-demo"
    background-color="pink"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="isCollage"
  >
    <el-menu-item v-for="item in noChildren" :key="item.id" :index="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu index="index" v-for="item in hasChildren" :key="item.id">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
           @click="clickMenu(subItem)"
          >{{ subItem.label }}</el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "",
  props: [""],
  data() {
    return {
      asideMenu: [
        {
          id: 1,
          name:'home',
          path: "/",
          label: "首页",
          icon: "home",
        },
        {
          id: 2,
          name:'video',
          path: "/video",
          label: "视频管理",
          icon: "video-play",
        },
        {
          id: 3,
          name:'user',
          path: "/user",
          label: "用户管理",
          icon: "user",
        },
        {
          id: 4,
          name:'other',
          label: "其他",
          icon: "user",
          children: [
            {
              path: "/page1",
              name:'page1',
              label: "演示页面1",
              icon: "setting",
            },
            {
              path: "/page2",
              name:'page2',
              label: "演示页面2",
              icon: "setting",
            },
          ],
        },
      ],
    };
  },
  components: {},
  computed: {
    //   计算是否有children
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    hasChildren() {
      return this.menu.filter((item) => item.children);
    },
    isCollage(){
      return this.$store.state.tab.isCollapse
    },
    menu(){
      return this.$store.state.tab.menu
    }
  },
  methods: {
    clickMenu(item) {
      // 完成路由跳转
      this.$router.push({name:item.name})
      this.$store.commit("selectMenu", item);
      
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu {
  height: 100%;
  border: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
