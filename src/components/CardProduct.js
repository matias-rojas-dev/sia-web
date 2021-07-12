import React from 'react'

export const CardProduct = ({ data }) => {

    return (
        <div className="img-card-product">
            <img src={data.imgUrl} />
            <p>{data.name}</p>
            <p><span>{data.price}</span></p>
        </div>
    )
}
