import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import DarkModeProvider from '@/context/useDarkMode'
import GameConfigProvider from '@/context/useGameConfig'
import SoundProvider from '@/context/useSound'
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
