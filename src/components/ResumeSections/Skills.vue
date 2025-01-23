<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import  SectionTitle  from '@/Components/ResumeSections/SectionTitle.vue';
const {
    resumeSkills,
} = useBrijeshInfo();

</script>

<template>
    <section class="mb-4">
        <SectionTitle>Skills sets</SectionTitle>
        <div class="p-2 text-sm md:text-[12px]">
            <div v-for="(skills, key) in resumeSkills" :key="key" class=" mb-4 pb-2"> 
                <h3 class="font-bold text-sm md:text-[14px] text-sky-600 mb-1 capitalize">{{  key.replace(/_/g, " ") }}</h3>

                <div v-for="category in skills" :key="category.title" class="p-1">
                    <div class="flex flex-wrap gap-2">
                        <!-- <h3 class="font-bold text-sm md:text-[14px] text-sky-600 mb-1">{{ category.title }}</h3> -->
                         {{ category.skills.map(skill => skill.name).join(', ') }}

                        <!-- <span v-for="detials in category.skills" :key="detials.name" class="  px-2 py-1 border-b-2 ">
                            {{ detials.name }}
                        </span> -->
                    </div>
                    <ul></ul>
                </div>
            </div>
        </div>
    </section>
</template>