import { API_VERSION, BASE_URL } from "../utils/constants";

const urlBuilder = (
  succeedingString,
  baseUrl = BASE_URL,
  apiVersion = API_VERSION
) => {
  return baseUrl + apiVersion + "/" + succeedingString;
};

const getFilterValues = (mutualFundsList) => {
  let fundTypes = [];
  let fundCategories = [];
  let fundPlans = [];

  mutualFundsList.forEach((mutualFund) => {
    const { fund_type, fund_category, plan } = mutualFund;
    if (fund_type && fundTypes.indexOf(fund_type) === -1)
      fundTypes.push(fund_type);
    if (fund_category && fundCategories.indexOf(fund_category) === -1)
      fundCategories.push(fund_category);
    if (plan && fundPlans.indexOf(plan) === -1) fundPlans.push(plan);
  });

  fundTypes.sort();
  fundPlans.sort();
  fundCategories.sort();

  fundCategories.splice(0, 0, "All");
  fundTypes.splice(0, 0, "All");
  fundPlans.splice(0, 0, "All");

  return {
    fundTypes,
    fundCategories,
    fundPlans,
  };
};

const getFilteredResults = (unfilteredList, selectedFilters, searchKeyword) => {
  const { type, plan, category } = selectedFilters;
  let postKeywordFilter = unfilteredList;

  if (searchKeyword && searchKeyword.trim()) {
    postKeywordFilter = unfilteredList.filter(
      (elem) =>
        elem.name.toLowerCase().indexOf(searchKeyword.toLowerCase()) > -1
    );
  }

  if (type === "All" && plan === "All" && category === "All")
    return postKeywordFilter;

  return postKeywordFilter.filter((elem) => {
    if (type === "All" || elem.fund_type === type)
      if (plan === "All" || elem.plan === plan)
        if (category === "All" || elem.fund_category === category) return true;
    return false;
  });
};

const sortList = (unsortedList, sortingAttribute) => {
  return unsortedList.sort((firstElem, secondElem) => {
    if (sortingAttribute === "1Y")
      return secondElem.returns.year_1 - firstElem.returns.year_1;
    else if (sortingAttribute === "3Y")
      return secondElem.returns.year_3 - firstElem.returns.year_3;
    else
      return firstElem.name
        .toLowerCase()
        .localeCompare(secondElem.name.toLowerCase());
  });
};

const getListForDisplay = (
  initialList,
  selectedFilters,
  sortingAttribute,
  searchKeyword
) => {
  return sortList(
    getFilteredResults(initialList, selectedFilters, searchKeyword),
    sortingAttribute
  ).slice(0, 99);
};

export {
  urlBuilder,
  getFilterValues,
  getFilteredResults,
  sortList,
  getListForDisplay,
};
