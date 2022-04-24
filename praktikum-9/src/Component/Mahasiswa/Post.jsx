import React from "react";

const Post = (props) => {
    return(
            <div className="mahasiswa">
                <div className="gambar-mahasiswa">
                    <img src="https://placeimg.com/640/480/tech" alt="Gambar Tumbnail Mahasiswa"/>
                    </div>
                   <div className="konten-Mahasiswa">
                       <div className="NIM-Mahasiswa">{props.NIM}</div>
                       <p className="Nama-Mahasiswa">{props.Nama}</p>
                       <p className="Alamat-Mahasiswa">{props.Alamat}</p>
                       <p className="Angkatan-Mahasiswa">{props.Angkatan}</p>
                       <p className="Status-Mahasiswa">{props.status}</p>
                       <p className="HP-Mahasiswa">{props.hp}</p>
                       <button className="btn btn-sm btn-warning" onClick={() => props.hapusmahasiswa(props.idmahasiswa)}>Hapus</button>
                       </div> 
                </div>

            
    )
}

export default Post;