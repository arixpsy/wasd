import { createRootRoute, Outlet } from '@tanstack/react-router'
import React, { Suspense } from 'react'
import DarkModeProvider from '@/context/useDarkMode'
import GameConfigProvider from '@/context/useGameConfig'
import SoundProvider from '@/context/useSound'
import Page from '@/components/Page'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null
    : React.lazy(() =>
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
        }))
      )

export const Route = createRootRoute({
  component: () => (
    <>
      <DarkModeProvider>
        <SoundProvider>
          <GameConfigProvider>
            <Page>
              <Outlet />
            </Page>
          </GameConfigProvider>
        </SoundProvider>
      </DarkModeProvider>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </>
  ),
})
