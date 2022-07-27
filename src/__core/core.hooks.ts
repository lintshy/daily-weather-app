import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux"
import type { RootState, AppDispatch } from "./core.store"

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
