import { Separator } from "@/components/ui/separator";
import { Code2 } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="#" className="flex font-bold items-center">
              <Code2 className="w-9 h-9 mr-2 p-2 bg-gradient-to-tr from-emerald-500 via-primary to-amber-400 rounded-lg border border-secondary text-white" />

              <h3 className="text-2xl">BoorgerKirk</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Team</h3>
            <div>
              <Link href="#team" className="opacity-60 hover:opacity-100">
                Members
              </Link>
            </div>

            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Services
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Contact
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Services</h3>
            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                Websites
              </Link>
            </div>

            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                AI Automation
              </Link>
            </div>

            <div>
              <Link href="#services" className="opacity-60 hover:opacity-100">
                ML Prototypes
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Project</h3>
            <div>
              <Link href="#benefits" className="opacity-60 hover:opacity-100">
                Benefits
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>

            <div>
              <Link href="#contact" className="opacity-60 hover:opacity-100">
                Start
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Focus</h3>
            <div>
              <Link href="#sponsors" className="opacity-60 hover:opacity-100">
                Web Apps
              </Link>
            </div>

            <div>
              <Link href="#sponsors" className="opacity-60 hover:opacity-100">
                Data
              </Link>
            </div>

            <div>
              <Link href="#sponsors" className="opacity-60 hover:opacity-100">
                Automation
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2026 Designed and developed by BoorgerKirk Team.
          </h3>
        </section>
      </div>
    </footer>
  );
};
