export default function Upload() {
  function onSubmitHandler() {}

  return (
    <div className="flex justify-center w-full h-screen items-center text-xl">
      <label className="mx-10">Upload</label>
      <div className="flex">
        <form onSubmit={onSubmitHandler}>
          <input type="file" id="file"></input>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
