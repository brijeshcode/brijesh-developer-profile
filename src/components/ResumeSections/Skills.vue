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
        <div class="p-2 text-sm md:text-[11px]">
            <div v-for="(skills, key) in resumeSkills" :key="key" class=" mb-4 pb-2"> 
                <h3 class="font-bold text-sm md:text-[14px] text-sky-600 mb-1 capitalize">{{  key.replace(/_/g, " ") }}</h3>

                 

                <div class="flex flex-wrap gap-1">

                    <template v-for="category in skills" :key="category.title" >
                        <!-- {{ category.skills.map(skill => skill.name).join(', ') }} -->
                          <template v-for="detials in category.skills" :key="detials.name">
                             
                              <a  class=" pointer border-b-2 border-gray-300 hover:bg-gray-700 hover:text-white px-1 py-1  " :href="detials.link" :title="detials.description">{{ detials.name }}</a>
                              
                            </template>
                    </template>
                </div>

            </div>
        </div>
    </section>
</template>