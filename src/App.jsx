import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
import { MutatingDots } from "react-loader-spinner";
import { fetchArticles, fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./components/SearchForm/SearchForm";
import axios from "axios";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // axios
    //   .get("https://hn.algolia.com/api/v1/search?query=react")
    //   .then((res) => setArticles(res.data.hits));

    const getData = async () => {
      try {
        setIsLoading(true);
        // const data = await fetchArticles();
        // setArticles(data.hits);
        const { hits } = await fetchArticles(); // або так
        setArticles(hits);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div>
      <ul>
        {articles.map((item) => (
          <li key={item.objectID}>
            <a target="_blank" href={item.url}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
    </div>
  );
};

export default App;

// const App = () => {
//   const [articles, setArticles] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(false);

//   useEffect(() => {
//     // useffect Тут будемо виконувати HTTP-запит
//     // 1. Оголошуємо асинхронну функцію
//     async function fetchArticles() {
//       try {
//         // 2.1 Встановлюємо індикатор в true перед запитом
//         setLoading(true);
//         // 2. Використовуємо HTTP-функцію
//         const data = await fetchArticlesWithTopic("react");
//         setArticles(data);
//       } catch (error) {
//         // Тут будемо обробляти помилку
//         // Встановлюємо стан error в true
//         setError(true);
//       } finally {
//         // 2.2 Встановлюємо індикатор в false після запиту
//         setLoading(false);
//       }
//     }

//     // 2. Викликаємо її одразу після оголошення
//     fetchArticles();
//   }, []);

//   const handleSearch = async (topic) => {
//     try {
//       setArticles([]);
//       setError(false);
//       setLoading(true);
//       const data = await fetchArticlesWithTopic(topic);
//       setArticles(data);
//     } catch (error) {
//       setError(true);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <h1>Latest articles</h1>
//       <SearchForm onSearch={handleSearch} />
//       {loading && <MutatingDots />}
//       {error && <p>Whoops...</p>}
//       {articles.length > 0 && <ArticleList items={articles} />}
//     </div>
//   );
// };

// export default App;
