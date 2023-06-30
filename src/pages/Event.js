import React from 'react';
import LeftsidePanel from '../LeftsidePanel';
import HeaderBody from '../HeaderBody';
import HeaderData from './HeaderData';
import TeamsCard from './TeamsCard';
import EventData from '../data/EventData';



const Event = () => {



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
                  title={HeaderData[1].title}
                />

            <div className="row">
            {/*Event Cards*/}
             {EventData.map((val)=>{
              return(
                <>
                   <TeamsCard
                     key={val.id}
                     imgsrc={val.imgscr}
                     title={val.title}
                     link={val.date}
                     

                   />
                </>
              )
             })}

            </div>    
           
          </div>
          </div>
          </div>
        </section>
       
    </>
  )
}

export default Event;
