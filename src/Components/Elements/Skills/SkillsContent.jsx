export default function SkillsContent() {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center px-4 py-10" id="skills">
      <div className="flex-col md:flex-row items-center gap-15">
        <div className="text-center my-25 md:my-20  lg:my-35 mb-5">
          <p className="text-xl text-gray-400 font-semibold">~skills and tools that I have mastered~</p>
          <h1 className="text-3xl m-2 text-blue-900 font-bold">My Skills</h1>
          <p className="text-xl text-gray-400 font-semibold">the tools I use to build a professional website and deliver an interactive experience.</p>
        </div>

        <div className="flex flex-wrap justify-center mx-3 my-5 px-4 py-10 gap-15 max-w-250">
            <div className="shadow cursor-pointer">
              <img src="/Image/html.png" alt="icon" className="w-35" />
            </div>
            <div>
              <img src="/Image/css.png" alt="icon" className="w-35" />
            </div>
            <div>
                <img src="/Image/js.png" alt="icon" className="w-33" />
            </div>
            <div>
              <img src="/Image/bootstrap.png" alt="icon" className="w-40" />
            </div>
            <div>
              <img src="/Image/taillwind.png" alt="icon" className="w-35" />
            </div>
            <div>
              <img src="/Image/react.png" alt="icon" className="w-35" />
            </div>
            <div>
              <img src="/Image/git.png" alt="icon" className="w-35" />
            </div>
            <div>
              <img src="/Image/figma.png" alt="icon" className="w-35" />
            </div>
        </div>
      </div>
    </div>
  );
}
