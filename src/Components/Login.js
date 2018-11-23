import React, { Component } from "react";
import { Col,FormGroup,Label, Button, Form, Input, Row, Card, CardBody, CardTitle } from 'reactstrap';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    render() {
        return (
            <Row>
                <Col sm={10}>
                    <Card>
                        <CardBody>
                            <CardTitle>Login</CardTitle>
                            <Form>
                                <FormGroup>
                                <Label for="labelEmail">Email</Label>
                                    <Input  type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                </FormGroup>
                                <FormGroup>
                                <Label for="labelPassword">Password</Label>
                                    <Input  type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                                </FormGroup>
                                <Button>Sign in</Button>
                            </Form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

        );
    }
}