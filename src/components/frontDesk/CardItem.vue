<template>
  <!--  eslint-disable vue/no-multiple-template-root -->
  <Loading :active="isLoading" />
  <li class="col-md-4 col-lg3 border-0" v-for="item in products" :key="item.id">
    <div class="wrapper">
      <div class="card">
        <div
          class="top"
          :style="{ backgroundImage: 'url(' + item.imageUrl + ')' }"
        ></div>
        <div class="bottom" >
          <div class="left">
            <div class="details">
              <h5>{{ item.title }}</h5>
              <p>NT$ {{ $filters.currency(item.price) }}</p>
            </div>
            <button
              type="button"
              class="btn buy"
              @click.stop="addToCart(item.id)"
            >
              <i class="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="inside">
        <div class="icon">
          <i class="bi bi-exclamation-circle"></i>
        </div>
        <div class="insidecontents">
          <router-link :to="`/user/product/${item.id}`">
            <button class="btn btn-sm btn-frame w-50" type="button">
              <span >詳細資訊</span>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      loadingStatus: {},
    };
  },
  props: ['products'],
  methods: {
    addToCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.loadingStatus.loadingCart = id;
      this.isLoading = true;
      this.$http
        .post(url, { data: cart })
        .then((response) => {
          if (response.data.success) {
            this.pushMessageState(response, '加入購物車');
            this.emitter.emit('update-cart', id);
            this.isLoading = false;
          }
        })
        .catch((error) => {
          this.pushMessageState(error, '連線錯誤');
          this.isLoading = false;
        });
    },
  },
  inject: ['emitter', 'pushMessageState'],
};
</script>

<style>
</style>
