import React, { useState } from "react";
import styled, {
  createGlobalStyle,
  ThemeProvider,
  css,
} from "styled-components";

const lightTheme = {
  background: "#fcfcfc",
  text: "#333",
  card: "#fff",
  accent: "#50c2a9",
  section: "#f4fffc",
  header: "#fff",
  footer: "#fff",
};

const darkTheme = {
  background: "#1e2a2e",
  text: "#e6f1f1",
  card: "#273a3f",
  accent: "#50c2a9",
  section: "#223135",
  header: "#26383c",
  footer: "#1e2a2e",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-family: "Poppins", sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: background 0.3s, color 0.3s;
  }
`;

const responsive = {
  mobile: (...args) => css`
    @media (max-width: 480px) {
      ${css(...args)}
    }
  `,
  tablet: (...args) => css`
    @media (max-width: 768px) {
      ${css(...args)}
    }
  `,
  laptop: (...args) => css`
    @media (max-width: 1024px) {
      ${css(...args)}
    }
  `,
  laptop2: (...args) => css`
    @media (max-width: 1444px) {
      ${css(...args)}
    }
  `,
};

const Header = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background: ${({ theme }) => theme.header};
  padding: 1.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  flex-wrap: nowrap;

  ${responsive.laptop`
    padding: 1rem 1.5rem;
  `}
`;

const Logo = styled.h1`
  font-size: 2rem;
  color: ${({ theme }) => theme.accent};
  font-weight: 700;
`;

const ThemeToggle = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.accent};
  font-size: 1.2rem;
  cursor: pointer;
`;

const Hero = styled.section`
  padding: 4rem 1.5rem 4rem 1.5rem;
  text-align: center;
  background: ${({ theme }) =>
    theme.background === "#fcfcfc"
      ? `linear-gradient(180deg, rgba(255, 255, 255, 0.45), rgba(250, 250, 250, 0.61)), url("https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-masterclass-de-chef_114360-24637.jpg?t=st=1744306829~exp=1744310429~hmac=4c74a07b96ae77fbebcf216e72a3d36f9e056e01761e90669668a35deb745efd&w=996") no-repeat center center`
      : `linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(30, 42, 46, 0.8)), url("https://img.freepik.com/vetores-gratis/ilustracao-do-conceito-de-masterclass-de-chef_114360-24637.jpg?t=st=1744306829~exp=1744310429~hmac=4c74a07b96ae77fbebcf216e72a3d36f9e056e01761e90669668a35deb745efd&w=996") no-repeat center center`};
  background-size: cover;

  ${responsive.laptop2`
    padding: 3rem 1rem;
    margin-top: 125px;
  `}

  ${responsive.laptop`
    padding: 3rem 1rem;
    margin-top: 90px;
    `}

${responsive.tablet`
    padding: 3rem 1rem;
    margin-top: 80px;
`}

  ${responsive.mobile`
    padding: 3rem 1rem;
    margin-top: 80px;
  `}
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.accent};

  ${responsive.mobile`
    font-size: 1.8rem;
  `}
  ${responsive.laptop`
    font-size: 1.8rem;
  `}
`;

const Subtitle = styled.p`
  margin-top: 1rem;
  font-size: 1.1rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;

  ${responsive.mobile`
    font-size: 1rem;
  `}
`;

const CTAButton = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.accent};
  color: #fff;
  font-weight: bold;
  border-radius: 10px;
  text-decoration: none;
  box-shadow: 0 4px 10px rgba(80, 194, 169, 0.2);
  transition: 0.3s;
  &:hover {
    transform: scale(1.05);
    background: #3ca893;
  }
`;

const Section = styled.section`
  padding: 4rem 2rem;
  background: ${({ theme }) => theme.section};
  text-align: center;
`;

const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.accent};
`;

const Features = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1.5rem;

  ${responsive.mobile`
    grid-template-columns: 1fr;
  `}
`;

const FeatureCard = styled.div`
  background: ${({ theme }) => theme.card};
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 1rem;
  background: ${({ theme }) => theme.footer};
  font-size: 0.9rem;
  color: #aaa;

  ${responsive.mobile`
    font-size: 0.8rem;
  `}
`;

const Page = styled.div``;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${responsive.mobile`
    width: 100%;
  `}
`;

const MenuToggle = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  color: ${({ theme }) => theme.accent};
  display: none;
  cursor: pointer;

  ${responsive.laptop`
    display: block;
  `}
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    font-weight: 500;
    transition: 0.3s;

    &:hover {
      color: ${({ theme }) => theme.accent};
    }
  }

  ${responsive.laptop`
    flex-direction: column;
    align-items: center;
    width: 100%;
    overflow: hidden;
    max-height: ${({ $isOpen }) => ($isOpen ? "500px" : "0")};
    transition: max-height 0.3s ease-in-out;
  `}
`;

export default function ChefFacilLanding() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Page>
        <Header>
          <HeaderTop>
            <Logo>ChefFácil</Logo>
            <MenuToggle onClick={() => setIsMenuOpen(!isMenuOpen)}>
              ☰
            </MenuToggle>
          </HeaderTop>

          <Nav $isOpen={isMenuOpen}>
            <a href="#comeceagora">Comece agora</a>
            <a href="#funcionalidades">Funcionalidades</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#como-funciona">Como funciona</a>
            <a href="#publico-alvo">Público</a>
            <a href="#depoimentos">Depoimentos</a>
            <a href="#contato">Contato</a>
            <ThemeToggle onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? "☀️" : "🌙"}
            </ThemeToggle>
          </Nav>
        </Header>

        <Hero>
          <Title>Planeje, cozinhe e organize sua semana sem complicações</Title>
          <Subtitle>
            O ChefFácil é seu assistente pessoal na cozinha. Encontre receitas
            com o que você tem em casa, crie cardápios personalizados e organize
            sua lista de compras em poucos cliques.
          </Subtitle>
          <CTAButton id="comeceagora" href="#contato">
            Comece agora — é grátis
          </CTAButton>
        </Hero>

        <Section id="funcionalidades">
          <SectionTitle>
            Funcionalidades que facilitam seu dia a dia
          </SectionTitle>
          <Features>
            <FeatureCard>
              <h4>Encontre receitas com o que tem na geladeira</h4>
              <p>
                Use ingredientes disponíveis na sua casa e descubra opções
                criativas para qualquer refeição.
              </p>
            </FeatureCard>
            <FeatureCard>
              <h4>Lista de compras automatizada</h4>
              <p>
                Selecione suas receitas e o app gera uma lista completa para ir
                ao mercado com praticidade.
              </p>
            </FeatureCard>
            <FeatureCard>
              <h4>Cardápios para a semana inteira</h4>
              <p>
                Monte um plano de refeições balanceado e prático com apenas
                alguns toques.
              </p>
            </FeatureCard>
          </Features>
        </Section>

        <Section id="beneficios">
          <SectionTitle>Por que escolher o ChefFácil?</SectionTitle>
          <p>
            O ChefFácil foi pensado para facilitar sua rotina na cozinha, seja
            você uma pessoa que mora sozinha ou parte de uma família ocupada.
          </p>
          <p>
            Com ele, você economiza tempo ao descobrir rapidamente o que
            cozinhar com os ingredientes que já tem em casa.
          </p>
          <p>
            Isso evita aquela indecisão diária e ainda ajuda a reduzir o
            desperdício de alimentos. Além disso, o planejamento de cardápios
            semanais promove uma alimentação mais equilibrada e variada,
            adaptada ao seu estilo de vida.
          </p>
          <p>
            Organize sua lista de compras em segundos e tenha mais controle
            sobre sua alimentação e seu tempo.
          </p>
        </Section>

        <Section id="como-funciona">
          <SectionTitle>Como funciona o ChefFácil?</SectionTitle>
          <p>Em apenas 3 passos, sua rotina na cozinha fica muito mais leve:</p>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              maxWidth: "600px",
              margin: "2rem auto",
              textAlign: "left",
            }}
          >
            <li>
              <strong>1. Escolha o que quer cozinhar:</strong> Procure receitas
              com base nos ingredientes que você já tem ou explore sugestões
              personalizadas.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>2. Monte seu cardápio:</strong> Monte um plano semanal
              prático e equilibrado, com receitas do seu gosto.
            </li>
            <li style={{ marginTop: "1rem" }}>
              <strong>3. Gere a lista de compras:</strong> Com um clique, você
              tem a lista completa do que precisa comprar — sem esquecer nada.
            </li>
          </ul>
        </Section>

        <Section id="publico-alvo">
          <SectionTitle>Feito para todos os tipos de cozinheiros</SectionTitle>
          <p>ChefFácil é ideal para quem:</p>
          <ul
            style={{
              maxWidth: "600px",
              margin: "2rem auto",
              textAlign: "left",
              lineHeight: "1.8",
            }}
          >
            <li>
              ✔️ Mora sozinho e quer praticidade sem abrir mão de uma
              alimentação melhor
            </li>
            <li>
              ✔️ É pai ou mãe e precisa organizar refeições da família sem
              estresse
            </li>
            <li>
              ✔️ Está começando a cozinhar e quer orientação fácil e prática
            </li>
            <li>
              ✔️ Quer gastar menos no mercado e evitar o desperdício de
              alimentos
            </li>
          </ul>
        </Section>

        <Section id="depoimentos">
          <SectionTitle>O que dizem nossos usuários</SectionTitle>
          <Features>
            <FeatureCard>
              <p>
                "Antes eu perdia tempo todo dia pensando no que fazer. Agora, em
                minutos, tenho tudo planejado. ChefFácil mudou minha rotina!"
              </p>
              <strong>— Camila, 29 anos</strong>
            </FeatureCard>
            <FeatureCard>
              <p>
                "Economizei mais de R$200 por mês só parando de comprar
                ingredientes repetidos. A lista automática é tudo!"
              </p>
              <strong>— João, 36 anos</strong>
            </FeatureCard>
            <FeatureCard>
              <p>
                "Uso com meus filhos e virou diversão montar o cardápio da
                semana juntos!"
              </p>
              <strong>— Flávia, mãe de 2</strong>
            </FeatureCard>
          </Features>
        </Section>

        <Section id="contato">
          <SectionTitle>Fale com a gente</SectionTitle>
          <p>Email: contato@cheffacil.app</p>
          <p>Instagram: @cheffacil.app</p>
        </Section>

        <Footer>© 2025 ChefFácil. Todos os direitos reservados.</Footer>
      </Page>
    </ThemeProvider>
  );
}
