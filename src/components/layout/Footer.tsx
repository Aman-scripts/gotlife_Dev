import { useState } from "react";
import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { Logo } from "./Logo";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export const Footer = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<{ email: string }>({
    mode: "onChange"
  });

  const onSubmit = (data: any) => {
    toast.success("Message sent successfully! Our specialists will contact you soon.");
    reset();
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand Section */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <Logo className="justify-center md:justify-start" />
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-sm">
              GOT – “Guardian of Temptation”. A contemporary fragrance house crafting timeless scents that blend artistry with modern sensibilities.
            </p>
            <a
              href="https://instagram.com/gotlifeofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors duration-300 justify-center md:justify-start"
            >
              <Instagram className="h-4 w-4" />
              <span className="uppercase tracking-[0.15em] text-xs">
                @gotlifeofficial
              </span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6">
              Quick Links
            </h4>
            <nav className="flex flex-col space-y-4">
              {["Fragrances", "New", "Bestsellers", "About"].map(
                (link) => (
                  <Link
                    key={link}
                    to={`/${link.toLowerCase().replace(" ", "-")}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                  >
                    {link}
                  </Link>
                )
              )}
            </nav>
          </div>

          {/* Customer Care */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6">
              Support
            </h4>
            <nav className="flex flex-col space-y-4">
              {[
                { name: "Privacy Policy", to: "/privacy-policy" },
                { name: "Terms & Conditions", to: "/terms-and-conditions" },
                { name: "Refund Policy", to: "/refund-policy" },
                { name: "Contact", to: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] mb-6">
              Newsletter
            </h4>
            <p className="text-sm text-muted-foreground mb-4">
              Subscribe for exclusive scent launches
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="relative">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="w-full bg-transparent border-b border-border pb-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors duration-300"
              />
              <button
                type="submit"
                className="absolute right-0 bottom-2 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                →
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};
