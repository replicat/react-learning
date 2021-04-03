import React from 'react';
import { Tree } from '@blueprintjs/core'

var INITIAL_NODES = [
    {
        label: "Getting Started",
        nodeData: {
            component: "GettingStarted",
            name: "Getting Started",
        },
    },
    {
        label: "Account Managment",
        icon: "folder-open",
        isExpanded: true,
        childNodes: [
            {
                label: "Create Account"
            },
            {
                label: "Generate Magic Link"
            },
        ],
    },
]

class Toolbox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nodes: INITIAL_NODES,
        };
    }

    render() {
        const layout = this.props.layoutRef.current
        const model = this.props.model
        const maximizedTabset = model.getMaximizedTabset()
        const activeTabset = model.getActiveTabset()

        const handleNodeClick = (node, nodePath, e) => {
            if (node.nodeData == null || node.nodeData.component == null) {
                if (node.childNodes) {
                    if (node.isExpanded) {
                        handleNodeCollapse(node, nodePath);
                    }
                    else {
                        handleNodeExpand(node, nodePath);
                    }
                }
                return;
            }

            const component = node.nodeData.component
            const name = node.nodeData.name

            if (maximizedTabset) {
                layout.addTabToTabSet(
                    maximizedTabset.getId(),
                    {
                        component: component,
                        name: name,
                    }
                );
            }
            else if (activeTabset) {
                layout.addTabToActiveTabSet(
                    {
                        component: component,
                        name: name,
                    }
                );
            } else {
                const rootTabset = model.getRoot().getChildren()
                const newestTabset = rootTabset[rootTabset.length - 1]

                layout.addTabToTabSet(
                    newestTabset.getId(),
                    {
                        component: component,
                        name: name,
                    }
                );
            }
        }

        const handleNodeExpand = (_node, nodePath) => {
            const nodes = this.state.nodes.slice();
            const node = nodes[1];

            node.isExpanded = true;
            node.icon = "folder-open";

            this.setState({ nodes: nodes });
        }

        const handleNodeCollapse = (_node, nodePath) => {
            const nodes = this.state.nodes.slice();
            const node = nodes[1];

            node.isExpanded = false;
            node.icon = "folder-close";

            this.setState({ nodes: nodes });
        }

        return (
            <Tree
                contents={this.state.nodes}
                onNodeClick={handleNodeClick}
                onNodeExpand={handleNodeExpand}
                onNodeCollapse={handleNodeCollapse}
            />
        )
    }
}

export default Toolbox;