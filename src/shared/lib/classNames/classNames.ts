import {Theme} from "app/providers/ThemeProvider/lib/ThemeContext";

type Mods = Record<string, string | boolean>;
export function ClassNames(cls: string, mods: Mods = {}, additional: (Theme | undefined | string)[] = []): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ]
        .join(' ');
}