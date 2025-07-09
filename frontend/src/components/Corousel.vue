<template>
  <div class="relative w-full overflow-hidden rounded-xl shadow-lg border border-gray-100">
    <div class="flex h-80 md:h-96">
      <div v-for="(slide, index) in slides" :key="index"
           class="absolute inset-0 w-full h-full transition-opacity duration-500 ease-in-out"
           :class="{ 'opacity-100 z-10': currentSlide === index, 'opacity-0 z-0': currentSlide !== index }">
        <img :src="slide.image" :alt="slide.alt" class="w-full h-full object-cover rounded-xl" />
      </div>
    </div>

    <div class="absolute bottom-4 left-0 right-0 flex justify-between items-center px-4">
      <button @click="prevSlide" class="bg-white/70 text-gray-800 rounded-full w-10 h-10">‹</button>
      <div class="flex gap-2">
        <span v-for="(_, index) in slides" :key="index"
              :class="['w-3 h-3 rounded-full cursor-pointer',
                       { 'bg-white': currentSlide === index, 'bg-white/50': currentSlide !== index }]"
              @click="setSlide(index)"></span>
      </div>
      <button @click="nextSlide" class="bg-white/70 text-gray-800 rounded-full w-10 h-10">›</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const currentSlide = ref(0);
const slides = ref([
  { image: '/images/carrossel1.jpg', alt: 'NIVUS TSI' },
  { image: '/images/carrossel2.jpg', alt: 'SOMIL' },
  { image: '/images/carrossel3.jpg', alt: 'Yamaha XJ6 SP' },
]);

let carouselInterval;

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + slides.value.length) % slides.value.length;
};

const setSlide = (index) => {
  currentSlide.value = index;
};

onMounted(() => {
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 5000);
});

onBeforeUnmount(() => {
  clearInterval(carouselInterval);
});
</script>

<style scoped>
</style>
