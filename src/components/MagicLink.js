import React from 'react';
import { Card, Button, InputGroup } from '@blueprintjs/core';
import "./MagicLink.scss";

class MagicLink extends React.Component {
    render() {
        return (
            <div className="magic-link">
                <Card>
                    <p>This is the Magic Link page</p>
                    <InputGroup />
                    <Button text="Generate Magic Link" />
                </Card>
            </div>
        )
    }
}

export default MagicLink;