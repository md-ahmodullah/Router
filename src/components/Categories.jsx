import { Link } from "react-router-dom";
export default function Categories({ categories }) {
  return (
    <div role="tablist" className="tabs tabs-lifted py-6">
      {categories.map((category) => (
        <Link
          to={`/category/${category.category}`}
          key={category.id}
          role="tab"
          className="tab"
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
}
