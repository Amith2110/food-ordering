<template>
    <div className="fixed top-0 left-0 w-full h-full bg-dark-grey bg-opacity-50 z-50" @click="props.onCloseRequest"
        key="modal">
        <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[60%] sm:w-1/2 sm:h-1/2 bg-white">
            <div className="absolute top-[-10px] right-[-10px]">
                <button @click="props.onCloseRequest" className="absolute top-0 right-[2px]">
                    <nuxt-icon name="close" alt="close" />
                </button>
            </div>
            <circle-progress v-if="percent < 100" :percent="percent" :viewport="true" fill-color="#ffca51"
                class="absolute top-1/4 left-1/4">
                <slot>
                    <div class="flex flex-col text-center">
                        <p class="text-xxs">Processing...</p>
                    </div>
                </slot>
            </circle-progress>
            <div v-else>
                <p class="text-center absolute top-1/4 p-4 text-3xl text-orange">Your order was succesfully placed!</p>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">

const props = defineProps<{ onCloseRequest: () => void }>()

const percent = ref(20)
let interval: number | null = null

onMounted(() => {
    interval = window.setInterval(() => {
        if (percent.value > 100) {
            if (interval)
                window.clearInterval(interval)
            props.onCloseRequest()
            return
        }
        percent.value += 20
    }, 1000)
})

onUnmounted(() => {
    if (interval) {
        window.clearInterval(interval)
    }
})
</script>