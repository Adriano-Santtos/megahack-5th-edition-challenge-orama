import React from 'react';
import { MdSearch, MdChatBubbleOutline, MdNotificationsNone, MdAccountCircle } from 'react-icons/md';
import './style.css'

export default function Header(){
    return(
        <div className="header">
            <div className="header-content">
                <div className="header-search">
                    <div className="header-input">
                        <input type="text" />
                        <MdSearch size={30} color="#0E2445" />
                    </div>
                </div>
                <div className="header-name">Home</div>
                <div className="header-icons">
                    <MdChatBubbleOutline size={30} color="#0E2445" />
                    &nbsp;
                    &nbsp;
                    &nbsp;
                    <MdNotificationsNone size={30} color="#0E2445" />
                </div>
                <div className="header-logout">
                    <span className="logout">user_01</span>
                    <MdAccountCircle size={50} color="#0E2445" />
                </div>
            </div>
        </div>
    );
}