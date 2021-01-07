import Header from './components/Header';
import styled from '@emotion/styled'
import Form from './components/Form';
import {useState} from 'react';
import Resume from './components/Resume';
import Result from './components/Result';
import Spinner from './components/Spinner';

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

  const [loading, setLoading] = useState(false)

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
          setLoading={setLoading}
        />

        {loading ? <Spinner /> : null}

        <Resume
          data={data}
        />

        {!loading ? <Result quote={quote} /> : null}

      </FormWrapper>
    </Wrapper>
  );
}

export default App;
