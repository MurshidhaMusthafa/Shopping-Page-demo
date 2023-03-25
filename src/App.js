import 'bootstrap/dist/css/bootstrap.min.css';
 import React from 'react'
 import Navbar from './Components/Navbar'
 import Body from './Components/Body'
 import ImageGrid from './Components/ImageGrid'
import Grid from './Components/Grid'
import Category from './Components/Category'
import Footer from './Components/Footer'
 function App() {
   return (
   <>
   <Navbar/>
  <Body/>
   <ImageGrid/>
   <Category/>
   <Grid/>
   <Footer/>
   </>
   )
 }
 
 export default App