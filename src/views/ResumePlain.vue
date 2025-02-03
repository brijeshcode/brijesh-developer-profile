<script setup>
import { useBrijeshInfo } from '../Data/BrijeshInfo.js'
import PlainSection from '@/components/Reusables/PlainSection.vue';
import LinkedinLink from '@/components/Reusables/LinkedinLink.vue';
import WhatsappLink from '@/components/Reusables/WhatsappLink.vue';
import EmailLink from '@/components/Reusables/EmailLink.vue';
import ResumeTemplate from '@/components/Reusables/ResumeTemplate.vue';


const {   
    projects,
    personalInfo,
    educations,
    strengths,
    experiences,
    objectives,
    resumeSkills,
    contact_info
} = useBrijeshInfo();

</script>

<template>
    <resume-template>

        <section class="header text-center flex flex-col items-center mb-4">
            <h1 class="font-bold text-gray-700 text-3xl md:text-2xl mb-1 uppercase">
                {{ personalInfo.name }}
            </h1>
            <ul class="flex flex-col md:flex-row print:flex-row space-x-4 items-center">
                <li><WhatsappLink /></li>
                <li><EmailLink /></li>
                <li><LinkedinLink /></li>
            </ul>
        </section>

        <plain-section id="objective-section">
            <template #title>OBJECTIVES</template>
            <template #body>{{ objectives.second }}</template>
        </plain-section>


        <plain-section id="skills-section">
            <template #title>TECHNICAL SKILLS</template>
            <template #body>
                <div class="grid grid-cols-2">

                <div v-for="(skills, key) in resumeSkills" :key="key"  > 
                    <h3 class="font-bold text-lg md:text-[14px] mb-1 capitalize">{{  key.replace(/_/g, " ") }}:</h3>
                    <div v-for="category in skills" :key="category.title" class="px-2" >
                            <b>{{ category.title }}: </b>
                            <span class="ita">
                                {{ category.skills.map(skill => skill.name).join(', ') }}
                            </span>
                    </div>
                </div>
            </div>

            </template>
        </plain-section>

        <plain-section id="exprience-section">
            <template #title>EXPERIENCE</template>
            <template #body>
                <div class="p-2" v-for="experiance in experiences" :key="experiance.title">
                    <div class="flex justify-between font-bold">
                        <h3 class="text-sm md:text-[16px] capitalize">{{ experiance.work_at }}</h3>

                        <span>
                            <icon-calender class="w-4" /> 
                            {{ experiance.time_from }} - {{ experiance.time_to }}
                        </span>
                    </div>

                    <div class="flex justify-between italic">
                        <h2 class=" text-sm md:text-[14px] capitalize mb-1">{{ experiance.title }}</h2>

                        <span class="flex gap-1 capitalize">
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
            </template>
        </plain-section>
        

        <plain-section id="project-section">
            <template #title>Notable Projects</template>
            <template #body>
                <template v-for="project in projects" :key="project.title" >
                    
                    <div class="p-2" v-if="project.is_featured" >
                        <div class="flex justify-between font-bold">
                            <h3 class="text-sm md:text-[16px] capitalize">{{ project.title }}</h3>

                            <span>
                                <icon-calender class="w-4" /> 
                                {{ project.time }}
                            </span>
                        </div>

                        <div class="flex justify-between italic">
                            <h2 class=" text-sm md:text-[14px] capitalize mb-1">{{ project.role }}</h2>

                            <span class="flex gap-1 capitalize">
                                {{ project.created_for }}
                            </span>
                        </div>

                        <div class="text-gray-700 text-sm md:text-[12px]">
                            <ul class="list-disc list-inside p-2">
                                <li v-for="(point, index) in project.highlights.slice(0, 2)" :key="index">{{ point }}</li>
                            </ul>
                        </div>
                    </div>
                </template>
            </template>
        </plain-section>

        <plain-section id="education-section">
            <template #title>EDUCATION</template>
            <template #body>
                <div class="px-2 py-1" v-for="education in educations" :key="education.year">
                    <div class="flex justify-between font-bold">
                        <h3 class="text-sm md:text-[16px] capitalize">{{ education.institute }}</h3>

                        <span class="flex">
                            <icon-calender class="w-4" /> 
                            {{ education.year }}
                        </span>
                    </div>

                    <div class="flex justify-between italic">
                        <h2 class=" text-sm md:text-[14px] capitalize mb-1">{{ education.degree }}</h2>

                        <span class="flex gap-1 capitalize">
                            {{ education.location }} 
                        </span>
                    </div>

                </div>
            </template>
        </plain-section>

        <plain-section id="strengths-section">
            <template #title>STRENGTH</template>
            <template #body>
                <div class="p-2 text-sm text-[12px] flex gap-x-5" >
                    <div v-for="strength in strengths" :key="strength.name"> 
                        <h2 class="font-semibold text-sm md:text-[14px] mb-1">{{ strength.name }}</h2>
                        <div class="text-[11px]">{{ strength.description }}</div>
                    </div>
                </div>
            </template>
        </plain-section>

        <plain-section id="language-section">
            <template #title>LANGUAGE</template>
            <template #body>
                <div class="p-2 text-sm text-[12px] grid grid-cols-2 " >
                    <div v-for="language in personalInfo.languages" :key="language.name" class=""> 
                        <div class="flex gap-x-16 " >
                            <span class="font-semibold text-sm md:text-[16px] print:text-[14px] mb-1">{{ language.name }}</span>
                            <span class="font-bold text-sm md:text-[14px] print:text-[12px] text-sky-600 mb-1">{{ language.level }}</span>
                        </div>
                    </div>
                </div>
            </template>
        </plain-section>
    </resume-template>
</template>
