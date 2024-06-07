const FrxImage = ({ src, alt = "Image", className = "", width = "auto" }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-110 ${className}`}
      style={{ width }}
    >
      <img src={src} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
};

export default FrxImage;
