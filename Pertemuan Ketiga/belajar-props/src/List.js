import React, { Component } from 'react';
import Image from './Image';
class List extends Component {
    render() {
        return (
        <div>
            <ol>
            <li>Satu<Image linkGambar='https://placeimg.com/640/480/arch/grayscale' /></li>
            <li>Dua<Image linkGambar='https://placeimg.com/640/480/tech/sepia' /></li>
            <li>Tiga<Image linkGambar='https://placeimg.com/640/480/animals/sepia' /></li>
            <li>Empat<Image linkGambar='https://placeimg.com/640/480/nature/grayscale' /></li>
            </ol>
        </div>
     );
}
}export default List;
