import React, { Component } from "react";
import './Profile.css';
import Avatar from './../../img/avatar.png';
import Figures from './Figures';

class profile extends Component {

    constructor() {
        super();
 
        this.state = {
            hideSettings: true,
            displayModal_signOut: false,
            displayModal_saveChanges: false,
            displayModal_changePass: false,
            displayModal_changePassSuccess: false,
            displayModal_deleteAcc: false
        };
 
        this.showSettings = this.showSettings.bind(this);

        this.showModal_signOut = this.showModal_signOut.bind(this);
        this.hideModal_signOut = this.hideModal_signOut.bind(this);

        this.showModal_saveChanges = this.showModal_saveChanges.bind(this);
        this.hideModal_saveChanges = this.hideModal_saveChanges.bind(this);

        this.showModal_changePass = this.showModal_changePass.bind(this);
        this.hideModal_changePass = this.hideModal_changePass.bind(this);

        this.showModal_changePassSuccess = this.showModal_changePassSuccess.bind(this);
        this.hideModal_changePassSuccess = this.hideModal_changePassSuccess.bind(this);

        this.showModal_deleteAcc = this.showModal_deleteAcc.bind(this);
        this.hideModal_deleteAcc = this.hideModal_deleteAcc.bind(this);
    }

    showSettings() {
        if(this.state.hideSettings){
            this.setState({
                hideSettings: false
            })
        } else {
            this.setState({
                hideSettings: true
            })
        }
        
    }

    showModal_signOut() {
        this.setState({
            displayModal_signOut: true
        })
    }

    hideModal_signOut() {
        this.setState({
            displayModal_signOut: false
        })
    }

    showModal_saveChanges() {
        this.setState({
            displayModal_saveChanges: true
        })
    }

    hideModal_saveChanges() {
        this.setState({
            displayModal_saveChanges: false
        })
    }

    showModal_changePass() {
        this.setState({
            displayModal_changePass: true
        })
    }

    hideModal_changePass() {
        this.showModal_changePassSuccess();
        this.setState({
            displayModal_changePass: false
        })
    }

    showModal_changePassSuccess() {
        this.setState({
            displayModal_changePassSuccess: true
        })
    }

    hideModal_changePassSuccess() {
        this.setState({
            displayModal_changePassSuccess: false
        })
    }
    showModal_deleteAcc() {
        this.setState({
            displayModal_deleteAcc: true
        })
    }

    hideModal_deleteAcc() {
        this.setState({
            displayModal_deleteAcc: false
        })
    }

    render(){
        return (
            <div className={this.props.display ? 'profile' : 'profile hide'}>
                <p className="title">My profile</p>
                <div>    
                    <div onClick={this.showSettings} className="setting">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.913 12.5217H27.3085C27.0901 11.8087 26.8042 11.12 26.457 10.464L28.297 8.624C28.6908 8.23026 28.9078 7.70574 28.9078 7.14713C28.9078 6.58922 28.6908 6.0647 28.297 5.67096L26.3283 3.70226C25.5416 2.91548 24.1642 2.91339 23.376 3.70226L21.536 5.54226C20.8807 5.19513 20.1913 4.90991 19.4783 4.69078V2.08696C19.4783 0.936348 18.5419 0 17.3913 0H14.6087C13.4581 0 12.5217 0.936348 12.5217 2.08696V4.69148C11.8087 4.91061 11.12 5.19583 10.464 5.54296L8.6233 3.70296C7.80939 2.88904 6.48487 2.88904 5.67096 3.70296L3.70157 5.67165C2.88835 6.48557 2.88835 7.81009 3.70157 8.624L5.54157 10.4647C5.19444 11.12 4.90922 11.8094 4.69009 12.5224H2.08696C0.936348 12.5224 0 13.4588 0 14.6094V17.392C0 18.5419 0.936348 19.4783 2.08696 19.4783H4.69148C4.91061 20.1913 5.19583 20.88 5.54296 21.536L3.70296 23.3767C2.88904 24.1906 2.88904 25.5151 3.70296 26.329L5.67165 28.2984C6.48557 29.1117 7.81009 29.1117 8.624 28.2984L10.4647 26.4584C11.12 26.8056 11.8094 27.0908 12.5224 27.3099V29.913C12.5224 31.0637 13.4588 32 14.6094 32H17.392C18.5426 32 19.479 31.0637 19.479 29.913V27.3085C20.192 27.0894 20.8814 26.8042 21.5367 26.457L23.3767 28.2977C24.1656 29.0859 25.543 29.0845 26.329 28.2977L28.2977 26.329C28.6915 25.9353 28.9085 25.4108 28.9085 24.8529C28.9085 24.2943 28.6915 23.7704 28.2977 23.3767L26.4577 21.536C26.8049 20.8807 27.0901 20.1913 27.3092 19.4783H29.913C31.0637 19.4783 32 18.5419 32 17.3913V14.6087C32 13.4581 31.0637 12.5217 29.913 12.5217ZM30.6087 17.3913C30.6087 17.7746 30.297 18.087 29.913 18.087H26.7826C26.4654 18.087 26.1885 18.3019 26.1092 18.6087C25.863 19.5583 25.488 20.4647 24.9934 21.3023C24.8327 21.5757 24.8765 21.9235 25.1005 22.1475L27.3127 24.3603C27.4435 24.4911 27.5158 24.6657 27.5158 24.8529C27.5158 25.04 27.4435 25.2146 27.3127 25.3454L25.344 27.3141C25.0824 27.5757 24.6212 27.5757 24.359 27.3141L22.1468 25.1019C21.9228 24.8772 21.575 24.8341 21.3009 24.9948C20.4647 25.4887 19.5583 25.8643 18.608 26.1099C18.3019 26.1885 18.087 26.4654 18.087 26.7826V29.913C18.087 30.2963 17.7753 30.6087 17.3913 30.6087H14.6087C14.2254 30.6087 13.913 30.2963 13.913 29.913V26.7826C13.913 26.4654 13.6981 26.1885 13.3913 26.1092C12.4417 25.8637 11.5353 25.4887 10.6977 24.9941C10.5878 24.9287 10.4661 24.8974 10.3443 24.8974C10.1642 24.8974 9.98609 24.967 9.85183 25.1012L7.63965 27.3134C7.36765 27.5847 6.92661 27.5847 6.65461 27.3134L4.68591 25.3447C4.41391 25.0727 4.41391 24.631 4.68591 24.3597L6.89809 22.1475C7.12278 21.9228 7.16661 21.575 7.00522 21.3023C6.5113 20.4647 6.13565 19.559 5.89009 18.6087C5.81148 18.3019 5.53461 18.087 5.21739 18.087H2.08696C1.70365 18.087 1.3913 17.7746 1.3913 17.3913V14.6087C1.3913 14.2254 1.70365 13.913 2.08696 13.913H5.21739C5.53461 13.913 5.81148 13.6981 5.89078 13.3913C6.13635 12.4417 6.5113 11.5353 7.00591 10.6977C7.1673 10.4243 7.12348 10.0765 6.89878 9.85252L4.68661 7.64035C4.4153 7.36904 4.4153 6.9273 4.68661 6.6553L6.6553 4.68661C6.9273 4.41461 7.36835 4.4153 7.64035 4.68661L9.85252 6.89878C10.0772 7.12348 10.4243 7.168 10.6977 7.00591C11.5353 6.512 12.441 6.13635 13.3913 5.89078C13.6981 5.81148 13.913 5.53461 13.913 5.21739V2.08696C13.913 1.70365 14.2254 1.3913 14.6087 1.3913H17.3913C17.7753 1.3913 18.087 1.70365 18.087 2.08696V5.21739C18.087 5.53461 18.3019 5.81148 18.6087 5.89078C19.559 6.13635 20.4654 6.512 21.3016 7.00591C21.5757 7.1673 21.9235 7.12417 22.1475 6.89878L24.3597 4.68661C24.6219 4.42365 25.0831 4.42435 25.3447 4.68661L27.3134 6.6553C27.4442 6.78609 27.5165 6.96139 27.5165 7.14783C27.5165 7.33426 27.4442 7.50957 27.3134 7.64035L25.1012 9.85252C24.8772 10.0772 24.8327 10.425 24.9941 10.6977C25.4887 11.5353 25.8637 12.441 26.1099 13.3913C26.1885 13.6981 26.4654 13.913 26.7826 13.913H29.913C30.297 13.913 30.6087 14.2254 30.6087 14.6087V17.3913Z" fill="#EEEEEE"/>
                            <path d="M16.0001 9.73914C12.5483 9.73914 9.73926 12.5482 9.73926 16C9.73926 19.4518 12.5483 22.2609 16.0001 22.2609C19.4527 22.2609 22.261 19.4518 22.261 16C22.261 12.5482 19.4527 9.73914 16.0001 9.73914ZM16.0001 20.8696C13.3149 20.8696 11.1306 18.6852 11.1306 16C11.1306 13.3148 13.3149 11.1304 16.0001 11.1304C18.6847 11.1304 20.8697 13.3148 20.8697 16C20.8697 18.6852 18.6847 20.8696 16.0001 20.8696Z" fill="#EEEEEE"/>
                        </svg>
                    </div>
                    <InfAboutMe display={this.state.hideSettings} showModal={this.showModal_signOut}/>
                    <SetAboutMe display={this.state.hideSettings} showModal_saveChanges={this.showModal_saveChanges} showModal_changePass={this.showModal_changePass} showModal_deleteAcc={this.showModal_deleteAcc} />
                </div>
                <Modal_singOut display={this.state.displayModal_signOut} hideModal={this.hideModal_signOut}/>
                <Modal_saveChanges display={this.state.displayModal_saveChanges} hideModal={this.hideModal_saveChanges}/>
                <Modal_changePass display={this.state.displayModal_changePass} hideModal={this.hideModal_changePass}/>
                <Modal_deleteAcc display={this.state.displayModal_deleteAcc} hideModal={this.hideModal_deleteAcc}/>
                <Modal_changePassSuccess display={this.state.displayModal_changePassSuccess} hideModal={this.hideModal_changePassSuccess}/>
            </div>
        );
    }
}

const Modal_singOut = props => {
    let currentClass = props.display ? 'modal' : 'modal hide';

    return (
        <div className={currentClass}>
            <div className="modal_content">
                <p className="content">Sign out</p>
                <button onClick={props.hideModal}>Yes</button>
                <button onClick={props.hideModal}>Cancel</button>
            </div>
        </div>
    )
};

const Modal_saveChanges = props => {
    let currentClass = props.display ? 'modal' : 'modal hide';

    return (
        <div className={currentClass}>
            <div className="modal_content">
                <p className="content">Изменения прошли успешно</p>
                <button onClick={props.hideModal}>Yes</button>
            </div>
        </div>
    )
};

const Modal_changePass = props => {
    let currentClass = props.display ? 'modal' : 'modal hide';

    return (
        <div className={currentClass}>
            <div className="modal_content">
                <p className="content">Change password</p>
                <input type="password" placeholder="Старый пароль"/>
                <input type="password" placeholder="Новый пароль"/>
                <input type="password" placeholder="Еще раз новый пароль"/>
                <button onClick={props.hideModal}>Change password</button>
            </div>
        </div>
    )
};

const Modal_changePassSuccess = props => {
    let currentClass = props.display ? 'modal' : 'modal hide';

    return (
        <div className={currentClass}>
            <div className="modal_content">
                <p className="content">Success!</p>
                <p>Dude, don’t forget your new password :)</p>
                <button onClick={props.hideModal}>Okey, bro</button>
            </div>
        </div>
    )
};

const Modal_deleteAcc = props => {
    let currentClass = props.display ? 'modal' : 'modal hide';

    return (
        <div className={currentClass}>
            <div className="modal_content">
                <p className="content">Delete your account?</p>
                <button onClick={props.hideModal}>Yes</button>
                <button onClick={props.hideModal}>Cancel</button>
            </div>
        </div>
    )
};

const InfAboutMe = props => {
    let currentClass = props.display ? 'aboutMe' : 'aboutMe hide';

    return (
        <div className={currentClass}>
            <img src={Avatar} alt="avatar" className="aboutMe_avatar"/>
            <p className="aboutMe_name">Annette Black, 22</p>
            <p className="aboutMe_mail">annetBlack@mail.rom</p>
            <p className="aboutMe_telegram">@Ablack</p>
            <button className="profile_btn signOut" onClick={props.showModal}>Sign out</button>
        </div>
    )
};

const SetAboutMe = props => {
    let currentClass = props.display ? 'aboutMe hide' : 'aboutMe';

    return (
        <div className={currentClass} >
            <label htmlFor="inputAvatar" className="fileUpload">
                <img src={Avatar} alt="avatar" className="aboutMe_avatar"/>
                <input type="file" name="" id="inputAvatar"/>
            </label>
            <input placeholder="Annette Black, 22" />
            <input placeholder="annetBlack@mail.rom" />
            <input placeholder="@Ablack" />
            <button className="profile_btn saveChange" onClick={props.showModal_saveChanges}>Save</button>
            <button className="profile_btn changePass" onClick={props.showModal_changePass}>Change password</button>
            <button className="profile_btn deleteAcc" onClick={props.showModal_deleteAcc}>Delete account</button>
        </div>
    )
}

export default profile;