import React from 'react';
import Image from 'next/image';
import rankoviu from './rankoviu.module.css';
import kostiumo from './kostiumo.module.css';
import proginiu from './proginiu.module.css';

const styles = { rankoviu, kostiumo, proginiu };

export interface RepairWork {
    variant: keyof typeof styles;
    title: string;
    text?: string;
    src: string;
    alt: string;
    width: number;
    height: number;
}

export default function RepairCard({ variant, title, text, src, alt, width, height }: RepairWork) {
    const style = styles[variant];
    return (
        <div className={style.container}>
            <h3 className={style.h3}>{title}</h3>
            {text && <p className={style.p}>{text}</p>}
            <Image className={style.img}
                src={src}
                alt={alt}
                width={width}
                height={height}
            />
        </div>
    );
}
