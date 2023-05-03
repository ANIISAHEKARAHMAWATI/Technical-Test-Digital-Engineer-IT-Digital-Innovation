import React, { useState } from "react";
import './App.css';

function App() {

  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const [reversedNumber, setReversedNumber] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;
    // Memastikan input hanya berisi angka bulat dan angka awal antara 1 hingga 9 tidak boleh menjadi 0
    if (/^[1-9]\d*|^$/.test(input)) {
      setNumber(input);
    }
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Mengubah angka menjadi string
   const numberToString = number.toString();

   // Menghilangkan tanda desimal dari angka
   const numberWithoutDecimal = numberToString.replace(/[.,]/g, '');

    // Membagi string angka menjadi array karakter
    const splitNumber = numberWithoutDecimal.split("");

    // Membalikkan urutan karakter dalam array
    const reverseSplitedNumber = splitNumber.reverse();

    // Menggabungkan kembali karakter-karakter dalam array menjadi string
    const joinSplitedNumber = reverseSplitedNumber.join("");

    // Mengubah string kembali menjadi angka
    const reversedNumber = parseInt(joinSplitedNumber);

    // Menghitung selisih antara angka asli dan angka yang telah dibalik
    const difference = Math.abs(parseInt(numberWithoutDecimal) - reversedNumber);

    // Mengupdate state reversedNumber dan result
    setReversedNumber(reversedNumber);
    setResult(difference);

  };

  return (

    <div class="container">
      <div class="card">
        <div class="title">
          <h1>App</h1>
        </div>
        <div class="content">
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label for="number">Number:</label>
              <input type="text" id="number" value={number} onChange={handleChange} />
            </div>
            <div class="form-group">
              <button type="submit">Submit</button>
            </div>
          </form>
          {result !== "" && (
            <div class="result">
              <p>The reversed Number is: {reversedNumber}</p>
              <p>The difference is: {result}</p>
            </div>
          )}
        </div>
      </div>
    </div>

  );
}

export default App;
