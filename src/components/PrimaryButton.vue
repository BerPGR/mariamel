<template>
<button class="cursor-pointer group relative flex h-24 w-64 items-center justify-center overflow-hidden rounded-full border-4 border-indigo-900 bg-sky-300 transition-colors duration-500 hover:bg-indigo-700">
  
  <div class="absolute -bottom-1 h-8 w-16 rounded-t-full bg-indigo-700 transition-all duration-500 group-hover:-top-1 group-hover:bottom-auto group-hover:rounded-t-none group-hover:rounded-b-full group-hover:bg-sky-300"></div>

  <span class="relative z-10 font-serif text-4xl italic text-indigo-900 transition-colors duration-500 group-hover:text-sky-300">
    <slot/> 
  </span>
</button>
</template

