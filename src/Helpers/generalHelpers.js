import Data from "../Data/Data.json";

export const calculateAverageValueForList = (listOfValues) => {
  const averageValue = listOfValues
    ? listOfValues.reduce((totalValue, singleValue) => {
        return totalValue + singleValue.value / listOfValues.length;
      }, 0)
    : null;

  return averageValue;
};

export const findSubCategoryOfItems = (category) => {
  const allcategoriesOfAItem = Data.find((item) => {
    return item.category === category;
  });
  return allcategoriesOfAItem.subCategory;
};
