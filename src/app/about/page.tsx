import Image from "next/image";

export default function About() {
  return (
    <section className="flex justify-center min-h-1/2 bg-gray-900 p-10">
      <div className="rounded-xl flex justify-center justify-items-stretch shadow-xl m-10 p-5 gap-5">
        <div className="">
          <Image src="/images/lib.jpg" width={500} height={500} alt="Movie" className="rounded-xl"/>
        </div>
        <div className="w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold text-blue-600">About Me</h1>
          <h2 className="card-title text-5xl">
            A junior Back End and Front End Developer based in Semarang,
            Indonesia📍
          </h2>
          <p className="text-lg">
            As a Junior Front-End Developer, I possess an impressive arsenal of
            skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel
            in designing and maintaining responsive websites that offer a smooth
            user experience. My expertise lies in crafting dynamic, engaging
            interfaces through writing clean and optimized code and utilizing
            cutting-edge development tools and techniques. I am also a team
            player who thrives in collaborating with cross-functional teams to
            produce outstanding web applications..
          </p>
        </div>
      </div>
    </section>
  );
}
