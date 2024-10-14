type CardProps = {
  thumbnail: Thumbnail;
  id: number;
  title: string;
};

type Thumbnail = {
  extension: string;
  path: string;
};

export default function Card({ thumbnail, title }: CardProps) {
  const img = `${thumbnail.path}.${thumbnail.extension}`;

  return (
    <div className=" text-white overflow-hidden border-2 border-red-600 lg:border-none ">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-[350px] h-[520px] bg-cover bg-center"
      ></div>
      <h1 className="p-2 flex overflow-wrap w-[350px] bg-[#000000cc]">
        {title}
      </h1>
    </div>
  );
}
