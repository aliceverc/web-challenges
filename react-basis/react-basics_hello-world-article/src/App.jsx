import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
      <p>
        Eos reprehenderit eaque laborum? Eligendi et quia harum asperiores nobis
        nihil, molestias ullam optio doloribus, voluptatibus numquam ad
        exercitationem ea molestiae aliquam?
      </p>
      <button type="button">Click me!</button>
    </article>
  );
}
