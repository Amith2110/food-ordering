<template>
    <div class="flex flex-col justify-center items-center border-2 rounded border-background p-4">
        <img :src="`/images/${props.category.toLowerCase().replace(/\s+/g, '')}.png`" :alt="props.category" />
        <p>{{ props.category }}</p>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    category: {
        type: String,
        required: true
    }
})
</script>