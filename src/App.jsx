import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Table from './Components/Table';
import Loading from './Components/Loading';

const tableHead = ["id", "title", "brand", "category", "available", "price", "discount", "quantity","AVAILABILITY TO SALE"];

const App = () => {
  const [productData, setProductData] = useState([]);
  const [loading,setLoading]= useState(true)

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/products');
      const data = response.data.products;

      // Extract required fields for the table
      const formattedData = data.map((item) => ({
        id: item.id,
        title: item.title,
        brand: item.brand,
        category: item.category,
        available: item.stock > 0 ? "In Stock" : "Out of Stock",
        price: `₹${item.price}`,
        discount: `${item.discountPercentage}%`,
        quantity: item.stock,
      }));

      setProductData(formattedData);
      setLoading(false)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(productData);
  

  return (
    <div className="p-4">
      {loading ? 
      <Loading/>:
      <Table productData={productData} tableHead={tableHead} />
      }
      
    </div>
  );
};

export default App;
