import React from 'react'
import NavBar from '../components/navbar/NavBar'
import FirstElement from '../components/firstElement/FirstElement'
import SecondElement from '../components/secondElement/SecondElement'
import Form from '../components/form/Form'
import ThirdElement from '../components/thirdElement/ThirdElement'
import FourthElement from '../components/fourthElement/FourthElement'
import Footer from '../components/footer/Footer'


const Home = () => {
  return (
    <>
    <NavBar />
    <FirstElement />
    <SecondElement/>
    <ThirdElement />
    <FourthElement />
    <Form />
    <Footer/>
    </>
  )
}

export default Home