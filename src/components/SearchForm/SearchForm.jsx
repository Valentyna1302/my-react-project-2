// src/components/SearchForm.jsx

import { useState } from "react";

// export const SearchForm = ({ onSearch }) => {
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     const form = evt.target;
//     const topic = form.elements.topic.value;

//     if (topic.trim() === "") {
//       alert("Please enter search term!");
//       return;
//     }

//     onSearch(topic);
//     form.reset();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="topic" placeholder="Search articles..." />
//       <button>Search</button>
//     </form>
//   );
// };

export const SearchForm = ({ handleSetQuery }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (evt) => {
    evt.preventDefault();

    handleSetQuery(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setValue(e.target.value)}
        value={value}
        type="text"
        name="topic"
        placeholder="Search articles..."
      />
      <button>Search</button>
    </form>
  );
};
