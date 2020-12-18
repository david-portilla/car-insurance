import React from 'react'
import styled from '@emotion/styled'

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

const Form = () => {
  return (
    <form>
      <Field>
        <Label>Brand</Label>
        <Select>
          <option value=""> - Select brand -</option>
          <option value="american">American</option>
          <option value="european">European</option>
          <option value="asian">Asian</option>
        </Select>
      </Field>
      <Field>
        <Label>Year</Label>
        <Select>
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
        />
        <label for="basic">Basic</label>

        <InputRadio
          type="radio"
          name="plan"
          value="full"
          id="full"
        />
        <label for="full">Full</label>
      </Field>

      <SubmitButton type="button">Quote</SubmitButton>
    </form>
  )
}

export default Form
