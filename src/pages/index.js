
import DashBoard from '@/components/DashBoard'
import { getSession } from 'next-auth/react'
import React from 'react'

const Home = () => {
  return (
    <>
      <DashBoard   />
    </>
  )
}

export default Home



export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });
  if (!session) {
    return {
      redirect: {
        destination: "/Forms/login",
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