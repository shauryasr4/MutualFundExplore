import React, { useEffect, useState } from "react";

import { List } from "../components/list/list.component";
import { Loader } from "../components/loader/loader.component";
import { FilterBar } from "../components/filter-bar/filter-bar.component";

import { getMutualFundsList } from "../api/communication-manager";
import { getFilterValues, getListForDisplay } from "../utils/utils";

export const ExplorePage = () => {
  let [isLoading, setIsLoading] = useState(true);
  let [mutualFundsList, setMutualFundsList] = useState([]);
  let [filterValues, setFilterValues] = useState({});
  let [category, setCategory] = useState("All");
  let [type, setType] = useState("All");
  let [plan, setPlan] = useState("All");
  let [sortBy, setSortBy] = useState("name");
  let [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    async function populateData() {
      const response = await getMutualFundsList();
      setMutualFundsList(response);
      setFilterValues(getFilterValues(response));
      setIsLoading(false);
    }

    populateData();
  }, []);

  return (
      isLoading ? <Loader />
        :
        <React.Fragment>
          <FilterBar
            categories={filterValues.fundCategories}
            types={filterValues.fundTypes}
            plans={filterValues.fundPlans}
            selectionMethods={{
              setCategory,
              setType,
              setPlan,
              setSortBy,
              setSearchKeyword,
            }}
            selectionState={{
              selectedCategory: category,
              selectedType: type,
              selectedPlan: plan,
              selectedSortBy: sortBy,
              searchKeyword,
            }}
          />

          <List
            data={getListForDisplay(
              mutualFundsList,
              {
                type,
                plan,
                category,
              },
              sortBy,
              searchKeyword
            )}
          />
        </React.Fragment>
  );
};
