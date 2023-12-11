export {}

type Person = {
    name: string
    age: number
}

type EmployeeOption = {
    [p in keyof Person]?: Person[p]
}

type EmployeeReadonly = {
    readonly[p in keyof Person]: Person[p]
}

const employeeOptional: EmployeeOption = {
    name: 'John'
}

const employeeReadonly: EmployeeReadonly = {
    name: 'John',
    age: 30
}