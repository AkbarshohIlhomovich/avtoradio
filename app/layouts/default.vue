<template>
  <div class="layout">
    <TheNav />
    <main>
      <slot />
    </main>
    <ChatWidget />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
}
</style>
