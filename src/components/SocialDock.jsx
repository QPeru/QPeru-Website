// Fila de redes sociales del pie de página, junto al copyright.
// Completa cada URL con el enlace real de QPerú. Si dejas un campo vacío, ese botón no se muestra.

const SOCIALS = [
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    href: 'https://chat.whatsapp.com/IBLFbCfOPKw1Ye4AgLyT7O', // Grupo de WhatsApp de QPerú
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path fill="currentColor" d="M12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.7 6L0 24l6.3-1.6c1.7.9 3.7 1.4 5.7 1.4h.1c6.6 0 12-5.4 11.9-11.9C24 5.4 18.6 0 12 0Zm0 21.9h-.1c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7.9 1-3.6-.2-.4a9.9 9.9 0 0 1-1.5-5.2c0-5.4 4.4-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9a9.9 9.9 0 0 1 2.9 7c0 5.5-4.5 9.9-9.9 9.9Zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.2-.3-.2-.6-.4Z" />
      </svg>
    )
  },
  {
    id: 'discord',
    label: 'Discord',
    href: '', // Aún sin enlace. Agrega aquí la invitación del servidor y el botón aparecerá
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path fill="currentColor" d="M20.3 4.4A19.8 19.8 0 0 0 15.4 3l-.6 1.2a18.3 18.3 0 0 0-5.5 0L8.6 3a19.8 19.8 0 0 0-4.9 1.5A20.4 20.4 0 0 0 .1 18.1a19.9 19.9 0 0 0 6 3l1.3-2.1a12.9 12.9 0 0 1-2-1l.5-.4a14.2 14.2 0 0 0 12.2 0l.5.4a12.9 12.9 0 0 1-2 1l1.3 2.1a19.9 19.9 0 0 0 6-3 20.3 20.3 0 0 0-3.6-13.7ZM8 15.2c-1.2 0-2.1-1-2.1-2.3 0-1.3 1-2.3 2.1-2.3 1.2 0 2.2 1 2.1 2.3 0 1.3-.9 2.3-2.1 2.3Zm8 0c-1.2 0-2.1-1-2.1-2.3 0-1.3 1-2.3 2.1-2.3 1.2 0 2.2 1 2.1 2.3 0 1.3-.9 2.3-2.1 2.3Z" />
      </svg>
    )
  },
  {
    id: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/qperu.pe/', // Instagram de QPerú
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    )
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/qperu/posts/?feedView=all', // LinkedIn de QPerú
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path fill="currentColor" d="M20.4 20.5h-3.6v-5.6c0-1.3 0-3-1.9-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1a3.7 3.7 0 0 1 3.3-1.8c3.6 0 4.3 2.4 4.3 5.4v6.3ZM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2ZM7.1 20.5H3.5V9h3.6v11.5ZM22.2 0H1.8A1.8 1.8 0 0 0 0 1.8v20.4A1.8 1.8 0 0 0 1.8 24h20.4a1.8 1.8 0 0 0 1.8-1.8V1.8A1.8 1.8 0 0 0 22.2 0Z" />
      </svg>
    )
  }
]

export default function SocialDock() {
  const active = SOCIALS.filter(s => s.href)

  if (active.length === 0) return null

  return (
    <div className="social-row" aria-label="Redes sociales de QPerú">
      {active.map(s => (
        <a
          key={s.id}
          className="social-row-btn"
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
        >
          {s.icon}
        </a>
      ))}
    </div>
  )
}
