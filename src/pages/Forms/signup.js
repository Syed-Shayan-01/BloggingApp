/* eslint-disable react-hooks/rules-of-hooks */
import Forms from "@/components/auth/Forms"
import { useRouter } from "next/router"
const signup = () => {
  const router = useRouter();
  const onSubmit = async (email, password) => {
    const data = { email, password }
    try {
      const response = await fetch("http://localhost:3000/api/auth/user", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });


      if (response.ok) {
        alert("signup Succesfuly")
      }
      if (response.ok) {
        router.replace('/Forms/login')
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Forms signin={false} onFormSubmit={onSubmit} />
  )
}
export default signup