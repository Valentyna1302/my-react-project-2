const Article = ({ item }) => {
  return (
    <li>
      <a target="_blank" href={item.url}>
        {item.title}
      </a>
    </li>
  );
};

export default Article;
