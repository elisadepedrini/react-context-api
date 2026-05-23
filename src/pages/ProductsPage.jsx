import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useBudget } from "../contexts/BudgetContext";

export default function ProductsPage() {
  const api_url = "https://fakestoreapi.com/products";
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(api_url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);


    const {budget} = useBudget()
    console.log(budget);
    
    const filteredProducts = budget ? products.filter((product) => product.price <= 30) : products
        

  return (
    <>


      <main>
        <div className="container m-4 row">
          
          {filteredProducts.map((product) => (           
            <div className="card col-4 p-0" key={product.id}>
                <div className="bg-light text-center mb-3">
                    <img
                        className="card-img-top w-25 my-4"
                        src={product.image}
                        alt="Card image cap"
                    />
              </div>
              <div className="card-body">
                <h4 className="fs-6 mb-5">{product.category.toUpperCase()}</h4>
                <h5 className="card-title mb-3 fs-5">{product.title}</h5>
                <p className="card-text fs-6">{product.description}</p>
              </div>
              <div className="d-flex justify-content-between m-4">
                <h4 className="price">{product.price} €</h4>
                <button type="button" className="btn btn-primary py-1 px-3"><strong>+</strong></button>
              </div>

              <Link to={`/products/${product.id}`} className="p-2">View More</Link>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
