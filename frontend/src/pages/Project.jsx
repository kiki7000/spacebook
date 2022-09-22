import React, { Component } from "react";

import { Avatar, Button, Comment, Form, List, Input } from "antd";
import { HeartOutlined, MessageOutlined } from "@ant-design/icons";


class Project extends Component {
    render () {
        return (
            <>
                <div className = "px-30 pt-10 grid lg:grid-cols-2">
                    <div className = "">
                        <img className = "w-full lg:w-150 h-80 rounded-2xl" src = "../src/dummydata/images/CardImage.png" />
                    </div>
                    <div className = "ml-10">
                        <h2 className = "text-3xl font-thin <lg:mt-10">가을의 섬</h2>
                        <div className = "flex">
                            <Avatar src = "../src/dummydata/images/patrick.png" />
                            <h4 className = "text-base font-thin ml-3 mt-1">PatrickKR</h4>
                        </div>
                        <h5 className = "text-base font-thin mt-5">크킄킄<br />크크킄<br />크크킄</h5>
                        <div className = "mt-10">
                            <Button className = "" icon = {<HeartOutlined />}>100</Button>
                            <Button className = "ml-2" icon = {<HeartOutlined />}>100</Button>
                            <Button className = "ml-2" icon = {<HeartOutlined />}>100</Button>
                            <Button className = "ml-2" icon = {<HeartOutlined />}>100</Button>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Project;