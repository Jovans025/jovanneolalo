import Image from "next/image";
import { Button  } from "react-bootstrap"
import Link from "next/link";

export default function Head() {
    return (
      <section className="section">
        <div className="row">
            <div className="col-4 text-center">
                <Image 
                    src={'/images/closetag.png'}
                    width={300}
                    height={300}
                    alt="Jovanne Olalo"
                    className="img-fluid saturate"
                />
             </div>
            <div className="col-8 text-left">
                 <h1 className="mt-5 nameintro">Hello!</h1>
                 <h3>I'm Jovanne Olalo, a fullstack web developer based in the Philippines.</h3>
                 <Link href={"/Jovanne Olalo.pdf"} target="_blank">
                    <Button>View Resume</Button>
                 </Link> 
            </div>
        </div> 
      </section>
    );
  }
  