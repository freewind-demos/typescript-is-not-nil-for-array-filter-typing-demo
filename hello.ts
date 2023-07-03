function isNotNil<T>(obj: T | null | undefined): obj is T {
    return obj !== null && obj !== undefined
}

const list = ["abc", null, "ddd", undefined]


const list2: string [] = list
    // We have to as typing casting "as string[]", otherwise will get compilation error: Type '(string | null | undefined)[]' is not assignable to type 'string[]'.
    .filter(it => it !== null && it !== undefined) as string[]
console.log("list2:", list2)

// NO compilation error
const list3: string[] = list.filter(isNotNil)
console.log("list3:", list3)
