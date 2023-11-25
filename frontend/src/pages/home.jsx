import Hero from "../components/hero"
import Features from "../components/features"
import iconChat from "../assets/img/icon-chat.png"
import iconMoney from "../assets/img/icon-money.png"
import iconSecu from "../assets/img/icon-security.png"


function Home () {
  return (
    <main>
      <Hero />
      <section className="features">
        <h2 className="sr-only">Features</h2>
        <Features
          imageSrc={iconChat}
          imageAlt="Chat Icon"
          title="You are our #1 priority"
          text="Need to talk to a representative? You can get in touch through our
          24/7 chat or through a phone call in less than 5 minutes."
         />
        <Features
          imageSrc={iconMoney}
          imageAlt="Money Icon"
          title="More savings means higher rates"
          text="The more you save with us, the higher your interest rate will be!"
        />
        <Features
          imageSrc={iconSecu}
          imageAlt="Security Icon"
          title="Security you can trust"
          text="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </main>
  )}

  export default Home