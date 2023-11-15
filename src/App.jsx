import { useState } from "react";
import ProdukList from "./component/ProdukList";
import AddProduk from "./component/AddProduk";
import EditProduk from "./component/EditProduk";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProdukList />} />
        <Route path="add" element={<AddProduk />} />
        <Route path="edit/:id" element={<EditProduk />} />
      </Routes>
      <div>
        <footer className="footer">
          <div className="content has-text-centered">
            <p>
              <strong>Crud Produk Web</strong> by <a href="#">Khalid Saifullah</a>. The Crud Produk Web is
              assignment 10 - level 3 of PijarCamp Preclass Test and was created by Khalid. <br /> For more
              details about Khalid visit
              <a href="https://bit.ly/45WE4eb" target="blank">
                {" "}
                khalid-profile <i className="fa-solid fa-globe"></i>
              </a>
              .
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
