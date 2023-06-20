import {useTranslation} from "react-i18next";
import React from "react";
import {ClassNames} from "shared/lib/classNames/classNames";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string,
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { i18n, t} = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en-US' : 'ru')
    }

    return (
        <div>
            <Button
                className={ClassNames(cls.LangSwitcher, {}, [className])}
                theme={ThemeButton.CLEAR}
                onClick={toggle}
            ></Button>
            <div>{t('lang')}</div>
        </div>
    )
}