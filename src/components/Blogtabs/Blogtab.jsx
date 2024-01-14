import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Blogtab.css';
import Allblogs from '../Blogs/Allblogs'

function Blogtabs() {
  return (
    <div className='blog-tab-component py-5'>
    <Container>
     <div className='form-search-field'>
     <Form className='blog-search'>
      <Form.Group className="mb-3 search-form-inline" controlId="exampleForm.ControlInput1">
         <Form.Control type="text" placeholder="Search" />
            <Button variant="primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#9B9B9B" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </Button>
         </Form.Group>
 
    </Form>    
    <Tabs
      defaultActiveKey="All"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="All" title="All">
        <Allblogs></Allblogs>
      </Tab>
      <Tab eventKey="Design" title="Design">
      <Allblogs></Allblogs>
      </Tab>
      <Tab eventKey="Product" title="Product">
      <Allblogs></Allblogs>
      </Tab>
      <Tab eventKey="Management" title="Management">
      <Allblogs></Allblogs>
      </Tab>
      <Tab eventKey="website" title="website">
      <Allblogs></Allblogs>
      </Tab>
      <Tab eventKey="UI/Ux" title="UI/Ux">
      <Allblogs></Allblogs>
      </Tab>
      <Tab eventKey="Devops" title="Devops">
      <Allblogs></Allblogs>
      </Tab>
    </Tabs>
    </div> 
    </Container>
    </div>
  );
}

export default Blogtabs;