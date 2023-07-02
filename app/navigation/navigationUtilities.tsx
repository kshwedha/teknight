import { useState, useEffect, useRef } from "react"
import {
  PartialState,
  NavigationState,
  NavigationAction,
  createNavigationContainerRef,
} from "@react-navigation/native"
import Config, { type PersistNavigationConfig } from "../config"
import { useIsMounted } from "../utils/isMounted"

/* eslint-disable */
export const RootNavigation = {
  navigate(_name: string, _params?: any) {},
  goBack() {},
  resetRoot(_state?: PartialState<NavigationState> | NavigationState) {},
  getRootState(): NavigationState {
    return {} as any
  },
  dispatch(_action: NavigationAction) {},
}
/* eslint-enable */

export const navigationRef = createNavigationContainerRef()

export function getActiveRouteName(state: NavigationState | PartialState<NavigationState>) {
  const route = state.routes[state.index]
  // const route = state.index != null?state.routes[state.index]:null

  // Found the active route -- return the name
  if (!route.state) return route.name

  // Recursive call to deal with nested routers
  return getActiveRouteName(route.state)
}

/**
 * This helper function will determine whether we should enable navigation persistence
 * based on a config setting and the __DEV__ environment (dev or prod).
 */
function navigationRestoredDefaultState(persistNavigation: PersistNavigationConfig) {
  if (persistNavigation === "always") return false
  if (persistNavigation === "dev" && __DEV__) return false
  if (persistNavigation === "prod" && !__DEV__) return false

  // all other cases, disable restoration by returning true
  return true
}

export function UseNavigationPersistence(storage: any, persistenceKey: string) {
  const [initialNavigationState, setInitialNavigationState] = useState()
  const isMounted = useIsMounted()

  const initNavState = navigationRestoredDefaultState(Config.persistNavigation)
  const [isRestored, setIsRestored] = useState(initNavState)

  const routeNameRef = useRef<string | undefined>()

  const onNavigationStateChange = (state: any) => {
    const previousRouteName = routeNameRef.current
    const currentRouteName = getActiveRouteName(state)

    // Save the current route name for later comparision
    routeNameRef.current = currentRouteName

    // Persist state to storage
    storage.save(persistenceKey, state)
  }

  const restoreState = async () => {
    try {
      const state = await storage.load(persistenceKey)
      if (state) setInitialNavigationState(state)
    } finally {
      if (isMounted()) setIsRestored(true)
    }
  }

  useEffect(() => {
    if (!isRestored) restoreState()
  }, [isRestored])

  return { onNavigationStateChange, restoreState, isRestored, initialNavigationState }
}
