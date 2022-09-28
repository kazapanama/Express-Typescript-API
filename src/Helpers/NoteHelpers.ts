import { Note } from "../db/notes";

export function getSummaryInfo(allNotes: Note[]) {
    //get list of unique categories
    let listOfCategories = Array.from(
      new Set(allNotes.map((item) => item.category))
    );
  
    //mock for return object
    let categoriesTree:any  = {};
  
    //filling mock with categories, and setting initial values as 0
    listOfCategories.forEach((category) => {
      categoriesTree[category] = {
        active: 0,
        archive: 0,
      };
    });
  
    //filling mock with data
    allNotes.forEach((item) => {
      categoriesTree[item.category][!item.isArchive ? "active" : "archive"] += 1;
    });
    return categoriesTree;
  }