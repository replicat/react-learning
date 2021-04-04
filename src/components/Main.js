import React from 'react';
import FlexLayout from "flexlayout-react";
import Toolbox from './Toolbox'
import GettingStarted from './GettingStarted'
import MagicLink from './MagicLink'

var INITIAL_LAYOUT = {
    global: {
        tabEnableRename: false,
    },
    borders: [
        {
            "type": "border",
            "location": "bottom",
            "children": [
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Output",
                    "component": "button",
                    "enableDrag": false,
                },
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Rails Console",
                    "component": "button",
                    "enableDrag": false,
                }
            ],
            "selected": -1,
            "enableDrop": false,
        },
        {
            "type": "border",
            "location": "left",
            "children": [
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Toolbox",
                    "component": "Toolbox",
                    "enableDrag": false,
                }
            ],
            "selected": 0,
            "enableDrop": false,
        },
    ],
    layout: {
        "type": "row",
        "weight": 100,
        "children": [
            {
                "type": "tabset",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "Getting Started",
                        "component": "GettingStarted",
                    },
                ]
            },
        ]
    }
};

class Main extends React.Component {
    constructor(props) {
        super(props);
        const model = FlexLayout.Model.fromJson(INITIAL_LAYOUT);
        this.state = { model: model };
        this.layoutRef = React.createRef();
    }

    factory = (node) => {
        const model = this.state.model;

        var component = node.getComponent();
        if (component === "Toolbox") {
            return <Toolbox layoutRef={this.layoutRef} model={model} />
        }
        else if (component === "GettingStarted") {
            return <GettingStarted />
        }
        else if (component === "MagicLink") {
            return <MagicLink />
        }

        return null;
    }

    render() {
        return (
            <FlexLayout.Layout
                className="layout"
                ref={this.layoutRef}
                model={this.state.model}
                factory={this.factory}
            />
        )
    }
}

export default Main;
