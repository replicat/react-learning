import React from 'react';
import FlexLayout from "flexlayout-react";
import Game from './Game'
import Navigation from './Navigation'

var config = {
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
                    "name": "Terminal",
                    "component": "button",
                    "enableDrag": false,
                }
            ],
            "selected": 1,
            "enableDrop": false,
        },
        {
            "type": "border",
            "location": "left",
            "children": [
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Navigation",
                    "component": "Navigation",
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
                "id": "TAB1",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "Game",
                        "component": "Game",
                    },
                    {
                        "type": "tab",
                        "name": "test2",
                        "component": "button",
                    }
                ]
            },
            {
                "type": "tabset",
                "weight": 50,
                "selected": 0,
                "children": [
                    {
                        "type": "tab",
                        "name": "FI",
                        "component": "button",
                    }
                ]
            },
        ]
    }
};

class Layout extends React.Component {
    constructor(props) {
        super(props);
        const model = FlexLayout.Model.fromJson(config);
        this.state = { model: model };
        this.layoutRef = React.createRef();
    }

    factory = (node) => {
        const maximizedTabset = this.state.model.getMaximizedTabset();

        var component = node.getComponent();
        if (component === "button") {
            return <button>{node.getName()}</button>;
        }
        else if (component === "Game") {
            return <Game />;
        }
        else if (component === "Navigation") {
            return <Navigation layoutRef={this.layoutRef} maximizedTabset={maximizedTabset} />
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

export default Layout;
