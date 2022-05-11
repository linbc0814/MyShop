<template>
  <nav class="navbar navbar-expand-lg fixed-top userNavbar">
    <div class="container position-relative">
      <router-link to="/" class="navbar-brand nav-link-color">禪茶</router-link>
      <div class="d-flex order-lg-last">
        <ul class="navbar-nav fs-3 flex-row">
          <li class="nav-item me-3 me-lg-2 ">
          <router-link to="/user/favorite" class="nav-link position-relative"
            ><i class="bi bi-heart-fill"></i>
          </router-link>
          </li>
          <li class="nav-item me-3 me-lg-2 ">
          <router-link to="/cart" class="nav-link position-relative"
            ><i class="bi bi-basket-fill"></i>
            <span
              class="
                position-absolute
                top-30 start-100 translate-middle badge rounded-pill bg-danger fs-6
              "
              v-if="cartlength !== 0"
            >
              {{ cartlength }}
            </span>
          </router-link>
          </li>
        </ul>
        <button
          class="navbar-dark navbar-toggler ms-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse justify-content-between" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/user/about" class="nav-link nav-link-color">關於禪茶</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/productslist" class="nav-link nav-link-color">禪茶訂購</router-link>
          </li>
          <li class="nav-item">
             <router-link to="/user/faq" class="nav-link nav-link-color">常見問題</router-link>
          </li>
          <li class="nav-item">
             <router-link to="/user/searchorder" class="nav-link nav-link-color">訂單查詢</router-link>
          </li>
        </ul>
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
