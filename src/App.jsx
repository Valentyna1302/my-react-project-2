import { useEffect, useState } from "react";
import ArticleList from "./components/ArticleList/ArticleList";
// import { MutatingDots } from "react-loader-spinner";
import { fetchArticles, fetchArticlesWithTopic } from "./articles-api";
import { SearchForm } from "./components/SearchForm/SearchForm";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(0);

  useEffect(() => {
    // axios
    //   .get("https://hn.algolia.com/api/v1/search?query=react")
    //   .then((res) => setArticles(res.data.hits));

    const getData = async () => {
      try {
        setIsLoading(true);
        setIsError(false);
        // const data = await fetchArticles();
        // setArticles(data.hits);
        const { hits } = await fetchArticles(query, page); // або так
        setArticles((prev) => [...prev, ...hits]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    console.log(newQuery);
    setQuery(newQuery);
    setArticles([]);
    setPage(0);
  };

  return (
    <div>
      <SearchForm onSubmit={handleSetQuery} />
      <ArticleList articles={articles} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Something went wrong!</p>}
      <button onClick={() => setPage((prev) => prev + 1)}>Load more</button>
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
