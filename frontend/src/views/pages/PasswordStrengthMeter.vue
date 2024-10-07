<template>
    <div class="password-strength-meter">
      <div class="strength-bars">
        <div v-for="n in 4" :key="n" :class="['strength-bar', { active: strength >= n }]"></div>
      </div>
      <div class="strength-text">{{ strengthText }}</div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, computed, watch } from 'vue'
  
  export default defineComponent({
    name: 'PasswordStrengthMeter',
    props: {
      password: {
        type: String,
        required: true,
      },
    },
    emits: ['strength-updated'],
    setup(props, { emit }) {
      const strength = computed(() => {
        const { password } = props
        let score = 0
  
        if (password.length >= 8) score++
        if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++
        if (/\d/.test(password)) score++
        if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) score++
  
        return score
      })
  
      const strengthText = computed(() => {
        switch (strength.value) {
          case 0: return 'Very Weak'
          case 1: return 'Weak'
          case 2: return 'Medium'
          case 3: return 'Strong'
          case 4: return 'Very Strong'
          default: return ''
        }
      })
  
      watch(strength, (newStrength) => {
        emit('strength-updated', newStrength)
      })
  
      return {
        strength,
        strengthText,
      }
    },
  })
  </script>
  
  <style scoped>
  .password-strength-meter {
    margin-top: 0.5rem;
  }
  
  .strength-bars {
    display: flex;
    gap: 5px;
    margin-bottom: 0.25rem;
  }
  
  .strength-bar {
    height: 5px;
    flex-grow: 1;
    background-color: #e0e0e0;
    transition: background-color 0.3s ease;
  }
  
  .strength-bar.active:nth-child(1) { background-color: #ff4d4d; }
  .strength-bar.active:nth-child(2) { background-color: #ffa64d; }
  .strength-bar.active:nth-child(3) { background-color: #ffff4d; }
  .strength-bar.active:nth-child(4) { background-color: #4dff4d; }
  
  .strength-text {
    font-size: 0.8rem;
    color: #666;
  }
  </style>