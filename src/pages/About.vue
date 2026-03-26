<template>
    <div class="w-full min-h-[calc(100vh-6rem)] flex flex-col justify-between items-center md:items-start bg-base-100">
        
        <span class="hidden md:block"></span>

        <div class="w-full flex flex-col md:flex-row items-center justify-center bg-[#B3D5F4] gap-10 md:gap-20 lg:gap-40 p-8 md:p-16">
            
            <img src="../../public/maria.svg" alt="Maria" class="w-48 md:w-64 lg:w-auto h-auto" />

            <div class="flex flex-col gap-6 md:gap-10 p-2 md:p-10 max-w-2xl">
                <h1 class="text-4xl md:text-5xl text-center md:text-left font-bold">
                    {{ $t('about') }}
                </h1>
                
                <div class="space-y-4 text-lg md:text-2xl font-medium text-center md:text-left">
                    <p>{{ $t('section.about1') }}</p>
                    <p>{{ $t('section.about2') }}</p>
                    <p>{{ $t('section.about3') }}</p>
                </div>
            </div>
        </div>

        <div class="m-6 flex items-center gap-4 self-center md:self-start">
            <p class="text-lg md:text-xl font-semibold">{{ $t('follow') }}</p>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/maria-clara-de-melo-matuchewski-211027239/" 
                       target="_blank" 
                       class="hover:scale-110 transition-transform block">
                        <svg class="h-8 md:h-10" version="1.1" viewBox="0 0 382 382" fill="#000000">
                            <g><path style="fill:#0077B7;" d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"></path></g>
                        </svg>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>