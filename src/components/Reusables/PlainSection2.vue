<template>
    <section id="objective-section" class="mb-4">
        <div class="mb-1.5 w-full border-b border-ink pb-1 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-ink">
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