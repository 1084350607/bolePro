<template>
  <div class="d-flex flex-column justify-content-center align-items-center">
    <h1>Sign up</h1>
    <form @submit.prevent="handleSubmit" class="flex-column justify-content-center w-50">
      <div class="form-group">
        <label>Email</label>
        <input v-model="user.email" type="text" class="form-control" />
        <div class="error" v-if="user.email && errors.email">{{ errors.email }}</div>
      </div>
      <div class="form-group">
        <label>password</label>
        <input v-model="user.psw" type="password" class="form-control" />
        <div class="error" v-if="user.psw && errors.psw">{{ errors.psw }}</div>
      </div>
      <div class="my-3">
        <button type="submit" class="btn btn-primary">Sign up</button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue"
import { useStore } from "../../store"
import SignupValidations, { ErrorType } from "./signupValidations"

const user = reactive({
  email: "",
  psw: "",
})
let errors = reactive<ErrorType>({})

const handleSubmit = () => {
  let SignUpalidations = new SignupValidations(user.email, user.psw, 10)
  let validationError = SignUpalidations.checkSignupValidations()
  errors.email = validationError?.email
  errors.psw = validationError?.psw
}
</script>

<style scoped>
.error {
  font-size: small;
  color: red;
}
</style>
