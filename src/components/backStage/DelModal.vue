<template>
  <!--  eslint-disable vue/no-mutating-props */ -->
  <!--  eslint-disable vue/valid-v-model */ -->
  <!--  eslint-disable-next-line vue/no-multiple-template-root -->
  <!--  eslint-disable vuejs-accessibility/label-has-for  -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header bg-warning text-white">
          <h5 class="modal-title" id="exampleModalLabel">刪除商品</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" :item="item">
          確定要刪除{{ item.title }}這項商品嗎?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('del-item')"
          >
            刪除
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixins from '@/mixins/modalMixins';

export default {
  data() {
    return {
      modal: '',
    };
  },
  props: {
    item: {},
  },
  mixins: [modalMixins],
};
</script>

<style>
</style>
