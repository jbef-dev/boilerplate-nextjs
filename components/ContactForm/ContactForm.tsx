import { Button } from '@ui/Button/Button'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useIntl } from 'react-intl'
import { useContactForm } from './useContactForm'
import { MdMail, MdMessage, MdPerson, MdPhone } from 'react-icons/md'
import { FormValues } from './types'
import clsx from 'clsx'

const validateEmail = (email: string) => {
  try {
    const regexp = new RegExp(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
    return regexp.test(email)
  } catch (e) {
    return false
  }
}

export const ContactForm = () => {
  const intl = useIntl()

  const {
    register,
    handleSubmit,
    formState: { errors },
    // getValues,
    // } = useForm<FormValues>({ resolver })
  } = useForm<FormValues>()

  const { loading, handleSendEmail } = useContactForm()

  const onSubmit = handleSubmit(data => handleSendEmail(data))

  const inputStyles = (key: keyof FormValues) =>
    clsx([
      'text-md flex flex-grow rounded border border-solid border-gray-400 bg-gray-50 font-[inherit] placeholder:text-center placeholder:font-medium placeholder:text-gray-400',
      {
        '!border-red-600': Boolean(errors[key]),
      },
    ])

  const iconStyles = clsx('text-2xl')
  const inputContainerStyles = clsx('flex w-full gap-3')

  return (
    <form className='flex w-full max-w-screen-sm flex-col items-center gap-4'>
      <div className={inputContainerStyles}>
        <MdPerson className={iconStyles} />
        <input
          className={inputStyles('fullName')}
          {...register('fullName', { required: true })}
          placeholder={intl.formatMessage({ id: 'contact.page.form.fullName' })}
        />
      </div>

      <div className={inputContainerStyles}>
        <MdPhone className={iconStyles} />
        <input
          className={inputStyles('phone')}
          {...register('phone', { required: true })}
          placeholder={intl.formatMessage({ id: 'contact.page.form.phone' })}
          type='phone'
        />
      </div>

      <div className={inputContainerStyles}>
        <MdMail className={iconStyles} />
        <input
          className={inputStyles('email')}
          {...register('email', { validate: validateEmail })}
          placeholder={intl.formatMessage({ id: 'contact.page.form.email' })}
          type='email'
        />
      </div>

      <div className={inputContainerStyles}>
        <MdMessage className={iconStyles} />
        <textarea
          className={inputStyles('message')}
          rows={5}
          placeholder='Your message...'
          {...register('message', { required: false })}
        />
      </div>

      <Button
        flavor='basic'
        onClick={onSubmit}
        icon={<MdMail />}
        isLoading={loading}
      >
        Submit
      </Button>
    </form>
  )
}
