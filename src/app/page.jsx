"use client";
import Header from "@/components/header";
import NoteCard from "@/components/note-card";
import { useEffect, useState } from "react";
import { PopUpModal } from "@/components/popup";
import { PopupContext } from "@/contexts/PopupContext";
import AddNoteForm from "@/forms/addNoteForm";
import RemoveNoteForm from "@/forms/removeNoteForm";
import { supabase } from "@/lib/supabaseClient";
import { AuthContext } from "@/contexts/AuthContext";

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

  const [showAddModal, setShowAddModal] = useState(false);
  const [showRemModal, setShowRemModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [noteValues, setNotesValues] = useState({ title: "", description: "" });
  const [userData, setUserData] = useState(null);

  const getUser = async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) console.error(error);
    else setUserData(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleOpenAddNotePopup = () => setShowAddModal(true);
  const handleCloseAddNotePopup = () => {
    setShowAddModal(false);
    setNotesValues({ title: "", description: "" });
  };

  const handleOpenRemovetNotePopup = () => setShowRemModal(true);
  const handleCloseRemoveNotePopup = () => setShowRemModal(false);

  const handleOpenUpdatetNotePopup = () => {
    setShowUpdateModal(true);
    setIsEditing(true);
  };
  const handleCloseUpdateNotePopup = () => {
    setShowUpdateModal(false);
    setIsEditing(false);
    setNotesValues({ title: "", description: "" });
  };


  if (userData === null) {
    return <div className="text-center mt-10">Loading user...</div>;
  }

  return (
    <AuthContext.Provider value={{ userData }}>
      <PopupContext.Provider
        value={{
          handleOpenAddNotePopup,
          handleCloseAddNotePopup,
          handleOpenRemovetNotePopup,
          handleCloseRemoveNotePopup,
          handleOpenUpdatetNotePopup,
          handleCloseUpdateNotePopup,
          noteValues,
          setNotesValues,
        }}
      >
        <Header />
        <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 gap-2">
          {notes.map(({ title, description, created_at }) => (
            <NoteCard title={title} description={description} created_at={created_at} key={title} />
          ))}
        </div>

        {showAddModal && (
          <PopUpModal title="Add Note" onClose={handleCloseAddNotePopup}>
            <AddNoteForm />
          </PopUpModal>
        )}

        {showRemModal && (
          <PopUpModal title="Remove Note" onClose={handleCloseRemoveNotePopup}>
            <RemoveNoteForm />
          </PopUpModal>
        )}

        {showUpdateModal && (
          <PopUpModal title="Update Note" onClose={handleCloseUpdateNotePopup}>
            <AddNoteForm isEditing />
          </PopUpModal>
        )}
      </PopupContext.Provider>
    </AuthContext.Provider>
  );
}
