<template>
  <div class="flex flex-col items-center justify-center min-h-[calc(100vh-6rem)] bg-base-100 overflow-hidden">
    
    <div class="relative w-full overflow-hidden bg-base-200 py-4">
      
      <div class="flex w-max gap-2 animate-scroll-fast hover:pause">
        
        <div v-for="n in 2" :key="n" class="flex gap-2">
          <img 
            v-for="(img, index) in images" 
            :key="index"
            :src="img" 
            alt="Galeria" 
            class="h-128 w-auto object-contain rounded-sm shadow-sm"
          />
        </div>

      </div>

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
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-fast {
  /* Ajuste os '30s' para aumentar ou diminuir a velocidade */
  animation: scroll 30s linear infinite;
}

/* Pausa ao passar o mouse */
.hover\:pause:hover {
  animation-play-state: paused;
}

/* Garante que o container interno não quebre a linha */
.w-max {
  width: max-content;
}
</style>