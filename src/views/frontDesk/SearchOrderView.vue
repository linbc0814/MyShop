<template>
  <!-- eslint-disable vue/no-multiple-template-root
 eslint-disable vuejs-accessibility/form-control-has-label -->
  <Loading :active="isLoading" />
  <div class="viewbody">
    <div class="container">
      <h1 class="fs-2 text-center fw-bold">訂單查詢</h1>
      <div class="row d-flex justify-content-center">
        <div class="col-md-8">
          <div class="input-group mt-5 mb-1">
            <input
              type="text"
              class="form-control"
              placeholder="輸入訂單編號"
              v-model="orderId"
            />
            <button class="btn myBtn rounded-0" type="button" @click="getOrder">
              送出
            </button>
          </div>
          <div class="row d-flex justify-content-center mt-5">
            <div class="col-lg-8 text-primary" v-if="this.orderget">
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
                  訂單資訊
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
                <tr>
                  <th scope="row" class="border-0">訂單編號</th>
                  <td class="border-0">{{ this.order.id }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">下單時間</th>
                  <td class="border-0">{{ $filters.date(this.order.create_at)}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">姓名</th>
                  <td class="border-0">{{ this.order.user.name }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">電話</th>
                  <td class="border-0">{{ this.order.user.tel }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">地址</th>
                  <td class="border-0">{{ this.order.user.address }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">Email</th>
                  <td class="border-0">{{ this.order.user.email }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0">總金額</th>
                  <td class="border-0">${{ $filters.currency(this.order.total) }}</td>
                </tr>
              </tbody>
            </table>
                <table class="table">
                <tbody>
                  <tr v-for="product in order.products" :key="product.id">
                    <td>
                      <img
                        :src="product.product.imageUrl"
                        :alt="product.product.title"
                        class="confirm-img"
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
      isLoading: false,
      orderget: false,
      orderId: '',
      order: {
        user: {},
      },
    };
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        console.log(response.data.order);
        this.order = response.data.order;
        this.orderget = true;
        this.isLoading = false;
      });
    },
  },
};
</script>

<style>
</style>
