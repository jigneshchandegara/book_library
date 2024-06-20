import React, { useState } from 'react'
import Banner from '../components/Headerbanner/Banner'
import Bestbook from '../components/Bestbook/Bestbook'
import Bannersection from '../components/Bannersection/Bannersection'
import Appstorebanner from '../components/Appstorebanner/Appstorebanner'
import Allbooks from '../components/Allbook/Allbook'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {

    return (
        <>
            <Banner />
            <Bestbook />
            <Bannersection />
            <Appstorebanner />
            <Allbooks />
            <Testimonial />
        </>
    )
}

export default Home