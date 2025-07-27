import BoxContainer from './BoxContiner';

export default function Portofolio() {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center px-4 py-2" id="portofolio">
      <div className="flex-col md:flex-row items-center my-25 md:m-28 lg:my-30 gap-15 ">
        <p className="text-xl text-gray-400 font-semibold text-center">~Latest Project~</p>
        <h1 className="text-3xl text-center m-2 text-blue-900 font-bold pb-4">My Protofolio</h1>

          <div className="md:flex flex-wrap md:flex-1/2 px-5 py-4 mx-auto my-5 justify-center gap-10">
            <BoxContainer 
            title="Portofolio Web" 
            image="/Image/Portofolio/WebPersonal.png"
            teknology= {["HTML5","CSS5","JavaScipt"]}
            description="This website is the first portfolio website that I developed using HTML5, CSS, and JavaScript without using a framework or library."
            />
            <BoxContainer 
            title="Flare.Com" 
            image="/Image/Portofolio/webFlare1.png" 
            teknology={["HTML5","TailwindCSS","React"]}
            description="This website is used to develop or accommodate creative ideas in positive ways, such as structured programming lessons. It was developed using HTML, TailwindCSS, and ReactJS."
            />
            <BoxContainer 
            title="WorknestApp" 
            image="/Image/Portofolio/WebWorknest.png"
            teknology={["HTML5","Python","API","Library"]}
            description="This website is used to search for job vacancies based on user input. Developed using HTML, Bootstrap, Python, and API integration to an AI, namely Gemini."
            />
          </div>
      </div>
    </div>
  );
}
