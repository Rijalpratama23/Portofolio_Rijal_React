import Button from "../Button";

export default function AboutContent() {
  return (
    <div className="container mx-auto min-h-screen flex items-center px-4  py-10" id="about">
      <div className="flex flex-col md:flex-row items-center gap-15">
        <div className="w-full max-w-xs">
          <img
            className="rounded-tl-[50px] rounded-br-[50px] shadow-lg w-full"
            src="Image/about.jpg"
            alt="Rijal Pratama"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-blue-900 text-2xl font-semibold md:text-left mb-4">About</h2>
          <p className=" leading-relaxed md:text-left mb-6 text-lg md:text-xl lg:text-2xl text-justify">
            Hello I am Rijal Pratama, I am a FrontEnd developer with 2 years of experience.
            I have a strong ability to create attractive and functional interfaces.
            With basic skills in HTML, CSS, and JavaScript, I am also ready to work in a team.
            Besides that, I have a strong desire to continue learning web development in the future.
          </p>
          <a href="https://drive.google.com/file/d/1t-QgiCpSbLDbqUOFxvDmjVNGxZulzZ1h/view?usp=sharing" target="__blank"><Button text="Download CV" /></a>
        </div>
      </div>
    </div>
  );
}
