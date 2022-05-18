import React from "react";
import useFetch from "../../hooks/useFetch/useFetch";

export default function useCategory() {
  const { setData } = useFetch(
    //artık verileri custom hook ile çağırıyoruz
    "https://fakestoreapi.com/products/"
  );

  const handlePressMen = async (e) => {
    const id = e.target.value;
    //console.log(id);
    //if (id === "men") {
    const { data: responseData } = await axios.get(
      "https://fakestoreapi.com/products/category/men's clothing"
    );
    console.log(responseData);
    setData(responseData);
    //}
  };
  const handlePressJew = async (e) => {
    const id = e.target.value;
    //console.log(id);
    //if (id === "men") {
    const { data: responseData } = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );
    console.log(responseData);
    setData(responseData);
    //}
  };
  const handlePressWomen = async (e) => {
    const id = e.target.value;
    //console.log(id);
    //if (id === "men") {
    const { data: responseData } = await axios.get(
      "https://fakestoreapi.com/products/category/women's clothing"
    );
    console.log(responseData);
    setData(responseData);
    //}
  };
  const handlePresselectronics = async () => {
    const { data: responseData } = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    console.log(responseData);
    setData(responseData);
  };
  return;
  {
    handlePressMen, handlePressJew, handlePressWomen, handlePresselectronics;
  }
}
