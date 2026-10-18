import { ref } from 'vue'

export function useContentBlocks() {
  const blocks = ref([
    {
      id: 'cb_1',
      title: 'Aerospace Grade Titanium Fabrication',
      body: 'Forged under 2,000 tons of hydraulic pressure for structural integrity and ultra-lightweight ergonomic comfort.'
    },
    {
      id: 'cb_2',
      title: 'Dual Beryllium Drivers',
      body: 'Ultra-low acoustic distortion across 5Hz - 45kHz harmonic range with zero mechanical resonance.'
    }
  ])
  return { blocks }
}
