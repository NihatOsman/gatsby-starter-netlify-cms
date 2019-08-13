import React from 'react';
import { Link } from 'gatsby';

export default props => (
    <div className="dropdown">
        <span className="nav-item">{props.item.title}</span>
        <div className="dropdown-content">
            <div className="triangle-with-shadow" />
            <div className={`content ${props.item.classes}`}>
                {props.item.menu.map((link, index) => (
                    <Link className="content-wrapper" to={link.to} key={index}>
                        <div className={`img-wrapper ${link.icon}`} />
                        <div className={`link-info ${props.item.class}`}>
                            <span className="link-title">{link.title}</span>
                            <span className="link-description">{link.description}</span>
                            <span className="learn-more">Learn more ➔</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </div>
);
