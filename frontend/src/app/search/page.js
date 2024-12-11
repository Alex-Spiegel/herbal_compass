"use client";

import React, { useState } from "react";

function SearchPage() {
  // State-Management mit useState
  const [query, setQuery] = useState(""); // query = aktueller Wert der Suchanfrage
  const [results, setResults] = useState([]); // results = speichert die Ergebnisse der Suche, die vom Server kommen
  const [loading, setLoading] = useState(false); // loading = Indikator, ob Suche noch läuft

  // handelt die Suchanfrage
  async function handleSearch(event) {
    event.preventDefault(); // nämlich dass die Seite beim Absenden des Formulars neu geladen wird
    setLoading(true);

    const response = await fetch(`/api/search?query=${query}`); // fetch-Funktion, Wobei der Wert von query als Param in die URL übergeben wird (zB /api/search?query=lavender)
    const data = await response.json();

    setResults(data.results); // speichere data in results per Setterfunktion
    setLoading(false);
  }

  // Ändern bzw. Anpassen der Suchanfrage
  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  return (
    <div>
      <h1>Search</h1>
      {/* Beib Absenden des Formulars, wird die Searchfunktion aufgerufen */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Enter search term"
        />
        <button type="submit" className="px-4 bg-slate-400 border rounded-xl">
          Search
        </button>
      </form>

      {/* handelt "Loading..."-Anzeige */}
      {loading && <p>Loading...</p>}

      <ul>
        {/* Mappt durch die Ergebnisse und generiert eine Liste */}
        {results.map((result) => {
          return <li key={result.id}>{result.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default SearchPage;
