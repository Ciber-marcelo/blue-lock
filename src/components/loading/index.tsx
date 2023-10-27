import loading from "../../../public/images/loading.gif"
import Image from "next/image";

export function Loading() {
    return (
        <div className=" flex w-full h-full justify-center items-center">
            <Image 
               width={150}
               height={150}
               src={loading} 
               alt="Loading" 
            />
        </div>
    )
}