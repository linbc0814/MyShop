<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <!-- eslint-disable vuejs-accessibility/form-control-has-label -->
  <div class="container bg-white mb-5 py-5 px-md-4">
    <div class="px-3 px-md-5">
      <table class="table table-borderless pc-cart">
        <thead class="rounded-3 cartThead">
          <tr>
            <th scope="col" width="5%">編號</th>
            <th scope="col" width="50%">商品名稱</th>
            <th scope="col" width="10%">價格</th>
            <th scope="col" width="10%">數量</th>
            <th scope="col" width="10%">刪除</th>
          </tr>
        </thead>
        <tbody class="cartTbody">
          <tr v-for="(item, index) in cart.carts" :key="item.id">
            <td>{{ index + 1 }}</td>
            <td>
              <div class="d-flex bd-highlight">
                <div class="p-2 flex-shrink-1 bd-highlight">
                  <img
                    class="cartImg"
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                  />
                </div>
                <div class="p-2 w-100 bd-highlight">
                  <h4 class="m-0 fs-5">
                    <router-link
                      :to="`/user/product/${item.product.id}`"
                      class="text-dark d-block"
                    >
                      {{ item.product.title }}
                    </router-link>
                  </h4>
                </div>
              </div>
            </td>
            <td>NTD {{ $filters.currency(item.total) }}</td>
            <td>
              <div
                v-if="status.loadingItem === item.product_id"
                class="d-flex justify-content-center"
              >
                <div class="spinner-border"></div>
              </div>
              <div class="ms-3" v-else>
                <div class="countNumber d-flex align-items-center">
                  <button
                    class="btn minus"
                    @click="updateCart(item.id, item.product_id, item.qty - 1)"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <input
                    class="productNumber"
                    type="number"
                    max="10"
                    min="1"
                    v-model.number="item.qty"
                    @change="updateCart(item.id, item.product_id, item.qty)"
                  />
                  <button
                    class="btn add"
                    @click="updateCart(item.id, item.product_id, item.qty + 1)"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td>
              <div
                v-if="status.loadingItem === item.id"
                class="spinner-border spinner-border-sm"
              ></div>
              <button
                v-else
                type="button"
                class="btn-close btn-outline-danger"
                @click="removeCartItem(item.id)"
              ></button>
            </td>
          </tr>
        </tbody>
      </table>
      <table class="table m-cart">
        <tbody class="m-cartTbody">
          <tr v-for="(item, index) in cart.carts" :key="item.id" class="mt-5">
            <td width="100%">編號{{ index + 1 }}</td>
            <td>
              <div class="bd-highlight">
                <div class="p-2">
                  <img
                    class="m-cartImg"
                    :src="item.product.imageUrl"
                    :alt="item.product.title"
                  />
                </div>
                <div class="p-2 bd-highlight">
                  <h4 class="m-0 fs-5">
                    <router-link
                      :to="`/user/product/${item.product.id}`"
                      class="text-dark d-block"
                    >
                      {{ item.product.title }}
                    </router-link>
                  </h4>
                </div>
              </div>
            </td>
            <td>NTD {{ $filters.currency(item.total) }}</td>
            <td>
              <div
                v-if="status.loadingItem === item.product_id"
                class="d-flex justify-content-center"
              >
                <div class="spinner-border"></div>
              </div>
              <div class="ms-5" v-else>
                <div class="countNumber d-flex align-items-center ms-2">
                  <button
                    class="btn minus"
                    @click="updateCart(item.id, item.product_id, item.qty - 1)"
                  >
                    <i class="bi bi-dash"></i>
                  </button>
                  <input
                    class="productNumber"
                    type="number"
                    max="10"
                    min="1"
                    v-model.number="item.qty"
                    @change="updateCart(item.id, item.product_id, item.qty)"
                  />
                  <button
                    class="btn add"
                    @click="updateCart(item.id, item.product_id, item.qty + 1)"
                  >
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </td>
            <td>
              <div
                v-if="status.loadingItem === item.id"
                class="spinner-border spinner-border-sm"
              ></div>
              <button
                v-else
                type="button"
                class="btn-close btn-outline-danger"
                @click="removeCartItem(item.id)"
              ></button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['cart', 'subtotal'],
  data() {
    return {
      status: {
        loadingItem: '',
      },
    };
  },
  components: {},
  inject: ['emitter', 'pushMessageState'],
  methods: {
    removeCartItem(id) {
      this.status.loadingItem = id;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        this.pushMessageState(response, '移除購物車品項');
        this.status.loadingItem = '';
        this.emitter.emit('update-cart', id);
        this.$parent.getCartProducts();
        this.isLoading = false;
      });
    },
    updateCart(id, productId, productNum) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.isLoading = true;
      const cart = {
        product_id: productId,
        qty: productNum,
      };
      if (productNum < 1) {
        cart.qty = 1;
        // eslint-disable-next-line no-alert
        alert('數量不可低於1');
      } else {
        this.$http.put(url, { data: cart }).then((response) => {
          this.pushMessageState(response, '數量更改');
          this.$parent.getCartProducts();
          this.isLoading = false;
        });
      }
    },
  },
  created() {
    // console.log(this.cart.carts.length);
  },
};
</script>

<style>
</style>
