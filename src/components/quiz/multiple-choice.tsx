import type { MultipleChoiceProps } from "@/types/multiple-choice";
import { useEffect, useState } from "react";

export default function MultipleChoice({onChoose,options,answer}: MultipleChoiceProps) {
    const [Chose,setChose] = useState<any>()
    
    const handleChoose = (value : any) => {
        setChose(value)
        onChoose(true)
    }

    useEffect(()=> {
        setChose(false)
    },[options,answer])

    return <></>
}
