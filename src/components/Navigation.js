import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './styles/Navigation.css';

export default class Navigation extends Component {
    render() {
        return (
            <section className="main-nav">
                <ul>
                    <li>
                        <Link to="/page1">Page 1</Link>
                    </li>
                    <li>
                        <Link to="/page2">Page 2</Link>
                    </li>
                    <li>
                        <Link to="/page3">Page 3</Link>
                    </li>
                </ul>
            </section>
        )
    }
}