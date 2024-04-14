import { Ellipsis } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Button } from "../ui/button";

export default function TeamMemberOptions({member}) {
    return (
        <DropdownMenu>
        <DropdownMenuTrigger asChild><Button variant="ghost"><Ellipsis className="w-4 h-4" /></Button></DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuItem>Change role</DropdownMenuItem>
            <DropdownMenuItem className="text-red-600">Remove member</DropdownMenuItem>
        </DropdownMenuContent>
        </DropdownMenu>
    )
}