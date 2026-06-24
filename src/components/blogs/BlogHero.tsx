import devicesImg from "@/assets/blog-hero-devices.jpg";

export function BlogHero() {
  return (
    <section className="w-full bg-[#eaf2fb]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left: text */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-6 text-brand">
            <span className="text-2xl">›››</span>
          </div>
          <h1 className="font-extrabold tracking-[0.25em] text-3xl sm:text-4xl text-brand">
            OUR
          </h1>
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-2">
            <span className="hidden lg:block h-[3px] w-16 bg-brand" />
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight text-brand">
              BLOGS
            </h2>
            <span className="hidden lg:block h-[3px] w-16 bg-brand" />
          </div>
        </div>

        {/* Right: editable image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={devicesImg}
            alt="Our Blogs"
            width={1024}
            height={768}
            className="w-full max-w-xl h-auto"
          />
        </div>
      </div>
    </section>
  );
}
