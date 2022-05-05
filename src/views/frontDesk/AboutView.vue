<template>
<div class="viewbody">
  <TimeLine />
  <Teatype />
</div>
</template>

<script>
import TimeLine from '@/components/frontDesk/TimelineItem.vue';
import Teatype from '@/components/frontDesk/TeaTypeItem.vue';

export default {
  components: {
    TimeLine,
    Teatype,
  },
};
</script>
