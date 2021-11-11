import { useEffect, useState } from "react"
import { ArticlePopover } from "./ArticlePopover"
import { OAContent } from "./OAContent"
import axios from 'axios'
import { PAContent } from '../components/PAContent'

const strapiUrl = 'https://ryr-cms.herokuapp.com/'


export const ArticleLink = ({text, link}) => {
  const [article, setArticle] = useState({})
  const [showArticle, setShowArticle] = useState(false)

  const linkClicked = async () => {
    const newarticle = await fetchArticle()
    console.log(JSON.stringify(newarticle))
    if(newarticle && newarticle.id !== null) {
      setArticle(newarticle)
      setShowArticle(true)
    }
  }

  const fetchArticle = async () => {
    const responsePA = await axios.get(`${strapiUrl}articles?UID=${link}`)
    if (responsePA && responsePA.data) {
      console.log(JSON.stringify(responsePA.data))
      const article = responsePA.data[0]
      console.log(article)
      return article
    }

    const responseOA = await axios.get(`${strapiUrl}offense-articles?UID=${link}`)
    if (responseOA && responseOA.data) {
      console.log(JSON.stringify(responseOA.data))
      const article = responseOA.data[0]
      console.log(article)
      return article
    }
  }

  const closeArticle = () => {
    setShowArticle(false);
  }

  return (<>
    <button onClick={() => linkClicked() } className='text-green-800 hover:text-green-300'>{text}</button>
    {(showArticle && article) && <ArticlePopover onClose={closeArticle}>
      {article.objective_offense && 
        <OAContent {...article}/>
      }
      {!article.objective_offense && 
        <PAContent {...article}/>
      }
    </ArticlePopover>}
    </>
  )
}