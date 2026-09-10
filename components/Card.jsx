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
    white: 'bg-white text-apple-dark border border-black/[0.08]',
    gray: 'bg-apple-gray text-apple-dark border border-black/[0.04]',
    dark: 'bg-sembada-navy text-white border border-white/[0.08]',
  };

  const hoverClasses = hover
    ? 'hover:border-black/[0.18] transition-colors duration-200'
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
