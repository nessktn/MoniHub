export function PageContainer({ children }) {
  return (
    <div className="w-full h-screen overflow-y-auto pb-24 bg-white">
      {children}
    </div>
  );
}
