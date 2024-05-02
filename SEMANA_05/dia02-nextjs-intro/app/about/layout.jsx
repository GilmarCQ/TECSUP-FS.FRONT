export const metadata = {
  title: 'Layout ABOUT PAGE',
  description: 'Pagina de informacion de about'
}

const Layout = ({children}) => {
  return (
    <>
      <h1>Soy el layout del About Page</h1>
      {children}
    </>
  )
}

export default Layout
