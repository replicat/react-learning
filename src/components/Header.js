import React, { useEffect, useState } from 'react';
import './Header.scss'
import { ReactComponent as LogoSvg } from '../assets/cryptodotcom-logo.svg';

export default function Header() {
    const [datetime, setDatetime] = useState(new Date().toLocaleString());

    useEffect(() => {
        let secTimer = setInterval(() => {
            setDatetime(new Date().toLocaleString())
        }, 1000)

        return () => clearInterval(secTimer);
    }, []);

    return (
        <header>
            <div className="logo"><LogoSvg /></div>
            <div className="title">QA Toolbox</div>
            <div className="datetime">{datetime}</div>
        </header>
    )
}
