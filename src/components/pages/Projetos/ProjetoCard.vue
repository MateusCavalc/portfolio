<template>
    <div :class="`project-card${small ? '-small' : ''}`">
        <header class="card-title">
            <h4>{{ title }}</h4>
            <a :href="repoLink"><font-awesome-icon icon="arrow-up-right-from-square" /></a>
        </header>
        <p>
            {{ description }}
        </p>
        <div class="proj-icons">
            <slot>
                [Icons slot]
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    name: "projetoCard",
    props: {
        small: Boolean,
        title: String,
        description: String,
        repoLink: String
    }
}
</script>
<style></style>