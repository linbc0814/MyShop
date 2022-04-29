<template>
<!-- eslint-disable vue/no-multiple-template-root */ -->
  <Navbar />
  <!--  eslint-disable-next-line vue/no-multiple-template-root -->
  <div class="container-fluid">
    <router-view />
  </div>
  <ToastMessages />
</template>

<script>
/* eslint-disable vue/no-unused-components */
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
import Navbar from '@/components/backStage/AdminiNavbarItem.vue';
import ToastMessages from '@/components/shared/ToastMessages.vue';

export default {
  components: {
    Navbar,
    ToastMessages,
  },
  provide() {
    return {
      emitter,
      pushMessageState,
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)lbcToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`;
    this.$http.post(api, this.user).then((response) => {
      if (!response.data.success) {
        this.$router.push('/login');
      }
    });
  },
};
</script>
