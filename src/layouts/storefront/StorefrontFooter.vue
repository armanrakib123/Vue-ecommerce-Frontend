<template>
  <footer class="bg-slate-900 text-slate-400 border-t border-slate-800 mt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        <!-- Brand Info -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-2.5">
            <img src="/logo.svg" alt="Nexora" class="w-8 h-8 rounded-lg" />
            <span class="text-xl font-black text-white font-display">NEXORA</span>
          </div>
          <p class="text-xs text-slate-400 leading-relaxed max-w-sm">
            FAANG-grade Enterprise Multi-Role E-Commerce Ecosystem. Modular Vue 3 architecture designed for extreme scale, testability, and ultra-high conversion.
          </p>
          <div class="flex items-center gap-2 pt-2">
            <span class="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 font-medium">Vue 3.5</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 font-medium">Pinia 2.3</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 font-medium">Tailwind CSS</span>
            <span class="px-2.5 py-1 rounded bg-slate-800 text-[11px] text-slate-300 font-medium">RBAC Engine</span>
          </div>
        </div>

        <!-- Portals Links -->
        <div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Enterprise Portals</h4>
          <ul class="space-y-2 text-xs">
            <li><RouterLink to="/admin/dashboard" class="hover:text-white transition">Admin Portal</RouterLink></li>
            <li><RouterLink to="/seller/dashboard" class="hover:text-white transition">Merchant Center</RouterLink></li>
            <li><RouterLink to="/support/dashboard" class="hover:text-white transition">Support Desk</RouterLink></li>
            <li><RouterLink to="/warehouse/dashboard" class="hover:text-white transition">Warehouse Ops</RouterLink></li>
            <li><RouterLink to="/marketing/campaigns" class="hover:text-white transition">Marketing Suite</RouterLink></li>
          </ul>
        </div>

        <!-- Customer Links -->
        <div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Customer Area</h4>
          <ul class="space-y-2 text-xs">
            <li><RouterLink to="/account/profile" class="hover:text-white transition">My Profile</RouterLink></li>
            <li><RouterLink to="/account/orders" class="hover:text-white transition">Track Orders</RouterLink></li>
            <li><RouterLink to="/account/wishlist" class="hover:text-white transition">Saved Items</RouterLink></li>
            <li><RouterLink to="/account/returns" class="hover:text-white transition">Returns & Exchanges</RouterLink></li>
            <li><RouterLink to="/support/help" class="hover:text-white transition">Help Center</RouterLink></li>
          </ul>
        </div>

        <!-- Legal & Newsletter -->
        <div>
          <h4 class="text-xs font-bold text-white uppercase tracking-wider mb-3">Stay Connected</h4>
          <p class="text-xs text-slate-400 mb-3">Receive insider drops, firmware updates, and private sales.</p>
          <div class="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              class="w-full px-3 py-2 bg-slate-800 border border-slate-700 rounded-lg text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-500"
            />
            <button class="px-3 py-2 bg-brand-600 hover:bg-brand-700 text-white rounded-lg text-xs font-bold transition">
              Join
            </button>
          </div>
        </div>
      </div>

      <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Nexora Commerce Inc. All rights reserved.</p>
        <div class="flex gap-4">
          <RouterLink to="/about" class="hover:text-slate-400">About Us</RouterLink>
          <RouterLink to="/faq" class="hover:text-slate-400">FAQ</RouterLink>
          <RouterLink to="/contact" class="hover:text-slate-400">Contact</RouterLink>
          <span>Privacy & Terms</span>
        </div>
      </div>
    </div>
  </footer>
</template>
