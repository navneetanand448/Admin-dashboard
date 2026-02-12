import {useState,ChangeEvent,FormEvent} from 'react'
import AdminSidebar from '../../Components/Adminsidebar'
const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
function ProductManagement() {
  const [name,setName]=useState("Puma");
  const [price,setPrice]=useState(2000);
  const [photo,setPhoto]=useState(img);
  const [stock,setStock]=useState(14);
    const [nameUpdate,setNameUpdate]=useState(name);
  const [priceUpdate,setPriceUpdate]=useState(price);
  const [photoUpdate,setPhotoUpdate]=useState(photo);
  const [stockUpdate,setStockUpdate]=useState(stock);
  const changeImageHandler=(e)=>{
    const file=e.target.files?.[0];
    const reader=new FileReader();
    if(file){
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setPhotoUpdate(reader.result);
        }
    }
  }
  }
    const submitHandler=(e)=>{
    e.preventDefault();
    setName(nameUpdate);
    setPrice(priceUpdate);
    setStock(stockUpdate);
    setPhoto(photoUpdate);
  }
  return (
    <div className="admin-container">
      <AdminSidebar/>
      <main className="product-management">
<section>
  <strong>ID-asjkbwdkcbwajlv</strong>
  <img src={photo} alt="Product"/>
  <p>{name}</p>
  {stock>0?(
    <span className="green">{stock}Available</span>
  ):(
    <span className="red">Not Available</span>
  )}
  <h3>${price}</h3>
</section>
        <article>
          <form onSubmit={submitHandler}>
            <h2>Manage</h2>
            <div>
              <label>Name</label>
              <input
              required
              type="text"
              placeholder="Name"
              value={nameUpdate}
              onChange={(e)=>setNameUpdate(e.target.value)}
              />
            </div>
            <div>
              <label>Price</label>
              <input
              required
              type="number"
              placeholder="Price"
              value={priceUpdate}
              onChange={(e)=>setPriceUpdate(Number(e.target.value))}
              />
            </div>
            <div>
              <label>Stock</label>
              <input
              required
              type="number"
              placeholder="Stock"
              value={stockUpdate}
              onChange={(e)=>setStockUpdate(Number(e.target.value))}
              />
            </div>
          <div>
              <label>Photo</label>
              <input
              required
              type="file"

              onChange={changeImageHandler}
              />
            </div>
            {photo && <img src={photoUpdate}  alt="New Image"/>}
            <button type="submit">Update</button>
          </form>
        </article>
      </main>
    </div>
  )
}



export default ProductManagement
