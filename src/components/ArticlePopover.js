

export const ArticlePopover = ({children, onClose}) => {
    return (
    <div className='shadow rounded-xl p-4 m-4 absolute -left-3 -right-3 top-20 -bottom-5 bg-white'>
      <button className='hover:bg-green-300' onClick={onClose}>{'<'}</button>
      
     {children}   
    </div>
    )
  }