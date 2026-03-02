<template>
  <div>
    <nav class="navbar px-20 py-6">
      <div class="navbar-start">
        <h1 class="text-4xl" v-if="route.path === '/' ">{{ $t('hello') }}</h1>
        <router-link v-else class="btn btn-secondary btn-lg" to="/">{{ $t('back') }}</router-link>
      </div>
      <div class="navbar-center flex items-center gap-10">
        <router-link :class="['btn btn-lg', route.path === '/uxui' ? 'btn-secondary' : 'btn-primary' ]" to="uxui">{{ $t('buttons.ux') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/character' ? 'btn-secondary' : 'btn-primary' ]" to="/character">{{ $t('buttons.character') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/animation' ? 'btn-secondary' : 'btn-primary' ]" to="/animation">{{ $t('buttons.animation') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/illustration' ? 'btn-secondary' : 'btn-primary' ]" to="/illustration">{{ $t('buttons.illustration') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/about' ? 'btn-secondary' : 'btn-primary' ]" to="/about">{{ $t('buttons.about') }}</router-link>
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
    <slot />
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'Header'
});
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n';

const { locale } = useI18n()
const route = useRoute()

const changeLanguage = (lang: string) => {
  locale.value = lang
}
</script>

<style scoped></style>