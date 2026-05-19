<template>

  <div class="navbar">

    <h2>{{ title }}</h2>

    <div class="user-box">

      <div class="avatar">
        JD
      </div>

      <div>
        <h4>John Doe</h4>
        <p>Customer</p>
      </div>

    </div>

  </div>

</template>

<script setup>

defineProps({
  title: String
})

</script>

<style scoped>

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 30px;
}

.user-box {
  display: flex;
  align-items: center;
  gap: 10px;
}

.avatar {
  width: 45px;
  height: 45px;

  border-radius: 50%;

  background: #2563eb;
  color: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
}

.user-box p {
  color: #64748b;
  font-size: 14px;
}

</style>
