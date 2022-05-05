<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Loading :active="isLoading" />
  <div class="viewbody">
    <div class="container mb-5 py-5 px-md-4 mt-5">
      <div class="row justify-content-center mt-5">
        <div class="col-md-10 mx-auto">
          <ol
            class="
              row
              progress-bar
              list-unstyled
              justify-content-between
              text-center
            "
          >
            <li class="col-3 done">購物車</li>
            <li class="col-3 done">填寫資料</li>
            <li class="col-3 done">確認訂單</li>
            <li class="col-3 active">完成</li>
          </ol>
        </div>
      </div>
      <div class="mt-5">
        <h3 class="fs-1 text-center mb-5">
          <i class="bi bi-check-circle text-success"></i>
          交易成功
        </h3>
      </div>
      <div class="banner">
        <h1 class="display-3 fw-bold text-center">感謝您的購買</h1>
        <div class="d-flex justify-content-center col-lg-12 py-2 mx-auto mt-5">
          <router-link
            to="/user/productslist"
            class="btn btn-lg shadow myBtn"
          >
            繼續逛逛
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.order = res.data.order;
        }
      });
    },
    payOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(url).then((res) => {
        if (res.data.success) {
          this.getOrder();
        }
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};

</script>
