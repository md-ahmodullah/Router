import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

export default function Home() {
  const categories = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <Banner />
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your taste."
        }
      />
      {/* categories tab */}
      <Categories />
      {/* nested dynamic component */}
    </div>
  );
}
