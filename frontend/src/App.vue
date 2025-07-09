<template>
  <div class="min-h-screen bg-gray-100 text-gray-900 flex flex-col">
    <header class="bg-white shadow-md">
      <nav class="container mx-auto flex justify-between items-center p-4">
        <router-link to="/" class="text-xl font-bold text-blue-600"
          >🎟️ SorteCar</router-link
        >
        <div class="flex gap-4">
          <router-link to="/login" class="text-gray-700 hover:text-blue-600"
            >Login</router-link
          >
          <router-link to="/register" class="text-gray-700 hover:text-blue-600"
            >Registrar</router-link
          >
          <router-link
            to="/my-tickets"
            class="text-gray-700 hover:text-blue-600"
            >Meus Bilhetes</router-link
          >
        </div>
      </nav>
    </header>

    <main class="flex-1 container mx-auto px-4 py-6 space-y-8">
      <router-view/>
    </main>

    <footer
      class="bg-white shadow-inner py-4 text-center text-sm text-gray-500"
    >
      © {{ new Date().getFullYear() }} SorteCar. Todos os direitos reservados.
    </footer>
  </div>
</template>

<!-- src/App.vue 
<template>
  <div>
    <h1>APP CONECTADO</h1>
    <router-view /> 
  </div>
</template>
-->



<script setup>
// Nada precisa ser importado aqui
</script>

<style>
/* Global styles adicionais, se necessário */
</style>
