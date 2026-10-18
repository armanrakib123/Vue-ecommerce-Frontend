<template>
  <div class="space-y-2">
    <NotificationItem v-for="item in notifications" :key="item.id" :item="item" @mark-read="$emit('mark-read', $event)" />
  </div>
</template>
<script setup>
import NotificationItem from './NotificationItem.vue'
defineProps({ notifications: Array })
defineEmits(['mark-read'])
</script>
