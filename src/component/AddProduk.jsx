import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddProduk = () => {
  const [nama_produk, setNamaProduk] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [harga, setHarga] = useState("");
  const [jumlah, setJumlah] = useState("");
  const navigate = useNavigate();

  const saveProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/produk", {
        nama_produk,
        keterangan,
        harga,
        jumlah,
      });
      navigate("/");
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
          <h1 className="is-size-4 has-text-weight-semibold">Tambah Data Produk Baru</h1>
        </div>
        <form onSubmit={saveProduk}>
          <div className="field">
            <label className="label">Nama Produk</label>
            <div className="control">
              <input
                type="text"
                value={nama_produk}
                onChange={(e) => setNamaProduk(e.target.value)}
                className="input"
                placeholder="Nama Produk"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Keterangan</label>
            <div className="control">
              <input
                type="text"
                value={keterangan}
                onChange={(e) => setKeterangan(e.target.value)}
                className="input"
                placeholder="Keterangan"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="number"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                className="input"
                placeholder="Harga"
                required
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Jumlah</label>
            <div className="control">
              <input
                type="number"
                value={jumlah}
                onChange={(e) => setJumlah(e.target.value)}
                className="input"
                placeholder="Jumlah"
                required
              />
            </div>
          </div>
          <div className="field mt-5">
            <button type="submit" className="button is-success is-fullwidth py-4">
              Save
            </button>
            <a href="/" className="button is-light is-fullwidth py-4 mt-5">
              Cancel
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduk;
