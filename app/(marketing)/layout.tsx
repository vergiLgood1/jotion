import Navbar from "./_components/navbar";


const MarketingLayout = ({
    children 
}: {
    children: React.ReactNode;
}) => {
    return ( 
        <div className="min-h-full bg-background text-foreground">
            <Navbar/>
            <main className="min-h-full">
                {children}
            </main>
        </div>
     );
}
 
export default MarketingLayout;
