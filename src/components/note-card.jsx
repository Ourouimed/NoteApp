import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardFooter,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  
  export default function NoteCard({title , description , created_at}) {

    return (
      <Card>
        <CardHeader className="space-y-1">
          <CardTitle>
            {title}
          </CardTitle>
          <CardDescription>
            {description}
          </CardDescription>
        </CardHeader>
  
        <CardFooter className="border-t flex justify-between items-center">
          <div className="text-xs text-muted-foreground">
            {created_at}
          </div>
  
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              Update
            </Button>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </div>
        </CardFooter>
      </Card>
    )
  }
  