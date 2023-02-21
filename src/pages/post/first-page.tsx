import Avatar from '@/components/avatar'
import Link from 'next/link'

export default function FirstPost() {
  return (
    <>
      <Avatar></Avatar>
      <h1>
        First Post <Link href="/">link</Link>
      </h1>
    </>
  )
}
