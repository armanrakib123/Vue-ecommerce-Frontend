<template>
  <div class="space-y-8">
    <div>
      <h1 class="text-2xl font-black text-slate-900 dark:text-white font-display">Loyalty & Rewards</h1>
      <p class="text-xs text-slate-500">Earn points on every buy and unlock bespoke tier privileges</p>
    </div>
    <LoyaltyBalance :points="points" :tier="tier" :next-tier-points="nextTierPoints" />
    <MembershipTier />
    <RewardsCatalog :rewards="rewards" :user-points="points" @redeem="handleRedeem" />
    <PointsHistory :history="history" />
  </div>
</template>
<script setup>
import LoyaltyBalance from '../components/LoyaltyBalance.vue'
import MembershipTier from '../components/MembershipTier.vue'
import RewardsCatalog from '../components/RewardsCatalog.vue'
import PointsHistory from '../components/PointsHistory.vue'
import { useLoyaltyPoints } from '../composables/useLoyaltyPoints.js'
import { useRewards } from '../composables/useRewards.js'
import { useNotificationStore } from '@/stores/notification.store.js'

const { points, tier, nextTierPoints, history } = useLoyaltyPoints()
const { rewards } = useRewards()
const notificationStore = useNotificationStore()

function handleRedeem(reward) {
  if (points.value >= reward.cost) {
    points.value -= reward.cost
    history.value.unshift({
      id: `lh_${Date.now()}`,
      title: `Redeemed ${reward.title}`,
      points: `-${reward.cost}`,
      date: 'Just now'
    })
    notificationStore.success(`Successfully redeemed: ${reward.title}`)
  }
}
</script>
