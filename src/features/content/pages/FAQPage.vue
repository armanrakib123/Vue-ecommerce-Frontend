<template>
  <div class="max-w-4xl mx-auto px-4 py-16 space-y-8">
    <div class="text-center space-y-2">
      <h1 class="text-3xl font-black text-slate-900 dark:text-white font-display">Frequently Asked Questions</h1>
      <p class="text-xs text-slate-500">Clear answers regarding shipping, warranties, and enterprise licensing</p>
    </div>

    <div class="space-y-4">
      <div v-for="(faq, i) in faqs" :key="i" class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">{{ faq.q }}</h3>
        <p class="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{{ faq.a }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
const faqs = [
  { q: 'Where do you manufacture and assemble products?', a: 'All acoustic drivers and CNC titanium chassis parts are machined and assembled in our certified cleanroom facilities across Oregon and Germany.' },
  { q: 'What is your standard return and warranty policy?', a: 'Every hardware order comes with a 30-day no-questions return window and a 2-year full manufacturer warranty covering all electronics and structural hinges.' },
  { q: 'Do you ship internationally?', a: 'Yes. We deliver via FedEx Priority Air Express to over 160 countries with automated DDP (delivery duty paid) customs clearance.' },
  { q: 'Can corporate clients order in bulk with tax exemption?', a: 'Yes. Enterprise procurement accounts can input their VAT or resale exemption certificate in their account security portal for automatic tax waiver.' }
]
</script>
