import { mockData, Note } from "../db/notes";

let data: Note[] = mockData;

class NoteService {
  public getOne(id: number) {
    if (!id) {
      throw new Error("не указан ID");
    }
    const note = data.find((item) => item.id === id);
    return note;
  }

  public createOne(note: Note) {
    //need validation for fields and field types
    note.id = Date.now()
    data = [...data,note]
    return data
  }
}

export default new NoteService();
