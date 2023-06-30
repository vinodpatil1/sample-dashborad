import React from 'react'
import {   NavLink } from "react-router-dom";
import User from './User';

const LeftsidePanel = () => {
  return (
    <>
     <aside className="leftsidepanel">
     <div className="row">
        <div className="col-12">
           <User/>
            <div className="dashbordNabar pt-md-5 pt-2 ">
               <ul>
                 <li>
                  <NavLink to="/"><span><i className="bi bi-house-door"></i></span>dashboard</NavLink>
                 </li>

                  <li><NavLink to="/teams"><span><i className="bi bi-person"></i></span>team</NavLink></li>

                  <li><NavLink to="/movies"><span><i className="bi bi-film"></i></span>movies</NavLink></li>

                  <li><NavLink to="/event"><span><i className="bi bi-calendar2-event"></i></span>events</NavLink></li>

                  <li><NavLink to="/task"><span><i className="bi bi-check2-square"></i></span>task</NavLink></li>

                  <li><NavLink to="/documentation"><span><i className="bi bi-file-earmark-text"></i></span>documentation</NavLink></li>

               </ul>
               <ul>
                 <li><a href="#"><span><i className="bi bi-box-arrow-left"></i></span>logout</a></li>
               </ul>
           </div>

           .

        </div>
       </div>
     </aside>
    </>
  )
}

export default LeftsidePanel;
