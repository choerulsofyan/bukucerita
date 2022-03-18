import React from 'react';
import '../scss/_divider.scss';

interface DividerProps {
    contentAlign?: 'center' | 'left' | 'right';
    title?: string
}

export const Divider = ({
    contentAlign,
    title,
    ...props
}: DividerProps) => {
    contentAlign = contentAlign ? contentAlign : 'left';
    return (
        <span className={`divider--${contentAlign}`}>{title}</span>
    )
}