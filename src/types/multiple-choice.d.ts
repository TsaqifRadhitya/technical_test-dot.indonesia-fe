export type MultipleChoiceProps = {
    onChoose: (value: string) => void
    options: MultipleChoiceType[]
    answer : string
}

export type MultipleChoiceType = {
    display: string
    value: string
}