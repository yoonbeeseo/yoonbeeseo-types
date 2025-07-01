export type Func<T = void> = () => T

export type PropsFunc<TProps = any, T = void> = (props: TProps) => T

export type ReducerAction<TActionType = string, TPayload = undefined> = {
  type: TActionType extends undefined ? string : TActionType
} & (TPayload extends undefined ? undefined : { payload: TPayload })

export type Params<T extends string> = {
  params: Promise<{ [key in T]: string | null }>
}

export type SearchParams<T extends string> = {
  searchParams: Promise<{ [key in T]: string | null }>
}

export type PromiseFuncResult<T = any> = Promise<{
  success?: boolean
  error?: any
  data?: T
}>

export type PromiseFunc<T = void> = () => Promise<T>

export type PromisePropsFunc<TProps, TResult = any> = PropsFunc<TProps, PromiseFuncResult<TResult>>

export type FormProps<T> = {
  payload?: T
  onCancel: Func
  onSubmit: PropsFunc<T>
}

export type YMD = Record<"year" | "month" | "date", number>

export type AxiosAction = "get" | "post" | "put" | "delete" | "patch"
