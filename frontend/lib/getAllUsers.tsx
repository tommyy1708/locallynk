export default async function getAllUsers() {
  const res = await fetch('http://localhost:8000/api/users')
  if (!res.ok) {
    throw new Error(res.statusText)
  }

  return res.json()
}
