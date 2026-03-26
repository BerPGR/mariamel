<template>
  <div class="min-h-screen w-full bg-base-100 flex flex-col pb-20">
    
    <div class="w-full px-4 md:px-10 mt-6 md:mt-12">
      <div class="container mx-auto max-w-6xl">
        <div class="relative w-full aspect-video shadow-2xl rounded-2xl overflow-hidden border-4 border-[#1f1f1f]/5 bg-black">
          <iframe 
            src="https://www.youtube.com/embed/7YfamD60b9E?si=FETvgI1DBSuE0Do2"
            title="YouTube video player" 
            class="absolute top-0 left-0 w-full h-full"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
          </iframe>
        </div>
      </div>
    </div>

    <div class="w-full bg-[#1f1f1f] text-white h-32 md:h-56 flex items-center justify-center mt-12 md:mt-20 px-6 text-center shadow-inner">
      <h2 class="text-3xl md:text-5xl font-bold tracking-tight uppercase">
        {{ $t('animation.title') }}
      </h2>
    </div>

    <div class="container mx-auto mt-12 md:mt-20 px-6 md:px-20 lg:px-40">
        <div class="flex flex-col gap-6 text-center text-lg md:text-2xl font-medium leading-relaxed text-base-content/80">
            <p>{{ $t('animation.p1') }}</p>
            <p>{{ $t('animation.p2') }}</p>
            <p>{{ $t('animation.p3') }}</p>
        </div>
    </div>

  </div>
</template>