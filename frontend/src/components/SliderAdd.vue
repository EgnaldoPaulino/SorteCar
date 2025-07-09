<template>
  <div class="slider-add-container">
    <h2 class="text-lg font-medium mb-4 text-center">Selecione a quantidade</h2>
    
    <div class="flex items-center gap-4 mb-2">
      <button 
        @click="decrement"
        :disabled="value <= min"
        class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
      >
        -
      </button>
      
      <input 
        type="range" 
        :min="min" 
        :max="max" 
        :step="step"
        v-model="value"
        class="flex-1"
      >
      
      <button 
        @click="increment"
        :disabled="value >= max"
        class="w-10 h-10 flex items-center justify-center bg-gray-200 rounded-full hover:bg-gray-300 disabled:opacity-50"
      >
        +
      </button>
    </div>
    
    <p class="text-center font-bold text-lg">{{ formattedValue }}</p>
  </div>
</template>

<script setup>
import { ref, watch, computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: Number,
    default: 100
  },
  min: {
    type: Number,
    default: 100
  },
  max: {
    type: Number,
    default: 10000
  },
  step: {
    type: Number,
    default: 10
  }
});

const emit = defineEmits(['update:modelValue']);

const value = ref(props.modelValue);

// Formata o valor com separadores de milhar
const formattedValue = computed(() => {
  return value.value.toLocaleString('pt-BR');
});

// Atualiza o valor do slider e emite para o componente pai
watch(value, (newValue) => {
  emit('update:modelValue', newValue);
});

// Incrementa o valor
function increment() {
  const newValue = value.value + props.step;
  if (newValue <= props.max) {
    value.value = newValue;
  }
}

// Decrementa o valor
function decrement() {
  const newValue = value.value - props.step;
  if (newValue >= props.min) {
    value.value = newValue;
  }
}
</script>

<style scoped>
input[type="range"] {
  -webkit-appearance: none;
  height: 8px;
  border-radius: 4px;
  background: #e5e7eb;
  outline: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #3b82f6;
  cursor: pointer;
  transition: all 0.15s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  background: #2563eb;
}
</style>