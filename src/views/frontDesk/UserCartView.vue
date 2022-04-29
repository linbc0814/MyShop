<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
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
            <li class="col-3 active">購物車</li>
            <li class="col-3">填寫資料</li>
            <li class="col-3">確認訂單</li>
            <li class="col-3">完成</li>
          </ol>
        </div>
      </div>
    </div>
    <div v-if="!cart?.carts?.length" class="p-5 text-center">
      <p class="fs-4 opacity-50 mt-5">
        <i class="bi bi-cart-x-fill"></i>
        <br />
        購物車目前沒任何商品喔！
      </p>
      <RouterLink
        :to="{ path: '/user/productslist' }"
        class="btn btn-primary btn-lg mb-5"
      >
        <i class="bi bi-arrow-right"></i>
        去逛逛
      </RouterLink>
    </div>
    <!-- 購物車清單區域 -->
    <div class="cart" v-else>
      <Cart :cart="cart" :subtotal="subtotal" />
      <!-- 總價計算區域 -->
      <div class="container bg-white mb-5 py-5 px-md-4">
        <div class="row justify-content-evenly px-3 px-md-5">
          <div class="col-lg-6">
            <ul class="flex-column list-unstyled mx-3 mx-md-4 mb-5">
              <li class="col-12 col-md-6 col-lg-8">
                <div class="mb-2">
                  <h2>付款方式</h2>
                  <label for="card" class="me-3">
                    <input
                      id="card"
                      type="radio"
                      name="刷卡"
                      value="刷卡"
                      v-model="pay"
                    />刷卡
                  </label>
                  <label for="transfer" class="m-3">
                    <input
                      id="transfer"
                      type="radio"
                      name="轉帳"
                      value="轉帳"
                      v-model="pay"
                    />
                    轉帳
                  </label>
                  <label for="cash" class="m-3">
                    <input
                      id="cash"
                      type="radio"
                      name="貨到付款"
                      value="貨到付款"
                      v-model="pay"
                    />
                    貨到付款
                  </label>
                </div>
              </li>
              <li class="col-12 col-md-6 col-lg-8">
                <div class="mb-2">
                  <h2>收貨方式</h2>
                  <label for="delivery" class="me-3">
                    <input
                      id="delivery"
                      type="radio"
                      name="宅配"
                      value="宅配"
                      v-model="shipping"
                    />宅配
                  </label>

                  <label for="inStore" class="m-3">
                    <input
                      id="inStore"
                      type="radio"
                      name="超商取貨"
                      value="超商取貨"
                      v-model="shipping"
                    />
                    超商取貨
                  </label>
                </div>
              </li>
            </ul>
          </div>
          <div class="col-lg-6">
            <ul class="row flex-column align-items-end mx-3 mx-md-4 mb-5">
              <li class="col-12 col-md-6 col-lg-8">
                <div class="text-success" v-if="this.subtotal">
                  已套用優惠券
                </div>
                <div class="input-group mb-2">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入優惠券號碼"
                    v-model="coupon_code"
                  />
                  <button
                    class="btn btn-outline-success"
                    type="button"
                    @click="addCouponCode"
                  >
                    <div
                      class="spinner-border spinner-border-sm"
                      role="status"
                      v-if="status.loadingItem === 'coupon'"
                    ></div>
                    <span v-else>使用</span>
                  </button>
                </div>
              </li>
              <li
                class="col-12 col-md-6 col-lg-8 d-flex justify-content-between"
              >
                <p>商品</p>
                <p>共 {{ $filters.currency(qtyTotal) }} 樣</p>
              </li>
              <li
                class="col-12 col-md-6 col-lg-8 d-flex justify-content-between"
              >
                <p>小計</p>
                <p>NTD {{ $filters.currency(cart.total) }}</p>
              </li>
              <li
                class="
                  col-12 col-md-6 col-lg-8
                  border-bottom
                  d-flex
                  justify-content-between
                  mb-2
                "
              >
                <p>折扣</p>
                <p>NTD {{ $filters.currency(this.subtotal) }}</p>
              </li>
              <li
                class="col-12 col-md-6 col-lg-8 d-flex justify-content-between"
              >
                <h4 class="fw-bold fs-6 mb-0">應付金額</h4>
                <p>NTD {{ $filters.currency(cart.final_total) }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 按鈕區域 -->
      <div class="container mb-5 py-5 px-md-4">
        <div class="row">
          <div class="col-5 col-md-3 col-lg-2 ms-md-4 me-auto">
            <RouterLink
              class="btn btn-outline-secondary w-100"
              :to="{ path: '/user/productslist' }"
            >
              <i class="bi bi-arrow-left"></i>
              還想逛逛
            </RouterLink>
          </div>
          <div class="col-5 col-md-3 col-lg-2 ms-md-4 ms-auto">
            <button
              class="gocustomerinfo btn link-hover w-100"
              @click="checkout"
            >
              我要結帳
              <i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from '@/components/frontDesk/CartItem.vue';

// eslint-disable no-undef
export default {
  data() {
    return {
      products: [],
      cart: {},
      hotProducts: [],
      qtyList: [],
      pay: [],
      shipping: [],
      final_total: '',
      coupon_code: '',
      subtotal: '',
      isLoading: false,
      status: {
        loadingItem: '',
      },
    };
  },
  components: {
    Cart,
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getCartProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url).then((response) => {
        this.cart = response.data.data;
        this.subtotal = this.cart.total - this.cart.final_total;
        this.getqtyList();
        this.isLoading = false;
      });
    },
    getqtyList() {
      this.qtyList.length = 0;
      this.cart.carts.filter((item) => {
        this.qtyList.push(item.qty);
        return this.qtyList;
      });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        this.pushMessageState(response, '優惠卷使用');
        this.isLoading = false;
        this.coupon_code = coupon.code;
        this.getCartProducts();
      });
    },
    checkout() {
      const pays = this.pay;
      const shippings = this.shipping;
      if (pays.length === 0) {
        alert('未選擇付款方式');
      } else if (shippings.length === 0) {
        alert('未選擇收貨方式');
      } else {
        this.$router.push({
          path: '/cart/customerinfo',
          query: {
            pays,
            shippings,
          },
        });
      }
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
    this.getCartProducts();
  },
};
</script>

<style>
</style>
