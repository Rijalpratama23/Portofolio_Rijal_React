import Email from './Email';
import SosialMedia from './SosialMedia';

export default function ContactContent() {
  return (
    <div className="container mx-auto my-12 px-4 bg-slate-200 py-5 rounded-2xl shadow-2xl" id='contact'>
      <div className="w-full max-w-10xl flex flex-col md:flex-row justify-between items-start gap-6">
        <div className="md:w-1/4">
          <h1 className="text-4xl font-bold text-blue-900 mb-4">Contact Me</h1>
          <p className="text-xl">
            Have an idea or a project? <br />
            Hit me up — let’s make it real & want to work together.
          </p>
        </div>

        <div className="md:w-1/3 flex flex-col">
          <Email />
          <SosialMedia />
        </div>
      </div>
    </div>
  );
}
