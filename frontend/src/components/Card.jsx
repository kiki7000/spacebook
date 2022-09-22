import React, { Component } from "react";
import { Card as ACard, Tag } from "antd";
import { HeartFilled, MessageFilled } from "@ant-design/icons";


class Card extends Component {
    constructor ({ img, author, title, desc, className = "" }) {
        super ({ img, author, title, desc, className });
        this.state = {
            img: img,
            author: author,
            title: title,
            desc: desc
        }
    }

    render () {
        return (
            <ACard
                hoverable
                className = {`w-56 !rounded-2xl overflow-hidden p-0 ${this.props.className}`}
                cover = {<img className = "h-40 !rounded-t-2xl" alt="example" src={this.state.img}  />}
            >
                <div className = "text-center">
                    <h4 className = "font-semibold text-xs text-color-lblue">{this.state.author}</h4>
                    <h2 className = "font-semibold text-2xl">{this.state.title}</h2>
                    <h4 className = "font-medium text-xs text-gray-400">{this.state.desc}</h4>
                </div>
                <div className = "pt-2 w-52 text-left -ml-1">
                    <Tag closable={false}>자연</Tag>
                    <Tag closable={false}>풍경화</Tag>
                    <Tag closable={false}>상상</Tag>
                    <Tag closable={false}>예술</Tag>
                </div>
                <div className = "w-56 h-16 mt-8 bg-color-lblue grid grid-cols-2 -mx-6 -mb-6 px-5">
                    <div className = "group flex mt-4 pl-8">
                        <HeartFilled className = "text-base pt-2 !text-white mr-1 group-hover:opacity-100 transition duration-300 ease-in-out opacity-75" />
                        <h1 className = "text-xl mb-0 font-semibold text-gray-100 group-hover:opacity-100 transition duration-300 ease-in-out opacity-75">1</h1>
                    </div>
                    <div className = "group flex mt-4 px-4">
                        <MessageFilled className = "text-base pt-2 !text-white mr-1 group-hover:opacity-100 transition duration-300 ease-in-out opacity-75" />
                        <h1 className = "text-xl mb-0 font-semibold text-gray-100 group-hover:opacity-100 transition duration-300 ease-in-out opacity-75">1</h1>
                    </div>
                </div>
            </ACard>
        )
    }
}

export default Card;
