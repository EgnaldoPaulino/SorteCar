<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center px-4">
    <div class="max-w-md w-full bg-white rounded-lg shadow p-6">
      <h2 class="text-2xl font-bold text-center mb-6">Criar Conta</h2>
      
      <!-- Formulário de Cadastro -->
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Nome</label>
          <input 
            type="text" 
            v-model="form.name"
            class="w-full px-3 py-2 border rounded"
            required
          >
        </div>
        
        <div class="mb-4">
          <label class="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            v-model="form.email"
            class="w-full px-3 py-2 border rounded"
            required
          >
        </div>
        
        <div class="mb-6">
          <label class="block text-gray-700 mb-2">Senha</label>
          <input 
            type="password" 
            v-model="form.password"
            class="w-full px-3 py-2 border rounded"
            required
          >
        </div>
        
        <button 
          type="submit"
          class="w-full py-3 bg-green-600 text-white font-bold rounded hover:bg-green-700"
        >
          Criar Conta
        </button>
      </form>
      
      <!-- Link para Login -->
      <p class="mt-6 text-center">
        Já tem conta? 
        <router-link to="/login" class="text-green-600 hover:underline">Faça login</router-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const form = ref({
  name: '',
  email: '',
  password: ''
});

// Verifica se há compra pendente ao carregar a página
onMounted(() => {
  const pendingPurchase = sessionStorage.getItem('pendingPurchase');
  if (pendingPurchase) {
    const { tickets, total } = JSON.parse(pendingPurchase);
    console.log(`Continuar compra após cadastro: ${tickets} ingressos - R$ ${total}`);
  }
});

// Processa o cadastro
function handleSubmit() {
  // Aqui você enviaria os dados para o backend
  console.log('Cadastrando:', form.value);
  
  // Remove compra pendente após cadastro
  sessionStorage.removeItem('pendingPurchase');
  
  // Redireciona para home (ou completa a compra)
  router.push('/');
}
</script>