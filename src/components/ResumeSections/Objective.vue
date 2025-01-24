<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import  SectionTitle from '../ResumeSections/SectionTitle.vue';
const { 
    objectives,
} = useBrijeshInfo();

</script>

<template>
    <section id="summary-section" class="mb-4">
        <SectionTitle>Summary</SectionTitle>
        <div class="p-2 text-sm text-[12px]" >
            {{ objectives.fourth }}
        </div>
    </section>
</template>
