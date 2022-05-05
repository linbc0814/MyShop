<template>
  <div class="container" id="index-lottery">
    <div class="coupon text-center text-lg-start mt-5">
      <div class="coupon-info px-3 px-md-5">
        <h3 class="display-6 fw-bold text-dark">商品下殺優惠</h3>
        <p class="text-danger mb-3" v-if="time > 0">
          優惠倒數 {{ days }} 天 {{ hours }} 小時 {{ minutes }} 分
          {{ seconds }} 秒
        </p>
        <p class="text-danger small mb-3" v-else>優惠已截止</p>
        <p class="text-dark mb-5">
          活動期間快來領取優惠券！
          <br />
          （優惠券至 {{ dateline }} 截止）
        </p>
        <div>

          <div
            class="
              coupon-body
              fs-4
              d-md-flex
              rounded-3
              shadow-sm
              px-md-4
              mb-3
              mx-auto
            "
          >
            <div class="coupon-mark flex-shrink-0 p-3 mb-0 mx-auto">
              <div class="bg-primary text-light p-1">
                商品<br class="d-none d-md-inline-block" />
                <span> 7 折</span>
              </div>
            </div>
            <div class="user-select-all flex-grow-1 p-3">
              <p class="mb-0 text-primary">{{this.coupon}}</p>
              <p class="fs-5 text-danger">立即領取優惠碼 !!</p>
            </div>
          </div>
          <button
            type="button"
            class="btn couponBtn btn-lg w-100"
            ref="copyCoupon"
            :disabled="!this.isCopy || this.time <= 0"
            @click="copyCoupon(this.coupon)"
          >
            <span v-if="time > 0 && this.isCopy">點擊複製</span>
            <span v-else-if="time <= 0">優惠券已過期</span>
            <span v-else> 已複製 </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reducetime: 0,
      time: null,
      dateline: '',
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      expirationDate: 'Jan 1, 2023 00:00:00',
      coupon: 'BIG3',
      isCopy: true,
    };
  },
  methods: {
    countDate() {
      const countDownDate = new Date(this.expirationDate).getTime();
      const currentTime = new Date().getTime();
      const distance = countDownDate - currentTime;
      this.dateline = new Date(this.expirationDate).toLocaleDateString();
      this.reducetime = distance;
      // console.log(this.reducetime);
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
      if (this.reducetime <= 0) {
        clearInterval(this.time);
      }
    },
    copyCoupon(coupon) {
      const input = document.createElement('input');
      document.body.appendChild(input);
      input.setAttribute('value', coupon);
      input.select();
      if (document.execCommand('copy')) {
        document.execCommand('copy');
        this.isCopy = !this.isCopy;
        // eslint-disable-next-line no-alert
        alert('領取成功，已複製到剪貼簿');
      }
      document.body.removeChild(input);
      this.$refs.copyCoupon.disabled = true;
    },
  },
  mounted() {
    this.time = setInterval(this.countDate, 1000);
  },
  unmounted() {
    clearInterval(this.time);
  },
  inject: ['emitter', 'pushMessageState'],
};
</script>

<style>
</style>
