<template>
  <div class="viewbody">
    <div class="mt-5 faq">
      <Accordion :question="faq" class=" "/>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/frontDesk/AccordionItem.vue';

export default {
  data() {
    return {
      faq: [],
    };
  },
  components: {
    Accordion,
  },
  methods: {},
  mounted() {
    this.axios.get('/MyShop/dist/json/faq.json').then((response) => {
      this.faq = response.data.faq;
    });
  },
};
</script>
