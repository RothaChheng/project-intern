<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const currentForm = ref('login')

const username = ref('')
const password = ref('')

const switchForm = (form) => {
  currentForm.value = form
}

/* Login Function */

const handleLogin = () => {

  if (!username.value || !password.value) {

    alert('Please enter username and password')

    return
  }

  // Temporary fake authentication

  router.push('/dashboard')
}
</script>

<template>
  <div class="login-page">

    <!-- Left Panel -->
    <div class="left-panel">

      <div class="brand">
        <h1>SecureBank</h1>
        <p>Your Trust, Our Priority</p>
      </div>

      <div class="illustration">
        <div class="bank-icon">
          🏦
        </div>
      </div>

      <div class="welcome-text">
        <h2>Welcome Back!</h2>

        <p>
          Please access your banking account securely.
        </p>
      </div>

    </div>

    <!-- Right Panel -->
    <div class="right-panel">

      <div class="login-card">

        <!-- LOGIN FORM -->
        <div v-if="currentForm === 'login'">

          <h2>Login to Your Account</h2>

          <form @submit.prevent="handleLogin">

            <label>Username</label>

            <input
              type="text"
              placeholder="Enter your username"
              v-model="username"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Enter your password"
              v-model="password"
            />

            <div class="options">

              <div class="remember">
                <input type="checkbox" />
                <span>Remember me</span>
              </div>

              <a
                href="#"
                @click.prevent="switchForm('forgot')"
              >
                Forgot password?
              </a>

            </div>

            <button>
              Login
            </button>

          </form>

          <p class="bottom-text">
            Don’t have an account?

            <a
              href="#"
              @click.prevent="switchForm('signup')"
            >
              Sign up
            </a>
          </p>

        </div>

        <!-- SIGN UP FORM -->
        <div v-if="currentForm === 'signup'">

          <h2>Create New Account</h2>

          <form>

            <label>Full Name</label>

            <input
              type="text"
              placeholder="Enter your full name"
            />

            <label>Email</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <label>Password</label>

            <input
              type="password"
              placeholder="Create password"
            />

            <button>
              Create Account
            </button>

          </form>

          <p class="bottom-text">
            Already have an account?

            <a
              href="#"
              @click.prevent="switchForm('login')"
            >
              Login
            </a>
          </p>

        </div>

        <!-- FORGOT PASSWORD -->
        <div v-if="currentForm === 'forgot'">

          <h2>Forgot Password</h2>

          <form>

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button>
              Reset Password
            </button>

          </form>

          <p class="bottom-text">

            Remember your password?

            <a
              href="#"
              @click.prevent="switchForm('login')"
            >
              Back to Login
            </a>

          </p>

        </div>

      </div>

      <div class="footer">
        © 2026 SecureBank. All rights reserved.
      </div>

    </div>

  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style scoped>

/* Layout */

.login-page {
  display: flex;
  min-height: 100vh;
  background: #f8fafc;
}

/* Left Panel */

.left-panel {
  width: 45%;
  background: linear-gradient(to bottom, #1d4ed8, #1e3a8a);

  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 50px;
}

.brand h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.brand p {
  opacity: 0.8;
}

.illustration {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
}

.bank-icon {
  font-size: 180px;
}

.welcome-text {
  text-align: center;
}

.welcome-text h2 {
  margin-bottom: 15px;
  font-size: 32px;
}

/* Right Panel */

.right-panel {
  width: 55%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  position: relative;
}

/* Card */

.login-card {
  width: 430px;
  background: white;

  padding: 50px;

  border-radius: 20px;

  box-shadow: 0px 10px 30px rgba(0,0,0,0.08);
}

.login-card h2 {
  margin-bottom: 35px;
  color: #0f172a;
}

/* Form */

label {
  display: block;
  margin-bottom: 8px;
  color: #475569;
  font-size: 14px;
}

input[type="text"],
input[type="password"],
input[type="email"] {

  width: 100%;
  padding: 14px;

  margin-bottom: 20px;

  border: 1px solid #cbd5e1;
  border-radius: 10px;

  outline: none;
}

input:focus {
  border-color: #2563eb;
}

/* Options */

.options {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 25px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 8px;
}

.options a {
  color: #4f46e5;
  text-decoration: none;
}

/* Button */

button {
  width: 100%;
  padding: 15px;

  border: none;
  border-radius: 10px;

  background: linear-gradient(to right, #4f46e5, #2563eb);

  color: white;
  font-size: 16px;

  cursor: pointer;

  transition: 0.3s;
}

button:hover {
  opacity: 0.9;
}

/* Bottom Text */

.bottom-text {
  margin-top: 25px;
  text-align: center;
  color: #64748b;
}

.bottom-text a {
  color: #4f46e5;
  text-decoration: none;
}

/* Footer */

.footer {
  position: absolute;
  bottom: 30px;
  color: #94a3b8;
}

</style>
