<template>
<div class="tabs">
    <router-link :to="{ path: '/' }">Accueil</router-link>
    <router-link :to="{ path: '/engineering' }">Ingénierie</router-link>
    <router-link :to="{ path: '/references' }">Références</router-link>
    <router-link :to="{ path: '/teams' }">Equipes</router-link>
    <router-link :to="{ path: '/contact' }">Contact</router-link>
    </div>
</template>

<style lang="sass" scoped>
@import '../sass/components/tabs'
</style>