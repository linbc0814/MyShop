<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <Loading :active="isLoading" />
  <div class="viewbody">
    <div class="mt-5">
      <div class="container pb-5">
        <div class="row pt-5">
          <!-- 左邊列表 -->
          <div class="col-lg-3 mb-3">
            <ul class="list-group sticky-top sticky-position">
              <li v-for="(item, key) in filter.list" :key="key">
                <a
                  href="#"
                  class="list-group-item"
                  @click.prevent="changeCategory(item)"
                  :class="{ active: this.filter.str === item }"
                >
                  {{ item }}
                </a>
              </li>
            </ul>
          </div>
          <!-- 右邊商品 -->
          <div class="col-lg-9">
            <ul class="row">
            <Card :products="products"/>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <PaginationModal :pagination="pagination" @change-page="getProducts" />
  </div>
  <!-- 左邊列表 -->
</template>

<script>
import PaginationModal from '@/components/shared/PaginationModal.vue';
import Card from '@/components/frontDesk/CardItem.vue';

export default {
  data() {
    return {
      products: [],
      pagination: '',
      loadingStatus: {},
      isLoading: false,
      filter: {
        list: ['全部商品', '高山茶', '綠茶', '紅茶', '青茶', '黑茶', '組合包'],
        str: '全部商品',
      },
    };
  },
  components: {
    PaginationModal,
    Card,
  },
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/?page=${page}`;
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(api).then((response) => {
        if (!response.data.success) {
          this.pushMessageState(response, '取得全部產品資料');
          this.isLoading = false;
          return;
        }
        if (this.filter.str !== '全部商品') {
          this.$http.get(url).then((res) => {
            const filterSelect = res.data.products.filter(
              (item) => item.category === this.filter.str,
            );
            this.products = filterSelect;
            this.pagination = '';
          });
        } else {
          this.products = response.data.products;
          this.pagination = response.data.pagination;
        }
        this.isLoading = false;
      });
    },
    changeCategory(str) {
      this.filter.str = str;
      this.getProducts();
    },

  },
  created() {
    this.getProducts();
  },
  inject: ['pushMessageState'],
};
</script>
