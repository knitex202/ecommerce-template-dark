
interface FooterListProps {
    children: React.ReactNode;

}

const FooterList:React.FC<FooterListProps> = ({children}) => {
    return ( 
        <div className="w-full sm:1/2 md:1/4 lg:1/6 flex flex-col mb-6 gap-2">
            {children}
        </div>
     );
}
 
export default FooterList;