import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

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

import { useHandleNavigate } from "@/components/HandleNavigate";

export function FooterSection({
  name = "JAVA'S",
  columns = [
    {
      title: "About us",
      links: [
        { text: "Our Story", href: "/EcommerceProject_Group1_BSCS/contact" },
        { text: "Contact us", href: "/EcommerceProject_Group1_BSCS/contact" },
      ],
    },
    {
      title: "Products",
      links: [
        {
          text: "Laptops",
          href: "/EcommerceProject_Group1_BSCS/brand?name=Infinix",
        },
      ],
    },
    {
      title: "Store",
      links: [
        {
          text: "SM Cebu City",
          href: "https://www.smsupermalls.com/mall-directory/sm-city-cebu/information",
        },
        { text: "Ayala Business Park", href: "https://ayala.com/" },
      ],
    },
  ],
  copyright = "JAVA'S © 2025. All rights reserved",
  policies = [
    { text: "Privacy Policy", href: "/EcommerceProject_Group1_BSCS/privacy" },
    { text: "Terms of Service", href: "/EcommerceProject_Group1_BSCS/terms" },
  ],
  showModeToggle = false,
  className,
}: FooterProps) {
  const navigate = useHandleNavigate();

  return (
    <footer className={cn("bg-background w-full px-4", className)}>
      <div className="max-w-container mx-auto">
        <Footer>
          <FooterContent className="pl-10">
            <FooterColumn className="col-span-2 sm:col-span-3 md:col-span-1">
              <div className="flex items-center gap-2">
                <h3
                  className="text-5xl font-bold "
                  style={{ fontFamily: '"Red Rose", serif' }}
                >
                  {name}
                </h3>
              </div>
            </FooterColumn>
            {columns.map((column, index) => (
              <FooterColumn key={index}>
                <h3 className="text-md pt-1 font-semibold">{column.title}</h3>
                {column.links.map((link, linkIndex) =>
                  link.href.startsWith("http") ? (
                    <a
                      key={linkIndex}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground text-sm hover:underline"
                    >
                      {link.text}
                    </a>
                  ) : (
                    <button
                      key={linkIndex}
                      onClick={() => navigate(link.href)}
                      className="cursor-pointer text-muted-foreground text-sm text-left hover:underline"
                    >
                      {link.text}
                    </button>
                  ),
                )}
              </FooterColumn>
            ))}
          </FooterContent>
          <FooterBottom>
            <div>{copyright}</div>
            <div className="flex items-center gap-4">
              {policies.map((link, index) => (
                <button
                  key={index}
                  onClick={() => navigate(link.href)}
                  className="cursor-pointer text-muted-foreground text-sm text-left hover:underline"
                >
                  {link.text}
                </button>
              ))}
              {showModeToggle && <ModeToggle />}
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
