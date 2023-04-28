import React from "react";
import Terms from "./Terms";
import Footer from "./Footer";
import emojipedia from "../emojipedia";


function App() {
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className="dictionary">
        {emojipedia.map(createTerm)}
      </dl>
      <Footer />
    </div>
  );
}

function createTerm(info){
  return <Terms 
            key={info.id}
            emoji={info.emoji}
            name={info.name}
            meaning={info.meaning}
          />;
}

export default App;
