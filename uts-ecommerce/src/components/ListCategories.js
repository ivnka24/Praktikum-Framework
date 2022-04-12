import React, { Component } from 'react';
import { Col, ListGroup } from 'react-bootstrap';
import axios from 'axios';
import { API_URL } from '../utils/constant';
import { fontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTv } from '@fortawesome/free-solid-svg-icons'

export default class ListCategories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        axios
            .get('http://localhost:3001/categories')
            .then(res => {
                const categories = res.data;
                this.setState({ categories });
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { categories } = this.state
        const { changeCategory, categoriYangDipilih } = this.props
        return (
            <Col md={2} mt="2">
                <h4><strong>Daftar Kategori</strong></h4>
                <hr />
                <ListGroup>
                    {categories && categories.map((category) => (
                        <ListGroup.Item key={category.id} 
                        onClick={() => changeCategory(category.nama)}
                        className={categoriYangDipilih === category.nama && "category-aktif"}
                        style={{cursor: 'pointer'}}
                        >
                            <h5>
                                {category.nama}
                            </h5>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Col>
        )
    }
}