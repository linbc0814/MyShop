<template>
  <div class="toast-container">
    <ToastItem v-for="(message, key) in messages" :key="`Toast${key}`" :message="message"/>
  </div>
</template>

<script>
import ToastItem from '@/components/shared/ToastItem.vue';

export default {
/* eslint-disable vue/no-unused-components */
  components: { ToastItem },
  data() {
    return {
      messages: [],
    };
  },
  inject: ['emitter'],
  mounted() {
    this.emitter.on('push-message', (message) => {
      const { style, title, content } = message;
      this.messages.push({ style, title, content });
    });
  },
};
</script>
