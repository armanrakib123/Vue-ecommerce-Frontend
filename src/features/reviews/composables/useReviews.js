import { ref } from 'vue'

export function useReviews(initialReviews = []) {
  const reviews = ref(initialReviews.length ? initialReviews : [
    {
      id: 'rev_1',
      author: 'Marcus Vance',
      rating: 5,
      date: '3 days ago',
      title: 'Flawless build quality and sonic separation',
      content: 'The low-end response and acoustic transparency rival headphones twice the price. The titanium headband feels featherlight after 8 hours of mastering.',
      helpfulCount: 42,
      verified: true
    },
    {
      id: 'rev_2',
      author: 'Elena Rostova',
      rating: 5,
      date: '1 week ago',
      title: 'Minimalist industrial aesthetics executed to perfection',
      content: 'Every hinge action has hydraulic tactile feedback. Pairs instantly with my audio workstation.',
      helpfulCount: 19,
      verified: true
    }
  ])

  return { reviews }
}
