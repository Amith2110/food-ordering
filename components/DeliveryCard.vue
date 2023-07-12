<template>
    <div class="flex justify-between p-4 border-b-2 border-dotted border-grey">
        <div class="flex gap-x-4">
            <div class="bg-no-repeat bg-cover w-16 h-16" style="background-image: url('/images/delivery.png');">
            </div>
            <p class="self-center">Delivery</p>
        </div>
        <p class="self-center">${{ props.deliveryPrice }}</p>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
    deliveryPrice: number
}>()
</script>