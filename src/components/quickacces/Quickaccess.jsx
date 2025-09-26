import { Children } from "react";

export default function Quickaccess({ children }) {
    return <>
    <div className="">
        <div className="Flex flex-row">
            {children}
        </div>
    </div>
    </>
}