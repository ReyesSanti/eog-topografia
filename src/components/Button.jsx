import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const variants = {
  primary:
    'bg-accent text-white hover:bg-accent-dark border border-transparent',
  outlineLight:
    'border border-white/40 text-white hover:bg-white/10',
  outlineDark:
    'border border-accent text-accent hover:bg-accent hover:text-white',
  outlineOnDark:
    'border border-white/25 text-white hover:bg-white/10',
}

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  arrow = false,
  className = '',
  ...rest
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-[3px] px-7 py-3.5 text-[13px] font-semibold uppercase tracking-[0.12em] transition-colors duration-200 ${variants[variant]} ${className}`

  const content = (
    <>
      {children}
      {arrow && <ArrowRight className="h-4 w-4" strokeWidth={2} />}
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {content}
      </a>
    )
  }
  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  )
}
