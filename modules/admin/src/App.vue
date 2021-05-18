<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from '@shared/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
