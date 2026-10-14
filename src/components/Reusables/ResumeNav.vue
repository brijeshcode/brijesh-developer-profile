<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();

const links = [
    { href: '/', label: 'Portfolio' },
    { href: '/resume-color', label: 'Styled' },
    { href: '/resume-plain', label: 'Plain' },
    { href: '/resume-plain-tab', label: 'Plain · Indented' }
];
</script>

<template>
    <nav class="mb-4 flex flex-wrap items-center justify-between gap-3 print:hidden">
        <ul class="flex flex-wrap gap-1.5">
            <li v-for="link in links" :key="link.href">
                <a
                    :href="link.href"
                    class="rounded-md px-3 py-1.5 text-sm transition-colors"
                    :class="route.path === link.href
                        ? 'bg-accent text-white'
                        : 'border border-hairline bg-white text-ink-soft hover:border-ink'"
                >{{ link.label }}</a>
            </li>
        </ul>

        <button
            class="inline-flex items-center gap-2 rounded-md bg-ink px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent"
            onclick="window.print()"
        >
            <svg class="h-4 w-4 fill-current" viewBox="0 0 512 512"><path d="M128 0C92.7 0 64 28.7 64 64v96h64V64H354.7L384 93.3V160h64V93.3c0-17-6.7-33.3-18.7-45.3L400 18.7C388 6.7 371.7 0 354.7 0H128zM384 352v32 64H128V384 368 352H384zm64 32h32c17.7 0 32-14.3 32-32V256c0-35.3-28.7-64-64-64H64c-35.3 0-64 28.7-64 64v96c0 17.7 14.3 32 32 32H64v64c0 17.7 14.3 32 32 32H416c17.7 0 32-14.3 32-32V384zM432 248a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"/></svg>
            Download PDF
        </button>
    </nav>
</template>
