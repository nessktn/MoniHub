export function BadgeItem({ icon, title, description, unlocked = false }) {
  return (
    <div className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 ${
      unlocked
        ? 'border-navy-900 bg-navy-50'
        : 'border-gray-300 bg-gray-50 opacity-50'
    }`}>
      <div className={`text-4xl mb-2 ${!unlocked && 'grayscale'}`}>
        {icon}
      </div>
      <h4 className="font-bold text-navy-900 text-sm text-center">{title}</h4>
      <p className="text-xs text-gray-600 text-center mt-1">{description}</p>
    </div>
  );
}
