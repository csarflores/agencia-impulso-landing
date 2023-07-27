import PersonalCard from "./cardPersonal";
import teamData from "./teamData";
import React from 'react';

const Team = () => {
  return (
    <>
      <section className="py-6 text-white dark:bg-gray-800 ">
        <div className="bg-fixed bg-cover bg-center bg-[url('/images/bg-team.svg')] container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
          <h2 className="text-5xl text-center font-bold leadi mt-12 sm:text-6xl">Un equipo de talentos dedicado a tu éxito</h2>
          <p className="lg:m-12 text-xl font-medium text-justify">Somos equipo de profesionales con basta experiencia y conocimientos especializados en diversas áreas empresariales y tecnológicas. Nos enfocamos en optimizar procesos y desarrollar estrategias efectivas para que ahorres tiempo y recursos, impulsando el crecimiento de tu empresa.</p>
          <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
            {teamData.map((person) => (
              <Card key={person.id} person={person} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Team;

interface Person {
  id: number;
  name: string;
  profession: string;
  description: string;
  linkedin: string;
  imageURL: string;
  imageDescription: string;
}

const Card: React.FC<{ person: Person }> = ({ person }) => {
  const { id, name, profession, description, linkedin, imageURL, imageDescription } = person;

  return (
    <PersonalCard
      id={id}
      name={name}
      profession={profession}
      description={description}
      linkedin={linkedin}
      imageURL={imageURL}
      imageDescription={imageDescription}
    />
  );
};