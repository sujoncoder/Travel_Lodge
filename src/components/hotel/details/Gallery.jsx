import Image from "next/image";

const Gallery = ({ gallery }) => {
  if (!gallery || gallery.length === 0) return null;

  const mainImage = gallery[0];
  const subImages = gallery.slice(1);

  return (
    <section className="p-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Image
          src={mainImage}
          className="w-full h-auto object-cover rounded"
          alt="Main Pic"
          width={400}
          height={400}
        />

        <div className="grid grid-cols-2 grid-rows-2 gap-2">
          {subImages.map((image, index) => (
            <Image
              key={index}
              src={image}
              className="w-full h-auto object-cover rounded"
              alt={`Sub Pic ${index + 1}`}
              width={400}
              height={400}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
