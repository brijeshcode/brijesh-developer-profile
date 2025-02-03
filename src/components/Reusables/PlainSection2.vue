<template>
    <section id="objective-section" class="mb-4">
        <div class="section-title w-full border-b-2 text-lg font-bold">
            <slot name="title"></slot>
        </div>
        <div class="p-2 text-sm text-[12px] flex " >
            <div class="w-2/12">&nbsp;</div>
            <div class="w-10/12">
                <slot name="body"></slot>
            </div>
        </div>

    </section>
</template>