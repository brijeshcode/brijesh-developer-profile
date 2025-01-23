<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import  SectionTitle  from '@/Components/ResumeSections/SectionTitle.vue';
const { 
    objectives,
} = useBrijeshInfo();

</script>

<template>
    <section id="summary-section" class="mb-4">
        <SectionTitle>Summary</SectionTitle>
        <div class="p-2 text-sm md:text-[12px] " >
            {{ objectives.third }}
        </div>
    </section>
</template>
