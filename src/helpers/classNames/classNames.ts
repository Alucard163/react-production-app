import {Theme} from "../../theme/ThemeContext";

type Mods = Record<string, string | boolean>;
export function ClassNames(cls: string, mods: Mods, additional: (Theme | undefined | string)[]): string {
    return [
        cls,
        ...additional,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className)
    ]
        .join(' ');
}