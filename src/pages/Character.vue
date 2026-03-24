<template>
    <div class="min-h-screen w-full bg-base-100 overflow-x-hidden">
        <img src="../../public/Rectangle 54.svg" class="w-full h-auto object-cover" />

        <div class="mx-auto container flex flex-col items-center px-4 md:px-0">
            <p class="text-center mt-6 md:mt-4 text-[#30A3A3] font-bold text-3xl md:text-6xl tracking-widest">
                APRESENTA
            </p>
            
            <img src="../../public/HdN_11.svg" class="mt-8 md:mt-10 w-2/3 md:w-auto" />

            <p class="text-xl md:text-3xl font-medium text-center mt-10 md:mt-14 px-4 md:px-20 leading-relaxed md:leading-14">
                {{ $t('characters.hdnDescription') }}
            </p>

            <p class="text-center text-lg md:text-xl mt-10 md:mt-20 px-4 md:px-20">
                {{ $t('characters.inDev') }}
                <br class="hidden md:block">
                <br class="hidden md:block">
                {{ $t('characters.follow') }}
            </p>

            <img src="../../public/Group 11hdn.svg" class="w-full mt-10" />
        </div>

        <div class="mt-20 md:mt-40 bg-[#30A3A3] flex items-center justify-center text-white text-3xl md:text-5xl font-bold h-24 md:h-44 px-4 text-center">
            {{ $t('characters.hero') }}
        </div>

        <div class="p-4 md:p-10">
            <img src="../../public/Group 5.svg" class="w-full h-auto" />
        </div>

        <div class="mt-20 md:mt-40 bg-[#30A3A3] flex items-center justify-center text-white text-3xl md:text-5xl font-bold h-24 md:h-44">
            CHICA
        </div>

        <div class="p-4 md:p-10">
            <img src="../../public/CHICA.svg" class="w-full h-auto" />
        </div>

        <div class="container mx-auto text-center mt-10 mb-20 px-6">
            <p class="text-lg md:text-2xl">{{ $t('characters.modelsheet1') }}</p>
            <p class="text-lg md:text-2xl mt-4 md:mt-0">{{ $t('characters.modelsheet2') }}</p>
            <p class="text-xl md:text-2xl text-[#30A3A3] mt-6 font-bold">Luli Bufano</p>
        </div>
    </div>
</template>