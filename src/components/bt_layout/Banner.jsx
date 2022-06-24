import React, { Component } from 'react'
import style from "./style.module.css";

export default class Banner extends Component {
    render() {
        return (
            <div className={style.banner}>
                <h1>A Warm Welcome!</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam consequuntur obcaecati cumque fugit sequi distinctio asperiores tempore dicta iste totam, fugiat reprehenderit recusandae! Vitae accusantium obcaecati, voluptates repellat modi nobis.</p>
                <button className="btn btn-info">Call to Action</button>
            </div>
        )
    }
}
