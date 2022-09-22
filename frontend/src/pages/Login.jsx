import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Divider } from "antd";
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

import api from "../api/api";


class Login extends Component {
    constructor () {
        super();

        this.state = {
            google_register_url: localStorage.google_register_url,
            google_login_url: localStorage.google_login_url
        }
        if (localStorage.google_register_url === undefined) {
            api.get("/login?application=google_register")
                .then(res => res.data.login_url)
                .then(res => {
                    localStorage.google_register_url = res
                    this.setState({ google_register_url: res })
                })
        }
        if (localStorage.google_login_url === undefined) {
            api.get("/login?application=google_login")
                .then(res => res.data.login_url)
                .then(res => {
                    localStorage.google_login_url = res
                    this.setState({ google_login_url: res })
                })
        }
    }

    render () {
        return (
            <div className = "flex justify-center <md:flex-col items-center">
                <div className = "flex flex-grow justify-center items-center flex-col h-auto md:h-100 <md:(mb-10 mt-20)">
                    <h1 className = "text-3xl font-thin mb-2">로그인</h1>
                    <h4 className = "text-xs font-thin mb-6">다음으로 로그인</h4>
                    <div className = "">
                        <a href = {this.state.google_login_url}>
                            <Button className = "w-50" icon = {<GoogleOutlined />}>
                                구글로 로그인
                            </Button>
                        </a>
                    </div>
                </div>
                <div className = "flex-grow flex justify-center items-center flex-col h-auto md:h-100 <md:(mt-10 mb-20)">
                    <h1 className = "text-3xl font-thin mb-2">가입</h1>
                    <h4 className = "text-xs font-thin mb-6">다음으로 가입</h4>
                    <div className = "">
                        <a href = {this.state.google_register_url}>
                            <Button className = "w-50" icon = {<GoogleOutlined />}>
                                구글로 가입
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;