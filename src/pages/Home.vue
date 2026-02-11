<template>
  <div class="w-full min-h-screen bg-base-100 p-10 border-2 bo">
    <div class="h-full border-2 border-[#4E3094] rounded-md relative">
      <img src="../../public/Rectangle 7.svg" class='w-full h-160 object-cover rounded-md' />
      <h1 class="text-9xl absolute font-serif italic text-indigo-900 top-20 left-40">Maria Mel</h1>
      <div class="flex items-start justify-center gap-20 p-10">
        <div class="flex flex-col items-center justify-center gap-6">
          <h1 class="text-4xl">Designer</h1>
          <PrimaryButton>Personagens</PrimaryButton>
          <PrimaryButton>UX/UI</PrimaryButton>
        </div>

        <div class="flex flex-col items-center justify-center gap-6">
          <h1 class="text-4xl">Designer</h1>
          <PrimaryButton>Personagens</PrimaryButton>
        </div>


      </div>
        <div class="p-2 flex">
          <button class="btn btn-primary rounded-full">Sobre mim</button>
        </div>
    </div>
    <!--<PrimaryButton />-->
  </div>
</template>

<script setup lang="ts">
  import PrimaryButton from '@/components/PrimaryButton.vue'
</script>  
