import { ApolloProvider } from '@apollo/client';
import client from 'apollo/clients'
import Footer from 'components/Footer';
import Sidebar from 'components/internal/InternalSidebar';
import { AnimatePresence } from 'framer-motion';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

/*
  add the requireAuth property to the page component
  to protect the page from unauthenticated users
  e.g.:
  OrderDetail.requireAuth = true;
  export default OrderDetail;
 */

export const ProtectedLayout = ({ children, changes }) => {
  const router = useRouter();
  const { status: sessionStatus, data: sessionData } = useSession();
  const authorized = sessionStatus === 'authenticated';
  const unAuthorized = sessionStatus === 'unauthenticated';
  const loading = sessionStatus === 'loading';
  const pageKey = router.asPath

  useEffect(() => {
    // check if the session is loading or the router is not ready
    if (loading || !router.isReady) return;

    // if the user is not authorized, redirect to the login page
    // with a return url to the current page
    if (unAuthorized) {
      console.log('not authorized');
      router.push({
        pathname: '/login',
        query: { callbackUrl: router.asPath },
      });
    }
    if(sessionData && sessionData.user.betaAccess != true && sessionData.user.role != "767bb09e-a6fc-4ebb-8c5f-08b060ab0bdb") {
      signOut({ callbackUrl: '/' })
    }
  }, [loading, unAuthorized, sessionStatus, router]);

  // if the user refreshed the page or somehow navigated to the protected page
  if (loading) {
    return <>Loading app...</>;
  }

  // if the user is authorized, render the page
  // otherwise, render nothing while the router redirects him to the login page
  // children

  return authorized ? (
    <>
      <div className="flex min-h-screen">
        <Sidebar changes={changes} />
        <div
          className="flex flex-col justify-between flex-1 max-w-full pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pl-[env(safe-area-inset-left)] lg:pt-0 lg:pr-0 lg:pl-0"
          style={{ transition: 'left .5s ease,right .5s ease' }}
        >
          <main
            className="block w-full px-[15px] mx-auto relative h-full"
            style={{ transition: 'left .5s ease,right .5s ease' }}
          >
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : <></>;
};

export default ProtectedLayout