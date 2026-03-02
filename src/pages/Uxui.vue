<template>
    <div class="w-full min-h-[calc(100vh-6rem)] p-12">
        <div class="flex items-center justify-evenly">
            <div class="flex flex-col items-center gap-10 font-medium max-w-1/3 w-full">
                <h1 class="text-4xl font-bold text-primary">{{ $t('ux.title') }}</h1>
                <p class="text-xl">{{ $t('ux.section1') }}</p>
                <p class="text-xl">{{ $t('ux.section2') }}</p>
                <ul class="list-disc text-xl">
                    <li>{{ $t('ux.section21') }}</li>
                    <li>{{ $t('ux.section22') }}</li>
                    <li>{{ $t('ux.section23') }}</li>
                </ul>
                <p class="text-lg">{{ $t('ux.obs') }}</p>
            </div>
            <div class="h-full">
                <img src="../../public/JOGAR.svg" alt="">
            </div>
        </div>
    </div>
</template>