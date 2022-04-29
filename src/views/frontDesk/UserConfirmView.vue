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
            <li class="col-3 active">確認訂單</li>
            <li class="col-3">完成</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="container mb-5 py-5 px-md-4 mt-5">
      <div class="row justify-content-center my-5">
        <div class="col-lg-6 text-primary">
          <div class="h-100 d-flex flex-column">
            <h3
              class="
                h6
                d-inline-block
                text-white
                rounded-top
                align-self-start
                px-3
                py-2
                mb-0
                confirm-h3
              "
            >
              商品資訊
            </h3>
            <div
              class="
                table-responsive
                bg-white
                shadow-sm
                rounded-bottom
                divborder
                p-3
              "
            >
              <table class="confirmTable table table-borderless mb-0" v-if="cartData.carts">
                <tbody>
                  <tr v-for="product in cartData.carts" :key="product.id">
                    <td>
                      <img
                        :src="product.product.imageUrl"
                        :alt="product.product.title"
                        class="t-img"
                      />
                    </td>
                    <td>
                      {{ product.product.title }}
                    </td>
                    <td>x {{ product.qty }}</td>
                    <td class="text-end">
                      <template v-if="product.final_total !== product.total">
                        <del class="small text-muted"
                          >${{ $filters.currency(product.total) }}</del
                        >
                        <br />
                        <small class="text-danger me-1">折扣價</small>
                      </template>
                      <span class="text-danger fw-bold">
                        ${{ $filters.currency(product.final_total) }}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="col-lg-4 border-start border-light d-flex flex-column">
          <h3
            class="
              h6
              d-inline-block
              text-white
              rounded-top
              align-self-start
              px-3
              py-2
              mb-0
              confirm-h3
            "
          >
            訂購人資料
          </h3>
          <div
            class="
              table-responsive
              bg-white
              shadow-sm
              rounded-bottom
              divborder
              p-3
              mb-4
            "
          >
            <table class="table">
              <tbody v-if="orderData.user">
                <tr>
                  <th scope="row" class="border-0">姓名</th>
                  <td class="border-0">{{ orderData.user.name }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">電話</th>
                  <td class="border-0">{{ orderData.user.tel }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">地址</th>
                  <td class="border-0">{{ orderData.user.address }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">Email</th>
                  <td class="border-0">{{ orderData.user.email }}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h3
            class="
              h6
              d-inline-block
              text-white
              rounded-top
              align-self-start
              px-3
              py-2
              mb-0
              confirm-h3
            "
          >
            結帳資訊
          </h3>
          <div
            class="
              table-responsive
              bg-white
              shadow-sm
              rounded-bottom
              divborder
              p-3
            "
          >
            <table class="table">
              <tbody>
                <tr class="fs-5 fw-bold">
                  <th scope="row" class="border-0">總金額</th>
                  <td class="border-0 text-danger" >
                    ${{ $filters.currency(cartData.final_total) }}
                  </td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 align-middle">付款方式</th>
                  <td class="border-0">{{this.$route.query.pay}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 align-middle">配送方式</th>
                  <td class="border-0">{{this.$route.query.shipping}}</td>
                </tr>
              </tbody>
            </table>
              <div class="d-flex justify-content-evenly col-lg-12 py-2 mx-auto ">
                <Router-link
                  to="/user/productslist"
                  class="btn myBtn"
                  >取消購買
                </Router-link>
                <button @click="createOrder" class="btn myBtn">
                  確認訂單
                </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      orderData: {
        user: {},
      },
      cartData: {},
      orderId: '',
      isLoading: false,
    };
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getInfo() {
      const orderData = localStorage.getItem('orderData');
      const cartData = localStorage.getItem('cartData');
      this.orderData = JSON.parse(orderData);
      this.cartData = JSON.parse(cartData);
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.orderData;
      this.$http.post(url, { data: order }).then((response) => {
        this.pushMessageState(response, '訂單建立');
        this.emitter.emit('update-cart');
        this.$router.push(`/cart/ordersuccess/${response.data.orderId}`);
      });
    },
  },
  created() {
    this.getInfo();
    console.log(this.cartData);
  },
};
</script>
