import React, { Component } from "react";

import CardRow from "../components/CardRow";


class Recommends extends Component {
    render () {
        return (
            <>
                <div className = "text-center mt-10 px-20">
                    <h1 className = "text-3xl font-thin">유저님을 위해 준비했어요.</h1>
                    <div className = "mt-7">
                        <div className = "">
                            <div className = "rounded-lg bg-blue-100 w-20 h-8 text-sm py-1 text-color-dblue font-medium text-center mb-3">
                                # 풍경
                            </div>
                            <CardRow cards = {[
                                {
                                    title: "하늘 아래",
                                    desc: "하늘 아래 홀로 있는...",
                                    author: "ImAnArtist",
                                    img: "src/dummydata/images/CardImage.png"
                                },
                                {
                                    title: "꼬불꼬불",
                                    desc: "꼬불꼬불",
                                    author: "Lion",
                                    img: "src/dummydata/images/Base.png"
                                },
                                {
                                    title: "우주",
                                    desc: "꿈속에서 보았던...",
                                    author: "IloveSpace",
                                    img: "src/dummydata/images/space.png"
                                },
                                {
                                    title: "석양",
                                    desc: "맑은 하늘 아래에...",
                                    author: "PatrickKR",
                                    img: "src/dummydata/images/sky.jpg"
                                },
                                {
                                    title: "내추억",
                                    desc: "코로나만 끝난다면 이곳에서...",
                                    author: "Memory",
                                    img: "src/dummydata/images/see.jpg"
                                }
                            ]} />
                        </div>

                        <div className = "mt-10">
                            <div className = "rounded-lg bg-blue-100 w-20 h-8 text-sm py-1 text-color-dblue font-medium text-center mb-3">
                                # 예술
                            </div>
                            <CardRow cards = {[
                                {
                                    title: "추락",
                                    desc: "맑은 하늘 아래에...",
                                    author: "Artist",
                                    img: "src/dummydata/images/falling.jpg"
                                },
                                {
                                    title: "스페이스북",
                                    desc: "맑은 하늘 아래에...",
                                    author: "Coder",
                                    img: "https://media.discordapp.net/attachments/891623624040153098/891630593828327424/space.png?width=676&height=676"
                                },
                                {
                                    title: "하늘 아래",
                                    desc: "맑은 하늘 아래에...",
                                    author: "PatrickKR",
                                    img: "src/dummydata/images/CardImage.png"
                                },
                                {
                                    title: "우주",
                                    desc: "꿈속에서 보았던...",
                                    author: "IloveSpace",
                                    img: "src/dummydata/images/space.png"
                                },
                                {
                                    title: "하늘 아래",
                                    desc: "맑은 하늘 아래에...",
                                    author: "PatrickKR",
                                    img: "src/dummydata/images/CardImage.png"
                                }
                            ]} />
                        </div>

                        <div className = "mt-10 mb-10">
                            <div className = "rounded-lg bg-blue-100 w-20 h-8 text-sm py-1 text-color-dblue font-medium text-center mb-3">
                                # 상상
                            </div>
                            <CardRow cards = {[
                                {
                                    title: "석양",
                                    desc: "맑은 하늘 아래에...",
                                    author: "PatrickKR",
                                    img: "src/dummydata/images/sky.jpg"
                                },
                                {
                                    title: "하늘 아래",
                                    desc: "맑은 하늘 아래에...",
                                    author: "PatrickKR",
                                    img: "src/dummydata/images/CardImage.png"
                                },
                                {
                                    title: "하늘 아래",
                                    desc: "맑은 하늘 아래에...",
                                    author: "PatrickKR",
                                    img: "src/dummydata/images/CardImage.png"
                                },
                                {
                                    title: "우주",
                                    desc: "꿈속에서 보았던...",
                                    author: "IloveSpace",
                                    img: "src/dummydata/images/space.png"
                                },
                                {
                                    title: "하늘 아래",
                                    desc: "맑은 하늘 아래에...",
                                    author: "PatrickKR",
                                    img: "src/dummydata/images/CardImage.png"
                                }
                            ]} />
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Recommends;