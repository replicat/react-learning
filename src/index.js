import React from 'react';
import ReactDOM from 'react-dom';
import FlexLayout from "flexlayout-react";
import 'flexlayout-react/style/light.css'
import Game from './game'

var layout = {
    global: { tabEnableRename: false },
    borders: [
        {
            "type": "border",
            "location": "bottom",
            "children": [
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Output",
                    "component": "grid",
                    "enableDrag": false,
                },
                {
                    "type": "tab",
                    "enableClose": false,
                    "name": "Terminal",
                    "component": "grid",
                    "enableDrag": false,
                }
            ],
            "selected": "1",
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
                    "component": "button",
                    "enableDrag": false,
                }
            ],
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

class Main extends React.Component {

    constructor(props) {
        super(props);
        const model = FlexLayout.Model.fromJson(layout);
        this.state = { model: model };
    }

    factory = (node) => {
        var component = node.getComponent();
        if (component === "button") {
            return <button>{node.getName()}</button>;
        }
        else if (component === "Game") {
            return <Game />;
        }
    }

    render() {
        return (
            <FlexLayout.Layout model={this.state.model} factory={this.factory} />
        )
    }
}

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
