import React, { Component } from 'react'
import style from "./style.module.css"

export default class Item extends Component {
   
    render() {
        return (
            <div className={style.item}>
                <div className="row">
                   <div className="col-3">
                        <div className={style.itemborder}>
                           <div className="image" style={{height:"200px"}}></div>
                           <div className="text">
                              <h3>Card title</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quisquam mollitia debitis tempora.  
                              </p>
                           </div>
                           <div className="button">
                            <button className='btn btn-info'>find Out more</button>
                           </div>
                       </div>
                   </div>
                   <div className="col-3">
                        <div className={style.itemborder}>
                           <div className="image" style={{height:"200px"}}></div>
                           <div className="text">
                              <h3>Card title</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quisquam mollitia debitis tempora.  
                              </p>
                           </div>
                           <div className="button">
                            <button className='btn btn-info'>find Out more</button>
                           </div>
                       </div>
                   </div>
                   <div className="col-3">
                        <div className={style.itemborder}>
                           <div className="image" style={{height:"200px"}}></div>
                           <div className="text">
                              <h3>Card title</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quisquam mollitia debitis tempora.  
                              </p>
                           </div>
                           <div className="button">
                            <button className='btn btn-info'>find Out more</button>
                           </div>
                       </div>
                   </div>
                   <div className="col-3">
                        <div className={style.itemborder}>
                           <div className="image" style={{height:"200px"}}></div>
                           <div className="text">
                              <h3>Card title</h3>
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quisquam mollitia debitis tempora.  
                              </p>
                           </div>
                           <div className="button">
                            <button className='btn btn-info'>find Out more</button>
                           </div>
                       </div>
                   </div>
            </div>  
            </div>     
        )
    }
}
