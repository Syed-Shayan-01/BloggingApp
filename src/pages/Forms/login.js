import Forms from "@/components/auth/Forms"
import { getSession, signIn } from 'next-auth/react'
const login = () => {
    const onSubmit = async (email, password) => {
        const data = await signIn('credentials', { redirect: false, email, password });
        console.log(data)
    }
    return (<Forms signin={true} onFormSubmit={onSubmit} />)
}

export default login;



export const getServerSideProps = async ({ req }) => {
    const session = await getSession({ req });
    if (session) {
      return {
        redirect: {
          destination: "/allPages/profile",
          parmanent: false,
        },
      };
    }
  
    return {
      props: {
        session,
      },
    };
  };