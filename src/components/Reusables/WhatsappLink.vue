<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import IconWhatsapp from '@/components/icons/IconWhatsapp.vue';
const { 
    contact_info
} = useBrijeshInfo();

</script>

<template>
    <div class="flex gap-1">
        <!-- <icon-whatsapp class="w-4 text-sky-600" /> <a title="Phone mobile whatsapp" :href="'https://wa.me/'+ contact_info.mobile" target="_blank" class="font-semibold">{{ contact_info.mobile }}</a> -->
        <icon-whatsapp class="w-4 text-sky-600" /> <span title="Phone mobile whatsapp" class="font-semibold">{{ contact_info.mobile }}</span>
    </div>
</template>
