import { describe, expect, it, vi } from 'vitest'
import { isModulz } from './index'

describe('index.ts', () => {
  it('exports a function', () => {
    expect(typeof isModulz).toBe('function')
  })

  describe('it must start with an "M" and end with an "Z"', () => {
    it('must cannot be just two letters', () => {
      const instance = vi.fn(isModulz)
      expect(instance('mz')).toBe(false)
    })

    it('must contain something in-between the letters', () => {
      const instance = vi.fn(isModulz)
      expect(instance('modulz')).toBe(true)
    })
  })
})
