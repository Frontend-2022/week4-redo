import React, {Fragment} from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import {
    Row, Col,
    Card, CardBody,
    CardTitle,FormGroup,Label,Input
} from 'reactstrap';

import PageTitle from '../../../Layout/AppMain/PageTitle';


import TableHover from './Examples/TableHover';


const RegularTables = (props) => {
    return (
        <Fragment>
            <TransitionGroup>
                <CSSTransition component="div" appear={true}
                    timeout={0} enter={false} exit={false}>
                    <div>
                        <PageTitle
                        heading="Regular Tables"
                        subheading="Tables are the backbone of almost all web applications."
                        icon="pe-7s-drawer icon-gradient bg-happy-itmeo" />
                        <div>
                        <FormGroup style={{display:'flex'}}>
                            <Label for="exampleSelect" style={{width: 'auto'}}>Học kỳ</Label>
                                <Input type="select" name="select" id="exampleSelect"  style={{width: 'auto'}}>
                                    <option >Tất cả</option>
                                    <option >Học kỳ</option>
                                    <option >Học kỳ</option>
                                    <option >Học kỳ</option>
                                    <option >Học kỳ</option>
                                </Input>
                        </FormGroup>
                            <Row>
                                <Col lg="13">
                                    <Card className="main-card mb-3">
                                        <CardBody>
                                            <CardTitle>Table with hover</CardTitle>
                                            <TableHover/>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </Fragment>
    );
};

export default RegularTables;
