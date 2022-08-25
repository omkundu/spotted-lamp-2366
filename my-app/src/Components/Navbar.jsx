import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
// import GodadyMainPage from '../SecondPage/GodadyMainPage'
import { useNavigate } from 'react-router-dom'


import FrontMainBody from './FrontMainBody'
function Navbar() {
  const navigate=useNavigate()
 const handleChange=()=>{
  navigate("/GodadyMainPage")
  }
  return (
    <div>
        {/* front-Page navbar start */}
        <>
        <div>
        <Box bg='#9eccdf'
          w='100%'
           h="15rem"
            p={4}>
          <img src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/60420a6a768b97a8aa78f8d6_3c4godaddy-logo-1-1__2160.png" 
          alt="" 
          srcset=""  
          style={{width:"12%",
          marginLeft:"10rem",
          cursor:"pointer"
          }}/>

              <Stack 
              spacing={3}>
                <div style=
                {{textAlign:"center",
                fontWeight:"bold",
                marginTop:"1rem"}}>
                <Text fontSize='5xl'>
                  foodxprs.com
                  </Text>
                </div>



                <div style=
                {{textAlign:"center",
                fontWeight:"bold",
                marginTop:"-0.5rem" ,
                fontSize:"25px"}}>
                <p style={{fontSize:"89%",
                marginTop:"0.2rem"}}>
                  is parked free, courtesy of GoDaddy.com.
                  </p>
                </div>

                <div style={{marginLeft:"43%",
                border:"2px solid black",width:"13%",
                height:"43px",backgroundColor:"black",
                cursor:"pointer"}}>

                    <Link to="/GodadyMainPage">
                   <button onClick={handleChange} 
                  style={{color:"white",
                  paddingLeft:"1.8rem" ,
                  paddingTop:"0.3rem",
                 
                  }}>
                  Get This Domain</button></Link>


                  {/* <h2 style={{color:"white"}}>Get This Domain</h2> */}
                
                </div>
              </Stack>
         </Box>
        </div>

        {/*front-Page navbar end */}

      {/* Main Body Page start */}
      <FrontMainBody/>

        </>
      
    </div>
  )
}

export default Navbar
