import React, { useState, useEffect } from 'react';
import listFilesAndUrls from "../firebase-code/storage-download";

function ResultDisplay({ result }) {
  const [dishImagesObject, setDishImagesObject] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const imgData = await listFilesAndUrls('img/Dishes');
      const imagesObj = imgData.reduce((acc, image) => {
        let name = image.name.slice(0, -4);
        acc[name] = image.url;
        return acc;
      }, {});
      setDishImagesObject(imagesObj);
    };
    fetchData();
  }, []);

  return (
    <div className={`result-display ${result ? 'show' : ''}`}>
      {result ? (
        <>
          <h1>Success! Dish: {result}</h1>
          <img src={dishImagesObject[result]} alt={result} style={{ maxWidth: '100%' }} />
        </>
      ) : (
        <h1>No matching dish found</h1>
      )}
    </div>
  );
}

export default ResultDisplay;
  