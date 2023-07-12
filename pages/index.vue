<template>
    <div class="flex flex-col h-full">
        <div class="flex px-4 py-4 justify-center relative bg-background">
            <nuxt-icon name="back" class="text-3xl absolute left-4" />
            <h1 class="text-2xl font-bold">Category</h1>
        </div>
        <div class="grid grid-cols-2 gap-2 p-4">
            <nuxt-link v-for="category in categories" :to="/category/ + category.toLowerCase().replace(/\s+/g, '')">
                <category-item :category="category" />
            </nuxt-link>
        </div>
    </div>
    <Footer :quantity="getTotalQuantity" />
</template>

<script setup>
import { storeToRefs } from 'pinia';

const productStore = useProductsStore()
const cartStore = useCartStore()
const { getAllUniqueCategories: categories } = storeToRefs(productStore)
const { getTotalQuantity } = storeToRefs(cartStore)
</script>