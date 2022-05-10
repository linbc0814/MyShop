<template>
<!-- eslint-disable vue/no-multiple-template-root
 eslint-disable vuejs-accessibility/form-control-has-label -->
  <Loading :active="isLoading" />
  <div class="viewbody">
    <div class="productBody">
      <div class="container">
        <div class="row mt-5">
          <div class="col-md-7 mb-5">
            <div class="productImg mb-4">
              <img :src="product.imageUrl" class="shadow" alt="" />
            </div>
          </div>
          <div class="col-md-5">
            <div class="productTitle">
              <div class="productTag mb-3">{{ product.category }}</div>
              <h3 class="">{{ product.title }}</h3>
              <div class="line"></div>
              <div class="descript mt-4">
                <h4>【產品說明】</h4>
                <p class="">{{ product.description }}</p>
              </div>
              <hr />
              <div class="mb-3">
                <div>價格:NT{{ $filters.currency(product.price) }}</div>
              </div>
              <h4 class="">數量:</h4>
              <div class="countNumber d-flex align-items-center">
                <button class="btn minus" @click="changeQty(-1)">
                  <i class="bi bi-dash"></i>
                </button>
                <input
                  class="productNumber"
                  type="number"
                  max="10"
                  min="1"
                  v-model="productNum"
                  @change="changeNumber(productNum)"
                />
                <button class="btn add" @click="changeQty(1)">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
              <button
                class="addCart btn myBtn mt-4 px-3"
                @click="addToCart(this.id, productNum)"
              >
                <i class="bi bi-cart4"></i> 加入購物車
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="referPro mt-5">
        <h4 class="text-center">熱門產品</h4>
        <hr />
        <div class="d-flex justify-content-center">
          <div class="col-9 mt-5">
            <ul class="row">
              <Card :products="hotProducts" />
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/frontDesk/CardItem.vue';

export default {
  data() {
    return {
      product: {},
      products: [],
      id: '',
      hotProducts: [],
      arr: [],
      productNum: 1,
    };
  },
  components: {
    Card,
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {
    getProduct() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.product = response.data.product;
        }
      });
    },
    getHotProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api).then((response) => {
        this.products = response.data.products;
        this.products.map((products) => {
          if (products.id !== this.id) {
            this.arr.push(products);
          }
          return this.arr;
        });
        if (this.arr.length > 3) {
          // eslint-disable-next-line no-plusplus
          for (let i = 0; i < 3; i++) {
            let num = Math.random() * this.arr.length;
            num = Math.floor(num);
            this.hotProducts.push(this.arr[num]);
          }
        }
      });
    },
    changeQty(num) {
      const qty = this.productNum + num;
      this.changeNumber(qty);
    },
    changeNumber(num) {
      if (num < 1) {
        this.productNum = 1;
        // eslint-disable-next-line no-alert
        alert('數量不可低於1');
      } else {
        this.productNum = num;
      }
    },
    addToCart(id, productNum) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: productNum,
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then((response) => {
        this.isLoading = false;
        this.pushMessageState(response, '加入購物車');
      });
    },
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
    this.getHotProducts();
  },
};
</script>
