import { useEffect, useState } from 'react'
import axios from 'axios'
import { OAContent } from '../components/OAContent'
import { ArticleCard } from '../components/ArticleCard'
import { PAContent } from '../components/PAContent'

const strapiUrl = 'https://ryr-cms.herokuapp.com/'

const Home = () => {
  
  const [offenseArticles, setOffenseArticles] = useState([])
  const [proceduralArticles, setProceduralArticles] = useState([])

  const [showOA, setShowOA] = useState(true)
  const [showPA, setShowPA] = useState(true)
  const [searchTerm, setSearchterm] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      const responsePA = await axios.get(`${strapiUrl}articles`) //+ searchTerm? `?title=${searchTerm}` : '')
      if (responsePA && responsePA.data) {
        console.log(JSON.stringify(responsePA.data))
        setProceduralArticles(responsePA.data)
      }

      const responseOA = await axios.get(`${strapiUrl}offense-articles`) // + searchTerm? `?title=${searchTerm}` : '')
      if (responseOA && responseOA.data) {
        setOffenseArticles(responseOA.data)
      }
    }
    fetchData()

    return () => {}
  }, [showOA, showPA, searchTerm])

  return (
    <div>
      <h1>RyR Content Preview</h1>
      <button className="btn" onClick={() => setShowOA(!showOA)}>{showOA ? 'Hide Offense Articles' : 'Show Offense Articles'}</button>
      <button className="btn" onClick={() => setShowPA(!showPA)}>{showPA ? 'Hide Procedural Articles' : 'Show Procedural Articles'}</button>
      {/*<input type="text" onChange={(e) => setSearchterm(e.target.value)} value={searchTerm} placeholder="Artikel nach Name filtern"/>*/}
      <hr/>
      {showPA && proceduralArticles.map(article => 
        <ArticleCard key={article.id}>
        <PAContent {...article}/>
        </ArticleCard>  
      )}
      <hr/>
      {showOA && offenseArticles.map(article => 
        <ArticleCard key={article.id}>
          <OAContent {...article}/>
        </ArticleCard>  
      )}
    </div>
  )
}

export default Home
