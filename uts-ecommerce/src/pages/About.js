import React from 'react'
import { Image } from 'react-bootstrap'

const About = () => { 
    return (
        <div className='text-center'>
            <Image roundedCircle src='./images/vanka.jpeg' alt='page' width={250} />
            <p>{name("Ivanka Mauludi Juniar")}</p>
            <p>{kelas("TI3D")}</p>
            <p>{matkul("Pemograman Berbasis Web")}</p>
            <p>{jurusan("Teknik Informatika")}</p>
        </div>
    )
  }

const name = (n) =>{
    return(
        <h5>{n}</h5>
    )
}

const kelas = (n) =>{
    return(
        <h5>{n}</h5>
    )
}

const matkul = (n) =>{
    return(
        <h5>{n}</h5>
    )
}
const jurusan = (n) =>{
    return(
        <h5>{n}</h5>
    )
}

export default About