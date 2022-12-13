
import React from 'react'
import {AiOutlineDoubleRight} from "react-icons/ai"
import "./app.css"

const App = () => {
    const url = 'https://course-api.com/react-tabs-project'
    let [roles,setRoles]=React.useState([])
    let [companies,setCompanies]=React.useState([])
    let [selectedComapny,setSelectedComapny]=React.useState({})
    let [loading,setLoading]=React.useState(true)


    React.useEffect(()=>{
        setLoading(true)
        const start=async ()=>{
       let data=await fetch(url)
        let realData=await data.json()
        setLoading(false)
        setRoles(realData)
        let Companies=realData.map((all)=>all?.company)
        setCompanies(Companies)
        setSelectedComapny(realData[0])
      }
      start()
    },[])

    function comapny(name){
        let newCompany=roles.find((all)=>all.company===name)
        // console.log(newCompany)
        setSelectedComapny(newCompany)
    }

    if(loading){
        return <div>
            <h1>Loading....</h1>
        </div>
    }

    // console.log()
  return (
    <div className='TabsMain'>
        <h1 className='Heading'>Our Menu</h1>
       <div className='toursLine'></div>

       <div className='tabsData'>
          {/*  */}
          <div className='all' >
             {
                companies.map((all)=>{
                    return (
                        <div style={{display:"flex"}}>
                            {/* <div className={`${all===selectedComapny?.company?"verticalLine":""}`}></div> */}
                            <h2 onClick={()=>comapny(all)} style={{cursor:"pointer",fontSize:"20px"}} className={`comapnyName ${all===selectedComapny?.company?"activeCompany":""}`}>{all}</h2>
                        </div>
                        )
                })
             }
          </div>
          {/*  */}
      {/*  */}
          <div>
            <h1 className='dark' style={{fontSize:"30px"}}>{selectedComapny?.title}</h1>
            <a className='light name' style={{fontSize:"22px"}} >{selectedComapny?.company}</a>
            <p className='light' style={{fontSize:"15px"}}>{selectedComapny?.dates}</p>

            <div>
                {
                    selectedComapny?.duties?.map((all)=>{
                        return(
                            <div style={{display:"flex",alignItems:"center"}}>
                                <AiOutlineDoubleRight style={{color:"blue",fontSize:"76px"}}/>
                                <p className='light para'>{all}</p>
                            </div>
                        )
                    })
                }
            </div>

          </div>

          {/*  */}

       </div>
    </div>
  )
}

export default App
