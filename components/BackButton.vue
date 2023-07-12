<template>
    <button :class="props.classNames" @click="goBack"><nuxt-icon name="back" /></button>
</template>

<script setup lang="ts">
const props = defineProps<{ classNames: string }>()
const router = useRouter()

const goBack = () => {
    router.go(-1)
}
</script>
