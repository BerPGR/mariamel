<template>
  <div class="w-full min-h-[calc(100vh-6rem)] bg-base-100 pb-10 font-body">
    <div class="h-full border-2 border-[#4E3094] rounded-md relative mx-4 md:mx-10 mt-4 overflow-hidden">
      
      <div class="relative w-full h-64 md:h-96 lg:h-[40rem]">
        <img 
          src="../../public/Rectangle 7.svg" 
          class="w-full h-full object-cover rounded-t-[calc(0.375rem-2px)]" 
        />
        
        <h1 class="absolute font-corpo italic text-indigo-900 
                   top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   md:top-20 md:left-20 md:translate-x-0 md:translate-y-0
                   text-5xl sm:text-7xl md:text-8xl lg:text-9xl 
                   w-full text-center md:text-left drop-shadow-sm">
          Maria Mel
        </h1>
      </div>

      <div class="p-6 md:p-12">
        <span class="text-xl md:text-2xl font-semibold uppercase tracking-wide">
          {{ $t('show') }}
        </span>
        
        <ul class="list-disc text-lg md:text-xl pl-6 md:pl-10 pt-4 space-y-2">
          <li>{{ $t('showcase.designer') }}</li>
          <li>{{ $t('showcase.character') }}</li>
          <li>{{ $t('showcase.animation') }}</li>
        </ul>
      </div>

    </div>
  </div>
</template>