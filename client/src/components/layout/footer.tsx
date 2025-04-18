import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f7] py-20 border-t border-[#d2d2d7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section with logo and navigation */}
        <div className="grid md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-xl font-semibold tracking-tight text-primary-gradient">
                Dreamer AI Studios
              </span>
            </div>
            <p className="text-[#86868b] mb-6 max-w-md text-lg leading-relaxed">
              We don't build AI. We imagine what could be, then make it real. 
              The intersection of imagination and intelligence.
            </p>
          </div>
          
          <div>
            <h3 className="text-xs font-normal mb-5 uppercase tracking-wider text-[#6e6e73]">Explore</h3>
            <ul className="space-y-3">
              {['imagine', 'why', 'how', 'create', 'who', 'connect'].map((item) => (
                <li key={item} className="footer-link">
                  <a 
                    href={`#${item}`} 
                    className="text-[#424245] hover:text-[#0071e3] transition-colors block w-fit group"
                  >
                    <span className="flex items-center">
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                      <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                    </span>
                    <span className="block h-px w-0 bg-[#0071e3] group-hover:w-full transition-all duration-300"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xs font-normal mb-5 uppercase tracking-wider text-[#6e6e73]">Connect</h3>
            <address className="text-[#86868b] not-italic mb-4 text-sm leading-relaxed">
              Shangri - La Center, No.9 Xinquan South Road,<br />
              Gulou District, Fuzhou City, CN
            </address>
            
            {[
              { href: "mailto:hi@dreamer.xyz", text: "hi@dreamer.xyz" },
              { href: "https://dreamer.xyz", text: "dreamer.xyz" },
              { href: "tel:+86-4000420719", text: "+86-4000420719" }
            ].map((link, index) => (
              <p className="mb-2" key={index}>
                <a 
                  href={link.href} 
                  className="text-[#424245] hover:text-[#0071e3] transition-colors block w-fit group text-sm"
                >
                  <span className="flex items-center">
                    {link.text}
                    <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-200" />
                  </span>
                  <span className="block h-px w-0 bg-[#0071e3] group-hover:w-full transition-all duration-300"></span>
                </a>
              </p>
            ))}
          </div>
        </div>
        
        {/* Bottom section with legal info */}
        <div className="mt-16 pt-10 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#86868b] mb-4 md:mb-0 text-xs">© 2025 Dreamer AI Studios. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <a href="#" className="text-[#86868b] hover:text-[#0071e3] transition-colors text-xs">Privacy</a>
            <a href="#" className="text-[#86868b] hover:text-[#0071e3] transition-colors text-xs">Terms</a>
            <a href="#" className="text-[#86868b] hover:text-[#0071e3] transition-colors text-xs">Cookie Policy</a>
            <p className="text-[#86868b] text-xs">备案号: 闽ICP备2024077756号</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
