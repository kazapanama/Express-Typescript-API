// import * as yup from "yup";
import * as yup from "yup";


export const NewNoteSchema = yup.object({
  title: yup.string().required("title is required"),
  date: yup.string().required("date is required"),
  category: yup.string().required("category is required"),
  content: yup.string(),
  isArchive: yup.boolean().required("isArchive is required"),
});

export const PatchNoteSchema = yup.object({
  title: yup.string(),
  date: yup.string(),
  category: yup.string(),
  content: yup.string(),
  isArchive: yup.boolean(),
});
