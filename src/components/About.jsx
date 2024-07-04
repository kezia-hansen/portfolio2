import Image from "next/image";

export default function AboutMe() {
  return (
    <section class="bg-gray-100">
      <div class="flex flex-col md:flex-row items-center gap-5 md:gap-10 p-5 md:p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div class="mt-12 md:mt-0">
            <Image alt="image of me" src={"/me.png"} height={300} width={300} className="object-cover rounded-lg shadow-md" />
          </div>
          <div class="max-w-lg">
            <h2 class="text-3xl font-extrabold text-gray-900 sm:text-4xl">About Us</h2>
            <p class="mt-4 text-gray-600 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis eros at lacus feugiat hendrerit sed ut tortor. Suspendisse et magna quis elit efficitur consequat. Mauris eleifend velit a pretium iaculis. Donec sagittis velit et magna euismod, vel aliquet nulla malesuada. Nunc pharetra massa lectus, a fermentum arcu volutpat vel.</p>
            <div class="mt-8">
              <a href="#" class="text-blue-500 hover:text-blue-600 font-medium">
                Learn more about us
                <span class="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
