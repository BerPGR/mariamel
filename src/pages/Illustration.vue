<template>
  <div class="w-full bg-base-100 md:px-12 min-h-[calc(100vh-8rem)] flex items-center justify-center">
    <div class="relative group max-w-8xl mx-auto">
      <div 
        ref="carouselRef"
        class="carousel carousel-center w-full gap-4 p-2 scroll-smooth overflow-x-hidden"
      >
        <div 
          v-for="(img, index) in images" 
          :key="index" 
          class="carousel-item w-full md:w-[calc(33.333%-1rem)]"
        >
          <div class="relative w-full aspect-video md:aspect-[4/3] overflow-hidden rounded-xl shadow-lg border border-base-300">
            <img 
              :src="img" 
              class="w-full h-full object-contain transition-transform duration-500 hover:scale-110" 
              :alt="'Obra ' + index"
            />
          </div>
        </div>
      </div>

      <div class="absolute inset-0 flex items-center justify-between pointer-events-none">
        <button 
          @click="scrollPrev" 
          class="btn btn-circle btn-primary pointer-events-auto -ml-5 shadow-2xl border-none bg-[#4E3094] hover:bg-indigo-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <button 
          @click="scrollNext" 
          class="btn btn-circle btn-primary pointer-events-auto -mr-5 shadow-2xl border-none bg-[#4E3094] hover:bg-indigo-700"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>
      </div>

    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const carouselRef = ref<HTMLElement | null>(null);
import image1 from '../../public/image 1.svg';
import image2 from '../../public/image 2.svg';
import image3 from '../../public/image 3.svg';
import image4 from '../../public/image 4.svg';
import image5 from '../../public/image 5.svg';
import image6 from '../../public/image 6.svg';
import image7 from '../../public/image 7.svg';
import image8 from '../../public/image 8.svg';
const images = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
  image8
];
const scrollNext = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollLeft += carouselRef.value.offsetWidth;
  }
};

const scrollPrev = () => {
  if (carouselRef.value) {
    carouselRef.value.scrollLeft -= carouselRef.value.offsetWidth;
  }
};
</script>

<style scoped>
.carousel {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.carousel::-webkit-scrollbar {
  display: none;
}
</style>