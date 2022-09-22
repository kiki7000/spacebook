import React, { Component } from "react";
import {Redirect} from "react-router-dom";

import api from "../api/api";


class Callback extends Component {
    constructor () {
        super();

        this.state = {
            type: (new URLSearchParams(window.location.search)).get("type"),
            token: (new URLSearchParams(window.location.search)).get("token")
        }

        localStorage.token = this.state.token

        api.get("user/@me", {
            headers: {
                Authorization: this.state.token
            }
        })
            .then(res => res.data)
            .then(res => {
                localStorage.user = res
            })
    }
    render () {
        return (
            <Redirect to = "/" />
        )
    }
}

export default Callback;