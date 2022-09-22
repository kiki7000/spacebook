import React, { Component } from "react";
import {Link, Redirect} from "react-router-dom";

import { Typography, Menu, Button, Drawer, Divider, Input, Dropdown } from "antd";
import { UnorderedListOutlined, MessageFilled, BellFilled } from "@ant-design/icons";

import api from "../api/api";


class NavBar extends Component {
    constructor (props) {
        super(props);
        this.state = {
            drawerOpen: false,
            token: localStorage.token,
            query: ""
        };
    }

    logout () {
        delete localStorage.token;
        this.state.token = undefined;

        delete localStorage.user;
        api.post("/logout");
    }

    click () {
        localStorage.token = "asd"
    }

    render () {
        return (
            <>
                <nav className="px-6 xl:px-6 border-b-1 border-solid border-gray-100 overflow-auto shadow overflow-y-hidden">
                    <div className="w-30 float-left mt-2.5 mb-2 mr-2.5 font-roboto">
                        <Link to="/">
                            <Typography.Title level={4}>Spacebook</Typography.Title>
                        </Link>
                    </div>

                    <div className="hidden xl:flex">
                        <div className="float-left mt-1">
                            <Menu mode="horizontal" className="border-b-0 h-10">
                                <Menu.Item key="recommends">
                                    <Link to="recommends">오늘의 추천</Link>
                                </Menu.Item>
                                <Menu.Item key="explore">
                                    <Link to="explore">탐색</Link>
                                </Menu.Item>
                            </Menu>
                        </div>
                        
                        <div className = "flex-grow px-auto">
                            <Input.Search placeholder="작품을 검색하세요" className = "mt-3 px-30 2xl:px-40" />
                        </div>

                        {
                            !!this.state.token ?
                                (
                                    <div className = "float-right flex">
                                        <Button className = "btn mr-10 mt-3">내 작품 공유하기</Button>
                                        <Dropdown overlay = {
                                            <Menu>
                                                <Menu.Item>
                                                    <Link to = "user/patrick">
                                                        프로필
                                                    </Link>
                                                </Menu.Item>
                                                <Menu.Item onClick = {() => this.logout()}>로그아웃</Menu.Item>
                                            </Menu>
                                        }>
                                            <img src = "src/dummydata/images/patrick.jpg" className = "rounded-md w-8 h-8 mt-3" />
                                        </Dropdown>
                                    </div>
                                ) : (
                                    <Link to = "login">
                                        <Button className = "btn mr-10 mt-3 w-40">로그인/가입</Button>
                                    </Link>
                                )
                        }
                    </div>

                    <div className="mt-3 float-right xl:hidden">
                        <UnorderedListOutlined className="py-2.5 px-2.5 hover:bg-gray-100 rounded-full transition duration-500 ease-in-out cursor-pointer" onClick={() => this.setState({ drawerOpen: !this.state.drawerOpen })} />
                    </div>
                </nav>
                <Drawer visible={this.state.drawerOpen} onClose={() => this.setState({ drawerOpen: !this.state.drawerOpen })}>
                    <Menu mode="vertical" className="border-0">
                        <Menu.Item key="recommends">
                            <Link to="recommends">오늘의 추천</Link>
                        </Menu.Item>
                        <Menu.Item key="explore">
                            <Link to="explore">탐색</Link>
                        </Menu.Item>
                        <Divider className="border-gray-300 mb-3" />
                        <Input.Search placeholder="작품을 검색하세요" className = "w-52 mb-1" onSearch = {(v, e) => {
                            console.log(v)
                            this.props.history.push
                        }} />
                        {
                            !!this.state.token ?
                                (
                                    <div>
                                        <Button className = "btn w-52 mb-3">내 작품 공유하기</Button>
                                        <Divider className="border-gray-300 mb-3" />
                                        <div className = "flex justify-between px-12">
                                            <img src = "src/dummydata/images/patrick.jpg" className = "rounded-md w-8 h-8" />
                                        </div>
                                        <Menu.SubMenu key = "sub" title = "정보">
                                            <Menu.Item>
                                                <Link to = "user/patrick">
                                                    프로필
                                                </Link>
                                            </Menu.Item>
                                            <Menu.Item onClick = {() => this.logout()}>로그아웃</Menu.Item>
                                        </Menu.SubMenu>
                                    </div>
                                ) : (
                                    <Link to = "login">
                                        <Button className = "btn w-52 mb-3" onClick={this.click}>로그인/가입</Button>
                                    </Link>
                                )
                        }
                    </Menu>
                </Drawer>
            </>
        )
    }
}

export default NavBar;
