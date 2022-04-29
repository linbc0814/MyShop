<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <div class="cardList">
    <div class="card" v-for="item in products" :key="item.id">
      <div
        class="cardImg"
        :style="{ backgroundImage: `url(${item.imageUrl})` }"
      ></div>
      <div class="container">
        <h4>
          <b>{{ item.title }}</b>
        </h4>
        <div class="h5" v-if="!item.price">{{ item.origin_price }} 元</div>
        <del class="h6" v-if="item.price">原價 {{ item.origin_price }} 元</del>
        <div class="h5" v-if="item.price">現在只要 {{ item.price }} 元</div>
      </div>
      <div class="btn-group btn-group-sm">
        <button
          type="button"
          class="btn btn-outline-secondary"
          @click="getProductdetail(item.id)"
        >
          查看更多
        </button>
        <button
          type="button"
          class="btn btn-outline-danger"
          :disabled="this.status.loadingItem === item.id"
          @click="addToCart(item.id)"
        >
          <div class="">
            加到購物車
            <div
              class="
                spinner-border spinner-border-sm
                float-end
                text-primary
                ms-2
              "
              role="status"
              v-if="this.status.loadingItem === item.id"
            >
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['products'],
};
</script>
