<template>
  <div class="col-xl-3 col-lg-6 col-sm-5 chat-border mobile-chat chat-left-area">
    <div class="chat-p shaprate">
      <div class="d-flex">
        <img
          src="../../assets/images/contacts/d1.jpg"
          class="avatar avatar-md rounded-circle"
          alt=""
        />
        <div class="ms-2">
          <h6 class="mb-0">K kumar Gaur</h6>
          <span>web Designer</span>
        </div>
      </div>
      <div class="icon-box bg-primary-light">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M17.3389 6.35305L16.8202 5.45298C16.3814 4.69138 15.4089 4.42864 14.6463 4.86564V4.86564C14.2832 5.07949 13.85 5.14017 13.4422 5.03428C13.0344 4.92839 12.6855 4.66464 12.4723 4.30118C12.3352 4.07016 12.2616 3.80704 12.2588 3.53841V3.53841C12.2711 3.10773 12.1087 2.69038 11.8083 2.38143C11.508 2.07249 11.0954 1.89826 10.6646 1.89844H9.61956C9.19745 1.89843 8.79274 2.06664 8.49498 2.36583C8.19722 2.66502 8.03096 3.07053 8.03299 3.49264V3.49264C8.02048 4.36415 7.31038 5.06405 6.43879 5.06396C6.17016 5.06117 5.90703 4.98749 5.67601 4.85038V4.85038C4.91336 4.41339 3.94091 4.67612 3.5021 5.43772L2.94527 6.35305C2.50699 7.1137 2.76615 8.08555 3.52498 8.52697V8.52697C4.01823 8.81174 4.32209 9.33803 4.32209 9.90759C4.32209 10.4771 4.01823 11.0034 3.52498 11.2882V11.2882C2.76711 11.7267 2.50767 12.6961 2.94527 13.4545V13.4545L3.47158 14.3622C3.67719 14.7332 4.02215 15.007 4.43014 15.1229C4.83813 15.2389 5.27551 15.1875 5.6455 14.9801V14.9801C6.00921 14.7678 6.44264 14.7097 6.84943 14.8185C7.25622 14.9274 7.60268 15.1942 7.81178 15.5598C7.94889 15.7908 8.02257 16.0539 8.02536 16.3225V16.3225C8.02536 17.203 8.73911 17.9167 9.61956 17.9167H10.6646C11.5421 17.9168 12.2546 17.2076 12.2588 16.3302V16.3302C12.2567 15.9067 12.424 15.5001 12.7234 15.2006C13.0229 14.9012 13.4295 14.7339 13.853 14.736C14.121 14.7431 14.383 14.8165 14.6157 14.9495V14.9495C15.3764 15.3878 16.3482 15.1287 16.7897 14.3698V14.3698L17.3389 13.4545C17.5514 13.0896 17.6098 12.655 17.501 12.247C17.3922 11.839 17.1252 11.4912 16.7592 11.2806V11.2806C16.3931 11.07 16.1261 10.7222 16.0173 10.3142C15.9085 9.90613 15.9669 9.47156 16.1794 9.10668C16.3177 8.86532 16.5178 8.66521 16.7592 8.52697V8.52697C17.5134 8.08579 17.772 7.11962 17.3389 6.36068V6.36068V6.35305Z"
            stroke="var(--primary)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <ellipse
            cx="10.1459"
            cy="9.90749"
            rx="2.1968"
            ry="2.1968"
            stroke="var(--primary)"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
    <div class="c-list">
      <div class="input-group search-area">
        <input type="text" class="form-control" placeholder="Search " />
        <span class="input-group-text"
          ><a href="javascript:void(0)">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="8.82495"
                cy="9.32491"
                r="6.74142"
                stroke="#0D99FF"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.5137 14.3638L16.1568 16.9999"
                stroke="#0D99FF"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg> </a
        ></span>
      </div>
    </div>
    <div class="people-list dz-scroll">
      <div
        class="chat-p style-1"
        v-for="({ img, name, time, userActive }, ind) in chatColumn"
        :key="ind"
      >
        <div :class="`d-flex ${userActive}`">
          <img :src="img" class="avatar avatar-md rounded-circle" alt="" />
          <div class="ms-2">
            <h6 class="mb-0">{{ name }}</h6>
            <span><strong>You:</strong> Welcome back </span>
          </div>
        </div>
        <span>{{ time }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import IMAGE from '@/constent/Theme'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'chatColumn',
  setup() {
    return {
      chatColumn: [
        { img: IMAGE.contactD1, name: 'K kumar', time: '1 mIn' },
        { img: IMAGE.contactD4, name: 'Honey Risher', time: '2 mIn', userActive: 'active' },
        { img: IMAGE.contactD2, name: 'Liam Antony', time: '5 mIn' },
        { img: IMAGE.contactD1, name: 'Ricky M', time: '4 mIn', userActive: 'active' },
        { img: IMAGE.contactD4, name: 'Elijah James', time: '2 mIn' },
        { img: IMAGE.contactD2, name: 'Oliver Noah', time: '5 mIn', userActive: 'active' },
        { img: IMAGE.contactD1, name: 'Ricky M', time: '4 mIn', userActive: 'active' },
        { img: IMAGE.contactD4, name: 'Ricky Antony', time: '1 mIn', userActive: 'active' },
        { img: IMAGE.contactD2, name: 'Ricky Antony', time: '2 mIn', userActive: 'active' },
        { img: IMAGE.contactD1, name: 'Ankites Risher', time: '5 mIn', userActive: 'active' },
        { img: IMAGE.contactD4, name: 'Ricky M', time: '4 mIn', userActive: 'active' },
        { img: IMAGE.contactD2, name: 'William Risher', time: '2 mIn', userActive: 'active' },
        { img: IMAGE.contactD1, name: 'Oliver Noah', time: '5 mIn', userActive: 'active' },
        { img: IMAGE.contactD4, name: 'Ricky M', time: '4 mIn', userActive: 'active' },
        { img: IMAGE.contactD2, name: 'Elijah James', time: '2 mIn', userActive: 'active' }
      ]
    }
  }
})
</script>

<style scoped></style>
