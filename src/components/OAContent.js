import RyrRichText from "./RyrRichText"


export const OAContent = ({title, objective_offense, subjective_offenses}) => {
    return (
    <div>
      <h1 className='mb-2'>{title}</h1>
      <RyrRichText className='mb-4' text={objective_offense}/>
      <br/>
      <h2>Subjektive Tatbestände:</h2>
      <ul>
        {subjective_offenses.map(so => 
          <li className='mb-1' key={JSON.stringify(so)}>{so.name}</li>
        )}
      </ul>
    </div>
    )
  }