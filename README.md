![Seeran](https://repository-images.githubusercontent.com/592780759/bcd7210c-54d6-40d2-b1b0-22984b498c33)

![GitHub package.json version](https://img.shields.io/github/package-json/v/dvlden/seeran?color=86c7ff&style=flat-square)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@dvlden/seeran?color=86c7ff&style=flat-square)

# Seeran

Simple pseudorandom number generator that takes a seed as string or number.
Written as a generator function that can be ran once or as many times as you need.

> Check test cases if you are still wondering what it does.

## Installation

Use your favourite package manager... In my case that's `pnpm`.

```bash
pnpm i @dvlden/seeran
```

## Importing

**ESM**

```ts
import { seeran } from '@dvlden/seeran'
```

**Node**

```ts
const { seeran } = require('@dvlden/seeran')
```

## Usage

```ts
// Basic
const { value } = seeran().next()

// With seed
const { value } = seeran('hello').next()

// Iteration
const sr = seeran('wow')

for (let i = 0; i < 10; i++) {
  console.log(sr.next().value)
}
```
