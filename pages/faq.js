// import Head from "next/head";
import Link from "../src/components/Link";
import Title from "../src/components/Title";
import PageTitle from "../src/components/PageTitle";
// import { useState, useEffect } from "react";

// export async function getServerSideProps() {
//   console.log("Em modo DEV, sempre roda! A cada acesso")
//   console.log("Rodando a cada acesso que voce recebe")

export async function getStaticProps() {
  console.log("Em modo DEV, sempre roda! A cada acesso");
  console.log("Roda somente em build time");

  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((respostaDoServidor) => {
      return respostaDoServidor.json();
    })
    .then((resposta) => {
      return resposta;
    });

  return {
    props: {
      faq,
    }, // will be passed to the page component as props
  };
}

const FaqPage = ({ faq }) => {
  console.log(faq);

  return (
    <>
      <PageTitle>FAQ - Alura Cases Campanha</PageTitle>
      <Title as="h2">Alura Case - Páginas de perguntas FAQ</Title>
      <Link href="/" passHref>
        Alura Case - ir para a Home
      </Link>
      <ul>
        {faq.map(({ answer, question }) => (
          <li key={question}>
            <article>
              <h2>{question}</h2>
              <p>{answer}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FaqPage;
