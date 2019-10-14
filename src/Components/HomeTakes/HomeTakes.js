import React from 'react'
// import { Link } from 'react-router-dom'
import './HomeTakes.css'
import HomeTakesItem from '../HomeTakesItem/HomeTakesItem'

export default function HomeTakes(props) {
        return (
            <div className="content home-takes">
                <h2 className="section-title">Most Recent Takes</h2>
                <ul>
                    <HomeTakesItem takes={props.takes}/>
                </ul>  
            </div>
        );
  }
  