import { observer } from 'mobx-react'
import { FC, useEffect } from 'react'
import { ControlWithButtonsViewModel } from './ControlWithButtonsViewModel'

interface IControlWithButtonsView {
    viewModel: ControlWithButtonsViewModel
    leftButtons?: React.ButtonHTMLAttributes<HTMLButtonElement>[]
    rightButtons?: React.ButtonHTMLAttributes<HTMLButtonElement>[]
}
export const ControlWithButtonsView: FC<IControlWithButtonsView> = observer(({ viewModel, leftButtons, rightButtons }) => {
    
    // useEffect(() => {
    //     return viewModel?.unmount()
    // })

    return (
        <div>
           {leftButtons?.map(btn => <>{btn}</>)}
           <input value={viewModel.text}/>
           {rightButtons?.map(btn => <>{btn}</>)}
        </div>
    )
})