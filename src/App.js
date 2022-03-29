import React, { useState } from 'react';
import Result from './Components/Result';
import Search from './Components/Search';

function App() {

  const [search, setSearch] = useState({
    category : "people",
    id : "1",
  });


  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <Result path="/:category/:id" search={search}/>
    </div>
  );
}

export default App;
