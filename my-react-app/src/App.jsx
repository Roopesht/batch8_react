import ProductCard from './product.jsx'

function App() {
  return (
    <>
      <section id="center">
        <p>This is my app</p>

        <div style={{ display: 'flex', gap: '5px' }}>
          <ProductCard
            title="Paan Corner"
            price={19.99}
            image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-12/paan-corner_web.png"
          />

          <ProductCard
            title="Snacks"
            price={29.99}
            image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2022-11/Slice-5_4.png"
          />

          <ProductCard
            title="Product 3"
            price={39.99}
            image="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=270/layout-engine/2025-11/Slice-7-1_0.png"
          />
        </div>

        <button className="counter">Counter</button>
      </section>

      <div className="ticks"></div>
      <div className="ticks"></div>

      <section id="spacer"></section>
    </>
  )
}

export default App