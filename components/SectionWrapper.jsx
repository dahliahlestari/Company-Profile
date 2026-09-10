export default function SectionWrapper({
  children,
  id,
  className = '',
  containerClassName = '',
  bg = 'white', // 'white' | 'gray' | 'dark' | 'subtle'
}) {
  const bgClasses = {
    white: 'bg-white text-apple-dark',
    gray: 'bg-apple-gray text-apple-dark border-y border-black/[0.04]',
    subtle: 'bg-apple-subtle text-apple-dark',
    dark: 'bg-sembada-navy text-white border-y border-white/[0.08]',
  };

  return (
    <section
      id={id}
      className={`relative py-16 sm:py-24 md:py-28 transition-colors ${bgClasses[bg] || bgClasses.white} ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
}
