import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import ChakraUIRenderer from "chakra-ui-markdown-renderer";

export default function Content({ content }: { content: string }) {
  return (
    <ReactMarkdown
      components={ChakraUIRenderer({
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter language={match[1]} PreTag="div" {...props}>
              {String(children).replace(/\n$/, "")}{" "}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
      })}
    >
      {content}
    </ReactMarkdown>
  );
}
