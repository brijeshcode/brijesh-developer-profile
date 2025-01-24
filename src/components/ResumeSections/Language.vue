<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import SectionTitle  from '@/Components/ResumeSections/SectionTitle.vue';
import IconStar from '@/components/icons/IconStar.vue';
const { 
    personalInfo,
} = useBrijeshInfo();

</script>

<template>
    <section class="mb-4">
        <SectionTitle>Language</SectionTitle>
        <div class="p-2 flex flex-wrap gap-x-4 gap-1 justify-between " >
            <div class="flex grow justify-between items-center" v-for="language in personalInfo.languages" :key="language.name"> 
                <div class="block">
                    <h2 class="font-semibold text-sm md:text-[16px] print:text-[14px] mb-1">{{ language.name }}</h2>
                    <h3 class="font-bold text-sm md:text-[14px] print:text-[12px] text-sky-600 mb-1">{{ language.level }}</h3>
                </div>
                <div class="flex flex-wrap">
                    <icon-star v-for="i in language.rating" :key="i" class="w-4 text-sky-600" />
                    <icon-star v-for="i in 5 - language.rating" :key="i" class="w-4 text-gray-600" />

                </div>
            </div>
        </div>
    </section>
</template>
