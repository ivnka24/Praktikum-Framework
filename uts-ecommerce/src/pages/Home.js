import React, { Component } from 'react';
import { Row, Col, Container } from "react-bootstrap";
import { Hasil, ListCategories, Menus } from "../components";
import { API_URL } from '../utils/constant';
import axios from 'axios'
import swal from 'sweetalert'

export default class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      menus: [],
      categoriYangDipilih: 'SONY',
      keranjangs: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:3001/produk?category.nama=' + this.state.categoriYangDipilih)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })

    axios
      .get('http://localhost:3002/keranjangs')
      .then(res => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidUpdate(prevState){
    if(this.state.keranjangs !== prevState.keranjangs){
      axios
      .get('http://localhost:3002/keranjangs')
      .then(res => {
        const keranjangs = res.data;
        this.setState({ keranjangs });
      })
      .catch(error => {
        console.log(error);
      })
    }
  }

  changeCategory = (value) => {
    this.setState({
      categoriYangDipilih: value,
      menus: []
    })

    axios
      .get('http://localhost:3001/produk?category.nama=' + value)
      .then(res => {
        const menus = res.data;
        this.setState({ menus });
      })
      .catch(error => {
        console.log(error);
      })

  }

  masukKeranjang = (value) => {

    axios
      .get('http://localhost:3002/keranjangs?produk.id=' + value.id)
      .then(res => {
        if (res.data.length === 0) {
          const keranjang = {
            jumlah: 1,
            total_harga: value.harga,
            produk: value
          }

          axios
            .post('http://localhost:3002/keranjangs', keranjang)
            .then(res => {
              swal({
                title: "Sukses Masuk Keranjang!",
                text: "Sukses Masuk Keranjang" + keranjang.produk.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch(error => {
              console.log(error);
            })
        } else {

          const keranjang = {
            jumlah: res.data[0].jumlah + 1,
            total_harga: res.data[0].total_harga + value.harga,
            produk: value
          };

          axios
            .put('http://localhost:3002/keranjangs/' + res.data[0].id, keranjang)
            .then(res => {
              swal({
                title: "Sukses Masuk Keranjang!",
                text: "Sukses Masuk Keranjang" + keranjang.produk.nama,
                icon: "success",
                button: false,
                timer: 1500,
              });
            })
            .catch(error => {
              console.log(error);
            })

        }
      })
      .catch(error => {
        console.log(error);
      })
  };

  render() {
    const { menus, categoriYangDipilih, keranjangs } = this.state
    return (
        <div className="mt-3">
          <Container fluid>
            <Row>
              <ListCategories changeCategory={this.changeCategory} categoriYangDipilih={categoriYangDipilih} />
              <Col>
                <h4>
                  <strong>Daftar Produk</strong>
                </h4>
                <hr />
                <Row>
                  {menus && menus.map((menu) => (
                    <Menus
                      key={menu.id}
                      menu={menu}
                      masukKeranjang={this.masukKeranjang}
                    />
                  ))}
                </Row>
              </Col>
              <Hasil keranjangs={keranjangs} {...this.props}/>
            </Row>
          </Container>
        </div>
    );
  }
}

