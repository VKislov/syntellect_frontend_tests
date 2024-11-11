import { FC } from "react"


interface IWrapperProps {
    children: React.ReactNode
    leftWrapper?: React.ButtonHTMLAttributes<HTMLButtonElement>[]
    rightWrapper?: React.ButtonHTMLAttributes<HTMLButtonElement>[]
}
export const Wrapper: FC<IWrapperProps> = ({ children, leftWrapper, rightWrapper }) => {
    return (
        <>
            {leftWrapper?.map(el => <>{el}</>)}
            {children}
            {rightWrapper?.map(el => <>{el}</>)}
        </>
    )
}