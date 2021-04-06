import React, { useState, useRef } from 'react';
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

export default function Main() {
    const [model] = useState(FlexLayout.Model.fromJson(INITIAL_LAYOUT));
    const layoutRef = useRef(null);

    const factory = (node) => {
        var component = node.getComponent();
        if (component === "Toolbox") {
            return <Toolbox layoutRef={layoutRef} model={model} />
        }
        else if (component === "GettingStarted") {
            return <GettingStarted />
        }
        else if (component === "MagicLink") {
            return <MagicLink />
        }

        return null;
    }

    return (
        <FlexLayout.Layout
            className="layout"
            ref={layoutRef}
            model={model}
            factory={factory}
        />
    )
}
