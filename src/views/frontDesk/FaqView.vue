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
            <h3 class="text-center">禪茶地點</h3>
            <Map />
          </div>
          <div class="col-12 col-md-6">
            <h3 class="text-center">聯絡我們</h3>
            <Form v-slot="{ errors, meta }" @submit="sendMessage">
              <div class="mb-3">
                <label for="email" class="form-label">Email </label>
                <Field
                  id="email"
                  name="email"
                  type="email"
                  class="form-control"
                  :class="{ 'is-invalid': errors['email'] }"
                  placeholder="請輸入 Email"
                  rules="email|required"
                  v-model="form.user.email"
                ></Field>
                <ErrorMessage
                  name="email"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>

              <div class="mb-3">
                <label for="name" class="form-label">姓名 </label>
                <Field
                  id="name"
                  name="姓名"
                  type="text"
                  class="form-control"
                  :class="{ 'is-invalid': errors['姓名'] }"
                  placeholder="請輸入姓名"
                  rules="required"
                  v-model="form.user.name"
                ></Field>
                <ErrorMessage
                  name="姓名"
                  class="invalid-feedback"
                ></ErrorMessage>
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">留言</label>
                <textarea
                  name="message"
                  id="message"
                  class="form-control"
                  cols="30"
                  rows="10"
                  v-model="form.message"
                ></textarea>
              </div>
              <div class="text-end">
                <button
                  class="btn btn-danger"
                  type="submit"
                  :disabled="!meta.valid"
                >
                  送出
                  <i class="bi bi-caret-right-fill"></i>
                </button>
              </div>
            </Form>
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
  methods: {
    sendMessage() {
      const api = 'https://script.google.com/macros/s/AKfycbxSx45-bBsDdhO9oCKueAwK6tsufIaW3Mjm09mtQfoesu6UgcLmkS6AcUyjedkZMsB7/exec';
      const forms = this.form;
      this.isLoading = true;
      this.$http.post(api, { forms })
        .then((response) => {
          this.pushMessageState(response, '送出留言');
          this.isLoading = false;
        }).catch(() => {
          this.pushMessageState(false, '送出留言');
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.axios.get('/MyShop/dist/json/faq.json').then((response) => {
      this.faq = response.data.faq;
    });
  },
};
</script>
