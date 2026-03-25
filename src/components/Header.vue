<template>
  <div>
    <nav class="navbar px-4 md:px-20 py-4 md:py-6 bg-base-100">
      
      <div class="navbar-start">
        <div class="dropdown lg:hidden">
          <label tabindex="0" class="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="4 6h16M4 12h16M4 18h7" />
            </svg>
          </label>
          <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 border border-base-300">
            <li><router-link to="/uxui">{{ $t('buttons.ux') }}</router-link></li>
            <li><router-link to="/characters">{{ $t('buttons.character') }}</router-link></li>
            <li><router-link to="/animation">{{ $t('buttons.animation') }}</router-link></li>
            <li><router-link to="/illustration">{{ $t('buttons.illustration') }}</router-link></li>
            <li><router-link to="/about">{{ $t('buttons.about') }}</router-link></li>
          </ul>
        </div>

        <h1 class="text-2xl md:text-4xl font-bold ml-2 lg:ml-0" v-if="route.path === '/'">
          {{ $t('hello') }}
        </h1>
        <router-link v-else class="btn btn-secondary btn-sm md:btn-lg" to="/">
          {{ $t('back') }}
        </router-link>
      </div>

      <div class="navbar-center hidden lg:flex items-center gap-4 xl:gap-10">
        <router-link :class="['btn btn-lg', route.path === '/uxui' ? 'btn-secondary' : 'btn-primary' ]" to="/uxui">{{ $t('buttons.ux') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/characters' ? 'btn-secondary' : 'btn-primary' ]" to="/characters">{{ $t('buttons.character') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/animation' ? 'btn-secondary' : 'btn-primary' ]" to="/animation">{{ $t('buttons.animation') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/illustration' ? 'btn-secondary' : 'btn-primary' ]" to="/illustration">{{ $t('buttons.illustration') }}</router-link>
        <router-link :class="['btn btn-lg', route.path === '/about' ? 'btn-secondary' : 'btn-primary' ]" to="/about">{{ $t('buttons.about') }}</router-link>
      </div>

      <div class="navbar-end">
        <div class="flex gap-1 md:gap-2">
          <button @click="changeLanguage('pt')" :class="[
            'flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full border text-xs md:text-base transition-all duration-300',
            locale === 'pt' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-200 text-gray-700'
          ]">
            🇧🇷 <span class="hidden xs:inline">PT</span>
          </button>

          <button @click="changeLanguage('en')" :class="[
            'flex items-center gap-1 md:gap-2 px-2 md:px-4 py-1 md:py-2 rounded-full border text-xs md:text-base transition-all duration-300',
            locale === 'en' ? 'bg-blue-600 border-blue-600 text-white' : 'bg-white border-gray-200 text-gray-700'
          ]">
            🇺🇸 <span class="hidden xs:inline">EN</span>
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