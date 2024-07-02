export default async function getAllUsers() {
  const res = await fetch('http://localhost:8000/api/users')
  return (
    <div>getAllUsers</div>
  )
}
