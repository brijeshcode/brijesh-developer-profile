<script setup>
import { useBrijeshInfo } from '../Data/BrijeshInfo.js'
import SectionObjective from '@/components/ResumeSections/Objective.vue';
import SectionExprience from '@/components/ResumeSections/Exprience.vue';
import SectionEducation from '@/components/ResumeSections/Education.vue';
import SectionLanguage from '@/components/ResumeSections/Language.vue';
import SectionHeader from '@/components/ResumeSections/Header.vue';
import SectionStrengths from '@/components/ResumeSections/Strengths.vue';
import SectionSkills from '@/components/ResumeSections/Skills.vue';
import SectionProject from '@/components/ResumeSections/Project.vue';
import ResumeNav from '@/components/Reusables/ResumeNav.vue';
import ResumeTemplate from '@/components/Reusables/ResumeTemplate.vue';

const {   
    projects,
    personalInfo,
    contact_info
} = useBrijeshInfo();

</script>

<template>
    <resume-template>

        <section-header />
        <div class="resume-body flex flex-row gap-10">
            <div class="basis-2/3">
                <section-exprience />
                <section-education />
                <section-project />
                
            </div>
            <div class="basis-1/3">
                <section-objective />
                <section-strengths />
                <section-skills />
                <section-language />

            </div>

        </div>
    </resume-template>
    
</template>
