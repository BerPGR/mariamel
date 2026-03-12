<template>
  <div class="flex flex-col items-center justify-center min-h-screen bg-base-100 overflow-hidden">
    
    <div class="relative w-full overflow-hidden bg-base-200 py-6 md:py-10">
      
      <div class="flex w-max gap-3 md:gap-5 animate-scroll-mobile md:animate-scroll-desktop hover:pause">
        
        <div v-for="n in 2" :key="n" class="flex gap-3 md:gap-5">
          <img 
            v-for="(img, index) in images" 
            :key="index"
            :src="img" 
            alt="Galeria" 
            class="
              /* Mobile: Altura menor para caber na tela */
              h-64 w-auto 
              /* Tablet: Altura média */
              md:h-128 
              /* Desktop: Altura total desejada */
              lg:h-80 
              object-contain rounded-lg shadow-md transition-transform duration-300 hover:scale-105
            "
          />
        </div>

      </div>

      <div class="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-base-200 to-transparent z-10"></div>
      <div class="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-base-200 to-transparent z-10"></div>
    </div>

  </div>
</template>

<script setup>
// Substitua pelos links das suas imagens reais
const images = [
  '../../public/image 1.svg',
  '../../public/image 2.svg',
  '../../public/image 3.svg',
  '../../public/image 4.svg',
  '../../public/image 5.svg',
  '../../public/image 6.svg',
  '../../public/image 7.svg',
  '../../public/image 8.svg'
];
</script>

<style scoped>
/* Animação para Desktop (Mais lenta para imagens maiores) */
@keyframes scrollDesktop {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Animação para Mobile (Pode ser um pouco mais rápida por ter menos percurso) */
@keyframes scrollMobile {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-desktop {
  animation: scrollDesktop 40s linear infinite;
}

.animate-scroll-mobile {
  animation: scrollMobile 20s linear infinite;
}

/* No Mobile, usamos a animação mais rápida, no Desktop a mais lenta */
@media (max-width: 768px) {
  .animate-scroll-desktop {
    animation: scrollMobile 20s linear infinite;
  }
}

.hover\:pause:hover {
  animation-play-state: paused;
}

.w-max {
  width: max-content;
}
</style>