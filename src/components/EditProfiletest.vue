<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular" prepend-icon="mdi-account" text="編輯個人資料" variant="tonal" v-bind="activatorProps">
        </v-btn>
      </template>

      <v-card>
        <v-card-title>個人資料</v-card-title>
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="6" sm="6">
              <v-text-field v-model="profileData.name" label="Name*" required></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select v-model="profileData.gender" :items="['男', '女']" label="Gender*" required></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select v-model="profileData.age" :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select v-model="profileData.job" :items="['上班族', '學生', '家管', '其他']" label="Job*" required></v-select>
            </v-col>

            <v-col cols="12" md="12" sm="6">
              <v-text-field v-model="profileData.phone" label="Phone*" required></v-text-field>
            </v-col>

            <v-col cols="12" md="12" sm="6">
              <v-text-field v-model="profileData.email" label="Email*" required></v-text-field>
            </v-col>

            <v-col cols="12" md="12" sm="6">
              <v-text-field v-model="profileData.address" label="Address*" required></v-text-field>
            </v-col>
          </v-row>
          <small class="text-caption text-medium-emphasis">*必填</small>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>
          <v-btn color="primary" text="Save" variant="tonal" @click="saveProfile"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { useUserStore } from '@/stores/user'

export default {
  data() {
    return {
      dialog: false,
      profileData: {
        name: '',
        gender: '',
        age: '',
        job: '',
        phone: '',
        email: '',
        address: ''
      },
    }
  },
  methods: {
  async saveProfile() {
    const userStore = useUserStore()
    try {
      const result = await userStore.updateProfile(this.profileData)
      console.log(result.text)
      this.dialog = false
    } catch (error) {
      console.error('更新失敗:', error)
    }
  },
},
  mounted() {
    const userStore = useUserStore()
    userStore.profile()
    this.profileData.name = userStore.account
    this.profileData.email = userStore.email
    this.profileData.phone = userStore.phone
    this.profileData.address = userStore.address
    this.profileData.age = userStore.age
    this.profileData.gender = userStore.gender
    this.profileData.job = userStore.job
    console.log(this.profileData)
  },
}
</script>
