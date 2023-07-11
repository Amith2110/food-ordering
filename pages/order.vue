<template>
    <div class="flex flex-col h-fit">
        <div class="flex px-4 py-4 justify-center relative bg-background">
            <nuxt-icon name="back" class="text-3xl absolute left-4" />
            <h1 class="text-2xl font-bold">Order</h1>
        </div>
        <order-item />
        <order-item />
        <order-item />
        <order-item />
        <order-item />
        <order-item />

        <delivery-card />
        <div class="flex justify-between items-center p-4">
            <p class="font-semibold text-xl">Total:</p>
            <p class="font-bold text-2xl">$14.40</p>
        </div>
    </div>
    <button class="absolute sticky-footer bottom-4 m-4 bg-orange rounded-2xl">
        <div class="flex justify-between p-4">
            <p class="uppercase font-semibold">Checkout</p>
            <p class="font-semibold">$25.99</p>
        </div>
    </button>
</template>