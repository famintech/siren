<template>
  <div class="container-fluid vh-100">
    <div class="row">
      <div class="col-xl-12">
        <div class="card">
          <div class="card-body p-0">
            <div class="table-responsive active-projects manage-client">
              <div class="tbl-caption">
                <h4 class="heading mb-0">Performance Indicators</h4>
              </div>
              <table id="empoloyees-tblwrapper" class="table mb-0">
                <thead>
                  <tr>
                    <th @click="sortingArr">Title</th>
                    <th @click="sortingArr">Designation</th>
                    <th @click="sortingArr">Rating</th>
                    <th @click="sortingArr">Added By</th>
                    <th @click="sortingArr">Created Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr
                    v-for="(
                      { name, position, rating, managerName, reviewDate }, ind
                    ) in paginatedData"
                    :key="ind"
                  >
                    <td>
                      <a href="javascript:void(0)">{{ name }}</a>
                    </td>
                    <td>
                      <span>{{ position }}</span>
                    </td>
                    <td>
                      <i class="fa-sharp fa-solid fa-star text-orange me-1"></i>
                      <i class="fa-sharp fa-solid fa-star text-orange me-1"></i>
                      <i class="fa-solid fa-star-half-stroke text-orange me-1"></i>
                      <i class="fa-solid fa-star-half-stroke text-orange"></i>
                      {{ ' ' }}
                      <span>{{ rating }}</span>
                    </td>
                    <td>
                      <span>{{ managerName }}</span>
                    </td>
                    <td>
                      <span>{{ reviewDate }}</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex align-items-center justify-content-between">
                <div class="dataTables_info">
                  Showing {{ paginationLength - 10 }} to {{ paginationLength - 1 }} of
                  {{ performanceTable.length }} entries
                </div>
                <div
                  class="dataTables_paginate paging_simple_numbers"
                  id="empoloyees-tblwrapper_paginate"
                >
                  <a
                    class="paginate_button previous"
                    id="empoloyees-tblwrapper_previous"
                    @click="backPage"
                    ><i class="fa-solid fa-angle-left"></i></a
                  ><span>
                    <a
                      class="paginate_button"
                      v-for="item in Math.ceil(data.length / perPage)"
                      :key="item"
                      :style="`background-color:${addActive == item ? 'var(--primary);' : ''};color:${addActive == item ? '#fff !important' : ''}`"
                      @click="() => goToPage(item)"
                      >{{ item }}</a
                    >
                  </span>
                  <a
                    class="paginate_button next"
                    @click="nextPage"
                    aria-controls="empoloyees-tblwrapper"
                    data-dt-idx="3"
                    tabindex="0"
                    id="empoloyees-tblwrapper_next"
                    ><i class="fa-solid fa-angle-right"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { performanceTable } from '@/elements/TableArrayData'
import handlePagination from '@/layouts/HandlePaginatin'
import { defineComponent } from 'vue'
import { useStore } from '@/stores/Store'
import { storeToRefs } from 'pinia'

export default defineComponent({
  name: 'performance_',
  data() {
    return {
      performanceTable
    }
  },
  setup() {
    const { paginationLength } = storeToRefs(useStore())
    const handlePaginationValue = handlePagination(performanceTable, 11)
    return {
      ...handlePaginationValue,
      paginationLength
    }
  }
})
</script>

<style scoped>
.paginate_button {
  height: 24px;
  width: 24px;
  padding: 0;
  margin-left: 0rem;
  margin: 0 0.125rem;
  line-height: 25px;
  text-align: center;
  font-size: 13px;
  border-radius: 0.375rem;
  border: 0;
  color: #0d99ff !important;
  cursor: pointer;
  box-shadow: none;
  box-sizing: border-box;
  display: inline-block;
}

.paginate_button:hover {
  color: var(--primary);
  background: var(--rgba-primary-1);
}
</style>
