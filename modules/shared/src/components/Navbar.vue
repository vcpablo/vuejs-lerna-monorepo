<template>
  <ul class="navbar">
    <li>
        <router-link :to="{ name: 'Home' }">Home</router-link>
    </li>
    <li>
        <router-link :to="{ name: 'About'}">About</router-link>
    </li>
    <li>
        <router-link :to="{ name: 'Admin' }">Admin</router-link>
    </li>
    <li>
        <router-link to="/unexistent-page">Unexistent Page</router-link>
    </li>
  </ul>
</template>

<script>
export default {
    name: 'Navbar'
}
</script>

<style>
.navbar {
  list-style-type: none;
  display: flex;
  padding: 0;
}

.navbar li {
  margin-right: 10px;
}
</style>