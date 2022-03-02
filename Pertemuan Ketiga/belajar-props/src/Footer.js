import React, {Component} from 'react';// Component menggunakan Functionconst Footer = 
class Footer extends Component{
    render(){
        console.log(this.props)

        return (
            <div>
            <h3>Halaman Footer</h3>
            <h3>Component ini dibuat menggunakan Function bukan Class</h3>
            <p>Nilai ini ditampilkan dari props: { this.props.judul } </p>
            <p>Nama Saya: { this.props.nama } </p>
            </div>
            );
    }    
}
export default Footer