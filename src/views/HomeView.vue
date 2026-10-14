<script setup>
import { useBrijeshInfo } from '../Data/BrijeshInfo.js'

const {
  skills,
  contact_info,
  experiences,
  projects,
  testimonials,
  personalInfo,
  dispaly_all_skills
} = useBrijeshInfo()

// Signature: real, measurable outcomes rendered as mono numerals.
const metrics = [
  { value: '9+', label: 'Years shipping web apps' },
  { value: '50%', label: 'Higher onboarding engagement' },
  { value: '30%', label: 'Faster booking conversion' },
  { value: '80%', label: 'Fewer partial bookings' }
]

const featured = projects.filter((p) => p.is_featured)
const quotes = testimonials.filter((t) => t.show).slice(0, 3)
</script>

<template>
  <div class="min-h-screen">
    <!-- Nav -->
    <header
      class="sticky top-0 z-30 border-b border-hairline bg-paper/85 backdrop-blur"
    >
      <nav class="wrap flex items-center justify-between py-4">
        <a href="#top" class="font-mono text-sm font-medium tracking-tight text-ink">
          brijesh<span class="text-accent">.</span>dev
        </a>
        <div class="flex items-center gap-6">
          <a href="#work" class="hidden text-sm text-ink-soft hover:text-ink sm:inline">Work</a>
          <a href="#experience" class="hidden text-sm text-ink-soft hover:text-ink sm:inline">Experience</a>
          <a href="#words" class="hidden text-sm text-ink-soft hover:text-ink sm:inline">Words</a>
          <a
            href="/resume-color"
            class="rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-accent"
          >
            Résumé
          </a>
        </div>
      </nav>
    </header>

    <!-- Hero -->
    <section id="top" class="wrap pt-20 pb-16 md:pt-28">
      <div class="grid items-center gap-12 md:grid-cols-[1.6fr_1fr]">
        <div>
          <p class="eyebrow mb-5">Senior Software Engineer</p>
          <h1 class="text-4xl font-extrabold leading-[1.05] tracking-tight text-ink md:text-6xl">
            {{ personalInfo.name }}
          </h1>
          <p class="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
            I build and scale Laravel &amp; Vue.js applications for remote teams across the
            UK, EU and beyond — focused on clean, tested code and measurable outcomes.
          </p>
          <p class="eyebrow mt-6 normal-case tracking-normal">
            {{ personalInfo.location }} &nbsp;·&nbsp; Remote-first &nbsp;·&nbsp; Ex-Keyloop (UK)
          </p>

          <div class="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="/resume-color"
              class="rounded-md bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
            >
              View résumé
            </a>
            <a
              :href="'mailto:' + contact_info.email"
              class="rounded-md border border-hairline px-6 py-3 font-medium text-ink transition-colors hover:border-ink"
            >
              Hire me
            </a>
            <div class="ml-1 flex items-center gap-4 text-ink-soft">
              <a :href="personalInfo.github" target="_blank" rel="noopener" aria-label="GitHub" class="hover:text-accent">
                <svg class="h-5 w-5 fill-current" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z"/></svg>
              </a>
              <a :href="personalInfo.linkdin" target="_blank" rel="noopener" aria-label="LinkedIn" class="hover:text-accent">
                <svg class="h-5 w-5 fill-current" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
              </a>
              <a :href="personalInfo.freelancer" target="_blank" rel="noopener" aria-label="Freelancer" class="hover:text-accent">
                <svg class="h-5 w-5 fill-current" viewBox="0 0 64 64"><path d="M37.6 8.203l4.36 6.113L64 8.203M14.676 55.797l11.93-11.663-7.18-7.705M35.783 8.203l-6.376 5.75 10.724.4m-29.134-6.15l2.3 4.693 12.62.786M17.753 32.54l9.324-17.393L0 13.683m18.838 19.96l8.807 9.46 9.715-9.523 3.015-17.737-11.84-.604"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div class="order-first md:order-last">
          <div class="relative mx-auto w-48 md:w-full md:max-w-xs">
            <div class="absolute -inset-3 -z-10 rounded-2xl bg-accent-soft"></div>
            <img
              :src="'images/' + personalInfo.profile_image"
              :alt="personalInfo.name"
              class="aspect-square w-full rounded-2xl object-cover shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Metrics (signature) -->
    <section class="border-y border-hairline bg-white/60">
      <div class="wrap grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
        <div v-for="m in metrics" :key="m.label">
          <div class="stat text-3xl md:text-4xl">{{ m.value }}</div>
          <p class="mt-1 text-sm text-muted">{{ m.label }}</p>
        </div>
      </div>
    </section>

    <!-- Skills -->
    <section class="wrap py-16 md:py-20">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="eyebrow mb-3">Stack</p>
          <h2 class="text-2xl font-bold tracking-tight text-ink md:text-3xl">What I work with</h2>
        </div>
        <button
          class="font-mono text-xs uppercase tracking-wider text-accent hover:text-accent-dark"
          @click="dispaly_all_skills = !dispaly_all_skills"
        >
          {{ dispaly_all_skills ? 'Show top' : 'Show all' }}
        </button>
      </div>
      <div class="mt-7 flex flex-wrap gap-2.5">
        <span
          v-for="skill in dispaly_all_skills ? skills : skills.filter((s) => s.top_skill)"
          :key="skill.name"
          class="rounded-full border border-hairline bg-white px-4 py-1.5 text-sm text-ink-soft"
        >
          {{ skill.name }}
        </span>
      </div>
    </section>

    <!-- Selected work -->
    <section id="work" class="wrap py-16 md:py-20">
      <p class="eyebrow mb-3">Selected work</p>
      <h2 class="text-2xl font-bold tracking-tight text-ink md:text-3xl">
        Projects I'm proud of
      </h2>

      <div class="mt-12 grid gap-px overflow-hidden rounded-xl border border-hairline bg-hairline sm:grid-cols-2">
        <article
          v-for="(project, index) in featured"
          :key="project.title"
          class="group flex flex-col bg-paper p-7 transition-colors hover:bg-white"
        >
          <div class="flex items-center justify-between">
            <span class="font-mono text-xs text-muted">{{ String(index + 1).padStart(2, '0') }}</span>
            <span class="font-mono text-xs text-muted">{{ project.time }}</span>
          </div>
          <h3 class="mt-4 text-lg font-semibold text-ink">{{ project.title }}</h3>
          <p class="mt-1 text-sm text-muted">{{ project.role }} · {{ project.created_for }}</p>
          <p class="mt-3 text-sm leading-relaxed text-ink-soft">
            {{ project.highlights[0] }}
          </p>
          <div class="mt-5 flex flex-1 flex-wrap content-end gap-2">
            <span
              v-for="tech in project.technology"
              :key="tech"
              class="rounded border border-hairline px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {{ tech }}
            </span>
          </div>
          <a
            v-if="project.url && project.url !== '#'"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="mt-5 inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent-dark"
          >
            Visit site
            <span aria-hidden="true">→</span>
          </a>
        </article>
      </div>
    </section>

    <!-- Experience timeline -->
    <section id="experience" class="wrap py-16 md:py-20">
      <p class="eyebrow mb-3">Experience</p>
      <h2 class="text-2xl font-bold tracking-tight text-ink md:text-3xl">Where I've worked</h2>

      <div class="mt-12 space-y-12">
        <article
          v-for="exp in experiences"
          :key="exp.work_at"
          class="grid gap-x-10 gap-y-3 border-l-2 border-hairline pl-6 md:grid-cols-[13rem_1fr] md:border-l-0 md:pl-0"
        >
          <div class="md:text-right">
            <p class="font-mono text-xs text-accent">{{ exp.time_from }} — {{ exp.time_to }}</p>
            <p class="mt-1 text-sm text-muted">{{ exp.location }}</p>
          </div>
          <div class="md:border-l md:border-hairline md:pl-10">
            <h3 class="text-lg font-semibold text-ink">{{ exp.title }}</h3>
            <p class="text-sm font-medium text-ink-soft">{{ exp.work_at }}</p>
            <ul class="mt-3 space-y-1.5">
              <li
                v-for="point in exp.descriptions"
                :key="point"
                class="relative pl-5 text-sm leading-relaxed text-ink-soft before:absolute before:left-0 before:top-2.5 before:h-1 before:w-1 before:rounded-full before:bg-accent"
              >
                {{ point }}
              </li>
            </ul>
          </div>
        </article>
      </div>
    </section>

    <!-- Testimonials -->
    <section id="words" class="wrap py-16 md:py-20">
      <p class="eyebrow mb-3">In their words</p>
      <h2 class="text-2xl font-bold tracking-tight text-ink md:text-3xl">
        What colleagues &amp; clients say
      </h2>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <figure
          v-for="t in quotes"
          :key="t.name"
          class="flex flex-col rounded-xl border border-hairline bg-white p-7"
        >
          <blockquote class="flex-1 text-sm leading-relaxed text-ink-soft">
            “{{ t.message }}”
          </blockquote>
          <figcaption class="mt-6 border-t border-hairline pt-4">
            <p class="text-sm font-semibold text-ink">{{ t.name }}</p>
            <p class="font-mono text-xs text-muted">{{ t.position }} · {{ t.company }}, {{ t.country }}</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <!-- Contact -->
    <footer class="border-t border-hairline bg-ink text-white">
      <div class="wrap py-20 text-center">
        <p class="eyebrow mb-4 text-white/50">Available for new work</p>
        <h2 class="mx-auto max-w-2xl text-3xl font-bold tracking-tight md:text-4xl">
          Have a role or project in mind? Let's talk.
        </h2>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            :href="'mailto:' + contact_info.email"
            class="rounded-md bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-dark"
          >
            {{ contact_info.email }}
          </a>
          <a
            :href="personalInfo.linkdin"
            target="_blank"
            rel="noopener"
            class="rounded-md border border-white/20 px-6 py-3 font-medium transition-colors hover:border-white"
          >
            LinkedIn
          </a>
          <a
            :href="personalInfo.freelancer"
            target="_blank"
            rel="noopener"
            class="rounded-md border border-white/20 px-6 py-3 font-medium transition-colors hover:border-white"
          >
            Freelancer
          </a>
        </div>
        <p class="mt-14 font-mono text-xs text-white/40">
          © {{ new Date().getFullYear() }} {{ personalInfo.name }} · Built with Vue &amp; Tailwind
        </p>
      </div>
    </footer>
  </div>
</template>
