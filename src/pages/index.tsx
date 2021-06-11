type Props = {
  title: string
}

export default function Home({ title }: Props) {
  return (
    <div>
      <p>Hello {title}</p>
    </div>
  )
}
