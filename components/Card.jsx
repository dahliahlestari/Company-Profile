import Link from 'next/link';

export default function Card({
  children,
  className = '',
  href,
  onClick,
  variant = 'white', // 'white' | 'gray' | 'dark'
  hover = true,
}) {
  const variantClasses = {
    white: 'bg-white text-apple-dark border border-black/[0.06] shadow-apple-subtle',
    gray: 'bg-apple-gray text-apple-dark border border-black/[0.04]',
    dark: 'bg-sembada-navy text-white border border-white/[0.08]',
  };

  const hoverClasses = hover
    ? 'hover:-translate-y-1 hover:shadow-apple-card hover:border-black/[0.12] transition-all duration-300'
    : '';

  const baseClasses = `rounded-3xl p-6 sm:p-8 relative overflow-hidden flex flex-col ${variantClasses[variant] || variantClasses.white} ${hoverClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={baseClasses} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <div className={baseClasses} onClick={onClick}>
      {children}
    </div>
  );
}
