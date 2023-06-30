import React from 'react';
import LeftsidePanel from '../LeftsidePanel';
import HeaderBody from '../HeaderBody';
import TeamsCard from './TeamsCard';
import MoviesData from '../data/MoviesData';
import HeaderData from './HeaderData';


const Movies = () => {
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
                  title={HeaderData[2].title}
                />

           <div className="row">
                {/*Movies cards*/}

                  {MoviesData.map((val)=>{
                        return(
                          <>
                          <TeamsCard
                              key={val.id}
                              imgsrc={val.imgscr}
                              mvname={val.mvname}
                              link={val.link}
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

export default Movies;
