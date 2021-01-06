import Header from './components/Header';
import styled from '@emotion/styled'
import Form from './components/Form';
import {useState} from 'react';
import Resume from './components/Resume';

const Wrapper = styled.div`
 max-width:600px;
 margin: 0 auto;
`;

const FormWrapper = styled.div`
  background-color: #fff;
  padding:3rem;
`;

function App () {

  const [resume, setResume] = useState({
    quote: '',
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  // extract data
  const {data} = resume

  return (
    <Wrapper>
      <Header
        title='Car insurance quotes'
      />
      <FormWrapper>
        <Form
          setResume={setResume}
        />

        <Resume
          data={data}
        />
      </FormWrapper>
    </Wrapper>
  );
}

export default App;
