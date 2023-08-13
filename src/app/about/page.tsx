import Image from "next/image";

export default function About() {
  return (
    <section className="flex justify-center min-h-1/2 bg-gray-900 p-10">
      <div className="rounded-xl flex flex-col md:flex-row justify-center shadow m-10 p-5 gap-5 ">
        <div className="">
          <Image src="/images/lib.jpg" width={500} height={500} alt="Movie" className="rounded-xl"/>
        </div>
        <div className="w-5/6 flex flex-col justify-center gap-4 ">
          <h1 className="text-3xl font-bold text-blue-600">About Me</h1>
          <h2 className="card-title text-5xl">
            A junior Back End and Front End Developer based in Semarang,
            Indonesia📍
          </h2>
          <p className="text-lg">
          A passionate web developer with a keen eye for crafting engaging online experiences. Based in Semarang, I specialize in creating dynamic and user-friendly websites that seamlessly merge aesthetics with functionality. Proficient in HTML, CSS, JavaScript, and PHP, I am dedicated to implementing modern web technologies to build responsive and interactive web solutions. With a focus on clean and efficient code, I bring designs to life while ensuring a smooth browsing experience across devices. Collaboration is at the heart of my approach, as I enjoy working with diverse teams to deliver exceptional web applications that leave a lasting impact.
          </p>
        </div>
      </div>
    </section>
  );
}
