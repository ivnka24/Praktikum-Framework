import React from 'react'
import {Col, Card, Button} from "react-bootstrap";
import { numberWithCommas } from '../utils/utils';

export const Menus = ({ menu, masukKeranjang }) => {
    return (
        <Col md={4} xs={6} className="mb-4">
            <Card className="shadow" onClick={() => masukKeranjang(menu)}>
                <Card.Img 
                variant="top" 
                src={menu.gambar} />
                <Card.Body>
                    <Card.Title><strong>{menu.nama}</strong></Card.Title>
                    <Card.Text>
                        Rp. {numberWithCommas(menu.harga)}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    )
}
