import { CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { PopupContext } from "@/contexts/PopupContext";
export default function RemoveNoteForm (){
  const { handleCloseRemoveNotePopup } = useContext(PopupContext)
    return <>
        <CardDescription>Are you sure you want to delete this note?</CardDescription>
            <div className="flex items-center gap-2 justify-end mt-3">
              <Button variant='outline' onClick={handleCloseRemoveNotePopup}>Cancel</Button>
              <Button variant='destructive'>Confirm</Button>
            </div>
    </>
}