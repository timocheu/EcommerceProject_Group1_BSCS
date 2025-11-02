import { ReactNode } from "react";

import { cn } from "@/lib/utils";

import LaunchUI from "@/components/logos/launch-ui";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";

interface FooterLink {
  text: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  logo?: ReactNode;
  name?: string;
  columns?: FooterColumnProps[];
  copyright?: string;
  policies?: FooterLink[];
  showModeToggle?: boolean;
  className?: string;
}

export function FooterSection({
  name = "JAVA'S",
  columns = [
    {
      title: "About us",
      links: [
        { text: "Our Story", href: "#"},
        { text: "Contact us", href: "#" },
      ],
    },
    {
      title: "Products",
      links: [
        { text: "Laptops", href: "/brand" },
      ],
    },
    {
      title: "Store",
      links: [
        { text: "SM Cebu City", href: "#" },
        { text: "Ayala Business Park", href: "#" },
      ],
    },
  ],
  copyright = "JAVA'S © 2025. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "#" },
    { text: "Terms of Service", href: "#" },
  ],
  showModeToggle = false,
  className,
}: FooterProps) {
  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="pl-10">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3 className="text-5xl font-bold " style={{ fontFamily: '"Red Rose", serif' }}>{name}</h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) => (
                  <a
                    key={linkIndex}
                    href={link.href}
                    className="text-muted-foreground text-sm"
                  >
                    {link.text}
                  </a>
                ))}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((policy, index) => (
                <a key={index} href={policy.href}>
                  {policy.text}
                </a>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}

// export function Footer() {
//     return (
//         <>
//             <footer className="bg-[linear-gradient(180deg,#ffffff20,#5757577f)] flex flex-col h-[450px] w-screen border">
//                 <div className="footer-top flex flex-row h-full">
//                     <div className="footerright-top flex-[2] flex flex-row justify-center items-center h-full text-[75px]"
//                         style={{ fontFamily: '"Red Rose", serif' }}
//                     >
//                         <span className="cursor-pointer">JAVA'S</span>
//                     </div>
//
//                     <div className="footerleft-top flex flex-row justify-evenly items-start flex-[3]">
//                         <div className="footerleftcontent-top mt-[175px] flex flex-col gap-[10px] items-center justify-center">
//                             <label className="footercontentheader font-red-rose font-bold text-[25px]">ABOUT US</label>
//                             <label className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Our story</label>
//                             <label className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Contact us</label>
//                         </div>
//
//                         <div className="footerleftcontent-top mt-[175px] flex flex-col gap-[10px] items-center justify-center">
//                             <label className="footercontentheader font-red-rose font-bold text-[25px]">PRODUCTS</label>
//                             <label className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Laptop</label>
//                         </div>
//
//                         <div className="footerleftcontent-top mt-[175px] flex flex-col gap-[10px] items-center justify-center">
//                             <label className="footercontentheader font-red-rose font-bold text-[25px]">STORE</label>
//                             <a href="https://www.smsupermalls.com/mall-directory/sm-city-cebu/information" className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">SM Cebu City</a>
//                             <a href="https://www.ayalamalls.com/" className="footercontent font-red-rose text-[20px] font-bold cursor-pointer hover:underline">Ayala Business Park</a>
//                         </div>
//                     </div>
//                 </div>
//
//                 <div className="footer-bottom flex flex-row justify-between px-[20px]">
//                     <div><label className="font-red-rose text-[15px] font-bold">JAVA'S © All rights reserved</label></div>
//                     <div><label className="font-red-rose text-[15px] font-bold cursor-pointer hover:underline">Privacy Policy</label></div>
//                     <div><label className="font-red-rose text-[15px] font-bold cursor-pointer hover:underline">Terms of use</label></div>
//                     <div><label className="font-red-rose text-[15px] font-bold">Location: Philippines</label></div>
//                 </div>
//             </footer>
//         </>
//     )
// }
