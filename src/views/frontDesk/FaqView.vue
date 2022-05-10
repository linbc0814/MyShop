<template>
  <!-- eslint-disable vuejs-accessibility/label-has-for -->
  <div class="viewbody">
    <div class="mt-5 faq">
      <Accordion :question="faq" />
    </div>
    <div class="contact footer-bottom">
      <div class="container py-5 mb-5 mt-4 mt-sm-5">
        <div class="row justify-content-center gy-5 gy-md-0">
          <div class="col-12 col-md-6">
            <h3 class="text-center mt-5">禪茶地點</h3>
            <Map />
          </div>
          <div class="col-12 col-md-6">
            <h3 class="text-center mt-5">聯絡我們</h3>
            <div class="faqinfo">
              <ul class="nav flex-column">
                <li><i class="bi bi-telephone"></i>Tel:04-26123456</li>
                <li><i class="bi bi-chat-dots"></i>Fax:04-26123456</li>
                <li><i class="bi bi-geo-alt"></i>台灣台中市中區新台中火車站前廣場</li>
                <li><i class="bi bi-envelope"></i>Mail:zentea.tw@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Accordion from '@/components/frontDesk/AccordionItem.vue';
import Map from '@/components/frontDesk/MapItem.vue';

export default {
  data() {
    return {
      isLoading: false,
      faq: [],
      form: {
        user: {
          name: '',
          email: '',
        },
        message: '',
      },
    };
  },
  components: {
    Accordion,
    Map,
  },
  inject: ['emitter', 'pushMessageState'],
  methods: {},
  mounted() {
    this.axios.get('/MyShop/dist/json/faq.json').then((response) => {
      this.faq = response.data.faq;
    });
  },
};
</script>
