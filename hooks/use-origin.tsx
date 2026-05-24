import { useSyncExternalStore } from "react"

const subscribe = () => () => {};
const getSnapshot = () => window.location.origin;
const getServerSnapshot = () => "";

export const useOrigin = () => {
    return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
