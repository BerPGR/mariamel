<script setup lang="ts">
import Header from './components/Header.vue';

</script>

<template>
  <div>
    <Header>
      <RouterView v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </RouterView>
    </Header>
  </div>
</template>
