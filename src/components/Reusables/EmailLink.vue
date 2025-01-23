<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import IconEmail from '@/components/icons/IconAt.vue';
const { 
    contact_info
} = useBrijeshInfo();

</script>

<template>
    <div class="flex gap-1">
        <icon-email class="w-4 text-sky-600" /> <a title="Email" :href="'mailto:'+ contact_info.email" target="_blank" class="font-semibold">{{ contact_info.email }}</a>
    </div>
</template>
