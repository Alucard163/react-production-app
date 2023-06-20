import React from "react";
import {ClassNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";

import cls from './Navbar.module.scss';
import {t} from "i18next";


interface NavbarProps {
    className?: string,
}
export const Navbar = ({className}: NavbarProps) => {
    // const {t} = useTranslation('about');

    return (
        <div className={ClassNames(cls.Navbar, {}, [className])}>
            <div className={cls.links}>
                <AppLink
                    to={'/'}
                    theme={AppLinkTheme.SECONDARY}
                    className={cls.mainLink}
                >
                    {t('main page')}
                </AppLink>
                <AppLink
                    to={'/about'}
                    theme={AppLinkTheme.SECONDARY}
                >
                    О сайте
                </AppLink>
            </div>
        </div>
    )
}