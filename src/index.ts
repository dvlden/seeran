type Modulz<T extends string> = T extends `m${infer _}z` ? T : never

const isModulz = <T extends string>(input: T): input is Modulz<T> => {
  return input.length > 2 && input.startsWith('m') && input.endsWith('z')
}

export { type Modulz, isModulz }
