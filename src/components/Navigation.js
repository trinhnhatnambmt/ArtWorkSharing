import React, { Component } from "react";
export default function Navigation() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <a className="active" href="#home">
                            Home
                        </a>
                    </li>
                    <li>
                        <a className="#new" href="#home">
                            News
                        </a>
                    </li>
                    <li>
                        <a className="#about" href="#home">
                            About
                        </a>
                    </li>
                    <li>
                        <a className="#contact" href="#home">
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
