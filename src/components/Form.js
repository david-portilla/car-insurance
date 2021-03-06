import React, {useState} from 'react'
import styled from '@emotion/styled'
import {getDifYear, getPlan, totalToPay} from '../helpers'
import PropTypes from 'prop-types'

const Field = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 1rem;
`

const Label = styled.label`
  flex: 0 0 100px;
`

const Select = styled.select`
 display: block;
 width: 100%;
 padding: 1rem;
 border: 1px solid #e1e1e1;
 -webkit-appearance: none;
`

const InputRadio = styled.input`
  margin: 0 1rem;
`

const SubmitButton = styled.button`
  background-color: #00838F;
  font-size: 16px;
  font-weight: 900;
  width: 100%;
  padding: 1rem;
  color: #fff;
  border: none;
  text-transform: uppercase;
  -webkit-appearance: none;
  cursor: pointer;
  transition: all linea 0.25s;
  margin-top: 1rem;

  &:hover {
    background-color: #26C6DA;
    transition: all linea 0.25s;
  }
`

const Error = styled.div`
  background-color: red;
  color: white;
  padding: 1rem;
  width:100%;
  text-align: center;
  margin-bottom: 2rem;
`

const Form = ({setResume, setLoading}) => {

  const [data, saveData] = useState({
    brand: '',
    year: '',
    plan: ''
  })

  const [error, saveError] = useState(false)

  const {brand, year, plan} = data

  const getFormValue = (e) => {
    saveData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (brand.trim() === '' || plan.trim() === '' || year.trim() === '') {
      saveError(true)
      return
    }
    saveError(false)
    // base 2000
    let result = 2000
    // get difference between years
    const diffYear = getDifYear(year)
    // each year rest 3%
    result -= ((diffYear * 3) * result) / 100
    // calculate increment based on brand
    result = totalToPay(brand) * result
    // Basic plan increase 20%
    const increasePlan = getPlan(plan)
    // Total price
    result = parseFloat(increasePlan * result).toFixed(2)
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setResume({
        quote: Number(result),
        data
      })
    }, 2000)
  }

  return (
    <form
      onSubmit={handleSubmit}
    >

      {error ? <Error>All fields are required</Error> : null}

      <Field>
        <Label>Brand</Label>
        <Select
          name="brand"
          value={brand}
          onChange={getFormValue}
        >
          <option value=""> - Select brand -</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>

      <Field>
        <Label>Year</Label>
        <Select
          name="year"
          value={year}
          onChange={getFormValue}
        >
          <option value="">-- Select year --</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
        </Select>
      </Field>

      <Field>
        <Label>Plan</Label>
        <InputRadio
          type="radio"
          name="plan"
          value="basic"
          id="basic"
          checked={plan === 'basic'}
          onChange={getFormValue}
        />
        <label htmlFor="basic">Basic</label>

        <InputRadio
          type="radio"
          name="plan"
          value="full"
          id="full"
          checked={plan === 'full'}
          onChange={getFormValue}
        />
        <label htmlFor="full">Full</label>
      </Field>

      <SubmitButton
        type="submit"
      >
        Quote
      </SubmitButton>
    </form>
  )
}

Form.propTypes = {
  setResume: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired
}

export default Form
