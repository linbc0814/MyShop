<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <!-- eslint-disable vuejs-accessibility/label-has-for -->
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
            <li class="col-3 active">填寫資料</li>
            <li class="col-3">確認訂單</li>
            <li class="col-3">完成</li>
          </ol>
        </div>
      </div>
    </div>
    <div class="container pt-5">
      <div class="row flex-lg-row-reverse gx-5 pb-5 mb-5">
        <div class="col-lg-4 mb-4">
          <div class="bg-white">
            <h1 class="fs-4 d-none d-lg-block p-3">
              <i class="bi bi-card-text"></i>
              訂單明細
            </h1>
            <table class="fromTable table table-bordered">
              <thead class="rounded-3">
                <tr>
                  <th class="table-dark" scope="col" width="15%">編號</th>
                  <th class="table-dark" scope="col" width="40%">商品名稱</th>
                  <th class="table-dark" scope="col" width="15%">數量</th>
                  <th class="table-dark" scope="col" width="20%">價格</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in cart.carts" :key="item.id">
                  <td>{{ index + 1 }}</td>
                  <td>
                    <div class="d-flex">
                      <div class="p-2 w-100">
                        <h4 class="m-0 fs-5">
                          {{ item.product.title }}
                        </h4>
                      </div>
                    </div>
                  </td>
                  <td>{{ $filters.currency(item.qty) }}</td>
                  <td>{{ $filters.currency(item.total) }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td>折扣</td>
                  <td></td>
                  <td></td>
                  <td>{{ $filters.currency(this.subtotal) }}</td>
                </tr>
                <tr>
                  <td>合計</td>
                  <td></td>
                  <td>{{ qtyTotal }}</td>
                  <td>{{ $filters.currency(cart.total) }}</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <div
            class="
              table-responsive
              bg-white
              p-3
              border border-dark
            "
          >
            <table class="table">
              <tbody>
                <tr >
                  <th scope="row" class="border-0 align-middle">付款方式</th>
                  <td class="border-0">{{ this.$route.query.pays }}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 align-middle">配送方式</th>
                  <td class="border-0">{{ this.$route.query.shippings }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="col-lg-8">
          <div class="bg-white shadow rounded-3 py-5 px-3 px-md-5">
            <h2 class="fs-4 mb-3">
              <i class="bi bi-pen-fill"></i>
              訂購人資訊
            </h2>
            <Form v-slot="{ errors, meta }" @submit="goCustomerInfo">
              <p class="text-danger">* 為必填欄位</p>
              <div class="mb-3">
                <label for="email" class="form-label"
                  >Email
                  <span class="text-danger">*</span>
                </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"
                ></Field>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label"
                  >收件人姓名
                  <span class="text-danger">*</span>
                </label>
                <Field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></Field>
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="tel" class="form-label"
                  >收件人手機
                  <span class="text-danger">*</span>
                </label>
                <Field
                  id="tel"
                  name="手機"
                  type="tel"
                  class="form-control"
                  :class="{ 'is-invalid': errors['手機'] }"
                  placeholder="請輸入手機"
                  rules="required|numeric|min:10"
                  v-model="form.user.tel"
                ></Field>
                <ErrorMessage
                  name="手機"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="address" class="form-label"
                  >收件人地址
                  <span class="text-danger">*</span>
                </label>
                <Field
                  id="address"
                  name="地址"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['地址'] }"
                  placeholder="請輸入地址"
                  rules="required"
                  v-model="form.user.address"
                ></Field>
                <ErrorMessage
                  name="地址"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea
                  name=""
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-end">
                <p class="text-danger text-end small">
                  <i class="bi bi-exclamation-circle"></i>
                  提醒：送出後即無法修改資料！
                </p>
              </div>
              <div class="d-flex justify-content-between">
                <router-link class="btn btn-outline-primary" to="/cart">
                  <i class="bi bi-caret-left-fill"></i>
                  上一步
                </router-link>
                <div>
                  <button
                    class="btn btn-danger"
                    type="submit"
                    :disabled="!meta.valid"
                  >
                    送出
                    <i class="bi bi-caret-right-fill"></i>
                  </button>
                </div>
              </div>
            </Form>
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
      products: [],
      product: {},
      cart: {},
      qtyList: [],
      pays: '',
      shippings: '',
      subtotal: '',
      coupon_code: '',
      status: {
        loadingItem: '',
      },
      isEmpty: true,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  inject: ['pushMessageState'],
  methods: {
    getCartProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data;
        this.subtotal = this.cart.total - this.cart.final_total;
        console.log(this.cart);
        this.cart.carts.filter((item) => {
          this.qtyList.push(item.qty);
          return this.qtyList;
        });
        this.isLoading = false;
      });
    },
    goCustomerInfo() {
      const pay = this.pays;
      const shipping = this.shippings;
      const check = localStorage.getItem('orderData');
      const orderData = JSON.stringify(this.form);
      const cartData = JSON.stringify(this.cart);
      if (check) {
        localStorage.removeItem('orderData');
        localStorage.removeItem('cartData');
      }
      localStorage.setItem('orderData', orderData);
      localStorage.setItem('cartData', cartData);
      this.$router.push({
        path: '/cart/confirm',
        query: { pay, shipping },
      });
    },
  },
  computed: {
    qtyTotal() {
      let qtyTotal = 0;
      this.qtyList.forEach((item) => {
        qtyTotal += item;
      });
      return qtyTotal;
    },
  },
  created() {
    this.pays = this.$route.query.pays;
    this.shippings = this.$route.query.shippings;
    this.getCartProducts();
  },
};
</script>

<style>
</style>
