type Props = {
  children: React.ReactNode
}
export const PortraitStyle: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <style jsx>{`
        main {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}
