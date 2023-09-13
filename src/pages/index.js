
import DashboardForm from '@/components/userDashboard/DashBoard.jsx'
import { getSession } from 'next-auth/react'
import React from 'react'

const Home = () => {
  return (
    <>
      <DashboardForm />

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