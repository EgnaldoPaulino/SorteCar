<template>
  <div>
    <!-- Container principal da home -->
    <div class="home-container p-6 bg-white rounded-lg shadow-lg max-w-xl mx-auto mt-10">
      <!-- Título e introdução -->
      <h1 class="text-3xl font-bold text-gray-900 mb-4 text-center">
        Bem-vindo à Ação do Bugue
      </h1>

      <!-- Vídeo do carro no topo da página -->
      <VideoIntro />

      <p class="text-gray-600 mb-6 text-center">
        Grande oportunidade de levar um Bugue para casa!!!
      </p>

      <!-- Exemplo de slider interativo -->
      <div class="mt-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
        <h2 class="text-xl font-semibold text-gray-700 mb-4">
          Exemplo de Slider:
        </h2>
        <Slider
          v-model="demoSliderValue"
          :min="0"
          :max="1000"
          :step="10"
          label="Quantidade de Números"
        />
        <p class="mt-4 text-gray-700">
          Valor atual do slider: {{ demoSliderValue }}
        </p>
      </div>
      <div class="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow">
        <!-- Botões de adição rápida -->
        <QuickAdd @add="increment" />

        <!-- Botão de compra -->
        <BuyButton :price="price" @buy="handleBuy" />
      </div>
      <!-- Links para login e registro -->
      <div class="mt-8">
        <router-link to="/login" class="text-blue-600 hover:underline"
          >Faça login</router-link
        >
        ou
        <router-link to="/register" class="text-blue-600 hover:underline"
          >registre-se</router-link
        >
        para começar.
      </div>
    </div>

    <!-- Galeria de fotos do carro ao final da home -->
    <!--CarMedia -->
  </div>
</template>

<script setup>
import { ref } from "vue";

import Slider from "../components/Slider.vue"; // Componente do slider numérico
import VideoIntro from "../components/VideoIntro.vue"; // Componente com vídeo de introdução do carro
import CarMedia from "../components/CarMedia.vue"; // Componente com galeria de fotos do carro
import QuickAdd from "../components/QuickAdd.vue";
import BuyButton from "../components/BuyButton.vue";

const demoSliderValue = ref(500);

const price = ref(5.32); // Exemplo

function increment(value) {
  console.log(`Adicionado: ${value}`);
  // Aqui você pode somar ao total de bilhetes, por exemplo
}

function handleBuy() {
  alert("Compra realizada!");
}
</script>

<style scoped>
/* Estilos locais, se necessário */
</style>
