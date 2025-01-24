<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import SectionTitle  from '@/Components/ResumeSections/SectionTitle.vue';
import IconCalender from '@/components/icons/IconCalender.vue';
import IconLocation from '@/components/icons/IconLocation.vue';
const { 
    educations,
} = useBrijeshInfo();

</script>

<template>
    <section id="summary-section" class="mb-4">
        <SectionTitle>Education</SectionTitle>
        <div class="p-2" v-for="education in educations.splice(0, 1)" :key="education.year">
            <h2 class="font-semibold text-sm md:text-[16px] capitalize mb-1">{{ education.degree }}</h2>
            <h3 class="font-bold text-sm md:text-[14px] text-sky-600 mb-1 capitalize">{{ education.institute }}</h3>
            <div class="md:text-[12px] print:text-[11px] text-gray-600 flex gap-3">
                <span class="flex gap-2">
                    <icon-calender class="w-4" /> 
                    {{ education.year }}
                </span>
                
                <span class="flex gap-1 capitalize">
                    <icon-location class="w-4" /> 
                    {{ education.location }} 
                </span>
            </div>

        </div>
    </section>
</template>
