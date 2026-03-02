<template>
  <nav class="navbar px-20 py-6">
    <div class="navbar-start">
      <h1 class="text-4xl">{{ $t('hello') }}</h1>
    </div>
    <div class="navbar-center flex items-center gap-10">
      <button class="btn btn-primary btn-lg">{{ $t('buttons.ux') }}</button>
      <button class="btn btn-primary btn-lg">{{ $t('buttons.character') }}</button>
      <button class="btn btn-primary btn-lg">{{ $t('buttons.animation') }}</button>
      <button class="btn btn-primary btn-lg">{{ $t('buttons.illustration') }}</button>
      <router-link class="btn btn-primary btn-lg" to="/about">{{ $t('buttons.about') }}</router-link>
    </div>
    <div class="navbar-end">
      <div class="flex gap-2">
        <button @click="changeLanguage('pt')" :class="[
          'flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ease-in-out',
          locale === 'pt'
            ? 'bg-blue-600 border-blue-600 text-white shadow-md scale-105'
            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
        ]">
          🇧🇷 PT
        </button>

        <button @click="changeLanguage('en')" :class="[
          'flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300 ease-in-out',
          locale === 'en'
            ? 'bg-blue-600 border-blue-600 text-white shadow-md scale-105'
            : 'bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300'
        ]">
          🇺🇸 EN
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Header'
});

import { useI18n } from 'vue-i18n';

const { locale } = useI18n()

const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<style scoped></style>