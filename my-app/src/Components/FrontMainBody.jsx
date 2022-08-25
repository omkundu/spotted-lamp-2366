import React from 'react'
// import { Container, VStack } from '@chakra-ui/react'
import { Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Link } from "react-router-dom"
function FrontMainBody() {
  return (
    <div>
        <>
        <div style={{width:"60%",
         marginTop:"2rem",
         border:"1px solid grey",
         marginLeft:"22%",
         MarginTop:"2rem",
         height:"500px",
         
         }}>
            {/* First Child Div Start */}
            <div style={{marginLeft:"2rem",marginTop:"0.2rem",}}>
              <h1 style={{color:"grey"}}>Related Searches</h1>
            </div>
          <div>
            
        <Link to="/Halloween"><Box bg='#4285f4' w='95%'
         p={4} color='white'
          paddingTop="11%" 
          marginLeft="3%"
          marginTop="2rem" 
          borderRadius="10px"
          height="22%"
          textAlign="center"
          cursor="pointer"
          _hover={{backgroundColor:"#2a56c6"}}
          
     
          
           >
          <h1 style={{marginTop:"-3rem",fontSize:"28px"}}>Restaurant Menu</h1>  
            {/* First Child Div end */}
            <div style={{width:"10%",height:"20px",marginTop:"-3rem"}}>
            <img src="https://afs.googleusercontent.com/ad_icons/standard/publisher_icon_image/search.svg?c=%231967d2" alt="" srcset="" style={{width:"45%"}} />
            {/* <img src='https://afs.googleusercontent.com/ad_icons/standard/publisher_icon_image/chevron.svg?c=%23ffffff'/> */}
            <div style={
                {
                    marginTop:"-1.5rem"
                }
            }>
            <img src="https://afs.googleusercontent.com/ad_icons/standard/publisher_icon_image/chevron.svg?c=%23ffffff" alt="" srcset="" style={{marginLeft:"900%"}}/>

            </div>
            </div>
         
        </Box></Link>
       
        
        </div>

         {/* Second Child Div Start */}
        <div>
        <Link to="/menu"><Box bg='#4285f4' w='95%'
         p={4} color='white'
          paddingTop="11%" 
          marginLeft="3%"
          marginTop="2rem" 
          borderRadius="10px"
          height="22%"
          textAlign="center"
          cursor="pointer"
          _hover={{backgroundColor:"#2a56c6"}}
           >
          <h1 style={{marginTop:"-3rem",fontSize:"28px"}}>Menu</h1>  
            {/* First Child Div end */}
            <div style={{width:"10%",height:"20px",marginTop:"-3rem"}}>
            <img src="https://afs.googleusercontent.com/ad_icons/standard/publisher_icon_image/search.svg?c=%231967d2" alt="" srcset="" style={{width:"45%"}} />

            <div style={
                {
                    marginTop:"-1.5rem"
                }
            }>
            <img src="https://afs.googleusercontent.com/ad_icons/standard/publisher_icon_image/chevron.svg?c=%23ffffff" alt="" srcset="" style={{marginLeft:"900%"}}/>

            </div>
        
            </div>
         
        </Box></Link>
        </div>
         {/* Second  Child Div end */}



         {/* Third Child Div Start */}
        <div>
       <Link to="/RestaurantMenu"> <Box bg='#4285f4' w='95%'
         p={4} color='white'
          paddingTop="11%" 
          marginLeft="3%"
          marginTop="2rem" 
          borderRadius="10px"
          height="22%"
          textAlign="center"
          cursor="pointer"
          _hover={{backgroundColor:"#2a56c6"}}
           >
          <h1 style={{marginTop:"-3rem",fontSize:"28px"}}>Express Menu</h1>  
            {/* First Child Div end */}
            <div style={{width:"10%",height:"20px",marginTop:"-3rem"}}>
            <img src="https://afs.googleusercontent.com/ad_icons/standard/publisher_icon_image/search.svg?c=%231967d2" alt="" srcset="" style={{width:"45%"}} />

            <div style={
                {
                    marginTop:"-1.5rem"
                }
            }>
            <img src="https://afs.googleusercontent.com/ad_icons/standard/publisher_icon_image/chevron.svg?c=%23ffffff" alt="" srcset="" style={{marginLeft:"900%"}}/>

            </div>

            </div>
         
        </Box></Link>
        </div>
        </div>
          {/* Third Child Div end */}

         <div style={{textAlign:"center",marginTop:"3rem"}}>
         <Stack spacing={3}>
        
        <Text fontSize='16px' 
            marginTop="-1">
            Copyright © 1999-2022 GoDaddy, LLC. All rights reserved.
            </Text>
        </Stack>
         </div>
       
       
        </>
    </div>
  )
}

export default FrontMainBody