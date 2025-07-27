import Button from '../Button';

export default function HeroContent() {
  return (
    <div className="container mx-auto  min-h-screen  flex items-center" id="home">
      <div className="flex justify-between my-50 md:my-20 lg:my-15">
        <div>
          <div className="box1 px-3 py-2 rounded-3xl">
            <h1 className="text-4xl lg:text-5xl font-semibold md:bg-slate-200 p-2 rounded-xl md:w-50 lg:w-65">
              Hi I'M <span className="text-blue-900">Rijal</span>
            </h1>

            <h1 className="text-4xl lg:text-5xl font-semibold md:bg-slate-200 p-2 rounded-xl mt-4">Software Engineering | Front End</h1>
          </div>

          <div className="box2 px-3 py-2 mt-4">
            <p className="text-lg md:text-xl lg:text-2xl text-left lg:text-justify max-w-2xl">I am a Front-End Developer who is passionate and dedicated to creating attractive and interactive websites.</p>
            <p className="text-lg md:text-xl lg:text-2xl mt-2">Here, you'll find my latest projects, skills, and more.</p>
          </div>

          <div className="mt-6">
            <a href="#contact">
              <Button text="Social Media" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
