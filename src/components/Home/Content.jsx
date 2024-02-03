export default function Content() {
  return (
    <div>
      <div className="flex mt-10 flex-col space-y-8">
        {/* First Section */}
        <div className="flex gap-10 justify-center items-center">
          <img src="/illustration_join@2x.png" alt="image" />
          <div className="ml-6 flex flex-col">
            <p className="text-2xl font-bold text-black">Join</p>
            <p className="text-lg text-gray-500">
              Sign up and select your areas of proficiency
            </p>
          </div>
        </div>

        {/* Second Section */}
        <div className="flex gap-10 justify-center items-center">
          <div className="ml-6 flex flex-col">
            <p className="text-2xl font-bold text-black">Explore</p>
            <p className="text-lg text-gray-500">
              Explore and solve challenges which help you to build and enhance
              your profile.
            </p>
          </div>
          <img src="/illustration_connect@2x.png" alt="image" />
        </div>

        {/* Third Section */}
        <div className="flex gap-10 justify-center items-center">
          <img src="/illustration_compete@2x.png" alt="image" />
          <div className="ml-6 flex flex-col">
            <p className="text-2xl font-bold text-black">Compete</p>
            <p className="text-lg text-gray-500">
              Figure out where you stand by competing against the best, and
              unlock jobs and stellar rewards in the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
