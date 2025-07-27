export default function BoxContainer({ title, image, teknology, description }) {
  return (
    <div className="flex p-2 m-2 bg-slate-200 rounded-lg max-w-64 flex-col hover:bg-blue-300 transition cursor-pointer">
      <div className="px-2 py-2 text-justify">
        <a href="#" className="cursor-pointer">
          <img src={image} alt="gambar projek" className="rounded-md mb-2 w-full h-32 object-cover" />
        </a>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm">{description}</p>
        <div className="flex flex-wrap gap-1 mt-4 justify-center">
          {(teknology || []).map((tech, index) => (
            <h4 key={index} className="bg-blue-900 text-white rounded-xl text-[10px] px-2 py-[2px]">
              {tech}
            </h4>
          ))}
        </div>
      </div>
    </div>
  );
}
