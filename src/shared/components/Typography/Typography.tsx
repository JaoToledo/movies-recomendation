import { TypographyProps } from "./types";
import { TypographyVariants } from "./variants";

/**
 * Componente de tipografia .
 * @param {TypographyProps} props - Propriedades do componente.
 * @returns {JSX.Element} Elemento de texto estilizado por variantes.
 */

export function Typography
    ({children, 
    variant = "Default", 
    className = ""}:
    TypographyProps) {
        
        return (
            <span className={`${TypographyVariants[variant]} ${className}`}>
                {children}
            </span>
    )
}   