import React from 'react'
import Cards from './Cards';
import CardData from './data/CardData';
import BodyContent from './BodyContent';
import HeaderBody from './HeaderBody';
import HeaderData from './pages/HeaderData';



const RightsidePanel = () => {
  return (
    <>
        <main className="rightsidepanel">
          <div className="row">
             <div className="col-12">
                <HeaderBody 
                  title={HeaderData[0].title}
                />
                
               <section className='card-section'>
                 <div className="row">
                    {CardData.map((val)=>{
                      return(
                        <>
                          <Cards 
                            key={val.id}
                            ctitle={val.title}
                            ccontent={val.content}
                            ctext={val.ftext}
                             />
                        </>
                      )
                    })}
                 </div>
                <BodyContent/>
              </section>
             </div>
          </div>
        </main>
    </>
  )
}

export default RightsidePanel;
