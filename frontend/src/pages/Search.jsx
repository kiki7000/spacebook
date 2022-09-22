import React, { Component } from "react";
import { Link } from "react-router-dom";

import {Button, Pagination, Tag} from "antd";

import CardRow from "../components/CardRow";

import api from "../api/api";


class Search extends Component {
    constructor () {
        super();

        this.state = {
            query: (new URLSearchParams(window.location.search)).get("query"),
            results: []
        }

        if (this.state.query.length > 0) {
            api.get(`project/search/${this.state.query}`)
                .then(res => res.data.data)
                .then(res => {
                    this.setState({ results: res });
                })
        }
    }
    render () {
        return (
            <>
                {
                    this.state.results.length !== 0 ?
                        (
                            <div className = "text-center mt-10 px-20">
                                <h1 className = "text-3xl font-thin">"{this.state.query}" 검색 결과가 {this.state.results.length}개 있어요.</h1>
                                <div className = "text-left mt-10">
                                    <Tag closable={false}>키키</Tag>
                                    <Tag closable={false}>키키</Tag>
                                    <Tag closable={false}>키키</Tag>
                                    <Tag closable={false}>키키</Tag>
                                </div>
                                <div className = "mt-5">
                                    <CardRow cards = {[
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        }
                                    ]} />

                                    <CardRow className = "mt-3" cards = {[
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        }
                                    ]} />

                                    <CardRow className = "mt-3" cards = {[
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        }
                                    ]} />
                                </div>
                                <Pagination className = "!mt-10" />
                            </div>
                        ) : (
                            <div className = "text-center mt-10 px-20">
                                <h1 className = "text-3xl font-thin">"{this.state.query}" 검색 결과를 찾을수 없어요.</h1>
                                <h4 className = "text-lg font-thin">하지만, 더 많은 작품들이 키키님을 기다리고 있어요!</h4>
                                <div className = "mt-10">
                                    <CardRow cards = {[
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        }
                                    ]} />

                                    <CardRow className = "mt-3" cards = {[
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        },
                                        {
                                            title: "섬",
                                            desc: "맑은 하늘 아래에...",
                                            author: "Patrick",
                                            img: "src/dummydata/images/CardImage.png"
                                        }
                                    ]} />
                                </div>
                                <h2 className = "text-2xl font-thin mt-20">더 많은 작품들을 탐색하고 소통하세요.</h2>
                                <div className = "flex justify-center pt-2 mb-10">
                                    <Link to = "explore">
                                        <Button className = "btn">탐색하기</Button>
                                    </Link>
                                    <Link to = "share">
                                        <Button className = "btn ml-7">내 작품 공유하기</Button>
                                    </Link>
                                </div>
                            </div>
                        )
                }
            </>
        )
    }
}

export default Search;