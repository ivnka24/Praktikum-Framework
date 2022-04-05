import React, { Component } from 'react'
import airforce from './img/airforce.png'
import jordanma2 from './img/jordanma2.png'
import airmax from './img/airmax.png'
import force1 from './img/force1.png'
import lebronlow from './img/lebronlow.png'
import kd13 from './img/KD13.png'

export const DataContext = React.createContext();

export class DataProvider extends Component {

    state = {
        products: [
            {
                "_id": "1",
                "title": "Nike Air Force",
                "src": airforce,
                "description": "Men's Shoe",
                "content": "This product is excluded from site promotions and discounts. The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp overlays, bold colours and the perfect amount of flash to make you shine.",
                "price": 25,
                "colors": ["red", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "2",
                "title": "Jordan MA2",
                "src": jordanma2,
                "description": "Men's Shoe",
                "content": "This product is excluded from site promotions and discounts. The radiance lives on in the Jordan MA2, the b-ball icon that puts a fresh spin on what you know best: crisp overlays, bold colours and the perfect amount of flash to make you shine.",
                "price": 19,
                "colors": ["red", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "3",
                "title": "Nike Air Max",
                "src": airmax,
                "description": "Men's Shoe",
                "content": "This product is excluded from site promotions and discounts. The radiance lives on in the Nike Air Max, the b-ball icon that puts a fresh spin on what you know best: crisp overlays, bold colours and the perfect amount of flash to make you shine.",
                "price": 50,
                "colors": ["lightblue", "white", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "4",
                "title": "Nike Air Force 1",
                "src": force1,
                "description": "Men's Shoe",
                "content": "This product is excluded from site promotions and discounts. The radiance lives on in the Nike Air Force 1 '07, the b-ball icon that puts a fresh spin on what you know best: crisp overlays, bold colours and the perfect amount of flash to make you shine.",
                "price": 15,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "5",
                "title": "LeBron 18 Low",
                "src": lebronlow,
                "description": "Men's Slipper",
                "content": "This product is excluded from site promotions and discounts. The radiance lives on in the LeBron 18 Low, the b-ball icon that puts a fresh spin on what you know best: crisp overlays, bold colours and the perfect amount of flash to make you shine.",
                "price": 17,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            },
            {
                "_id": "6",
                "title": "KD13 EP",
                "src": kd13,
                "description": "Men's Shoe",
                "content": "This product is excluded from site promotions and discounts. The radiance lives on in the LeBron 18 Low, the b-ball icon that puts a fresh spin on what you know best: crisp overlays, bold colours and the perfect amount of flash to make you shine.",
                "price": 45,
                "colors": ["orange", "black", "crimson", "teal"],
                "count": 1
            }
        ],
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider 
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


