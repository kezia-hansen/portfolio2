import Image from "next/image";

export function AboutMe() {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
          <div className="col-span-4 sm:col-span-3">
            <div className="bg-white shadow rounded-lg p-12">
              <div className="flex flex-col items-center">
                <Image src="/pf.png" height={300} width={300} alt="cartoon image of me" className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"></Image>
                <h1 className="text-xl font-bold">John Doe</h1>
                <p className="text-gray-700">Software Developer</p>
                <div className="mt-6 flex flex-wrap gap-4 justify-center">
                  <a href="#" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                    Contact
                  </a>
                  <a href="#" className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">
                    Resume
                  </a>
                </div>
              </div>
              <hr className="my-6 border-t border-gray-300"></hr>
            </div>
          </div>
          <div className="col-span-4 sm:col-span-9">
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">About Me</h2>
              <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus est vitae tortor ullamcorper, ut vestibulum velit convallis. Aenean posuere risus non velit egestas suscipit. Nunc finibus vel ante id euismod. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Aliquam erat volutpat. Nulla vulputate pharetra tellus, in luctus risus rhoncus id.</p>

              <h2 className="text-xl font-bold mt-6 mb-4">Skills</h2>
              <div className="mb-6">
                <div className="flex flex-col">
                  <ul>
                    <li className="mb-2">JavaScript</li>
                    <li className="mb-2">React</li>
                    <li className="mb-2">Node.js</li>
                    <li className="mb-2">HTML/CSS</li>
                    <li className="mb-2">Tailwind Css</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
