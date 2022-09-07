import clsx from 'clsx'
import Head from 'next/head'
import { HTMLAttributes, PropsWithChildren } from 'react'

interface PageContainerProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
}

export const PageContainer = ({
  children,
  title,
  description,
  ...props
}: PropsWithChildren<PageContainerProps>) => {
  const { className, ...rest } = props

  return (
    <div
      className={clsx(
        'relative flex flex-col items-center gap-14 py-9 lg:gap-20',
        // 'after:absolute after:h-full after:w-full after:bg-noise after:content-[""]',
        className
      )}
      {...rest}
    >
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {children}
    </div>
  )
}
