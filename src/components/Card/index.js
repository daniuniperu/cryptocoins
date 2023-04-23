import "./Card.css"
import { Link } from "react-router-dom"

const Card =({props})=>{
    const {symbol, name, id} = props;
    return (
      <div className="card-container">
        <Link to={'/'+id}>
          <div className="card-symbol">
            {symbol.toUpperCase()}
          </div>
          <div className="card-name">
            {name}
          </div>
        </Link>
      </div>
    );
}
export default Card;