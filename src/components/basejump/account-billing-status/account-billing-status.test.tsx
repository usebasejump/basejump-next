import { expect, Mock, describe, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import AccountBillingStatus from './account-billing-status'
import { createClient } from '@/lib/supabase/server'

vi.mock('../../../lib/supabase/server', () => ({
  createClient: vi.fn()
}))

describe('AccountBillingStatus', () => {
  describe('when billing is enabled', () => {
    describe('and not setup', () => {
      it('shows a setup button', async () => {
        ;(createClient as Mock).mockImplementation(() => ({
          functions: {
            invoke: vi.fn(() => ({
              data: {
                billing_enabled: true,
                status: 'not_setup'
              }
            }))
          }
        }))
        render(await AccountBillingStatus({accountId: "1", returnUrl: ""}))
        expect(screen.getByRole('button', { name: /setup/i })).toBeDefined()
      })
    })

    describe('and setup', () => {
      it('shows a manage subscription button', async () => {
        ;(createClient as Mock).mockImplementation(() => ({
          functions: {
            invoke: vi.fn(() => ({
              data: {
                billing_enabled: true,
                status: 'active'
              }
            }))
          }
        }))
        render(await AccountBillingStatus({accountId: "1", returnUrl: ""}))
        expect(screen.getByRole('button', { name: /manage/i })).toBeDefined()
      })
    })
  })
})
