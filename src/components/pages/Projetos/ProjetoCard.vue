<template>
    <div :class="`project-card${small ? '-small' : ''}`">
        <div v-if="small">
            <header class="card-title">
                <h4>{{ title }}</h4>
                <a :href="repoLinks[0]"><font-awesome-icon icon="arrow-up-right-from-square" /></a>
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
        <div v-else class="row">
            <div class="card-info col-12 col-lg-6">
                <header class="card-title">
                    <h4 class="limit-width">{{ title }}</h4>
                    <div class="title-icons d-flex align-items-center">
                        <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="d-inline-block d-lg-none" /> -->
                        <div>
                            <span>
                                Frontend
                                <a :href="repoLinks[0]"><font-awesome-icon
                                        icon="arrow-up-right-from-square" /></a></span>
                            <span>
                                Backend
                                <a :href="repoLinks[1]"><font-awesome-icon
                                        icon="arrow-up-right-from-square" /></a></span>
                        </div>
                    </div>
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
            <div class="card-images d-none d-lg-inline-block col-6">
                <!-- carousel -->
                <div id="carousel" class="carousel carousel-dark slide" data-bs-ride="carousel">
                    <div class="carousel-inner rounded-2">
                        <div v-for='(img, i) in images ' :key="i" :class="`carousel-item ${i === 0 ? 'active' : ''}`">
                            <img :src="img" class="d-block w-100" :alt="`image-${i}`">
                        </div>
                        <!-- <div class="carousel-item">
                            <img src="../../../assets/imgs/projects/dream-commerce/frontpage2.png" class="d-block w-100"
                                alt="frontpage2">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/imgs/projects/dream-commerce/cart.png" class="d-block w-100"
                                alt="cart">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/imgs/projects/dream-commerce/frontpage-filter2.png"
                                class="d-block w-100" alt="frontpage-filter2">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/imgs/projects/dream-commerce/usercrud.png" class="d-block w-100"
                                alt="usercrud">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../assets/imgs/projects/dream-commerce/productcrud.png"
                                class="d-block w-100" alt="productcrud">
                        </div> -->
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
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
        repoLinks: Array,
        images: Array
    }
}
</script>
<style></style>