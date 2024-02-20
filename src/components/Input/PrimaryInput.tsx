import { Input } from "@chakra-ui/react";
import { ChangeEventHandler } from "react";

import "./Primary-input.css";

interface PrimerayProps {
    name: string,
    value: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    label: string;
    placeholder: string;
}

export default function PrimerayInput({name, value, onChange, label, placeholder}: PrimerayProps){
    return (
        
        <div className="input-container">
            <label className="label">{label}</label>
            <Input 
                variant='filled' 
                placeholder={placeholder}
                name={name} 
                value={value} 
                onChange={onChange} 
            />
        </div>
    )
}