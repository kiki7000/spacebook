import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Button, Card } from 'antd';


class Main extends Component {
    render () {
        return (        
            <>
                <div className = "">
                    <div className = "<xl:hidden px-50 2xl:px-80 grid grid-cols-2 h-screen flex items-center">
                        <div className = "-mt-30">
                            <h1 className = "text-4xl font-semibold text-purple-600">작품의 가치를 더하세요</h1>
                            <h4 className = "text-md font-semibold w-90">여러 주제의 작품을 둘러보고, 작품 업로드, 제작자에게 후원하기 등 다양한 작품과 소통하기 위한 기능들이 모두 준비되어 있습니다.</h4>
                        </div>
                        <img className = "-mt-40" src = "src/dummydata/images/projects.png" />
                    </div>
                    <div className = "xl:hidden flex flex-col items-center mb-50">
                        <img className = "w-60 h-60 md:(w-70 h-70) lg:(w-100 h-100) mb-5" src = "src/dummydata/images/projects.png" />
                        <div className = "text-center px-10 md:px-0">
                            <h1 className = "text-2xl md:text-3xl lg:text-4xl font-semibold text-purple-600">작품의 가치를 더하세요</h1>
                            <h4 className = "text-sm md:text-md font-semibold w-auto md:w-90 break-all">여러 주제의 작품을 둘러보고, 작품 업로드, 제작자에게 후원하기 등 다양한 작품과 소통하기 위한 기능들이 모두 준비되어 있습니다.</h4>
                        </div>
                    </div>
                    <div className = "grid grid-cols-2 flex items-center">
                        <img className = "-mt-40 ml-40 2xl:ml-60" src = "src/dummydata/images/project-board.png" />
                        <div className = "-mt-30 ml-30 2xl:ml-10">
                            <h3 className = "text-2xl font-medium">당신을 위한 작품을<br />직접 찾지 마세요</h3>
                            <h1 className = "text-4xl font-semibold">내 취향 작품들이 한눈에</h1>
                        </div>
                    </div>
                    <div className = "2xl:px-60 px-20 grid grid-cols-2 mt-20 flex items-center">
                        <div className = "-mt-30">
                            <h1 className = "text-4xl font-semibold">100% 익명성 커뮤니티</h1>
                            <div className = "">
                                <div className = "flex">
                                    <img className = "rounded-full w-10 h-10" src = "src/dummydata/images/patrick.jpg" />
                                    <h3 className = "text-2xl mt-1 ml-3">모서리를 조금 더 둥글게 하는건 어떨까요?</h3>
                                </div>
                                <div className = "flex">
                                    <img className = "rounded-full w-10 h-10" src = "src/dummydata/images/patrick.jpg" />
                                    <h3 className = "text-2xl mt-1 ml-3">작품이 멋지네요!</h3>
                                </div>
                                <div className = "flex">
                                    <img className = "rounded-full w-10 h-10" src = "src/dummydata/images/patrick.jpg" />
                                    <h3 className = "text-2xl mt-1 ml-3">디자인이 전체적으로 깔끔하니 보기 좋네요!</h3>
                                </div>
                            </div>
                        </div>
                        <img className = "-mt-40" src = "src/dummydata/images/chat.png" />
                    </div>
                    <div className = " flex flex-col items-center">
                        <h3 className = "text-2xl font-medium">표현을 자유롭게</h3>
                        <h1 className = "text-3xl font-semibold">마음에 드는 제작자에게 후원하세요</h1>
                        <img className = "-mt-10 ml-40" src = "src/dummydata/images/buy.png" />
                    </div>
                    <div className = "xl:w-9/12 flex <xl:flex-col items-center xl:(grid grid-cols-2) text-center">
                        <img className = "w-60 xl:ml-70 2xl:ml-120" src = "src/dummydata/images/start.png" />
                        <div className = "mt-3 lg:mt-5 xl:mt-7">
                            <h3 className = "text-xl md:text-2xl xl:text-3xl font-semibold mb-2">다양한 작품들이 하나로</h3>
                            <h4 className = "text-sm md:text-base xl:text-lg"><i>Spacebook</i>은 대부분의 작품 유형을 지원합니다</h4>
                        </div>
                    </div>
                    <div className = "my-50 text-center">
                        <h1 className = "break-all px-10 md:px-0 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold">이 모든것을 Spacebook으로 시작하세요</h1>
                        <Link to = "login" className = "">
                            <Button className = "w-30 h-5 !text-xs mt-3 md:h-7 lg:(w-40 h-10 !text-base mt-5) xl:(w-50 !h-15 !text-lg mt-10) !font-semibold !rounded-lg !border-gray-400">시작하기</Button>
                        </Link>
                    </div>
                </div>
            </>
        )
    }
}

export default Main;