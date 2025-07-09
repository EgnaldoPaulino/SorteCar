<template>
  <div class="flex flex-col md:flex-row items-center bg-white rounded-lg shadow-md p-6 border border-gray-100">
    <img v-if="raffle.imageUrl" :src="raffle.imageUrl" :alt="raffle.title"
         class="w-full md:w-48 h-32 md:h-24 object-cover rounded-md mb-4 md:mb-0 md:mr-6" />
    <div class="flex-grow text-left">
      <h3 class="text-xl font-semibold text-gray-800 mb-2">{{ raffle.title }}</h3>
      <p class="text-gray-600 text-sm mb-2">{{ raffle.description }}</p>
      <p class="text-gray-700 text-sm">Preço por Bilhete: <strong>R$ {{ formatPrice(raffle.pricePerTicket) }}</strong></p>
      <p class="text-gray-700 text-sm">Total de Bilhetes: <strong>{{ raffle.totalTickets }}</strong></p>
      <p class="text-gray-700 text-sm">Status:
        <span :class="['font-medium px-2 py-0.5 rounded-full text-xs', raffle.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700']">
          {{ raffle.isActive ? 'Ativa' : 'Inativa' }}
        </span>
      </p>
      <p class="text-gray-700 text-sm">Criada em: <strong>{{ formatDate(raffle.createdAt) }}</strong></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RaffleCard',
  props: { raffle: Object },
  methods: {
    formatPrice(price) {
      return parseFloat(price).toFixed(2).replace('.', ',');
    },
    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString('pt-BR', options);
    }
  }
};
</script>

<style scoped>
</style>
