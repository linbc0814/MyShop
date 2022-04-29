<template>
  <nav class="userNavbar navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">首頁</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav">
          <router-link to="/user/about" class="nav-link">關於禪茶</router-link>
          <router-link to="/user/productslist" class="nav-link"
            >禪茶訂購</router-link
          >
          <router-link to="/user/faq" class="nav-link">常見問題</router-link>
          <router-link to="/cart" class="nav-link position-relative"
            >購物車
            <span
              class="
                position-absolute
                top-0
                start-70
                badge
                rounded-pill
                bg-danger
                font-sans
              "
              v-if="cartlength !== 0"
            >
              {{ cartlength }}
            </span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      cartlength: 0,
    };
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getCartProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url).then((response) => {
        this.cartlength = response.data.data.carts.length;
      });
    },
  },
  mounted() {
    this.emitter.on('update-cart', this.getCartProducts);
    this.getCartProducts();
  },
  unmounted() {
    this.emitter.off('update-cart', this.getCartProducts);
  },
};
</script>
