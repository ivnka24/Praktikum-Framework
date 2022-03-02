import React, { Component } from "react";

class Header extends Component {
    render(){
        return (
            <head>
                <meta charset="UTF-8"></meta>
                <meta name="viewport" content="width-device-width, initial-scale=1.0"/>
                <title>{ this.props.title }</title>
            </head>
        )
    }
}