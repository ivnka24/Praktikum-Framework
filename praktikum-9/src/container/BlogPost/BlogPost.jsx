import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../Component/BlogPost/Post";
import API from "../../services";
class BlogPost extends Component {
    state = {
        listArtikel: [],
        insertArtikel: {
            userId: 1,
            id: 1,
            title: "",
            body: ""
        }
    }

    ambilDataDariServerAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                listArtikel: result
            })
        })
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()    
    }
    
    handleHapusArtikel = (data) => { // fungsi yang akan di panggil ketika tombol hapus di klik
        API.deleteNewsBlog(data)
            .then(result => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambahArtikel = (event) => {
        let formInsertArtikel = {...this.state.insertArtikel};
        let timestamp = new Date().getTime();
        formInsertArtikel['id'] = timestamp;
        formInsertArtikel[event.target.name] = event.target.value;
        this.setState({
            insertArtikel: formInsertArtikel
        });
    }

    //tombol simpan
    handleTombolSimpan = () => {  //fungsi untuk menghandle tombol simpan
        API.postNewsBlog(this.state.insertArtikel) // mengirim data ke API
            .then((res) => { // response dari API dalam bentuk JSON
                this.ambilDataDariServerAPI() // ambil data dari server API
            })

    }

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" onChange={this.handleTambahArtikel}/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" className="form-control" onChange={this.handleTambahArtikel}></textarea>
                        </div>
                    </div>
                    <button className="btn btn-primary" type="submit" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.id} judul={artikel.title} isi={artikel.body} idArtikel={artikel.id} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;