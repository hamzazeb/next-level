import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const GridSystem=()=>{
    return(
        <Fragment>
           <Container> 
                <h1> One Coloumns </h1>
                    <Row> 
                        <Col >
                            I'm your content inside the grid!
                        </Col>
                    </Row>
                <h1> 2 Coloumns </h1>
                <Row> 
                        <Col lg={6}>
                        Left column
                        </Col>
                        <Col lg={6}>
                        Right column
                        </Col>
                    </Row>
            </Container>
        </Fragment>
    )
}
export default GridSystem