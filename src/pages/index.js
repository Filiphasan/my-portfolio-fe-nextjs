import { useEffect, useState } from "react"
import { getAboutMe, getEducationList, getExperienceList, getInterestList, getProjectList, getSkillList } from "../services/about";
import Header from "../components/Header/Header";

export default function Home({ aboutMe, skills, experiences, educations, projects, interests }) {
  return (
    <h1 className="text-3xl font-bold underline">
      <Header />
    </h1>
  )
}

export async function getServerSideProps(context) {
  // getServerSideProps içerisinde kullandığımız service fonksiyonları Server tarafında çalışıt. Aynı fonksiyonu component içinde useEffect ile kullanırsak Client Side çalışır.
  const aboutMe = await getAboutMe();
  const skills = await getSkillList();
  const experiences = await getExperienceList();
  const educations = await getEducationList();
  const projects = await getProjectList();
  const interests = await getInterestList();
  return {
    props: {
      aboutMe,
      skills,
      experiences,
      educations,
      projects,
      interests
    },
  };
}
