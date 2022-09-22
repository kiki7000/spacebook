import React, { Component } from "react";

import {Avatar, Divider, Pagination} from "antd";
import { EditOutlined } from "@ant-design/icons";

import CardRow from "../components/CardRow";


class UserProfile extends Component {
    constructor (props) {
        super(props);
        this.state = {
            username: props.match.params.name
        }
    }
    render () {
        return (
            <div className = "">
                <div className = "relative">
                    <div className = "relative z-50 flex flex-col items-center py-15">
                        <div className = "grid grid-cols-2 px-5 py-5 w-100 bg-white rounded-4xl">
                            <div className = "flex mr-10">
                                <div className = "flex-grow" />
                                <Avatar className = "!w-30 !h-30" src = "../src/dummydata/images/patrick.png" />
                            </div>
                            <div className = "flex items-center">
                                <div className = "">
                                    <div className = "flex items-center">
                                        <h1 className = "text-3xl font-thin mb-2 ">{this.state.username}</h1>
                                        <EditOutlined className = "ml-3 cursor-pointer" />
                                    </div>
                                    <div className = "flex items-center">
                                        <h4 className = "text-base font-thin">천재</h4>
                                        <EditOutlined className = "ml-3 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className = "absolute top-0 bottom-0">
                        <img className = "w-screen h-full rounded-b-6xl" src = "../src/dummydata/images/CardImage.png" />
                    </div>
                </div>

                <div className = "mt-10 px-20 text-center">
                    <div className = "mt-5">
                        <CardRow cards = {[
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            }
                        ]} />

                        <CardRow className = "mt-3" cards = {[
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            }
                        ]} />

                        <CardRow className = "mt-3" cards = {[
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "햎반",
                                desc: "맑은 하늘 아래에...",
                                author: "PatrickKR",
                                img: "../src/dummydata/images/CardImage.png"
                            }
                        ]} />
                    </div>
                    <Pagination className = "!mt-10" />
                </div>
            </div>
        )
    }
}

export default UserProfile;