import { useTheme } from '@emotion/react'
import Image from 'next/image'
import { FOOTER_GROUPS, CONTACT_INFO } from '@/utils/constants'
import logo from '@/public/jbef_logo.png'

export const Footer = () => {
  const theme = useTheme()

  return (
    <footer
      style={{
        height: theme.layout.footer.height,
        padding: `${theme.size[1]} 0`,
        backgroundColor: theme.palette.grey[4],
        color: theme.palette.text.dark[1],
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          maxWidth: theme.breakpoints.xl,
          height: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            justifyContent: 'space-around',
            [`@media (maxWidth: ${theme.breakpoints.md})`]: {
              justifyContent: 'center',
            },
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: theme.spacing[4],
            }}
          >
            <div
              style={{
                width: '150px',
              }}
            >
              <Image
                alt='Logo'
                src={logo}
                loading='lazy'
                // width='128px'
                // height='50px'
              />
            </div>
            <div>
              {Object.values(CONTACT_INFO).map((val, i) => (
                <span key={i}>{val}</span>
              ))}
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: theme.spacing[8],
              [`@media (maxWidth: ${theme.breakpoints.md})`]: {
                display: 'none',
              },
            }}
          >
            {FOOTER_GROUPS.map((col, i) => (
              <div key={i}>
                <span
                  style={{
                    fontWeight: 700,
                  }}
                >
                  {col.title}
                </span>
                {col.links.map((link, j) => (
                  <span key={j}>{link.label}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div style={{ alignSelf: 'stretch' }} />
        <span
          style={{
            color: theme.palette.text.dark[0],
            whiteSpace: 'nowrap',
            minWidth: 'max-content',
          }}
        >
          © 2022 Designed by: J. Befán - All rights reserved.
        </span>
      </div>
    </footer>
  )
}
