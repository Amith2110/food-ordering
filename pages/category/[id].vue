<template>
    <div class="flex flex-col">
        <div class="flex justify-start items-center bg-no-repeat bg-cover gap-2"
            style="background-image: url('/images/american-cover.png'); height: 25vh;">
            <back-button class-names="text-3xl text-white" />
            <h1 class="text-3xl font-extrabold text-white capitalize">{{ route.params.id }}</h1>
        </div>
        <div v-for="product in products">
            <cart-item :calories="product.calories" :carbs="product.carbs" :fat="product.fat" :name="product.name"
                :price="product.price" :protein="product.protein" :id="product.id" :url="product.url" />
        </div>
    </div>
    <Footer :quantity="getTotalQuantity" />
</template>

<script setup>
import { storeToRefs } from 'pinia'

const productStore = useProductsStore()
const cartStore = useCartStore()
const route = useRoute()

const products = productStore.getProductsByCategory(route.params.id)

const { getTotalQuantity } = storeToRefs(cartStore)

</script>