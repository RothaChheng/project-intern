<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const name = ref('')
const email = ref('')
const password = ref('')

const errorMessage = ref('')

const register = async () => {

  try {

    await axios.post(
      `${import.meta.env.VITE_API_BASE_URL}/register`,
      {
        name: name.value,
        email: email.value,
        password: password.value
      }
    )

    alert('Registration successful')

    router.push('/login')

  } catch (error) {

    errorMessage.value =
      'Registration failed'
  }
}
</script>

<template>

  <div class="register-container">

    <div class="register-card">

      <h1>Create New Account</h1>

      <div class="form-group">

        <label>Full Name</label>

        <input
          v-model="name"
          type="text"
          placeholder="Enter your full name"
        />

      </div>

      <div class="form-group">

        <label>Email</label>

        <input
          v-model="email"
          type="email"
          placeholder="Enter your email"
        />

      </div>

      <div class="form-group">

        <label>Password</label>

        <input
          v-model="password"
          type="password"
          placeholder="Create password"
        />

      </div>

      <button @click="register">
        Create Account
      </button>

      <p v-if="errorMessage" class="error">

        {{ errorMessage }}

      </p>

      <p class="login-link">

        Already have an account?

        <router-link to="/login">
          Login
        </router-link>

      </p>

    </div>

  </div>

</template>

<style scoped>

.register-container {

  height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  background: #f4f6fb;
}

.register-card {

  width: 420px;

  padding: 40px;

  background: white;

  border-radius: 20px;

  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

h1 {

  margin-bottom: 30px;

  color: #0b1b4d;
}

.form-group {

  margin-bottom: 20px;
}

label {

  display: block;

  margin-bottom: 8px;

  color: #334;
}

input {

  width: 100%;

  padding: 14px;

  border-radius: 12px;

  border: 1px solid #ccd;
}

button {

  width: 100%;

  padding: 15px;

  border: none;

  border-radius: 12px;

  background: linear-gradient(
    to right,
    #5b4bff,
    #2d6bff
  );

  color: white;

  font-size: 18px;

  cursor: pointer;
}

.error {

  color: red;

  margin-top: 15px;
}

.login-link {

  margin-top: 20px;

  text-align: center;
}

</style>
