<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'

const router = useRouter()

const email = ref('')
const password = ref('')

const loading = ref(false)
const errorMessage = ref('')

const login = async () => {

  errorMessage.value = ''
  loading.value = true

  try {

    const response = await axios.post(
      'http://202.133.94.241:8000/api/login',
      {
        email: email.value,
        password: password.value
      }
    )

    // Save token
    localStorage.setItem(
      'token',
      response.data.token
    )

    // Save user
    localStorage.setItem(
      'user',
      JSON.stringify(response.data.user)
    )

    // Redirect dashboard
    router.push('/dashboard')

  } catch (error) {

    console.log(error)

    if (error.response?.data?.message){

      errorMessage.value =
        error.response.data.message
    } else {
      errorMessage.value =
        'Login failed'
    }

  } finally {

    loading.value = false
  }
}
</script>

<template>

  <div class="login-container">

    <!-- LEFT PANEL -->
    <div class="left-panel">

      <div class="brand">

        <h1>SecureBank</h1>

        <p>Your Trust, Our Priority</p>

      </div>

      <div class="welcome-content">

        <h2>Welcome Back!</h2>

        <p>
          Securely access your banking dashboard
          and manage your financial activities.
        </p>

      </div>

    </div>

    <!-- RIGHT PANEL -->
    <div class="right-panel">

      <div class="login-card">

        <h2>Login to Your Account</h2>

        <form @submit.prevent="login">

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

            <label>Password</label>

            <input
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />

          </div>

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
                ? 'Logging in...'
                : 'Login'
            }}

          </button>

        </form>

        <!-- REGISTER -->
        <div class="signup-link">

          <span>
            Don't have an account?
          </span>

          <router-link to="/register">
            Sign up
          </router-link>

        </div>

        <div class="forgot-password">

          <router-link to="/forgot-password">
            Forgot Password?
          </router-link>

        </div>

      </div>

    </div>

  </div>

</template>

<style scoped>

* {
  box-sizing: border-box;
}

.login-container {

  display: flex;

  min-height: 100vh;

  font-family: Arial, sans-serif;
}

/* LEFT */

.left-panel {

  width: 45%;

  background: linear-gradient(
    135deg,
    #081f5c,
    #334dff
  );

  color: white;

  display: flex;

  flex-direction: column;

  justify-content: center;

  padding: 60px;
}

.brand h1 {

  font-size: 42px;

  margin-bottom: 10px;
}

.brand p {

  opacity: 0.8;
}

.welcome-content {

  margin-top: 80px;
}

.welcome-content h2 {

  font-size: 36px;

  margin-bottom: 20px;
}

.welcome-content p {

  line-height: 1.7;

  opacity: 0.9;
}

/* RIGHT */

.right-panel {

  width: 55%;

  display: flex;

  justify-content: center;

  align-items: center;

  background: #f4f7fc;
}

.login-card {

  width: 420px;

  background: white;

  padding: 40px;

  border-radius: 20px;

  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
}

.login-card h2 {

  margin-bottom: 30px;

  color: #0b1b4d;
}

.form-group {

  margin-bottom: 20px;
}

.form-group label {

  display: block;

  margin-bottom: 8px;

  color: #444;
}

.form-group input {

  width: 100%;

  padding: 14px;

  border: 1px solid #ccd4e0;

  border-radius: 12px;

  font-size: 15px;

  transition: 0.3s;
}

.form-group input:focus {

  outline: none;

  border-color: #4d5dff;
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

  font-size: 17px;

  cursor: pointer;

  transition: 0.3s;
}

button:hover {

  opacity: 0.9;
}

button:disabled {

  opacity: 0.7;

  cursor: not-allowed;
}

.error-message {

  color: red;

  margin-bottom: 15px;

  font-size: 14px;
}

.signup-link {

  margin-top: 20px;

  text-align: center;
}

.signup-link a {

  margin-left: 5px;

  color: #4d5dff;

  text-decoration: none;

  font-weight: bold;
}

.forgot-password {

  text-align: center;

  margin-bottom: 20px;
}

.forgot-password a {

  color: #4d5dff;

  text-decoration: none;

  font-size: 14px;
}

.forgot-password a:hover {

  text-decoration: underline;
}


/* RESPONSIVE */

@media (max-width: 900px) {

  .login-container {

    flex-direction: column;
  }

  .left-panel,
  .right-panel {

    width: 100%;
  }

  .left-panel {

    padding: 40px;
  }

  .login-card {

    width: 90%;
  }
}

</style>
