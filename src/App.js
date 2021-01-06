import Header from './components/Header';
import styled from '@emotion/styled'
import Form from './components/Form';
import {useState} from 'react';
import Resume from './components/Resume';
import Result from './components/Result';

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
    quote: 0,
    data: {
      brand: '',
      year: '',
      plan: ''
    }
  })

  // extract data
  const {quote, data} = resume

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

        <Result
          quote={quote}
        />
      </FormWrapper>
    </Wrapper>
  );
}

export default App;
