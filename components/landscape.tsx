type Props = {
  children: React.ReactNode
}
export const Landscape: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <nav>
        <ul>
          <li>Home</li>
          <li>Section</li>
          <li>History</li>
          <li>Search</li>
          <li>Author</li>
        </ul>
      </nav>
      <main>{children}</main>
      <div>
        <ul>
          <li>User</li>
          <li>New</li>
          <li>Edit</li>
          <li>Remove</li>
        </ul>
      </div>
      <style jsx>{`
        main {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>{' '}
    </>
  )
}
