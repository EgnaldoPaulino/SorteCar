<template>
  <div class="bg-white rounded-xl shadow-md p-6">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Regulamento</h2>
    
    <div class="space-y-3 text-gray-600">
      <div class="flex items-start">
        <div class="flex-shrink-0 w-6 h-6 mt-0.5 bg-blue-100 rounded-full flex items-center justify-center">
          <span class="text-xs font-bold text-blue-600">1</span>
        </div>
        <p class="ml-2">Cada ticket adquirido dá direito a uma chance na promoção.</p>
      </div>
      
      <div class="flex items-start">
        <div class="flex-shrink-0 w-6 h-6 mt-0.5 bg-blue-100 rounded-full flex items-center justify-center">
          <span class="text-xs font-bold text-blue-600">2</span>
        </div>
        <p class="ml-2">O sorteio será realizado no dia 30 de cada mês.</p>
      </div>
      
      <div class="flex items-start">
        <div class="flex-shrink-0 w-6 h-6 mt-0.5 bg-blue-100 rounded-full flex items-center justify-center">
          <span class="text-xs font-bold text-blue-600">3</span>
        </div>
        <p class="ml-2">O ganhador será contatado por e-mail e telefone.</p>
      </div>
      
      <div class="flex items-start">
        <div class="flex-shrink-0 w-6 h-6 mt-0.5 bg-blue-100 rounded-full flex items-center justify-center">
          <span class="text-xs font-bold text-blue-600">4</span>
        </div>
        <p class="ml-2">O prêmio deve ser retirado em até 30 dias após o sorteio.</p>
      </div>
    </div>
    
    <button 
      @click="openFullRegulation"
      class="mt-4 w-full py-2 px-4 bg-blue-50 hover:bg-blue-100 text-blue-600 font-medium rounded-lg transition-colors flex items-center justify-center"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
      Ver regulamento completo
    </button>
  </div>
</template>

<script setup>
const openFullRegulation = () => {
  // Aqui você pode implementar a abertura do regulamento completo
  // Pode ser um modal, um PDF ou uma página externa
  alert('Abrir regulamento completo em uma nova janela ou modal');
};
</script>