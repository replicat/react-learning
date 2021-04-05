import React from 'react';
import './Header.scss'
import { ReactComponent as LogoSvg } from '../assets/cryptodotcom-logo.svg';

export default function Header() {
    return (
        <header>
            <div className="logo"><LogoSvg /></div>
            <div className="title">QA Toolbox</div>
            <div className="datetime">01/01/2021 00:00 (GMT+8)</div>
        </header>
    )
}
