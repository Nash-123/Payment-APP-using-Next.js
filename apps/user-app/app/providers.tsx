"use client"
import {RecoilRoot} from "recoil"; // Same as Providers used in layout.tsx acts as bridge

export const Providers = ({children}: {
    children: React.ReactNode
}) => {

    return (
        <RecoilRoot>
            {children}
        </RecoilRoot>
    );

}



