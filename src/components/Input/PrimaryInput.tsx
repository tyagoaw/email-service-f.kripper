import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

interface PrimerayProps {
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

export default function PrimerayInput({name, value, onChange}: PrimerayProps) {
    return (
        <>
        <Input variant='filled' placeholder='Filled' name={name} value={value} onChange={onChange} />
        </>
    )
}