<template>
  <Loading :active="isLoading" />
  <!-- eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="viewbody">
    <div class="p-5 text-center mt-5" v-if="favoriteProduct.length === 0">
      <p class="fs-1 opacity-50 mt-5">
        <i class="bi bi-file-earmark-text"></i>
        <br />
        尚未新增最愛商品!
      </p>
      <RouterLink
        :to="{ path: '/user/productslist' }"
        class="btn btn-primary btn-lg mb-5"
      >
        <i class="bi bi-arrow-right"></i>
        去逛逛
      </RouterLink>
    </div>
    <div class="favoriteProduct" v-else>
      <h1 class="text-center mt-5">最愛產品</h1>
      <div class="d-flex justify-content-center">
        <div class="col-9 mt-5">
          <ul class="row">
            <Card :products="favoriteProduct" />
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/frontDesk/CardItem.vue';

export default {
  data() {
    return {
      favoriteList: JSON.parse(localStorage.getItem('favorite')) || [],
      isLoading: false,
      favoriteProduct: [],
      products: [],
    };
  },
  components: {
    Card,
  },
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
          this.favoriteProduct = this.products.filter(
            (item) => this.favoriteList.indexOf(item.id) !== -1,
          );
        }
      });
    },
  },
  created() {
    this.getProduct();
  },
};
</script>

<style>
</style>
