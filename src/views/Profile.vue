<script setup>
import axios from 'axios'
import { ref, onMounted, computed } from 'vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

defineOptions({ name: 'ProfileView' })

const fullName = ref('')
const email = ref('')

onMounted(()=> {
  const user = JSON.parse(localStorage.getItem('user'))

  if (user) {
    fullName.value = user.name
    email.value = user.email
  }
})

const initials = computed(()=>{
  if (!fullName.value)
  return ''

  return fullName.value
  .split(' ')
  .map(name => name[0])
  .join('')
  .substring(0, 2)
  .toUpperCase()
})

const currentPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const profileImage = ref(null)

const handleImageUpload = (event) => {
  const file = event.target.files[0]

  if (file) {
    profileImage.value = URL.createObjectURL(file)
  }
}

const handleSaveChanges = async () => {
  if (!fullName.value || !email.value) {
    alert('Please fill all required fields')

    return
  }

  try {
    const token = localStorage.getItem('token')

    const response = await axios.put(

      `${import.meta.env.VITE_API_BASE_URL}/profile`,

      {
        name: fullName.value,
        email: email.value
      },

      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }

    )

    localStorage.setItem(
      'user',
      JSON.stringify(response.data.user)
    )

    alert ('Profile updated successfully')
  } catch (error) {
    console.error(error)

    alert('Failed to update profile')
  }
}
</script>

<template>
  <DashboardLayout title="Profile">
    <div class="profile-container">
      <!-- Left Card -->
      <div class="profile-card">
        <div class="avatar-wrapper">
          <img v-if="profileImage" :src="profileImage" class="avatar-image" />

          <div v-else class="avatar">{{ initials }}</div>
        </div>

        <h2>{{ fullName }}</h2>

        <p>{{ email }}</p>

        <span class="badge"> Verified Customer </span>

        <label class="upload-btn">
          Upload Profile

          <input type="file" hidden @change="handleImageUpload" />
        </label>
      </div>

      <!-- Right Card -->
      <div class="settings-card">
        <h2>Personal Information</h2>

        <label>Full Name</label>

        <input type="text" v-model="fullName" />

        <label>Email Address</label>

        <input type="email" v-model="email" />

        <label>Current Password</label>

        <input type="password" v-model="currentPassword" />

        <label>New Password</label>

        <input type="password" v-model="newPassword" />

        <label>Confirm New Password</label>

        <input type="password" v-model="confirmPassword" />

        <button @click="handleSaveChanges">Save Changes</button>
      </div>
    </div>
  </DashboardLayout>
</template>

<style scoped>
.profile-container {
  display: flex;
  gap: 30px;
}

.profile-card {
  width: 320px;

  background: white;
  padding: 35px;

  border-radius: 20px;

  text-align: center;

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}

.avatar-wrapper {
  margin-bottom: 20px;
}

.avatar,
.avatar-image {
  width: 120px;
  height: 120px;

  border-radius: 50%;

  margin: auto;

  object-fit: cover;
}

.avatar {
  background: #dbeafe;
  color: #2563eb;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 40px;
  font-weight: bold;
}

.profile-card p {
  color: #64748b;
  margin: 10px 0;
}

.badge {
  display: inline-block;

  margin-top: 10px;
  margin-bottom: 20px;

  padding: 8px 15px;

  background: #dcfce7;
  color: #16a34a;

  border-radius: 20px;
  font-size: 14px;
}

.upload-btn {
  display: inline-block;

  padding: 12px 20px;

  background: #2563eb;
  color: white;

  border-radius: 10px;

  cursor: pointer;
}

/* Settings */

.settings-card {
  flex: 1;

  background: white;
  padding: 35px;

  border-radius: 20px;

  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.05);
}

.settings-card h2 {
  margin-bottom: 30px;
}

label {
  display: block;
  margin-bottom: 8px;
}

input {
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
