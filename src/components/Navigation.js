import React from 'react';

class Navigation extends React.Component {
    onAddDragMouseDown = (event) => {
        const layout = this.props.layoutRef.current
        const maximizedTabset = this.props.maximizedTabset

        event.stopPropagation();
        event.preventDefault();
        if (maximizedTabset == null) {
            layout.addTabWithDragAndDrop(
                "Add grid<br>(Drag to location)",
                {
                    component: "grid",
                    name: "Grid " + this.nextGridIndex++
                },
                this.onAdded
            );
        }
    }

    render() {
        return (
            <button onMouseDown={this.onAddDragMouseDown}>Nav</button>
        )
    }
}

export default Navigation;