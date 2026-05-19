<script setup>

import DashboardLayout from '../layouts/DashboardLayout.vue'

defineOptions({
  name: 'TransactionsView'
})

</script>

<template>

  <DashboardLayout title="Transactions">

    <div class="transactions-card">

      <table>

        <thead>

          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
          </tr>

        </thead>

        <tbody>

          <tr>
            <td>2026-05-15</td>
            <td>Transfer to Michael</td>
            <td>Transfer</td>
            <td class="negative">- $500</td>
          </tr>

          <tr>
            <td>2026-05-14</td>
            <td>Salary Deposit</td>
            <td>Income</td>
            <td class="positive">+ $2,500</td>
          </tr>

          <tr>
            <td>2026-05-13</td>
            <td>Electricity Bill</td>
            <td>Payment</td>
            <td class="negative">- $120</td>
          </tr>

        </tbody>

      </table>

    </div>

  </DashboardLayout>

</template>

<style scoped>

.transactions-card {
  background: white;

  padding: 30px;

  border-radius: 20px;

  box-shadow: 0px 5px 20px rgba(0,0,0,0.05);
}

table {
  width: 100%;
}

th,
td {
  padding: 18px;
  text-align: left;
}

.positive {
  color: green;
}

.negative {
  color: red;
}

</style>
