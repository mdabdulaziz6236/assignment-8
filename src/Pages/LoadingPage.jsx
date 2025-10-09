// import logoImg from "../assets/logo.png";

const LoadingPage = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="flex items-center text-5xl font-extrabold">
        {/* L + spinning image */}
        <div className="flex items-center">
          <span>L</span>
          <span className="mx-3 loading loading-spinner loading-xl"></span>
        </div>

        <span>ading</span>
      </div>
    </div>
  );
};

export default LoadingPage;
