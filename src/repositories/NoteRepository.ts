import { mockData, Note } from "../db/notes";
import { getSummaryInfo } from "../Helpers/NoteHelpers";

let data: Note[] = mockData;

class NoteRepository {
  public getAll() {
    return data;
  }

  public getOne(id: number) {
    if (!id) {
      throw new Error("no valid id provided");
    }

    const note: Note | undefined = data.find((item) => item.id === id);

    if (!note) {
      throw new Error("Cannot find note with provided id");
    }
    return note;
  }
  public async createOne(note: Note) {
    const { title, category, date, content, isArchive } = note;
    const newNote: Note = {
      id: Date.now(),
      title,
      category,
      date,
      content,
      isArchive,
    };

    data = [...data, newNote];
    return newNote;
  }
  public deleteOne(id: number) {
    const item: Note | undefined = data.find((item) => item.id === id);

    if (!item) {
      return "no item with that id found";
    }

    data = data.filter((item) => item.id !== id);
    return item;
  }

  public updateOne(id: number, body: Note) {
    const { title, content, isArchive, date, category } = body;

    const item: Note | undefined = data.find((item) => item.id === id);
    if (!item) {
      return "cannot find item with that id";
    }
    item.title = title || item.title;
    item.content = content || item.content;
    item.isArchive =
      typeof isArchive !== undefined ? isArchive : item.isArchive;
    item.date = date || item.date;
    item.category = category || item.category;
    return item;
  }

  public getStats() {
    return getSummaryInfo(data);
  }
}

export default new NoteRepository();
