<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <div class="viewbody">
    <div class="block_1">
      <h1>禪茶一味</h1>
      <section><span></span><span></span><span></span></section>
    </div>
    <section class="block_2 py-5" id="block_2">
      <div class="container">
        <div class="row g-3 g-md-5 mt-5 mb-5 align-items-center">
          <div class="col-12 col-md-7">
            <div class="black_2Img ms-5 overflow-hidden">
              <img :src="tealeaf" class="img-cover" alt="" />
            </div>
          </div>
          <div
            class="col-12 col-md-5 border border-3 border-primary text-center"
          >
            <h2 class="mt-5">百年傳承，手工製茶</h2>
            <h4>熔煉天地靈氣，聚集方圓之間</h4>
            <p class="mb-5">
              探索茶的旅途上，每一步對我們來說都至關重要。
              我們也致力讓你在品茶的每一刻，能以更舒適愜意的心情，和我們一起享受每一口茶湯帶來的豐富變化，
              在這快速變化的世界中，獲得片刻心靈寧靜，困難的採茶和製茶，挑茶或揉捻都讓我們煩惱；
              而你只需要和我們一起細細慢品，一探杯裡的東方之美
            </p>
          </div>
        </div>

        <div class="row g-3 g-md-5 mb-5 align-items-center">
          <div
            class="col-12 col-md-5 border border-3 border-primary text-center"
          >
            <h2 class="mt-5">穿梭古今，遊走世界</h2>
            <h4>等待歲月沉澱，品嚐茶香甘甜</h4>
            <p class="mb-5">
              茶樹品種、地理環境、製茶工藝的豐富性，讓小小的台灣，茶葉百百種，
              每一種茶都有屬於自己獨特的香氣，
              來自這片土地純淨自然的芳香氣味，從熱水澆淋在茶葉的那一刻，就緩緩地揚起，
              在茶香四溢的空間中，從嗅覺的滿足，一步步深入到味覺的探索，進而提升為身心靈的享受。
            </p>
          </div>
          <div class="col-12 col-md-7">
            <div class="black_2Img me-5 overflow-hidden">
              <img :src="teacup" class="img-cover" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="block_3">
      <!-- <div class="container">
      <div class="row align-self-center">
        <h1>滋潤乾涸的靈魂</h1>
      </div>
      </div> -->
    </div>
    <Coupon class="mt-5"/>
    <div class="block_4">
      <div class="d-flex justify-content-center">
        <div class="text-center mt-5">
          <h1>
            <strong>禪茶</strong>
            <br>
            <em>ZEN TEA</em>
          </h1>
          <div class="mt-5">
            <p>一年兩季</p>
            <p>春芳，秋風</p>
            <p>嚴守每一道製茶流程</p>
            <p>用細緻的技術不斷打磨</p>
            <p>每一口都是</p>
            <p>上天的賞賜</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tealeaf from '@/assets/imgs/homeview/tealeaf.jpg';
import teacup from '@/assets/imgs/homeview/teacup.jpg';
import Coupon from '@/components/frontDesk/CouponItem.vue';

export default {
  data() {
    return {
      tealeaf,
      teacup,
    };
  },
  components: {
    Coupon,
  },
};
</script>
