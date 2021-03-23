import React, { Component } from "react";
import './Header.css'
import Profile from './../Profile'
import hasntNotify from './../../img/hasntNotify.svg'
import Notify from './../../img/hasntNotify.svg'
import ProfileIcon from './../../img/profile.svg'

class header extends Component {

    constructor() {
        super();
 
        this.state = {
            displayProfile: false,
            displayNotify: false
        };
 
        this.showProfile = this.showProfile.bind(this);

        this.showNotify = this.showNotify.bind(this);
    }

    showProfile() {
        if(this.state.displayProfile){
            this.setState({
                displayProfile: false
            })
        } else {
            this.setState({
                displayProfile: true
            })
        }
    }

    showNotify() {
        if(this.state.displayNotify){
            this.setState({
                displayNotify: false
            })
        } else {
            this.setState({
                displayNotify: true
            })
        }
    }

    render(){
        return (
            <div>
                <div className="header">
                    <img src={hasntNotify} alt="notify" className="notifyIcon" onClick={this.showNotify}/>
                    <img src={ProfileIcon} alt="profile" className="profileIcon" onClick={this.showProfile} />
                </div>
                <Profile display={this.state.displayProfile}/>
                <NotifyWindow display={this.state.displayNotify} />
            </div>
        );
    }
}

const NotifyWindow = props => {
    let currentClass = props.display ? 'notify' : 'notify hide';

    return (
        <div className={currentClass}>
            <div className="notify1">
                <p className="notifyTitle">Вас добавили на тусу #ОторвемсяСТобой</p>
                <div className="notifyItems">
                    <p className="notifyDate">сегодня в 18.43</p>
                    <button className="notifyBtn">Перейти к тусе</button>
                </div>
            </div>
            <div className="notify2">
                <p className="notifyTitle">Вас добавили на тусу #ОторвемсяСТобой</p>
                <div className="notifyItems">
                    <p className="notifyDate">сегодня в 18.43</p>
                    <button className="notifyBtn">Перейти к тусе</button>
                </div>
            </div>
            <div className="notify3">
                <p className="notifyTitle">Вас добавили на тусу #ОторвемсяСТобой</p>
                <div className="notifyItems">
                    <p className="notifyDate">сегодня в 18.43</p>
                    <button className="notifyBtn">Перейти к тусе</button>
                </div>
            </div>
            <div className="notify4">
                <p className="notifyTitle">Вас добавили на тусу #ОторвемсяСТобой</p>
                <div className="notifyItems">
                    <p className="notifyDate">сегодня в 18.43</p>
                    <button className="notifyBtn">Перейти к тусе</button>
                </div>
            </div>
            <div className="notify5">
                <p className="notifyTitle">Вас добавили на тусу #ОторвемсяСТобой</p>
                <div className="notifyItems">
                    <p className="notifyDate">сегодня в 18.43</p>
                    <button className="notifyBtn">Перейти к тусе</button>
                </div>
            </div>
            <div className="notify6">
                <p className="notifyTitle">Вас добавили на тусу #ОторвемсяСТобой</p>
                <div className="notifyItems">
                    <p className="notifyDate">сегодня в 18.43</p>
                    <button className="notifyBtn">Перейти к тусе</button>
                </div>
            </div>
            <div className="notify7">
                <p className="notifyTitle">Вас добавили на тусу #ОторвемсяСТобой</p>
                <div className="notifyItems">
                    <p className="notifyDate">сегодня в 18.43</p>
                    <button className="notifyBtn">Перейти к тусе</button>
                </div>
            </div>
        </div>
    )
};

export default header;

