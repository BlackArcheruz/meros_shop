import './loading.css'
import loading from './loading.svg'

const Loading = ()=>{
  return (
    <div className="loading-content">
      <img src={loading} className="loading" alt="loading"/>
    </div>
  )
}

export default Loading;
