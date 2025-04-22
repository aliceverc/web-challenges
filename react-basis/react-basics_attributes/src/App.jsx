import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Gävle goat</h2>
      <label htmlFor="input">Article</label>
      <input id="input">Write something:</input>
      <br></br>
      <br></br>
      <a
        className="article__link"
        href="https://en.wikipedia.org/wiki/G%C3%A4vle_goat"
      >
        Go to the Wikipedia article
      </a>
      <br></br>
      <br></br>
    </article>
  );
}
