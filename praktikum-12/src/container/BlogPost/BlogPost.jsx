import React, { Component } from "react";
import './BlogPost.css';
import Post from "../../Component/BlogPost/Post";
import firebase from 'firebase/compat/app';
import firebaseConfig from "../../firebase/config";
import 'firebase/compat/database';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        firebase.initializeApp(firebaseConfig); // inisialisasi konfigurasi database firebase

        this.state = {
            listArtikel: []
        }
    }

    ambilDataDariServerAPI = () => {
        let ref = firebase.database().ref("/");
        ref.on("value", snapshot => {
            const state = snapshot.val();
            this.setState(state);
        });
    }

    simpanDataKeServerAPI = () => {
        firebase.database()
        .ref("/")
        .set(this.state);
    }

    componentDidMount() {
        this.ambilDataDariServerAPI()    
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState !== this.state){
            this.simpanDataKeServerAPI();
        }
    }
    
    handleHapusArtikel = (idArtikel) => { // fungsi yang akan di panggil ketika tombol hapus di klik
        const {listArtikel} = this.state;
        const newState = listArtikel.filter(data => {
            return data.uid !== idArtikel;
        });
        this.setState({listArtikel: newState});
    }

    // handleTambahArtikel = (event) => {
    //     let formInsertArtikel = {...this.state.insertArtikel};
    //     let timestamp = new Date().getTime();
    //     formInsertArtikel['id'] = timestamp;
    //     formInsertArtikel[event.target.name] = event.target.value;
    //     this.setState({
    //         insertArtikel: formInsertArtikel
    //     });
    // }

    //tombol simpan
    handleTombolSimpan = (event) => {  //fungsi untuk menghandle tombol simpan
        let title = this.refs.judulArtikel.value;
        let body = this.refs.isiArtikel.value;
        let uid = this.refs.uid.value;

        if (uid && title && body) {
            const { listArtikel } = this.state;
            const indeksArtikel = listArtikel.findIndex(data => {
                return data.uid === uid;
            });
            listArtikel[indeksArtikel].title = title;
            listArtikel[indeksArtikel].body = body;
            this.setState({ listArtikel });
        }else if (title && body) {
            const uid = new Date().getTime().toString();
            const { listArtikel } = this.state;
            listArtikel.push({ uid, title, body });
            this.setState({ listArtikel });
        }

        this.refs.judulArtikel.value = "";
        this.refs.isiArtikel.value = "";
        this.refs.uid.value = "";
    };

    render() {
        return(
            <div className="post-artikel">
                <div className="form pb-2 border-bottom">
                    <div className="form-group row">
                        <label htmlFor="title" className="col-sm-2 col-form-label">Judul</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" id="title" name="title" ref="judulArtikel"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="body" className="col-sm2 col-form-label">Isi</label>
                        <div className="col-sm-10">
                            <textarea name="body" id="body" rows="3" className="form-control" ref="isiArtikel"></textarea>
                        </div>
                    </div>
                    <input type="hidden" name="uid" ref="uid" />
                    <button className="btn btn-primary" type="submit" onClick={this.handleTombolSimpan}>Simpan</button>
                </div>
                <h2>Daftar Artikel</h2>
                {
                    this.state.listArtikel.map(artikel => {
                        return <Post key={artikel.uid} judul={artikel.title} isi={artikel.body} idArtikel={artikel.uid} hapusArtikel={this.handleHapusArtikel}/>
                    })
                }
            </div>
        )
    }
}

export default BlogPost;