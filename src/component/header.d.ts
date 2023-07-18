interface getDataReturn {
    data: number
}

interface PropsHeader {
    IconSize: IconSize
}



type IconSize = LooseAutoComplete<'sm' | 'xs' | 'md'>

type LooseAutoComplete<T extends string> = T | Omit<string, T>

type A = Awaited<Promise<string>>;


type TEvent = | {
    type: 'login';
    payload: {
        userId: string
    }
} | {
    type: 'signout'
}

type myObj = Record<string, string[]>;

type GetFirstArgumentOfAnyFunction<T> = T extends (
    first: infer FirstArgument,
    s: infer SecondArgument,
    t: infer ThirdArgument,
    ...args: any[]
) => any
    ? ThirdArgument extends unknown  ? FirstArgument : ThirdArgument
    : never

type t = GetFirstArgumentOfAnyFunction<(name: string, age: number, t: never) => void> 