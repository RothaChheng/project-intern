<script setup>

import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const email = ref('')
const password = ref('')

const successMessage = ref('')
const errorMessage = ref('')

const loading = ref(false)

const resetPassword = async () => {

  loading.value = true

  errorMessage.value = ''

  successMessage.value = ''

  try {

    const response = await axios.post(

      `${import.meta.env.VITE_API_BASE_URL}/forgot-password`,

      {
        email: email.value,
        password: password.value
      }
    )

    successMessage.value =
      response.data.message

    setTimeout(() => {

      router.push('/login')

    }, 2000)

  } catch (error) {

    console.log(error)

    if (error.response?.data?.message) {

      errorMessage.value =
        error.response.data.message

    } else {

      errorMessage.value =
        'Password reset failed'
    }

  } finally {

    loading.value = false
  }
}

</script>

<template>

  <div class="forgot-container">

    <div class="forgot-card">

      <h1>Forgot Password</h1>

      <p class="description">

        Enter your email and new password.

      </p>

      <form @submit.prevent="resetPassword">

        <!-- EMAIL -->
        <div class="form-group">

          <label>Email</label>

          <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            required
          />

        </div>

        <!-- PASSWORD -->
        <div class="form-group">

          <label>New Password</label>

          <input
            v-model="password"
            type="password"
            placeholder="Enter new password"
            required
          />

        </div>

        <!-- SUCCESS -->
        <p
          v-if="successMessage"
          class="success-message"
        >
          {{ successMessage }}
        </p>

        <!-- ERROR -->
        <p
          v-if="errorMessage"
          class="error-message"
        >
          {{ errorMessage }}
        </p>

        <!-- BUTTON -->
        <button
          type="submit"
          :disabled="loading"
        >

          {{
            loading
              ? 'Updating...'
              : 'Reset Password'
          }}

        </button>

      </form>

      <!-- LOGIN -->
      <div class="back-login">

        <router-link to="/login">

          Back to Login

        </router-link>

      </div>

    </div>

  </div>

</template>

<style scoped>

* {
  box-sizing: border-box;
}

.forgot-container {

  min-height: 100vh;

  display: flex;

  justify-content: center;

  align-items: center;

  background: #f4f7fc;
}

.forgot-card {

  width: 420px;

  background: white;

  padding: 40px;

  border-radius: 20px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

h1 {

  margin-bottom: 10px;

  color: #0b1b4d;
}

.description {

  margin-bottom: 30px;

  color: #666;
}

.form-group {

  margin-bottom: 20px;
}

.form-group label {

  display: block;

  margin-bottom: 8px;
}

.form-group input {

  width: 100%;

  padding: 14px;

  border: 1px solid #ccd4e0;

  border-radius: 12px;
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

  font-size: 16px;

  cursor: pointer;
}

button:disabled {

  opacity: 0.7;
}

.success-message {

  color: green;

  margin-bottom: 15px;
}

.error-message {

  color: red;

  margin-bottom: 15px;
}

.back-login {

  margin-top: 20px;

  text-align: center;
}

.back-login a {

  color: #4d5dff;

  text-decoration: none;
}

</style>
