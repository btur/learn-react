import React from 'react'
import { tupleTypeAnnotation } from '@babel/types';

class ProductList extends React.Component {
  constructor() {
    super();
    this.state = {
      keyword: '',
      check: false,

      products: [
        {
          name: 'Buku Tulis Shincan',
          price: 50000,
          discount: 24,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/1/22/3006150/3006150_5157bfee-0568-43aa-93a6-251b69a5f715.jpg',
          rating: 3.7,
          seller: 'Toko Serba Ada',
          location: 'Jakarta',
        },
        {
          name: 'Buku Menggambar',
          price: 90000,
          discount: 14,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/18/399007/399007_1cdac036-55b9-45f7-9907-420e6f74bff8_566_921.jpg',
          rating: 4.7,
          seller: 'Toko Hari',
          location: 'Tangerang',
        },
        {
          name: 'Sepeda Balap',
          price: 850000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/20/0/0_e915650a-3421-4ffe-bd06-da971f17e8a9_576_432.jpg',
          rating: 5.1,
          seller: 'Polycom',
          location: 'Bekasi',
        },
        {
          name: 'Sepeda Balap',
          price: 850000,
          discount: 0,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2018/4/20/0/0_e915650a-3421-4ffe-bd06-da971f17e8a9_576_432.jpg',
          rating: 0,
          seller: 'Polycom',
          location: 'Bekasi',
        },
        {
          name: 'Buku Menggambar',
          price: 90000,
          discount: 14,
          image: 'https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/18/399007/399007_1cdac036-55b9-45f7-9907-420e6f74bff8_566_921.jpg',
          rating: 0,
          seller: 'Toko Hari',
          location: 'Tangerang',
        },
      ]
    };
  }

  drawStar = (rating) => {
    //mengubah angka desiman ke bilangan bulat
    const ratingNumber = Math.floor(rating);

    // penampung jsx of stars
    const stars = [];

    for (let i = 0; i < ratingNumber; i++) {
      stars.push(<img width="25" src="https://image.flaticon.com/icons/svg/148/148841.svg" />)
    }
    return stars;
  }

  onKeywordChange = e => {
    this.setState({ keyword: e.target.value })
  }

  render() {
    const { products } = this.state;

    const ratingProduct = products.filter(product => {
      if (this.state.check === false) {
        return true;
      } else {
        if (product.rating > 0 ) {
          return true;
        }
        else {
          return false;
        }
      }
    
    });

    const filteredProduct = ratingProduct.filter(product => {
      if (product.name.toLowerCase().includes(this.state.keyword.toLowerCase())) {
        return true;
      } else {
        return false;
      }
    });
  

    return (
      <div class="container" style={{ paddingTop: 20 }}>

        <div className="row" style={{ marginBottom: 20 }}>
          <div className="input-group col-md-6">
            <input 
              type="text" 
              class="form-control" 
              placeholder="Search here..." 
              value={this.state.keyword}
              onChange={this.onKeywordChange}
              />
          </div>
          <div className="input-group cold-mid-12">
            <div class="checkbox">
              <label>
                <input 
                  type="checkbox" 
                  checked={this.state.check}
                  onChange={(e) => {this.setState({check: e.target.checked})}}
                />
              </label>
              Show products with rating only
            </div>

          </div>
        </div>

        <div className="row">

          {filteredProduct.map(product => {
            return (
              <div className="col-md-4 col-xs-12">
                <div class="card" style={{ marginBottom: 10 }}>
                  <img src={product.image} class="card-img-top" alt="product" />
                  <div className="card-body">
                    <h5 clasName="card-title">{product.name}</h5>
                    <p className="card-text" style={{ marginBottom: 0 }}>
                      <span>Rp {product.price - product.discount / 100 * product.price}</span>
                      {product.discount > 0 && <del style={{ color: 'red', fontSize: '14px', marginleft: '5px' }}>Rp {product.price}</del>}
                    </p>
                    <div style={{ height: '24px', marginBottom: '10px' }}>
                      {product.rating > 0
                        ?
                        this.drawStar(product.rating)
                        :
                        <i style={{ fontSize: '12px' }}>belum ada rating</i>
                      }
                    </div>
                    <b className="card-text">{product.rating}</b>
                    <div className="card-tex">{product.seller}</div>

                  </div>
                </div>
              </div>
            )
          })}

        </div>
        <div className="row">
          copyright 2018
        </div>
      </div>
    );
  }
}

export default ProductList;
