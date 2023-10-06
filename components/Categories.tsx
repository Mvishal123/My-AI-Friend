"use client";
import { Category } from "@prisma/client";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import qs from "query-string";
import { cn } from "@/lib/utils";
interface CategoriesProps {
  data: Category[];
}
const Categories = ({ data }: CategoriesProps) => {
  const path = usePathname();
  const searchParams = useSearchParams();
  const categoryId = searchParams.get("categoryId");
  const router = useRouter();

  const onClickHandler = (id: String | undefined) => {
    const query = {
      categoryId: id,
    };

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="w-full overflow-x-auto pt-1">
      <div className="flex space-x-3">
        <button
          className={cn("categoryBtn",  !categoryId ? "bg-primary/30": "")}
          onClick={() => onClickHandler(undefined)}
        >
          Newest
        </button>
        {data.map((category) => (
          <button
            className={cn("categoryBtn", category.id === categoryId ? "bg-primary/30": "")}
            key={category.id}
            onClick={() => onClickHandler(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Categories;
