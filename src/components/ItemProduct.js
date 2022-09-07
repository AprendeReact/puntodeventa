import React from 'react'
export const ItemProduct = ({ id_product, title_product, url_image,addItemCart }) => {

    
    return (
        <div>
            <div className="card" onClick={(e) => addItemCart(id_product,title_product)}>
                <img src={url_image} className="card-img-top" alt="" />
                <div className="card-body">
                    <p className="card-text">{title_product}</p>
                </div>
            </div>
        </div>
    )
}
