<template>
  <div>
    <div class="bz-head">
      <h1>{{ data.title }}</h1>
      <a :href="pic" download target="_blank">
        <el-button class="btn" round size="medium" icon="el-icon-download"
          >下载原图</el-button
        ></a
      >
    </div>
    <div class="bz">
      <img :src="data.img1400" :alt="data.title" />
      <ul>
        <li v-for="(item, key) in pics" :key="key">
          <img
            :src="item"
            @click="changeImg(key)"
            referrer="no-referrer|origin|unsafe-url"
          />
          {{ key + 1 }}/{{ pics.length }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { getWallPic, getWallImg1400 } from "@/network/wall.js";

export default {
  name: "BZ",

  data() {
    return {
      href: "",
      data: {},
      pics: [],
      pic: "",
      index: 0,
    };
  },
  created() {
    this.href = this.$route.query.href;
    getWallPic(this.href).then((res) => {
      this.pics = res.data.list;
    });
    this.getImg1400(this.href);
  },
  methods: {
    getImg1400(href) {
      getWallImg1400(href).then((res) => {
        this.data = res.data;
        this.pic = this.data.img1400.replace("-1200", "");
      });
    },
    changeImg(index) {
      if (this.index === index) return;
      this.index = index;
      if (index === 0) {
        this.getImg1400(this.href);
        return;
      }
      this.getImg1400(this.href.slice(0, -5) + "_" + (index + 1) + ".html");
    },
  },
};
</script>

<style lang="scss" scoped>
.bz-head {
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  margin-left: 20px;
}

.bz {
  margin: 20px;
  padding: 40px;
  background-color: #fff;

  ul {
    display: flex;
    width: 1200px;
    overflow: auto;
    margin: 0 auto;

    li {
      margin: 10px;

      img {
        width: 240px;
        cursor: pointer;
      }
    }
  }
}
</style>