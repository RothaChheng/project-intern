<template>

  <div class="layout">

    <Sidebar />

    <div class="main-content">

      <Navbar :title="title" />

      <slot />

    </div>

  </div>

</template>

<script setup>

import Sidebar from '../components/Sidebar.vue'
import Navbar from '../components/Navbar.vue'

defineProps({
  title: String
})

</script>

<style scoped>

.layout {
  display: flex;
}

.main-content {
  flex: 1;
  padding: 30px;
  background: #f8fafc;
  min-height: 100vh;
}

</style>
