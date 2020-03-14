import React, { Component } from 'react'
import axios from 'axios';
import Header from '../../containers/header';
import Alert from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import './ViewProducts.css'
export default class ViewProducts extends Component {
    state={
        currency:'INR',
        INR:1,
        USD:1,
        products:[
            {
                name:'Nike Bag',
                Imageview1:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9525551/2020/1/30/8114a57f-5992-4004-97a7-fc39d2b353ac1580367470927-LOCOMOTIVE-Men-White-Sneakers-4601580367468602-1.jpg',
                Imageview2:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/9785491/2020/1/30/623845fc-3e0b-4af8-a2e9-565035c5c2a61580367574445-LOCOMOTIVE-Men-White-Sneakers-1201580367572990-1.jpg',
                price: 995,
            },
            {
                name:'Mast & Harbour Handheld Bag',
                Imageview1:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10110369/2020/3/3/c8319e94-f87c-4747-afe8-aeef8dcba8a31583224579964-United-Colors-of-Benetton-Pink-Solid-Handheld-Bag-1321583224-1.jpg',
                Imageview2:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10110369/2020/3/3/292cd1f5-24b2-44a0-9585-4a578057c8921583224579890-United-Colors-of-Benetton-Pink-Solid-Handheld-Bag-1321583224-2.jpg',
                price: 4099,
            },
            {
                name:'Roadster Watch',
                Imageview1:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2211763/2018/5/17/33d83cf4-cd55-499a-9b90-83bdfcf10cfa1526557343975-Roadster-Men-Black-Analogue-Watch-MFB-PN-LB-80240-6161526557343632-1.jpg',
                Imageview2:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/2211763/2018/5/17/2ec317d4-74b9-4d39-a426-0d545b6573bc1526557343846-Roadster-Men-Black-Analogue-Watch-MFB-PN-LB-80240-6161526557343632-6.jpg',
                price: 1799,
            },
            {
                name:'TAYHAA String Lights',
                Imageview1:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10813736/2019/11/13/b50e0979-759a-48ed-a102-92f1ae184d0c1573628565630-TAYHAA-String-Lights-5571573628564212-1.jpg',
                Imageview2:'https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10813736/2019/11/13/5a548890-7c04-4862-8169-b2982f871bf51573628565474-TAYHAA-String-Lights-5571573628564212-3.jpg',
                price: 699,
            }  
        ],
    }

    /***
     * Get exchange rates when currency changed.
     */
    onCurrencyChange=(e)=>{
        const currency=e.target.value;
        if(currency){
            axios.get(`${process.env.REACT_APP_EXCHANGE_API_URL}${currency}`)
            .then(response => {
              this.setState({
                                currency:currency,
                                INR:response.data.rates.INR,
                                USD:response.data.rates.USD,
                            })
            })
            .catch(function (error) {
                Alert.fire('Oops...', 'Something went wrong!', 'error');
            });      
        }
    }

    render() {
        console.log()
        return (
            <>
              <Header/>
                <div className="row float-right">
                    <div className="col-sm-12">
                        <div className="float-right">
                            <label className="control-label" htmlFor="selectbasic">Currency :</label>
                            <select id="selectcurreny" name="selectcurreny" onChange={(e)=>this.onCurrencyChange(e)} value={this.state.currency}>
                                <option value="INR">INR</option>
                                <option value="USD">USD</option>
                            </select>
                        </div>
                    </div>
                </div>
              <div className="row text-right cart">
                  {this.state.products.map((products,index) => {
                      return (
                        <div className="col-md-3 col-sm-6" key={index}>
                            <div className="product-grid">
                                <div className="product-image">
                                        <img className="pic-1" alt="" src={products.Imageview1}/>
                                        <img className="pic-2" alt="" src={products.Imageview2}/>
                                    <span className="product-new-label">Sale</span>
                                </div>
                                <div className="product-content">
                                    <h3 className="title">{products.name}</h3>
                                     <div className="price">{this.state.currency==="INR"?`₹${products.price}`:`$${(products.price/this.state.INR).toFixed(2)}`}</div>
                                </div>
                            </div>
                        </div> 
                      )
                  })} 
              </div>
            </>
        )
    }
}

