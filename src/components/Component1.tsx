import React from 'react';
import data from '../../JSON/component1_data.json';
import Image from 'next/image';
function Component1() {
    return (
        <>
            <div  className=' absolute justify-items-center  items-center w-screen'>
                {/* <div style={{backgroundColor:'rgb(144, 16, 32) ',color:'white'}} className=' flex grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-9/12 justify-center items-center justify-items-center'>
                    {data?.data1?.map((item: any, index) => (
                        <div key={index}>
                            <div className='w-[30%] h-[30%] min-w-[120px]'> 
                                
                                 <div ><img  src={item.url} alt="image" /></div> 
                                 <div> <p className=''>{item.title}</p></div>
                              
                               
                                
                            </div>
                        </div>

                    ))}
                </div> */}
                {/* <div style={{backgroundColor:'rgb(144, 16, 32)'}} className=' flex text-center justify-center w-[80%] mt-28 '>
                    {data?.data1?.map((item:any,index)=>(
                        <div key={index} className=' flex flex-col justify-center items-center justify-items-center text-white w-[18%] min-w-[120px]'>
                            <div className='my-4'><img className='w-[120px] h-[120px]'  src={item.url} alt="image" /></div>
                            <div><p className=' py-4'>{item.title}</p></div>

                        </div>
                    ))}
                </div> */}
                <div style={{backgroundColor:'rgb(144, 16, 32)'}} className='2xl:w-[1280px] xl:w-[1140px]  lg:w-[1000px]    md:w-[800px]  sm:w-[540px]  flex flex-wrap w-[90%] text-center justify-center  mt-20  '>
                    {data?.data1?.map((item:any,index)=>(
                        <div key={index} className=' mt-2  mr-2 justify-center items-center justify-items-center  text-white w-[20%]  min-w-[120px]'>
                            <img className='mt-3 w-[100px] h-[100px]'  src={item.url} alt="image" />
                            <p className='w-[100%] pt-3 leading-[1.75rem]  text-[16.5px] font-sans '>{item.title}</p>

                        </div>
                    ))}
                </div>
            </div>

        </>

    )
}

export default Component1
