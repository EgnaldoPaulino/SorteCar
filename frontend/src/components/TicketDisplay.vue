<template>
  <div class="flex flex-wrap justify-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-100 max-h-64 overflow-y-auto shadow-inner">
    <span v-for="num in numbers" :key="num"
          class="bg-blue-200 text-blue-800 px-3 py-1.5 rounded-md text-sm font-semibold shadow-sm">
      {{ num }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'TicketDisplay',
  props: {
    numbers: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
</style>
