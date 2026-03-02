<template>
  <div>
    <RouterView v-slot="{Component}">
      <transition name="fade">
        <component :is="Component"/>
      </transition>
    </RouterView>
  </div>
</template>
