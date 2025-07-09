<template>
  <div class="min-h-screen bg-gray-100 py-8 px-4">
    <div class="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
      <!-- Cabeçalho -->
      <div class="text-center mb-6">
        <h1 class="text-2xl font-bold text-gray-800">
          Bem-vindo à Ação do Buggy
        </h1>
        <p class="text-gray-600 mt-2">
          Grande oportunidade de levar um Buggy para casa!!!
        </p>
      </div>

      <!-- Vídeo (simulado) 
      <div class="bg-gray-200 border-2 border-dashed rounded-xl w-full h-48 flex items-center justify-center mb-6">
        <span class="text-gray-500">Vídeo do Buggy</span>
      </div>-->

      <!-- Componente de Vídeo -->
      <VideoIntro />

      <!-- Slider para quantidade -->
      <div class="mb-6">
        <h2 class="text-lg font-semibold text-center mb-4">
          Selecione a quantidade de números
        </h2>
        <input
          type="range"
          min="0"
          max="1000"
          step="10"
          v-model="ticketCount"
          class="w-full"
        />
        <p class="text-center mt-2">
          Quantidade selecionada: {{ ticketCount }}
        </p>
      </div>

      <!-- Adição rápida -->
      <QuickAdd @add="addTickets" class="mb-6" />

      <!-- Resumo -->
      <div class="bg-gray-50 p-4 rounded-lg mb-6">
        <div class="flex justify-between mb-3">
          <span class="font-medium">Total de ingressos:</span>
          <span class="font-bold">{{ ticketCount }}</span>
        </div>
        <div class="flex justify-between">
          <span class="font-medium">Valor total:</span>
          <span class="font-bold">R$ {{ totalPrice.toFixed(2) }}</span>
        </div>
      </div>

      <!-- Botão de compra -->
      <button
        @click="handleBuy"
        :disabled="ticketCount === 0"
        class="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        Comprar Ingressos
      </button>

      <!-- Botão de compra -->
      <BuyButton
        :tickets="ticketCount"
        :price="totalPrice"
        @buy="completePurchase"
        class="mt-4"
      />

      <!-- Links de autenticação -->
      <div class="mt-6 text-center text-sm">
        <router-link to="/login" class="text-blue-600 hover:underline mr-2"
          >Login</router-link
        >
        <router-link to="/register" class="text-blue-600 hover:underline"
          >Registrar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import VideoIntro from "../components/VideoIntro.vue"; // Ajuste o caminho conforme necessário
import QuickAdd from "../components/QuickAdd.vue";
import BuyButton from '../components/BuyButton.vue';

const ticketCount = ref(0);
const ticketValue = 0.0532;

const totalPrice = computed(() => ticketCount.value * ticketValue);

function addTickets(amount) {
  ticketCount.value += amount;
}

function handleBuy() {
  if (ticketCount.value === 0) {
    alert("Selecione pelo menos 1 ingresso!");
    return;
  }

  alert(
    `Compra realizada!\n${
      ticketCount.value
    } ingressos\nTotal: R$ ${totalPrice.value.toFixed(2)}`
  );
  ticketCount.value = 0;
}
</script>
