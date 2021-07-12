import React from 'react'
import DATA from '../utils/util'
import { CardProduct } from './CardProduct';

const Featured = () => {
    const dataInfo = DATA;
    const [item] = dataInfo;
    console.log(item)
    const { id, items, title } = item;
    console.log(id, items, title)
    return (
        <div className="info-container">
            <div className="info-title">
                <h2>Nuestros productos en <span>oferta</span></h2>
            </div>
            <div className="info-section-container">
                <div className="info-img-container-featured">
                    {
                        items.map(card => (
                            <CardProduct key={card} data={card} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Featured;