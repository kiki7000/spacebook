import React from "react";
import { Link } from "react-router-dom";

import { Divider } from "antd";


const Footer = () => (
    <footer className="pt-3 pb-30">
        <Divider className="border-gray-300 mb-3" />
        <div className = "md:flex <md: text-center">
            <div className = "md:pl-20">
                <h2 className = "text-2xl font-bold mb-1">Spacebook</h2>
                <h4 className = "text-md font-medium">&copy; {new Date().getFullYear()} Spacebook. All rights reserved.</h4>
            </div>
            <div className = "md:flex-grow" />
            <div className = "<sm:px-20 <md:(px-30 mt-10) md:pr-30 grid grid-cols-2 gap-10">
                <div className = "text-center">
                    <h3 className = "text-xl font-bold mb-1">서비스</h3>
                    <Link to ="recommends">
                        <h3>오늘의 추천</h3>
                    </Link>
                    <Link to = "explore">
                        <h3>탐색하기</h3>
                    </Link>
                    <Link to = "funding">
                        <h3>펀딩</h3>
                    </Link>
                    <Link to = "search">
                        <h3>검색하기</h3>
                    </Link>
                </div>
                <div className = "text-center">
                    <h3 className = "text-xl font-bold mb-1">커뮤니티</h3>
                    <a href = "https://discord.gg/pKM6stqPxS">
                        <h3>디스코드</h3>
                    </a>
                </div>
            </div>
        </div>
    </footer>
)

export default Footer;
