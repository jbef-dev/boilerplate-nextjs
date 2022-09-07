import { useState } from 'react'
import { FormValues } from './types'

export const useContactForm = () => {
  const [loading, setLoading] = useState<boolean>(false)

  const handleSendEmail = async (props: FormValues) => {
    const { fullName, phone, email, message = 'no message' } = props

    try {
      setLoading(true)
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fullName: fullName,
          phone: phone,
          email: email,
          message: message,
        }),
      })
      // const resData = await res.json()
      // await res.json()
      setLoading(false)
      if (res.ok && res.status === 200) {
        // clearValues()
        alert(
          `Your message has been successfully sent. We will get back to you in 48 hours.`
        )
      } else {
        alert(
          'We are unable to send the message for you, please email us at info@cnglawyers.com instead.'
        )
      }
    } catch (err) {
      // setLoading(false)
      alert(err)
    }
  }

  return { loading, setLoading, handleSendEmail }
}
