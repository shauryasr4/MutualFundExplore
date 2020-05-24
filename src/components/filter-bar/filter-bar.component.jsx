import React from "react";
import { Label, Input, ButtonGroup, Button } from "reactstrap";

import "./filter-bar.style.css";

export const FilterBar = (props) => {
    
  let {
    categories = [],
    types = [],
    plans = [],
    selectionState,
    selectionMethods,
  } = props;

  let {
    selectedType,
    selectedCategory,
    selectedPlan,
    selectedSortBy,
    searchKeyword,
  } = selectionState;

  let {
    setCategory,
    setType,
    setPlan,
    setSortBy,
    setSearchKeyword,
  } = selectionMethods;

  function populateDropdown(values) {
    return values.map((value, index) => (
      <option key={index} value={value}>
        {value}
      </option>
    ));
  }

  function selectDropdown(event) {
    switch (event.target.name) {
      case "category":
        setCategory(event.target.value);
        break;

      case "type":
        setType(event.target.value);
        break;

      case "plan":
        setPlan(event.target.value);
        break;

      default:
        break;
    }
  }

  return (
    <div className="filters-container">
      <div className="search-bar-row mb-5">
        <Label className="filter-label">Search</Label>
        <Input
          className="col-8"
          type="text"
          name="search"
          placeholder="Enter name to search..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      <div className="filters-row">
        <div className="col-3">
          <Label className="filter-label">Category</Label>
          <Input
            type="select"
            name="category"
            value={selectedCategory}
            onChange={selectDropdown}
          >
            {populateDropdown(categories)}
          </Input>
        </div>
        <div className="col-3">
          <Label className="filter-label">Types</Label>
          <Input
            type="select"
            name="type"
            value={selectedType}
            onChange={selectDropdown}
          >
            {populateDropdown(types)}
          </Input>
        </div>
        <div className="col-3">
          <Label className="filter-label">Plan</Label>
          <Input
            type="select"
            name="plan"
            value={selectedPlan}
            onChange={selectDropdown}
          >
            {populateDropdown(plans)}
          </Input>
        </div>
        <div className="col-3 sort-container">
          <h5 className="filter-label">Sort By</h5>
          <ButtonGroup>
            <Button
              color={selectedSortBy === "1Y" ? "primary" : ""}
              onClick={() => setSortBy("1Y")}
            >
              1Y
            </Button>
            <Button
              color={selectedSortBy === "3Y" ? "primary" : ""}
              onClick={() => setSortBy("3Y")}
            >
              3Y
            </Button>
            <Button
              color={selectedSortBy === "name" ? "primary" : ""}
              onClick={() => setSortBy("name")}
            >
              NAME
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};
