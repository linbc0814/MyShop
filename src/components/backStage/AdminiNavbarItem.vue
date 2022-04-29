<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarText">
        <div class="navbar-nav">
          <router-link to="/dashboard/products" class="nav-link"
            >產品</router-link
          >
          <router-link to="/dashboard/orders" class="nav-link"
            >訂單</router-link
          >
          <router-link to="/dashboard/coupons" class="nav-link"
            >優惠券</router-link
          >
          <a href="#" @click.prevent="logout" class="nav-link">登出</a>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api, this.user).then((res) => {
        if (res.data.success) {
          this.$router.push('/login');
        }
      });
    },
  },
};
</script>
