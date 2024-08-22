<template>
  <v-container class="login">
    <v-row>
      <v-col cols="12">
        <h1>Login</h1>
      </v-col>
      <v-divider></v-divider>
      <v-col cols="12">
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
          <v-text-field
            label="帳號"
            minlength="4" maxlength="20" counter
            v-model="account.value.value"
            :error-messages="account.errorMessage.value"
          ></v-text-field>
          <v-text-field
            label="密碼"
            minlength="4" maxlength="20" counter
            type="password"
            v-model="password.value.value"
            :error-messages="password.errorMessage.value"
          ></v-text-field>
          <div class="text-center">
            <v-btn class="login-btn" type="submit" color="black" :loading="isSubmitting">登入</v-btn>
            <a href="#"><p class="text-end" style="padding-top: 10px; padding-bottom: 10px;">忘記密碼</p></a>
            <v-btn class="register-btn" color="black"  to="/register">新會員註冊</v-btn>
          </div>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import validator from 'validator'
import { definePage } from 'vue-router/auto'
import { useUserStore } from '@/stores/user'
import { useSnackbar } from 'vuetify-use-dialog'

definePage({
  meta: {
    title: 'qwiyeo | 登入',
    login: false,
    admin: false
  }
})

const router = useRouter()
const user = useUserStore()
const createSnackbar = useSnackbar()

const schema = yup.object({
  account: yup
    .string()
    .required('使用者帳號必填')
    .min(4, '使用者帳號長度不符')
    .max(20, '使用者帳號長度不符')
    .test(
      // .test(自訂驗證名稱, 錯誤訊息, 驗證 function)
      'isAlphanumeric', '使用者帳號格式錯誤',
      (value) => {
        return validator.isAlphanumeric(value)
      }
    ),
  password: yup
    .string()
    .required('使用者密碼必填')
    .min(4, '使用者密碼長度不符')
    .max(20, '使用者密碼長度不符')
})

const { handleSubmit, isSubmitting } = useForm({
  validationSchema: schema
})
const account = useField('account')
const password = useField('password')

const submit = handleSubmit(async (values) => {
  const result = await user.login(values)
  if (result === '登入成功') {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'green'
      }
    })
    router.push('/')
  } else {
    createSnackbar({
      text: result,
      snackbarProps: {
        color: 'red'
      }
    })
  }
})
</script>

<style scoped>
.login {
  max-width: 500px;
  margin: 0 auto;
}
.login-btn {
  width: 100%;
  height: 50px;
}

.register-btn {
  width: 100%;
  height: 50px;
}
</style>
