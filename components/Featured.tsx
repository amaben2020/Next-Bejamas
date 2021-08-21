import React from 'react';
import style from './../styles/featured.module.scss';

interface Product {
  _id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  numReviews: number;
}

export interface MyProductsArrayInterface extends Array<Product> {}

interface ProductCardProps {
  product: MyProductsArrayInterface;
  key: string;
}
const Featured: React.JSXElementConstructor<ProductCardProps> = ({
  products,
}: any) => {
  const featuredProduct = products.filter(
    (product: { featured: any }): any => product.featured
  );
  console.log(featuredProduct.map((p): any => p.name));
  return (
    <div className={style.featured}>
      <h1> </h1>
      {featuredProduct.map(
        (product: {
          name:
            | boolean
            | React.ReactChild
            | React.ReactFragment
            | React.ReactPortal
            | null
            | undefined;
          image: { formats: { thumbnail: { url: string | undefined } } };
        }) => (
          <>
            <h1>{product.name}</h1>
            <img
              src={product.image.formats.thumbnail.url}
              style={{ width: '100%', height: '50vh' }}
              alt=""
            />
          </>
        )
      )}
    </div>
  );
};

export default Featured;
