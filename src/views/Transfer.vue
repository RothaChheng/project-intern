<script setup>

import DashboardLayout from '../layouts/DashboardLayout.vue'

defineOptions({
  name: 'TransferMoney'
})

</script>

<template>

  <DashboardLayout title="Transfer Money">

    <div class="transfer-card">

      <label>Receiver Account</label>

      <input
        type="text"
        placeholder="Enter account number"
      />

      <label>Amount</label>

      <input
        type="number"
        placeholder="Enter amount"
      />

      <label>Transfer Note</label>

      <textarea
        placeholder="Optional note"
      ></textarea>

      <button>
        Send Money
      </button>

    </div>

  </DashboardLayout>

</template>

<style scoped>

.transfer-card {
  max-width: 600px;

  background: white;
  padding: 35px;

  border-radius: 20px;

  box-shadow: 0px 5px 20px rgba(0,0,0,0.05);
}

label {
  display: block;
  margin-bottom: 10px;
}

input,
textarea {
  width: 100%;

  padding: 14px;
  margin-bottom: 20px;

  border: 1px solid #cbd5e1;
  border-radius: 10px;
}

button {
  width: 100%;

  padding: 15px;

  border: none;
  border-radius: 10px;

  background: linear-gradient(to right, #4f46e5, #2563eb);

  color: white;

  cursor: pointer;
}

</style>
