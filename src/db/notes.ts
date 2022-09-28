export interface Note {
  id: number;
  title: string;
  date: string;
  category: string;
  isArchive:boolean
  content: string;
}

export let mockData: Note[] = [
  {
    id: 1,
    title: "todo1",
    date: "27/09/22",
    category: "task",
    content: "",
    isArchive:true
  },
  {
    id: 2,
    title: "todo2",
    date: "27/09/22",
    category: "idea",
    content: "",
    isArchive:true
  },
  {
    id: 3,
    title: "todo3",
    date: "27/09/22",
    category: "task",
    content: "",
    isArchive:false
  },
  {
    id: 4,
    title: "todo4",
    date: "27/09/22",
    category: "task",
    content: "",
    isArchive:false
  },
  {
    id: 5,
    title: "todo5",
    date: "27/09/22",
    category: "task",
    content: "",
    isArchive:false
  },
  {
    id: 6,
    title: "todo6",
    date: "27/09/22",
    category: "task",
    content: "",
    isArchive:false
  },
  {
    id: 7,
    title: "todo7",
    date: "27/09/22",
    category: "task",
    content: "",
    isArchive:false
  }
];
