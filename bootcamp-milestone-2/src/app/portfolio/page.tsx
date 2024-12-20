// app/portfolio/page.tsx
import { getPortfolios } from "../portfolioData";

export default async function portfolioPage() {
  const portfolios = await getPortfolios();

  if (!portfolios) {
    return <p>Failed to fetch portfolios or no portfolios available.</p>;
  }

  // returning the portfolio list
  return (
    <div>
      <h1>Portfolios List</h1>
      <ul>
        {portfolios.map((portfolio: any) => (
          <li key={portfolio.slug}>
            <h2>{portfolio.title}</h2>
            <p>{portfolio.description}</p>
            <small>{new Date(portfolio.date).toLocaleDateString()}</small>
            <a href={`/porfolios/${portfolio.slug}`}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
