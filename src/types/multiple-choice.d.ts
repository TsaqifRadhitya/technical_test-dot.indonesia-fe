export type MultipleChoiceProps = {
    onChoose: (value: any) => void
    options: MultipleChoiceType[]
    answer : any
}

export type MultipleChoiceType = {
    display: string
    value: any
}