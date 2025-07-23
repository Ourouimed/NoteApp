import { Button } from "@/components/ui/button";
import { PopupContext } from "@/contexts/PopupContext";
import { useContext } from "react";
export default function Header (){
    const { handleOpenAddNotePopup } = useContext(PopupContext)
    return (
    <div className="bg-card text-card-foreground border px-6 py-2 w-full flex items-center justify-between">
        <h3 className="text-xl">Note App</h3>
        <div className="flex items-center gap-2">
            <Button className='size-10' onClick={handleOpenAddNotePopup}>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                    width="24"
                    height="24"
                    
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
                </svg>
            </Button>
            <div className="flex items-center gap-2">
                <Button className='size-10' variant='outline'>MO</Button>
                <div>
                  <h4>Medamine Ouroui</h4>
                  <p className="text-muted-foreground text-sm">ourouimed</p>
                </div>
            </div>
            
        </div>
    </div>
    );
}