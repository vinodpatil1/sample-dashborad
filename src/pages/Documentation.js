import React from 'react';
import LeftsidePanel from '../LeftsidePanel';
import HeaderBody from '../HeaderBody';
import HeaderData from './HeaderData';
import Paper from '@mui/material/Paper';
import { useState } from 'react';


const Documentation = () => {



  return (
    <>
        <section className="im-dashbord">
          <div className="container-fluid">
          <div className="row">
          <div className="col-12 col-md-2">
          <LeftsidePanel/>
          </div>
          <div className="col-12 col-md-10 bgcolor p-4">
              <HeaderBody 
                  title={HeaderData[5].title}
                />

                <div className="row">
                  <div className="col-12">
                  <Paper elevation={3} className='p-3 paper-section' >
                      <h6>Heading Here...</h6>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis corporis tempora mollitia recusandae dignissimos porro enim, nulla impedit consectetur sit possimus iure magni maxime quod fuga natus amet, autem repellendus. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non eum, iure repellendus, ipsam iusto sit excepturi debitis tempora doloribus quisquam fugiat illum. Repudiandae odit voluptas quia excepturi? Tenetur, aperiam hic!</p>
                  </Paper>

                  </div>
                </div>
               
          </div>
          
          </div>
          </div>
        </section>
       
    </>
  )
}

export default Documentation;
