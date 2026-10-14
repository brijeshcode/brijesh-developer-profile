<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import IconLocation from '@/components/icons/IconLocation.vue';
import LinkedinLink from '@/components/Reusables/LinkedinLink.vue';
import WhatsappLink from '@/components/Reusables/WhatsappLink.vue';
import EmailLink from '@/components/Reusables/EmailLink.vue';

const {
    personalInfo
} = useBrijeshInfo();

</script>

<template>
    <section id="header" class="mb-8 flex items-center justify-between gap-6 border-b border-hairline pb-6">
        <div>
            <h1 class="text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{{ personalInfo.name }}</h1>
            <h2 class="mt-1 font-mono text-sm text-accent">{{ personalInfo.position }}</h2>
            <div class="mt-4 flex flex-wrap gap-x-4 gap-y-1.5 text-[12px] text-ink-soft print:text-[11px]">
                <WhatsappLink />
                <EmailLink />
                <LinkedinLink />
                <div class="flex items-center gap-1.5">
                    <icon-location class="w-4 text-accent" />
                    <span class="font-medium capitalize">{{ personalInfo.location }}</span>
                </div>
            </div>
        </div>
        <img
            class="hidden h-24 w-24 shrink-0 rounded-full object-cover ring-2 ring-accent-soft sm:block"
            :src="'images/' + personalInfo.profile_image"
            :alt="personalInfo.name"
        />
    </section>
</template>
