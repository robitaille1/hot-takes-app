import React from 'react'
import { Link } from 'react-router-dom'
import './HomeTakes.css'
import HomeTakesItem from '../HomeTakesItem/HomeTakesItem'

export default function HomeTakes(props) {
        return (
            <div className="content home-takes">
                <h2 className="takes-title">Recent Takes</h2>
                <hr />
                <ul>
                    <HomeTakesItem takes={props.takes}/>
                </ul> 
                <Link to='/add-take' style={{ textDecoration: 'none' }}>
                    <button className="new-tk-btn">Add New Take</button>
                </Link> 
            </div>
        );
  }
  