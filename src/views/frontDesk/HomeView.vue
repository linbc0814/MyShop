<template>
  <!-- eslint-disable vue/no-multiple-template-root -->
  <div class="homeview">
    <div class="block_1">
      <h1>禪茶一味</h1>
      <section><span></span><span></span><span></span></section>
    </div>
    <div class="block_2" id="block_2">
      <div class="block_2Text">
        <p>熔煉天地靈氣</p>
        <p>聚集方圓之間</p>
      </div>
      <div class="block_2Img">
        <img :src="teacup" alt="" />
      </div>
      <div class="block_2Text">
        <p class="text">
          品嚐
          <span>苦後回甘</span>
        </p>
        <p class="text">
          等待
          <span>歲月沉澱</span>
        </p>
      </div>
    </div>

    <div class="block_3">滋潤乾涸的靈魂</div>
    <div class="block_4">
      <section>
        <h1>茶葉</h1>
        <p>一年兩季</p>
        <p>春芳，秋風</p>
        <p>嚴守每一道製茶流程</p>
        <p>用細緻的技術不斷打磨</p>
        <p>每一口</p>
        <p>都是上天的賞賜</p>
      </section>
    </div>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import pushMessageState from '@/methods/pushMessageState';
import filters from '@/methods/filters';
import teacup from '@/assets/imgs/homeview/homepageBG2.png';

export default {
  data() {
    return {
      teacup,
    };
  },
  components: {

  },
  provide() {
    return {
      emitter,
      pushMessageState,
      filters,
    };
  },
  created() {},
};
</script>
