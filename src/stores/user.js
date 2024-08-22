// Utilities
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import UserRole from '@/enums/UserRole.js'
import { useApi } from '@/composables/axios'

export const useUserStore = defineStore('user', () => {
// teacher
  const { api, apiAuth } = useApi()

  const token = ref('')
  const account = ref('')
  const email = ref('')
  const role = ref(UserRole.USER)
  const cart = ref(0)

  const gender = ref('')
  const age = ref('')
  const job = ref('')
  const phone = ref('')
  const address = ref('')


  const isLogin = computed(() => {
    return token.value.length > 0
  })
  const isAdmin = computed(() => {
    return role.value === UserRole.ADMIN
  })

  const login = async (values) => {
    try {
      const { data } = await api.post('/user/login', values)
      token.value = data.result.token
      account.value = data.result.account
      email.value = data.result.email
      role.value = data.result.role
      cart.value = data.result.cart
      gender.value = data.result.gender
      age.value = data.result.age
      job.value = data.result.job
      phone.value = data.result.phone
      address.value = data.result.address

      await profile() // 呼叫 profile() 方法以重新加載用戶資料

      return '登入成功'
    } catch (error) {
      console.log(error)
      return error?.response?.data?.message || '發生錯誤，請稍後再試'
    }
  }

  const profile = async () => {
    if (!isLogin.value) return

    try {
      const { data } = await apiAuth.get('/user/profile')
      account.value = data.result.account
      email.value = data.result.email
      role.value = data.result.role
      cart.value = data.result.cart
      age.value = data.result.age
      job.value = data.result.job
      phone.value = data.result.phone
      address.value = data.result.address
      gender.value = data.result.gender
    } catch (error) {
      token.value = ''
      account.value = ''
      email.value = ''
      role.value = UserRole.USER
      cart.value = 0
      age.value = ''
      job.value = ''
      phone.value = ''
      address.value = ''
      gender.value = ''
    }
  }

  const logout = async () => {
    try {
      await apiAuth.delete('/user/logout')
    } catch (error) {
      console.log(error)
    }
    token.value = ''
    account.value = ''
    email.value = ''
    role.value = UserRole.USER
    cart.value = 0
    age.value = ''
    job.value = ''
    phone.value = ''
    address.value = ''
    gender.value = ''
  }

  const addCart = async (product, quantity) => {
    try {
      const { data } = await apiAuth.patch('/user/cart', {
        product, quantity
      })
      cart.value = data.result
      return {
        color: 'green',
        text: '成功'
      }
    } catch (error) {
      return {
        color: 'red',
        text: error?.response?.data?.message || '發生錯誤，請稍後再試'
      }
    }
  }

  const checkout = async () => {
    try {
      await apiAuth.post('/order')
      cart.value = 0
      return {
        color: 'green',
        text: '成功'
      }
    } catch (error) {
      return {
        color: 'red',
        text: error?.response?.data?.message || '發生錯誤，請稍後再試'
      }
    }
  }

  const updateProfile = async (profileData) => {
    try {
      const { data } = await apiAuth.put('/user/profile', profileData)
      // 更新成功後重新加載資料
      await profile() // 呼叫 profile() 方法以重新加載用戶資料
      return { text: '更新成功', ...data }
    } catch (error) {
      console.error('更新失敗:', error)
      return { text: error?.response?.data?.message || '更新失敗' }
    }
  }
  
  return {
    token,
    account,
    email,
    age,
    job,
    phone,
    address,
    gender,
    role,
    cart,
    isLogin,
    isAdmin,
    login,
    profile,
    logout,
    addCart,
    checkout,
    updateProfile
  }
}, {
  persist: {
    key: 'shop',
    paths: ['token']
  }
})
