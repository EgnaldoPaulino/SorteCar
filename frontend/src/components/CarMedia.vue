<template>
  <div class="max-w-5xl mx-auto p-4">
    <h2 class="text-2xl font-bold text-gray-800 mb-4">Vídeo e Fotos do Carro</h2>

    <!-- Galeria de fotos -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
        v-for="(photo, index) in photos"
        :key="index"
        class="rounded overflow-hidden shadow-md"
      >
        <img :src="photo" alt="Foto do carro" class="w-full h-48 object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
const photos = [
  '/img/foto1.jpg',
  '/img/foto2.jpg',
  '/img/foto3.jpg',
  '/img/foto4.jpg',
  '/img/foto5.jpg',
  '/img/foto6.jpg',
]
</script>
