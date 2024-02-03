export default function Results(props) {
  console.log(props);
  return (
    <div className="m-3">
      <div className="ring ring-gray-300 rounded-xl p-4 ">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <div className="text-2xl">💼{props.job}</div>
            <div className="text-lg">🏢{props.company}</div>
          </div>
          <img src={props.logo} alt="company" />
        </div>
        <hr className="my-2" />
        <div className="text-lg">
          <p>📍{props.city}</p>
          <p>💵{props.salary}</p>
        </div>
        <div className="flex justify-between items-center mt-2">
          <div className="bg-gray-400 text-gray-600 rounded-md p-1">Job</div>
          <a href="/view" className="text-blue-600">
            Apply
          </a>
        </div>
      </div>
    </div>
  );
}
