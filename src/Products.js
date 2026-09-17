import iphone from "./iphone.png"

function Products() {
    return(
        <div className="products">
            <div className="card_product">
                
                <div className="card_top">
                    <div className="card_image">
                        <img src={iphone} alt="" />

                    </div>
                    
                </div>

                <div className="card_bottom">
                    <div className="card_title">
                        Iphone 17 PM
                    </div>

                    <div className="card_desc">
                        Iphone 17, в темно-синем цвете,не удивляйтесь тому что он на продаже сайте гитхаба
                    </div>

                    <div className="card_price">
                        1500$
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Products