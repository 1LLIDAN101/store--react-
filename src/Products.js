import iphone from "./product.png"

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
                        zapret
                    </div>

                    <div className="card_desc">
                        JailBreak for DISCORD
                    </div>

                    <div className="card_price">
                          $free
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default Products