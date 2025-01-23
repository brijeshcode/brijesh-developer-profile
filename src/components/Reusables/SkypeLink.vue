<script setup>
import { useBrijeshInfo } from '@/Data/BrijeshInfo.js';
import IconSkype from '@/components/icons/IconSkype.vue';
const { 
    contact_info
} = useBrijeshInfo();

</script>

<template>
    <div class="flex gap-1">
        <icon-skype class="w-4 text-sky-600" /> <a :href="'Skype:'+ contact_info.skype+'?chat'" target="_blank" class="font-semibold" title="skype">{{ contact_info.skype }}</a>
    </div>
</template>
