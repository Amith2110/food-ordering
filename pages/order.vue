<template>
    <div class="flex flex-col h-full">
        <div class="flex px-4 py-4 justify-center relative bg-background">
            <back-button class-names="text-3xl absolute left-4" />
            <h1 class="text-2xl font-bold">Order</h1>
        </div>
        <div v-for="item in cartItems">
            <order-item :quantity="getQuantityOfProduct(item.productId)" :name="item.name" :price="item.price"
                :product-id="item.productId" :remove-item="store.removeFromCart" />
        </div>
        <delivery-card :delivery-price="deliveryPrice" />
        <div class="flex justify-between items-center p-4">
            <p class="font-semibold text-xl">Total:</p>
            <p class="font-bold text-2xl">${{ allChargesIncludedPrice }}</p>
        </div>
    </div>
    <button class="absolute sticky-footer bottom-4 m-4 bg-orange rounded-2xl">
        <div class="flex justify-between p-4">
            <p class="uppercase font-semibold">Checkout</p>
            <p class="font-semibold">${{ allChargesIncludedPrice }}</p>
        </div>
    </button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

const store = useCartStore()

const { cartItems, getQuantityOfProduct, getTotalPrice } = storeToRefs(store)

const deliveryPrice = computed(() => {
    return parseFloat((getTotalPrice.value * 0.05).toFixed(2))
})

const allChargesIncludedPrice = computed(() => {
    return parseFloat((getTotalPrice.value + deliveryPrice.value).toFixed(2))
})

</script>