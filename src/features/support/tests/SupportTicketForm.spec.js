import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SupportTicketForm from '../components/SupportTicketForm.vue'

describe('SupportTicketForm.vue', () => {
  it('renders ticket form inputs', () => {
    const wrapper = mount(SupportTicketForm)
    expect(wrapper.text()).toContain('Open Support Ticket')
  })
})
