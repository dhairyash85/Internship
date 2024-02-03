export default function Company() {
  return (
    <div>
      <div className="bg-gray-300 flex flex-col justify-center p-3">
        <h1 className="text-2xl text-center mt-6 text-black font-bold mb-4">
          Companies which are looking for you
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 p-3 gap-4 items-center sm:grid-cols-2">
          {/* Individual company logo components go here */}
          <img className="flex mx-auto" src="/logo_aws_signup@2x.png" alt="" />
          <img className="flex mx-auto" src="/logo_thoughtworks.png" alt="" />
          <img className="flex mx-auto" src="/yesbank_logo.png" alt="" />
          <img className="flex mx-auto" src="/yesbank_logo.png" alt="" />
          <img className="flex mx-auto" src="/logo_aws_signup@2x.png" alt="" />
          <img className="flex mx-auto" src="/logo_thoughtworks.png" alt="" />
        </div>
      </div>
    </div>
  );
}
