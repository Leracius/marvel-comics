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
    <div className=" text-white overflow-hidden   ">
      <div
        style={{ backgroundImage: `url(${img})` }}
        className="w-[200px] h-[300px] bg-cover bg-center"
      ></div>
      <h1 className="p-2 flex overflow-wrap w-[200px] text-center bg-slate-800">
        {title}
      </h1>
    </div>
  );
}
