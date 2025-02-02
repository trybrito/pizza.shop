import { render } from "@testing-library/react";

import { OrderStatus } from "@/components/order-status";

describe("Order status", () => {
  it("should display the right text when order is pending", () => {
    const wrapper = render(<OrderStatus status="pending" />);
    // wrapper.debug();
    const statusTextElement = wrapper.getByText("Pendente");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusTextElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-slate-400");
  });

  it("should display the right text when order is canceled", () => {
    const wrapper = render(<OrderStatus status="canceled" />);
    // wrapper.debug();
    const statusTextElement = wrapper.getByText("Cancelado");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusTextElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-rose-500");
  });

  it("should display the right text when order is processing", () => {
    const wrapper = render(<OrderStatus status="processing" />);
    // wrapper.debug();
    const statusTextElement = wrapper.getByText("Em preparo");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusTextElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  it("should display the right text when order is delivering", () => {
    const wrapper = render(<OrderStatus status="delivering" />);
    // wrapper.debug();
    const statusTextElement = wrapper.getByText("Em entrega");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusTextElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-amber-500");
  });

  it("should display the right text when order is delivered", () => {
    const wrapper = render(<OrderStatus status="delivered" />);
    // wrapper.debug();
    const statusTextElement = wrapper.getByText("Entregue");
    const badgeElement = wrapper.getByTestId("badge");

    expect(statusTextElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-emerald-500");
  });
});
