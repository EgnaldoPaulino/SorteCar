<template>
  <div class="max-w-md mx-auto p-6 bg-white rounded-xl shadow-lg">
    <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">Comprar Tickets</h1>
    
    <!-- Box de preço unitário -->
    <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-6 flex justify-center items-center">
      <div class="bg-white border border-gray-300 rounded-lg py-1 px-4">
        <span class="text-sm font-medium text-gray-700">Preço Unitário: R$ 0,07</span>
      </div>
    </div>
    
    <!-- Opções de incremento rápido -->
    <div class="grid grid-cols-2 gap-4 mb-6">
      <button 
        v-for="(option, index) in quickOptions" 
        :key="index"
        @click="increment(option.value)"
        class="flex flex-col items-center justify-center p-4 border-2 border-blue-100 rounded-xl hover:bg-blue-50 transition-colors"
      >
        <span class="text-xl font-bold text-blue-600">+{{ option.value }}</span>
        <span class="text-sm text-gray-600">Selecionar</span>
      </button>
    </div>
    
    <!-- Contador de tickets -->
    <div class="flex flex-col items-center mb-4">
      <div class="flex items-center justify-center mb-4">
        <button 
          @click="decrement"
          :disabled="ticketCount <= MIN_TICKETS"
          class="w-12 h-12 flex items-center justify-center text-3xl font-bold bg-gray-100 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          -
        </button>
        <div class="mx-6 text-4xl font-bold text-gray-800 min-w-[120px] text-center">
          {{ ticketCount }}
        </div>
        <button 
          @click="increment(100)"
          class="w-12 h-12 flex items-center justify-center text-3xl font-bold bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
        >
          +
        </button>
      </div>
      
      <button 
        @click="resetToMin"
        class="py-2 px-4 bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium rounded-lg transition-colors"
      >
        Quantia Mínima
      </button>
    </div>
    
    <!-- Resumo da compra -->
    <div class="bg-blue-50 rounded-xl p-4 mb-6">
      <div class="flex justify-between items-center mb-2">
        <span class="text-gray-700">Total de Tickets:</span>
        <span class="font-bold">{{ ticketCount }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-700">Valor Total:</span>
        <span class="font-bold text-lg text-blue-600">{{ totalPrice }}</span>
      </div>
    </div>
    
    <!-- Botão de compra -->
    <button 
      @click="comprar"
      class="w-full py-3 bg-green-500 hover:bg-green-600 text-white font-bold rounded-lg flex items-center justify-center transition-colors"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      Comprar {{ totalPrice }}
    </button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// Valor mínimo de tickets
const MIN_TICKETS = 600;
const PRECO_UNITARIO = 0.07; // R$ 0,07 por ticket

// Estado do componente
const ticketCount = ref(MIN_TICKETS);

// Opções de incremento rápido
const quickOptions = [
  { value: 100 },
  { value: 500 },
  { value: 200 },
  { value: 300 },
  { value: 1000 },
  { value: 2000 }
];

// Incrementa o contador de tickets
const increment = (value) => {
  ticketCount.value += value;
};

// Decrementa o contador de tickets (mínimo 600)
const decrement = () => {
  if (ticketCount.value > MIN_TICKETS) {
    ticketCount.value -= 100;
    // Garantir que não fique abaixo de 600
    if (ticketCount.value < MIN_TICKETS) {
      ticketCount.value = MIN_TICKETS;
    }
  }
};

// Reseta para o valor mínimo
const resetToMin = () => {
  ticketCount.value = MIN_TICKETS;
};

// Calcula o preço total formatado
const totalPrice = computed(() => {
  const total = ticketCount.value * PRECO_UNITARIO;
  return total.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
});

// Função para processar a compra
const comprar = () => {
  alert(`Compra realizada!\n${ticketCount.value} tickets por ${totalPrice.value}`);
};
</script>

<style scoped>
button {
  transition: background-color 0.2s, transform 0.1s;
}

button:active {
  transform: scale(0.98);
}
</style>