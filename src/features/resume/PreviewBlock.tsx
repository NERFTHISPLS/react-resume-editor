export default function PreviewBlock({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-4">
      {title && (
        <h2 className="text-xl font-semibold mb-3 text-blue-800 text-center">
          {title}
        </h2>
      )}
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}
