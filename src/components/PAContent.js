import RyrRichText from "./RyrRichText"
import {Figure} from "./Figure"

export const PAContent = ({title, short_explanation, Content}) => {
    return (
    <div>
      <h1 className='mb-2'>{title}</h1>
      <RyrRichText className='mb-2' text={short_explanation}/>
      {Content.map(co => 
        <>
          {co.__component === 'procedural-article-contents.textdetail' && 
            <>
              <h1 className='mb-1'>{co.title}</h1>
              <RyrRichText className='mb-2' text={co.content}/>
            </>
          }
          {co.__Component === 'procedural-article-contents.figure-content' && 
            <>
              <h1 className='mb-1'>{co.title}</h1>
              <Figure data={co.figure}/>
            </>
          }
        </>
      )}
    </div>
    )
  }