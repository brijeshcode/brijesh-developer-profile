<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import SectionTitle  from '@/Components/ResumeSections/SectionTitle.vue';
import IconCalender from '@/components/icons/IconCalender.vue';
import IconLocation from '@/components/icons/IconLocation.vue';
const { 
    experiences,
} = useBrijeshInfo();

</script>

<template>
    <section id="summary-section" class="mb-4">
        <SectionTitle>EXPERIENCE</SectionTitle>
        <div class="p-2" v-for="experiance in experiences" :key="experiance.title">
            <h2 class="font-semibold text-sm md:text-[16px] mb-1">{{ experiance.title }}</h2>
            <h3 class="font-bold text-sm md:text-[14px] text-sky-600 mb-1">{{ experiance.work_at }}</h3>
            <div class="md:text-[11px] text-gray-600 flex gap-3">
                <span class="flex gap-2">
                    <icon-calender class="w-4" /> 
                    {{ experiance.time_from }} - {{ experiance.time_to }}
                </span>
                
                <span class="flex gap-1">
                    <icon-location class="w-4" /> 
                    {{ experiance.location }} 
                </span>
            </div>

            <div class="text-gray-700 text-sm md:text-[12px]">
                <p>{{ experiance.compnay_description }}</p>
                <ul class="list-disc list-inside p-2">
                    <li v-for="point in experiance.descriptions" :key="point">{{ point }}</li>
                </ul>
            </div>
            
        </div>
    </section>
</template>
