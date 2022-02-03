import { useState } from "react";
import Link from "next/link";
import { DeFlag, EnglFlag, SCLogo, SQ42Logo, RSILogo, CIGLogo } from "./icons";

const Footer = () => {
  const [showGer, setShowGer] = useState(true);

  return (
    <footer className="py-5 mt-5 bg-black border-t-2 border-solid border-secondary" style={{ transition: "left .5s ease,right .5s ease" }}>
      <div className="container px-4 mx-auto">
        <div className="flex pb-6">
          <h2 className="mr-5 text-2xl">/<span>/</span>Disclaimer</h2>
          <div className="flex gap-5">
            <div onClick={() => setShowGer(true)} className="cursor-pointer">
              <DeFlag width="35" height="20" />
            </div>
            <div onClick={() => setShowGer(false)} className="cursor-pointer">
              <EnglFlag width="35" height="20" />
            </div>
          </div>
        </div>
        <div className={showGer ? "block" : "hidden"}>
          <p className="italic">
          &ldquo;Diese Website wird nicht von oder der Unternehmensgruppe Cloud
            Imperium oder Roberts Space Industries geführt. Alle Spielinhalte
            und -materialien sind copyright Cloud Imperium Rights LLC und Cloud
            Imperium Rights Ltd. Star Citizen®, Squadron 42®, Roberts Space
            Industries® und Cloud Imperium® sind eingetragene Marken von Cloud
            Imperium Rights LLC. Alle Rechte vorbehalten.&rdquo;
          </p>
        </div>

        <div className={showGer ? "hidden" : "block"}>
          <p className="italic">
          &ldquo;This is an unofficial Star Citizen fansite, not affiliated with the
            Cloud Imperium group of companies. All content on this site not
            authored by its host or users are property of their respective
            owners. Star Citizen®, Roberts Space Industries® and Cloud Imperium
            ® are registered trademarks of Cloud Imperium Rights LLC&rdquo;
          </p>
        </div>

        <div className="flex float-right space-x-3">
          <a href="https://robertsspaceindustries.com/star-citizen" target="_blank" rel="noreferrer">
            <SCLogo width="48" height="48" />
          </a>
          <a href="https://robertsspaceindustries.com/squadron42" target="_blank" rel="noreferrer">
            <SQ42Logo width="48" height="48" />
          </a>
          <a href="https://robertsspaceindustries.com" target="_blank" rel="noreferrer">
            <RSILogo width="48" height="48" />
          </a>
          <a href="https://cloudimperiumgames.com/" target="_blank" rel="noreferrer">
            <CIGLogo width="48" height="48" />
          </a>
        </div>

        <div className="w-full pt-3 text-sm">
          <span
            dangerouslySetInnerHTML={{
              __html: "&copy; " + new Date().getFullYear() + " ArisCorp ",
            }}
          />
          <span> - </span>
          <Link href="/credits">
            <a className="text-secondary">Credits</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
