import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProdukList = () => {
  const [produk, setProduk] = useState([]);

  useEffect(() => {
    getProduk();
  }, []);
  const getProduk = async () => {
    const response = await axios.get("http://localhost:5000/produk");
    setProduk(response.data);
    console.log(response.data);
  };

  const deleteProduk = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/produk/${id}`);
      getProduk();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-1 is-centered">
      <div className="column is-half">
        <div className="is-fullwidth" style={{ display: "flex", justifyContent: "center" }}>
          <img src="/pijarcamp.svg" alt="" />
        </div>
        <div className="columns is-centered pt-2">
          <h1 className="is-size-4 has-text-weight-semibold">List Data Produk</h1>
        </div>
        <Link to={`add`} className="button is-success">
          Add New Produk
        </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama Produk</th>
              <th>Keterangan</th>
              <th>Harga</th>
              <th>Jumlah</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {produk.map((prod, index) => (
              <tr key={prod.id}>
                <td>{index + 1}</td>
                <td>{prod.nama_produk}</td>
                <td>{prod.keterangan}</td>
                <td>Rp.{prod.harga}</td>
                <td>{prod.jumlah}</td>
                <td>
                  <Link to={`edit/${prod.id}`} className="button is-small is-fullwidth is-info mb-2">
                    Edit <i className="fa-solid fa-pen-to-square ml-1"></i>
                  </Link>
                  <button
                    onClick={() => deleteProduk(prod.id)}
                    className="button is-small is-fullwidth is-danger"
                  >
                    Delete <i className="fa-solid fa-trash-can ml-1"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProdukList;
