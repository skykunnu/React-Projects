import React, { useEffect } from "react";
import { fetchProducts } from "./slice";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
function App() {
  const dispatch = useDispatch();
  const items = useSelector((state) => {
    return state.products;
  });
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  console.log(items);

  function trimName(input) {
    return input.length > 40 ? input.slice(0, 41)+"..." : input;
  }
 

  return (
    <>
      <div className="flex flex-wrap gap-4 justify-evenly">
        {items.length > 0 &&
          items.map((item) => {
            return (
              <div key={item.id} className="w-[23%]">
               <Link to={`/product/${item.id}`}> <img
                  className="h-40 w-full object-contain"
                  src={item.image}
                  alt=""
                /></Link>
                <h3>{trimName(item.title)}</h3>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default App;
