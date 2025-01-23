<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import IconLocation from '@/components/icons/IconLocation.vue';
import LinkedinLink from '@/components/Reusables/LinkedinLink.vue';
import WhatsappLink from '@/components/Reusables/WhatsappLink.vue';
import EmailLink from '@/components/Reusables/EmailLink.vue';
import SkypeLink from '@/components/Reusables/SkypeLink.vue';

const { 
    personalInfo
} = useBrijeshInfo();

</script>

<template>
    <section id="header" class="mb-8">
        
        <div class="resume-header flex gap-2 justify-between">
            <div class="basis-2/3"> 
                <h1 class="font-bold text-gray-700 text-3xl md:text-4xl mb-1 uppercase">{{personalInfo.name}}</h1>
                <h2 class="text-sky-600 font-semibold text-lg md:text-2xl mb-4">{{personalInfo.position}}</h2>
                <div class="contact flex flex-wrap gap-2 print:text-[11px] md:text-[12px] ">
                    
                    <WhatsappLink />
                    <EmailLink />
                    <LinkedinLink />
                    <SkypeLink />
                    <div class="flex gap-1">
                        <icon-location class="w-4 text-sky-600" /> <span class="font-semibold capitalize">{{ personalInfo.location }}</span>
                    </div>

                </div>
            </div>
            <div class="basis-1/3  ">
                <img class="rounded-full w-1/2 m-auto " :src="'images/'+personalInfo.profile_image" :alt="personalInfo.name" />
            </div>
        </div>

    </section>
</template>
