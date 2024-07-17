import { memo } from "react";

interface ContainerProps {
    children: React.ReactNode;
}

const Container = memo(function Container({children}:ContainerProps) {
    return ( 
        <div className="max-w-[1920px] mx-auto md:px-4 xl:px-20">
            {children}
        </div>
     );
})
 
export default Container;