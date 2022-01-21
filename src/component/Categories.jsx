/** @format */
import { Link } from "react-router-dom";

///////////////// CATEGORIES COMPONENT ////////////////
const Categories = (props) => {
  const categories = props.categories;
  const Category = (props) => {
    return (
      <div className="category">
        <Link to={`/menu/${props.path}`} className="Link">
          <div className="imgContainer">
            <img src={`./image/${props.imgUrl}`} alt="Category" />
          </div>
          <div className="catygoryName">{props.name}</div>
        </Link>
      </div>
    );
  };

  return (
    <div className="categories">
      {categories.map((cat) => {
        return (
          <Category
            key={cat.id}
            name={cat.name}
            imgUrl={cat.imgUrl}
            path={cat.path}
          />
        );
      })}
    </div>
  );
};

export default Categories;
