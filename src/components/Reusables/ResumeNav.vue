
<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
    <nav class="py-2 print:hidden flex flex-wrap items-center justify-between">
        <ul class="flex flex-wrap gap-2">
            <li>
                <a 
                    href="/" 
                    class="rounded px-2 py-1 hover:bg-sky-500 hover:text-white"
                    :class="route.path === '/' ? 'bg-sky-500 text-white' : 'bg-gray-200'"
                >Brijesh</a>
            </li>
            <li>
                <a 
                    href="/resume-color" 
                    class="rounded px-2 py-1 hover:bg-sky-500 hover:text-white"
                    :class="route.path === '/resume-color' ? 'bg-sky-500 text-white' : 'bg-gray-200'"
                >Style</a>
            </li>
            <li>
                <a 
                    href="/resume-plain" 
                    class="rounded px-2 py-1 hover:bg-sky-500 hover:text-white"
                    :class="route.path === '/resume-plain' ? 'bg-sky-500 text-white' : 'bg-gray-200'"
                >Plain</a>
            </li>
            <li>
                <a 
                    href="/resume-plain-tab" 
                    class="rounded px-2 py-1 hover:bg-sky-500 hover:text-white"
                    :class="route.path === '/resume-plain-tab' ? 'bg-sky-500 text-white' : 'bg-gray-200'"
                >Plain + Tab</a>
            </li>
        </ul>

        <button class="bg-sky-600 text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-1 rounded" onclick="window.print()">
            Print or Downlaod
        </button>
    </nav>
    
</template>
