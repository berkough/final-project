import { useState } from 'react';
import { FloatingLabel, FormControl, Row, Col, Form, Button, Container } from 'react-bootstrap';

export default function SearchForm({setData}){
    const [searchText, setSearchText] = useState('');
    
    const handleSubmit = () => {
        console.log('Submitting');
        if (searchText.length === 0){
            console.log('Error');
            return false;
        } else {
            setData(searchText);
        }
    }

    return(
       <>
        <Form>
            <Row>
                <Col md>
                    <FloatingLabel controlId='floatingInput' label='Search' className='m-3'>
                        <FormControl type='text' placeholder='Search for a movie...' onChange={(e)=>setSearchText(e.target.value)} />
                    </FloatingLabel>
                </Col>
            </Row>
            <Container>
                <Row>
                    <Button onClick={handleSubmit} variant='primary' type='button'>Search</Button>
                </Row>
            </Container>
        </Form>
       </>
    )
}