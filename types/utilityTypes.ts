export type ExtractFrom<T, K extends keyof T> = { [value in K]: T[value] }

export type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export type NotUndefined<T> = T extends undefined ? never : T

export type OverrideProps<T, U extends { [Property in keyof T]: any }> = Omit<
  T,
  keyof U
> &
  U
