

export function Footer() {


    return (
        <>
            <footer className="bg-[linear-gradient(180deg,#ffffff20,#5757577f)] flex flex-col h-[450px] w-screen border">
                <div className="footer-top flex flex-row h-full">
                    <div className="footerright-top flex-[2] flex flex-row justify-center items-center h-full text-[75px]"
                        style={{ fontFamily: '"Red Rose", serif' }}
                    >
                        <span className="cursor-pointer">JAVA'S</span>
                    </div>

                    <div className="footerleft-top flex flex-row justify-evenly items-start flex-[3]">
                        <div className="footerleftcontent-top mt-[175px] flex flex-col gap-[10px] items-center justify-center">
                            <label className="footercontentheader font-red-rose font-bold text-[25px]">ABOUT US</label>
                            <label className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Our story</label>
                            <label className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Contact us</label>
                        </div>

                        <div className="footerleftcontent-top mt-[175px] flex flex-col gap-[10px] items-center justify-center">
                            <label className="footercontentheader font-red-rose font-bold text-[25px]">PRODUCTS</label>
                            <label className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Laptop</label>
                        </div>

                        <div className="footerleftcontent-top mt-[175px] flex flex-col gap-[10px] items-center justify-center">
                            <label className="footercontentheader font-red-rose font-bold text-[25px]">STORE</label>
                            <a href="https://www.smsupermalls.com/mall-directory/sm-city-cebu/information" className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">SM Cebu City</a>
                            <a href="https://www.ayalamalls.com/" className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Ayala Business Park</a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom flex flex-row justify-between px-[20px]">
                    <div><label className="font-red-rose text-[15px] font-bold">JAVA'S © All rights reserved</label></div>
                    <div><label className="font-red-rose text-[15px] font-bold cursor-pointer hover:underline">Privacy Policy</label></div>
                    <div><label className="font-red-rose text-[15px] font-bold cursor-pointer hover:underline">Terms of use</label></div>
                    <div><label className="font-red-rose text-[15px] font-bold">Location: Philippines</label></div>
                </div>
            </footer>
        </>
    )
}