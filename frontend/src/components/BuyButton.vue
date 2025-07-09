<template>
  <div>
    <!-- Resumo da Compra -->
    <div class="bg-gray-50 p-4 rounded mb-4">
      <div class="flex justify-between mb-1">
        <span>Preço unitário:</span>
        <span class="font-bold">R$ {{ unitPrice.toFixed(2) }}</span>
      </div>
      <div class="flex justify-between">
        <span>Total:</span>
        <span class="font-bold">R$ {{ totalPrice.toFixed(2) }}</span>
      </div>
    </div>

    <!-- Botão Principal -->
    <button 
      @click="handleClick"
      :disabled="ticketCount === 0"
      class="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700 disabled:bg-gray-300 transition-colors"
    >
      Comprar por R$ {{ totalPrice.toFixed(2) }}
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  ticketCount: {
    type: Number,
    default: 0
  },
  unitPrice: {
    type: Number,
    default: 0.05
  }
});

const emit = defineEmits(['buy', 'require-auth']);

// Calcula o preço total
const totalPrice = computed(() => props.ticketCount * props.unitPrice);

// Verifica autenticação e decide ação
function handleClick() {
  if (props.ticketCount === 0) return;
  
  // Simulação: verifica se usuário está autenticado
  const isAuthenticated = false; // Na prática, viria de um store (Pinia/Vuex)
  
  if (isAuthenticated) {
    emit('buy', {
      tickets: props.ticketCount,
      total: totalPrice.value
    });
  } else {
    emit('require-auth', {
      tickets: props.ticketCount,
      total: totalPrice.value
    });
  }
}
</script>