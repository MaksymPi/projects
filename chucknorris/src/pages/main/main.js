import React from "react";

import { Button } from "../../components/button/button";
import { Quote } from "../../components/quote/quote";
import { useMainState } from "./main.state";

export const Main = () => {
  const { isLoading, categories, quote, fetchQuote } = useMainState();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div>
    <div>
        {categories.map((category, index) => (
          <Button key={index} fetchQuote={fetchQuote}>
            {category}
          </Button>
        ))}
    </div>
    <Quote>{quote }</Quote>
    </div>
  );
};
