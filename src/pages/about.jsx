const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-2 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Life
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos minus
        nobis, excepturi consectetur similique provident aliquam fugit
        reprehenderit, ipsam aperiam autem sed neque odit ipsa consequuntur
        tempora expedita debitis architecto unde impedit voluptatibus,
        repudiandae labore nihil maxime. Minus, ipsum est!
      </p>
    </>
  );
};

export default About;
