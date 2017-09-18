<template>
    <div class="tabs">
        <div class="tabs-content">
            <router-link to="/" exact>Accueil</router-link>
            <router-link to="/engineering" exact>Ingénierie</router-link>
            <router-link to="/references" exact>Références</router-link>
            <router-link to="/teams" exact>Equipes</router-link>
            <router-link to="/contact" exact>Contact</router-link>
        </div>
    </div>
</template>

<style lang="sass" scoped>
@import '../sass/components/tabs'
</style>