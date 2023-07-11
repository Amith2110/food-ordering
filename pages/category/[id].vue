<template>
    <div class="flex flex-col">
        <div class="flex justify-start items-center bg-no-repeat bg-cover gap-2"
            style="background-image: url('/images/american-cover.png'); height: 25vh;">
            <nuxt-icon name="back" class="text-3xl text-white" />
            <h1 class="text-3xl font-extrabold text-white">American</h1>
        </div>
        <cart-item />
        <cart-item />
        <cart-item />
        <cart-item />
    </div>
    <div class="flex px-4 py-4 justify-center bg-background gap-16 sticky-footer absolute bottom-0">
        <nuxt-icon name="home" class="text-2xl text-orange" />
        <nuxt-icon name="cart" class="text-2xl" filled />
    </div>
</template>