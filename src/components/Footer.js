import React from 'react';
import './Footer.scss'
import { Icon } from '@blueprintjs/core'

export default function Footer() {
    return (
        <footer>
            <div className="status"><Icon icon="offline" iconSize={12} /> not connected</div>
        </footer>
    )
}