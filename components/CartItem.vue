<template>
    <div class="flex border-2 border-background py-8 px-2">
        <div class="flex flex-col w-2/3 gap-y-4">
            <p class="text-xl font-bold">Broiled Salmon Steak</p>
            <div class="flex gap-x-2">
                <div class="flex flex-col">
                    <p class="text-xs font-semibold">Protein</p>
                    <p class="text-xs">30g</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-xs font-semibold">Carbohydrate</p>
                    <p class="text-xs">30g</p>
                </div>
                <div class="flex flex-col">
                    <p class="text-xs font-semibold">Fat</p>
                    <p class="text-xs">30g</p>
                </div>
                <circle-progress :percent="10" :size="36" :viewport="true" :border-width="2" :border-bg-width="2"
                    fill-color="#019c00" class="align-baseline">
                    <slot>
                        <div class="flex flex-col text-center">
                            <p class="text-xxs font-bold">530</p>
                            <p class="text-xxs">Cals</p>
                        </div>
                    </slot>
                </circle-progress>
            </div>
            <div class="flex gap-x-2 items-baseline">
                <div class="flex justify-between px-4 py-2 w-[60%] border rounded-3xl bg-background">
                    <button>
                        <nuxt-icon name="minus" class="text-lg font-bold" />
                    </button>
                    <p class="text-lg font-bold">1</p>
                    <button>
                        <nuxt-icon name="plus" class="text-lg font-bold" />
                    </button>
                </div>
                <div>
                    <p class="text-xl">$1.99</p>
                </div>
            </div>
        </div>
        <div class="border rounded-lg bg-no-repeat bg-cover w-1/3"
            style="background-image: url('/images/american-cover.png');">
        </div>
    </div>
</template>