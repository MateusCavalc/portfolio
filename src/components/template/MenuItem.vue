<template>
    <a class="menu-item text-decoration-none cursor-pointer user-select-none h-10 px-1 py-2 d-flex justify-content-center justify-content-lg-start align-items-center rounded-2 hover:bg-[#495057] hover:text-[#DEE2E6] active:bg-[#495057] active:text-[#DEE2E6]"
        :class="{ 'active': active }">
        <font-awesome-icon class="mr-2" :icon="icon" />
        <span class="d-none d-lg-inline-block">{{ label }}</span>
    </a>
</template>
<script>

export default {
    name: 'menuItem',
    props: {
        label: String,
        icon: String,
        active: Boolean,
    }
}
</script>
<style>
.active {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    background-color: rgb(73 80 87 / var(--tw-bg-opacity));
    color: rgb(222 226 230 / var(--tw-text-opacity));
}

.menu-item {
    color: #ffffffb6;
    margin-bottom: 5px;

    cursor: pointer;
}

.menu-item svg {
    height: 1.5em;
    width: 2em;

    margin-right: 10px
}

.menu-item span {
    font-size: 1.3em;
}

.menu-item,
.menu-item svg {
    transition-duration: 500ms;
}

.menu-item:hover svg {
    scale: 1.3;
    width: 2.5em;
}

/* lg >= 992px */
@media (max-width: 992px) {
    .menu-item svg {
        margin-right: 0
    }
}
</style>