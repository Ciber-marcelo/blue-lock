import FormationMenu from "@/components/formation-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blue Lock | Create formation',
  description: 'Create formation',
}

export default function CreateFormation() {
   return (
      <div className="flex flex-col min-h-screen justify-center">
         <FormationMenu />
      </div>
   )
}