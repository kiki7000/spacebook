import React, { Component } from "react";

import CardRow from "../components/CardRow";


class Explore extends Component {
    render () {
        return (
            <>
                <div className = "text-center mt-10 px-20">
                    <h1 className = "text-3xl font-thin">더 다양한 제작자의 작품을 둘러보세요.</h1>
                    <div className = "mt-10">
                        <CardRow cards = {[
                            {
                                title: "석양",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/sky.jpg"
                            },
                            {
                                title: "석양",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/sky.jpg"
                            },
                            {
                                title: "석양",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/sky.jpg"
                            },
                            {
                                title: "석양",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/sky.jpg"
                            },
                            {
                                title: "석양",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/sky.jpg"
                            },
                        ]} />

                        <CardRow className = "mt-3" cards = {[
                            {
                                title: "스페이스북",
                                desc: "맑은 하늘 아래에...",
                                author: "Coder",
                                img: "https://media.discordapp.net/attachments/891623624040153098/891630593828327424/space.png?width=676&height=676"
                            },
                            {
                                title: "스페이스북",
                                desc: "맑은 하늘 아래에...",
                                author: "Coder",
                                img: "https://media.discordapp.net/attachments/891623624040153098/891630593828327424/space.png?width=676&height=676"
                            },
                            {
                                title: "스페이스북",
                                desc: "맑은 하늘 아래에...",
                                author: "Coder",
                                img: "https://media.discordapp.net/attachments/891623624040153098/891630593828327424/space.png?width=676&height=676"
                            },
                            {
                                title: "스페이스북",
                                desc: "맑은 하늘 아래에...",
                                author: "Coder",
                                img: "https://media.discordapp.net/attachments/891623624040153098/891630593828327424/space.png?width=676&height=676"
                            },
                            {
                                title: "스페이스북",
                                desc: "맑은 하늘 아래에...",
                                author: "Coder",
                                img: "https://media.discordapp.net/attachments/891623624040153098/891630593828327424/space.png?width=676&height=676"
                            },
                        ]} />

                        <CardRow className = "mt-3" cards = {[
                            {
                                title: "외로운 섬",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "외로운 섬",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "외로운 섬",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "외로운 섬",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/CardImage.png"
                            },
                            {
                                title: "외로운 섬",
                                desc: "맑은 하늘 아래에...",
                                author: "아티스트",
                                img: "src/dummydata/images/CardImage.png"
                            }
                        ]} />
                    </div>
                </div>
            </>
        )
    }
}

export default Explore;