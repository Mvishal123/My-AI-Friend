import Searchbar from "@/components/Searchbar";
import Categories from "@/components/Categories";
import prismadb from "@/lib/prismaDb";

export default async function Home() {
  const category = await prismadb.category.findMany() 

  
  return (
    <main className="h-full pt-16">
        <Searchbar />
        <Categories data={category}/>
    </main>
  )
}
