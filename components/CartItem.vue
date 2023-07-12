<template>
    <div class="flex border-2 border-background py-8 px-2">
        <div class="flex flex-col w-2/3 gap-y-4">
            <p class="text-xl font-bold">{{ name }}</p>
            <div class="flex gap-x-2">
                <div class="flex flex-col">
                    <p class="text-xs font-semibold">Protein</p>
                    <p class="text-xs">{{ protein }}g</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-xs font-semibold">Carbohydrate</p>
                    <p class="text-xs">{{ carbs }}g</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-xs font-semibold">Fat</p>
                    <p class="text-xs">{{ fat }}g</p>
                </div>
                <circle-progress :percent="percentage" :size="36" :viewport="true" :border-width="2" :border-bg-width="2"
                    :fill-color="fillColor" class="align-baseline">
                    <slot>
                        <div class="flex flex-col text-center">
                            <p class="text-xxs font-bold">{{ calories }}</p>
                            <p class="text-xxs">Cals</p>
                        </div>
                    </slot>
                </circle-progress>
            </div>
            <div class="flex gap-x-2 items-baseline">
                <div class="flex justify-between px-4 py-2 w-[60%] border rounded-3xl bg-background">
                    <button @click="cartStore.removeFromCart(id)">
                        <nuxt-icon name="minus" class="text-lg font-bold" />
                    </button>
                    <p class="text-lg font-bold">{{ cartStore.getQuantityOfProduct(id) }}</p>
                    <button @click="cartStore.addToCart(id)">
                        <nuxt-icon name="plus" class="text-lg font-bold" />
                    </button>
                </div>
                <div>
                    <p class="text-xl">${{ price }}</p>
                </div>
            </div>
        </div>
        <div class="border rounded-lg bg-no-repeat bg-cover w-1/3"
            style="background-image: url('/images/american-cover.png');">
        </div>
    </div>
</template>

<script lang="ts" setup>
type ProductProps = {
    name: string
    calories: number
    carbs: number
    protein: number
    fat: number
    price: number
    url: string
    id: number
}

const cartStore = useCartStore()

const {
    name,
    calories,
    carbs,
    protein,
    fat,
    price,
    url,
    id
} = defineProps<ProductProps>()


const percentage = computed(() => {
    return (calories / 1000) * 100
})

const fillColor = computed(() => {
    if (calories <= 500) {
        return '#019c00'
    } else if (calories <= 800) {
        return '#ffca51'
    } else {
        return '#ff0626'
    }
})
</script>