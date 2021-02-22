<template>
  <div class="img-page">
    <ul class="img-ul">
      <li v-for="item in img_list" :key="item.href">
        <img :src="item.img" :alt="item.name" @click="toBZ(item.href)" />
        <div class="img-name">
          <span @click="toBZ(item.href)">{{ item.name }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ImgItem",
  props: ["img_list"],
  methods: {
    toBZ(href) {
      this.$router.push({ name: "BZ", query: { href } });
    },
  },
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

.img-page {
  .img-ul {
    padding: 0;
    
    li {
      display: inline-block;
      margin: 10px 20px 40px;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 0 25px #adadad;

      img {
        width: 360px;
        height: auto;
        cursor: pointer;
        transition: 0.5s;
        border-radius: 12px;

        @media screen and (max-width: 450px) {
          width: 100%;
        }
      }

      img:hover {
        transform: scale(1.08);
      }
    }
  }
}

.img-name {
  margin-top: 10px;
}
</style>
