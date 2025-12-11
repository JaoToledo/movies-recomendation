import { TypographyVariants } from "./variants"

type TypographyVariant = keyof typeof TypographyVariants

export type TypographyProps = {
    children: string,
    variant?: TypographyVariant,
    className?: string,
}

