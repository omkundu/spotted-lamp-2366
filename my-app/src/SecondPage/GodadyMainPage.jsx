import { color } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import SecondPageBody from './SecondPageBody'
import FooterPart from './FooterPart'

function GodadyMainPage() {
  return (
    <div>
      {/* Second Page Navbar Start............................top-header........ */}
      <>
      <div style={{width:"100%",height:"150px",
      // border:"1px solid teal",
      marginTop:"2rem"}}>
        <div style={{width:"12%",
        height:"50px",
        marginLeft:"5rem",
        marginTop:"1rem",
        cursor:"pointer"
        }}>
     <Link to="/"> <img  src="https://assets.website-files.com/5ee732bebd9839b494ff27cd/60420a6a768b97a8aa78f8d6_3c4godaddy-logo-1-1__2160.png" /></Link>
        </div>
        <div>
       <img style={{marginLeft:"19%",marginTop:"-3.2rem",width:"3%",cursor:"pointer"}} src="https://img.shop.com/Image/resources/images/icon-menu-24px.svg" alt="" srcset="" />
        </div>
{/* ...........................................leftSideWorkDone....................... */}





        <div style={{width:"25%",
        height:"50px",
        // border:"1px solid teal",
        marginLeft:"69%",
        marginTop:"-2.8rem",
       display:"flex",
       justifyContent:"space-between",
       fontSize:"16px",
       fontWeight:"",
       cursor:"pointer"
        }}>
          <p >Contact us 24/7</p>
          <p >Blog</p>
          <p >Help</p>
          <p>Sign in </p>
          <img src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png" alt="" srcset=""  style={{width:"7%",marginTop:"2px",height:"25px"}}/>
      </div>

      {/* ........................SearchBar...................... */}
    <div style={{width:"50%",
    height:"45px",
    border:"1px solid teal",
    marginLeft:"19%",
    marginTop:"1.9rem"}}>
      <input type="text"
       placeholder='foodxprs.com'
        style={{width:"100%",
        height:"100%"}} />

        <div style={{width:"6%",
        height:"105%",
        border:"1px solid teal",
        marginTop:"-44px",
        marginLeft:"100%",
        cursor:"pointer",
        
        }}>
        <img src="https://png.pngtree.com/png-vector/20190115/ourlarge/pngtree-vector-search-icon-png-image_320926.jpg" alt="" srcset=""
         style={{width:"100%",height:"100%"}}/>
        </div>

        <div style=
        {{width:"22%",
        height:"3rem",
        border:"1px solid #9ECCDF"
        ,marginLeft:"110%",
        marginTop:"-2.8rem",
        backgroundColor:"#9ECCDF",
        cursor:"pointer"
        }}>
          <h3 style={{textAlign:"center",color:"white",fontFamily:"sans-serif",fontSize:"18px",marginTop:"0.5rem"}}>Countinue to Cart</h3>
        </div>
    </div>
      </div>
      <SecondPageBody/>
      <FooterPart/>
      
      
      
      
      
      
      
      
      
      
      
      </>
    </div>
  )
}

export default GodadyMainPage