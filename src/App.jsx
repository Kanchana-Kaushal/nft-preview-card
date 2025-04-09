function App() {
  return (
    <>
      <main className="bg-Very-dark-blue-main-BG flex min-h-screen items-center justify-center">
        <section className="bg-Very-dark-blue-card-BG w- w-9/10 max-w-xs rounded-2xl p-6 drop-shadow-2xl">
          <div className="relative">
            <img
              src="/nft-preview-card/images/image-equilibrium.jpg"
              alt="NFT preview"
              className="rounded-lg"
            />

            <div className="bg-Cyan/50 absolute inset-0 flex cursor-pointer items-center justify-center rounded-md opacity-0 transition-opacity duration-150 ease-in-out hover:opacity-100">
              <img src="/nft-preview-card/images/icon-view.svg" alt="" />
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <h1 className="text-White hover:text-Cyan w-fit cursor-pointer text-2xl font-semibold transition-colors duration-75 ease-in">
              Equilibrium #3429
            </h1>

            <p className="text-Soft-blue">
              Our Equilibrium collection promotes balance and calm.
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <img
                  src="/nft-preview-card/images/icon-ethereum.svg"
                  alt="Etherium"
                />
                <p className="text-Cyan font-semibold">0.041 ETH</p>
              </div>

              <div className="flex items-center gap-2">
                <img
                  src="/nft-preview-card/images/icon-clock.svg"
                  alt="time left"
                />
                <p className="text-Soft-blue">3 days left</p>
              </div>
            </div>

            <hr className="text-Very-dark-blue-line" />

            <div className="flex items-center gap-4">
              <img
                src="/nft-preview-card/images/image-avatar.png"
                alt="Jules Wyvern Avatar"
                className="ring-White size-8 rounded-full ring-1"
              />

              <p className="text-Soft-blue">
                Creation of{" "}
                <span className="hover:text-Cyan cursor-pointer text-white transition-colors duration-75 ease-in">
                  Jules Wyvern
                </span>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
