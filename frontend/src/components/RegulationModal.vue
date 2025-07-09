<template>
  <transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div
        class="bg-white p-6 rounded-xl shadow-lg max-w-lg w-full relative"
      >
        <!-- Botão fechar -->
        <button
          @click="emit('close')"
          class="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>

        <h2 class="text-2xl font-semibold mb-4 text-center text-orange-600">
          Regulamento da Ação
        </h2>

        <div class="space-y-2 text-gray-700 text-sm">
          <p>✅ A cada R$ 0,07 você adquire 1 ticket.</p>
          <p>✅ Os tickets são ilimitados, quanto mais, maior sua chance.</p>
          <p>✅ O sorteio será realizado pela Loteria Federal.</p>
          <p>✅ O vencedor será contactado pelo WhatsApp.</p>
          <p>✅ Promoção válida até dia <strong>31/07/2025</strong>.</p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
const props = defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
