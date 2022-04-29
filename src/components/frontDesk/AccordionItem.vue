<template>
  <div class="accordion accordion-flush" id="accordionExample">
    <div
      class="accordion-item "
      v-for="(item, key) in question"
      :key="key"
    >
      <h2 class="accordion-header" :id="`heading-${key}`">
        <button
          class="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          :data-bs-target="`#collapse-${key}`"
          aria-expanded="false"
          :aria-controls="`#collapse-${key}`"
        >
          {{ item.question }}
        </button>
      </h2>
      <div
        :id="`collapse-${key}`"
        class="accordion-collapse collapse"
        :aria-labelledby="`heading-${key}`"
        data-bs-parent="#accordionExample"
        :class="{ collapse:isCollapse }"
      >
        <div class="accordion-body">
          {{ item.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: true,
    };
  },
  props: ['question'],
  methods: {
    openAccordion() {},
  },
};
</script>
