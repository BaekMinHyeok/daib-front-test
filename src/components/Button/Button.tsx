import { ButtonStyle } from "./Button.styles";

interface ButtonProps {
    children: string;
    onClick: () => void;
}

export function Button({ children, onClick }: ButtonProps) {
    return <ButtonStyle onClick={onClick}>{children}</ButtonStyle>;
}
