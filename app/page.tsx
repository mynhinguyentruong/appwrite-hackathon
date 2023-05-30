import Image from 'next/image'
import GetStartedButton from "#/app/components/GetStartedButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <GetStartedButton />
    </main>
  )
}
