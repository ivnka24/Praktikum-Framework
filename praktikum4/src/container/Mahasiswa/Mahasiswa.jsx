import React, { Component } from "react";
import Post from "../../Component/Mahasiswa/Post";
class Mahasiswa extends Component {
    state = {
        listMahasiswa: [],
        insertMahasiswa: {
            userId: 1,
            id: 1,
            NIM: "",
            nama: "",
            alamat:"" , 
            hp:"" ,
            angkatan:"" , 
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa')
            .then(response => response.json())
            .then(jsonHasilAmbilDariAPI => {
                this.setState({
                    listMahasiswa: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()    
    }
    
    handleHapusMahasiswa = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, {method: 'DELETE'})
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahMahasiswa = (event) => {
        let formInsertMahasiswa = {...this.state.insertMahasiswa};
        let timestamp = new Date().getTime();
        formInsertMahasiswa['id'] = timestamp;
        formInsertMahasiswa[event.target.name] = event.target.value;
        this.setState({
            insertMahasiswa: formInsertMahasiswa
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMahasiswa)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            })
    }

    render() {
        return(
            <div className="post-mahasiswa">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Nim</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">Nama</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambahMahasiswa}/> 
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">Alamat</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="alamat" name="alamat" onChange={this.handleTambahMahasiswa}/> 
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">HP</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">Angkatan</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambahMahasiswa}/> 
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">Status</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambahMahasiswa}/>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Mahasiswa</h2>
                {
                    this.state.listMahasiswa.map(mahasiswa => {
                        return <Post key={mahasiswa.id} NIM={mahasiswa.NIM} Nama={mahasiswa.nama} Alamat={mahasiswa.alamat} hp={mahasiswa.hp} Angkatan={mahasiswa.angkatan} status={mahasiswa.status} idmahasiswa={mahasiswa.id} hapusmahasiswa={this.handleHapusMahasiswa}/>
                    })
                }
            </div>
        )
    }
}

export default Mahasiswa;