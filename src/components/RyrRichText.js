import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArticleLink } from './ArticleLink'

const RyrRichText = ({text, ...props}) => {
  return (
  <ReactMarkdown
    {...props}
    children={text}
    remarkPlugins={[remarkGfm]}
    components={{
      a: ({node, ...props}) => <ArticleLink link={props.href} text={props.children[0]} />
    }}
  />
  )
}

export default RyrRichText