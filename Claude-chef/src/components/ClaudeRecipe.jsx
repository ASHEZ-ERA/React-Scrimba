import ReactMarkdown from "react-markdown"
export default function Claude(props) {
 

  return (
    <section>
      <ReactMarkdown>  {props.recipe}</ReactMarkdown>
    </section>
  );
}
