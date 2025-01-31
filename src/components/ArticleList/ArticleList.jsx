// const ArticleList = ({ items }) => (
//   <ul>
//     {items.map(({ objectID, url, title }) => (
//       <li key={objectID}>
//         <a href={url} target="_blank" rel="noreferrer noopener">
//           {title}
//         </a>
//       </li>
//     ))}
//   </ul>
// );

import Article from "../Article/Article";

// export default ArticleList;

const ArticleList = ({ articles }) => (
  <ul>
    {articles.map((item) => (
      <Article key={item.objectID} item={item} />
    ))}
  </ul>
);

export default ArticleList;
