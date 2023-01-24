import { describe, expect, it, vi } from 'vitest'
import { seeran } from './index'

describe('index.ts', () => {
  const SEED = {
    number: 123,
    string: 'hello world',
  }

  const TEN_RESULTS_OF_SEED_ONE = [
    0.1198014235123992, 0.9354658843949437, 0.5764761702157557,
    0.329674051143229, 0.9269699552096426, 0.04019391303882003,
    0.10265917237848043, 0.5101447412744164, 0.15607460448518395,
    0.9286545519717038,
  ]

  it('returns a function', () => {
    const instance = vi.fn(seeran)

    expect(instance).toBeTypeOf('function')
  })

  it('runs without the seed', () => {
    const instance = vi.fn(seeran)

    instance()

    expect(instance).toHaveBeenCalled()
  })

  it('accepts seed argument as number', () => {
    const instance = vi.fn(seeran)

    const { value } = instance(SEED.number).next()

    expect(instance).toHaveBeenCalled()
    expect(value).toBe(0.1198014235123992)
  })

  it('accepts seed argument as string', () => {
    const instance = vi.fn(seeran)

    const { value } = instance(SEED.string).next()

    expect(instance).toHaveBeenCalled()
    expect(value).toBe(0.8790761367417872)
  })

  it('returns same result if seed is identical', () => {
    const instanceOne = vi.fn(seeran)
    const instanceTwo = vi.fn(seeran)

    const [valueOne, valueTwo] = [
      instanceOne(SEED.number).next().value,
      instanceTwo(SEED.number).next().value,
    ]

    expect(valueOne).toStrictEqual(valueTwo)
  })

  it('returns different result if seed is not identical', () => {
    const instanceOne = vi.fn(seeran)
    const instanceTwo = vi.fn(seeran)

    const [valueOne, valueTwo] = [
      instanceOne(SEED.number).next().value,
      instanceTwo(SEED.string).next().value,
    ]

    expect(valueOne).not.toStrictEqual(valueTwo)
  })

  it('generates different outputs if looped through a single instance', () => {
    const instance = vi.fn(seeran)
    const generator = instance(SEED.number)

    let output = []
    for (let i = 0; i < 10; i++) {
      output.push(generator.next().value)
    }

    expect(output).toStrictEqual(TEN_RESULTS_OF_SEED_ONE)
  })
})
