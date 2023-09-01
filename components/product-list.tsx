import {productService} from "@/service/product-service";
import {ProductItem} from "./product-item";
import {ProductType} from "@/types/product";

type ProductListProps = {};
export const ProductList = async ({}: ProductListProps) => {
    const {products} = await productService.getAll();

    return (
        <div className="flex justify-start flex-wrap gap-3">
            {products.map((item: ProductType) => (
                <ProductItem key={item._id} item={item}/>
            ))}
        </div>
    );
};
