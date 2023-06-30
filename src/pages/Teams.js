import React from 'react'
import LeftsidePanel from '../LeftsidePanel';
import HeaderBody from '../HeaderBody';
import TeamsCard from './TeamsCard';
import TeamsData from '../data/TeamsData';
import HeaderData from './HeaderData';

//console.log(TeamsData);

const Teams = () => {
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
                  title={HeaderData[4].title}
                />
               <div className="row">

                  {/*Teams cards*/}
                  {TeamsData.map((val)=>{
                     return(
                        <>
                        <TeamsCard 
                          key={val.id}
                          imgsrc={val.imgscr}
                          title={val.title}
                          content={val.content}
                          link={val.link}
                          
                         />
                        </>
                     )
                  })
                  }
               </div>
            </div>
            </div>
      </div>
      </section>
     </>
  )
}

export default Teams;
