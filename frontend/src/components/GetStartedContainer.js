const GetStartedContainer = ({ title, children }) => {
  return (
    <div className="w-full h-2/6 flex justify-center">
      <main className="bg-white rounded w-full h-full p-5 space-y-5 shadow-lg">
        <h2 className="text-center text-primary text-2xl font-open font-bold">
          {title}
        </h2>
        <form className="flex flex-col space-y-2">{children}</form>
      </main>
    </div>
  );
};

export default GetStartedContainer;
