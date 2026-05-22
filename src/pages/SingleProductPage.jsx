import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

export default function SingleProductPage() {

    const [product, setProduct] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()
    const api_url = `https://fakestoreapi.com/products/${id}`


    useEffect(() => {
        fetch(api_url)
        .then((res) => res.json())
        .then((data) =>
            setProduct(data)
            )
        .catch((error) =>
        navigate('/not_found'))
    }, [])
    

    return(
        <>
        <main>       
            <div className="container m-4">
                <div className="card w-50 mx-auto p-0" key={product.id}>
                    <div className="bg-light text-center mb-3">
                        <img
                            className="card-img-top w-25 my-4"
                            src={product.image}
                            alt="Card image cap"
                        />
                </div>
                <div className="card-body">
                    <h4 className="fs-6 mb-5">{product.category}</h4>
                    <h5 className="card-title mb-3 fs-5">{product.title}</h5>
                    <p className="card-text fs-6">{product.description}</p>
                </div>
                <div className="d-flex justify-content-between m-4">
                    <h4 className="price">{product.price} €</h4>
                    <button type="button" className="btn btn-primary py-1 px-3"><strong>+</strong></button>
                </div>
                </div>
            </div>
        </main>
        </>
    )
}