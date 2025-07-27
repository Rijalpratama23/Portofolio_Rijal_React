export default function Button({text}) {
    return(
        <div className="box3 text-white px-4 py-2">
            <button className="btn bg-blue-900 py-3 px-6 rounded-2xl shadow-lg/20 cursor-pointer hover:bg-blue-500 font-semibold text-2xl">{text}</button>
        </div>
    )
}