   <!-- <div className="w-full h-full flex flex-col items-center justify-between bg-red-300 relative">
        <div>
          <h1 className="uppercase text-white font-bold text-[14px]">
            trend magazine
          </h1>
        </div>
        <div>
          <h4 className="text-colorGray-light text-[14px]">
            Your guide to automotive adventure and outdoor lifestyle.
          </h4>
        </div>
        <div className="relative w-24 h-full lg:w-36 lg:h-12">
          <img
            src="/logotipo-texto.png"
            alt="logotipo"
            className="absolute w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="w-full flex flex-col items-center lg:items-start lg:justify-start gap-3">
        <h1 className="font-bold uppercase text-white text-[14px]">
          subscrever à newsletter
        </h1>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="border-b border-l border-b-white w-full p-2">
            <input
              type="text"
              placeholder="Nome"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="border-none placeholder:text-white text-white outline-none bg-transparent w-full h-full"
            />
          </div>
          <div className="border-b border-l border-b-white w-full p-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="border-none placeholder:text-white text-white outline-none bg-transparent w-full h-full"
            />
          </div>

          <div className="text-white flex items-start mt-3 w-full h-full hover:text-white/60 duration-200 transition-all ease-linear">
            <button type="submit" className="uppercase h-2 text-lg">
              {isLoading ? (
                <ClipLoader size={20} color="#FFF" />
              ) : (
                <span className="flex items-center">
                  subscrever
                  <GoArrowUpRight size={24} />
                </span>
              )}
            </button>
          </div>
        </form>
      </div>

      <div className="w-full flex flex-col gap-y-2 items-center lg:items-start">
        <h1 className="font-bold text-white text-[14px] uppercase">company</h1>
        <ul className="text-colorGray-light flex space-x-12 lg:space-x-0 lg:flex-col text-[14px] capitalize list-none">
          <li>contact</li>
          <li>advertise</li>
          <li>newsletter archive</li>
          <li>join our affiliate program</li>
        </ul>
        <div className="w-full flex flex-col items-center lg:items-start mt-2">
          <h2 className="font-bold text-white text-[14px] mb-2 uppercase">
            follow
          </h2>
          <div className="w-full flex justify-center lg:justify-start gap-2">
            {SOCIAL_MEDIA_LINKS.map((link, index) => (
              <Link key={index} to={link.link}>
                {link.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="lg:w-full grid grid-cols-2 lg:grid-cols-4 gap-2 lg:place-items-start place-items-center">
        <div className="bg-colorGray-light w-full h-full">1</div>
        <div className="bg-colorGray-light w-full h-full">2</div>
        <div className="bg-colorGray-light w-full h-full">3</div>
        <div className="bg-colorGray-light w-full h-full">4</div>
        <div className="bg-colorGray-light w-full h-full">5</div>
        <div className="bg-colorGray-light w-full h-full">6</div>
        <div className="bg-colorGray-light w-full h-full">7</div>
        <div className="bg-colorGray-light w-full h-full">8</div>
        <div className="bg-colorGray-light w-full h-full">9</div>
        <div className="bg-colorGray-light w-full h-full">10</div>
        <div className="bg-colorGray-light w-full h-full">11</div>
        <div className="bg-colorGray-light w-full h-full">12</div>
      </div>

      <div className="w-full bg-red-200 flex flex-col items-center justify-center">
        1
      </div> -->