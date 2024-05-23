import React, { useState, useEffect } from "react";
import "../Shop/Shop.css";
import ShopList from "../../components/ShopElement/ShopList";
import PropagateLoader from "react-spinners/PropagateLoader";

const Shop = () => {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState(null);
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); 
        try {
        let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${brand}`;
        if (type) {
          url += `&product_type=${type}`;
        }
        const response = await fetch(url);
        const data = await response.json();
        setAllData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(true);
      }
    };

    fetchData();
  }, [brand, type]);

  const handleTagClick = (tag) => {
    setType(tag);
  };

  return (
    <div style={{ height: "100%" }}>
      <div className="shop-all w-90" style={{ width: loading ? '100%' : '50%' }}>
        <div className="shop-filter">
          <div className="brand-list">
            <p className="brand-title">Brands List</p>
            <ul className="brand-items">
              <li onClick={() => setBrand('almay')} className={brand === 'almay' ? 'active' : ''}>almay</li>
              <li onClick={() => setBrand('maybelline')} className={brand === 'maybelline' ? 'active' : ''}>maybelline</li>
              <li onClick={() => setBrand('loreal')} className={brand === 'loreal' ? 'active' : ''}>loreal</li>
              <li onClick={() => setBrand('covergirl')} className={brand === 'covergirl' ? 'active' : ''}>covergirl</li>
              <li onClick={() => setBrand('nyx')} className={brand === 'nyx' ? 'active' : ''}>nyx</li>
            </ul>
          </div>
          <div className="tag-list brand-list">
            <p className="tag-title brand-title">Tags List</p>
            <ul className="tag-items brand-items">
              <li onClick={() => handleTagClick('Blush')} className={type === 'Blush' ? 'active' : ''}>Blush</li>
              <li onClick={() => handleTagClick('Bronzer')} className={type === 'Bronzer' ? 'active' : ''}>Bronzer</li>
              <li onClick={() => handleTagClick('Eyeshadow')} className={type === 'Eyeshadow' ? 'active' : ''}>Eyeshadow</li>
              <li onClick={() => handleTagClick('Lipstick')} className={type === 'Lipstick' ? 'active' : ''}>Lipstick</li>
              <li onClick={() => handleTagClick('Mascara')} className={type === 'Mascara' ? 'active' : ''}>Mascara</li>
            </ul>
          </div>
        </div>
        {loading ? (
          <div style={{ position: 'absolute', top: '50%', left: '60%' }}>
            <PropagateLoader
              color='#592B2A'
              loading={loading}
              size={30}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        ) : (
            allData.length >= 0 ? (
              <div className="shop-element">
                <ShopList data={allData} />
              </div>
            ) : (
              <p className='empty-wishlist font-cormor'>Not Found</p>
            )
          )}
      </div>
      {console.log(allData)}
    </div>
  );
};

export default Shop;
