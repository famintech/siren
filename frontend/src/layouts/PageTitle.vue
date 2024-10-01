<template>
  <div class="page-titles">
    <ol class="breadcrumb">
      <li>
        <h5 class="bc-title">{{ mainTitle }}</h5>
      </li>
      <li class="breadcrumb-item">
        <a href="javascript:void(0)">
          <span v-html="homeIcon"></span>
          Home
        </a>
      </li>
      <li class="breadcrumb-item active">
        <a href="javascript:void(0)">{{ title }}</a>
      </li>
    </ol>
    <a
      class="text-primary fs-13"
      data-bs-toggle="offcanvas"
      href="#offcanvasExample1"
      role="button"
      aria-controls="offcanvasExample1"
      >+ Add Task</a
    >
  </div>
</template>

<script lang="ts">
import { SVGImage } from '@/constent/Theme'
import router from '@/router'
import { defineComponent, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'pageTitle',
  data() {
    return SVGImage
  },
  setup() {
    const title = ref('Dashboard')
    const mainTitle = ref('Dashboard')
    watchEffect(() => {
      const pageTitle = router.currentRoute.value.fullPath.split('/')
      if (pageTitle[1] == '') {
        title.value = 'Dashboard'
      } else {
        title.value = pageTitle[1].charAt(0).toUpperCase() + pageTitle[1].slice(1)
      }
      if (pageTitle[1] == '') {
        mainTitle.value = 'Dashboard'
      } else if (router.currentRoute.value.query) {
        mainTitle.value = 'Dashboard'
        title.value = 'Dashboard'
      } else {
        let titleVal = pageTitle[1].charAt(0).toUpperCase() + pageTitle[1].slice(1)
        if (titleVal.indexOf('-')) {
          mainTitle.value = titleVal.split('-')[0]
        }
      }
    })
    return { title, mainTitle }
  }
})
</script>

<style scoped></style>
