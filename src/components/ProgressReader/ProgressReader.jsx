const ProgressReader = () => {
  return (
    <div className="relative">
      <progress
        id="file"
        max="100"
        value="70"
        className="w-full h-3 mb-3 fixed top-[76px]"
      >
        70%
      </progress>
    </div>
  );
};

export default ProgressReader;
