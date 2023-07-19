import React, { useState } from "react";

// 컨텍스트 객체
const ProductsContext = React.createContext({
  products: [],
  toggleFav: (id) => {},
});

export const ProductsContextProvider = (props) => {
  //products 관리는 useState에서
  const [productsList, setProductsList] = useState([
    {
      id: "p1",
      title: "Red Scarf",
      description: "A pretty red scarf.",
      isFavorite: false,
    },
    {
      id: "p2",
      title: "Blue T-Shirt",
      description: "A pretty blue t-shirt.",
      isFavorite: false,
    },
    {
      id: "p3",
      title: "Green Trousers",
      description: "A pair of lightly green trousers.",
      isFavorite: false,
    },
    {
      id: "p4",
      title: "Orange Hat",
      description: "Street style! An orange hat.",
      isFavorite: false,
    },
  ]);

  const toggleFavotie = (productId) => {
    // setProductsList 호출하여 현재 상태에 기반하여 새로운 값 반환
    setProductsList((currentProductList) => {
      const prodIndex = currentProductList.findIndex((p) => p.id === productId);
      const newFavStatus = !currentProductList[prodIndex].isFavorite;
      const updatedProducts = [...currentProductList];
      updatedProducts[prodIndex] = {
        ...currentProductList[prodIndex],
        isFavorite: newFavStatus,
      };
      return updatedProducts;
    });
  };

  //값으로 객체 전달
  //productsList 상태 업데이트 될 때마다 컴포넌트 재구성되고 provider따르는 모든 자식들도 새로운 값 가짐
  return (
    <ProductsContext.Provider
      value={{ products: productsList, toggleFav: toggleFavotie }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
};

export default ProductsContext;
