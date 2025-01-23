<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import IconLinkedin from '@/components/icons/IconLinkedin.vue';
const { 
    personalInfo
} = useBrijeshInfo();

</script>

<template>
    <div class="flex gap-1">
        <icon-linkedin class="w-4 text-sky-600" /> <a title="Linkedin" :href="personalInfo.linkdin" target="_blank" class="font-semibold">{{ personalInfo.linkdin.replace(/^https:\/\/www\./, "") }}</a>
    </div>
</template>
