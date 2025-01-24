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
        <SectionTitle>Notable Projects</SectionTitle> 
        <!-- <div class="md:text-[11px] text-gray-600 flex gap-3">
            <span class="flex gap-2">
                <icon-calender class="w-4" /> 
                10/2016 - 01/2025
            </span>
            
            <span class="flex gap-1 capitalize">
                <icon-location class="w-4" /> 
                Various locations
            </span>
        </div> -->
    
        <template v-for="project in projects" :key="project.title" >
            <div class="p-2" v-if="project.is_featured" >
                <h2 class="font-semibold text-sm md:text-[16px] capitalize mb-1">{{ project.title }}</h2>
                <h3 class="font-bold text-sm md:text-[14px] text-sky-600 mb-1">{{ project.role }}</h3>
                <div class="md:text-[11px] text-gray-600 flex gap-3">
                    <span class="flex gap-2">
                        <icon-calender class="w-4" /> 
                        {{ project.time }}
                    </span>
                    
                    <span class="flex gap-1 capitalize">
                        <icon-location class="w-4" /> 
                        {{ project.created_for }}
                    </span>
                </div>
                <!-- <p class="text-[11px]">{{ project.description }}</p> -->
                
                <div class="text-gray-700 text-sm md:text-[12px] ">
                    <ul class="list-disc list-inside p-2">
                        <li v-for="(point, index) in project.highlights.slice(0, 2)" :key="index">{{ point }}</li>
                    </ul>
                </div>
            </div>
        </template>
    </section>
</template>
