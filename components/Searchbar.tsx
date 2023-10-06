"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import  qs from "query-string";
import useDebounce from "@/hooks/useDebounce";

const Searchbar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const categoryId = searchParams.get("categoryId");
  const name = searchParams.get("name");

  const [value, setValue] = useState(name || "");
  const debouncedValue = useDebounce(value, 500);
  const onChangeHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
        name: debouncedValue,
        categoryId,
    }

    const url = qs.stringifyUrl({
        url: window.location.href,
        query,
    }, {skipEmptyString: true, skipNull: true})

    router.push(url);
  }, [debouncedValue, router, categoryId]);

  return (
    <div className="relative">
      <div className="space-y-8">
        <Search className="absolute w-4 h-4 top-3 left-3 text-muted-foreground" />
        <Input
          placeholder="Search..."
          className="pl-12 bg-primary/10"
          onChange={(e) => onChangeHandler(e)}
        />
      </div>
    </div>
  );
};

export default Searchbar;

