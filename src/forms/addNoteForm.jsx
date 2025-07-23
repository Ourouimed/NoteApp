import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useContext } from "react";
import { PopupContext } from "@/contexts/PopupContext";

export default function AddNoteForm ({isEditing}){
    const { noteValues , setNotesValues } = useContext(PopupContext)
    return <>
        <div className="flex flex-col gap-6">
        <div className="grid gap-3">
                <Label htmlFor="title">Note title</Label>
                <Input id="title" type="text" placeholder="note title" onChange={(e)=> setNotesValues({...noteValues , title : e.target.value})} />
              </div>

              <div className="grid gap-3">
                <Label htmlFor="desc">Note description</Label>
                <Textarea id="desc" type="text" placeholder="note description" className='resize-none !h-30' onChange={(e)=> setNotesValues({...noteValues , description : e.target.value})} />
              </div>
              
              <div className="flex flex-col gap-3">
                <Button className="w-full">
                 {isEditing ? 'Update note' : 'Add note'}
                </Button>
              </div>
            </div>
    </>
}