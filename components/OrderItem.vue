<template>
    <div class="flex px-2 py-8 border-2 border-background justify-between items-center gap-x-2">
        <div class="flex gap-2">
            <img :src="url" alt="pizza" class="w-20 h-20 object-cover" />
            <p class="font-medium text-lg self-center">{{ props.quantity }}</p>
            <p class="font-medium text-lg self-center">x</p>
            <p class="font-medium text-lg wrap self-center whitespace-normal">{{ props.name }}</p>
        </div>
        <div class="flex gap-4 items-center">
            <p>{{ props.price }}</p>
            <button @click="removeItem(props.productId)"><nuxt-icon name="close" filled class="text-xl" /></button>
        </div>
    </div>
</template>

<script lang="ts" setup>
type Props = {
    quantity: number
    removeItem: (productId: number) => void
    price: number
    name: string
    productId: number
    url: string
}
const props = defineProps<Props>()
</script>