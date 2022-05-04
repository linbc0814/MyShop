<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
   <Navbar />
  <div>
    <router-view/>
  </div>
    <ToastMessages />
  <Footer />
</template>

<script>
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
import { currency, date } from '@/methods/filters';
import ToastMessages from '@/components/shared/ToastMessages.vue';
import Navbar from '@/components/frontDesk/UserNavbarItem.vue';
import Footer from '@/components/frontDesk/FooterItem.vue';

export default {
  components: {
    ToastMessages,
    Navbar,
    Footer,
  },
  provide() {
    return {
      emitter,
      pushMessageState,
      currency,
      date,
    };
  },
  created() {
  },
};
</script>
