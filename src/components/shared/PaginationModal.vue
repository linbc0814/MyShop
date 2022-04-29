<!--  eslint-disable vuejs-accessibility/anchor-has-content  -->
<!-- eslint-disable vue/no-v-for-template-key  -->
<template>
  <nav v-if="pagination.total_pages > 1">
    <ul class="pagination justify-content-center text-center">
      <li class="page-item" v-if="pagination.has_pre">
        <a class="page-link" href="#" @click.prevent="changePage(pagination.current_page - 1)">
          <span>&laquo;</span>
        </a>
      </li>
      <li v-for="page in pagination.total_pages" :key="page" class="page-item"
        :class="{'active': pagination.current_page === page}">
        <a class="page-link" href="#" @click.prevent="changePage(page)">
          {{ page }}
        </a>
      </li>
      <li class="page-item" v-if="pagination.has_next">
        <a class="page-link" href="#"
        @click.prevent="changePage(pagination.current_page + 1)">
          <span>&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>
<script>

export default {
  props: ['pagination'],
  emits: ['change-page'],
  methods: {
    changePage(page) {
      this.$emit('change-page', page);
    },
  },
};
</script>
