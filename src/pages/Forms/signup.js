import Forms from "@/components/auth/Forms"

const signup = () => {
    const onSubmit =  async ( email, password ) => {
        const data = { email, password }
        try {
            const response = await fetch("http://localhost:3000/api/auth/user", {
              method: "POST", // or 'PUT'
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
        

            if(response.ok){
            alert("signup Succesfuly")
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