<template>
  <CommonNavbar page="Plugins" path="Toastr" />
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Toastr</h4>
          </div>
          <div class="card-body">
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-top-right"
              @click="notify('top-right')"
            >
              Top Right
            </button>
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-bottom-right"
              @click="notify('bottom-right')"
            >
              Bottom Right
            </button>
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-bottom-left"
              @click="notify('bottom-left')"
            >
              Bottom Left
            </button>
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-top-left"
              @click="notify('top-left')"
            >
              Top Left
            </button>
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-top-full-width"
              @click="notify('full-width')"
            >
              Top Full Width
            </button>
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-bottom-full-width"
              @click="notify('bottom-full-width')"
            >
              Bottom Full Width
            </button>
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-top-center"
              @click="notify('success-top-center')"
            >
              Top Center
            </button>
            <button
              type="button"
              class="btn btn-dark mb-2 me-2"
              id="toastr-success-bottom-center"
              @click="notify('success-bottom-center')"
            >
              Bottom Center
            </button>
            <button
              type="button"
              class="btn btn-info mb-2 me-2"
              id="toastr-info-top-right"
              @click="notify('info')"
            >
              Info
            </button>
            <button
              type="button"
              class="btn btn-warning mb-2 me-2"
              id="toastr-warning-top-right"
              @click="notify('warning')"
            >
              Warning
            </button>
            <button
              type="button"
              class="btn btn-danger mb-2 me-2"
              id="toastr-danger-top-right"
              @click="notify('error')"
            >
              Error
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CommonNavbar from '@/layouts/CommonNavbar.vue'
import { defineComponent } from 'vue'
import { toast } from 'vue3-toastify'

export default defineComponent({
  name: '',
  components: { CommonNavbar },
  setup() {
    return {}
  },
  methods: {
    notify(toastType: string) {
      switch (toastType) {
        case 'top-right':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.TOP_RIGHT
          })
          break
        case 'bottom-right':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_RIGHT
          })
          break
        case 'bottom-left':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_LEFT
          })
          break
        case 'top-left':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.TOP_LEFT
          })
          break
        case 'full-width':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER
          })
          break
        case 'bottom-full-width':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          break
        case 'success-top-center':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.TOP_CENTER
          })
          break
        case 'success-bottom-center':
          toast('This is a success massege', {
            autoClose: 1000,
            position: toast.POSITION.BOTTOM_CENTER
          })
          break
        case 'info':
          toast.info('This is a info massege', {
            autoClose: 1000
          })
          break
        case 'warning':
          toast.warning('This is a warning massege', {
            autoClose: 1000
          })
          break
        case 'error':
          toast.error('This is a error massege', {
            autoClose: 1000
          })
          break

        default:
          break
      }
    }
  }
})
</script>

<style scoped></style>
