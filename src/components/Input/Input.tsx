import { ChangeEvent, ForwardedRef, forwardRef } from "react";
import { InputStyle } from "./Input.styles";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    ref?: ForwardedRef<HTMLInputElement>;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, placeholder, value, onChange }: InputProps, ref) => {
        const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
            const newValue = event.target.value;
            onChange(newValue);
        };

        return (
            <>
                <InputStyle
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={handleTextChange}
                    ref={ref}
                />
            </>
        );
    }
);
