import React, { useState, useEffect } from "react";
import Galeria from "./components/Gallery/Galeria.jsx";
import Header from "./components/Header/Header.jsx";
import Notes from "./components/Notes/Notes.jsx";

import "./styles/index.css";

const App = () => {
  const [input, setInput] = useState("");
  const [dados, setDados] = useState(null);
  const [pages, setPages] = useState(1);

  // get API
  useEffect(() => {
    const getImages = async () => {
      let url = `https://pixabay.com/api/?key=27676150-1af88998807daeae995cefd65&q=${input}&page=${pages}&per_page=50`;
      const response = await fetch(url);
      const toJson = await response.json();
      // atualizando o estado, para um obj data
      setDados(toJson);
    };
    getImages();
  }, [pages, input]);

  return (
    <>
      <Header
        input={
          <input
            type="text"
            placeholder="Search..."
            title="Search"
            className="search"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
        }
      />

      {dados ? <Galeria dados={dados} /> : <Notes dados={dados} />}

      <div className="inline-btns">
        {pages > 1 ? (
          <button onClick={() => setPages((anterior) => anterior - 1)}>
            Return Page {pages - 1}
          </button>
        ) : null}

        <button onClick={() => setPages((anterior) => anterior + 1)}>
          Next Page {pages + 1}
        </button>
      </div>
    </>
  );
};
export default App;
