<template>
  <form @submit.prevent="handleSubmit" class="w-full max-w-sm mx-auto p-6 bg-white rounded-lg shadow-lg">
    <h2 class="text-2xl font-semibold text-center mb-6 text-gray-800">
      {{ isRegister ? 'Registrar' : 'Login' }}
    </h2>

    <div class="mb-4" v-if="isRegister">
      <label for="name" class="block text-sm font-medium text-gray-700 text-left mb-1">Nome:</label>
      <input type="text" id="name" v-model="form.name" required
             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
    </div>

    <div class="mb-4">
      <label for="email" class="block text-sm font-medium text-gray-700 text-left mb-1">Email:</label>
      <input type="email" id="email" v-model="form.email" required
             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
    </div>

    <div class="mb-6">
      <label for="password" class="block text-sm font-medium text-gray-700 text-left mb-1">Senha:</label>
      <input type="password" id="password" v-model="form.password" required
             class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
    </div>

    <p v-if="errorMessage" class="text-red-500 text-xs italic mb-4 text-center">{{ errorMessage }}</p>

    <PrimaryButton type="submit" class="w-full">
      {{ isRegister ? 'Registrar' : 'Entrar' }}
    </PrimaryButton>
  </form>
</template>

<script>
import PrimaryButton from './PrimaryButton.vue';

export default {
  name: 'AuthForm',
  components: { PrimaryButton },
  props: {
    isRegister: Boolean,
    errorMessage: String
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit-form', { ...this.form });
    }
  }
};
</script>

<style scoped>
</style>
