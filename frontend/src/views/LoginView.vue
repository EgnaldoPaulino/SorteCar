<template>
  <div class="auth-page p-6 bg-white rounded-lg shadow-lg max-w-sm mx-auto mt-10">
    <AuthForm
      :isRegister="false"
      @submit-form="handleLogin"
      :errorMessage="message"
    />
    <p class="text-center text-gray-600 text-sm mt-4">
      Não tem uma conta? <router-link to="/register" class="text-blue-600 hover:underline">Crie uma aqui</router-link>
    </p>
  </div>
</template>

<script>
import AuthForm from '../components/AuthForm.vue';
import { mapActions } from 'vuex';

export default {
  name: 'LoginView',
  components: {
    AuthForm
  },
  data() {
    return {
      message: ''
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin(credentials) {
      this.message = '';
      try {
        await this.login(credentials);
        this.$router.push('/');
      } catch (error) {
        this.message = error.message;
      }
    }
  }
};
</script>

<style scoped>
</style>
