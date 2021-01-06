import React from 'react'
import styled from '@emotion/styled'
import {capitaliceLetter} from '../helpers'


const WrapperResume = styled.div`
  padding: 1rem;
  text-align: center;
  background-color: #00838f;
  color: #fff;
  margin-top: 1rem;
`

const Resume = ({data}) => {
  // get data
  const {brand, year, plan} = data

  if (brand.trim() === '' || plan.trim() === '' || year.trim() === '') {
    return null
  }

  return (
    <WrapperResume>
      <h2>Resume quote</h2>
      <ul>
        <li>Brand: {capitaliceLetter(brand)}</li>
        <li>Plan: {capitaliceLetter(plan)}</li>
        <li>Year of the car: {capitaliceLetter(year)}</li>
      </ul>
    </WrapperResume>
  )
}

export default Resume
