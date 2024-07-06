import Image from "next/image";
import Loader from "@/app/components/loader"

export default function Home() {
  return (
    <main>
      <p>
        Hello world
      </p>
      <Loader showing={true}/>
    </main>
      );
}
