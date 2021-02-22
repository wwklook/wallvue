<template>
  <div class="home">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item
        :index="item.id.toString()"
        v-for="item in category_list"
        :key="item.id"
        >{{ item.name }}</el-menu-item
      >
    </el-menu>
    <img-item :img_list="img_list" />
    <pagination
      :total="total_list.length"
      :pn="1"
      :rn="1"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import {
  getWallCategory,
  getWallPage,
  getWallContext,
} from "@/network/wall.js";
import ImgItem from "@/components/ImgItem.vue";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "Home",
  components: { ImgItem, Pagination },
  data() {
    return {
      activeIndex: "0",
      category_list: [],
      total_list: [],
      img_list: [],
    };
  },
  created() {
    getWallCategory().then((res) => {
      this.category_list = res.data.category_list;
      this.activeIndex = this.$route.params.id.toString()
      let current = this.category_list[this.$route.params.id];
      this.activeName = current.name;
      this.getImgList(current.wall_url);
    });
  },
  methods: {
    handleSelect(tab) {
      if (this.$route.params.id == tab) return;
      this.activeIndex = tab;
      this.$router.push("/category/" + tab);
      this.getImgList(this.category_list[tab].wall_url);
    },
    getImgList(url) {
      getWallContext(url).then((res) => {
        this.img_list = res.data.list;
      });
      getWallPage(url).then((res) => {
        this.total_list = res.data.total;
      });
    },
    changePage(index) {
      console.log(index);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu-demo {
  margin: 0 10px;
}
</style>
