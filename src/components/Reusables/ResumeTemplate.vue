<script setup>
import ResumeNav from '@/components/Reusables/ResumeNav.vue';
</script>

<template>
    <div class="min-h-screen bg-paper py-6 print:bg-white print:py-0">
        <div class="mx-auto w-full max-w-3xl px-4 print:max-w-none print:px-0">
            <ResumeNav />
            <section class="rounded-xl border border-hairline bg-white p-8 shadow-sm print:rounded-none print:border-0 print:p-0 print:shadow-none">
                <slot></slot>
            </section>
        </div>
    </div>
</template>
