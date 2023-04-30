import React from 'react'
import data from  './data.json'

export const ResultSummary = () => {
    const resolveColor=(index)=>{
        const colors={
            0:'bg-Light-red/10  text-Light-red  font-semibold',
            1:'bg-Orangey-yellow/10 text-Orangey-yellow font-semibold',
            2:'bg-Green-teal/10 text-Green-teal font-semibold',
            3:'bg-Cobalt-blue/10    text-Cobalt-blue    font-semibold'
        }
        return colors[index]
    }
   
  return (
    <div   className='w-full    h-screen  overflow-hidden'>
        <div className="w-full  h-full    flex  justify-center  items-center  ">
            <div className="xl:w-[40vw] lg:w-[60vw] lg:h-[70vh]  xl:h-[55vh]  md:w-[80vw]  md:h-[50vh]  w-full   h-screen    overflow-hidden bg-custom-White   lg:rounded-2xl shadow-2xl   shadow-Pale-blue    flex lg:flex-row flex-col md:flex-row">
                <div className="lg:h-full   h-[45vh]  lg:w-[45%] md:h-full  md:rounded-3xl w-full bg-gradient-to-t  from-Light-royal-blue from-10% to-Light-slate-blue p-4 flex    flex-col    justify-between lg:rounded-3xl  rounded-b-[30px]">
                    <p className="w-full    h-auto  text-center text-custom-White  text-opacity-70  text">
                        Your Result
                    </p>

                    <div className="xl:w-[75%] mx-auto  xl:my-0 my-2    w-40   p-4  h-40  lg:w-44   lg:h-44   xl:h-[45%] bg-gradient-to-b   from-Violet-blue    from-30%   to-Persian-blue/5  rounded-full  flex flex-col   justify-center  items-center gap-3">
                        <p className="h-auto text-custom-White font-bold    text-6xl">
                            76
                        </p>
                        <p  className='lg:text-xs  text-custom-White/40'>of  100</p>
                    </div>

                    <div className="w-full  h-auto  text-center mb-4">
                        <p className="w-full  h-auto text-[18px] font-semibold text-custom-White    text-center">
                            Great
                        </p>
                        <p className='h-auto max-w-[28ch] text-sm text-custom-White/70  text-center mx-auto p-2 text-[18px]'>
                            You scored higher than 65% of the people who have taken these tests.
                        </p>
                    </div>
                </div>
                {/* Left-side-above */}
                {/* right-side-below */}
                <div className="lg:h-full   h-[55vh]  lg:w-[55%]  w-full  p-4 bg-transparent flex flex-col">
                    <p className="w-full    text-[18px] font-bold   text-black  md:text-xl">
                        Summary
                    </p>
                   
                    <div className="w-full  p-1 h-[70%] md:h-[60%] my-3  flex  flex-col    gap-2   justify-evenly">
                    {
                      data.map((datum,index)=>{
                        
                        return   <div className={`w-full  h-12 flex   justify-between p-2   ${resolveColor(index)}  rounded-md  items-center` }    key={index}>
                                <div className="w-auto  flex gap-1  items-center">
                                    <img src={datum.icon} alt="" />
                                    <p>{datum.category}</p>

                                </div>
                                <div className="w-auto  flex     font-normal gap-1   items-center    ">
                                    <p   className='font-semibold    text-opacity-100   text-black'>{datum.score}</p>
                                    <span   className='text-black/30'  >/</span>
                                    <p  className='text-black/30'>100</p>
                                </div>
                        </div>
                      })  
                    }

                    </div>

                    <div className="w-full  h-16">
                        <button className='bg-Dark-gray-blue    w-full  h-12    rounded-full text-custom-White   flex    items-center justify-center transition-all  hover:cursor-pointer    hover:bg-gradient-to-t  from-Light-royal-blue   to-Light-slate-blue    hover:font-semibold ease-in-out outline-none'>Continue</button>
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}
