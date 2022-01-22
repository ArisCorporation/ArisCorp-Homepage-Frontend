  const RectruitmentSection = () => {
    return (
      <div className="px-4">
        <h1 className="text-lg sm:text-3xl md:text-4xl">
          WIR SUCHEN NEUE <span className="text-primary">MITGLIEDER</span>
        </h1>
        <hr />
        <div className="px-4 mb-12">
          <h2 className="text-2xl">REKRUTIERUNG:</h2>
          <hr className="hr-short"/>
          <p className="">
            Falls du nun Interesse hast dich bei uns zu bewerben, dann kannst du
            das ganz einfach über unseren Discord machen.
          </p>
        </div>
        <div className="py-12 mx-3 text-center border-l-2 border-solid border-secondary px-9 bg-[#00000040]">
          <p className="mt-5 text-secondary">Mitglied werden</p>
          <p className="py-1 pr-1">
            Es gibt ein paar Mindestanforderungen die du aber bestimmt erfüllen
            wirst.
          </p>
          <button className="px-4 py-1 mx-auto my-5 font-thin text-white transition-colors duration-300 bg-secondary hover:text-gray-800">
            Jetzt bewerben
          </button>
        </div>
      </div>
    );
  };

  export default RectruitmentSection;
