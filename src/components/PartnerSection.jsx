import Image from "next/image";
import Link from "next/link";

const PartnerSection = () => {
  return (
    <div className="flex flex-wrap mx-[-15px] justify-center items-center">
      <hr />
      <h2 className="mb-10 text-xs font-medium text-center sm:text-base md:text-lg lg:text-2xl">
        Die ARISCORP unterhält auch Partnerschaften mit anderen Star Citizen
        Organisationen. Für nähere Informationen gern auf die jeweiligen Logos
        klicken.
      </h2>
      <div className="flex flex-wrap justify-between space-x-20">
        <Link href="">
          <a className="group">
            <figure className="mb-4">
              <Image
                src="https://cms.ariscorp.de/assets/227a8424-0ec8-416e-8f50-3b42b8e30636"
                width={250}
                height={250}
              />
              <figcaption>
                <p className="text-center no-underline underline-offset-2 decoration-1 decoration-secondary group-hover:underline">
                  501st UEE MARINE CORPS
                </p>
              </figcaption>
            </figure>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default PartnerSection;
