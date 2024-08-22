import { ReactNode, SetStateAction, Dispatch, useState, FC } from 'react'
import { createContext, useContextSelector } from 'use-context-selector'


type ViewMode = 'FINGERS' | 'ABDOMINAL' | 'SUMMARY'

type ContextValue = {
    viewMode: ViewMode
    setViewMode: Dispatch<SetStateAction<ViewMode>>
    finger: string
    setFinger: Dispatch<SetStateAction<string>>
    abdominal: string
    setAbdominal: Dispatch<SetStateAction<string>>
}

export const context = createContext<ContextValue>({} as ContextValue)

type Props = {
    children: ReactNode
}

const initState = {
    viewMode: 'FINGERS' as ViewMode,
    finger: '',
    abdominal: ''
}

export const Provider: FC<Props> = ({ children }) => {

    const [viewMode, setViewMode] = useState<ViewMode>(initState.viewMode)
    const [finger, setFinger] = useState<string>('')
    const [abdominal, setAbdominal] = useState<string>('')

    return (
        <context.Provider 
            value={{
                viewMode,
                setViewMode,
                finger,
                setFinger,
                abdominal,
                setAbdominal
            }}
        >
            {children}
        </context.Provider>
    )
}

export default Provider

export const usePainPointsSelector = <Selected,>(
    selector: (value: ContextValue) => Selected,
): Selected => {
    return useContextSelector(context, selector)
}
  

