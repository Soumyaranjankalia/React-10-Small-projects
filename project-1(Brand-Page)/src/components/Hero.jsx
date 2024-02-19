
export default function Hero() {
  return (
    <main className="hero container">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE TEH BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE. YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOE.</p>

            <div className="hero-btn">
                <button>Shop Now</button>
                <button className="secondary-btn">category</button>
            </div>

            <div className="shopping">
                <p>Also Avaliable On</p>

                <div className="brand-icons">
                    <img src="/images/amazon.png" alt="amazon" />
                    <img src="/images/flipkart.png" alt="flipkart" />
                </div>
            </div>
        </div>
        <div className="hero-image">
            <img src="/images/hero-image.png" alt="" />
        </div>
    </main>
  )
}
