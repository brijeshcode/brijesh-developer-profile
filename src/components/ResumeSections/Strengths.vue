<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import  SectionTitle  from '@/Components/ResumeSections/SectionTitle.vue';
import IconHalfStar from '@/components/icons/IconHalfStar.vue';
import IconMagicWand from '@/components/icons/IconMagicWand.vue';
import IconTick from '@/components/icons/IconTick.vue';
import IconChat from '@/components/icons/IconChat.vue';
const { 
    strengths,
} = useBrijeshInfo();

</script>

<template>
    <section class="mb-4">
        <SectionTitle>Strength</SectionTitle>
        <div class="p-2 text-sm md:text-[12px] " >
            <div class="flex gap-4 mb-4 items-start" v-for="strength in strengths" :key="strength.name"> 
                    <icon-half-star v-if="strength.icon === 'half-star'" class="w-12 text-sky-600" />
                    <icon-magic-wand v-if="strength.icon === 'magic-wand'" class="w-12 text-sky-600" />
                    <icon-tick v-if="strength.icon === 'tick'" class="w-12 text-sky-600" />
                    <icon-chat v-if="strength.icon === 'chat'" class="w-12 text-sky-600" />
                <div>
                    <h2 class="font-semibold text-sm md:text-[16px] mb-1">{{ strength.name }}</h2>
                    <div>{{ strength.description }}</div>
                </div>
            </div>
        </div>
    </section>
</template>
