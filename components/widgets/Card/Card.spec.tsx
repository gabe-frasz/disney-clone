import { cleanup, render, screen } from "@testing-library/react";
import { afterAll, describe, expect, it } from "vitest";
import { Card } from "./Card";

const mockedBrandData = {
  id: "testId",
  slug: "someBrand",
  name: "Some Brand",
  logo: "https://picsum.photos/200",
  backgroundGif: "https://picsum.photos/200",
};

describe("Card component", () => {
  afterAll(() => {
    cleanup();
  });

  it("should render 'brand' variant", () => {
    const { debug } = render(
      <Card variant="brand" brandData={mockedBrandData} />
    );
    // eslint-disable-next-line testing-library/no-debugging-utils
    debug();

    expect(screen.getByTestId("brand-card-link")).toContainElement(
      screen.getByTestId("brand-card-video")
    );
  });
});
