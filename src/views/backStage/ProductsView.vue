<template>
  <!--  eslint-disable vue/no-multiple-template-root -->
  <!--  eslint-disable no-unused-vars -->
  <!--  eslint-disable-next-line vue/no-multiple-template-root  -->
  <Loading :active="isLoading" />
  <div class="text-end mt-4">
    <button type="button" class="btn btn-primary" @click="addModal(true)">
      新增產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">{{ $filters.currency(item.origin_price) }}</td>
        <td class="text-right">{{ $filters.currency(item.price) }}</td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              @click="addModal(false, item)"
            >
              編輯
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              @click="deleteModal(item)"
            >
              刪除
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <!--  eslint-disable-next-line vue/no-multiple-template-root -->
  <PaginationModal :pagination="pagination" @change-page="getProducts" />
  <ProductModal
    ref="productModal"
    :product="tempProduct"
    @update-product="updateProduct"
  />
  <DelModal ref="delModal" :item="tempProduct" @del-item="delProduct" />
</template>

<script>
/* eslint-disable no-console */
import ProductModal from '@/components/backStage/ProductsModal.vue';
import DelModal from '@/components/backStage/DelModal.vue';
import PaginationModal from '@/components/shared/PaginationModal.vue';
import { addModal, deleteModal } from '@/methods/reviseBtn';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DelModal,
    PaginationModal,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        this.isLoading = false;
        if (response.data.success) {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
      });
    },
    updateProduct(item) {
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        // eslint-disable-next-line no-unused-vars
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then((response) => {
        productComponent.hideModal();
        this.pushMessageState(response, '更新產品狀態');
        this.getProducts();
      });
    },
    elProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((response) => {
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.pushMessageState(response, '刪除');
        this.getProducts();
      });
    },
    addModal,
    deleteModal,
  },
  created() {
    this.getProducts();
  },
  inject: ['emitter', 'pushMessageState'],
};
</script>

<style>
</style>
