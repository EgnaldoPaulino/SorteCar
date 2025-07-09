<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4 sm:px-6 flex items-center justify-center">
    <!-- Container principal -->
    <div class="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl w-full mx-4">
      <!-- Cabeçalho com gradiente -->
      <div class="bg-gradient-to-r from-orange-400 to-red-500 p-6 text-center">
        <div class="inline-block bg-white/20 backdrop-blur-sm rounded-full p-3 mb-4">
          <div class="bg-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z"/>
              <circle cx="7.5" cy="14.5" r="1.5"/>
              <circle cx="16.5" cy="14.5" r="1.5"/>
            </svg>
          </div>
        </div>
        <h1 class="text-3xl md:text-4xl font-bold text-white mb-2">
          AÇÃO DO BUGGY
        </h1>
        <p class="text-white/90 text-lg font-medium">
          Leve um Buggy para casa por apenas R$ 0,07 por ticket!
        </p>
      </div>

      <!-- Conteúdo principal -->
      <div class="p-6 sm:p-8 space-y-8">
        <!-- Vídeo Intro -->
        <VideoIntro />

        <!-- Ticket Selector -->
        <TicketSelector />

        <!-- Regulamento -->
        <RegulamentoSection />
      </div>

      <!-- Rodapé -->
      <div class="bg-gray-50 border-t border-gray-200 py-6 px-8">
        <div class="flex flex-col sm:flex-row justify-between items-center">
          <div class="text-center sm:text-left mb-4 sm:mb-0">
            <p class="text-gray-700 font-medium">Valor mínimo: 600 tickets</p>
            <p class="text-sm text-gray-500">© Grupo Whatsapp - Todos os direitos reservados</p>
          </div>
          
          <div class="flex space-x-4">
            <button class="text-blue-600 hover:text-blue-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </button>
            <button class="text-blue-600 hover:text-blue-800 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Botão flutuante do WhatsApp -->
    <WhatsAppButton />
  </div>
</template>

<script setup>
import VideoIntro from "../components/VideoIntro.vue";
import TicketSelector from "../components/TicketSelector.vue";
import RegulamentoSection from "../components/RegulamentoSection.vue";
import WhatsAppButton from "../components/WhatsAppButton.vue";
</script>

<style scoped>
/* Animação suave de entrada */
.bg-white {
  animation: fadeIn 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Efeito de elevado ao passar o mouse */
.video-container, .ticket-selector, .regulation-card {
  transition: transform 0.3s ease, box-shadow 0.4s ease;
}

.video-container:hover, .ticket-selector:hover, .regulation-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>