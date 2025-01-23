<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import SectionTitle  from '@/Components/ResumeSections/SectionTitle.vue';
import IconCalender from '@/components/icons/IconCalender.vue';
import IconLocation from '@/components/icons/IconLocation.vue';
const { 
    projects,
} = useBrijeshInfo();

</script>

<template>
    <section id="summary-section" class="mb-4">
        <SectionTitle>Projects</SectionTitle>
        <h2 class="font-semibold text-sm md:text-[16px] capitalize mb-1">Notable Projects</h2>
        <div class="md:text-[11px] text-gray-600 flex gap-3">
                <span class="flex gap-2">
                    <icon-calender class="w-4" /> 
                    10/2016 - 01/2025
                </span>
                
                <span class="flex gap-1 capitalize">
                    <icon-location class="w-4" /> 
                    Various locations
                </span>
            </div>
        
            <template v-for="project in projects" :key="project.title" >
                <div class="p-2" v-if="project.is_featured" >
                    <h2 class="font-semibold text-sm md:text-[16px] capitalize mb-1">{{ project.title }}</h2>
                    <p class="text-[11px]">{{ project.description }}</p>
                </div>
        </template>
    </section>
</template>
