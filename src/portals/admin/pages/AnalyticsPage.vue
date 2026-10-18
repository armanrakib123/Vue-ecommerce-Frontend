<template>
  <div class="space-y-8">
    <div class="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
      <div>
        <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Executive Analytics & Revenue Metrics</h1>
        <p class="text-xs text-slate-500">Live cohort metrics, conversion funnels, and average order value modeling</p>
      </div>
      <BaseButton variant="primary" size="sm" @click="exportData">
        Export BI Datasets
      </BaseButton>
    </div>

    <!-- Core KPI Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <StatCard title="Average Order Value" value="$284.50" :change="6.2" description="Driven by audio & titanium drops" />
      <StatCard title="Checkout Funnel Conversion" value="3.84%" :change="0.9" description="Industry benchmark 2.2%" />
      <StatCard title="Customer Lifetime Value" value="$840.00" :change="12.0" description="12-month cohort projection" />
      <StatCard title="Cart Abandonment Rate" value="58.2%" :change="-3.4" description="Decreased with 1-click Apple Pay" />
    </div>

    <!-- Conversion Funnel Visualization -->
    <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
      <h3 class="text-sm font-bold text-slate-900 dark:text-white">Storefront Conversion Funnel (Last 30 Days)</h3>
      <div class="space-y-4">
        <div>
          <div class="flex justify-between text-xs font-bold mb-1">
            <span>1. Unique Storefront Visitors</span>
            <span>128,400 (100%)</span>
          </div>
          <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-brand-500 w-full rounded-full"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-bold mb-1">
            <span>2. Product Detail Page Views</span>
            <span>64,200 (50.0%)</span>
          </div>
          <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-brand-500 w-1/2 rounded-full"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-bold mb-1">
            <span>3. Added Hardware to Cart</span>
            <span>18,600 (14.5%)</span>
          </div>
          <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-brand-500 w-[14.5%] rounded-full"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-bold mb-1">
            <span>4. Initiated Checkout Stepper</span>
            <span>8,100 (6.3%)</span>
          </div>
          <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-brand-500 w-[6.3%] rounded-full"></div>
          </div>
        </div>

        <div>
          <div class="flex justify-between text-xs font-bold text-emerald-600 mb-1">
            <span>5. Completed Orders & Payment Captured</span>
            <span>4,930 (3.84%)</span>
          </div>
          <div class="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div class="h-full bg-emerald-500 w-[3.84%] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Category GMV Distribution -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Revenue by Product Category</h3>
        <div class="space-y-3 text-xs">
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span>Electronics & Studio Audio</span>
            <span class="font-bold text-brand-600">$84,120.00 (56%)</span>
          </div>
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span>Modern Home & Lighting</span>
            <span class="font-bold text-brand-600">$32,450.00 (22%)</span>
          </div>
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span>Luxury Travel & EDC Packs</span>
            <span class="font-bold text-brand-600">$21,800.00 (15%)</span>
          </div>
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span>Merino & Performance Apparel</span>
            <span class="font-bold text-brand-600">$10,550.00 (7%)</span>
          </div>
        </div>
      </div>

      <div class="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-4">
        <h3 class="text-sm font-bold text-slate-900 dark:text-white">Top Converting Geo-Regions</h3>
        <div class="space-y-3 text-xs">
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span>North America (US & Canada)</span>
            <span class="font-bold text-emerald-600">62% GMV • 4.1% Conv</span>
          </div>
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span>European Union & UK</span>
            <span class="font-bold text-emerald-600">26% GMV • 3.7% Conv</span>
          </div>
          <div class="flex justify-between items-center p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40">
            <span>Asia Pacific (Japan, SG, AU)</span>
            <span class="font-bold text-emerald-600">12% GMV • 3.2% Conv</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useNotificationStore } from '@/stores/notification.store.js'
import StatCard from '@/components/data-display/StatCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'

const notificationStore = useNotificationStore()

function exportData() {
  notificationStore.success('Business Intelligence dataset exported to BigQuery/CSV archive!')
}
</script>
