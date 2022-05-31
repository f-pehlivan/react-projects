import React from 'react';
import {Grid, Form, Segment, Button} from 'semantic-ui-react';
import { options } from '../../utils/constans';

const FormComponent = () => {
  return (
    <Grid textAlign='center' verticalAlign='middle'>
      <Grid.Column style={{ width: 300 }}>
        <div className='ui piled segments'>
          <div className="ui segment brand">
            <a
            href="https://github.com/clarusway"
            className="design"
            target='_blank'
            rel='noopener noreferrer'
            >
              <code>{'<Clarusway/> '}</code>
            </a>
            <span className="design header">design</span>
          </div>
        </div>
        <h2 className="contact-header">Add Contact</h2>
        <Form size="large">
          <Segment stacked>
            <Form.Input
              fluid
              name="username"
              icon="user"
              iconPosition="left"
              placeholder="Name"
              required
              />
              <Form.Input
                fluid
                name="phoneNumber"
                icon="phone"
                iconPosition="left"
                placeholder="Phone Number"
                required
                />
                <Form.Dropdown
                  options={options}
                  name="gender"
                  placeholder="Gender"
                  display="true"
                  fluid
                  selection
                  required
                />
                <Button color="teal" fluid size="large">Add</Button>
          </Segment>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default FormComponent;