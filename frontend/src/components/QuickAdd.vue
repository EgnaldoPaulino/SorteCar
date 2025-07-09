<template>
  <div class="text-center">
    <p class="text-sm text-gray-700 mb-2 font-medium">Adição Rápida</p>
    <div class="flex flex-wrap justify-center gap-2">
      <button
        v-for="amount in amounts"
        :key="amount"
        @click="$emit('add', amount)"
        class="px-4 py-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 transition"
      >
        +{{ amount }}
      </button>
    </div>
  </div>
</template>

<script setup>
const amounts = [100, 250, 500, 1000];
</script>