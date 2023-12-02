import FormationMenu from "@/components/formation-menu";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blue Lock | Create formation',
  description: 'Create formation',
}

export default function CreateFormation() {
   return (
      <div className="flex items-center flex-col gap-10 mt-10">
         Under construction / Em construção 
         <FormationMenu />
      </div>
   )
}