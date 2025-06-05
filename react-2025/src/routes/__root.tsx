import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import DarkModeProvider from '@/context/DarkModeProvider'
import GameConfigProvider from '@/context/GameConfigProvider'
import SoundProvider from '@/context/SoundProvider'
import Page from '@/components/Page'

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
      <TanStackRouterDevtools />
    </>
  ),
})
