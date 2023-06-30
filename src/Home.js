import React from 'react'
import LeftsidePanel from './LeftsidePanel';
import RightsidePanel from './RightsidePanel';


const Home = () => {
  return (
       <>
            <section className="im-dashbord">
            <div className="container-fluid">
                <div className="row">
                <div className="col-12 col-md-2">
                    <LeftsidePanel/>
                </div>
                <div className="col-12 col-md-10 bgcolor p-4">
                    <RightsidePanel/>
                </div>
                </div>
            </div>
            </section>
       </>
  )
}

export default Home;
