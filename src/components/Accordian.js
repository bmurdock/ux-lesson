import React, { Component } from 'react';
import './styles/Accordian.css';

export default class Accordian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentClass: 'accordian-hidden',
            headerClass: ''
        };
        this.toggle = this.toggle.bind(this);

    }

    toggle(event) {
        if (this.state.headerClass === '') {
            this.setState({
                headerClass: 'accordian-active',
                contentClass: 'accordian-visible'
            });
        }
        else {
            this.setState({
                headerClass: '',
                contentClass: 'accordian-hidden'
            });
        }
    }

    render() {
        return (
            <div className={`accordian ${this.state.headerClass}`} onClick={this.toggle}>
                <h3 className="accordian-title">
                    {this.props.title}
                </h3>
                <div className={`accordian-content ${this.state.contentClass}`}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}