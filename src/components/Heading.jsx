export default function Heading({ title, subtitle }) {
  return (
    <div className="flex flex-col items-center justify-center my-8 gap-4">
      <h1 className="text-xl md:text-3xl font-semibold text-amber-900 text-center">
        {title}
      </h1>
      <p className="text-base text-gray-500 text-center">{subtitle}</p>
    </div>
  );
}
