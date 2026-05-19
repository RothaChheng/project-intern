<script setup>
defineOptions({
  name: 'DashboardView',
})

import DashboardLayout from '../layouts/DashboardLayout.vue'
</script>

<template>
  <DashboardLayout title="Dashboard">
    <!-- Top Grid -->
    <div class="top-grid">
      <!-- Balance Card -->
      <div class="balance-card">
        <div class="card-header">
          <h3>Total Balance</h3>
        </div>

        <h1>$ 28,500.00</h1>

        <p>Available Balance</p>

        <!-- Fake Graph -->
        <div class="graph-line"></div>
      </div>

      <!-- Quick Actions -->
      <div class="quick-actions">
        <h3>Quick Actions</h3>

        <div class="actions-grid">
          <div class="action-item">
            <div class="action-icon">↗</div>
            <p>Send Money</p>
          </div>

          <div class="action-item">
            <div class="action-icon">💰</div>
            <p>Add Money</p>
          </div>

          <div class="action-item">
            <div class="action-icon">🧾</div>
            <p>Pay Bills</p>
          </div>

          <div class="action-item">
            <div class="action-icon">💳</div>
            <p>My Cards</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Accounts + Transactions -->
    <div class="middle-grid">
      <!-- Accounts -->
      <div class="accounts-section">
        <div class="section-header">
          <h3>My Accounts</h3>

          <span>View All</span>
        </div>

        <div class="account-cards">
          <!-- Savings -->
          <div class="account-card savings">
            <h3>Savings Account</h3>

            <p>**** **** **** 1234</p>

            <span>Balance</span>

            <h2>$ 18,750.50</h2>
          </div>

          <!-- Checking -->
          <div class="account-card checking">
            <h3>Checking Account</h3>

            <p>**** **** **** 5678</p>

            <span>Balance</span>

            <h2>$ 9,809.50</h2>
          </div>
        </div>

        <!-- Spending Overview -->
        <div class="spending-section">
          <div class="section-header">
            <h3>Spending Overview</h3>

            <span>This Month</span>
          </div>

          <div class="spending-content">
            <!-- Fake Chart -->
            <div class="chart-circle">
              <div class="chart-inner">$ 2,650</div>
            </div>

            <!-- Categories -->
            <div class="categories">
              <div class="category">
                <span>Food & Dining</span>
                <strong>$850</strong>
              </div>

              <div class="category">
                <span>Shopping</span>
                <strong>$620</strong>
              </div>

              <div class="category">
                <span>Transport</span>
                <strong>$450</strong>
              </div>

              <div class="category">
                <span>Utilities</span>
                <strong>$350</strong>
              </div>

              <div class="category">
                <span>Others</span>
                <strong>$380</strong>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Transactions -->
      <div class="transactions-section">
        <div class="section-header">
          <h3>Recent Transactions</h3>

          <span>View All</span>
        </div>

        <!-- Transaction -->
        <div class="transaction-item">
          <div>
            <h4>Transfer to Michael Smith</h4>

            <p>May 20, 2024 • 10:30 AM</p>
          </div>

          <strong class="negative"> - $500.00 </strong>
        </div>

        <div class="transaction-item">
          <div>
            <h4>Salary Deposit</h4>

            <p>May 20, 2024 • 09:00 AM</p>
          </div>

          <strong class="positive"> + $2,500.00 </strong>
        </div>

        <div class="transaction-item">
          <div>
            <h4>Electricity Bill</h4>

            <p>May 19, 2024 • 07:45 PM</p>
          </div>

          <strong class="negative"> - $120.00 </strong>
        </div>

        <div class="transaction-item">
          <div>
            <h4>Transfer from Sarah</h4>

            <p>May 19, 2024 • 06:20 PM</p>
          </div>

          <strong class="positive"> + $300.00 </strong>
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
/* Grid Layout */

.top-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 25px;

  margin-bottom: 25px;
}

.middle-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: 25px;
}

/* Cards */

.balance-card,
.quick-actions,
.accounts-section,
.transactions-section,
.spending-section {
  background: white;

  border-radius: 20px;

  padding: 25px;

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}

.card-header,
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}

.balance-card h1 {
  font-size: 42px;
  margin-bottom: 10px;
}

/* Fake Graph */

.graph-line {
  margin-top: 30px;
  height: 90px;

  border-radius: 12px;

  background: linear-gradient(135deg, #c7d2fe, #818cf8);
}

/* Quick Actions */

.actions-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
}

.action-item {
  background: #f8fafc;

  border-radius: 14px;

  padding: 20px;

  text-align: center;

  cursor: pointer;

  transition: 0.3s;
}

.action-item:hover {
  background: #eef2ff;
}

.action-icon {
  font-size: 24px;
  margin-bottom: 10px;
}

/* Accounts */

.account-cards {
  display: flex;
  gap: 20px;

  margin-bottom: 25px;
}

.account-card {
  flex: 1;

  color: white;

  border-radius: 20px;

  padding: 25px;
}

.savings {
  background: linear-gradient(to right, #1e3a8a, #2563eb);
}

.checking {
  background: linear-gradient(to right, #059669, #10b981);
}

.account-card p {
  margin: 15px 0;
}

/* Spending */

.spending-content {
  display: flex;
  align-items: center;
  gap: 30px;
}

.chart-circle {
  width: 180px;
  height: 180px;

  border-radius: 50%;

  background: conic-gradient(
    #4f46e5 0% 30%,
    #06b6d4 30% 50%,
    #10b981 50% 70%,
    #f59e0b 70% 85%,
    #cbd5e1 85% 100%
  );

  display: flex;
  justify-content: center;
  align-items: center;
}

.chart-inner {
  width: 120px;
  height: 120px;

  border-radius: 50%;

  background: white;

  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
}

.categories {
  flex: 1;
}

.category {
  display: flex;
  justify-content: space-between;

  margin-bottom: 15px;
}

/* Transactions */

.transaction-item {
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 18px 0;

  border-bottom: 1px solid #f1f5f9;
}

.transaction-item p {
  color: #64748b;
  margin-top: 5px;
}

.positive {
  color: #16a34a;
}

.negative {
  color: #dc2626;
}
</style>
