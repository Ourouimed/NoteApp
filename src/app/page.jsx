import Header from "@/components/header";
import NoteCard from "@/components/note-card";
export default function Home() {
  const notes = [
    {
      title: "Do Homework",
      description: "Complete math exercises on page 42.",
      created_at: "2025-07-20 - 14:30",
    },
    {
      title: "Buy Groceries",
      description: "Get milk, eggs, and bread from the store.",
      created_at: "2025-07-18 - 10:15",
    },
    {
      title: "Read a Book",
      description: "Finish reading 'Clean Code' by Robert C. Martin.",
      created_at: "2025-07-19 - 08:00",
    },
  ];
  
  return (
    <>
      <Header/>
    <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-2">
        {notes.map(({title , description , created_at})=> <NoteCard title={title} description={description} created_at={created_at} key={title} />)}
    </div>
    </>
    
  );
}



