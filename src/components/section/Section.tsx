import { ReactNode } from "react";
type Props = {
  children: ReactNode;
}
const Section = ({ children }: Props) => {
  return (
    <>
      <section className="text-white py-16 px-4 md:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <div className="max-w-4xl text-center">
            {children}
          </div>
        </div>
      </section>
    </>
  );
}

export default Section;