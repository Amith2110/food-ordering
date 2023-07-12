<template>
    <div class="flex px-4 py-4 justify-center bg-background gap-16 sticky-footer absolute bottom-0">
        <nuxt-link to="/"><nuxt-icon name="home" class="text-3xl text-orange" /></nuxt-link>
        <div class="relative w-8 h-8">
            <nuxt-link to="/order" class="relative"><nuxt-icon name="cart" class="text-3xl" filled />
                <div class="bg-orange absolute right-0 -bottom-3 ">
                    <p class="px-[2px] text-white">{{ props.quantity }}</p>
                </div>
            </nuxt-link>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ quantity: number }>()
</script>