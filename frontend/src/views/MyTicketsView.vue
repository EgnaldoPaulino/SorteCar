<template>
  <div class="my-tickets-container p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto mt-10">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">Meus Bilhetes de Rifa</h1>

    <p v-if="isLoading" class="text-gray-600 text-center">Carregando seus bilhetes...</p>
    <p v-if="error" class="text-red-500 text-center">{{ error }}</p>

    <div v-if="!isLoading && !error">
      <div v-if="groupedTickets.length > 0" class="space-y-6">
        <div v-for="raffle in groupedTickets" :key="raffle.raffleId" class="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
          <RaffleCard :raffle="raffle.details" class="mb-4" />
          <h3 class="text-lg font-semibold text-gray-700 mb-3 border-b pb-2 border-gray-200">Seus Números Comprados nesta Rifa:</h3>
          <TicketDisplay :numbers="raffle.numbers" />
        </div>
      </div>
      <p v-else class="text-gray-600 text-center mt-6">
        Você ainda não comprou nenhum bilhete. Vá para a
        <router-link to="/" class="text-blue-600 hover:underline">página inicial</router-link> para participar!
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import RaffleCard from '../components/RaffleCard.vue';
import TicketDisplay from '../components/TicketDisplay.vue';

export default {
  name: 'MyTicketsView',
  components: {
    RaffleCard,
    TicketDisplay
  },
  data() {
    return {
      isLoading: true,
      error: null,
      rawTickets: [],
    };
  },
  computed: {
    groupedTickets() {
      const grouped = {};
      this.rawTickets.forEach(ticket => {
        const raffleId = ticket.raffle.id;
        if (!grouped[raffleId]) {
          grouped[raffleId] = {
            raffleId: raffleId,
            details: ticket.raffle,
            numbers: [],
          };
        }
        grouped[raffleId].numbers.push(ticket.number);
      });
      return Object.values(grouped).sort((a, b) => b.raffleId - a.raffleId);
    }
  },
  async created() {
    await this.fetchMyTickets();
  },
  methods: {
    async fetchMyTickets() {
      this.isLoading = true;
      this.error = null;
      try {
        const response = await axios.get('/raffle/my-tickets');
        this.rawTickets = response.data.tickets;
      } catch (err) {
        this.error = err.response?.data?.message || 'Erro ao carregar seus bilhetes.';
        console.error('Erro ao buscar tickets:', err);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
</style>
