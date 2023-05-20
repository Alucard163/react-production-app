import React, {FC, useState} from "react";

import cls from './Sidebar.module.scss'
import {ClassNames} from "shared/lib/classNames/classNames";
import {ThemeSwitcher} from "widgets/ThemeSwitcher";

interface SidebarProps {
    className?: string,
}
export const Sidebar: FC<SidebarProps> = (props) => {
    const {
        className,
    } = props;
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div
            className={ClassNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <button onClick={onToggle}></button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
            </div>
        </div>
    )
}