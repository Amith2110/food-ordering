<template>
    <div class="flex flex-col">
        <div class="flex px-4 py-4 justify-center relative bg-background">
            <nuxt-icon name="back" class="text-3xl absolute left-4" />
            <h1 class="text-2xl font-bold">Category</h1>
        </div>
        <div class="grid grid-cols-2 gap-2 p-4">
            <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
                <img src="/images/pizza.png" alt="pizza" />
                <p>Pizza</p>
            </div>
            <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
                <img src="/images/asian.png" alt="asian" />
                <p>Asian</p>
            </div>
            <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
                <img src="/images/pizza.png" alt="pizza" />
                <p>Pizza</p>
            </div>
            <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
                <img src="/images/asian.png" alt="asian" />
                <p>Asian</p>
            </div>
            <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
                <img src="/images/pizza.png" alt="pizza" />
                <p>Pizza</p>
            </div>
            <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
                <img src="/images/asian.png" alt="asian" />
                <p>Asian</p>
            </div>
            <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
                <img src="/images/pizza.png" alt="pizza" />
                <p>Pizza</p>
            </div>
        </div>
        <div class="flex px-4 py-4 justify-center relative bg-background gap-16">
            <nuxt-icon name="home" class="text-2xl text-orange" />
            <nuxt-icon name="cart" class="text-2xl" filled />
        </div>
    </div>
</template>