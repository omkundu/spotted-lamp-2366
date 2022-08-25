import React from 'react'
import { Box, Stack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"

function Menu() {
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
                marginLeft:"10rem"
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
                         <button 
                        style={{color:"white",
                        paddingLeft:"1.8rem" ,
                        paddingTop:"0.3rem"}}>
                        Get This Domain</button></Link>

                      </div>
                    </Stack>
               </Box>
              </div>
              {/*front-Page navbar end */}
              <div>
              </div>

              {/* ...........................................................NavbarPageEnd............................................. */}


              <div style={{width:"60%",
            marginTop:"2rem",
            border:"1px solid grey",
            marginLeft:"22%",
            MarginTop:"2rem",
            height:"1000px"}}>
            <div>

                <p style={{marginTop:"5rem",
                marginLeft:"18%",
                fontSize:"22px",
                fontStyle:"italic",
                textDecoration:"underline",
                color:"blue",
                cursor:"pointer",
                
                }}>Restaurant Menu</p>


                <p style={{marginTop:"-2.1rem",
                marginLeft:"36.5%",
                fontSize:"22px",
                color:"blue",
                cursor:"pointer",
                }}>at Amazon India - India's largest online store</p>
            </div>

             <div style={{marginLeft:"18%",marginTop:"2rem"}}>
             <Stack spacing={3}>
            
            <Text fontSize='xs' color="#4caf50" fontFamily="sans-serif" cursor="pointer">https://www.amazone.in/gateway.home ▼</Text>
            </Stack>
             </div>
             
             <div style={{marginLeft:"23%",marginTop:"1rem"}}>
             <Stack spacing={3}>
            
            <Text fontSize='9px' color="black" fontFamily="sans-serif"  cursor="pointer">Top brands for Phones and Electronics. Latest trends in Fashion. Free Shipping available*</Text>
            </Stack>
             </div>
             
          <div style=
          {{width:"28%",
          border:"5px solid #2a56c6",
          height:"80px",
          marginLeft:"35%",
          marginTop:"3rem",
          borderRadius:"5px",
          backgroundColor:"#4285f4"}}>
            <p style={{fontSize:"24px",color:"#ffffff",fontWeight:"bold",marginTop:"1.2rem",marginLeft:"1.3rem",cursor:"pointer"}}>➤ Visit Website</p>
{/* First-Div-end */}
          </div>
          <div>

<p style={{marginTop:"5rem",
marginLeft:"18%",
fontSize:"22px",
fontStyle:"italic",
textDecoration:"underline",
color:"blue",
cursor:"pointer",

}}>Restaurant Menu</p>


<p style={{marginTop:"-2.1rem",
marginLeft:"36.5%",
fontSize:"22px",
color:"blue",
cursor:"pointer",
}}>at Amazon India - India's largest online store</p>
</div>

<div style={{marginLeft:"18%",marginTop:"2rem"}}>
<Stack spacing={3}>

<Text fontSize='xs' color="#4caf50" fontFamily="sans-serif" cursor="pointer">https://www.amazone.in/gateway.home ▼</Text>
</Stack>
</div>

<div style={{marginLeft:"23%",marginTop:"1rem"}}>
<Stack spacing={3}>

<Text fontSize='9px' color="black" fontFamily="sans-serif"  cursor="pointer">Top brands for Phones and Electronics. Latest trends in Fashion. Free Shipping available*</Text>
</Stack>
</div>

<div style=
{{width:"28%",
border:"5px solid #2a56c6",
height:"80px",
marginLeft:"35%",
marginTop:"3rem",
borderRadius:"5px",
backgroundColor:"#4285f4"}}>
<p style={{fontSize:"24px",color:"#ffffff",fontWeight:"bold",marginTop:"1.2rem",marginLeft:"1.3rem",cursor:"pointer"}}>➤ Visit Website</p>
{/* First-Div-end */}
</div>





<div>

<p style={{marginTop:"5rem",
marginLeft:"18%",
fontSize:"22px",
fontStyle:"italic",
textDecoration:"underline",
color:"blue",
cursor:"pointer",

}}>Restaurant Menu</p>


<p style={{marginTop:"-2.1rem",
marginLeft:"36.5%",
fontSize:"22px",
color:"blue",
cursor:"pointer",
}}>at Amazon India - India's largest online store</p>
</div>

<div style={{marginLeft:"18%",marginTop:"2rem"}}>
<Stack spacing={3}>

<Text fontSize='xs' color="#4caf50" fontFamily="sans-serif" cursor="pointer">https://www.amazone.in/gateway.home ▼</Text>
</Stack>
</div>

<div style={{marginLeft:"23%",marginTop:"1rem"}}>
<Stack spacing={3}>

<Text fontSize='9px' color="black" fontFamily="sans-serif"  cursor="pointer">Top brands for Phones and Electronics. Latest trends in Fashion. Free Shipping available*</Text>
</Stack>
</div>

<div style=
{{width:"28%",
border:"5px solid #2a56c6",
height:"80px",
marginLeft:"35%",
marginTop:"3rem",
borderRadius:"5px",
backgroundColor:"#4285f4"}}>
<p style={{fontSize:"24px",color:"#ffffff",fontWeight:"bold",marginTop:"1.2rem",marginLeft:"1.3rem",cursor:"pointer"}}>➤ Visit Website</p>
{/* First-Div-end */}
</div>
           </div>
    
              </>
            
          </div>
       
     
      
  )
}

export default Menu