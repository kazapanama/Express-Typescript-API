// import * as yup from "yup";
import * as yup from "yup";
import { Request, Response, NextFunction } from "express";

export const NoteSchema = yup.object({
  title: yup.string().required("title is required"),
  date: yup.string().required("date is required"),
  category: yup.string().required("category is required"),
  content: yup.string(),
  isArchive: yup.boolean().required("isArchive is required"),
});

export const validateNote =
  (NoteSchema: yup.AnySchema) =>
  async (req: Request, res: Response, next: NextFunction) => {
    const body = req.body;

    try {
      await NoteSchema.validate(body, { abortEarly: false, strict: true });

      return next();
    } catch (e: any) {
      return res.status(400).json(e.errors);
    }
  };
