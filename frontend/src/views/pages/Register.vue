<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { RouterLink, useRouter } from 'vue-router'
import axios from 'axios'

export default defineComponent({
  name: 'register_',
  components: { RouterLink },
  setup() {
    const router = useRouter()
    const show = ref(false)
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const password_confirmation = ref('')
    const errors = ref<Record<string, string[]> | null>(null)
    const isSubmitting = ref(false)

    const passwordMismatch = computed(() => {
      return password.value !== password_confirmation.value && password_confirmation.value !== ''
    })

    const handleSubmit = async () => {
      errors.value = null
      isSubmitting.value = true

      if (passwordMismatch.value) {
        errors.value = { password_confirmation: ['The password confirmation does not match.'] }
        isSubmitting.value = false
        return
      }

      try {
        const response = await axios.post('http://localhost/api/register', {
          name: name.value,
          email: email.value,
          password: password.value,
          password_confirmation: password_confirmation.value
        })

        console.log(response.data)
        // Handle successful registration (e.g., redirect to login page)
        router.push('/page-login')
      } catch (err: any) {
        // Handle registration errors
        if (err.response && err.response.data && err.response.data.errors) {
          errors.value = err.response.data.errors
        } else {
          errors.value = { general: ['Registration failed. Please try again.'] }
        }
        console.error(err)
      } finally {
        isSubmitting.value = false
      }
    }

    return {
      show,
      name,
      email,
      password,
      password_confirmation,
      errors,
      isSubmitting,
      handleSubmit,
      passwordMismatch
    }
  }
})
</script>

<template>
  <div class="authincation h-100">
    <div class="container-fluid h-100">
      <div class="row h-100">
        <div class="col-lg-6 col-md-7 col-sm-12 mx-auto align-self-center">
          <div class="login-form">
            <div class="text-center">
              <h3 class="title">Sign up your account</h3>
              <p>Sign in to your account to start using PPZ</p>
            </div>
            <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label class="mb-1 text-dark">Username</label>
        <input v-model="name" type="text" class="form-control" :class="{ 'is-invalid': errors?.name }"
          placeholder="Enter your username" required />
        <div v-if="errors?.name" class="invalid-feedback">
          {{ errors.name[0] }}
        </div>
      </div>
      <div class="mb-4">
        <label class="mb-1 text-dark">Email</label>
        <input v-model="email" type="email" class="form-control" :class="{ 'is-invalid': errors?.email }"
          placeholder="Enter your email" required />
        <div v-if="errors?.email" class="invalid-feedback">
          {{ errors.email[0] }}
        </div>
      </div>
      <div class="mb-4">
        <label class="mb-1 text-dark">Password</label>
        <input v-model="password" :type="show ? 'text' : 'password'" class="form-control"
          :class="{ 'is-invalid': errors?.password }" placeholder="Enter your password" required />
        <div v-if="errors?.password" class="invalid-feedback">
          {{ errors.password[0] }}
        </div>
      </div>
      <div class="mb-4">
        <label class="mb-1 text-dark">Confirm Password</label>
        <input v-model="password_confirmation" :type="show ? 'text' : 'password'" class="form-control"
          :class="{ 'is-invalid': errors?.password_confirmation || passwordMismatch }"
          placeholder="Confirm your password" required />
        <div v-if="errors?.password_confirmation" class="invalid-feedback">
          {{ errors.password_confirmation[0] }}
        </div>
        <div v-else-if="passwordMismatch" class="invalid-feedback">
          The password confirmation does not match.
        </div>
      </div>
              <div class="form-row d-flex justify-content-between mt-4 mb-2">
                <div class="mb-4">
                  <div class="form-check custom-checkbox mb-3">
                    <input type="checkbox" class="form-check-input" id="customCheckBox1" required />
                    <label class="form-check-label" for="customCheckBox1">Remember my preference</label>
                  </div>
                </div>
                <div class="mb-4">
                  <RouterLink to="/page-login" class="btn-link text-primary">Sign in</RouterLink>
                </div>
              </div>
              <div class="text-center mb-4">
                <button type="submit" class="btn btn-primary btn-block" :disabled="isSubmitting">
                  {{ isSubmitting ? 'Signing Up...' : 'Sign Up' }}
                </button>
              </div>
              <h6 class="login-title"><span>Or continue with</span></h6>

              <div class="mb-3">
                <ul class="d-flex align-self-center justify-content-center">
                  <li>
                    <a target="_blank" href="https://www.facebook.com/" class="fab fa-facebook-f btn-facebook"></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.google.com/"
                      class="fab fa-google-plus-g btn-google-plus mx-2"></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://www.linkedin.com/"
                      class="fab fa-linkedin-in btn-linkedin me-2"></a>
                  </li>
                  <li>
                    <a target="_blank" href="https://twitter.com/" class="fab fa-twitter btn-twitter"></a>
                  </li>
                </ul>
              </div>
              <p class="text-center">
                Not registered?
                <RouterLink class="btn-link text-primary" to="/page-register">Register</RouterLink>
              </p>
            </form>
          </div>
        </div>
        <div class="col-xl-6 col-lg-6">
          <div class="pages-left h-100">
            <div class="login-content">
              <RouterLink to="/"><img src="../../assets/images/logo-full.png" class="mb-3 logo-dark" alt="" />
              </RouterLink>
              <RouterLink to="/"><img src="../../assets/images/logi-white.png" class="mb-3 logo-light" alt="" />
              </RouterLink>
              <p>
                CRM dashboard uses line charts to visualize customer-related metrics and trends over
                time.
              </p>
            </div>
            <div class="login-media text-center">
              <img src="../../assets/images/login.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.invalid-feedback {
  display: block;
  width: 100%;
  margin-top: 0.25rem;
  font-size: 100%;
  color: #dc3545;
}

.form-control.is-invalid {
  border-color: #dc3545;
  background-image: none;
}
</style>
