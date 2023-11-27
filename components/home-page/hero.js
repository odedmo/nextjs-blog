import Image from "next/image";
import classes from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/max.png"
          alt="An image showing Max"
          width={300}
          height={300}
        />
      </div>
      <h1>Blog Title</h1>
      <p>blog description</p>
    </section>
  );
};

export default Hero;
