import ProductCard from "../components/ProductCard"

class ProductsFeatures {

    constructor(products) {
        this.products = products
    }

    filterByCategory(category) {
        this.products = category ? this.products.filter(product => product.category === category) : this.products
        return this
    }

    filterByRating(rating) {
        this.products = rating ? this.products.filter(product => product.rating.toString().charAt(0) === rating) : this.products
        return this
    }

    filterByPrice(priceFrom , priceTo) {
        this.products = priceFrom ? this.products.filter(product => product.price >= priceFrom) : this.products
        this.products = priceTo ? this.products.filter(product => product.price <= priceTo) : this.products
        return this
    }
    createProductsElement() {
        return this.products.map(product => {
            return (
                <div key={product.id} className="col-12 col-sm-6 col-md-6 col-lg-4" >
                    <ProductCard  {...product} />
                </div>
            )
        })
    }
}

export default ProductsFeatures