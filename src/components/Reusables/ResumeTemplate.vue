<script setup>
import ResumeNav from '@/components/Reusables/ResumeNav.vue';
</script>

<template>
    <section class="bg-slate-700">
        <div class="w-7/12 print:w-full mx-auto">
            <ResumeNav />
            <section class="bg-white rounded p-2  print:p-0">
                <slot></slot>
            </section>
        </div>
    </section>
    
</template>
