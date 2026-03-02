<template>
  <div class="w-full min-h-[calc(100vh-6rem)] bg-base-100">
    <div class="h-full border-2 border-[#4E3094] rounded-md relative mx-10 mt-4">
      <img src="../../public/Rectangle 7.svg" class='w-full h-160 object-cover rounded-md' />
      <h1 class="text-9xl absolute font-serif italic text-indigo-900 top-20 left-40">Maria Mel</h1>
      <div class="p-6">
        <span class="text-2xl">{{ $t('show') }}</span>
        <ul class="list-disc text-xl pl-10 pt-4">
          <li>{{ $t('showcase.designer') }}</li>
          <li>{{ $t('showcase.character') }}</li>
          <li>{{ $t('showcase.animation') }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

