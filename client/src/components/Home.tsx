const HERO_IMAGE = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663465649811/hNgYBav8yhTUCKgPCFqVze/geniobrasiliano_067f4aba.jpg';

export default function Home() {
  return (
    <section
      id="home"
      className="w-full h-screen bg-no-repeat relative pt-20 md:pt-0 overflow-hidden"
      style={{
        backgroundImage: `url(${HERO_IMAGE})`,
        backgroundAttachment: 'fixed',
        backgroundSize: '200%',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay opcional para melhorar legibilidade */}
      <div className="absolute inset-0 bg-black/5"></div>
    </section>
  );
}
