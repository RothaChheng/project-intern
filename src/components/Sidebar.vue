<script setup>
import { useRouter } from 'vue-router'

import {
  LayoutDashboard,
  Send,
  ReceiptText,
  User,
  LogOut,
  Landmark
} from 'lucide-vue-next'

const router = useRouter()

const handleLogout = () => {

  // Remove fake session
  localStorage.removeItem('isAuthenticated')

  // Redirect to login
  router.push('/login')
}

</script>

<template>

  <div class="sidebar">

    <!-- Top Section -->
    <div>

      <!-- Logo -->
      <div class="logo-section">

        <div class="logo-icon">
          <Landmark :size="28" />
        </div>

        <div>
          <h2>SecureBank</h2>
          <p>Digital Banking</p>
        </div>

      </div>

      <!-- Menu -->
      <ul class="menu">

        <router-link
          to="/dashboard"
          active-class="active-link"
        >
          <li>

            <LayoutDashboard :size="20" />

            <span>Dashboard</span>

          </li>
        </router-link>

        <router-link
          to="/transfer"
          active-class="active-link"
        >
          <li>

            <Send :size="20" />

            <span>Transfer Money</span>

          </li>
        </router-link>

        <router-link
          to="/transactions"
          active-class="active-link"
        >
          <li>

            <ReceiptText :size="20" />

            <span>Transactions</span>

          </li>
        </router-link>

        <router-link
          to="/profile"
          active-class="active-link"
        >
          <li>

            <User :size="20" />

            <span>Profile</span>

          </li>
        </router-link>

      </ul>

    </div>

    <!-- Logout -->
    <button class="logout-btn" @click="handleLogout">

      <LogOut :size="18" />

      Logout

    </button>

  </div>

</template>

<style scoped>

/* Sidebar */

.sidebar {
  width: 270px;
  min-height: 100vh;

  background: linear-gradient(
    to bottom,
    #0f172a,
    #1e293b
  );

  color: white;

  padding: 30px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Logo */

.logo-section {
  display: flex;
  align-items: center;
  gap: 15px;

  margin-bottom: 50px;
}

.logo-icon {
  width: 55px;
  height: 55px;

  border-radius: 14px;

  background: linear-gradient(
    to right,
    #2563eb,
    #4f46e5
  );

  display: flex;
  justify-content: center;
  align-items: center;
}

.logo-section h2 {
  font-size: 24px;
}

.logo-section p {
  font-size: 13px;
  color: #94a3b8;
}

/* Menu */

.menu {
  list-style: none;
  padding: 0;
}

.menu a {
  text-decoration: none;
  color: white;
}

.menu li {
  display: flex;
  align-items: center;
  gap: 14px;

  padding: 15px;
  margin-bottom: 12px;

  border-radius: 12px;

  cursor: pointer;

  transition: 0.3s;
}

.menu li:hover {
  background: #2563eb;
}

/* Active Menu */

.active-link li {
  background: linear-gradient(
    to right,
    #2563eb,
    #4f46e5
  );

  box-shadow: 0px 5px 15px rgba(37,99,235,0.3);
}

/* Logout */

.logout-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;

  padding: 14px;

  border: none;
  border-radius: 12px;

  background: #dc2626;
  color: white;

  cursor: pointer;

  transition: 0.3s;
}

.logout-btn:hover {
  background: #b91c1c;
}

</style>
