import iphone from "./product.png";

function Products() {
  const phones = [
    {
      title: "iPhone 15 Pro Max",
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80",
      description:
        "Титановый корпус, камера 48 МП, чип A17 Pro. Самый мощный iPhone.",
      price: "129 990 ₽",
    },
    {
      title: "Samsung Galaxy S24 Ultra",
      image:
        "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80",
      description:
        "Камера 200 МП, S Pen в комплекте, AI-функции. Флагман Android.",
      price: "119 990 ₽",
    },
    {
      title: "Google Pixel 8 Pro",
      image:
        "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80",
      description: "Чистый Android, лучшая камера с AI, 7 лет обновлений.",
      price: "89 990 ₽",
    },
    {
      title: "Xiaomi 14 Pro",
      image:
        "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80",
      description: "Камера Leica, Snapdragon 8 Gen 3, зарядка 120 Вт.",
      price: "79 990 ₽",
    },
    {
      title: "OnePlus 12",
      image:
        "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80",
      description:
        "Экран 2K 120Hz, быстрая зарядка 100 Вт, топовая производительность.",
      price: "69 990 ₽",
    },
    {
      title: "Huawei P60 Pro",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80",
      description: "Камера XMAGE, уникальный дизайн, премиальные материалы.",
      price: "84 990 ₽",
    },
  ];
  return (
    <div className="products">
      {phones.map((item) => {
        console.log(item.title1);
        return (
          <div class="card_product1">
            <div class="card_top1">
              <div class="card_image1">
                <img
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"
                  alt="Наушники"
                />
              </div>
            </div>

            <div class="card_bottom1">
              <div class="card_badges1">
                <span class="badge3">Хит</span>
                <span class="badge1">Электроника</span>
                <span class="badge2">Худшее по отзывам</span>
              </div>

              <h2 class="card_title1">Средние беспроводные наушники
                {item.title1}
              </h2>

              <div class="card_rating1">
                <span class="stars1">★★</span>
                <span class="reviews1">(101 отзывов👎)</span>
              </div>

              <p class="card_desc1">
                Погрузитесь в мир шакального звука и шумов.......
              </p>

              <div class="card_price1">
                <span class="old-price1">190 000 ₽</span>
                <span class="new-price1">90 990 ₽</span>
              </div>

              <button class="card_button1">Добавить в корзину </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;

{
  /* <div className="card_product">
                
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
                
            </div> */
}
