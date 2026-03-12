<template>
    <div class="w-full min-h-[calc(100vh-6rem)] p-6 md:p-12 bg-base-100">
        
        <div class="flex flex-col-reverse md:flex-row items-center justify-evenly gap-10 md:gap-16">
            
            <div class="flex flex-col items-center md:items-start gap-6 md:gap-10 font-medium w-full md:max-w-xl">
                
                <h1 class="text-3xl md:text-4xl font-bold text-primary text-center md:text-left">
                    {{ $t('ux.title') }}
                </h1>
                
                <div class="space-y-4 text-center md:text-left">
                    <p class="text-lg md:text-xl">{{ $t('ux.section1') }}</p>
                    <p class="text-lg md:text-xl">{{ $t('ux.section2') }}</p>
                </div>

                <ul class="list-disc text-lg md:text-xl pl-6 self-start md:self-auto">
                    <li>{{ $t('ux.section21') }}</li>
                    <li>{{ $t('ux.section22') }}</li>
                    <li>{{ $t('ux.section23') }}</li>
                </ul>
                
                <p class="text-base md:text-lg italic opacity-80 text-center md:text-left">
                    {{ $t('ux.obs') }}
                </p>
            </div>

            <div class="w-full max-w-xs md:max-w-md lg:max-w-lg">
                <img src="../../public/JOGAR.svg" alt="UX Illustration" class="w-full h-auto object-contain">
            </div>

        </div>
    </div>
</template>