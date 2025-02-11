import NavBar from "../../components/NavBar";

export function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main >
      <NavBar />
      {children}
    </main>
  )
}