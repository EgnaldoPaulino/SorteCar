<template>
  <button
    @click="$emit('open')"
    class="flex items-center gap-2 bg-sky-500 text-white font-medium px-4 py-2 rounded-lg hover:bg-sky-600 transition"
  >
    <!-- SVG -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      viewBox="0 0 24 24"
      class="w-5 h-5"
    >
      <path
        d="M19 3H5c-1.1 0-2 .9-2 2v14a2 2 0 002 2h14c1.1 0 2-.9 2-2V5a2 2 0 00-2-2zm0 16H5V5h14v14z"
      />
      <path d="M7 7h10v2H7zm0 4h10v2H7zm0 4h7v2H7z" />
    </svg>
    Ver Regulamento
  </button>
</template>

<script setup>
defineEmits(['open'])
</script>
