import React from 'react';
// import './index.css';
import {  Col, Row, Button } from 'react-bootstrap';
// import Button from '@mui/material/Button';

function HomeButton(props) {
    return (
        <Col>
            <Button>{props.children}</Button>
        </Col>
    );
}

export default HomeButton;